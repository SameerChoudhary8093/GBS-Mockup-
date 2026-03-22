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
    <section className="w-full flex bg-white py-12 md:py-16 px-4 md:px-8 lg:px-[37px]">
      <Card className="w-full flex flex-col md:flex-row rounded-3xl md:rounded-[38.88px] overflow-hidden shadow-xl bg-[linear-gradient(154deg,rgba(13,36,75,1)_0%,rgba(26,69,155,1)_100%)] border-0">
        <CardContent className="p-0 flex flex-col md:flex-row w-full h-full">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-4 py-10 md:py-[60px] px-6 sm:px-10 lg:pl-[60px] lg:pr-10">
            <div className="flex">
              <span className="[font-family:'Lato',Helvetica] font-black text-[#c1963f] text-xs sm:text-sm tracking-widest leading-snug break-words">SAY YES TO SGVU</span>
            </div>
            <div className="flex">
              <h2 className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[36px] sm:text-[42px] lg:text-[58.3px] tracking-tight leading-none m-0 break-words flex flex-col">
                <span className="font-black text-white">EDU-</span>
                <span className="font-black text-[#c1963f]">REVOLUTION</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-6 pt-6 pb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="[font-family:'Lato',Helvetica] font-black text-[#c1963f] text-sm md:text-base leading-snug">{feature.title}</span>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-slate-200 text-xs md:text-sm leading-relaxed m-0">{feature.description}</p>
                </div>
              ))}
            </div>
            <Button onClick={scrollToHero} className="w-full sm:w-auto self-start rounded-full bg-white shadow-lg hover:bg-slate-100 px-8 py-6 border-0" variant="ghost">
              <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-sm text-center leading-snug whitespace-nowrap">JOIN THE AI-POWERED UNIVERSITY</span>
            </Button>
          </div>

          {/* Right image */}
          <div className="w-full md:w-[40%] lg:w-[45%] flex-shrink-0 relative bg-[#0d244b] overflow-hidden min-h-[300px] md:min-h-full">
            <div className="absolute inset-0 shadow-inner" style={{ background: "url(https://c.animaapp.com/mn0n10j9vDypoz/img/image-2.png) center / cover no-repeat" }} />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-[linear-gradient(270deg,rgba(13,36,75,1)_0%,rgba(13,36,75,0)_50%,rgba(13,36,75,0)_100%)] from-[#0d244b] via-transparent to-transparent md:from-transparent" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
