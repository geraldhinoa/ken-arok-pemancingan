import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Tiket & Event", href: "#tiket" },
  { label: "Galeri", href: "#galeri" },
  { label: "Peraturan", href: "#peraturan" },
  { label: "Kontak", href: "#kontak" },
];

function FishIcon({ className = "" }) {
  return (
    <img
      src="/lele-icon.png"
      alt="Ken Arok Fish Icon"
      className={`object-contain rounded-lg ${className}`}
      style={{ width: "auto" }}
    />
  );
}



export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "#0D2137" }}
    >
      {/* ── Desktop / Main bar ── */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 h-[68px]">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-3 shrink-0">
          <FishIcon className="h-10 md:h-12" />
          <div>
            <p className="text-[10px] md:text-xs font-medium text-gray-400 tracking-wider">
              Kolam Pemancingan
            </p>
            <h1 className="text-base md:text-lg font-black text-white tracking-wide leading-none mt-0.5">
              KEN AROK
            </h1>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-gray-200 font-medium hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#00875A] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button (desktop) */}
        <a
          href="https://wa.me/6281292929210?text=Halo%20Admin%20Ken%20Arok%2C%20saya%20mau%20daftar%20lomba"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300
                     bg-gradient-to-r from-[#00875A]/80 to-[#00875A]/50 backdrop-blur-md border border-white/30
                     shadow-[0_4px_15px_rgba(0,135,90,0.4)]
                     hover:from-[#00875A]/90 hover:to-[#00875A]/70 hover:shadow-[0_6px_25px_rgba(0,135,90,0.6)] hover:-translate-y-0.5"
        >
          Daftar Lomba
        </a>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <HiOutlineX className="w-7 h-7" />
          ) : (
            <HiOutlineMenu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "#0D2137" }}
          >
            <ul className="flex flex-col gap-1 px-6 pb-4 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <a
                  href="https://wa.me/6281292929210?text=Halo%20Admin%20Ken%20Arok%2C%20saya%20mau%20daftar%20lomba"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300
                             bg-gradient-to-r from-[#00875A]/80 to-[#00875A]/50 backdrop-blur-md border border-white/30
                             shadow-[0_4px_20px_rgba(0,135,90,0.5)]
                             active:scale-[0.98]"
                >
                  Daftar Lomba
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
