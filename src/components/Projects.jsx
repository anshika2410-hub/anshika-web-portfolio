import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import luxeDesktop from "../assets/luxe-preview.png";
import luxeMobile from "../assets/luxe-mobile.png";
import bookstoreDesktop from "../assets/bookstore-preview.png";
import dileepMobile from "../assets/dileep-mobile.png";

const projects = [
  {
    number: "01",
    title: "Luxe Beauty Studio",
    category: "Beauty & Wellness",
    type: "Premium Beauty & Wellness Website",
    description:
      "A modern beauty studio website designed to create a premium digital presence and provide visitors with a smooth, visually engaging experience.",
    tags: ["React", "Responsive Design", "Modern UI"],
    desktopImage: luxeDesktop,
    mobileImage: luxeMobile,
    link: "https://luxe-beauty-studio-six.vercel.app/",
  },
  {
    number: "02",
    title: "Dileep Book Store",
    category: "E-commerce",
    type: "Online Book Store Website",
    description:
      "A clean and user-friendly book catalogue experience designed to make browsing books simple, organised, and visually engaging.",
    tags: ["React", "E-commerce UI", "Responsive Design"],
    desktopImage: bookstoreDesktop,
    mobileImage: dileepMobile,
    link: "https://dileep-book-store.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      id="work"
      className="bg-[#0f0f14] px-[5%] py-[45px] md:py-[50px]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:gap-15"
        >
          <div>
            <span className="text-xs font-bold tracking-[2px] text-[#d6ff3f]">
              SELECTED WORK
            </span>

            <h2 className="mt-5 font-display text-[clamp(42px,5vw,72px)] font-semibold leading-none tracking-[-2px]">
              Built with purpose.
              <br />
              Designed to{" "}
              <span className="italic text-[#d6ff3f]">stand out.</span>
            </h2>
          </div>

          <p className="max-w-[360px] self-start text-base leading-[1.7] text-[#96969f] md:self-end">
            A selection of website concepts created with a focus on strong
            visual identity, usability, and a polished customer experience.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-[55px] md:gap-[75px]">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              {/* Preview */}
              <div
                className={`overflow-hidden rounded-[24px] border border-[#282831] p-3 md:p-10 ${
                  index === 0
                    ? "bg-gradient-to-br from-[#d6ff3f]/[0.08] to-[#141419]/50"
                    : "bg-gradient-to-br from-[#6c4cff]/10 to-[#141419]/50"
                }`}
              >
                <div className="overflow-hidden rounded-[14px] border border-[#34343e] bg-[#15151c] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  {/* Browser top */}
                  <div className="flex h-10 items-center gap-5 border-b border-[#2d2d36] px-3 md:h-12 md:px-[18px]">
                    <div className="flex gap-1.5">
                      <span className="h-[9px] w-[9px] rounded-full bg-[#454550]" />
                      <span className="h-[9px] w-[9px] rounded-full bg-[#454550]" />
                      <span className="h-[9px] w-[9px] rounded-full bg-[#454550]" />
                    </div>

                    <div className="w-[160px] rounded-md bg-[#1d1d25] px-3 py-[7px] text-center text-[9px] text-[#777783] md:w-[220px] md:text-[11px]">
                      {project.title.toLowerCase().replaceAll(" ", "")}.com
                    </div>
                  </div>

                  {/* Desktop Preview */}
                  <div className="hidden md:block">
                    <img
                      src={project.desktopImage}
                      alt={`${project.title} desktop preview`}
                      className="block w-full"
                    />
                  </div>

                  {/* Mobile Preview */}
                  <div className="block md:hidden">
                    <img
                      src={project.mobileImage}
                      alt={`${project.title} mobile preview`}
                      className="block w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="grid gap-4 pt-6 md:grid-cols-[70px_1fr_auto] md:gap-[30px] md:pt-9">
                <div className="text-[13px] font-bold text-[#d6ff3f]">
                  {project.number}
                </div>

                <div>
                  <span className="text-[13px] text-[#86868f]">
                    {project.type}
                  </span>

                  <h3 className="mt-2 font-display text-[clamp(32px,4vw,52px)] font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-[600px] text-[15px] leading-[1.7] text-[#96969f]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#30303a] px-3 py-[7px] text-xs text-[#b3b3bc]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex w-fit items-center gap-2 border-b border-[#d6ff3f] pb-[7px] text-sm text-[#f5f3ee] transition hover:text-[#d6ff3f] md:mt-0"
                >
                  View Live Website
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;