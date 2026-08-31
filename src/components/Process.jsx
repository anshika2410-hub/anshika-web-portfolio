import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your goals, and what you want your website to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I plan the structure and visual direction to create a clear, modern, and professional experience.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Your design is transformed into a fast, responsive website that works smoothly across every screen.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After final refinements and testing, your website is ready to go live and make an impression.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0b0b0f] px-[5%] pt-[65px] pb-[75px] md:pt-[80px] md:pb-[110px]"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute right-[-120px] top-[20%] h-[420px] w-[420px] rounded-full border border-[#26262d]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[1fr_0.75fr] md:items-end"
        >
          <div>
            <span className="text-xs font-bold tracking-[2px] text-[#d6ff3f]">
              HOW I WORK
            </span>

            <h2 className="mt-5 font-display text-[clamp(44px,5.2vw,76px)] font-semibold leading-[0.98] tracking-[-2px]">
              A simple process.
              <span className="block italic text-[#d6ff3f]">
                Built for clarity.
              </span>
            </h2>
          </div>

          <p className="max-w-[420px] text-base leading-[1.8] text-[#96969f] md:justify-self-end">
            A straightforward process designed to keep your project organised,
            transparent, and moving forward from the first conversation to the
            final launch.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid border-l border-t border-[#2a2a32] sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="group relative min-h-[280px] border-b border-r border-[#2a2a32] p-7 md:min-h-[320px] md:p-10"
            >
              {/* Number */}
              <span className="text-sm font-semibold text-[#d6ff3f]">
                {step.number}
              </span>

              {/* Arrow */}
              <div className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#303039] text-[#a5a5ae] transition duration-300 group-hover:border-[#d6ff3f] group-hover:bg-[#d6ff3f] group-hover:text-[#111] md:right-10 md:top-10">
                <ArrowDownRight size={19} />
              </div>

              {/* Content */}
              <div className="absolute bottom-7 left-7 right-7 md:bottom-10 md:left-10 md:right-10">
                <h3 className="font-display text-[clamp(34px,3vw,48px)] font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-[420px] text-[15px] leading-[1.75] text-[#96969f]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center gap-3 text-sm text-[#85858f]"
        >
          <span className="h-px w-10 bg-[#d6ff3f]" />
          From idea to launch — with clarity at every step.
        </motion.div>
      </div>
    </section>
  );
}

export default Process;