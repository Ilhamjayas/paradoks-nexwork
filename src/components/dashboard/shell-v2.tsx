"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  BookOpenCheck, BriefcaseBusiness, BusFront, ChevronDown, FileUser,
  LayoutDashboard, LogOut, MapPinned, Menu, MessageCircleMore, Sparkles,
  TrendingUp, UserRound, X,
} from "lucide-react";
import { AUTH_STORAGE_KEY } from "@/lib/auth";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/national-map", label: "Peta Nasional", icon: MapPinned },
  { href: "/dashboard/jobs", label: "Cari Kerja Cerdas", icon: BriefcaseBusiness },
  { href: "/dashboard/training", label: "Daftar Pelatihan", icon: BookOpenCheck },
  { href: "/dashboard/blk-mobile", label: "BLK Mobile", icon: BusFront },
  { href: "/dashboard/cv-portfolio", label: "CV & Portofolio", icon: FileUser },
  { href: "/dashboard/career-consultation", label: "Konsultasi Karir", icon: MessageCircleMore },
  { href: "/dashboard/self-progress", label: "Perkembangan Diri", icon: TrendingUp },
  { href: "/dashboard/profile", label: "Profil Pengguna", icon: UserRound },
];

const pageTitles: Record<string, [string, string]> = {
  "/dashboard": ["Overview", "Halo Ilham, ini arah terbaik untuk langkahmu berikutnya."],
  "/dashboard/national-map": ["Peta Nasional", "Baca kebutuhan skill dan akses pelatihan di seluruh Indonesia."],
  "/dashboard/jobs": ["Cari Kerja Cerdas", "Lowongan yang dipilih berdasarkan profil, wilayah, dan progresmu."],
  "/dashboard/training": ["Daftar Pelatihan", "Pilih pelatihan yang paling mendekatkanmu ke pekerjaan tujuan."],
  "/dashboard/blk-mobile": ["BLK Mobile", "Pelatihan praktis yang bergerak lebih dekat ke wilayahmu."],
  "/dashboard/cv-portfolio": ["CV & Portofolio", "Tunjukkan kemampuanmu lewat dokumen dan project yang rapi."],
  "/dashboard/career-consultation": ["Konsultasi Karir", "Bicarakan langkah karirmu bersama mentor yang tepat."],
  "/dashboard/self-progress": ["Perkembangan Diri", "Pantau hal yang sudah kuat dan bagian yang perlu dikejar."],
  "/dashboard/profile": ["Profil Pengguna", "Data ini membantu NexWork memberi rekomendasi yang lebih relevan."],
};

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="relative flex h-full flex-col">
      <Link href="/" className="flex items-center gap-3 px-5 pb-5 pt-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#FFD43B] text-[#061A33] shadow-[0_10px_30px_rgba(255,212,59,.16)]"><Sparkles size={20} strokeWidth={2.4} /></span>
        <div className="min-w-0"><p className="truncate text-[15px] font-bold text-white">NexWork 2045</p><p className="mt-0.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#78B8FF]">Career Intelligence</p></div>
      </Link>
      <nav className="nexwork-sidebar-scroll flex-1 space-y-1 overflow-y-auto px-3 pb-4 pt-3">
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#6686AC]">Menu utama</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} onClick={onNavigate} className={`group relative flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all ${active ? "bg-[#1459AA] text-white shadow-[0_8px_24px_rgba(0,0,0,.16)] before:absolute before:-left-0.5 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[#FFD43B]" : "text-[#B9D3F1] hover:bg-white/[0.065] hover:text-white"}`}>
              <Icon className={active ? "text-[#FFD43B]" : "text-[#83A9D3] group-hover:text-white"} size={18} strokeWidth={2} /><span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="m-3 mt-0 rounded-2xl bg-gradient-to-br from-white/[0.09] to-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#FFD43B] shadow-[0_0_0_4px_rgba(255,212,59,.12)]" /><p className="text-xs font-semibold text-white">Profilmu 84% lengkap</p></div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[84%] rounded-full bg-[#FFD43B]" /></div>
        <Link href="/dashboard/profile" onClick={onNavigate} className="mt-3 inline-flex text-[11px] font-semibold text-[#9BC9FF] hover:text-white">Lengkapi profil →</Link>
      </div>
    </div>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => { if (!window.localStorage.getItem(AUTH_STORAGE_KEY)) { router.replace("/login"); return; } setReady(true); }, [router]);
  const [title, subtitle] = useMemo(() => pageTitles[pathname] ?? ["NexWork", "Rencanakan langkah karirmu dengan data yang lebih jelas."], [pathname]);
  function logout() { window.localStorage.removeItem(AUTH_STORAGE_KEY); router.push("/login"); }
  if (!ready) return <main className="flex min-h-screen items-center justify-center bg-[#F3F6FA] text-sm font-semibold text-[#061A33]">Menyiapkan ruang kerjamu...</main>;
  return (
    <main className="min-h-screen bg-[#F3F6FA] text-[#102033] lg:grid lg:grid-cols-[264px_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-screen overflow-hidden bg-[#061A33] lg:block"><div className="absolute inset-0 nexwork-grid opacity-20" /><div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1677D2]/20 blur-3xl" /><NavContent /></aside>
      {drawerOpen ? <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-[#061A33]/55 backdrop-blur-sm" aria-label="Tutup menu" onClick={() => setDrawerOpen(false)} /><aside className="relative h-full w-[290px] max-w-[86vw] overflow-hidden bg-[#061A33] shadow-2xl"><button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white" onClick={() => setDrawerOpen(false)} aria-label="Tutup navigasi"><X size={18} /></button><NavContent onNavigate={() => setDrawerOpen(false)} /></aside></div> : null}
      <div className="min-w-0">
        <header className="sticky top-0 z-30 border-b border-[#DCE6F0]/80 bg-[#F8FAFC]/92 backdrop-blur-xl"><div className="mx-auto flex min-h-[78px] max-w-[1560px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3"><button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#061A33] shadow-[0_5px_20px_rgba(6,26,51,.08)] lg:hidden" onClick={() => setDrawerOpen(true)} aria-label="Buka navigasi"><Menu size={20} /></button><div className="min-w-0"><h1 className="truncate text-xl font-bold tracking-[-.02em] text-[#061A33] sm:text-[22px]">{title}</h1><p className="mt-0.5 hidden truncate text-xs text-[#66788F] sm:block">{subtitle}</p></div></div>
          <div className="flex items-center gap-2.5"><span className="hidden rounded-full bg-[#FFF5C7] px-3 py-1.5 text-[11px] font-bold text-[#765800] md:inline-flex">Mode Demo</span><Link href="/dashboard/profile" className="flex items-center gap-2.5 rounded-xl bg-white py-2 pl-2 pr-2.5 shadow-[0_5px_20px_rgba(6,26,51,.07)]"><span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#0B4EA2] text-xs font-bold text-white">IJ</span><span className="hidden text-left sm:block"><span className="block text-xs font-bold text-[#061A33]">Ilham Jaya</span><span className="block text-[10px] text-[#73849A]">Fresh Graduate</span></span><ChevronDown className="hidden text-[#8A9AAD] sm:block" size={14} /></Link><button onClick={logout} className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#697B91] shadow-[0_5px_20px_rgba(6,26,51,.07)] transition hover:text-red-600" aria-label="Keluar" title="Keluar"><LogOut size={17} /></button></div>
        </div></header>
        <div className="mx-auto max-w-[1560px] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">{children}</div>
      </div>
    </main>
  );
}
