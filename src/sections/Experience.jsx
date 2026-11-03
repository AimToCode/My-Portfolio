import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animate timeline cards into view
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    // Smooth scrubbed timeline progress indicator
    gsap.to(".timeline", {
      scaleY: 0,
      transformOrigin: "bottom bottom",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate experience detail text
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        x: 30,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 75%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Leadership & Education Journey"
          sub="💼 Milestones & Highlights"
        />
        <div className="mt-24 relative">
          <div className="relative z-50 xl:space-y-32 space-y-12">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper items-center">
                <div className="xl:w-2/6 w-full">
                  <GlowCard card={card} showStars={false}>
                    <div className="rounded-lg overflow-hidden border border-white/10 aspect-[16/10] bg-black-200">
                      <img
                        src={card.imgPath}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6 w-full">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-16 md:gap-8 gap-4 relative z-20 w-full">
                      <div className="timeline-logo p-2 md:p-3 overflow-hidden">
                        <img src={card.logoPath} alt="badge" className="w-full h-full object-contain" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-2xl md:text-3xl text-white">
                          {card.title}
                        </h3>
                        {card.institution && (
                          <p className="mt-1.5 text-white/80 font-medium text-sm md:text-base flex items-center gap-1.5">
                            <span className="text-cyan-400">🏛️</span>
                            <span>{card.institution}</span>
                          </p>
                        )}
                        <p className="my-2.5 text-cyan-400 font-medium text-sm md:text-base flex items-center gap-2">
                          <span>🗓️</span>
                          <span>{card.date}</span>
                        </p>
                        <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-3">
                          {card.sectionLabel || "Key Contributions"}
                        </p>
                        <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-sm md:text-base leading-relaxed">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
