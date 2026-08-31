import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0b0f] px-[5%] pb-[60px] pt-[105px] md:pt-[130px]">
      <div className="pointer-events-none absolute -right-24 -top-44 h-[450px] w-[450px] rounded-full bg-[#d6ff3f] opacity-[0.12] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-[#6c4cff] opacity-[0.12] blur-[120px]" />

      {/* Orbit Effects */}
      <div className="pointer-events-none absolute right-[-250px] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-white/[0.05] max-md:right-[-220px] max-md:h-[350px] max-md:w-[350px]" />

      <div className="pointer-events-none absolute right-[-150px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/[0.05] max-md:right-[-160px] max-md:h-[250px] max-md:w-[250px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d6ff3f]/25 bg-[#d6ff3f]/[0.06] px-4 py-2 text-[13px] text-[#d6ff3f]"
        >
          <Sparkles size={15} />
          Available for freelance projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-[1050px] font-display text-[clamp(55px,8vw,118px)] font-semibold leading-[0.95] tracking-[-4px] max-md:text-[clamp(48px,14vw,72px)] max-md:leading-none max-md:tracking-[-2px]"
        >
          Websites that make
          <span className="block italic text-[#d6ff3f]">
            your business
          </span>
          impossible to ignore.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-[560px] text-[18px] leading-[1.7] text-[#a4a4ad] max-md:mt-6 max-md:text-base"
        >
          I design and build modern, high-quality websites that help businesses
          build trust, stand out online, and turn visitors into customers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex gap-3.5 max-md:flex-col max-md:gap-3"
        >
          <a
            href="#work"
            className="flex items-center justify-center gap-2 rounded-full bg-[#d6ff3f] px-[22px] py-[15px] text-sm font-semibold text-[#111] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(214,255,63,0.18)] max-md:w-full max-md:py-4"
          >
            View Selected Work
            <ArrowDownRight size={19} />
          </a>

          <a
            href="#CTA"
            className="flex items-center justify-center rounded-full border border-[#34343c] px-[22px] py-[15px] text-sm font-semibold text-[#f5f3ee] transition duration-300 hover:border-[#d6ff3f] hover:text-[#d6ff3f] max-md:w-full max-md:py-4"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-[85px] flex items-center gap-[18px] max-md:mt-[60px] max-md:items-start"
        >
          <div className="h-px w-[65px] bg-[#4a4a52]" />

          <p className="flex text-[13px] text-[#aaaab2] max-md:flex-col max-md:gap-1.5">
            Independent Web Developer

            <span className="ml-2.5 text-[#6e6e76] max-md:ml-0">
              Based in India · Working Worldwide
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;