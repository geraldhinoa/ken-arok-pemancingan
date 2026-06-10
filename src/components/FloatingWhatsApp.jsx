import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaHeadset } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Muncul otomatis hanya saat user sudah scroll ke 80% dari panjang halaman
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = total > 0 ? scrolled / total : 0;

      // Muncul kalau sudah scroll 80% ke bawah halaman
      if (scrollPercent >= 0.8 && !hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasOpened]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasOpened(true); // Kalau di-klik manual, matikan fitur auto-popup scroll
  };

  // Nomor WA Ken Arok (bisa diganti dengan nomor asli nanti)
  const phoneNumber = "6281292929210"; // +62 812-9292-9210
  const message = "Halo Admin Ken Arok, saya mau booking lapak atau tanya info lomba pemancingan.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="mb-4 bg-white rounded-[24px] shadow-2xl overflow-hidden w-[300px] border border-gray-100 origin-bottom-right"
          >
            {/* --- Bagian Atas (Header Popup) --- */}
            <div className="relative bg-white p-5 pb-4">
              {/* Tombol Close */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-200 p-1.5 rounded-full transition-colors"
                aria-label="Tutup"
              >
                <FiX className="w-4 h-4" />
              </button>
              
              <div className="flex items-start gap-4">
                {/* Icon Headset */}
                <div className="w-12 h-12 rounded-full bg-[#E8F3F1] flex items-center justify-center flex-shrink-0 border border-[#00875A]/20">
                  <FaHeadset className="w-6 h-6 text-[#00875A]" />
                </div>
                {/* Teks Sapaan */}
                <div className="pr-2 flex flex-col justify-center min-h-[48px]">
                  <p className="text-[15px] font-bold text-[#0D2137] leading-snug">
                    Ada pertanyaan soal lapak atau tiket lomba?
                  </p>
                </div>
              </div>
            </div>
            
            {/* --- Bagian Bawah (Tombol Aksi) --- */}
            <div className="p-4 pt-1 bg-white">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#00875A] hover:bg-[#00704A] text-white p-3 rounded-[20px] transition-colors shadow-lg shadow-[#00875A]/30 group"
              >
                {/* Icon WA Bulat Putih */}
                <div className="w-10 h-10 bg-white text-[#00875A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                {/* Teks Tombol */}
                <div className="flex flex-col justify-center">
                  <p className="text-[15px] font-bold">
                    Hubungi WhatsApp
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Tombol Floating Utama (Icon WA) --- */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
        onClick={toggleChat}
        className="flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:bg-[#1EBE55] hover:scale-110 transition-all duration-300"
        aria-label="Toggle WhatsApp Chat"
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
