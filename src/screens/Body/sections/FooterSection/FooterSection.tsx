import { Button } from "../../../../components/ui/button";

const quickLinks = [
  { label: "Admission Procedure", href: "https://sgvu.edu.in/admission-procedure" },
  { label: "Course Fee Structure", href: "https://www.gyanvihar.org/fees-structure" },
  { label: "Scholarship Details", href: "https://www.gyanvihar.org/wp-content/uploads/attach/sgvu-scholarships.pdf" },
  { label: "Placements Cell", href: "https://www.gyanvihar.org/placement" },
  { label: "Anti-Ragging Policy", href: "https://www.gyanvihar.org/uploads/Anti_Ragging_Committee_Squad_and_Monitoring_Cell_2024_7b5e021e97.pdf" },
];

const socialIcons = [
  { alt: "Linkedin", src: "https://c.animaapp.com/mn0n10j9vDypoz/img/linkedin-.svg", href: "https://learning.linkedin.com/for-higher-education" },
  { alt: "Insta", src: "https://c.animaapp.com/mn0n10j9vDypoz/img/insta.svg", href: "https://www.instagram.com/sureshgyanvihar.university/" },
  { alt: "X", src: "https://c.animaapp.com/mn0n10j9vDypoz/img/x.svg", href: "https://x.com/SureshGyanVihar?mx=2" },
  { alt: "Facebook", src: "https://c.animaapp.com/mn0n10j9vDypoz/img/dribbble.svg", href: "https://www.facebook.com/sureshgyanviharuniversityjaipur" },
  { alt: "Youtube", src: "https://c.animaapp.com/mn0n10j9vDypoz/img/frame.svg", href: "https://www.youtube.com/channel/UCXCA8AXoD-7h_0-9Num54zg" },
];

const contactItems = [
  {
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/container-15.svg",
    iconClass: "w-4 h-[38px] shrink-0",
    text: (<>Mahal Rd, Jagatpura, Jaipur, Rajasthan<br />302017</>),
    href: "https://maps.google.com/?q=Suresh+Gyan+Vihar+University+Jaipur",
  },
  {
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/container-7.svg",
    iconClass: "w-[18px] h-[19px] shrink-0",
    text: "Call: 83066 94440",
    href: "tel:+8306694440",
  },
  {
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/container-12.svg",
    iconClass: "w-5 h-[19px] shrink-0",
    text: "admissions@gyanvihar.org",
    href: "mailto:admissions@gyanvihar.org",
  },
];

export const FooterSection = (): JSX.Element => {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full flex flex-col bg-[#0d244b]">
      <div className="w-full px-4 md:px-8 pt-[83px] pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[46px] max-w-[1231px] mx-auto">
          {/* Column 1: Logo, description, social icons */}
          <div className="flex flex-col gap-0">
            <div className="w-[245px] h-[59px] mb-[22px]">
              <div className="w-full h-full [background:url(https://c.animaapp.com/mn0n10j9vDypoz/img/container-1.png)_50%_50%_/_cover] brightness-0 invert" />
            </div>
            <p className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[21.9px] mb-[22px]">
              Suresh Gyan Vihar University is a self-financed state university located in Jaipur, Rajasthan, India. In 2017, the university became the first private university in Rajasthan to be awarded an &#39;A&#39; grade by NAAC.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socialIcons.map((icon) => (
                <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                  <img className={icon.alt === "Youtube" ? "w-[27px] h-[19px]" : "w-9 h-9"} alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <div className="pb-2 mb-[30px] border-b border-[#ffffff1a]">
              <h3 className="[font-family:'Lato',Helvetica] font-black text-white text-[17.3px] tracking-[0] leading-[26.9px] whitespace-nowrap">Quick Links</h3>
            </div>
            <div className="flex flex-col gap-[15px]">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors bg-transparent border-0 text-left cursor-pointer p-0 no-underline block w-fit">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col">
            <div className="pb-2 mb-[30px] border-b border-[#ffffff1a]">
              <h3 className="[font-family:'Lato',Helvetica] font-black text-white text-[17.3px] tracking-[0] leading-[26.9px] whitespace-nowrap">Contact Info</h3>
            </div>
            <div className="flex flex-col gap-[15px]">
              {contactItems.map((item, index) => (
                <a key={index} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-[11px] hover:opacity-80 transition-opacity">
                  <img className={item.iconClass} alt="Contact icon" src={item.icon} />
                  <span className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px]">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Admissions Help */}
          <div className="flex flex-col">
            <div className="pb-2 mb-[30px] border-b border-[#ffffff1a]">
              <h3 className="[font-family:'Lato',Helvetica] font-black text-white text-[17.3px] tracking-[0] leading-[26.9px] whitespace-nowrap">Admissions Help</h3>
            </div>
            <a href="tel:+8306694440" className="[font-family:'Lato',Helvetica] font-normal text-slate-400 text-[13.5px] tracking-[0] leading-[19.2px] whitespace-nowrap mb-[27px] hover:text-white transition-colors">
              Call: 83066 94440
            </a>
            <Button onClick={() => scrollTo("#hero")} className="h-auto w-full bg-[#c1963f] hover:bg-[#a87d33] rounded-[7.69px] py-[11px] px-4 [font-family:'Lato',Helvetica] font-bold text-white text-[15.4px] leading-[23.1px] tracking-[0] border-0">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#ffffff1a] py-4 px-4">
        <p className="[font-family:'Lato',Helvetica] font-normal text-slate-500 text-xs text-center tracking-[0] leading-4">
          © 2026 Suresh Gyan Vihar University. All Rights Reserved. Accredited with NAAC &#39;A+&#39; Grade.
        </p>
      </div>
    </footer>
  );
};
