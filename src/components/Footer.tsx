import { Link } from "@tanstack/react-router";
import Logo from "../assets/erbalogo.png"
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/80">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" >
              <img src={Logo} alt="Erba Solutions Logo" className="h-20 w-auto object-contain" />
             
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              IT staffing, recruitment, and technology consulting solutions that help American
              businesses scale faster and build high-performing teams.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-[var(--electric)] hover:text-white">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-[var(--electric)] hover:text-white">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 text-[var(--electric)]" /> United States</li>
              <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5 text-[var(--electric)]" /> +1 (000) 000-0000</li>
              <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5 text-[var(--electric)]" /> hello@erbasolutions.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Erba Solutions LLC. All rights reserved.</p>
          <p>Connecting Talent · Driving Innovation</p>
        </div>
      </div>
    </footer>
  );
}
