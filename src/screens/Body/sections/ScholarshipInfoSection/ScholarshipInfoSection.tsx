import { Button } from "../../../../components/ui/button";

export const ScholarshipInfoSection = (): JSX.Element => {
  const handleApply = () => {
    const el = document.getElementById("hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleBrochure = () => {
    alert("Brochure download will be available shortly. Please check your email or contact admissions@gyanvihar.org");
  };

  return (
    <section className="relative w-full bg-white py-7 px-4 md:px-14">
      <div className="relative w-full bg-[#0d244b] rounded-3xl overflow-hidden border-4 border-solid border-[#c1963f33] shadow-[0px_10px_10px_-5px_#0000000a,0px_20px_25px_-5px_#0000001a] flex flex-col md:flex-row items-center min-h-[266px]">
        <div className="absolute -top-9 -left-9 w-40 h-40 bg-[#ffffff0d] rounded-full pointer-events-none" />

        {/* Left: Title */}
        <div className="flex-shrink-0 px-8 md:pl-[50px] py-8 md:py-[75px] md:w-[472px]">
          <div className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[32px] md:text-[46.8px] tracking-[-1.17px] leading-tight md:leading-[46.8px]">
            <span className="font-extrabold text-white tracking-[-0.55px]">Freeship / Scholarship<br /></span>
            <span className="font-extrabold text-[#c1963f] tracking-[-0.55px]">Session 2026-27</span>
          </div>
        </div>

        {/* Right: Description + Buttons */}
        <div className="flex flex-col flex-1 items-center justify-center gap-[13px] py-[28px] px-8 md:pr-[50px]">
          <p className="[font-family:'Lexend',Helvetica] font-normal text-slate-200 text-[14px] md:text-[16.2px] text-center tracking-[0] leading-[22.8px]">
            Empowering dreams through merit-based financial assistance.<br />
            Explore our wide range of fellowships designed to support your academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[13px] mt-2">
            <Button onClick={handleApply} className="h-auto w-full sm:w-[150px] py-[13px] bg-[#c1963f] hover:bg-[#a87d35] rounded-[8124.19px] shadow-[0px_6.5px_8.12px_-4.88px_#c1963f33,0px_16.25px_20.31px_-4.06px_#c1963f33] border-none [font-family:'Lexend',Helvetica] font-bold text-[#0d244b] text-[13px] leading-[19.5px] text-center whitespace-nowrap">
              Apply Now
            </Button>
            <Button onClick={handleBrochure} variant="outline" className="h-auto w-full sm:w-[198.86px] py-[13px] rounded-[8124.19px] border-[1.62px] border-solid border-white bg-transparent hover:bg-white/10 [font-family:'Lexend',Helvetica] font-bold text-white text-[13px] leading-[19.5px] text-center whitespace-nowrap">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
