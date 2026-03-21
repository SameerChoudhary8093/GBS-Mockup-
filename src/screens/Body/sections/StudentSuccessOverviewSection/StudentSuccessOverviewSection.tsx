export const StudentSuccessOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full flex bg-[#0d244b] pt-16 pb-0">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-[29px]">
        <div className="flex flex-col justify-center w-full max-w-[341px]">
          <div className="mb-6">
            <h2 className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[28px] md:text-[34.4px] tracking-[0] leading-tight md:leading-[34.4px]">
              <span className="font-black text-white leading-[43.0px]">Student Success:<br /></span>
              <span className="font-black text-[#c1963f] underline">Classroom to Career</span>
            </h2>
          </div>
          <div className="mb-8">
            <p className="[font-family:'Lato',Helvetica] font-normal text-slate-300 text-[15.3px] tracking-[0] leading-[24.8px]">
              Our students stand out with exceptional placements, driven by a future-ready curriculum, industry collaborations, and hands-on exposure that fosters innovation and professional excellence.
            </p>
          </div>
          <div className="-ml-[11px]">
            <img className="w-[353px] h-[82px]" alt="Container" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-10.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};
