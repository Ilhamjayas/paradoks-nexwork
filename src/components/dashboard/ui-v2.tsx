import type { LucideIcon } from "lucide-react";

const toneStyles = { navy: "bg-[#061A33] text-[#FFD43B]", blue: "bg-[#E8F3FF] text-[#0B4EA2]", amber: "bg-[#FFF4C7] text-[#7A5A00]", green: "bg-[#E9F9F3] text-[#087A5B]", red: "bg-[#FFF0EF] text-[#BC3737]" };

export function StatCard({ title, value, note, icon: Icon, tone = "blue", eyebrow }: { title: string; value: string; note: string; icon: LucideIcon; tone?: keyof typeof toneStyles; eyebrow?: string }) {
  return <article className="dashboard-card dashboard-card-hover flex h-full min-h-[168px] flex-col p-5"><div className="flex items-start justify-between gap-4"><div className="min-w-0">{eyebrow ? <p className="mb-1 text-[10px] font-bold uppercase tracking-[.12em] text-[#0B4EA2]">{eyebrow}</p> : null}<p className="text-[13px] font-semibold leading-5 text-[#6B7E94]">{title}</p></div><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${toneStyles[tone]}`}><Icon size={19} strokeWidth={2.1} /></span></div><p className="mt-3 text-[30px] font-bold tracking-[-.04em] text-[#061A33]">{value}</p><p className="mt-auto pt-3 text-xs leading-5 text-[#718298]">{note}</p></article>;
}

export function StatusBadge({ value }: { value: string }) {
  const color = value.includes("Sangat") || value === "Kritis" ? "bg-[#FFE8E6] text-[#B62F2F]" : value.includes("Tinggi") || value.includes("terbatas") ? "bg-[#FFF3C4] text-[#735600]" : value.includes("Berjalan") || value.includes("Selesai") || value.includes("Tersedia") || value.includes("Aktif") || value.includes("Publik") ? "bg-[#E4F8F0] text-[#087356]" : value.includes("Rendah") || value.includes("Online") ? "bg-[#E8F3FF] text-[#0B4EA2]" : "bg-[#EEF2F6] text-[#53657A]";
  return <span className={`inline-flex w-fit whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold ${color}`}>{value}</span>;
}

export function SectionCard({ title, description, children, action, className = "" }: { title: string; description?: string; children: React.ReactNode; action?: React.ReactNode; className?: string }) {
  return <section className={`dashboard-card p-5 sm:p-6 ${className}`}><div className="mb-5 flex items-start justify-between gap-4"><div className="min-w-0"><h2 className="text-lg font-bold tracking-[-.02em] text-[#061A33]">{title}</h2>{description ? <p className="mt-1.5 max-w-3xl text-xs leading-5 text-[#718298]">{description}</p> : null}</div>{action}</div>{children}</section>;
}

export function ProgressBar({ value, tone = "blue", label }: { value: number; tone?: "blue" | "yellow" | "green"; label?: string }) {
  const colors = { blue: "bg-[#1265BE]", yellow: "bg-[#FFD43B]", green: "bg-[#16A77B]" };
  return <div>{label ? <div className="mb-2 flex items-center justify-between text-xs"><span className="font-semibold text-[#41546B]">{label}</span><span className="font-bold text-[#061A33]">{value}%</span></div> : null}<div className="h-2 overflow-hidden rounded-full bg-[#E8EDF3]"><div className={`h-full rounded-full ${colors[tone]}`} style={{ width: `${value}%` }} /></div></div>;
}

export function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <section className="dashboard-hero relative overflow-hidden px-5 py-6 text-white sm:px-7 sm:py-7"><div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#FFD43B]">{eyebrow}</p><h2 className="mt-2 text-2xl font-bold tracking-[-.03em] sm:text-[28px]">{title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#C9DDF4]">{description}</p></div>{action}</div></section>;
}

export const primaryButton = "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#FFD43B] px-4 py-2 text-xs font-bold text-[#061A33] shadow-[0_8px_20px_rgba(255,212,59,.2)] transition hover:bg-[#FFE16D]";
export const secondaryButton = "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#EAF3FC] px-4 py-2 text-xs font-bold text-[#0B4EA2] transition hover:bg-[#DCEBFA]";
