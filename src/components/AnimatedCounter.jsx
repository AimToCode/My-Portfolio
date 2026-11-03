import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];
      if (!numberElement || !item) return;

      const isNumeric = typeof item.value === "number";

      if (isNumeric) {
        gsap.set(numberElement, { innerText: "0" });

        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: "#counter",
            start: "top 85%",
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix || ""}`;
          },
        });
      } else {
        // Smooth entrance reveal for text metrics like "C++ / DSA" and "B.Tech"
        gsap.fromTo(
          numberElement,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#counter",
              start: "top 85%",
            },
          }
        );
      }
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32 max-w-7xl mx-auto">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => {
          const isNumeric = typeof item.value === "number";
          return (
            <div
              key={index}
              ref={(el) => el && (countersRef.current[index] = el)}
              className="card-border rounded-2xl p-6 md:p-8 flex flex-col justify-center transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 min-h-[140px]"
            >
              <div className="counter-number text-cyan-300 font-extrabold text-3xl md:text-4xl xl:text-5xl mb-2 tracking-tight">
                {isNumeric ? `0${item.suffix || ""}` : item.value}
              </div>
              <div className="text-white-50 text-sm md:text-base font-medium">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCounter;
