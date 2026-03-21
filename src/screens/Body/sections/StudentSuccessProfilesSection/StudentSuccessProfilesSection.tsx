const profiles = [
  {
    image: "https://c.animaapp.com/mn0n10j9vDypoz/img/ishan-mathur-1.png",
    batch: "Batch 2018-22",
    degree: "B.TECH CSE",
    name: "Ishan Mathur",
    placedAt: "WALMART (USA)",
    placedAtMultiline: false,
    salary: "1.8 CR",
    salaryBg: "bg-[#c1963f]",
    salaryTextColor: "text-white",
  },
  {
    image: "https://c.animaapp.com/mn0n10j9vDypoz/img/shobhit-poddar-1.png",
    batch: "Batch 2018-22",
    degree: "B.TECH CSE",
    name: "Shobhit Poddar",
    placedAt: "FORD (UK)",
    placedAtMultiline: false,
    salary: "40 LPA",
    salaryBg: "bg-[#0d244b]",
    salaryTextColor: "text-[#c1963f]",
  },
  {
    image: "https://c.animaapp.com/mn0n10j9vDypoz/img/srijan-sah-1.png",
    batch: "Batch 2020-24",
    degree: "B.TECH CSE",
    name: "Srijan Sah",
    placedAt: "SBI BANK",
    placedAtMultiline: false,
    salary: "20 LPA",
    salaryBg: "bg-[#0d244b]",
    salaryTextColor: "text-white",
  },
  {
    image: "https://c.animaapp.com/mn0n10j9vDypoz/img/kavya-sinsinwar.png",
    batch: "Batch 2021-25",
    degree: "B.TECH CSE",
    name: "Kavya Sinsinwar",
    placedAt: "NeuroDiscovery AI Pvt\nLtd",
    placedAtMultiline: true,
    salary: "16 LPA",
    salaryBg: "bg-[#0d244b]",
    salaryTextColor: "text-white",
  },
];

export const StudentSuccessProfilesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#0d244b] pb-16 pt-6">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-[29px]">
        <div className="flex gap-[27px] flex-wrap justify-center sm:justify-start">
          {profiles.map((profile, index) => (
            <div key={index} className="w-[223px] bg-white rounded-[13.52px] overflow-hidden border-[0.85px] border-solid border-gray-100 shadow-[0px_3.38px_5.07px_-3.38px_#0000001a,0px_8.45px_12.68px_-2.54px_#0000001a] flex flex-col">
              <div className="relative w-full h-[216px] bg-gray-200 flex-shrink-0">
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${profile.image})` }} />
                <div className="absolute top-3.5 left-[120px] w-[88px] h-5 bg-[#0d244b] rounded-[8450.24px] flex items-center justify-center shadow-[0px_1.69px_3.38px_-1.69px_#0000001a,0px_3.38px_5.07px_-0.85px_#0000001a]">
                  <span className="[font-family:'Lato',Helvetica] font-bold text-white text-[10.1px] tracking-[0] leading-[13.5px] whitespace-nowrap">{profile.batch}</span>
                </div>
              </div>
              <div className="flex flex-col px-5 pt-5 pb-5 flex-1">
                <div className="flex items-center justify-center w-full mb-[8px]">
                  <span className="[font-family:'Lato',Helvetica] font-bold text-[#c1963f] text-[10.1px] text-center tracking-[1.01px] leading-[13.5px] whitespace-nowrap">{profile.degree}</span>
                </div>
                <div className="flex items-center justify-center w-full mb-[14px]">
                  <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[16.9px] text-center tracking-[0] leading-[23.7px] whitespace-nowrap">{profile.name}</span>
                </div>
                <div className={`flex flex-col items-center justify-center bg-gray-50 rounded-[10.14px] border-[0.85px] border-solid border-gray-100 mb-[13.5px] ${profile.placedAtMultiline ? "py-[11px]" : "h-[59px] py-[11px]"}`}>
                  <span className="[font-family:'Lato',Helvetica] font-bold text-gray-400 text-[10.1px] text-center tracking-[0] leading-[13.5px] whitespace-nowrap mb-[3.4px]">PLACED AT</span>
                  {profile.placedAtMultiline ? (
                    <span className="[font-family:'Lato',Helvetica] font-bold text-[#1a459b] text-[13.5px] text-center tracking-[0] leading-[16.9px] px-2">
                      {profile.placedAt.split("\n").map((line, i, arr) => (<span key={i}>{line}{i < arr.length - 1 && <br />}</span>))}
                    </span>
                  ) : (
                    <span className="[font-family:'Lato',Helvetica] font-bold text-[#1a459b] text-[13.5px] text-center tracking-[0] leading-[20.3px] whitespace-nowrap">{profile.placedAt}</span>
                  )}
                </div>
                <div className={`w-full h-[60px] ${profile.salaryBg} rounded-[10.14px] shadow-[inset_0px_1.69px_3.38px_#0000000d] flex flex-col items-center justify-center`}>
                  <span className="[font-family:'Lato',Helvetica] font-bold text-white text-[10.1px] text-center tracking-[0] leading-[13.5px] whitespace-nowrap opacity-80">SALARY OFFERED</span>
                  <span className={`[font-family:'Lato',Helvetica] font-black ${profile.salaryTextColor} text-[20.3px] text-center tracking-[0] leading-[27px] whitespace-nowrap`}>{profile.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
