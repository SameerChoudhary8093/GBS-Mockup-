import imgNeha from "../../../../assets/NEHA.png";
import imgAnkur from "../../../../assets/ANKUR.png";
import imgSarmad from "../../../../assets/SARMAD.png";
import imgGaurav from "../../../../assets/Gaurav.png";

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
    name: "DR. GAURAV SHARMA",
    image: imgGaurav,
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
        <h2 className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[20px] sm:text-[24px] md:text-[34.6px] text-center tracking-[0.5px] md:tracking-[1.75px] leading-[1.4] md:leading-[44.9px]">
          Leadership through innovation & excellence.
        </h2>
        {/* Gold divider bar */}
        <div className="mt-4 w-24 h-2 bg-[#c1963f] rounded-full" />
      </div>

      {/* Researcher profile cards */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 sm:gap-[25.1px] mt-4 max-w-[400px] sm:max-w-none">
        {researchers.map((researcher, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 sm:gap-[16.7px] ${index < 4 ? 'w-[21%] sm:w-auto' : 'w-[28%] sm:w-auto'
              }`}
          >
            {/* Photo card natively rendered grayscale */}
            <div className="w-[80px] h-[106px] sm:w-[170.5px] sm:h-[227.33px] rounded-[10px] sm:rounded-[16.7px] overflow-hidden shadow-[0px_10.44px_10.44px_-5.22px_#0000000a,0px_20.88px_26.1px_-5.22px_#0000001a]">
              <img
                className="w-full h-full object-top object-cover grayscale contrast-125 mix-blend-multiply"
                alt={researcher.name}
                src={researcher.image}
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            {/* Name label */}
            <div className="flex items-center justify-center w-full px-1">
              <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[7.5px] sm:text-[12.5px] text-center tracking-[0.5px] sm:tracking-[1.25px] leading-tight whitespace-pre-wrap sm:whitespace-nowrap">
                {researcher.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement sub-text */}
      <div className="mt-12 px-6 max-w-[1240px] flex flex-col items-center">
        <p className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[18px] sm:text-[20px] md:text-[24px] text-center tracking-[0.5px] leading-relaxed">
          Our researchers included among <span className="text-[#c1963f]">2% Stanford list</span> to, highest cited at <span className="text-[#c1963f]">Q1</span>.
        </p>
      </div>
    </section>
  );
};
