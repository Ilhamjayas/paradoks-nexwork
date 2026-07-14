import Link from "next/link";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, BusFront, CalendarDays, Check, CircleUserRound, FileUser, MapPinned, MessageCircleMore, Sparkles, Target, TrendingUp } from "lucide-react";
import { jobs } from "@/src/data/jobs";
import { nationalRegions } from "@/src/data/nationalMap";
import { readinessMetrics } from "@/src/data/selfProgress";
import { PageIntro, ProgressBar, SectionCard, StatCard, StatusBadge, primaryButton, secondaryButton } from "@/src/components/dashboard/ui-v2";
import { IndonesiaMap } from "@/src/components/dashboard/indonesia-map";

export function DashboardOverviewV2() {
  const topJob = jobs[0];
  return <div className="space-y-5 sm:space-y-6">
    <PageIntro eyebrow="Ringkasan personal" title="Siap melangkah lebih dekat ke pekerjaan pertamamu?" description="NexWork membaca peluang kerja yang sesuai dengan skill, wilayah, dan progres belajarmu—lalu mengubahnya menjadi langkah yang bisa kamu kerjakan hari ini." action={<Link href="/dashboard/jobs" className={primaryButton}>Lihat peluang terbaik <ArrowRight size={15} /></Link>} />

    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <StatCard title="Career Readiness" value="72%" note="Naik 5 poin dalam 30 hari." icon={TrendingUp} tone="navy" />
      <StatCard title="Mismatch Nasional" value="0.63" note="Kebutuhan skill masih perlu dijembatani." icon={MapPinned} tone="blue" />
      <StatCard title="Pelatihan Cocok" value="6" note="Tiga dapat dimulai minggu ini." icon={BookOpenCheck} tone="amber" />
      <StatCard title="Job Match Tertinggi" value="92%" note="Junior Data Analyst, Surabaya." icon={BriefcaseBusiness} tone="green" />
      <StatCard title="BLK Mobile Terdekat" value="18 km" note="Empat program tersedia." icon={BusFront} tone="red" />
    </div>

    <div className="grid gap-5 xl:grid-cols-12">
      <SectionCard className="xl:col-span-7" title="Peluang nasional, dibaca dari wilayahmu" description="Gambaran ringkas risiko skill dan intervensi BLK Mobile di tujuh kawasan utama." action={<Link href="/dashboard/national-map" className="text-xs font-bold text-[#0B4EA2]">Buka peta →</Link>}>
        <IndonesiaMap compact />
      </SectionCard>

      <SectionCard className="xl:col-span-5" title="Rekomendasi paling kuat" description="Dipilih dari skill, domisili, dan pelatihanmu.">
        <div className="rounded-2xl bg-[#F0F6FC] p-5"><div className="flex items-start justify-between gap-3"><div><StatusBadge value={`${topJob.match}% cocok`} /><h3 className="mt-3 text-lg font-bold text-[#061A33]">{topJob.title}</h3><p className="mt-1 text-xs text-[#667A91]">{topJob.company} · {topJob.location}</p></div><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#061A33] text-[#FFD43B]"><BriefcaseBusiness size={20} /></span></div><p className="mt-4 text-xs leading-5 text-[#52667F]">{topJob.reason}</p><div className="mt-4 flex flex-wrap gap-2">{topJob.skills.map(skill => <span key={skill} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#35506F]">{skill}</span>)}</div><Link href="/dashboard/jobs" className={`${secondaryButton} mt-5 w-full`}>Lihat detail lowongan</Link></div>
      </SectionCard>
    </div>

    <div className="grid gap-5 lg:grid-cols-12">
      <SectionCard className="lg:col-span-5" title="Progres perkembangan diri" description="Kekuatanmu sudah cukup untuk posisi entry-level.">
        <div className="space-y-4">{readinessMetrics.slice(0,4).map(item => <ProgressBar key={item.label} label={item.label} value={item.value} tone={item.value < 60 ? "yellow" : "blue"} />)}</div><Link href="/dashboard/self-progress" className={`${secondaryButton} mt-5 w-full`}>Lihat semua progres</Link>
      </SectionCard>
      <SectionCard className="lg:col-span-4" title="Agenda terdekat" description="Pelatihan dan dukungan karir yang sudah dijadwalkan.">
        <div className="space-y-3">{[
          ["16 Jul", "Review CV bersama Nadia", "10.00 · Online"], ["20 Jul", "Dasar Data Analysis", "Pertemuan 3 · Hybrid"], ["24 Agu", "BLK Mobile Surabaya", "Administrasi Digital"],
        ].map(([date, title, note]) => <div key={title} className="flex items-center gap-3 rounded-xl bg-[#F3F6FA] p-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[10px] font-bold text-[#0B4EA2] shadow-sm">{date}</span><div className="min-w-0"><p className="truncate text-xs font-bold text-[#112B49]">{title}</p><p className="mt-0.5 text-[10px] text-[#718298]">{note}</p></div></div>)}</div>
      </SectionCard>
      <SectionCard className="lg:col-span-3" title="Checklist minggu ini" description="Empat langkah kecil yang paling berdampak.">
        <div className="space-y-3">{["Perbarui ringkasan CV", "Simpan 3 lowongan", "Tambah 1 project", "Latihan interview"].map((item, i) => <div key={item} className="flex items-center gap-2.5"><span className={`flex h-5 w-5 items-center justify-center rounded-full ${i === 0 ? "bg-[#17A77B] text-white" : "bg-[#E7EDF4] text-[#92A1B2]"}`}>{i === 0 ? <Check size={12} /> : null}</span><span className={`text-xs ${i === 0 ? "text-[#8190A2] line-through" : "font-semibold text-[#40546C]"}`}>{item}</span></div>)}</div>
        <div className="mt-5 rounded-xl bg-[#FFF7D6] p-3"><p className="text-[11px] font-bold text-[#6B5100]">Fokus yang disarankan</p><p className="mt-1 text-[10px] leading-4 text-[#7C6729]">Tambahkan dua project agar portofoliomu lebih meyakinkan.</p></div>
      </SectionCard>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {[
        [FileUser, "CV readiness 78%", "Perkuat project dan bukti hasil kerja.", "/dashboard/cv-portfolio"],
        [MessageCircleMore, "Konsultasi yang disarankan", "Review CV dan persiapan interview.", "/dashboard/career-consultation"],
        [CircleUserRound, "Profilmu semakin relevan", "Lengkapi preferensi tipe kerja.", "/dashboard/profile"],
      ].map(([Icon, title, copy, href]) => { const C = Icon as typeof Sparkles; return <Link key={title as string} href={href as string} className="dashboard-card dashboard-card-hover flex min-h-[112px] items-center gap-4 p-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FC] text-[#0B4EA2]"><C size={20} /></span><div><p className="text-sm font-bold text-[#061A33]">{title as string}</p><p className="mt-1 text-xs leading-5 text-[#718298]">{copy as string}</p></div></Link>; })}
    </div>
  </div>;
}
