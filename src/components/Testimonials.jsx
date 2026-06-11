import React from "react";

const testimonials = [
  {
    name: "Amer / Pemburu Janda",
    role: "Pemancing Profesional",
    text: "Tempatnya bersih banget dan suasananya adem. Tarikan lelenya luar biasa berat, sekali kena langsung bikin deg-degan. Pokoknya beda levelnya sama kolam lain.",
  },
  {
    name: "Bang Jek",
    role: "Komunitas Mancing Lumajang",
    text: "Ikannya besar-besar, serius! Sekali narik langsung bikin joran melengkung tajam. Sudah beberapa kali ikut lomba di sini dan selalu nagih buat balik lagi.",
  },
  {
    name: "Pak Gumer",
    role: "Peserta Langganan",
    text: "Fasilitasnya lengkap, ada kantin, parkir luas, dan tempatnya bersih. Lele yang dirilis ukurannya monster semua. Recommended banget buat yang suka Galatama serius.",
  },
  {
    name: "Pak Moden",
    role: "Juara Galatama",
    text: "Sistem penilaian juaranya adil dan transparan. Karena ikannya tidak boleh dibawa pulang, kualitas tarikannya selalu terjaga dari awal sesi sampai akhir. Joss!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-[#F7F9FB] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="mb-16 text-center" data-aos="fade-down">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00875A] mb-3">
            Kata Mereka
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2137]">
            Apa kata para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              pemancing kami
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-[15px] max-w-xl mx-auto leading-relaxed">
            Dengarkan pengalaman langsung dari para pemancing yang sudah merasakan sensasi berlomba di Kolam Ken Arok.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between gap-7"
              style={{ borderLeft: "4px solid #00875A" }}
            >
              {/* Quote text */}
              <p className="text-gray-600 text-[15px] leading-[1.8] font-normal">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                {/* Avatar initials */}
                <div className="w-11 h-11 rounded-full bg-[#E8F5EE] flex items-center justify-center text-[#00875A] font-bold text-base flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#0D2137] text-sm">{item.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00875A] mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
