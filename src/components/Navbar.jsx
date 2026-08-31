import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  
  
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-[5%] py-6 md:px-[5%]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-[3px] text-[#f5f3ee]"
        >
          ANSHIKA<span className="text-[#d6ff3f]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#aaaab2] transition duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-[#303038] px-4 py-3 text-sm text-[#f5f3ee] transition duration-300 hover:bg-[#f5f3ee] hover:text-[#0b0b0f] md:flex"
        >
          Let's Talk
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-white md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-5 rounded-[18px] border border-[#2b2b34] bg-[#121218]/95 p-5 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#c8c8cf] transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#d6ff3f] px-4 py-3 font-semibold text-[#111]"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;