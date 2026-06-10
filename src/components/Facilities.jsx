import React, { useState } from "react";

const facilities = [
  {
    label: "Parkir",
    sublabel: "Luas & Aman",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <path d="M9 17V8h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    label: "Gazebo",
    sublabel: "Teduh & Nyaman",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-6 9 6" />
        <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
        <line x1="9" y1="20" x2="9" y2="13" />
        <line x1="15" y1="20" x2="15" y2="13" />
        <line x1="9" y1="13" x2="15" y2="13" />
      </svg>
    ),
  },
  {
    label: "Spot Mancing",
    sublabel: "Posisi Strategis",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4l6 6" />
        <path d="M10 4v6H4" />
        <path d="M10 10c0 5 4 9 9 9" />
        <circle cx="19" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Lele Monster",
    sublabel: "Ikan Besar & Berat",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 12c2-4 6-7 10-7s8 3 10 7c-2 4-6 7-10 7S4 16 2 12z" />
        <circle cx="16" cy="11" r="1.2" fill="currentColor" />
        <path d="M2 12c-1-3-1-6 0-7s2 4 2 7-1 6-2 7" />
      </svg>
    ),
  },
  {
    label: "Toilet",
    sublabel: "Bersih & Terawat",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 21V8a4 4 0 0 1 8 0v1h5a2 2 0 0 1 2 2v10" />
        <path d="M4 21h16" />
        <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
      </svg>
    ),
  },
  {
    label: "Kantin",
    sublabel: "Makanan & Minuman",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
];

const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (i) => {
    // Toggle: tap same card → deactivate, tap different card → activate that one
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HEADING */}
        <div className="mb-16 text-center" data-aos="fade-down">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#00875A]">
            Yang Kami Sediakan
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D2137] tracking-tight">
            FASILITAS
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {facilities.map(({ svg, label, sublabel }, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                onClick={() => handleTap(i)}
                className={`group flex flex-col items-center gap-4 rounded-2xl border px-4 py-8 transition-all duration-300 cursor-pointer select-none
                  ${
                    isActive
                      ? "-translate-y-2 shadow-lg shadow-emerald-100 border-emerald-200 bg-white"
                      : "border-gray-100 bg-[#F9FAFB] hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-100 hover:border-emerald-200"
                  }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#00875A] text-white"
                        : "bg-[#0D2137]/5 text-[#0D2137] group-hover:bg-[#00875A] group-hover:text-white"
                    }`}
                >
                  {svg}
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-[#0D2137] leading-snug">{label}</h3>
                  <p className="mt-0.5 text-xs text-gray-400 font-medium">{sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
