import { StudentSuccessProfilesSection } from "../StudentSuccessProfilesSection/StudentSuccessProfilesSection";

export const StudentSuccessOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d244b] min-h-[500px] flex">
      {/* Background left half (optional depending if different shade is used) */}
      <div className="absolute top-0 left-0 w-full lg:w-[480px] h-full bg-[#0d244b] z-0" />
      
      <div className="relative z-10 w-full mx-auto flex flex-col lg:flex-row items-center py-2 lg:py-0">
        
        {/* Left Side: Overview info */}
        <div className="w-full lg:w-[480px] flex-shrink-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 md:px-14 lg:pl-[100px] lg:pr-10 py-10 lg:py-16">
          <div className="mb-5 lg:mb-6">
            <h2 className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[22px] sm:text-[26px] md:text-[34px] tracking-[0] leading-tight">
              <span className="font-extrabold text-white">Student Success:<br /></span>
              <span className="font-extrabold text-[#c1963f] underline decoration-2 underline-offset-4 whitespace-nowrap">Classroom to Career</span>
            </h2>
          </div>
          <div className="mb-8 lg:mb-10 lg:pl-0 px-2 lg:px-0">
            <p className="[font-family:'Lato',Helvetica] font-normal text-slate-300 text-[13px] md:text-[15px] tracking-[0] leading-[22px] md:leading-[24px]">
              Our students stand out with exceptional placements, driven by a future-ready curriculum, industry collaborations, and hands-on exposure that fosters innovation and professional excellence.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded bg-[#1e3a6a] hover:bg-[#254682] flex items-center justify-center cursor-pointer transition-colors border border-[#83a3df20] shadow-[0px_4px_10px_rgba(0,0,0,0.3)]">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1L1 5L5 9" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
             <div className="w-10 h-10 rounded bg-[#1e3a6a] hover:bg-[#254682] flex items-center justify-center cursor-pointer transition-colors border border-[#83a3df20] shadow-[0px_4px_10px_rgba(0,0,0,0.3)]">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
          </div>
        </div>

        {/* Right Side: Slider */}
        <div className="w-full lg:w-[calc(100%-480px)] overflow-hidden pl-4 lg:pl-0">
          <StudentSuccessProfilesSection />
        </div>
      </div>
    </section>
  );
};
