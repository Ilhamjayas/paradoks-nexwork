"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, BusFront, Check, FileUser, MapPinned, MessageCircleMore, Sparkles, TrendingUp, UserRound, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeatureItem = {
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  route: string;
  icon: LucideIcon;
  recommended?: boolean;
  tone: "blue" | "yellow" | "navy" | "mint";
};

const features: FeatureItem[] = [
  { title: "Cari Kerja Cerdas", description: "Rekomendasi lowongan berdasarkan skill, minat, lokasi, dan progres belajarmu.", benefits: ["Match score pekerjaan", "Filter lokasi dan bidang", "Alasan rekomendasi kerja"], cta: "Cari peluang kerja", route: "/dashboard/jobs", icon: BriefcaseBusiness, recommended: true, tone: "blue" },
  { title: "Daftar Pelatihan", description: "Pilih pelatihan online, hybrid, atau BLK Mobile sesuai kebutuhan industri.", benefits: ["Kategori pelatihan", "Mode belajar fleksibel", "Sertifikat kompetensi"], cta: "Lihat pelatihan", route: "/dashboard/training", icon: BookOpenCheck, tone: "yellow" },
  { title: "Peta Peluang Kerja", description: "Lihat peluang kerja, risiko wilayah, dan kebutuhan skill di berbagai daerah.", benefits: ["Peta nasional", "Wilayah prioritas", "Titik BLK Mobile"], cta: "Buka peta", route: "/dashboard/national-map", icon: MapPinned, tone: "navy" },
  { title: "CV & Portofolio Digital", description: "Bangun CV, sertifikat, dan project dalam satu profil karier yang siap dibagikan.", benefits: ["CV readiness score", "Checklist kelengkapan", "Preview portofolio"], cta: "Buat CV digital", route: "/dashboard/cv-portfolio", icon: FileUser, tone: "mint" },
  { title: "Konsultasi Karir", description: "Dapatkan arahan untuk review CV, interview, pilihan karier, dan strategi melamar.", benefits: ["Jadwal konsultasi", "Topik karier", "Rekomendasi mentor"], cta: "Konsultasi karier", route: "/dashboard/career-consultation", icon: MessageCircleMore, tone: "yellow" },
  { title: "Progress Kesiapan Kerja", description: "Pantau perkembangan skill, pelatihan, CV, portofolio, dan kesiapan melamar.", benefits: ["Career readiness score", "Grafik perkembangan", "Target mingguan"], cta: "Lihat progres", route: "/dashboard/self-progress", icon: TrendingUp, tone: "blue" },
  { title: "BLK Mobile", description: "Pelatihan keliling yang hadir ke wilayah prioritas berdasarkan kebutuhan skill lokal.", benefits: ["Jadwal armada", "Pelatihan daerah", "Koneksi industri"], cta: "Lihat BLK Mobile", route: "/dashboard/blk-mobile", icon: BusFront, tone: "navy" },
  { title: "Profil Pengguna", description: "Kelola data diri, minat karier, skill, riwayat pelatihan, dan rekomendasi personal.", benefits: ["Profil karier", "Skill utama", "Rekomendasi personal"], cta: "Lengkapi profil", route: "/dashboard/profile", icon: UserRound, tone: "mint" },
];

const toneClasses = {
  blue: { icon: "bg-[#E2F1FF] text-[#0B4EA2]", accent: "bg-[#1E88E5]", card: "bg-gradient-to-br from-[#F1F8FF] to-white" },
  yellow: { icon: "bg-[#FFF2B7] text-[#735600]", accent: "bg-[#FFD23F]", card: "bg-white" },
  navy: { icon: "bg-[#061A33] text-[#FFD23F]", accent: "bg-[#0B4EA2]", card: "bg-white" },
  mint: { icon: "bg-[#E2F8F0] text-[#087356]", accent: "bg-[#1BA77C]", card: "bg-white" },
};

export function FeatureShowcase() {
  const [active, setActive] = useState<FeatureItem | null>(null);
  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    document.addEventListener("keydown", close);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = previous; };
  }, [active]);

  return <>
    <section id="fitur" className="relative scroll-mt-24 bg-[#F5F8FC] py-20"><span id="solusi" className="absolute -top-20" />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#0B4EA2]">Semua dalam satu akun</p><h2 className="mt-3 text-3xl font-bold tracking-[-.035em] text-[#061A33] sm:text-4xl">Fitur yang Membantu Kamu Siap Kerja</h2></div>
          <p className="max-w-2xl text-sm leading-6 text-[#5D7289] lg:justify-self-end">Network App menghubungkan proses belajar, membangun profil karier, dan menemukan peluang kerja dalam satu ekosistem yang mudah dipahami.</p>
        </div>
        <div className="mt-9 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            const tone = toneClasses[item.tone];
            return <button key={item.title} type="button" onClick={() => setActive(item)} className={`group relative flex h-full min-h-[322px] cursor-pointer flex-col overflow-hidden rounded-[20px] p-5 text-left shadow-[0_10px_34px_rgba(6,26,51,.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(6,26,51,.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B4EA2] ${tone.card}`}>
              <span className={`absolute inset-x-0 top-0 h-1 ${tone.accent}`} />
              <div className="flex items-start justify-between gap-3"><span className={`flex h-11 w-11 items-center justify-center rounded-[13px] transition duration-200 group-hover:scale-105 ${tone.icon}`}><Icon size={20} /></span>{item.recommended ? <span className="rounded-full bg-[#FFF0AD] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.08em] text-[#6C5100]">Direkomendasikan</span> : <Sparkles className="text-[#C6D3E0] transition group-hover:text-[#FFD23F]" size={16} />}</div>
              <h3 className="mt-4 text-[16px] font-bold leading-5 text-[#061A33]">{item.title}</h3>
              <p className="mt-2 text-[12px] leading-5 text-[#536A82]">{item.description}</p>
              <div className="mt-4 space-y-2">{item.benefits.map(benefit => <p key={benefit} className="flex items-center gap-2 text-[11px] font-semibold text-[#38516B]"><span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7F1FA] text-[#0B4EA2]"><Check size={10} strokeWidth={3} /></span>{benefit}</p>)}</div>
              <span className="mt-auto flex items-center justify-between border-t border-[#E5ECF3] pt-4 text-xs font-bold text-[#0B4EA2] transition group-hover:text-[#061A33]"><span>{item.cta}</span><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF3FC] transition group-hover:translate-x-0.5 group-hover:bg-[#FFD23F]"><ArrowRight size={14} /></span></span>
            </button>;
          })}
        </div>
      </div>
    </section>

    {active ? <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-labelledby="feature-modal-title">
      <button type="button" className="absolute inset-0 bg-[#061A33]/65 backdrop-blur-sm" onClick={() => setActive(null)} aria-label="Tutup detail fitur" />
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-t-[26px] bg-white shadow-2xl sm:rounded-[26px]">
        <div className="bg-[#061A33] p-6 text-white sm:p-7"><div className="flex items-start justify-between gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#FFD23F] text-[#061A33]"><active.icon size={22} /></span><button type="button" onClick={() => setActive(null)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20" aria-label="Tutup"><X size={18} /></button></div><p className="mt-5 text-[10px] font-bold uppercase tracking-[.14em] text-[#8FC3F8]">Detail fitur Network App</p><h3 id="feature-modal-title" className="mt-2 text-2xl font-bold">{active.title}</h3><p className="mt-3 text-sm leading-6 text-[#C4DAF0]">{active.description}</p></div>
        <div className="p-6 sm:p-7"><p className="text-xs font-bold uppercase tracking-[.1em] text-[#718298]">Yang bisa kamu lakukan</p><div className="mt-4 grid gap-3 sm:grid-cols-3">{active.benefits.map(benefit => <div key={benefit} className="rounded-xl bg-[#F2F6FA] p-3"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white text-[#0B4EA2]"><Check size={13} /></span><p className="mt-2 text-[11px] font-bold leading-4 text-[#304A65]">{benefit}</p></div>)}</div><div className="mt-5 rounded-xl bg-[#FFF6D4] p-4"><p className="text-xs font-bold text-[#6F5400]">Tersedia di dashboard demo</p><p className="mt-1 text-[11px] leading-5 text-[#735F24]">Masuk menggunakan akun demo untuk melihat data simulasi dan mencoba alur fitur ini.</p></div><div className="mt-5 grid gap-2 sm:grid-cols-2"><button type="button" onClick={() => setActive(null)} className="min-h-11 rounded-xl bg-[#EFF3F7] px-4 text-xs font-bold text-[#52667F]">Kembali</button><Link href="/login" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#FFD23F] px-4 text-xs font-bold text-[#061A33]">Coba Fitur di Demo <ArrowRight size={14} /></Link></div></div>
      </div>
    </div> : null}
  </>;
}
