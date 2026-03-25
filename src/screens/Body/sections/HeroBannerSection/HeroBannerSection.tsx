import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import imgDarshna from "../../../../assets/Darshna_Sinha.png";
import imgSonali from "../../../../assets/Sonali_Mathur.png";

const studentProfiles = [
  {
    left: "left-0",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axudcgs5gacfjephqd0hkobr5rwljixcwqtkipdp1qcjfoxcucncpeq38fgpc.png",
    imgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/shobhit-poddar-1.png",
    stat: "40 LPA",
  },
  {
    left: "left-[60px]",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axubd3ub7pqlysrlah0zsgoeptycl1lw9rfyxv-t-bslwymi74sdsppfo-pwo.png",
    imgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/srijan-sah-1.png",
    stat: "20 LPA",
  },
  {
    left: "left-[120px]",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axudcgs5gacfjephqd0hkobr5rwljixcwqtkipdp1qcjfoxcucncpeq38fgpc.png",
    imgUrl: imgDarshna,
    stat: "14 LPA",
  },
  {
    left: "left-[180px]",
    bgUrl: "https://c.animaapp.com/mn0n10j9vDypoz/img/ab6axubd3ub7pqlysrlah0zsgoeptycl1lw9rfyxv-t-bslwymi74sdsppfo-pwo.png",
    imgUrl: imgSonali,
    stat: "10 LPA",
  },
];

const disciplines = ["Engineering", "Management", "Law", "Pharmacy", "Agriculture", "Architecture", "Design"];
const programs: Record<string, string[]> = {
  Engineering: ["B.Tech CSE", "B.Tech ECE", "B.Tech Mechanical", "B.Tech Civil"],
  Management: ["MBA", "BBA", "PGDM"],
  Law: ["LLB", "LLM", "BBA LLB"],
  Pharmacy: ["B.Pharma", "M.Pharma", "D.Pharma"],
  Agriculture: ["B.Sc Agriculture", "M.Sc Agriculture"],
  Architecture: ["B.Arch", "M.Arch"],
  Design: ["B.Des Interior", "B.Des Fashion", "B.Des Graphic"],
};
const states = ["Rajasthan", "Delhi", "Maharashtra", "Gujarat", "Uttar Pradesh", "Madhya Pradesh", "Karnataka", "Tamil Nadu"];
const qualifications = ["12th / Intermediate", "Diploma", "Graduation", "Post Graduation"];

const generateCaptcha = () => Math.floor(10000 + Math.random() * 90000).toString();

export const HeroBannerSection = (): JSX.Element => {
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", state: "", qualification: "", discipline: "", program: "", captchaInput: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captcha] = useState(generateCaptcha);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [disciplineOpen, setDisciplineOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [qualOpen, setQualOpen] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.mobile.trim()) e.mobile = "Mobile is required";
    else if (!/^\d{10}$/.test(form.mobile.replace(/\D/g, ""))) e.mobile = "Enter valid 10-digit number";
    if (!form.state) e.state = "Select a state";
    if (!form.qualification) e.qualification = "Select qualification";
    if (!form.discipline) e.discipline = "Select discipline";
    if (!form.program) e.program = "Select program";
    if (!consent) e.consent = "Please accept consent";
    if (form.captchaInput !== captcha) e.captcha = "Captcha does not match";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-3 py-3 [font-family:'Lato',Helvetica] font-normal text-[#0d244b] text-xs tracking-[0] leading-normal bg-white rounded-lg border shadow-[0px_1px_2px_#0000000d] outline-none focus:ring-2 focus:ring-[#0d244b]/30 transition-colors ${errors[field] ? "border-red-400" : "border-slate-200"}`;

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
            <div className="flex relative z-10 w-[300px] h-full items-start pt-[10px]">
              {studentProfiles.map((profile, i) => (
                <div key={i} className={`flex flex-col items-center absolute ${profile.left} z-${30 - i * 10} group`}>
                  <div className="w-[84px] h-[84px] rounded-full overflow-hidden border-[3px] border-solid border-[#c1963f] shadow-lg flex items-center justify-center">
                    <div className="w-full h-full rounded-full" style={{ background: `url(${profile.bgUrl}) 50% 50% / cover` }}>
                      <div className="w-full h-full rounded-full" style={{ background: `url(${profile.imgUrl}) 50% 50% / cover` }} />
                    </div>
                  </div>
                  <div className="mt-2 [font-family:'Lato',Helvetica] font-black text-white text-[14px] leading-none whitespace-nowrap drop-shadow-md">{profile.stat}</div>
                </div>
              ))}
            </div>

            {/* JOIN THEM TODAY Pill */}
            <div className="absolute left-[242px] top-[26px] z-0 h-[52px] w-[140px] pl-[44px] pr-4 flex justify-start items-center bg-[linear-gradient(90deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.1)_100%)] border-[1.5px] border-[#c1963f] rounded-r-full backdrop-blur-[6px] shadow-lg">
              <span className="[font-family:'Lato',Helvetica] font-extrabold text-white text-[14.5px] leading-[1.1] text-left whitespace-pre-line tracking-tight drop-shadow-md">JOIN THEM<br />TODAY</span>
            </div>
          </div>
        </div>

        {/* Right: Admission form */}
        <div className="w-full lg:w-[420px] xl:w-[450px] lg:min-w-[380px] pt-4 lg:flex-shrink-0 z-10">
          <Card className="bg-white rounded-2xl border border-solid border-slate-100 shadow-[0px_10px_10px_-5px_#0000000a,0px_20px_25px_-5px_#0000001a]">
            <CardContent className="flex flex-col items-start gap-6 pt-8 pb-12 px-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center w-full gap-4 py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-xl text-center">Application Submitted!</h3>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-slate-500 text-sm text-center">Our admissions team will contact you shortly.</p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "", state: "", qualification: "", discipline: "", program: "", captchaInput: "" }); setConsent(false); }}
                    className="mt-2 bg-[#c1963f] hover:bg-[#a87d35] rounded-full [font-family:'Lato',Helvetica] font-black text-white text-xs border-0">
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full" noValidate>
                  {/* Header badge */}
                  <div className="flex flex-col items-center gap-[11px] w-full">
                    <div className="inline-flex items-center justify-center px-6 py-1.5 bg-[#c1963f] rounded-full shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]">
                      <span className="[font-family:'Lato',Helvetica] font-black text-white text-xs text-center tracking-[0] leading-4 whitespace-nowrap">ADMISSIONS OPEN 2024</span>
                    </div>
                    <span className="[font-family:'Lato',Helvetica] font-black text-slate-500 text-[11px] text-center tracking-[1.65px] leading-[16.5px] whitespace-nowrap">APPLY FOR SGVUEE 2024</span>
                  </div>

                  {/* Name */}
                  <div>
                    <input type="text" placeholder="Name *" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputClass("name")} />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <input type="email" placeholder="Email *" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={inputClass("email")} />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.email}</p>}
                  </div>

                  {/* Mobile */}
                  <div>
                    <input type="tel" placeholder="+91 Enter Mobile No. *" value={form.mobile} onChange={e => setForm(f => ({ ...f, mobile: e.target.value }))} className={inputClass("mobile")} />
                    {errors.mobile && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.mobile}</p>}
                  </div>

                  {/* State + Qualification */}
                  <div className="grid grid-cols-2 gap-3 w-full relative">
                    {/* State dropdown */}
                    <div className="relative">
                      <button type="button" onClick={() => { setStateOpen(o => !o); setQualOpen(false); setDisciplineOpen(false); setProgramOpen(false); }}
                        className={`w-full px-3 py-3 text-left [font-family:'Lato',Helvetica] font-normal text-xs bg-white rounded-lg border shadow-[0px_1px_2px_#0000000d] flex items-center justify-between ${errors.state ? "border-red-400" : "border-slate-200"} ${form.state ? "text-[#0d244b]" : "text-slate-500"}`}>
                        <span className="truncate">{form.state || "State *"}</span>
                        <svg className={`w-3 h-3 ml-1 flex-shrink-0 transition-transform ${stateOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {stateOpen && (
                        <ul className="absolute z-50 top-full left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg max-h-40 overflow-y-auto mt-1">
                          {states.map(s => (
                            <li key={s}>
                              <button type="button" onClick={() => { setForm(f => ({ ...f, state: s })); setStateOpen(false); }}
                                className="w-full text-left px-3 py-2 [font-family:'Lato',Helvetica] text-xs text-[#0d244b] hover:bg-slate-50 transition-colors">
                                {s}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                      {errors.state && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.state}</p>}
                    </div>

                    {/* Qualification dropdown */}
                    <div className="relative">
                      <button type="button" onClick={() => { setQualOpen(o => !o); setStateOpen(false); setDisciplineOpen(false); setProgramOpen(false); }}
                        className={`w-full px-3 py-3 text-left [font-family:'Lato',Helvetica] font-normal text-xs bg-white rounded-lg border shadow-[0px_1px_2px_#0000000d] flex items-center justify-between ${errors.qualification ? "border-red-400" : "border-slate-200"} ${form.qualification ? "text-[#0d244b]" : "text-slate-500"}`}>
                        <span className="truncate">{form.qualification || "Qualification *"}</span>
                        <svg className={`w-3 h-3 ml-1 flex-shrink-0 transition-transform ${qualOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {qualOpen && (
                        <ul className="absolute z-50 top-full left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg mt-1">
                          {qualifications.map(q => (
                            <li key={q}>
                              <button type="button" onClick={() => { setForm(f => ({ ...f, qualification: q })); setQualOpen(false); }}
                                className="w-full text-left px-3 py-2 [font-family:'Lato',Helvetica] text-xs text-[#0d244b] hover:bg-slate-50 transition-colors">
                                {q}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                      {errors.qualification && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.qualification}</p>}
                    </div>
                  </div>

                  {/* Discipline dropdown */}
                  <div className="relative">
                    <button type="button" onClick={() => { setDisciplineOpen(o => !o); setStateOpen(false); setQualOpen(false); setProgramOpen(false); }}
                      className={`w-full px-3 py-3 text-left [font-family:'Lato',Helvetica] font-normal text-xs bg-white rounded-lg border shadow-[0px_1px_2px_#0000000d] flex items-center justify-between ${errors.discipline ? "border-red-400" : "border-slate-200"} ${form.discipline ? "text-[#0d244b]" : "text-slate-500"}`}>
                      <span>{form.discipline || "Discipline Interested In *"}</span>
                      <svg className={`w-3 h-3 ml-1 flex-shrink-0 transition-transform ${disciplineOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {disciplineOpen && (
                      <ul className="absolute z-50 top-full left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg mt-1">
                        {disciplines.map(d => (
                          <li key={d}>
                            <button type="button" onClick={() => { setForm(f => ({ ...f, discipline: d, program: "" })); setDisciplineOpen(false); }}
                              className="w-full text-left px-3 py-2 [font-family:'Lato',Helvetica] text-xs text-[#0d244b] hover:bg-slate-50 transition-colors">
                              {d}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    {errors.discipline && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.discipline}</p>}
                  </div>

                  {/* Program dropdown */}
                  <div className="relative">
                    <button type="button" onClick={() => { if (form.discipline) { setProgramOpen(o => !o); setStateOpen(false); setQualOpen(false); setDisciplineOpen(false); } }}
                      className={`w-full px-3 py-3 text-left [font-family:'Lato',Helvetica] font-normal text-xs bg-white rounded-lg border shadow-[0px_1px_2px_#0000000d] flex items-center justify-between ${errors.program ? "border-red-400" : "border-slate-200"} ${form.program ? "text-[#0d244b]" : "text-slate-500"} ${!form.discipline ? "opacity-60 cursor-not-allowed" : ""}`}>
                      <span>{form.program || "Select Program *"}</span>
                      <svg className={`w-3 h-3 ml-1 flex-shrink-0 transition-transform ${programOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {programOpen && form.discipline && (
                      <ul className="absolute z-50 top-full left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg mt-1">
                        {(programs[form.discipline] || []).map(p => (
                          <li key={p}>
                            <button type="button" onClick={() => { setForm(f => ({ ...f, program: p })); setProgramOpen(false); }}
                              className="w-full text-left px-3 py-2 [font-family:'Lato',Helvetica] text-xs text-[#0d244b] hover:bg-slate-50 transition-colors">
                              {p}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    {errors.program && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.program}</p>}
                  </div>

                  {/* Captcha */}
                  <div className="flex items-center gap-2 w-full">
                    <div className="inline-flex flex-col items-start px-4 py-2 bg-slate-50 rounded-lg border border-solid border-slate-100 flex-shrink-0 select-none">
                      <span className="[font-family:'Lato',Helvetica] font-black text-[#0d244b] text-sm tracking-[1.40px] leading-5 whitespace-nowrap line-through">{captcha}</span>
                    </div>
                    <div className="flex-1">
                      <input type="text" placeholder="Enter Captcha" value={form.captchaInput} onChange={e => setForm(f => ({ ...f, captchaInput: e.target.value }))}
                        className={inputClass("captcha")} maxLength={5} />
                    </div>
                  </div>
                  {errors.captcha && <p className="text-red-500 text-[10px] -mt-2 [font-family:'Lato',Helvetica]">{errors.captcha}</p>}

                  {/* Consent */}
                  <div>
                    <div className="flex items-start gap-3 p-3 w-full bg-slate-50 rounded-lg cursor-pointer" onClick={() => setConsent(c => !c)}>
                      <div className="flex-shrink-0 mt-0.5">
                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${consent ? "bg-[#0d244b] border-[#0d244b]" : "bg-white border-gray-500"}`}>
                          {consent && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      </div>
                      <p className="[font-family:'Lato',Helvetica] font-normal text-slate-500 text-[10px] tracking-[0] leading-[16.2px] flex-1 cursor-pointer">
                        I authorize Suresh Gyan Vihar University to contact me via email, SMS, WhatsApp and call. This will override the registry on DND / NDNC.
                      </p>
                    </div>
                    {errors.consent && <p className="text-red-500 text-[10px] mt-1 [font-family:'Lato',Helvetica]">{errors.consent}</p>}
                  </div>

                  <Button type="submit" className="w-full h-auto py-4 bg-[#0d244b] rounded-lg shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] hover:bg-[#0d244b]/90 border-0">
                    <span className="[font-family:'Lato',Helvetica] font-black text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap">APPLY NOW</span>
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
