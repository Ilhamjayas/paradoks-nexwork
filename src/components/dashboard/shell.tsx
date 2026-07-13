"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BusFront,
  Gauge,
  LayoutDashboard,
  LogOut,
  MapPinned,
  Menu,
  Settings,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { AUTH_STORAGE_KEY } from "@/lib/auth";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/map", label: "Peta Risiko", icon: MapPinned },
  { href: "/dashboard/mismatch", label: "Skill Mismatch", icon: Gauge },
  { href: "/dashboard/training", label: "Rekomendasi Pelatihan", icon: Target },
  { href: "/dashboard/blk-mobile", label: "BLK Mobile", icon: BusFront },
  { href: "/dashboard/monitoring", label: "Monitoring Dampak", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Pengaturan", icon: Settings },
];

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview Nasional",
  "/dashboard/map": "Peta Risiko Wilayah",
  "/dashboard/mismatch": "Skill Mismatch",
  "/dashboard/training": "Rekomendasi Pelatihan",
  "/dashboard/blk-mobile": "BLK Mobile",
  "/dashboard/monitoring": "Monitoring Dampak",
  "/dashboard/settings": "Pengaturan Demo",
};

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <Link href="/" className="flex items-center gap-3 px-5 py-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD43B] text-[#061A33] shadow-lg shadow-black/15">
          <Sparkles size={20} />
        </span>
        <div>
          <p className="font-semibold text-white">NexWork 2045</p>
          <p className="text-xs font-semibold uppercase text-[#75B9FF]">
            Workforce Intel
          </p>
        </div>
      </Link>
      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "relative bg-[#0B4EA2]/72 text-white shadow-lg shadow-black/10 before:absolute before:left-0 before:top-3 before:h-6 before:w-1 before:rounded-r-full before:bg-[#FFD43B]"
                  : "text-[#BFD8FA] hover:bg-white/8 hover:text-white"
              }`}
            >
              <Icon className={active ? "text-[#FFD43B]" : ""} size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mx-3 mb-4 rounded-2xl bg-white/[0.06] p-4 text-xs leading-6 text-[#BFD8FA]">
        <span className="mb-2 inline-flex rounded-full bg-[#FFD43B]/12 px-2 py-1 font-semibold text-[#FFD43B]">
          Simulasi
        </span>
        <p>Data dashboard adalah dummy untuk membaca alur intervensi.</p>
      </div>
    </div>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const auth = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!auth) {
      router.replace("/login");
      return;
    }
    const timer = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(timer);
  }, [router]);

  const title = useMemo(() => pageTitles[pathname] ?? "Dashboard NexWork", [pathname]);

  function logout() {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    router.push("/login");
  }

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] text-[#061A33]">
        <p className="text-sm font-semibold">Memeriksa akses demo...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#102033] lg:grid lg:grid-cols-[288px_1fr]">
      <aside className="sticky top-0 hidden h-screen overflow-hidden bg-[#061A33] lg:block">
        <div className="absolute inset-0 nexwork-grid opacity-25" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#2A8CFF]/18 blur-3xl" />
        <div className="relative h-full">
        <NavContent />
        </div>
      </aside>

      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-slate-950/40"
            aria-label="Tutup menu"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="relative h-full w-80 max-w-[86vw] overflow-hidden bg-[#061A33] shadow-2xl">
            <div className="absolute inset-0 nexwork-grid opacity-25" />
            <button
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white"
              onClick={() => setDrawerOpen(false)}
              aria-label="Tutup navigasi"
            >
              <X size={18} />
            </button>
            <div className="relative h-full">
              <NavContent onNavigate={() => setDrawerOpen(false)} />
            </div>
          </aside>
        </div>
      ) : null}

      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-[#0B4EA2]/10 bg-white/90 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#061A33] shadow-sm shadow-[#061A33]/8 lg:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Buka navigasi"
            >
              <Menu size={20} />
            </button>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase text-[#0B4EA2]">
                NexWork 2045
              </p>
              <h1 className="truncate text-xl font-semibold text-[#061A33]">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-[#FFD43B]/14 px-3 py-1 text-xs font-semibold text-[#7A5600] md:inline-flex">
              Demo Mode
            </span>
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-[#061A33]">Admin Demo</p>
              <p className="text-xs text-slate-500">demo@nexwork.id</p>
            </div>
            <button
              onClick={logout}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm shadow-[#061A33]/8 hover:text-red-600"
              aria-label="Keluar"
              title="Keluar"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>
        <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </div>
    </main>
  );
}
