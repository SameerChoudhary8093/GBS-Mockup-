import imgNirf from "../../../../assets/naacXnirf.png";

// Ranking data for the updated rankings
const rankingItems = [
  { rank: "101-150", subject: "University NIRF Rank" },
  { rank: "151-200", subject: "Overall Rank Band" },
  { rank: "11-50", subject: "Sustainable Development Goals" },
  { rank: "39", subject: "Pharmacy" },
];

export const RankingsInfoSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white rounded-xl shadow-[0px_4px_6px_-2px_#0000000d,0px_10px_30px_-5px_#0000001a]">
      <div className="flex flex-col gap-8 py-12 px-4">
        {/* Main rankings row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full">
          {/* NIRF Logo + Label */}
          <div className="flex flex-col items-center relative w-[154px] shrink-0">
            <div className="relative flex items-center justify-center overflow-visible">
              <img
                className="w-full h-auto max-h-[100px] object-contain"
                alt="NAAC & NIRF Logo"
                src={imgNirf}
              />
            </div>
            <div className="mt-1 flex items-center justify-center [font-family:'Lato',Helvetica] font-black text-slate-500 text-[12.8px] text-center tracking-[1.28px] leading-[19.2px] whitespace-nowrap">
              NIRF RANKINGS 2025
            </div>
          </div>

          
          {/* Subject-specific rankings grid */}
          <div className="lg:pl-10 lg:border-l border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 shrink-0 w-full md:w-auto mt-4 lg:mt-0">
            {rankingItems.map((item) => (
              <div
                key={item.subject}
                className="bg-slate-50 rounded-xl flex flex-col items-center justify-center p-3 min-h-[68px] min-w-min"
              >
                <div className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-2xl tracking-[0] leading-none mb-1">
                  {item.rank}
                </div>
                <div className="[font-family:'Lato',Helvetica] font-black text-slate-500 text-[10px] tracking-[0.5px] whitespace-nowrap">
                  {item.subject}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle row */}
        <div className="flex justify-center w-full mt-4">
          <div className="[font-family:'Lato',Helvetica] font-black text-[#0d244b99] text-[10px] md:text-xs text-center tracking-[2px] md:tracking-[3.60px] leading-[18px] w-full px-4">
            AHEAD OF MANY STATE &amp; PRIVATE UNIVERSITIES IN THE REGION
          </div>
        </div>
      </div>
    </section>
  );
};
