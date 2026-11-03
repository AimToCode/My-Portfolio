import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg max-w-7xl mx-auto mt-10">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1.5 hover:shadow-xl group"
        >
          <div className="size-14 flex items-center justify-center rounded-2xl bg-black-200 border border-white/10 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all duration-300">
            <img src={imgPath} alt={title} className="w-7 h-7 object-contain" />
          </div>
          <h3 className="text-white text-2xl font-bold mt-2 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-white-50 text-base leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
