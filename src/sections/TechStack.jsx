import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
import useInView from "../hooks/useInView";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    category: "Frontend & Web",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "AI / ML & Intelligence",
    skills: ["AI Integration", "Python AI Libraries", "NLP & Prompting", "Exploring ML & Agentic AI"],
  },
  {
    category: "Core Computer Science",
    skills: ["Data Structures & Algorithms (C++)", "Problem Solving", "Object-Oriented Programming (OOP)"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Responsive Design"],
  },
];

const TechStack = () => {
  const [techRef, isTechInView] = useInView({ threshold: 0.05, rootMargin: "150px" });

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
        },
      }
    );
  });

  return (
    <div id="skills" ref={techRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Skills & Technologies"
          sub="⚡ My Technical Toolkit"
        />

        {/* 3D Interactive Floating Tech Models */}
        <div className="tech-grid mt-14">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper pointer-events-none md:pointer-events-auto">
                  <TechIconCardExperience model={techStackIcon} isInView={isTechInView} />
                </div>
                <div className="padding-x w-full text-center">
                  <p className="font-semibold text-white tracking-wide">{techStackIcon.name}</p>
                  {techStackIcon.category && (
                    <span className="text-xs text-white-50/70 font-mono block mt-0.5">
                      {techStackIcon.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categorized Skills Grid - Unified Dark Theme */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="card-border rounded-2xl p-6 bg-black-100/90 border border-white/10 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all" />
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-black-200 text-white-50 border border-white/10 hover:border-cyan-400/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
