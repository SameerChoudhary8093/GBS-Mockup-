import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  { value: "1.8 CR", label: "Highest Package" },
  { value: "40K+", label: "Alumni Network" },
  { value: "10K+", label: "Students" },
  { value: "125+", label: "Companies" },
];

export const StatsOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-16 bg-[linear-gradient(180deg,rgba(0,81,219,0.49)_0%,rgba(255,255,255,1)_100%)]">
      <div className="flex flex-row gap-7 justify-center items-center flex-wrap">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="bg-[#0d244b] border-0 border-b-[4.22px] border-b-[#c1963f] rounded-[16.89px] shadow-[0px_4.22px_6.33px_-2.11px_#0000000d,0px_10.56px_31.67px_-5.28px_#0000001a] w-[233px] h-[215px] flex flex-col justify-center"
            style={{
              borderBottomStyle: "solid",
              borderBottomColor: "#c1963f",
              borderBottomWidth: "4.22px",
            }}
          >
            <CardContent className="flex flex-col items-center justify-center h-full pt-6">
              <div className="[font-family:'Lato',Helvetica] font-black text-white text-[47.6px] leading-[59.5px] tracking-[0] whitespace-nowrap text-center">
                {stat.value}
              </div>
              <div className="[font-family:'Lato',Helvetica] font-black text-white text-xl leading-[59.5px] tracking-[0] whitespace-nowrap text-center">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
