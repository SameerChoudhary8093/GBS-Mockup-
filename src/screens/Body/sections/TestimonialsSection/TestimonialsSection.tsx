import { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Dr. Arvind Kalia",
    title: "National Head Mentoring",
    subtitle: "Rajasthan Patrika Pvt. Ltd.",
    quote: "The university's dedication to holistic development is truly impressive. By fostering a culture of mentorship and excellence, SGVU is successfully shaping the next generation of leaders and professionals within the Rajasthan ecosystem and beyond.",
    avatarBg: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axub1-otdpcpkdqu4d9-xr-fguglqey4fctzb7qihtghlq99ardpkqetkhnbc-3.png",
    avatarImages: ["https://c.animaapp.com/mn0n10j9vDypoz/img/image-12-2.png"],
  },
  {
    name: "Aditya Malik",
    title: "Group COO,",
    subtitle: "Veranda Learning",
    quote: "SGVU's commitment to integrating new-age technology with higher education is commendable. They are effectively preparing students for the evolving global workforce by focusing on high-impact, industry-relevant skills and a digital-first learning mindset",
    avatarBg: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axub1-otdpcpkdqu4d9-xr-fguglqey4fctzb7qihtghlq99ardpkqetkhnbc-3.png",
    avatarImages: ["https://c.animaapp.com/mn0n10j9vDypoz/img/image-12-2.png", "https://c.animaapp.com/mn0n10j9vDypoz/img/image-21.png"],
  },
  {
    name: "Nilesh Lolayekar",
    title: "President Higher Education,",
    subtitle: "UpGrad",
    quote: "The university's approach to modern education and business modeling is truly forward-thinking. SGVU is successfully creating an ecosystem where innovation and entrepreneurship are not just taught, but deeply ingrained in the student experience",
    avatarBg: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axub1-otdpcpkdqu4d9-xr-fguglqey4fctzb7qihtghlq99ardpkqetkhnbc-3.png",
    avatarImages: ["https://c.animaapp.com/mn0n10j9vDypoz/img/image-12-2.png", "https://c.animaapp.com/mn0n10j9vDypoz/img/image-20.png"],
  },
];

export const TestimonialsSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-slate-50 py-12 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-50 rounded-2xl border border-solid border-slate-100 min-h-[298px] shadow-none">
              <CardContent className="p-0 relative h-full">
                <div className="pt-12 pl-11 pr-6 flex gap-[17px] items-start">
                  <div className="w-[74px] h-[74px] mt-[-5px] ml-[-5px] flex-shrink-0 rounded-full overflow-hidden border-[2.31px] border-solid border-[#c1963f]">
                    <div className="mt-[2.3px] ml-[2.3px] w-[69.38px] h-[69.38px] relative" style={{ background: `url(${testimonial.avatarBg}) 50% 50% / cover` }}>
                      {testimonial.avatarImages.map((src, imgIndex) => (
                        <img key={imgIndex} className="absolute top-0 left-0 w-[69px] h-[69px] object-cover" alt="Testimonial" src={src} />
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="[font-family:'Lato',Helvetica] font-black text-[#0d254a] text-[20.2px] tracking-[0] leading-[30.2px] whitespace-nowrap">{testimonial.name}</div>
                    <div className="[font-family:'Lato',Helvetica] font-normal text-slate-500 text-xs tracking-[0] leading-[16px]">
                      {testimonial.title}<br />{testimonial.subtitle}
                    </div>
                  </div>
                </div>
                <div className="pt-4 px-11 pr-6 pb-8">
                  <p className="[font-family:'Lato',Helvetica] font-normal text-slate-600 text-base tracking-[0] leading-6">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden flex flex-col gap-4">
          <Card className="bg-slate-50 rounded-2xl border border-solid border-slate-100 shadow-none">
            <CardContent className="p-0">
              <div className="pt-8 pl-6 pr-6 flex gap-4 items-start">
                <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full overflow-hidden border-[2.31px] border-solid border-[#c1963f]">
                  <div className="w-full h-full relative" style={{ background: `url(${testimonials[activeIndex].avatarBg}) 50% 50% / cover` }}>
                    {testimonials[activeIndex].avatarImages.map((src, imgIndex) => (
                      <img key={imgIndex} className="absolute top-0 left-0 w-full h-full object-cover" alt="Testimonial" src={src} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <div className="[font-family:'Lato',Helvetica] font-black text-[#0d254a] text-lg">{testimonials[activeIndex].name}</div>
                  <div className="[font-family:'Lato',Helvetica] font-normal text-slate-500 text-xs">{testimonials[activeIndex].title} {testimonials[activeIndex].subtitle}</div>
                </div>
              </div>
              <div className="px-6 pt-4 pb-8">
                <p className="[font-family:'Lato',Helvetica] font-normal text-slate-600 text-sm leading-6">{testimonials[activeIndex].quote}</p>
              </div>
            </CardContent>
          </Card>
          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveIndex(i)} className={`w-2.5 h-2.5 rounded-full transition-colors border-0 cursor-pointer ${i === activeIndex ? "bg-[#c1963f]" : "bg-slate-300"}`} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
