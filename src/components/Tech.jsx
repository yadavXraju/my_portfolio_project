import { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="relative w-28 h-28 flex justify-center items-center cursor-pointer"
          onClick={() => setHoveredTech(technology.name)}
          onMouseLeave={() => setHoveredTech(null)}

        >
          <BallCanvas icon={technology.icon} />
          {hoveredTech === technology.name && (
            <div className="absolute bottom-[-30px] bg-black text-white px-2 py-1 rounded-md text-sm opacity-90">
              {technology.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
