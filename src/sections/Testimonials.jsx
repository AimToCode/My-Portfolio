import { learningFrontiers } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="learning" className="flex-center section-padding">
      {/* Anchor fallback for old links */}
      <span id="testimonials" className="sr-only"></span>

      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="What I'm Learning &amp; Exploring Next"
          sub="🔮 Continuous Growth &amp; Tech Horizons"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 items-stretch">
          {learningFrontiers.map((item, index) => (
            <GlowCard
              key={index}
              showStars={false}
              className="h-full flex flex-col justify-between p-8 border-white/10 hover:border-cyan-500/40"
            >
              <div className="flex flex-col gap-5">
                {/* Top Row: Icon + Progress Badge */}
                <div className="flex items-center justify-between gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black-200 border border-white/10 flex items-center justify-center text-3xl shadow-inner">
                    <span>{item.icon}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${item.progressColor}`}
                  >
                    {item.progress}
                  </span>
                </div>

                {/* Category & Title */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {item.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white-50 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Focus Topics / Skill Tags */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="text-xs font-mono uppercase text-white/50 mb-3">Key Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-black-200 text-white-50 border border-white/10 hover:border-cyan-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
