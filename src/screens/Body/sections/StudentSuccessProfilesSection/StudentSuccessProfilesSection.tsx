import React, { useRef, useEffect, useState } from 'react';
import imgAkshat from "../../../../assets/Akshat_Tripathi.png";
import imgDarshna from "../../../../assets/Darshna_Sinha.png";
import imgSaurabh from "../../../../assets/Saurabh_Shukla.png";
import imgSonali from "../../../../assets/Sonali_Mathur.png";

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
  {
    image: imgAkshat,
    batch: "Batch 2021-25",
    degree: "B.TECH CSE",
    name: "Akshat Tripathi",
    placedAt: "JBL\nGEO",
    placedAtMultiline: true,
    salary: "14 LPA",
    salaryBg: "bg-[#0d244b]",
    salaryTextColor: "text-white",
  },
  {
    image: imgDarshna,
    batch: "Batch 2021-25",
    degree: "B.TECH CSE",
    name: "Darshna Sinha",
    placedAt: "Liquid Screen Design\n LLC",
    placedAtMultiline: true,
    salary: "14 LPA",
    salaryBg: "bg-[#0d244b]",
    salaryTextColor: "text-white",
  },
  {
    image: imgSaurabh,
    batch: "Batch 2018-22",
    degree: "B.TECH CSE",
    name: "Saurabh Shukla",
    placedAt: "KOGNIVERA IT SOLUTIONS",
    placedAtMultiline: false,
    salary: "11 LPA",
    salaryBg: "bg-[#0d244b]",
    salaryTextColor: "text-white",
  },
  {
    image: imgSonali,
    batch: "Batch 2017-21",
    degree: "B.TECH CSE",
    name: "Sonali Mathur",
    placedAt: "IQVIA",
    placedAtMultiline: false,
    salary: "10 LPA",
    salaryBg: "bg-[#0d244b]",
    salaryTextColor: "text-white",
  },
];

export const StudentSuccessProfilesSection = (): JSX.Element => {
  // Triple the array to ensure drag looping is smooth
  const allProfiles = [...profiles, ...profiles, ...profiles];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  useEffect(() => {
    // Continuous native horizontal auto-scroll algorithm
    if (!scrollContainerRef.current || isInteracting) return;

    const intervalId = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollLeft += 1;
        // Total pixel width of one original set of profiles = (223px width + 27px gap) * 8 profiles = 2000px
        const singleSetWidth = 2000;
        
        // Loop continuously without a jump by moving seamlessly 
        if (container.scrollLeft >= singleSetWidth * 2) {
           container.scrollLeft -= singleSetWidth;
        }
      }
    }, 20); // Smooth scrolling interval
    return () => clearInterval(intervalId);
  }, [isInteracting]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsInteracting(true);
    setIsDragging(true);
    if (!scrollContainerRef.current) return;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsInteracting(false);
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Drag multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <>
      <style>{`
        .hide-scrollbars::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbars {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="w-full overflow-hidden py-10 touch-pan-y">
        <div 
          ref={scrollContainerRef}
          className={`flex gap-[27px] px-4 overflow-x-auto select-none hide-scrollbars ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          {allProfiles.map((profile, index) => (
            <div 
              key={index} 
              className="w-[223px] bg-white rounded-[13.52px] overflow-hidden border-[0.85px] border-solid border-gray-100 shadow-md flex flex-col shrink-0 transition-shadow duration-300 hover:shadow-2xl"
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }} // Stop link clicks during drag
            >
              <div className="relative w-full h-[216px] bg-gray-200 flex-shrink-0 pointer-events-none overflow-hidden">
                <img src={profile.image} alt={profile.name} className="absolute top-0 left-0 w-full h-full object-cover object-top" />
                <div className="absolute top-3.5 right-3 px-3 h-5 bg-[#0d244b] rounded-full flex items-center justify-center shadow-md">
                  <span className="[font-family:'Lato',Helvetica] font-bold text-white text-[10.1px] tracking-[0] leading-[13.5px] whitespace-nowrap">{profile.batch}</span>
                </div>
              </div>
              <div className="flex flex-col px-5 pt-5 pb-5 flex-1 pointer-events-none">
                <div className="flex items-center justify-center w-full mb-[8px]">
                  <span className="[font-family:'Lato',Helvetica] font-bold text-[#c1963f] text-[10.1px] text-center tracking-[1.01px] leading-[13.5px] whitespace-nowrap">{profile.degree}</span>
                </div>
                <div className="flex items-center justify-center w-full mb-[14px]">
                  <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[16.9px] text-center tracking-[0] leading-[23.7px] whitespace-nowrap">{profile.name}</span>
                </div>
                <div className={`flex flex-col items-center justify-center bg-gray-50 rounded-[10.14px] border-[0.85px] border-solid border-gray-100 mb-[13.5px] ${profile.placedAtMultiline ? "py-[11px]" : "h-[59px] py-[11px]"}`}>
                  <span className="[font-family:'Lato',Helvetica] font-bold text-gray-400 text-[10.1px] text-center tracking-[0] leading-[13.5px] whitespace-nowrap mb-[3.4px]">PLACED AT</span>
                  {profile.placedAtMultiline ? (
                    <span className="[font-family:'Lato',Helvetica] font-bold text-[#1a459b] text-[13.5px] text-center tracking-[0] leading-[16.9px] px-2 h-[34px] flex items-center">
                      {profile.placedAt.split("\n").map((line, i, arr) => (<span key={i}>{line}{i < arr.length - 1 && <br />}</span>))}
                    </span>
                  ) : (
                    <span className="[font-family:'Lato',Helvetica] font-bold text-[#1a459b] text-[13.5px] text-center tracking-[0] leading-[20.3px] whitespace-nowrap h-[34px] flex items-center">{profile.placedAt}</span>
                  )}
                </div>
                <div className={`w-full h-[60px] ${profile.salaryBg} rounded-[10.14px] shadow-sm flex flex-col items-center justify-center`}>
                  <span className="[font-family:'Lato',Helvetica] font-bold text-white text-[10.1px] text-center tracking-[0] leading-[13.5px] whitespace-nowrap opacity-80">SALARY OFFERED</span>
                  <span className={`[font-family:'Lato',Helvetica] font-black ${profile.salaryTextColor} text-[20.3px] text-center tracking-[0] leading-[27px] whitespace-nowrap`}>{profile.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
