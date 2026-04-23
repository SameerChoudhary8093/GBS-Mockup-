import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { CampusLifeGallerySection } from "./sections/CampusLifeGallerySection";
import { EducationExperienceSection } from "./sections/EducationExperienceSection";
import { EducationRevolutionSection } from "./sections/EducationRevolutionSection";
import { FAQAndAdvantagesSection } from "./sections/FAQAndAdvantagesSection/FAQAndAdvantagesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection/HeroBannerSection";
import { IndustryTestimonialsSection } from "./sections/IndustryTestimonialsSection/IndustryTestimonialsSection";
import { ProgramsOfferedSection } from "./sections/ProgramsOfferedSection";
import { RankingsInfoSection } from "./sections/RankingsInfoSection/RankingsInfoSection";
import { RecruitersShowcaseSection } from "./sections/RecruitersShowcaseSection";
import { ResearchHighlightsSection } from "./sections/ResearchHighlightsSection/ResearchHighlightsSection";
import { ScholarshipInfoSection } from "./sections/ScholarshipInfoSection";
import { StatsOverviewSection } from "./sections/StatsOverviewSection";
import { StudentSuccessOverviewSection } from "./sections/StudentSuccessOverviewSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const mainNavItems = [
  { label: "ADMISSIONS", href: "#hero" },
  { label: "PROGRAMS", href: "#programs" },
  { label: "SCHOLARSHIPS", href: "#scholarship" },
  { label: "CAMPUS LIFE", href: "#campus-life" },
  { label: "ABOUT SGVU", href: "#rankings" },
];

export const Body = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      
      // Highlight the form if scrolling to hero section
      if (id === "hero") {
        setTimeout(() => {
          const formCard = el.querySelector('[class*="bg-white rounded-2xl"]');
          if (formCard) {
            formCard.classList.add("form-highlight");
            setTimeout(() => {
              formCard.classList.remove("form-highlight");
            }, 3000);
          }
        }, 800); // Wait for scroll to complete
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const sectionIds = ["hero", "rankings", "programs", "scholarship", "campus-life", "student-success", "research", "footer"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <div className="bg-slate-50 overflow-x-hidden w-full flex flex-col" data-model-id="109:3">

      {/* Top utility bar */}
      <div className="w-full h-[43px] hidden md:flex items-center justify-between bg-[#0d244b] border-b border-[#ffffff1a] px-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <img className="w-[18px] h-[18px]" alt="Phone" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-6.svg" />
            <a href="tel:+8306694440" className="[font-family:'Lato',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap hover:underline">
              +83066 94440
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-4" alt="Email" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-14.svg" />
            <a href="mailto:admissions@gyanvihar.org" className="[font-family:'Lato',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap hover:underline">
              admissions@gyanvihar.org
            </a>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-[#ffffff1a] rounded-sm border border-white/20 px-2 py-0.5 cursor-pointer">
          <img className="w-5 h-5" alt="Language" src="https://c.animaapp.com/mn0n10j9vDypoz/img/container-13.svg" />
          <span className="[font-family:'Lato',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap">English</span>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="w-full h-16 md:h-20 bg-white shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] flex items-center px-4 md:px-10 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a
            href="https://www.gyanvihar.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[160px] md:w-[245px] h-[38px] md:h-[59px] flex-shrink-0 bg-transparent border-0 p-0 cursor-pointer"
            style={{ background: "url(https://c.animaapp.com/mn0n10j9vDypoz/img/container-1.png) 50% 50% / contain no-repeat" }}
            aria-label="SGVU Official Website"
          />

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {mainNavItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center h-[21.5px] border-b-2 cursor-pointer bg-transparent border-x-0 border-t-0 transition-colors ${isActive ? "border-[#c1963f]" : "border-transparent hover:border-[#c1963f]"}`}
                >
                  <span className={`[font-family:'Lato',Helvetica] font-black text-[13px] tracking-[0.32px] leading-[19.5px] whitespace-nowrap ${isActive ? "text-[#c1963f]" : "text-[#0d244b]"}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("#hero")}
              className="h-auto px-6 py-2 bg-[#c1963f] hover:bg-[#a87d35] rounded-full shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] [font-family:'Lato',Helvetica] font-black text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap border-0"
            >
              APPLY NOW
            </Button>
            <Button 
              onClick={() => window.open("https://admissions.gyanvihar.org/", "_blank")}
              className="h-auto px-6 py-2 bg-[#0d244b] hover:bg-[#0a1d3d] rounded-full shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] [font-family:'Lato',Helvetica] font-black text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap border-0"
            >
              LOGIN
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-[#0d244b] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0d244b] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0d244b] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white flex flex-col pt-4 pb-8 px-6 overflow-y-auto">
          {/* Mobile nav links */}
          <div className="flex flex-col gap-1">
            {mainNavItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left py-4 px-3 [font-family:'Lato',Helvetica] font-black text-[14px] tracking-[0.32px] border-b border-slate-100 bg-transparent cursor-pointer transition-colors ${isActive ? "text-[#c1963f]" : "text-[#0d244b]"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile contact info */}
          <div className="mt-4 flex flex-col gap-2">
            <a href="tel:+8306694440" className="[font-family:'Lato',Helvetica] text-[13px] text-slate-500 hover:text-[#0d244b]">📞 +83066 94440</a>
            <a href="mailto:admissions@gyanvihar.org" className="[font-family:'Lato',Helvetica] text-[13px] text-slate-500 hover:text-[#0d244b]">✉️ admissions@gyanvihar.org</a>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <Button
              onClick={() => scrollToSection("#hero")}
              className="w-full py-3 bg-[#c1963f] hover:bg-[#a87d35] rounded-full [font-family:'Lato',Helvetica] font-black text-white text-sm border-0"
            >
              APPLY NOW
            </Button>
            <Button 
              onClick={() => window.open("https://admissions.gyanvihar.org/", "_blank")}
              className="w-full py-3 bg-[#0d244b] hover:bg-[#0a1d3d] rounded-full [font-family:'Lato',Helvetica] font-black text-white text-sm border-0"
            >
              LOGIN
            </Button>
          </div>
        </div>
      )}

      {/* Page sections */}
      <div id="hero"><HeroBannerSection /></div>
      <div id="rankings"><RankingsInfoSection /></div>
      <StatsOverviewSection />
      <RecruitersShowcaseSection />
      <IndustryTestimonialsSection />
      <div id="student-success">
        <StudentSuccessOverviewSection />
      </div>
      <EducationExperienceSection />
      <EducationRevolutionSection />
      <div id="programs"><ProgramsOfferedSection /></div>
      <div id="research"><ResearchHighlightsSection /></div>
      <div id="scholarship"><ScholarshipInfoSection /></div>
      <div id="campus-life"><CampusLifeGallerySection /></div>
      <FAQAndAdvantagesSection />
      <TestimonialsSection />
      <div id="footer"><FooterSection /></div>
    </div>
  );
};
