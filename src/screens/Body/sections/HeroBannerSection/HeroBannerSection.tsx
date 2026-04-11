import { useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import imgDarshna from "../../../../assets/Darshna_Sinha.png";
import imgSonali from "../../../../assets/Sonali_Mathur.png";
import imgAayush from "../../../../assets/aayush.jpg";

const studentProfiles = [
  {
    left: "left-0",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axudcgs5gacfjephqd0hkobr5rwljixcwqtkipdp1qcjfoxcucncpeq38fgpc.png",
    imgUrl: imgAayush,
    stat: "40 LPA",
  },
  {
    left: "left-[60px]",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axubd3ub7pqlysrlah0zsgoeptycl1lw9rfyxv-t-bslwymi74sdsppfo-pwo.png",
    imgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/shobhit-poddar-1.png",
    stat: "40 LPA",
  },
  {
    left: "left-[120px]",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axubd3ub7pqlysrlah0zsgoeptycl1lw9rfyxv-t-bslwymi74sdsppfo-pwo.png",
    imgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/srijan-sah-1.png",
    stat: "20 LPA",
  },
  {
    left: "left-[180px]",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axudcgs5gacfjephqd0hkobr5rwljixcwqtkipdp1qcjfoxcucncpeq38fgpc.png",
    imgUrl: imgDarshna,
    stat: "14 LPA",
  },
  {
    left: "left-[240px]",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axubd3ub7pqlysrlah0zsgoeptycl1lw9rfyxv-t-bslwymi74sdsppfo-pwo.png",
    imgUrl: imgSonali,
    stat: "10 LPA",
  },
];

export const HeroBannerSection = (): JSX.Element => {
  useEffect(() => {
    const loadScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="emwgts.js"]');
      if (existingScript) {
        // If script exists, we might need to manually trigger it if the widget didn't load
        // Many widgets from Meritto/NPF hook into the window object
        if ((window as any).npfReady) {
          (window as any).npfReady();
        }
        return;
      }

      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
      s.onload = () => {
        console.log("Meritto script loaded");
      };
      document.body.appendChild(s);
    };

    // Small timeout to ensure React has painted the div
    const timer = setTimeout(loadScript, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "821px" }}>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/FP3FmhI5G7E?autoplay=1&mute=1&loop=1&playlist=FP3FmhI5G7E&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&vq=hd1080&autoplay=1&mute=1"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          frameBorder="0"
          style={{ border: 'none', filter: 'brightness(1.1) contrast(1.1)' }}
          loading="eager"
        ></iframe>
      </div>

      {/* Main content */}
      <div className="relative w-full flex flex-col-reverse lg:flex-row items-center lg:items-start px-4 md:px-10 py-8 md:py-[39px] gap-8">
        {/* Left: Hero text */}
        <div className="flex flex-col flex-1 min-w-0 pt-0 md:pt-0">
          <div className="mb-[35px]">
            <h1 className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[32px] md:text-[47.1px] tracking-[0] leading-tight md:leading-[47.1px]" style={{ textShadow: "0px 3.93px 2.95px #00000012, 0px 1.96px 1.96px #0000000f" }}>
              <span className="font-black text-white">We Give </span>
              <span className="font-black text-[#c1963f]">Wings </span>
              <span className="font-black text-white">to </span>
              <span className="font-bold italic text-[#c1963f]" style={{ fontFamily: "'Playfair Display', serif" }}>your Dreams!</span>
            </h1>
          </div>

          {/* Mockup-style Cards (1.8 Crore + Ishan Mathur) */}
          <div className="mb-[32px] flex flex-col sm:flex-row items-center sm:items-end gap-6 z-20">
            {/* ₹1.8 Crore Glass Card */}
            <div className="relative w-[300px] md:w-[380px] h-[130px] rounded-[15px] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center">
              <div className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[38px] md:text-[52px] leading-none mb-1">
                ₹1.8 <span className="text-[20px] md:text-[28px]">CRORE</span>
              </div>
              <div className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[10px] md:text-[12px] tracking-[3px] md:tracking-[5px] uppercase">
                INTERNATIONAL PLACEMENT
              </div>
            </div>

            {/* Ishan Mathur Profile Card */}
            <div className="w-[200px] md:w-[240px] bg-white rounded-[20px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.3)] flex flex-col shrink-0 sm:-rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer">
              {/* Photo (No Batch Label) */}
              <div className="relative w-full h-[160px] md:h-[190px] bg-slate-100 overflow-hidden">
                <img
                  src="https://c.animaapp.com/mn0n10j9vDypoz/img/ishan-mathur-1.png"
                  alt="Ishan Mathur"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col px-5 py-4 bg-white text-center">
                <div className="[font-family:'Lato',Helvetica] font-bold text-[#c1963f] text-[10px] md:text-[12px] tracking-[1px] mb-1 uppercase">
                  B.TECH CSE
                </div>
                <div className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[18px] md:text-[22px] leading-tight mb-3">
                  Ishan Mathur
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-100 py-2.5 px-2">
                  <div className="[font-family:'Lato',Helvetica] font-bold text-slate-400 text-[9px] mb-0.5 uppercase tracking-wider">PLACED AT</div>
                  <div className="[font-family:'Lato',Helvetica] font-bold text-[#1a459b] text-[13px] md:text-[15px] whitespace-nowrap">
                    WALMART (USA)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[24px]">
            <p className="[font-family:'Lato',Helvetica] font-normal text-transparent text-[16px] md:text-[20px] tracking-[0] leading-tight">
              <span className="font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"> From campus to career, <span className="text-[#c1963f]">tens of thousands SGVU Students</span> already <span className="text-[#c1963f]">leading world</span>. </span>
            </p>
          </div>
          {/* Student profiles */}
          <div className="relative mt-2 flex items-center h-[110px] sm:h-[120px]">
            <div className="flex relative z-10 w-[360px] h-full items-start pt-[10px]">
              {studentProfiles.map((profile, i) => (
                <div key={i} className={`flex flex-col items-center absolute ${profile.left} group`} style={{ zIndex: (i + 1) * 10 }}>
                  <div className="w-[84px] h-[84px] rounded-full overflow-hidden border-[3px] border-solid border-[#c1963f] shadow-lg flex items-center justify-center bg-white">
                    <img
                      className="w-full h-full object-cover object-top"
                      alt={profile.stat}
                      src={profile.imgUrl}
                    />
                  </div>
                  <div className="mt-2 [font-family:'Lato',Helvetica] font-black text-white text-[14px] leading-none whitespace-nowrap drop-shadow-md">{profile.stat}</div>
                </div>
              ))}
            </div>

            {/* JOIN THEM TODAY Pill */}
            <div className="absolute left-[302px] top-[26px] z-0 h-[52px] w-[140px] pl-[44px] pr-4 flex justify-start items-center bg-[linear-gradient(90deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.1)_100%)] border-[1.5px] border-[#c1963f] rounded-r-full backdrop-blur-[6px] shadow-lg">
              <span className="[font-family:'Lato',Helvetica] font-extrabold text-white text-[14.5px] leading-[1.1] text-left whitespace-pre-line tracking-tight drop-shadow-md">JOIN THEM<br />TODAY</span>
            </div>
          </div>
        </div>

        {/* Right: Admission form */}
        <div className="w-full lg:w-[420px] xl:w-[450px] lg:min-w-[380px] pt-4 lg:flex-shrink-0 z-10 transition-all duration-300">
          <Card className="bg-white rounded-2xl border border-solid border-slate-100 shadow-[0px_10px_10px_-5px_#0000000a,0px_20px_25px_-5px_#0000001a] overflow-hidden">
            <CardContent className="flex flex-col items-center p-0">
              <div className="w-full bg-[#c1963f] py-4 px-8 text-center flex flex-col gap-1">
                <span className="[font-family:'Lato',Helvetica] font-black text-white text-xs tracking-[1px] uppercase">ADMISSIONS OPEN 2026-27</span>
                <span className="[font-family:'Lato',Helvetica] font-bold text-white/90 text-[10px] tracking-[1.5px] uppercase">APPLY FOR SGVUEE 2026-27</span>
              </div>
              <div className="w-full p-2">
                <div className="npf_wgts" data-height="550px" data-w="1f45f9402eb01d349f8afa4a91be2059"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
