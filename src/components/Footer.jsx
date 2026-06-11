import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaTiktok,
  FaUser
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="kontak" className="border-t-2 border-[#00875A]" style={{ backgroundColor: "#0D2137" }}>
      {/* ========== MAIN FOOTER CONTENT ========== */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* ---- COLUMN 1 — BRAND ---- */}
        <div data-aos="fade-up">
          <p className="text-[#00875A] font-bold uppercase tracking-widest text-sm mb-1">
            Kolam Pemancingan
          </p>
          <h3 className="text-2xl font-black text-white leading-tight mb-4">
            KEN AROK
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Tempat terbaik untuk mancing bersama orang-orang terbaik. Rasakan sensasi tarikan lele monster dan jadilah sang juara sejati di kolam kami!
          </p>
        </div>

        {/* ---- COLUMN 2 — MAPS ---- */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-lg font-bold text-white mb-4">
            Lokasi Kolam
          </h4>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700/50 bg-[#142d4a]">
            <iframe
              title="Peta Lokasi Kolam Pemancingan Ken Arok"
              src="https://maps.google.com/maps?q=Kolam%20Pemancingan%20Ken%20Arok,%20Tambahrejo,%20Candipuro,%20Lumajang&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1]"
            ></iframe>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
              <FaMapMarkerAlt className="text-[#00875A] mt-0.5 flex-shrink-0" />
              <span>
                Desa Tambahrejo, Kec. Candipuro, Kab. Lumajang, Jawa Timur
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Kolam+Pemancingan+Ken+Arok,+Tambahrejo,+Candipuro,+Lumajang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-emerald-400 text-sm font-medium hover:underline hover:text-emerald-300 transition-colors pl-6"
            >
              Buka di Aplikasi Maps →
            </a>
          </div>
        </div>

        {/* ---- COLUMN 3 — CONTACT ---- */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-lg font-bold text-white mb-4">Hubungi Kami</h4>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaWhatsapp className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] text-lg flex-shrink-0" />
              <a href="https://wa.me/6281292929210" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+62 812-9292-9210</a>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaUser className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] flex-shrink-0" />
              <span>Kolam Pemancingan Ken Arok</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaTiktok className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] text-lg flex-shrink-0" />
              <a href="https://www.tiktok.com/@ken_arok_fishing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@ken_arok_fishing</a>
            </li>
          </ul>
        </div>
      </div>

      {/* ========== BOTTOM BAR ========== */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 Kolam Pemancingan Ken Arok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
