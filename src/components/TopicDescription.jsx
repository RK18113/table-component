import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function TopicDescription({ values }) {
  const containerRef = useRef(null);
  const rowRefs = useRef([]);
  const lineRefs = useRef([]);
  const valueRefs = useRef([]);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    timeline.fromTo(
      lineRefs.current,
      {
        scaleX: 0,
        transformOrigin: "left",
      },
      {
        scaleX: 1,
        duration: 0.5,
      }
    );

    timeline.fromTo(
      rowRefs.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 0.3,
      }
    );

    timeline.fromTo(
      valueRefs.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 0.3,
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="text-white w-[60%]">
      {Object.entries(values).map(([key, value], index) => (
        <div key={key} className="relative">
          <div className="flex flex-wrap justify-start items-center">
            <div className="overflow-hidden">
              <div
                ref={(el) => (rowRefs.current[index] = el)}
                className="text-sm text-green-500 tracking-wider uppercase"
              >
                {key}
              </div>
            </div>

            <div className="overflow-hidden ml-[25vw]">
              <div
                ref={(el) => (valueRefs.current[index] = el)}
                className="text-sm tracking-wider uppercase"
              >
                {value}
              </div>
            </div>

            <div className="flex-grow w-full py-3">
              <div
                ref={(el) => (lineRefs.current[index] = el)}
                className="h-[1px] w-full bg-white"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopicDescription;
