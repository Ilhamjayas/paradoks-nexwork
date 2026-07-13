"use client";

import { useMemo, useState } from "react";
import { Filter, MapPinned } from "lucide-react";
import { SectionCard, StatusBadge } from "@/src/components/dashboard/ui";
import { RiskCategory, regions } from "@/src/data/regions";

export default function RiskMapPage() {
  const [province, setProvince] = useState("Semua");
  const [category, setCategory] = useState<RiskCategory | "Semua">("Semua");

  const provinces = useMemo(
    () => ["Semua", ...Array.from(new Set(regions.map((item) => item.province)))],
    [],
  );

  const filtered = regions.filter((item) => {
    const provinceMatch = province === "Semua" || item.province === province;
    const categoryMatch = category === "Semua" || item.riskCategory === category;
    return provinceMatch && categoryMatch;
  });

  const selected = filtered[0] ?? regions[0];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-5 shadow-lg shadow-[#061A33]/7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-[#0B4EA2]">
              Peta Risiko Wilayah
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#061A33]">
              Simulasi prioritas berdasarkan skor risiko dan mismatch.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold text-slate-500">Provinsi</span>
              <select
                value={province}
                onChange={(event) => setProvince(event.target.value)}
                className="mt-2 w-full rounded-lg bg-white px-3 py-2 text-sm ring-1 ring-slate-200"
              >
                {provinces.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-slate-500">Kategori Risiko</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as RiskCategory | "Semua")}
                className="mt-2 w-full rounded-lg bg-white px-3 py-2 text-sm ring-1 ring-slate-200"
              >
                {["Semua", "Rendah", "Sedang", "Tinggi", "Sangat Tinggi"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <SectionCard
          title="Map Preview Indonesia"
          description="MVP memakai grid wilayah agar status risiko tetap terbaca jelas."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="nexwork-lift rounded-2xl bg-[#F8FAFC] p-4 shadow-sm shadow-[#061A33]/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <MapPinned className="text-[#0B4EA2]" size={20} />
                  <StatusBadge value={item.riskCategory} />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-500">
                  {item.province}
                </p>
                <h3 className="mt-1 font-semibold text-[#061A33]">{item.region}</h3>
                <p className="mt-4 text-3xl font-semibold text-[#061A33]">
                  {item.riskScore}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Panel Detail Wilayah"
          description="Wilayah pertama dari hasil filter ditampilkan sebagai detail cepat."
        >
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#061A33] p-5 text-white">
              <p className="text-sm text-[#BFD8FA]">{selected.province}</p>
              <h3 className="mt-1 text-2xl font-semibold">{selected.region}</h3>
              <p className="mt-4 text-4xl font-semibold">{selected.riskScore}</p>
              <p className="text-sm text-[#BFD8FA]">Skor risiko wilayah</p>
            </div>
            {[
              ["TPT lulusan vokasi", `${selected.vocationalUnemployment}%`],
              ["Skill mismatch index", selected.mismatchIndex.toFixed(2)],
              ["Sektor dominan", selected.dominantSector],
              ["Rekomendasi", selected.recommendation],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-[#F8FAFC] p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  {label}
                </p>
                <p className="mt-2 font-semibold text-[#061A33]">{value}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Daftar Wilayah" description="Hasil filter wilayah prioritas.">
        <div className="table-scroll">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="py-3 pr-4">Wilayah</th>
                <th className="py-3 pr-4">Skor</th>
                <th className="py-3 pr-4">TPT Vokasi</th>
                <th className="py-3 pr-4">SMI</th>
                <th className="py-3 pr-4">Intervensi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-semibold text-[#061A33]">{item.region}</td>
                  <td className="py-4 pr-4">{item.riskScore}</td>
                  <td className="py-4 pr-4">{item.vocationalUnemployment}%</td>
                  <td className="py-4 pr-4">{item.mismatchIndex.toFixed(2)}</td>
                  <td className="py-4 pr-4 text-slate-600">{item.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 ? (
          <p className="mt-4 rounded-xl bg-[#FFD43B]/14 p-4 text-sm font-semibold text-[#7A5600]">
            <Filter className="mr-2 inline" size={16} />
            Tidak ada wilayah pada kombinasi filter ini.
          </p>
        ) : null}
      </SectionCard>
    </div>
  );
}
