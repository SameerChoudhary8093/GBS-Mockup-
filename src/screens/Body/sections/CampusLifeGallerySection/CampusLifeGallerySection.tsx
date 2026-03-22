export const CampusLifeGallerySection = (): JSX.Element => {
  return (
    <section className="w-full flex bg-[#f6f7f8] py-14">
      <div className="w-full max-w-[1209px] mx-auto px-8 flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-[15px] items-center">
          <h2 className="[font-family:'Lato',Helvetica] font-extrabold text-[#0d254a] text-[39.9px] text-center tracking-[0] leading-[38px] whitespace-nowrap">
            Life @ SGVU Jaipur
          </h2>
          <p className="[font-family:'Lato',Helvetica] font-normal text-slate-500 text-[18.1px] text-center tracking-[0] leading-[22.8px] max-w-[548px]">
            A vibrant ecosystem of culture, sports, and technical fests across
            our 31-acre lush green campus.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full auto-rows-[200px] md:auto-rows-[277px]">
          {/* Large image - spans 2 cols and 2 rows */}
          <div className="sm:row-span-2 sm:col-span-2 bg-slate-200 rounded-[15px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Campus life"
              src="https://c.animaapp.com/mn0n10j9vDypoz/img/image-1-1.png"
            />
          </div>

          {/* Top-right first image */}
          <div className="col-span-1 bg-slate-200 rounded-[15px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Campus life"
              src="https://c.animaapp.com/mn0n10j9vDypoz/img/image-2.png"
            />
          </div>

          {/* Top-right second image */}
          <div className="col-span-1 bg-slate-200 rounded-[15px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Campus life"
              src="https://c.animaapp.com/mn0n10j9vDypoz/img/image-3.png"
            />
          </div>

          {/* Bottom-right wide image - spans 2 cols */}
          <div className="sm:col-span-2 bg-slate-200 rounded-[15px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Campus life"
              src="https://c.animaapp.com/mn0n10j9vDypoz/img/image-5.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
