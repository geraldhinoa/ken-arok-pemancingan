import React from "react";
import { FiClock } from "react-icons/fi";

const schedule = [
  {
    num: "01",
    day: "Rabu Malam",
    time: "20.10 WIB",
    sessions: [
      { label: "Sesi 1 & Sesi 2", price: "Rp 50.000" },
      { label: "Sesi 3 & Sesi 4", price: "Rp 80.000" },
    ],
  },
  {
    num: "02",
    day: "Jumat Siang",
    time: "13.30 WIB",
    sessions: [
      { label: "Sesi 1 & Sesi 2", price: "Rp 50.000" },
      { label: "Sesi 3 & Sesi 4", price: "Rp 80.000" },
    ],
  },
  {
    num: "03",
    day: "Minggu Malam",
    time: "20.10 WIB",
    sessions: [
      { label: "Sesi 1 & Sesi 2", price: "Rp 50.000" },
      { label: "Sesi 3 & Sesi 4", price: "Rp 70.000" },
    ],
  },
];

export default function Tickets() {
  return (
    <section id="tiket" className="bg-[#0D2137] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-14" data-aos="fade-down">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-3">
            Jadwal Lomba
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Jadwal &amp; Harga Tiket
          </h2>
          <div className="mt-4 mx-auto w-14 h-1 rounded-full bg-[#00875A]" />
          <p className="mt-5 text-gray-400 max-w-lg mx-auto text-[15px] leading-relaxed">
            Kami membuka pemancingan <strong className="text-white font-semibold">rilis lele / galatama</strong> sebanyak <strong className="text-white font-semibold">3 kali dalam seminggu</strong>.
          </p>
        </div>

        {/* ── 3 Schedule Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
              style={{ borderTop: "3px solid #00875A" }}
            >
              {/* Card header */}
              <div className="px-7 pt-6 pb-5 flex items-start justify-between relative z-10">
                <div>
                  <h3 className="text-lg font-bold text-[#0D2137]">{item.day}</h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <FiClock className="text-gray-400 text-xs" />
                    <span className="text-gray-400 text-sm">{item.time}</span>
                  </div>
                </div>
                <span className="text-5xl font-black leading-none select-none text-[#00875A]">
                  {item.num}
                </span>
              </div>

              {/* Divider */}
              <div className="mx-7 h-px bg-gray-100" />

              {/* Sessions */}
              <div className="px-7 py-5 flex flex-col gap-3 relative z-10">
                {item.sessions.map((sesi, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 px-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#0D2137]">{sesi.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">Per orang / sesi</p>
                    </div>
                    <span className="text-lg font-bold text-[#00875A] whitespace-nowrap">
                      {sesi.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-7 pb-7 relative z-10">
                <a
                  href="https://wa.me/6281292929210?text=Halo%20Admin%20Ken%20Arok%2C%20saya%20mau%20daftar%20lomba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-xl font-bold text-sm py-3.5 transition-all duration-300
                             bg-white/40 backdrop-blur-md border border-[#00875A]/30
                             text-[#00875A] hover:text-white
                             hover:bg-[#00875A] hover:shadow-[0_0_20px_rgba(0,135,90,0.4)]
                             shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="mt-10 flex items-center justify-center gap-2" data-aos="fade-up" data-aos-delay="400">
          <span className="text-gray-300">—</span>
          <p className="text-center text-gray-400 text-sm">
            Jadwal lomba sudah bersifat tetap.{" "}
            <a
              href="https://wa.me/6281292929210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-semibold hover:underline"
            >
              Hubungi admin WhatsApp
            </a>{" "}
            untuk informasi dan pendaftaran lebih lanjut.
          </p>
          <span className="text-gray-300">—</span>
        </div>
      </div>
    </section>
  );
}
