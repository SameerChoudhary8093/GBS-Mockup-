import imgNeha from "../../../../assets/NEHA.png";
import imgAnkur from "../../../../assets/ANKUR.png";
import imgSarmad from "../../../../assets/SARMAD.png";

const researchers = [
  {
    name: "DR. NEHA KAPOOR",
    image: imgNeha,
  },
  {
    name: "DR. SURAJ K SINGH",
    image: "https://c.animaapp.com/mn0n10j9vDypoz/img/image-15.png",
  },
  {
    name: "DR. ANKUR JAIN",
    image: imgAnkur,
  },
  {
    name: "DR. SARMAD MOIN",
    image: imgSarmad,
  },
  {
    name: "DR. KISHAN KUMAR",
    image: "https://c.animaapp.com/mn0n10j9vDypoz/img/image-18.png",
  },
  {
    name: "KRITI SHRIVASTAV",
    image: "https://c.animaapp.com/mn0n10j9vDypoz/img/image-19.png",
  },
];

export const ResearchHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center py-10">
      {/* Section heading */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[13.5px] sm:text-[24px] md:text-[34.6px] text-center tracking-[0.5px] md:tracking-[1.75px] leading-[1.4] md:leading-[44.9px] flex flex-col items-center">
          <span className="whitespace-nowrap">HIGHLIGHTS OF OUR PURSUIT OF IMPACTFUL</span>
          <span className="whitespace-nowrap">RESEARCH &amp; GLOBAL EXCELLENCE</span>
        </h2>
        {/* Gold divider bar */}
        <div className="mt-4 w-24 h-2 bg-[#c1963f] rounded-full" />
      </div>

      {/* Researcher profile cards */}
      <div className="flex flex-row flex-wrap justify-center gap-[25.1px] mt-4">
        {researchers.map((researcher, index) => (
          <div key={index} className="flex flex-col items-center gap-[16.7px]">
            {/* Photo card natively rendered grayscale */}
            <div className="w-[170.5px] h-[227.33px] rounded-[16.7px] overflow-hidden shadow-[0px_10.44px_10.44px_-5.22px_#0000000a,0px_20.88px_26.1px_-5.22px_#0000001a]">
              <img
                className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply"
                alt={researcher.name}
                src={researcher.image}
              />
            </div>
            {/* Name label */}
            <div className="flex items-center justify-center w-[170.5px]">
              <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[12.5px] text-center tracking-[1.25px] leading-[18.8px] whitespace-nowrap">
                {researcher.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
