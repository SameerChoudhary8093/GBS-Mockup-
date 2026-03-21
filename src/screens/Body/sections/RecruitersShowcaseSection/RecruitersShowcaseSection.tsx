export const RecruitersShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-6 bg-[#0d244b]">
      {/* Header content */}
      <div className="w-full flex flex-col items-center gap-3">
        {/* Title */}
        <h2 className="[font-family:'Lato',Helvetica] font-black text-white text-3xl text-center tracking-[0] leading-9 whitespace-nowrap">
          Top Recruiters at SGVU
        </h2>

        {/* Subtitle */}
        <p className="[font-family:'Lato',Helvetica] font-bold text-slate-300 text-xs text-center tracking-[1.20px] leading-[18px] whitespace-nowrap">
          RENOWNED BRANDS HIRING SGVU TALENT FOR DYNAMIC ROLES ACROSS DIVERSE
          FIELDS
        </p>

        {/* Gold underline bar */}
        <div className="w-20 h-1 bg-[#c1963f]" />
      </div>

      {/* Logos image */}
      <div className="w-full flex justify-center px-8">
        <img
          className="w-full max-w-[1132px] h-auto object-contain"
          alt="Logo"
          src="https://c.animaapp.com/mn0n10j9vDypoz/img/logo-1.png"
        />
      </div>

      {/* Many more text */}
      <p className="[font-family:'Lato',Helvetica] font-bold text-slate-300 text-[14.8px] text-center tracking-[1.48px] leading-[22.2px] whitespace-nowrap">
        &amp; MANY MORE...
      </p>
    </section>
  );
};
