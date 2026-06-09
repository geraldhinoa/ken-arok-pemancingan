import React, { useState, useEffect, useCallback } from "react";
import { FaTrophy, FaFish, FaLeaf, FaUsers } from "react-icons/fa";

const highlights = [
  {
    icon: FaTrophy,
    title: "Sistem Galatama",
    desc: "Kompetisi murni, hanya juara yang membawa pulang hadiah.",
  },
  {
    icon: FaFish,
    title: "Lele Monster",
    desc: "Ikan rilis berukuran besar & tarikannya sangat berat.",
  },
  {
    icon: FaLeaf,
    title: "Kolam Bersih & Asri",
    desc: "Lingkungan nyaman, dikelilingi suasana alam pedesaan.",
  },
  {
    icon: FaUsers,
    title: "Komunitas Pemancing",
    desc: "Ratusan pemancing aktif dari berbagai daerah bergabung.",
  },
];

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1559828551-78972e3522ba?q=80&w=1600&auto=format&fit=crop",
    caption: "Suasana Kolam Pemancingan",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
    caption: "Tarikan Kuat Lele Monster",
  },
  {
    src: "https://images.unsplash.com/photo-1519629941950-8b85f9a3e56e?q=80&w=1600&auto=format&fit=crop",
    caption: "Pemandangan Alam Asri",
  },
  {
    src: "https://images.unsplash.com/photo-1498063401574-13cbee350467?q=80&w=1600&auto=format&fit=crop",
    caption: "Sesi Lomba Galatama",
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="tentang" className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">

          {/* ── LEFT: Gambar dengan badge overlay ── */}
          <div
            className="w-full lg:w-[50%] relative"
            data-aos="fade-right"
          >
            {/* ── Carousel ── */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-900">
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{ opacity: i === current ? 1 : 0 }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-white font-bold text-lg">Kolam Pemancingan Ken Arok</p>
                <p className="text-emerald-300 text-sm font-medium">
                  {carouselImages[current].caption}
                </p>
              </div>

              {/* Dot indicators */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-emerald-400 w-6 h-2"
                        : "bg-white/40 hover:bg-white/70 w-2 h-2"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 text-white flex items-center justify-center text-lg transition-colors duration-200"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 text-white flex items-center justify-center text-lg transition-colors duration-200"
                aria-label="Next"
              >
                ›
              </button>
            </div>

            {/* Badge statistik melayang */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0D2137] text-white px-6 py-4 rounded-2xl shadow-2xl border border-emerald-800/40">
              <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">32+</p>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">Ulasan Positif</p>
            </div>
          </div>

          {/* ── RIGHT: Teks konten ── */}
          <div
            className="w-full lg:w-[50%]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {/* Label kecil */}
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#00875A]">
              Tentang Kami
            </span>

            {/* Judul */}
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-tight text-[#0D2137]">
              Kolam Pemancingan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                Ken Arok
              </span>
            </h2>

            {/* Garis pemisah */}
            <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 mb-7" />

            {/* Paragraf teks */}
            <div className="flex flex-col gap-5 text-gray-600 leading-[1.85] text-[15.5px]">
              <p>
                Selamat datang di <strong className="text-[#0D2137]">Kolam Pemancingan Ken Arok</strong>, kolam spesialis{" "}
                <strong className="text-[#00875A]">Galatama Rilis Lele</strong> paling bergengsi di Kabupaten Lumajang.
                Di sini, memancing bukan sekadar hobi biasa — melainkan sebuah ajang adu ketangkasan, kecepatan, dan
                strategi untuk memperebutkan gelar <strong className="text-[#00875A]">Juara</strong> dan hadiah tunai jutaan rupiah!
              </p>
              <p>
                Berdiri sejak tahun <strong className="text-[#00875A]">2015</strong>, Ken Arok Fishing telah berkembang pesat dari sekadar hobi menjadi arena kompetisi terbesar di wilayahnya. Dengan fasilitas megah yang menampung hingga <strong className="text-[#0D2137]">140 Lapak (Lapak 01 - 140)</strong>, kolam kami didesain khusus untuk memberikan kenyamanan maksimal sekaligus memacu adrenalin para pemancing saat bertarung melawan ikan-ikan raksasa.
              </p>
              <p>
                Kami menerapkan sistem <strong className="text-[#0D2137]">rilis penuh</strong>, artinya{" "}
                <span className="font-semibold text-red-600">seluruh ikan hasil tangkapan wajib dikembalikan ke kolam</span>{" "}
                dan <strong>tidak boleh dibawa pulang</strong>. Aturan ini kami jaga ketat demi menjaga kualitas ekosistem kolam
                dan sportivitas pertandingan, karena fokus utama Ken Arok hanya satu: mencari sang juara sejati!
              </p>
            </div>

            {/* Grid highlight 4 kotak */}
            <div className="mt-9 grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 80}
                  className="flex items-start gap-3 bg-[#F5F7FA] p-4 rounded-xl border border-gray-100"
                >
                  <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-[#00875A]/10 flex items-center justify-center">
                    <Icon className="text-[#00875A] text-base" />
                  </span>
                  <div>
                    <p className="font-bold text-[#0D2137] text-sm">{title}</p>
                    <p className="text-gray-500 text-xs leading-snug mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <a
                href="#tiket"
                className="inline-flex items-center gap-2 rounded-full bg-[#00875A] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#006d48] hover:shadow-xl hover:scale-105"
              >
                Lihat Harga Tiket
              </a>
              <a
                href="#galeri"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0D2137] px-8 py-3 text-sm font-bold text-[#0D2137] transition-all duration-300 hover:bg-[#0D2137] hover:text-white"
              >
                Lihat Galeri
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
