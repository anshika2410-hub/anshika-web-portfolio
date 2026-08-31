import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that help businesses build trust, showcase their services, and turn visitors into potential customers.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "High-impact pages designed to clearly communicate your offer and guide visitors toward taking action.",
  },
  {
    number: "03",
    title: "Portfolio Websites",
    description:
      "Modern personal and professional portfolios designed to showcase your work, skills, and credibility.",
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "A complete visual refresh for outdated websites with improved design, structure, and user experience.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0b0b0f] px-[5%] py-[70px] md:py-[110px]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[1.2fr_0.8fr] md:items-end"
        >
          <div>
            <span className="text-xs font-bold tracking-[2px] text-[#d6ff3f]">
              SERVICES
            </span>

            <h2 className="mt-5 max-w-[760px] font-display text-[clamp(42px,5vw,72px)] font-semibold leading-[0.98] tracking-[-2px]">
              Websites designed
              <br />
              for{" "}
              <span className="italic text-[#d6ff3f]">
                growth and impact.
              </span>
            </h2>
          </div>

          <p className="max-w-[380px] text-base leading-[1.7] text-[#96969f] md:justify-self-end">
            From a strong first impression to a smooth user experience, I build
            websites that are designed to look professional and support real
            business goals.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-[#2a2a32]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group grid gap-5 border-b border-[#2a2a32] py-8 transition md:grid-cols-[90px_1fr_1.1fr_auto] md:items-center md:gap-8 md:py-10"
            >
              {/* Number */}
              <span className="text-sm font-semibold text-[#d6ff3f]">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-[clamp(30px,3vw,45px)] font-semibold transition duration-300 group-hover:text-[#d6ff3f]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="max-w-[430px] text-[15px] leading-[1.7] text-[#96969f]">
                {service.description}
              </p>

              {/* Arrow */}
              <a
                href="#contact"
                aria-label={`Start a project for ${service.title}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#33333d] text-[#f5f3ee] transition duration-300 hover:border-[#d6ff3f] hover:bg-[#d6ff3f] hover:text-[#111]"
              >
                <ArrowUpRight size={19} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between gap-5 rounded-[20px] border border-[#2c2c34] bg-[#111117] p-6 md:mt-14 md:flex-row md:items-center md:p-8"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              Have something else in mind?
            </h3>

            <p className="mt-2 text-sm text-[#8e8e97]">
              Tell me about your project and let's see how I can help.
            </p>
          </div>

          <a
            href="#contact"
            className="flex w-fit items-center gap-2 rounded-full bg-[#d6ff3f] px-6 py-3.5 text-sm font-semibold text-[#111] transition duration-300 hover:-translate-y-1"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;