import { motion } from "framer-motion";
import { Check } from "lucide-react";

const strengths = [
  {
    number: "01",
    title: "Modern & Premium Design",
    description:
      "Clean, visually strong websites designed to create a professional first impression.",
  },
  {
    number: "02",
    title: "Fully Responsive",
    description:
      "Your website will be designed to work smoothly across mobile, tablet, and desktop screens.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "A simple and transparent process so you always know what is happening with your project.",
  },
  {
    number: "04",
    title: "Built Around Your Goals",
    description:
      "Every website is shaped around your business, audience, and the action you want visitors to take.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0f0f14] px-[5%] pt-[55px] pb-[75px] md:pt-[70px] md:pb-[110px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[350px] w-[350px] rounded-full bg-[#d6ff3f] opacity-[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-bold tracking-[2px] text-[#d6ff3f]">
            WHY WORK WITH ME
          </span>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-[700px] font-display text-[clamp(44px,5vw,74px)] font-semibold leading-[0.98] tracking-[-2px]">
              I don't just build
              <br className="hidden md:block" />
              websites. I create
              <span className="block italic text-[#d6ff3f]">
                experiences that matter.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-base leading-[1.8] text-[#96969f] md:text-[17px]">
              A good website should do more than simply look attractive. It
              should communicate clearly, feel easy to use, and give your
              visitors confidence in your business.
            </p>

            <p className="mt-5 max-w-[520px] text-base leading-[1.8] text-[#96969f] md:text-[17px]">
              My focus is on creating modern websites that balance visual
              design with usability, so your online presence feels polished,
              professional, and built with purpose.
            </p>

            {/* Small statement */}
            <div className="mt-9 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d6ff3f] text-[#111]">
                <Check size={17} strokeWidth={2.5} />
              </span>

              <span className="text-sm text-[#c2c2c9]">
                Design with intention. Build with purpose.
              </span>
            </div>
          </motion.div>

          {/* Strengths */}
          <div className="border-t border-[#2a2a32]">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group grid grid-cols-[45px_1fr] gap-4 border-b border-[#2a2a32] py-7 md:grid-cols-[65px_1fr] md:gap-6 md:py-8"
              >
                <span className="pt-1 text-sm font-semibold text-[#d6ff3f]">
                  {strength.number}
                </span>

                <div>
                  <h3 className="font-display text-[clamp(26px,2.4vw,36px)] font-semibold transition duration-300 group-hover:text-[#d6ff3f]">
                    {strength.title}
                  </h3>

                  <p className="mt-3 max-w-[500px] text-[15px] leading-[1.7] text-[#8f8f98]">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;