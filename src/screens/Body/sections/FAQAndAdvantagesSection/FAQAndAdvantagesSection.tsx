import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent } from "../../../../components/ui/card";

const faqItems = [
  {
    id: "faq-1",
    question: "Is hostel facility available for students?",
    answer: "Yes, we have separate hostels available for boys and girls, both of them equipped with all the facilities one could ever ask for including high-speed Wi-Fi, laundry, and 24/7 security.",
  },
  {
    id: "faq-2",
    question: "How is SGVU different from traditional institutes?",
    answer: "SGVU stands apart through its EDU-REVOLUTION model — 60% learning outside classrooms, industry co-designed curriculum, AI-powered ecosystems, and a focus on employability over attendance. Students earn while they learn through internships and real-world projects.",
  },
  {
    id: "faq-3",
    question: "Is there an entrance exam for admission?",
    answer: "Yes, admissions are conducted through SGVUEE (Suresh Gyan Vihar University Entrance Examination). Eligible candidates can also gain direct admission based on their qualifying exam scores. Merit-based scholarships are linked to entrance performance.",
  },
  {
    id: "faq-4",
    question: "Are scholarships available for students?",
    answer: "Absolutely. SGVU offers a wide range of merit-based scholarships and freeships for Session 2026-27. Financial assistance is available across multiple programs. Visit the Scholarship section or contact our admissions team for details.",
  },
  {
    id: "faq-5",
    question: "Does the curriculum ensure that I am industry-ready?",
    answer: "Yes. SGVU's curriculum is co-designed with industry leaders and regularly updated to reflect evolving market demands. Students get hands-on exposure through live projects, industry immersion, Centres of Excellence, and a robust placement cell with 125+ recruiting companies.",
  },
];

const advantageItems = [
  {
    id: "adv-1",
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-4.svg",
    title: "Dynamic Student Council",
    description: "Empowering students by developing qualities of discipline, leadership, team working, problem solving, decision making & giving freedom to plan & execute activities of clubs, communities, & collegiate system.",
  },
  {
    id: "adv-2",
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-7.svg",
    title: "Outcome Based Education",
    description: "Curriculum design, development & delivery targeting the set outcomes that best caters to the needs of the industry and keeps pace with the ever-changing academic environment.",
  },
  {
    id: "adv-3",
    icon: "https://c.animaapp.com/mn0n10j9vDypoz/img/margin-3.svg",
    title: "Professional Ethics & Communication",
    description: "Develop and enhance the employability by inculcating the professional ethics and effective oral & written communication.",
  },
];

export const FAQAndAdvantagesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#0d244b] py-16 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">
        {/* Left Column - FAQs */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 mb-4">
            <h2 className="[font-family:'Lexend',Helvetica] font-normal text-white text-[41px] text-center tracking-[-1.03px] leading-[41px] whitespace-nowrap">FAQs</h2>
            <p className="[font-family:'Lexend',Helvetica] font-normal text-slate-300 text-[10.9px] text-center tracking-[0] leading-[16.4px]">Everything you need to know about life at Suresh Gyan Vihar University.</p>
          </div>
          <div className="w-[79.64px] h-[3.32px] bg-[#c1963f] rounded-full mb-10" />
          <div className="w-full max-w-[638px]">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="bg-[#ffffff0d] rounded-[9.03px] border border-[#ffffff1a] px-[18px] overflow-hidden">
                  <AccordionTrigger className="[font-family:'Lexend',Helvetica] font-bold text-white text-[13.5px] tracking-[0] leading-[21.1px] hover:no-underline py-[18px] text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="[font-family:'Lexend',Helvetica] font-normal text-slate-300 text-xs tracking-[0] leading-[18.1px] pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Right Column - SGVU Advantages */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 mb-4 mt-4">
            <h2 className="[font-family:'Lato',Helvetica] font-black text-white text-[29.9px] text-center tracking-[-0.75px] leading-[33.2px]">DISCOVER THE SGVU ADVANTAGES</h2>
          </div>
          <div className="w-[79.64px] h-[3.32px] bg-[#c1963f] rounded-full mb-10" />
          <div className="w-full max-w-[510px] flex flex-col gap-6">
            {advantageItems.map((item) => (
              <Card key={item.id} className="bg-white rounded-[9.11px] border border-slate-200 shadow-none">
                <CardContent className="p-0 flex flex-row items-start gap-0 min-h-[124px]">
                  <div className="flex-shrink-0 flex items-start justify-center pt-[21px] pl-[25px]">
                    <img src={item.icon} alt={item.title} className="w-[42px] h-[61px] object-contain" />
                  </div>
                  <div className="flex flex-col justify-start pt-[21px] pl-[12px] pr-[18px] pb-[18px]">
                    <p className="[font-family:'Lato',Helvetica] font-bold text-[#0d254a] text-[15.2px] tracking-[0] leading-[21.2px] mb-2">{item.title}</p>
                    <p className="[font-family:'Lato',Helvetica] font-normal text-slate-600 text-[12.1px] tracking-[0] leading-[18.2px]">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
