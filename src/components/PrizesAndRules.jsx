import React from "react";

const rules = [
  "Dilarang ngeting (tanpa umpan).",
  "Wajib menggunakan 1 joran.",
  "Dilarang memakai umpan lumut dan sabun.",
  "Swik hanya diperbolehkan 1 kali.",
  "Dilarang mengolah ikan yang tidak makan (karena ini bukan sulapan).",
  "Utamakan sportivitas dan kekeluargaan.",
  "Jaga kebersihan dan ketertiban area kolam.",
  "Keputusan panitia bersifat mutlak.",
];

const PrizesAndRules = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* ========== LEFT COLUMN — SISTEM JUARA ========== */}
        <div id="juara" className="pr-0 md:pr-12 pb-10 md:pb-0" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D2137] mb-1 tracking-tight">
            Sistem Juara
          </h2>
          <div className="w-10 h-0.5 bg-[#00875A] rounded-full mb-6" />

          <div className="text-gray-600 leading-relaxed pr-0 md:pr-4 space-y-4">
            <p className="text-[15px] md:text-base text-justify">
              Selamat datang di arena pertarungan para angler sejati! Di Kolam Pemancingan Ken Arok, kami tidak sekadar menawarkan tempat memancing biasa, melainkan pengalaman adrenalin tingkat tinggi. Rasakan sensasi luar biasa saat joran Anda melengkung tajam menahan tarikan lele monster dengan bobot <strong className="text-[#0D2137]">7 kg sampai 8 kg</strong> per ekornya — bahkan bisa mencapai <strong className="text-[#0D2137]">9 kg</strong>, jika ikan makan nanti dicek oleh anak kolam baru masuk ke penimbangan, jika ikan tidak makan akan dilepas lagi ke kolam.
            </p>
            <p className="text-[15px] md:text-base text-justify">
              Sistem perlombaan kami dirancang secara profesional, adil, dan transparan untuk memastikan setiap pemancing dari berbagai kalangan memiliki peluang menang yang sama. Buktikan keahlian, racikan umpan terbaik, serta ketangkasan Anda dalam menaklukkan sang penguasa kolam.
            </p>
            <p className="text-[15px] md:text-base text-justify">
              Sebagai bentuk apresiasi atas ketangguhan Anda, kami telah menyiapkan total hadiah juara fantastis yang pastinya sepadan. Raih kesempatan memenangkan hadiah uang tunai mulai dari <strong className="text-[#00875A]">Rp 1.000.000</strong>, <strong className="text-[#00875A]">Rp 1.500.000</strong>, hingga <strong className="text-[#00875A]">Rp 2.000.000</strong> — dan bahkan <span className="font-semibold text-[#0D2137]">jumlah ini bisa jauh lebih besar</span> menyesuaikan dengan skala event perlombaan yang sedang berlangsung!
            </p>
          </div>
        </div>

        {/* Horizontal divider on mobile */}
        <div className="block md:hidden w-full h-px bg-gray-200 my-2" />

        {/* ========== RIGHT COLUMN — PERATURAN KOLAM ========== */}
        <div
          id="peraturan"
          className="pl-0 md:pl-12 md:border-l md:border-gray-200 pt-10 md:pt-0"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D2137] mb-1 tracking-tight">
            Peraturan Kolam
          </h2>
          <div className="w-10 h-0.5 bg-[#00875A] rounded-full mb-7" />

          <ol className="space-y-3">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start gap-3.5 group"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00875A] text-white text-xs font-bold flex items-center justify-center mt-0.5 shadow-sm">
                  {index + 1}
                </span>
                <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {rule}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PrizesAndRules;
