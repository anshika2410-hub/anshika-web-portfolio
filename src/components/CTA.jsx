import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section 
     id="CTA"
     className="relative overflow-hidden bg-[#111117] px-[5%] py-20 md:py-28">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#d6ff3f]/10" />

      <div className="pointer-events-none absolute -left-52 -bottom-52 h-[600px] w-[600px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top label */}
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d6ff3f]" />

          <span className="text-xs font-bold tracking-[0.22em] text-[#d6ff3f]">
            LET&apos;S WORK TOGETHER
          </span>
        </div>

        {/* Main content */}
        <div className="mt-10 border-t border-white/10 pt-10 md:mt-14 md:pt-14">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
            {/* Left content */}
            <div>
              <h2 className="max-w-[950px] font-serif text-[clamp(56px,8vw,125px)] leading-[0.9] tracking-[-0.055em] text-[#f4f2ed]">
                Let&apos;s build something
                <span className="block italic text-[#d6ff3f]">
                  worth remembering.
                </span>
              </h2>

              <p className="mt-8 max-w-[590px] text-[17px] leading-[1.8] text-[#a8a8b2] md:text-[19px]">
                Whether you&apos;re starting something new or improving what
                already exists, let&apos;s create a website that feels modern,
                intentional, and built to make an impact.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:pb-2">
              <a
                href="mailto:anshikaagrawal2410@gmail.com"
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-[#d6ff3f]/40 px-6 py-6 transition duration-300 hover:border-[#d6ff3f] md:px-8 md:py-8"
              >
                {/* Hover background */}
                <span className="absolute inset-0 translate-y-full bg-[#d6ff3f] transition duration-500 ease-out group-hover:translate-y-0" />

                <span className="relative z-10">
                  <span className="block text-xs font-bold tracking-[0.18em] text-[#d6ff3f] transition group-hover:text-[#111117]">
                    HAVE A PROJECT?
                  </span>

                  <span className="mt-3 block font-serif text-[clamp(28px,3vw,45px)] leading-none text-[#f4f2ed] transition group-hover:text-[#111117]">
                    Start a project
                  </span>
                </span>

                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d6ff3f]/50 text-[#d6ff3f] transition duration-300 group-hover:rotate-45 group-hover:border-[#111117] group-hover:bg-[#111117] group-hover:text-[#d6ff3f]">
                  <ArrowUpRight size={26} strokeWidth={1.7} />
                </span>
              </a>

              <p className="mt-5 text-sm leading-relaxed text-[#777780]">
                Available for freelance projects and creative collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#777780]">
            Web Design <span className="mx-2 text-[#d6ff3f]">·</span>
            Development
            <span className="mx-2 text-[#d6ff3f]">·</span>
            Digital Experiences
          </p>

          <div className="flex items-center gap-3 text-sm text-[#777780]">
            <span className="h-2 w-2 rounded-full bg-[#d6ff3f] shadow-[0_0_14px_rgba(214,255,63,0.7)]" />

            Available for selected projects
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;