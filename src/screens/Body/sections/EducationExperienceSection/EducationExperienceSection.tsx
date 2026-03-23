import { Card, CardContent } from "../../../../components/ui/card";

// Feature cards data
const featureCards = [
  { number: "01", title: "AI-POWERED LEARNING\nECOSYSTEM" },
  { number: "02", title: "WORLD-CLASS\nINFRASTRUCTURE &\nSMART CLASSROOMS" },
  { number: "03", title: "150+ SKILLS LABS &\nINNOVATION STUDIOS" },
  { number: "04", title: "40,000+ ALUMNI\nNETWORK" },
  { number: "05", title: "START-UP INCUBATION &\nENTREPRENEURSHIP" },
  { number: "06", title: "VIBRANT RESIDENTIAL\nCAMPUS LIFE" },
];

export const EducationExperienceSection = (): JSX.Element => {
  return (
    <section className="w-full flex bg-white py-12 md:py-24">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col gap-8 md:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-0">
          <h2 className="flex flex-wrap items-center justify-center gap-x-1.5 [font-family:'Lato',Helvetica] font-normal text-transparent text-[26px] sm:text-[36.2px] text-center tracking-[-0.90px] leading-[1.2] max-w-[320px] sm:max-w-none mx-auto">
            <span className="font-black text-[#0d244b] tracking-[-0.33px]">EXPERIENCE THE</span>
            <span className="font-black text-[#c1963f] tracking-[-0.33px]">FUTURE</span>
            <span className="font-black text-[#0d244b] tracking-[-0.33px]">OF EDUCATION</span>
          </h2>

          <div className="mt-4 sm:mt-[26px] flex items-center justify-center [font-family:'Lato',Helvetica] font-black text-slate-500 text-[9px] sm:text-xs text-center tracking-[1.5px] sm:tracking-[3.00px] leading-[15px] sm:leading-[18px] max-w-[280px] sm:max-w-none mx-auto flex-wrap">
            WHERE INNOVATION MEETS AMBITION, AND LEARNERS BECOME LEADERS.
          </div>

          <div className="w-24 h-1.5 mt-[22px] bg-[#0d244b] rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-x-8 lg:gap-y-10">
            {featureCards.map((card) => (
              <Card
                key={card.number}
                className="rounded-xl border-[0.5px] border-solid border-[#c1963f] shadow-[6px_8px_10.9px_#00000021] bg-[#ffffff01] p-0"
              >
                <CardContent className="p-0 relative flex flex-row items-center sm:items-start py-3 px-3 sm:py-[17px] sm:px-[17px] gap-0 min-h-[70px]">
                  {/* Number */}
                  <div className="flex-shrink-0 w-[24px] sm:w-[35px] [font-family:'Lato',Helvetica] font-black text-[#c1963f] text-lg sm:text-3xl tracking-[0] leading-none whitespace-nowrap">
                    {card.number}
                  </div>
                  {/* Title */}
                  <div className="ml-2 sm:ml-4 [font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[9.5px] sm:text-sm tracking-[-0.35px] leading-[1.2] sm:leading-[17.5px] whitespace-pre-line flex-1">
                    {card.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right: Campus Video Card */}
          <div className="relative w-full h-[310px] bg-slate-900 rounded-3xl overflow-hidden shadow-[0px_10px_10px_-5px_#0000000a,0px_20px_25px_-5px_#0000001a,0px_0px_0px_8px_#0d244b0d] group">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/eIUeP6-_sBw?rel=0&showinfo=0"
              title="SGVU Campus Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            {/* Floating Campus Tour Badge overlay (pointer-events-none ensures we can click play button below it) */}
            <div className="absolute bottom-[25px] left-6 flex items-center h-[35px] px-5 bg-[#0d244bcc] rounded-full border border-[#ffffff1a] backdrop-blur-sm pointer-events-none z-10 shadow-lg opacity-90 transition-opacity group-hover:opacity-100">
              <span className="[font-family:'Lato',Helvetica] font-black text-white text-[11px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap">
                SGVU CAMPUS TOUR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
