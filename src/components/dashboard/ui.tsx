import type { LucideIcon } from "lucide-react";
import { regions } from "@/src/data/regions";

export function StatCard({
  title,
  value,
  note,
  icon: Icon,
  tone = "navy",
}: {
  title: string;
  value: string;
  note: string;
  icon: LucideIcon;
  tone?: "green" | "navy" | "amber" | "red" | "blue";
}) {
  const tones = {
    green: "bg-emerald-50 text-emerald-700",
    navy: "bg-[#061A33] text-[#FFD43B]",
    blue: "bg-[#EAF4FF] text-[#0B4EA2]",
    amber: "bg-[#FFD43B]/16 text-[#7A5600]",
    red: "bg-red-50 text-red-700",
  };

  return (
    <article className="nexwork-lift rounded-2xl bg-white p-5 shadow-lg shadow-[#061A33]/7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-[#061A33]">{value}</p>
        </div>
        <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tones[tone]}`}>
          <Icon size={22} />
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-500">{note}</p>
    </article>
  );
}

export function StatusBadge({ value }: { value: string }) {
  const color = value.includes("Sangat") || value === "Kritis"
    ? "bg-red-100 text-red-700"
    : value.includes("Tinggi")
      ? "bg-[#FFD43B]/18 text-[#7A5600]"
      : value.includes("Berjalan") || value.includes("Selesai")
        ? "bg-emerald-100 text-emerald-700"
      : value.includes("Siap")
          ? "bg-[#EAF4FF] text-[#0B4EA2]"
          : "bg-slate-100 text-slate-700";

  return (
    <span className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${color}`}>
      {value}
    </span>
  );
}

export function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-lg shadow-[#061A33]/7">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-[#061A33]">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function RiskMapGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {regions.map((item) => {
        const color =
          item.riskCategory === "Sangat Tinggi"
            ? "bg-red-50 text-red-700 border-red-200"
            : item.riskCategory === "Tinggi"
              ? "bg-[#FFD43B]/18 text-[#7A5600]"
              : item.riskCategory === "Sedang"
                ? "bg-[#EAF4FF] text-[#0B4EA2]"
                : "bg-emerald-100 text-emerald-700";
        return (
          <div key={item.id} className={`rounded-2xl p-3 shadow-sm shadow-[#061A33]/5 ${color}`}>
            <p className="text-xs font-semibold">{item.province}</p>
            <p className="mt-2 text-sm font-semibold text-[#061A33]">
              {item.region}
            </p>
            <p className="mt-3 text-2xl font-semibold">{item.riskScore}</p>
            <p className="text-xs">{item.riskCategory}</p>
          </div>
        );
      })}
    </div>
  );
}
