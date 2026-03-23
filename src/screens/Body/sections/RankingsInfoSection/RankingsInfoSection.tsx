import imgNirf from "../../../../assets/naacXnirf.png";

// Ranking data for the four subject-specific rankings
const rankingItems = [
  { rank: "13th", subject: "PHARMACY" },
  { rank: "17th", subject: "AGRICULTURE" },
  { rank: "24th", subject: "ARCHITECTURE" },
  { rank: "26th", subject: "LAW" },
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

          {/* Rank #1 Card */}
          <div className="shrink-0 w-full max-w-[356px] h-[106px] relative rounded-2xl border border-solid border-[#0d244b1a] bg-[linear-gradient(179deg,rgba(255,157,0,0.51)_0%,rgba(255,255,255,0.51)_52%,rgba(17,255,0,0.51)_100%),linear-gradient(0deg,rgba(13,36,75,0.05)_0%,rgba(13,36,75,0.05)_100%)] mx-auto lg:mx-0">
            {/* RANK NO. label */}
            <div className="absolute top-[43px] left-[31px] flex">
              <div className="[font-family:'Lato',Helvetica] font-black text-[#c1963f] text-[19.8px] text-center tracking-[-0.99px] leading-[23.8px]">
                RANK
                <br />
                NO.
              </div>
            </div>

            {/* Big number 1 */}
            <div className="absolute top-2.5 left-[83px] flex items-center justify-center w-[122px] h-[86px]">
              <div className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[85.7px] text-center tracking-[0] leading-[85.7px]">
                1
              </div>
            </div>

            {/* Description text */}
            <div className="absolute top-[41px] left-[186px] [font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[11.9px] tracking-[0] leading-[14.9px]">
              PRIVATE UNIVERSITY
              <br />
              IN RAJASTHAN BY NAAC
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
