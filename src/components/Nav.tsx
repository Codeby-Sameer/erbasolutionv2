import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Logo from "../assets/erbalogo.png" 
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onDark = pathname === "/"; // hero is dark on home

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const solid = scrolled || !onDark;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[var(--ink)]/90 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between text-white">
        <Link to="/" >
          <img src={Logo} alt="Erba Solutions Logo" className="md:h-20  h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-sm font-medium text-white/80 transition hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--electric)] transition-all duration-300 group-hover:w-full data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <MagneticButton variant="primary">Get In Touch</MagneticButton>
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="container-x pb-6 lg:hidden">
          <div className="flex flex-col gap-1 rounded-2xl bg-[var(--ink-soft)] p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <button className="btn-primary w-full">Get In Touch</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
