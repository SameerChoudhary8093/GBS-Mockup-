import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "Learning Outside Classrooms",
    description: "A gamified experience — 60% beyond classrooms, 30% in industry, and 10% through real-world projects.",
  },
  {
    title: "Revenue Generation",
    description: "Students may earn equivalent to their fees through internships, freelancing, start-ups, or consulting.",
  },
  {
    title: "Decision Making By Students",
    description: "Students play an active role in shaping university academic and placement decisions.",
  },
  {
    title: "Performance over attendance",
    description: "Students may earn up to 25% of Grades and 50% Attendance based on achievements outside classrooms.",
  },
];

export const EducationRevolutionSection = (): JSX.Element => {
  const scrollToHero = () => {
    const el = document.getElementById("hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full flex bg-white py-16 px-4 md:px-[37px]">
      <Card className="w-full flex rounded-[38.88px] overflow-hidden shadow-[0px_9.72px_9.72px_-4.86px_#0000000a,0px_19.44px_24.3px_-4.86px_#0000001a] bg-[linear-gradient(154deg,rgba(13,36,75,1)_0%,rgba(26,69,155,1)_100%)] border-0">
        <CardContent className="p-0 flex flex-col md:flex-row w-full">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-[15.6px] py-[40px] md:py-[62.2px] pl-[30px] md:pl-[62.2px] pr-[30px] md:pr-0">
            <div className="flex">
              <span className="[font-family:'Lato',Helvetica] font-black text-[#c1963f] text-[11.7px] tracking-[4.67px] leading-[15.6px] whitespace-nowrap">SAY YES TO SGVU</span>
            </div>
            <div className="flex">
              <h2 className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[48px] md:text-[58.3px] tracking-[0] leading-tight md:leading-[58.3px] m-0">
                <span className="font-black text-white">EDU-<br /></span>
                <span className="font-black text-[#c1963f]">REVOLUTION</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[38.88px] gap-y-[30px] md:gap-y-[38.88px] pt-[23.33px] pb-[31.1px]">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-[9px]">
                  <span className="[font-family:'Lato',Helvetica] font-black text-[#c1963f] text-[15.6px] tracking-[-0.39px] leading-[23.3px]">{feature.title}</span>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-slate-200 text-[11.7px] tracking-[0] leading-[19.0px] m-0">{feature.description}</p>
                </div>
              ))}
            </div>
            <Button onClick={scrollToHero} className="w-full md:w-[311.6px] h-auto rounded-[9718.58px] bg-white shadow-[0px_7.78px_9.72px_-5.83px_#0000001a,0px_19.44px_24.3px_-4.86px_#0000001a] hover:bg-white/90 px-[39px] py-[15px] border-0" variant="ghost">
              <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[13.6px] text-center tracking-[0] leading-[19.4px] whitespace-nowrap">JOIN THE AI-POWERED UNIVERSITY</span>
            </Button>
          </div>

          {/* Right image */}
          <div className="hidden md:block w-[485.19px] flex-shrink-0 relative bg-[#0d244b] overflow-hidden" style={{ minHeight: "611.71px" }}>
            <div className="absolute inset-0 shadow-[0px_19.44px_48.6px_#00000080]" style={{ background: "url(https://c.animaapp.com/mn0n10j9vDypoz/img/image-2.png) 50% 50% / cover" }} />
            <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(13,36,75,1)_0%,rgba(13,36,75,0)_50%,rgba(13,36,75,0)_100%)]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
