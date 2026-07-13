import { AlertTriangle, CheckCircle2, Gauge } from "lucide-react";
import { GraduatesDemandChart } from "@/src/components/dashboard/charts";
import { SectionCard, StatCard, StatusBadge } from "@/src/components/dashboard/ui";
import { mismatchComparison, regions } from "@/src/data/regions";

export default function SkillMismatchPage() {
  const ranking = [...regions].sort((a, b) => b.mismatchIndex - a.mismatchIndex).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Indeks Mismatch Rata-rata"
          value="0.63"
          note="Semakin mendekati 1, ketidaksesuaian skill semakin tinggi."
          icon={Gauge}
        />
        <StatCard
          title="Jurusan Perlu Diperkuat"
          value="9"
          note="Fokus pada manufaktur, digital, logistik, dan hospitality."
          icon={AlertTriangle}
          tone="amber"
        />
        <StatCard
          title="Kompetensi Selaras"
          value="14"
          note="Kompetensi yang sudah dekat dengan kebutuhan lokal."
          icon={CheckCircle2}
          tone="navy"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard
          title="Lulusan vs Kebutuhan Industri"
          description="Simulasi perbandingan suplai lulusan dan demand industri per sektor."
        >
          <GraduatesDemandChart data={mismatchComparison} />
        </SectionCard>
        <SectionCard
          title="Insight Otomatis"
          description="Ringkasan berbasis pola mismatch pada data dummy."
        >
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#FFD43B]/14 p-4 text-[#7A5600]">
              <p className="font-semibold">Manufaktur dan digital butuh intervensi cepat.</p>
              <p className="mt-2 text-sm leading-7">
                Wilayah dengan sektor manufaktur tinggi membutuhkan pelatihan
                operator produksi, quality control, dan basic automation. Namun,
                ketersediaan lulusan dengan kompetensi tersebut masih rendah.
              </p>
            </div>
            <div className="rounded-2xl bg-[#EAF4FF] p-4 text-[#0B4EA2]">
              <p className="font-semibold">Rekomendasi perbaikan kompetensi</p>
              <p className="mt-2 text-sm leading-7">
                Sinkronkan kurikulum vokasi dengan proyek industri lokal,
                sertifikasi mikro, dan bootcamp pendek melalui BLK Mobile.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Ranking Wilayah dengan Mismatch Tinggi">
        <div className="table-scroll">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="py-3 pr-4">Wilayah</th>
                <th className="py-3 pr-4">Sektor Dominan</th>
                <th className="py-3 pr-4">Mismatch</th>
                <th className="py-3 pr-4">Risiko</th>
                <th className="py-3 pr-4">Arah Perbaikan</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((item) => (
                <tr key={item.id} className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-semibold text-[#061A33]">{item.region}</td>
                  <td className="py-4 pr-4 text-slate-600">{item.dominantSector}</td>
                  <td className="py-4 pr-4 font-semibold">{item.mismatchIndex.toFixed(2)}</td>
                  <td className="py-4 pr-4">
                    <StatusBadge value={item.riskCategory} />
                  </td>
                  <td className="py-4 pr-4 text-slate-600">{item.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
