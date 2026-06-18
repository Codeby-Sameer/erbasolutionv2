import {
  Users, UserPlus, Briefcase, FileSignature, Handshake, Search, Target,
  ShieldCheck, Crown, Lightbulb, Workflow, Sparkles, GraduationCap, BookOpen,
  Building2, HeartPulse, ShoppingBag, Factory, Radio, Cpu, Truck, Landmark, BookMarked,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const services: Array<{
  title: string;
  desc: string;
  icon: LucideIcon;
  features?: string[];
}> = [
  { title: "IT Staffing Solutions", icon: Users, desc: "Our primary focus is delivering exceptional IT staffing solutions that connect businesses with the right talent. We understand the urgency of staffing needs in today's fast-paced environment, which is why we offer flexible and efficient hiring support to meet your business requirements." },
  { title: "IT Staff Augmentation", icon: UserPlus, desc: "We provide skilled technology professionals to strengthen your existing teams and support project delivery. Our staff augmentation services offer the flexibility to scale resources based on evolving business needs." },
  { title: "Direct Hire Staffing", icon: Briefcase, desc: "We help organizations identify and recruit highly qualified professionals for permanent positions. Our streamlined hiring process ensures access to top talent that aligns with your technical requirements, company culture, and long-term business goals." },
  { title: "Contract Staffing", icon: FileSignature, desc: "Our contract staffing solutions provide businesses with the flexibility to scale their workforce based on project demands. We quickly connect clients with skilled professionals who can contribute immediately and deliver results." },
  { title: "Contract-to-Hire Solutions", icon: Handshake, desc: "We offer contract-to-hire staffing services that allow organizations to evaluate candidates on the job before making a permanent hiring decision. This approach reduces hiring risks while ensuring the right fit." },
  { title: "Talent Acquisition Services", icon: Search, desc: "We help organizations attract, assess, and hire top technology talent through a strategic recruitment process tailored to business objectives and workforce demands." },
  { title: "Technical Recruitment Services", icon: Target, desc: "Our specialized technical recruiters identify and engage highly qualified IT professionals across various technologies, domains, and experience levels." },
  { title: "Permanent Staffing Solutions", icon: ShieldCheck, desc: "Build a strong and reliable workforce with confidence. Our permanent staffing solutions help organizations identify and hire highly qualified professionals who possess the right skills, experience, and cultural alignment to contribute to long-term business success." },
  { title: "Executive Search Services", icon: Crown, desc: "Identify and hire exceptional leaders who can drive innovation, growth, and organizational success. Our executive search services focus on sourcing highly qualified senior-level professionals, including C-suite executives, directors, and leadership talent across technology and business functions." },
  {
    title: "Talent Advisory Services", icon: Lightbulb,
    desc: "Make informed hiring decisions with expert workforce insights and strategic guidance. Our talent advisory services help organizations understand market trends, optimize recruitment strategies, and build workforce plans that support long-term business growth.",
    features: ["Talent market intelligence", "Workforce planning and strategy", "Hiring trend analysis", "Skills availability assessment", "Compensation and salary benchmarking", "Recruitment process optimization", "Strategic workforce recommendations"],
  },
  {
    title: "Recruitment Process Outsourcing (RPO)", icon: Workflow,
    desc: "Streamline and enhance your hiring process with our Recruitment Process Outsourcing solutions. We act as an extension of your team, managing recruitment operations efficiently while helping you attract, engage, and hire top talent with measurable results.",
    features: ["End-to-end recruitment management", "Talent sourcing and acquisition", "Employer branding support", "Talent pipeline development", "Recruitment analytics and reporting", "Process improvement and optimization", "Scalable hiring solutions", "Candidate experience enhancement"],
  },
  { title: "Talent Management Solutions", icon: Sparkles, desc: "We help organizations identify, attract, and retain skilled professionals who contribute to long-term business success. Our approach focuses on delivering effective talent strategies that support hiring, development, and employee engagement aligned with your organizational goals." },
  { title: "HR Consulting Services", icon: GraduationCap, desc: "We provide comprehensive HR consulting solutions that help organizations build effective human resource practices and improve workforce efficiency. Our services are designed to support businesses in managing people, processes, and policies more effectively." },
  { title: "Skill Enhancement Programs", icon: BookOpen, desc: "Continuous learning is key to staying competitive in a rapidly evolving technology landscape. Our skill enhancement programs are designed to upskill and reskill professionals in emerging technologies, enabling them to perform effectively and stay future-ready." },
];

export const technologies = [
  "Java Full Stack", "Cybersecurity", "Python Developer / Full Stack", "DevOps Engineer",
  "Network Engineer", "ServiceNow Developer", "QA Automation", "Project Manager",
  "Product Owner", "Scrum Master", "Business Analyst", "SAP",
  "Salesforce Developer", "UI/UX Developer", "React / Frontend Developer", "MuleSoft Developer",
  "Data Engineer", "Data Analyst", "Data Scientist / AI-ML", "Power BI Developer",
];

export const industries: Array<{ title: string; icon: LucideIcon; desc: string }> = [
  { title: "Banking, Financial Services & Insurance", icon: Landmark, desc: "Almost every industry uses the services of Information Technology, and the Banking, Financial, and Insurance industry is one of the most active. Erba has solutions for every need of the banking and financial sector, from banking applications to online platforms, alongside CRM and cloud services." },
  { title: "Healthcare & Life Sciences", icon: HeartPulse, desc: "We provide IT staffing and technology solutions for Healthcare & Life Sciences, enabling digital transformation through EHR systems, telemedicine apps, AI diagnostics, and cloud platforms, ensuring secure, compliant, and scalable solutions that improve patient care and operational efficiency." },
  { title: "Retail & E-Commerce", icon: ShoppingBag, desc: "We deliver IT staffing and digital solutions for Retail & E-Commerce, enabling scalable online platforms, mobile apps, AI-based recommendations, inventory management, and payment integrations that enhance customer experience and drive business growth." },
  { title: "Manufacturing & Industrial", icon: Factory, desc: "We provide IT staffing and technology solutions for the Manufacturing & Industrial sector, enabling smart factory systems, IoT automation, ERP integration, supply chain optimization, and predictive maintenance to improve productivity and operational performance." },
  { title: "Telecommunications", icon: Radio, desc: "We offer IT staffing and technology solutions for Telecommunications, enabling network management, 5G infrastructure, CRM systems, billing platforms, and real-time analytics that improve connectivity and service reliability." },
  { title: "Information Technology & Software", icon: Cpu, desc: "We provide IT staffing and technology services for IT & Software companies, including software development, cloud solutions, DevOps, AI/ML, QA testing, and IT consulting, helping build scalable, secure, high-performance digital solutions." },
  { title: "Logistics & Supply Chain", icon: Truck, desc: "We deliver IT staffing and technology solutions for Logistics & Supply Chain, enabling fleet management systems, warehouse automation, real-time tracking, route optimization, and supply chain visibility platforms." },
  { title: "Government & Public Sector", icon: Building2, desc: "We provide IT staffing and digital solutions for Government & Public Sector, enabling e-governance platforms, citizen service portals, data security systems, smart city solutions, and cloud infrastructure." },
  { title: "Education & E-Learning", icon: BookMarked, desc: "We deliver IT staffing and technology solutions for Education & E-Learning, enabling LMS platforms, virtual classrooms, e-learning apps, student management systems, and AI-based learning tools." },
];

export const whyChooseUs = [
  { title: "Industry Expertise", desc: "Our team possesses deep technical knowledge and extensive recruitment experience across multiple industries and technologies." },
  { title: "Quality Talent Network", desc: "Access to highly skilled, pre-screened IT professionals ready to contribute immediately." },
  { title: "Fast Turnaround Time", desc: "Efficient recruitment and staffing processes help clients fill critical positions quickly." },
  { title: "Flexible Engagement Models", desc: "Customized staffing and service solutions designed to meet unique business requirements." },
  { title: "Customer-Centric Approach", desc: "We focus on building long-term partnerships through transparency, reliability, and exceptional service." },
  { title: "End-to-End Support", desc: "From recruitment to project delivery, we provide complete support throughout the engagement lifecycle." },
];

export const careerPrograms = [
  { title: "Emerging Talent Program", desc: "For fresh graduates and entry-level professionals seeking hands-on industry experience.", benefits: ["Structured onboarding", "Technical mentorship", "Real project exposure", "Career coaching"] },
  { title: "Future Leaders Program", desc: "Designed to develop future technology leaders and managers.", benefits: ["Leadership workshops", "Management training", "Client engagement experience", "Strategic project involvement", "Certification support"] },
  { title: "Experienced Professional Growth Program", desc: "For mid-level professionals looking to accelerate their career in IT staffing and technology consulting.", benefits: ["Advanced skill development", "Exposure to complex projects", "Performance-based growth opportunities", "Cross-functional collaboration"] },
  { title: "IT Recruitment Excellence Program", desc: "Designed for individuals entering or growing in IT recruitment and talent acquisition roles.", benefits: ["End-to-end recruitment training", "Hands-on sourcing practice", "Client requirement exposure", "ATS and recruitment tools training"] },
  { title: "Sales & Business Development Program", desc: "For professionals aiming to build careers in IT staffing sales and client acquisition.", benefits: ["Sales strategy training", "Client engagement experience", "Market and lead generation exposure", "Performance incentive structure"] },
  { title: "Technical Skills Acceleration Program", desc: "For candidates seeking to strengthen their technical expertise across modern IT domains.", benefits: ["Training in emerging technologies", "Project-based learning", "Hands-on technical assignments", "Skill enhancement workshops"] },
  { title: "Leadership Development Program", desc: "A structured program to prepare future leaders in recruitment, operations, and consulting roles.", benefits: ["Leadership mentoring", "Decision-making exposure", "Team management training", "Strategic business involvement"] },
  { title: "Internship & Industry Readiness Program", desc: "For students and freshers looking to gain real-world industry exposure before entering full-time roles.", benefits: ["Practical industry training", "Live project experience", "Communication & workplace skills", "Career placement support"] },
];

export const stats = [
  { value: 50, suffix: "+", label: "Successful IT Placements" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "+", label: "Technology Consultants Available" },
  { value: 95, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 24, suffix: "/7", label: "Support & Service Availability" },
];
