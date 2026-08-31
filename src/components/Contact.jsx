import { ArrowUpRight, Mail, Link, MessageCircle } from "lucide-react";

function Contact() {
  const contactLinks = [
    {
      number: "01",
      label: "Email me",
      icon: <Mail size={20} strokeWidth={1.7} />,
      href: "mailto:anshikaagrawal@gmail.com",
    },
    {
      number: "02",
      label: "LinkedIn",
      icon: <Link size={20} strokeWidth={1.7} />,
      href: "https://www.linkedin.com/in/contact-anshikaagrawal",
    },
    {
      number: "03",
      label: "WhatsApp",
      icon: <MessageCircle size={20} strokeWidth={1.7} />,
      href: "https://wa.me/9140420641",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111117] px-[5%] pt-12 pb-20 md:pt-16 md:pb-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full border border-[#d6ff3f]/10" />
      <div className="pointer-events-none absolute -bottom-56 left-[12%] h-[500px] w-[500px] rounded-full border border-[#d6ff3f]/10" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="mb-10 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d6ff3f]" />

          <span className="text-xs font-bold tracking-[0.22em] text-[#d6ff3f]">
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[1100px] font-serif text-[clamp(58px,9vw,140px)] leading-[0.88] tracking-[-0.055em] text-[#f4f2ed]">
          Have a project
          <span className="block font-serif italic text-[#d6ff3f]">
            in mind?
          </span>
        </h2>

        {/* Main content */}
        <div className="mt-16 grid border-t border-white/10 pt-10 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="max-w-[620px] text-[18px] leading-[1.8] text-[#a8a8b2] md:text-[20px]">
              Whether you need a new website, a redesign, or a strong online
              presence for your business, I'd love to hear about your idea.
            </p>

            {/* Main CTA */}
            <a
              href="mailto:anshikaagrawal2410@gmail.com"
              className="group mt-12 inline-flex items-center gap-4"
            >
              <span className="font-serif text-[clamp(34px,4vw,58px)] text-[#f4f2ed] transition duration-300 group-hover:text-[#d6ff3f]">
                Let's talk
              </span>

              <ArrowUpRight
                size={28}
                strokeWidth={1.7}
                className="text-[#d6ff3f] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="mt-3 h-px w-56 bg-[#d6ff3f] transition-all duration-500 group-hover:w-72" />

            {/* Availability */}
            <div className="mt-14 flex items-start gap-4 border-l border-[#d6ff3f]/50 pl-5">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d6ff3f] shadow-[0_0_18px_rgba(214,255,63,0.7)]" />

              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-[#d6ff3f]">
                  CURRENTLY AVAILABLE
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#85858f]">
                  Taking on selected freelance projects and website collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* Right contact links */}
          <div className="mt-14 lg:mt-0">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Email me" ? "_blank" : undefined}
                rel={item.label !== "Email me" ? "noreferrer" : undefined}
                className="group flex items-center border-t border-white/10 py-6 transition"
              >
                <span className="mr-7 text-sm font-semibold text-[#d6ff3f]">
                  {item.number}
                </span>

                <span className="flex flex-1 items-center gap-4 text-[18px] font-medium text-[#f4f2ed] transition group-hover:text-[#d6ff3f]">
                  <span className="text-[#a8a8b2] transition group-hover:text-[#d6ff3f]">
                    {item.icon}
                  </span>

                  {item.label}
                </span>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.6}
                  className="text-[#85858f] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6ff3f]"
                />
              </a>
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-[#6f6f79] sm:flex-row sm:items-center sm:justify-between">
          <span>Based in India · Working worldwide</span>

          <span className="text-[#8d8d96]">
            Open to freelance & creative collaborations
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;