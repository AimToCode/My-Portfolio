import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15 * index,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="w-full section-padding px-5 md:px-16">
      <TitleHeader
        title="Featured AI & Web Projects"
        sub="🚀 Real-World Solutions Powered by Code"
      />

      <div className="mt-16 flex flex-col gap-16 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-border rounded-2xl overflow-hidden p-6 md:p-10 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/5 group"
            >
              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-center justify-between`}
              >
                {/* Visual / Screenshot Wrapper */}
                <div className="w-full lg:w-7/12 relative group/img overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-lg">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black-200">
                    <img
                      src={project.imgPath}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
                  </div>

                  {/* Floating Action Pill on image */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all shadow-md"
                  >
                    <span>Visit Live Site</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-5/12 flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {project.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white-50 border border-white/15">
                      {project.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-cyan-400/90 font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-white-50 text-sm md:text-base leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Key Features</h4>
                    <ul className="space-y-1.5 text-xs md:text-sm text-white-50">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5">✦</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-black-200 text-white-50 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Button */}
                  <div className="pt-2">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-cyan-400/20"
                    >
                      <span>Explore Live Demo</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AppShowcase;
