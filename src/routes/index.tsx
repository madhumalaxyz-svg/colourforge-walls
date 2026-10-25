import image0 from "@/assets/reference-0.jpg"
import image1 from "@/assets/reference-1.jpg"
import image2 from "@/assets/reference-2.jpg"
import image3 from "@/assets/reference-3.jpg"
import image4 from "@/assets/reference-4.jpg"
import image5 from "@/assets/reference-5.jpg";
import image6 from "@/assets/reference-6.jpg";
import image7 from "@/assets/reference-7.jpg";
import image8 from "@/assets/reference-8.jpg";
import image9 from "@/assets/reference-9.jpg";
import image10 from "@/assets/reference-10.jpg";
import { useState, type ReactNode, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { businessContact, estimateWhatsAppUrl } from "@/lib/business-contact";
import { CustomerRating } from "@/components/customer-rating";
import {
  ArrowUpRight, ChevronDown, ChevronRight, ClipboardCheck, Clock3,
  Droplets, Hammer, House, Mail, Menu, MessageCircle, Paintbrush,
  Phone, ShieldCheck, Sparkles, Star, X, Zap
} from "lucide-react";


const PHONE = businessContact.phone;
const WHATSAPP = businessContact.whatsapp;
const EMAIL = businessContact.email;
const serviceImages = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
];
const services = [
  ["Interior painting", "Bedrooms, living areas, kitchens, ceilings, and complete interiors.", "01"],
  ["Exterior building painting", "Weather-conscious finishes for homes, apartments, and commercial buildings.", "02"],
  ["Wall putty work", "Surface smoothing and preparation before primer and paint.", "03"],
  ["Door polishing", "Careful polishing for wooden doors, frames, and selected surfaces.", "04"],
  ["Wood painting & finishing", "Refinishing and protective finishes for suitable woodwork.", "05"],
  ["Texture painting", "Decorative textures, feature walls, and premium accent finishes.", "06"],
];
const optionalServices = ["Waterproofing & dampness treatment", "Primer application", "Wall sanding & preparation", "Enamel painting", "Ceiling painting", "Complete new building painting", "Repair & repainting", "Staircase, shop & office painting"];
const gallery = [
  ["Exterior transformation", image6, "large", "Exteriors"],
  ["Interior wall finish", image7, "", "Interiors"],
  ["Modern facade", image8, "", "Exteriors"],
  ["Texture detail", image9, "", "Finishing"],
  ["Wood finishing", image10, "", "Finishing"],
];
const faqs = [
  ["Do you provide both interior and exterior painting?", "Yes. We can discuss residential and commercial interior or exterior requirements during the initial conversation."],
  ["Do you perform putty and primer work?", "Putty, sanding, surface preparation, and primer can be included where required by the agreed scope."],
  ["Can you paint a newly constructed building?", "Yes, complete new-building packages can cover preparation, putty, primer, and paint based on inspection."],
  ["How is the quotation calculated?", "Pricing depends on area, surface condition, preparation, materials, finish, access, and the final agreed scope."],
  ["Do I need to arrange paint materials?", "We can discuss suitable materials and who will provide them as part of the quotation."],
  ["How long will the work take?", "Duration depends on the property size, surface condition, team, materials, and agreed scope—never a fixed promise before inspection."],
];

function Logo() { return <a className="logo" href="#top" data-testid="brand-logo"><span className="logo-mark"><Paintbrush size={20} /></span><span><b>ColourForge</b><small>Walls</small></span></a>; }
function ActionButton({ children, href = "#estimate", secondary = false, testId }: { children: ReactNode; href?: string; secondary?: boolean; testId?: string }) { return <Button variant="original" asChild><a className={`btn ${secondary ? "btn-secondary" : "btn-primary"}`} href={href} data-testid={testId}>{children}<ArrowUpRight size={16} /></a></Button>; }

function Index() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const categories = ["All work", "Interiors", "Exteriors", "Finishing"];
  const scrollTo = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); };
  const submitEstimate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
   const body = `*🎨 New Painting Estimate - ColourForge Walls*

Hello! I would like a painting estimate.

👤 *Name:* ${data.get("name")}
📞 *Phone:* ${data.get("phone")}
🏠 *Property:* ${data.get("property")}
🛠️ *Service:* ${data.get("service")}
📐 *Area / Rooms:* ${data.get("area")}
📍 *Location:* ${data.get("location")}
📅 *Preferred Date:* ${data.get("date")}
📝 *Requirements:* ${data.get("requirements") || "Not provided"}

---
Sent from leaseaprtment.fyi`;
    setSent(true);
    window.open(estimateWhatsAppUrl(body), "_blank", "noopener,noreferrer");
  };
  return <div className="site" id="top">
    <div className="topline"><span>Professional painting & finishing solutions</span><span className="topline-right"><span>Service area: {businessContact.serviceArea}</span><span className="status-dot" /> Available for enquiries</span></div>
    <header className="nav-wrap"><nav className="nav container"><Logo /><div className={`nav-links ${menu ? "open" : ""}`}><Button variant="original" onClick={() => scrollTo("#top")} data-testid="nav-home">Home</Button><Button variant="original" onClick={() => scrollTo("#services")} data-testid="nav-services">Services</Button><Button variant="original" onClick={() => scrollTo("#work")} data-testid="nav-work">Our work</Button><Button variant="original" onClick={() => scrollTo("#why-us")} data-testid="nav-why-us">Why choose us</Button><Button variant="original" onClick={() => scrollTo("#contact")} data-testid="nav-contact">Contact</Button><ActionButton testId="nav-estimate-button">Get free estimate</ActionButton></div><Button variant="original" className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation" data-testid="mobile-menu-button">{menu ? <X /> : <Menu />}</Button></nav></header>
    <main>
      <section className="hero"><div className="hero-grid container"><div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-line" /> BUILDING FINISHES / 01</div><h1>Transform your walls.<br /><em>Elevate your space.</em></h1><p className="hero-text">Professional painting, wall putty, texture finishes, door polishing, and complete painting solutions for homes and commercial properties.</p><div className="hero-actions"><ActionButton testId="hero-estimate-button">Get a free estimate</ActionButton><a className="text-link" href="#contact" data-testid="hero-contact-link">Talk to our team <ChevronRight size={17} /></a></div><div className="hero-highlights"><span><Paintbrush size={17} /> Interior & exterior</span><span><Sparkles size={17} /> Putty & finishing</span><span><ShieldCheck size={17} /> Clean workmanship</span></div></div><div className="hero-visual reveal delay-1"><div className="hero-image"><img src={serviceImages[0]} alt="Modern painted living room" /><div className="image-caption"><span>THE FINISH MATTERS</span><b>01 / 03</b></div></div><div className="paint-chip"><span className="chip-circle" /><span>CRAFTED<br />FOR LIVING</span></div><div className="vertical-note">PAINT • PREPARE • PROTECT</div></div></div><div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 — 09</span></div></section>
      <section className="trust-strip"><div className="container trust-inner"><span className="trust-label">A considered finish<br />from first coat to last.</span><div><span className="trust-icon"><ClipboardCheck /></span><b>Clear scope</b><small>Agreed work, upfront</small></div><div><span className="trust-icon"><Hammer /></span><b>Surface first</b><small>Preparation matters</small></div><div><span className="trust-icon"><Droplets /></span><b>Neat finish</b><small>Care in every detail</small></div><div><span className="trust-icon"><Clock3 /></span><b>Easy enquiry</b><small>Simple, responsive</small></div></div></section>
      <section className="section services-section" id="services"><div className="container"><div className="section-head"><div><div className="eyebrow">WHAT WE DO / 02</div><h2>Complete painting<br /><em>& finishing solutions.</em></h2></div><p>From the first layer of putty to the final clean edge, we help your property look considered, cared for, and ready to live in.</p></div><div className="service-grid">{services.map(([title, desc, n], i) => <article className="service-card" key={title}><div className="service-image"><img src={serviceImages[i]} loading="lazy" alt={title} /><span className="service-number">{n}</span></div><div className="service-content"><h3>{title}</h3><p>{desc}</p><a href="#estimate" data-testid={`service-quote-${n}`}>Request a quote <ArrowUpRight size={15} /></a></div></article>)}</div><div className="optional-box"><div><span className="eyebrow">ALSO AVAILABLE / SUBJECT TO INSPECTION</span><h3>More ways to finish the job.</h3></div><div className="optional-list">{optionalServices.map((item) => <span key={item} data-testid={`optional-service-${item.toLowerCase().replaceAll(" ", "-")}`}>{item}<ArrowUpRight size={13} /></span>)}</div></div></div></section>
      <section className="work-section" id="work"><div className="container"><div className="section-head work-head"><div><div className="eyebrow">SELECTED REFERENCES / 03</div><h2>See the difference<br /><em>a good finish makes.</em></h2></div><div className="filter-row">{categories.map((cat) => <Button variant="original" className={filter === cat ? "active" : ""} key={cat} onClick={() => setFilter(cat)} data-testid={`gallery-filter-${cat.toLowerCase().replaceAll(" ", "-")}`}>{cat}</Button>)}</div></div><div className="gallery-grid">{gallery.filter(([, , , category]) => filter === "All work" || category === filter).map(([title, image, size]) => <figure className={`gallery-item ${size}`} key={title}><img src={image} loading="lazy" alt={title} /><figcaption><span>DEMONSTRATION IMAGE</span><b>{title}</b><ArrowUpRight size={18} /></figcaption></figure>)}</div><p className="demo-note"><Sparkles size={15} /> These are demonstration references. Replace them with your own project photos anytime.</p></div></section>
      <section className="section why-section" id="why-us"><div className="container why-grid"><div><div className="eyebrow">THE COAT STANDARD / 04</div><h2>Good work is<br /><em>felt in the details.</em></h2><p className="lead">A fresh coat is only as good as the preparation beneath it. We keep the conversation clear and the finish thoughtful.</p><ActionButton secondary testId="why-estimate-button">Discuss your project</ActionButton></div><div className="principles">{[["01", "Preparation before paint", "Cleaning, scraping, sanding, and surface preparation as the agreed scope requires."],["02", "A neat, protected site", "Attention to edges, furniture, flooring, and a tidy handover where included."],["03", "Clear recommendations", "Suitable paint and finishing options explained without overpromising."],["04", "Residential or commercial", "A flexible approach for homes, apartments, offices, shops, and buildings."]].map(([n, t, d]) => <div className="principle" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={18} /></div>)}</div></div></section>
      <section className="process-section"><div className="container"><div className="eyebrow">HOW IT WORKS / 05</div><div className="process-title"><h2>From first hello<br /><em>to final inspection.</em></h2><p>No guesswork. Just a simple path to a well-considered result.</p></div><div className="process-grid">{[["01", "Contact us", "Tell us about your building and painting requirements."],["02", "Site inspection", "Assess surfaces, measurements, preparation, and finish options."],["03", "Quotation", "Receive a quote based on agreed work, materials, and scope."],["04", "Paint & finish", "Complete the approved work and carry out a final inspection."]].map(([n, t, d], i) => <div className="process-step" key={n}><span className="step-number">{n}</span><span className="step-line" /><h3>{t}</h3><p>{d}</p>{i < 3 && <ChevronRight className="step-arrow" size={20} />}</div>)}</div></div></section>
      <section className="estimate-section" id="estimate"><div className="container estimate-grid"><div className="estimate-copy"><div className="eyebrow">START A CONVERSATION / 06</div><h2>Let’s make your<br /><em>next coat count.</em></h2><p>Share a few details and we’ll prepare a message for you. Send it through WhatsApp or email so the right conversation can begin.</p><div className="estimate-note"><Zap size={17} /><span><b>No pressure.</b><br />A quote follows an agreed scope and inspection.</span></div></div><form className="estimate-form" onSubmit={submitEstimate}><div className="form-head"><span>01</span><b>Tell us about your project</b></div><div className="form-row"><label>Your name *<input name="name" required placeholder="Full name" data-testid="estimate-name-input" /></label><label>Phone number *<input name="phone" required placeholder="Phone number" data-testid="estimate-phone-input" /></label></div><div className="form-row"><label>Property type *<select name="property" required data-testid="estimate-property-select"><option value="">Select one</option><option>House</option><option>Apartment</option><option>Office</option><option>Shop</option><option>Other</option></select></label><label>Required service *<select name="service" required data-testid="estimate-service-select"><option value="">Select one</option><option>Interior Painting</option><option>Exterior Painting</option><option>Putty & Primer</option><option>Door Polish</option><option>Texture Painting</option><option>Waterproofing (inspection)</option><option>Complete Building Painting</option></select></label></div><div className="form-row"><label>Approx. area / rooms<input name="area" placeholder="e.g. 3 bedrooms or 1,200 sq ft" data-testid="estimate-area-input" /></label><label>Property location<input name="location" placeholder="City / neighbourhood" data-testid="estimate-location-input" /></label></div><div className="form-row"><label>Preferred start date<input name="date" type="date" data-testid="estimate-date-input" /></label><label>Additional requirements<input name="requirements" placeholder="Anything we should know?" data-testid="estimate-requirements-input" /></label></div><Button variant="original" className="btn btn-primary form-submit" type="submit" data-testid="estimate-submit-button">Request my estimate <ArrowUpRight size={16} /></Button>{sent && <p className="form-success" role="status" data-testid="estimate-success-message"><MessageCircle size={17} /> WhatsApp is ready with your details. Please review and send the message — it still needs to be sent by you.</p>}<p className="form-foot">Your message is prepared for WhatsApp. It still needs to be sent by you.</p></form></div></section>
      <section className="faq-section"><div className="container faq-grid"><div><div className="eyebrow">COMMON QUESTIONS / 07</div><h2>Good to know<br /><em>before we begin.</em></h2><p>Every property is different. Here are a few helpful starting points.</p></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={q}><Button variant="original" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i} data-testid={`faq-question-${i}`}>{q}<span><ChevronDown size={17} /></span></Button>{openFaq === i && <p data-testid={`faq-answer-${i}`}>{a}</p>}</div>)}</div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-inner"><div><div className="eyebrow">FIND YOUR FINISH / 08</div><h2>Ready when<br /><em>you are.</em></h2><p>Tell us what you’re working on. We’ll take it from there.</p><CustomerRating /></div><div className="contact-actions"><a href={businessContact.phoneHref} data-testid="contact-call-button"><Phone size={19} /><span><small>Call now</small><b>{PHONE}</b></span><ArrowUpRight size={17} /></a><a href={estimateWhatsAppUrl("Hello, I'd like a painting estimate.")} target="_blank" rel="noreferrer" data-testid="contact-whatsapp-button"><MessageCircle size={19} /><span><small>WhatsApp enquiry</small><b>{WHATSAPP}</b></span><ArrowUpRight size={17} /></a><a href={`mailto:${EMAIL}`} data-testid="contact-email-button"><Mail size={19} /><span><small>Send an email</small><b>{EMAIL}</b></span><ArrowUpRight size={17} /></a></div></div></section>
    </main>
    <footer><div className="container footer-grid"><div><Logo /><p>Thoughtful painting and finishing for homes, buildings, and businesses.</p></div><div><b>Explore</b><a href="#services" data-testid="footer-services-link">Services</a><a href="#work" data-testid="footer-work-link">Our work</a><a href="#estimate" data-testid="footer-estimate-link">Get an estimate</a></div><div><b>Contact</b><span>{PHONE}</span><span>{EMAIL}</span><span>{businessContact.hours}</span></div><div className="footer-back"><a href="#top" data-testid="back-to-top-button">Back to top <ArrowUpRight size={15} /></a><span>© {new Date().getFullYear()} Wall Painting Services in Hyderabad</span></div></div></footer><a className="floating-whatsapp" href={estimateWhatsAppUrl("Hello, I'd like a painting estimate.")} target="_blank" rel="noreferrer" aria-label="Open WhatsApp enquiry" data-testid="floating-whatsapp-button"><MessageCircle size={23} /></a>
  </div>;
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Wall Painting Services in Hyderabad — ColorForge Walls" },
    { name: "description", content: "Professional painting, wall putty, waterproofing & floor polishing for homes, buildings in Hyderabad. 1000+ homes painted. Get free quote | ColourForge Walls" },
    { property: "og:title", content: "Wall Painting Services in Hyderabad — ColorForge Walls" },
    { property: "og:description", content: "Hyderabad's trusted painting service - interior,exterior,waterproofing & texture painting for homes & commerical. 1000+ homes painted." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});
