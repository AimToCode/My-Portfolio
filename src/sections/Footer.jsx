import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer border-t border-white/10 mt-24 py-8">
      <div className="footer-container max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white font-bold text-base tracking-wide">Lakshya Kahar</p>
          <p className="text-white-50/70 text-xs mt-1">
            Aspiring Software Developer &amp; AI/ML Enthusiast • Bhopal, India
          </p>
        </div>

        {/* Social Icons: GitHub, LinkedIn, Instagram */}
        <div className="socials flex items-center gap-4">
          {socialImgs.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon w-11 h-11 rounded-full bg-black-100 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group"
              title={social.label || social.name}
              aria-label={social.name}
            >
              <img
                src={social.imgPath}
                alt={social.name}
                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center text-center md:text-end">
          <p className="text-xs text-white-50">
            &copy; {new Date().getFullYear()} Lakshya Kahar. All rights reserved.
          </p>
          <p className="text-[11px] text-white-50/50 mt-0.5">
            Crafted with React, Three.js &amp; GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
