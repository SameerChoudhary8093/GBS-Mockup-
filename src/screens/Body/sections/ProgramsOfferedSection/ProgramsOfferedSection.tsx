import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const tabs = [
  { id: "diploma", label: "DIPLOMA/ADVANCED DIPLOMA" },
  { id: "undergraduate", label: "UNDERGRADUATE" },
  { id: "postgraduate", label: "POSTGRADUATE" },
  { id: "research", label: "RESEARCH" },
];

const programsByTab: Record<string, { id: number; imgSrc: string; imgAlt: string; imgClass: string; label: string }[]> = {
  diploma: [
    { id: 1, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-8.svg", imgAlt: "Margin", imgClass: "w-7 h-[49px]", label: "Diploma in\nPharmacy" },
    { id: 2, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-9.svg", imgAlt: "Margin", imgClass: "w-10 h-[45px]", label: "Computer\nScience" },
    { id: 3, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin.svg", imgAlt: "Margin", imgClass: "w-9 h-[45px]", label: "Electrical\nEngineering" },
    { id: 4, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-5.svg", imgAlt: "Margin", imgClass: "w-9 h-[49px]", label: "Civil Engineering" },
    { id: 5, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-2.svg", imgAlt: "Margin", imgClass: "w-9 h-[50px]", label: "Mechanical\nEngineering" },
    { id: 6, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-1.svg", imgAlt: "Margin", imgClass: "w-11 h-[49px]", label: "Interior Design" },
    { id: 7, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/container-2.png", imgAlt: "Container", imgClass: "w-10 h-10", label: "Graphic Design" },
    { id: 8, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-6.svg", imgAlt: "Margin", imgClass: "w-9 h-[52px]", label: "Fashion Design" },
  ],
  undergraduate: [
    { id: 1, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-9.svg", imgAlt: "Margin", imgClass: "w-10 h-[45px]", label: "B.Tech CSE" },
    { id: 2, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin.svg", imgAlt: "Margin", imgClass: "w-9 h-[45px]", label: "B.Tech ECE" },
    { id: 3, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-5.svg", imgAlt: "Margin", imgClass: "w-9 h-[49px]", label: "B.Tech Civil" },
    { id: 4, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-2.svg", imgAlt: "Margin", imgClass: "w-9 h-[50px]", label: "B.Tech Mechanical" },
    { id: 5, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-8.svg", imgAlt: "Margin", imgClass: "w-7 h-[49px]", label: "B.Pharma" },
    { id: 6, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-1.svg", imgAlt: "Margin", imgClass: "w-11 h-[49px]", label: "BBA" },
    { id: 7, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/container-2.png", imgAlt: "Container", imgClass: "w-10 h-10", label: "LLB" },
    { id: 8, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-6.svg", imgAlt: "Margin", imgClass: "w-9 h-[52px]", label: "B.Arch" },
  ],
  postgraduate: [
    { id: 1, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-9.svg", imgAlt: "Margin", imgClass: "w-10 h-[45px]", label: "M.Tech CSE" },
    { id: 2, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-1.svg", imgAlt: "Margin", imgClass: "w-11 h-[49px]", label: "MBA" },
    { id: 3, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-8.svg", imgAlt: "Margin", imgClass: "w-7 h-[49px]", label: "M.Pharma" },
    { id: 4, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-5.svg", imgAlt: "Margin", imgClass: "w-9 h-[49px]", label: "M.Tech Civil" },
    { id: 5, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/container-2.png", imgAlt: "Container", imgClass: "w-10 h-10", label: "LLM" },
    { id: 6, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-6.svg", imgAlt: "Margin", imgClass: "w-9 h-[52px]", label: "M.Des Fashion" },
  ],
  research: [
    { id: 1, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-9.svg", imgAlt: "Margin", imgClass: "w-10 h-[45px]", label: "Ph.D Computer\nScience" },
    { id: 2, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-1.svg", imgAlt: "Margin", imgClass: "w-11 h-[49px]", label: "Ph.D Management" },
    { id: 3, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-8.svg", imgAlt: "Margin", imgClass: "w-7 h-[49px]", label: "Ph.D Pharmacy" },
    { id: 4, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-2.svg", imgAlt: "Margin", imgClass: "w-9 h-[50px]", label: "Ph.D Engineering" },
    { id: 5, imgSrc: "https://c.animaapp.com/mn0n10j9vDypoz/img/container-2.png", imgAlt: "Container", imgClass: "w-10 h-10", label: "Ph.D Law" },
  ],
};

export const ProgramsOfferedSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("diploma");
  const cards = programsByTab[activeTab] || [];

  return (
    <section className="w-full bg-[#0d244b] overflow-hidden py-[51px]">
      {/* Header */}
      <div className="ml-4 md:ml-[57px] flex flex-col gap-6 mb-[35px]">
        <div className="flex items-center">
          <h2 className="font-normal text-transparent text-4xl md:text-5xl tracking-[-1.20px] leading-[48px] [font-family:'Lato',Helvetica]">
            <span className="font-black text-white tracking-[-0.58px]">PROGRAMS </span>
            <span className="font-black text-[#c1963f] tracking-[-0.58px]">OFFERED</span>
          </h2>
        </div>
        <div className="w-24 h-2 bg-[#c1963f] rounded-full" />
        <p className="max-w-[742px] [font-family:'Lato',Helvetica] font-bold text-[#ffffffb2] text-base md:text-lg tracking-[0] leading-[29.2px] pr-4">
          Excellence and virtue delivered through a pedagogy prepared by subject experts and industry leaders.
        </p>
      </div>

      {/* Tabs - Wrapped layout for mobile */}
      <div className="px-4 md:px-[57px]">
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 border-b border-[#ffffff1a] pb-4 sm:pb-0 mb-[35px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-[40px] sm:h-[54px] px-3 sm:px-4 md:px-[34px] flex items-center justify-center rounded-xl border-2 border-solid [font-family:'Lato',Helvetica] font-black text-[#c1963f] text-[10px] sm:text-xs text-center tracking-[1.20px] leading-[18px] whitespace-nowrap transition-colors cursor-pointer ${activeTab === tab.id ? "bg-[#c1963f1a] border-[#c1963f]" : "bg-transparent border-[#ffffff1a]"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Program Cards Unified Grid */}
      <div className="px-4 md:px-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-[14px] md:gap-[22.5px] auto-rows-fr">
          {cards.map((card) => (
            <Card key={card.id} className="bg-white rounded-[22.5px] border-[0.94px] border-solid border-[#0d244b0d] shadow-[0px_9.38px_28.12px_-4.69px_#0000001a] overflow-hidden hover:shadow-[0px_12px_32px_-4px_#0000002a] transition-shadow cursor-pointer">
              <CardContent className="p-0 flex flex-col items-center justify-center py-[24px] sm:py-[31px] gap-2 sm:gap-3 h-full min-h-[130px]">
                <img className={card.imgClass} alt={card.imgAlt} src={card.imgSrc} />
                <div className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[11px] sm:text-[12.2px] text-center tracking-[0] leading-[14px] sm:leading-[15.2px] whitespace-pre-line">
                  {card.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
