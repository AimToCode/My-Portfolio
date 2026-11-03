import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for opportunities &amp; projects</span>
            </div>

            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="tech-icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl text-base leading-relaxed relative z-10 pointer-events-none">
              Hi, I’m <span className="text-white font-semibold">Lakshya Kahar</span> &mdash; an Aspiring Software Developer, Frontend Developer &amp; AI/ML Enthusiast from Bhopal, India. Passionate about crafting modern web experiences and solving real-world challenges through code.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                text="See My Work"
                className="md:w-72 md:h-16 w-56 h-12"
                id="work"
              />
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-lg border border-white/20 hover:border-white/60 bg-black/40 hover:bg-white/10 text-white font-medium transition-all text-sm md:text-base flex items-center gap-2"
              >
                Let’s Talk 🚀
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
