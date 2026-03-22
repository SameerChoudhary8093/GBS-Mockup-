import { Card, CardContent } from "../../../../components/ui/card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  { value: 1.8, suffix: " CR", label: "Highest Package", decimals: 1 },
  { value: 40, suffix: "K+", label: "Alumni Network", decimals: 0 },
  { value: 10, suffix: "K+", label: "Students", decimals: 0 },
  { value: 125, suffix: "+", label: "Companies", decimals: 0 },
];

export const StatsOverviewSection = (): JSX.Element => {
  const { ref, inView } = useInView({
    triggerOnce: true,     // Only triggers the scroll animation once
    threshold: 0.3,        // Triggers when 30% of the section is visible
  });

  return (
    <section ref={ref} className="w-full flex justify-center py-16 px-4 md:px-8 bg-gradient-to-b from-[#0051db33] to-white">
      <div className="max-w-[1240px] w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:gap-8">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="w-full h-full min-h-[140px] md:min-h-[190px] bg-[#0d244b] border-2 border-transparent border-b-[5px] border-b-[#c1963f] rounded-[20px] shadow-2xl flex flex-col items-center justify-center p-3 sm:p-6 transition-transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
          >
            <CardContent className="flex flex-col items-center justify-center h-full w-full p-0 gap-1.5 sm:gap-3">
              <div className="[font-family:'Lato',Helvetica] font-black text-white text-[26px] sm:text-[44px] md:text-[52px] tracking-tight text-center leading-none">
                {inView ? (
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={2.5}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    useEasing={true}
                  />
                ) : (
                  <span className="opacity-0">{stat.value}{stat.suffix}</span>
                )}
              </div>
              <div className="[font-family:'Lato',Helvetica] font-bold text-slate-300 text-[11px] sm:text-lg lg:text-[20px] tracking-wide text-center uppercase leading-tight">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
