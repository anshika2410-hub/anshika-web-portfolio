import { ArrowUpRight, ArrowUp } from "lucide-react";

function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const connectLinks = [
    {
      label: "Email",
      href: "mailto:anshikaagrawal2410@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/contact-anshikaagrawal/",
      external: true,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/9140420641",
      external: true,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0b0b0f] px-[5%] pt-12 md:pt-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 bottom-16 hidden h-[420px] w-[420px] rounded-full border border-[#d6ff3f]/5 md:block" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top section */}
        <div className="border-b border-white/10 pb-10 md:grid md:grid-cols-[1.3fr_0.7fr_0.7fr] md:gap-10 md:pb-20">
          
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-display text-[clamp(46px,7vw,95px)] font-semibold leading-none tracking-[-0.05em] text-[#f4f2ed] transition hover:text-[#d6ff3f]"
            >
              ANSHIKA<span className="text-[#d6ff3f]">.</span>
            </a>

            <p className="mt-5 max-w-[360px] text-[15px] leading-[1.7] text-[#85858f] md:mt-7 md:text-base md:leading-[1.8]">
              Web Designer & Developer creating modern, thoughtful, and
              responsive digital experiences.
            </p>

            {/* Availability */}
            <div className="mt-5 flex items-center gap-3 md:mt-8">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d6ff3f] shadow-[0_0_16px_rgba(214,255,63,0.6)]" />

              <span className="text-xs font-bold tracking-[0.16em] text-[#a4a4ad]">
                AVAILABLE FOR PROJECTS
              </span>
            </div>
          </div>

          {/* Navigation + Connect */}
          <div className="mt-10 grid grid-cols-2 gap-8 md:col-span-2 md:mt-0 md:grid-cols-2 md:gap-10">
            
            {/* Navigation */}
            <div>
              <p className="mb-5 text-xs font-bold tracking-[0.18em] text-[#d6ff3f] md:mb-6 md:tracking-[0.2em]">
                NAVIGATION
              </p>

              <nav className="flex flex-col items-start gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 text-[14px] text-[#a5a5ae] transition hover:text-[#f4f2ed] md:text-[15px]"
                  >
                    <span className="h-px w-0 bg-[#d6ff3f] transition-all duration-300 group-hover:w-4" />

                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-5 text-xs font-bold tracking-[0.18em] text-[#d6ff3f] md:mb-6 md:tracking-[0.2em]">
                CONNECT
              </p>

              <div className="flex flex-col items-start gap-4">
                {connectLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="group flex items-center gap-1.5 text-[14px] text-[#a5a5ae] transition hover:text-[#f4f2ed] md:gap-2 md:text-[15px]"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={14}
                      className="text-[#d6ff3f] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:h-[15px] md:w-[15px]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-5 text-xs text-[#6f6f79] sm:flex-row sm:items-center sm:justify-between sm:text-sm md:py-6">
          <p>
            © {new Date().getFullYear()} Anshika Agrawal. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex w-fit items-center gap-2 transition hover:text-[#d6ff3f]"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[#d6ff3f] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#d6ff3f]">
              <ArrowUp size={15} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;