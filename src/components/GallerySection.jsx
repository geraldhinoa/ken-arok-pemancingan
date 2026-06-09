import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiZoomIn } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559828551-78972e3522ba?q=80&w=800&auto=format&fit=crop",
    alt: "Suasana Kolam",
    label: "Suasana Kolam",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    alt: "Sesi Memancing",
    label: "Sesi Memancing",
  },
  {
    src: "https://images.unsplash.com/photo-1519629941950-8b85f9a3e56e?q=80&w=800&auto=format&fit=crop",
    alt: "Pemandangan Alam",
    label: "Pemandangan Alam",
  },
  {
    src: "https://images.unsplash.com/photo-1498063401574-13cbee350467?q=80&w=800&auto=format&fit=crop",
    alt: "Lomba Galatama",
    label: "Lomba Galatama",
  },
  {
    src: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop",
    alt: "Para Peserta",
    label: "Para Peserta",
  },
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galeri" className="bg-[#0D2137] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-14" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#00875A]" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00875A]">
              Galeri
            </p>
            <div className="w-8 h-px bg-[#00875A]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Momen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Kegiatan Kami
            </span>
          </h2>
          <p className="text-gray-400 text-[15px] max-w-lg mx-auto leading-relaxed">
            Potret keseruan, semangat, dan sensasi mancing di Kolam Pemancingan Ken Arok.
          </p>
        </div>

        {/* ── Dynamic Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={(i % 6) * 100}
              className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-gray-800"
              onClick={() => setSelected(img)}
            >
              {/* Photo */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Hover tint */}
              <div className="absolute inset-0 bg-[#00875A]/0 group-hover:bg-[#00875A]/30 transition-colors duration-400" />

              {/* Zoom icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <FiZoomIn className="text-white w-6 h-6" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm font-semibold tracking-wide drop-shadow">
                  {img.label}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* ── CTA / Upload Buttons ── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <button className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300 group">
            <HiOutlinePhotograph className="w-5 h-5 text-[#00875A] group-hover:scale-110 transition-transform" />
            Lihat Semua Foto
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors duration-200"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="inline-block bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-5 py-2 rounded-full border border-white/10">
                {selected.label}
              </span>
            </div>

            <motion.img
              src={selected.src}
              alt={selected.alt}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
