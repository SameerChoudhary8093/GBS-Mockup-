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
    <section className="relative w-full bg-white py-12 px-4 md:px-8 lg:px-14">
      {/* Container perfectly matching the visual reference with precise inner flex spacing */}
      <div className="relative w-full max-w-[1240px] mx-auto bg-[#0f1f3e] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center min-h-[auto] md:min-h-[220px]">
        {/* Subtle decorative circle on the top-left */}
        <div className="absolute -top-16 -left-16 w-52 h-52 bg-[#ffffff0a] rounded-full pointer-events-none" />

        {/* Left column: Title aligned to left with strict padding */}
        <div className="w-full md:w-5/12 px-5 py-8 md:px-8 md:py-14 md:pl-12 flex-shrink-0 z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[23px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] m-0 flex flex-col">
            <span className="font-extrabold text-white whitespace-nowrap tracking-tight">Freeship / Scholarship</span>
            <span className="font-extrabold text-[#cfa858]">Session 2026-27</span>
          </h2>
        </div>

        {/* Right column: Description fully centered above centered buttons */}
        <div className="w-full md:w-7/12 flex flex-col items-center justify-center gap-6 pb-10 md:pb-0 px-5 md:px-8 md:pr-12 md:pl-0 z-10">
          <p className="[font-family:'Lexend',Helvetica] font-normal text-slate-100 text-[14px] sm:text-[16px] text-center leading-relaxed tracking-wide max-w-[550px] m-0">
            Empowering dreams through merit-based financial assistance.<br className="hidden sm:block" />
            Explore our wide range of fellowships designed to support<br className="hidden sm:block" />
            your academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
            <Button onClick={handleApply} className="w-[200px] h-[50px] rounded-[30px] bg-[#cfa858] hover:bg-[#b08e48] shadow-lg border-none [font-family:'Lexend',Helvetica] font-bold text-[#0f1f3e] text-[15px] cursor-pointer">
              Apply Now
            </Button>
            <Button onClick={handleBrochure} variant="outline" className="w-[200px] h-[50px] rounded-[30px] border-2 border-white bg-transparent hover:bg-white/10 [font-family:'Lexend',Helvetica] font-bold text-white text-[15px] cursor-pointer">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
