const featureItems = [
  {
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/background-1.svg",
    title: "Global Industry Tie-Ups",
    description:
      "SGVU collaborates with leading national and global companies to align academics with real-world industry standards.",
  },
  {
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/background.svg",
    title: "Industry Collaborative Curriculum",
    description:
      "Curriculum is co-designed with industry experts to stay relevant and aligned with evolving professional needs.",
  },
  {
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/background-3.svg",
    title: "Hands-on Immersion & Live Projects",
    description:
      "Students gain practical exposure through industry immersion programs, live projects, and field assignments.",
  },
  {
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/background-2.svg",
    title: "Centres of Excellence",
    description:
      "Centres of Excellence support industry-aligned research, innovation, and certifications through global collaborations.",
  },
];

const schoolImages = [
  {
    src: "https://c.animaapp.com/mn0n10j9vDypoz/img/background-border-shadow-2.svg",
    alt: "Background border",
  },
  {
    src: "https://c.animaapp.com/mn0n10j9vDypoz/img/background-border-shadow-1.svg",
    alt: "Background border",
  },
  {
    src: "https://c.animaapp.com/mn0n10j9vDypoz/img/background-border-shadow.svg",
    alt: "Background border",
  },
];

export const IndustryTestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10">
      {/* Background blur circle */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0d244b0d] rounded-full blur-[32px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-10">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-2">
          <h2 className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-3xl tracking-[0] leading-9 text-center">
            Our Premium Schools
          </h2>
          <p className="mt-1 [font-family:'Lato',Helvetica] font-black text-[#c1963f] text-lg text-center tracking-[0] leading-6">
            Excellence and virtue delivered through a pedagogy prepared by{" "}
            <br />
            subject experts and industry leaders
          </p>
        </div>

        {/* School Images Row */}
        <div className="flex flex-row gap-4 justify-center mt-6 mb-8">
          {schoolImages.map((img, index) => (
            <img
              key={index}
              className="w-[387px] h-[246px] object-cover"
              alt={img.alt}
              src={img.src}
            />
          ))}
        </div>

        {/* Feature Items Grid */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-2">
          {featureItems.map((item, index) => (
            <div key={index} className="flex flex-row gap-3 items-start">
              <img
                className="-mt-0.5 w-20 h-20 -ml-3 flex-shrink-0"
                alt="Background"
                src={item.icon}
              />
              <div className="flex flex-col gap-1 pt-1">
                <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  {item.title}
                </span>
                <span className="[font-family:'Lato',Helvetica] font-bold text-slate-500 text-xs tracking-[0] leading-[19.5px]">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
