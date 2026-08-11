import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
 
  { name: "Pricing", href: "#pricing" },
  
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">

          {/* Logo */}

        <a
  href="#home"
  className="flex items-center"
>
  <img
    src="public/logo-Photoroom.png"
    alt="7PHOENIX Logo"
    className="h-14 w-auto object-contain scale-[7.10] translate-y-2"
  />
</a>
 
          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-wider text-white/80 hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            ))}

          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-full text-sm font-semibold transition"
          >
            Get Quote

            <ArrowUpRight size={18} />
          </a>

          {/* Mobile */}

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="fixed inset-0 bg-black z-[60] flex flex-col">

          <div className="flex justify-between items-center p-6">

            <h2 className="text-3xl font-bold">
              <span className="text-orange-500">7</span>PHOENIX
            </h2>

            <button onClick={() => setMenuOpen(false)}>
              <X size={30} />
            </button>

          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 px-8 py-4 rounded-full mt-6"
            >
              Get Quote
            </a>

          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;