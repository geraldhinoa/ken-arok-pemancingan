import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { RiWhatsappLine } from "react-icons/ri";

const HERO_BG = "/bg-kolam.jpg";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Kolam pemancingan Ken Arok"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* ── Gradient overlay (darker on left) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(13, 33, 55, 0.95) 0%, rgba(13, 33, 55, 0.85) 45%, rgba(13, 33, 55, 0.5) 80%, rgba(13, 33, 55, 0.2) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[88px] pb-16 md:pb-24"
      >
        <div className="max-w-2xl">
          {/* Greeting */}
          <div className="flex items-center gap-3 mb-5" data-aos="fade-up" data-aos-duration="1000">
            <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
            <p className="text-emerald-400 font-semibold text-sm md:text-base tracking-[0.15em] uppercase">
              Selamat Datang di
            </p>
          </div>

          {/* Heading */}
          <h1 className="mb-6 flex flex-col gap-1 md:gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <span className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-sm">
              KOLAM PEMANCINGAN
            </span>
            <span className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-md pb-2">
              KEN AROK
            </span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mb-8"
          >
            Tempat terbaik untuk menyalurkan hobi mancing bersama keluarga,
            teman, maupun komunitas.
          </p>

          {/* Location */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="flex items-start gap-2 text-gray-400 text-sm mb-8"
          >
            <HiOutlineLocationMarker className="w-5 h-5 mt-0.5 shrink-0 text-[#00875A]" />
            <span>
              Desa Tambahrejo, Kec. Candipuro, Kab. Lumajang, Jawa Timur
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary – Lihat Tiket */}
            <a
               href="#tiket"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-green-900/30"
              style={{ backgroundColor: "#00875A" }}
            >
              <IoTicketOutline className="w-5 h-5" />
              Lihat Tiket
            </a>

            {/* Secondary – Hubungi Kami */}
            <a
              href="https://wa.me/6281292929210?text=Halo%20Admin%20Ken%20Arok%2C%20saya%20ingin%20bertanya%20tentang%20info%20kolam%20pemancingan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-cyan-300 border border-cyan-400/60 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <RiWhatsappLine className="w-5 h-5" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
