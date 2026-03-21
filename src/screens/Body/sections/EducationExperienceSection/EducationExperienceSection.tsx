import { Card, CardContent } from "../../../../components/ui/card";

// Feature cards data
const featureCards = [
  { number: "01", title: "AI-POWERED LEARNING\nECOSYSTEM" },
  { number: "02", title: "WORLD-CLASS\nINFRASTRUCTURE &\nSMART CLASSROOMS" },
  { number: "03", title: "150+ SKILLS LABS &\nINNOVATION STUDIOS" },
  { number: "04", title: "30,000+ STUDENTS FROM\n50+ COUNTRIES" },
  { number: "05", title: "START-UP INCUBATION &\nENTREPRENEURSHIP" },
  { number: "06", title: "VIBRANT RESIDENTIAL\nCAMPUS LIFE" },
];

export const EducationExperienceSection = (): JSX.Element => {
  return (
    <section className="w-full flex bg-white py-24">
      <div className="w-full max-w-[1200px] mx-auto px-10 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-0">
          <div className="flex items-center justify-center [font-family:'Lato',Helvetica] font-normal text-transparent text-[36.2px] text-center tracking-[-0.90px] leading-[43.4px]">
            <span className="font-black text-[#0d244b] tracking-[-0.33px]">
              EXPERIENCE THE{" "}
            </span>
            <span className="font-black text-[#c1963f] tracking-[-0.33px]">
              FUTURE
            </span>
            <span className="font-black text-[#0d244b] tracking-[-0.33px]">
              {" "}
              OF EDUCATION
            </span>
          </div>

          <div className="mt-[26px] flex items-center justify-center [font-family:'Lato',Helvetica] font-black text-slate-500 text-xs text-center tracking-[3.00px] leading-[18px] whitespace-nowrap">
            WHERE INNOVATION MEETS AMBITION, AND LEARNERS BECOME LEADERS.
          </div>

          <div className="w-24 h-1.5 mt-[22px] bg-[#0d244b] rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left: Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {featureCards.map((card) => (
              <Card
                key={card.number}
                className="rounded-xl border-[0.5px] border-solid border-[#c1963f] shadow-[6px_8px_10.9px_#00000021] bg-[#ffffff01] p-0"
              >
                <CardContent className="p-0 relative flex flex-row items-start py-[17px] px-[17px] gap-0 min-h-[70px]">
                  {/* Number */}
                  <div className="flex-shrink-0 w-[35px] [font-family:'Lato',Helvetica] font-black text-[#c1963f] text-3xl tracking-[0] leading-9 whitespace-nowrap">
                    {card.number}
                  </div>
                  {/* Title */}
                  <div className="ml-4 [font-family:'Lato',Helvetica] font-black text-[#0d244b] text-sm tracking-[-0.35px] leading-[17.5px] whitespace-pre-line">
                    {card.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right: Campus Image Card */}
          <div className="relative w-full h-[310px] bg-slate-900 rounded-3xl overflow-hidden shadow-[0px_10px_10px_-5px_#0000000a,0px_20px_25px_-5px_#0000001a,0px_0px_0px_8px_#0d244b0d]">
            {/* Background image */}
            <div
              className="absolute top-0 left-0 w-full h-full opacity-60 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axubx5-wuazg9m5qgv4sqxvjcerdjw8ke3toqm4tql3hxaf-gozyuvonr6oup.png)",
              }}
            />

            {/* Overlay SVG */}
            <img
              className="absolute top-px left-[198px] w-[156px] h-[309px]"
              alt="Container"
              src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-9.svg"
            />

            {/* Campus Tour Badge */}
            <div className="absolute bottom-[25px] left-6 flex items-center w-[171px] h-[35px] bg-[#0d244bcc] rounded-full border border-solid border-[#ffffff1a] backdrop-blur-sm">
              <span className="ml-[21px] [font-family:'Lato',Helvetica] font-black text-white text-[11px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap">
                SGVU CAMPUS TOUR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
