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


export const IndustryTestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 md:py-16">
      {/* Background blur circle */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#0d244b0d] rounded-full blur-[32px] pointer-events-none" />

      <div className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-8 xl:px-10">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-8 px-2">
          <h2 className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-2xl md:text-3xl lg:text-[34px] tracking-[0] leading-tight text-center">
            Our Premium Schools
          </h2>
          <p className="mt-3 [font-family:'Lato',Helvetica] font-bold text-[#c1963f] text-[15px] md:text-lg text-center tracking-[0] leading-snug max-w-[800px]">
            Excellence and virtue delivered through a pedagogy prepared by{" "}
            <br className="hidden md:block" />
            subject experts and industry leaders
          </p>
        </div>

        {/* School Images Row / Mobile Video Stack */}
        <div className="w-full pb-4 mt-8">
          {/* Changed to flex-col for all viewports as per instruction layout rules */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full mx-auto max-w-[1000px]">
            {[
              "GWbAZYC_B9s",
              "FEyAlmvfwqE"
            ].map((videoId, index) => (
              <div key={index} className="w-full lg:w-1/2 max-w-[500px] rounded-2xl overflow-hidden shadow-xl aspect-video relative bg-slate-900 border-4 border-white">
                 <iframe
                   className="absolute top-0 left-0 w-full h-full"
                   src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0`}
                   title={`YouTube video player ${index + 1}`}
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                 ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 mt-10 md:mt-12">
          {featureItems.map((item, index) => (
            <div key={index} className="flex flex-row gap-3 md:gap-4 items-start bg-white p-2 rounded-xl">
              <img
                className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex-shrink-0 object-contain -ml-2 sm:-ml-3 mt-1"
                alt={item.title}
                src={item.icon}
              />
              <div className="flex flex-col gap-1.5 pt-1 flex-1">
                <h3 className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-[17px] md:text-[19px] tracking-[0] leading-tight">
                  {item.title}
                </h3>
                <p className="[font-family:'Lato',Helvetica] font-normal text-slate-500 text-[13.5px] md:text-sm tracking-[0] leading-relaxed pr-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Utility styling to hide scrollbars on mobile horizontal scroll */}
      <style>{`
        .hide-scrollbars::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbars {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
