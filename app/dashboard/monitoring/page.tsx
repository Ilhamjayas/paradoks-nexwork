import { BriefcaseBusiness, CheckCircle2, Handshake, Users } from "lucide-react";
import { ImpactLineChart } from "@/src/components/dashboard/charts";
import { SectionCard, StatCard } from "@/src/components/dashboard/ui";
import { impactTrend, monitoringRecords } from "@/src/data/monitoring";

export default function MonitoringPage() {
  const participants = monitoringRecords.reduce((sum, item) => sum + item.participants, 0);
  const partners = monitoringRecords.reduce((sum, item) => sum + item.partners, 0);
  const avgCompletion = Math.round(
    monitoringRecords.reduce((sum, item) => sum + item.completionRate, 0) /
      monitoringRecords.length,
  );
  const avgAbsorption = Math.round(
    monitoringRecords.reduce((sum, item) => sum + item.jobAbsorption, 0) /
      monitoringRecords.length,
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Peserta Dilatih"
          value={String(participants)}
          note="Akumulasi peserta pada wilayah intervensi simulasi."
          icon={Users}
        />
        <StatCard
          title="Peserta Lulus"
          value={`${avgCompletion}%`}
          note="Rata-rata kelulusan batch pelatihan."
          icon={CheckCircle2}
          tone="navy"
        />
        <StatCard
          title="Terserap Kerja"
          value={`${avgAbsorption}%`}
          note="Simulasi serapan kerja setelah intervensi."
          icon={BriefcaseBusiness}
          tone="amber"
        />
        <StatCard
          title="Mitra Industri"
          value={String(partners)}
          note="Mitra lokal yang terhubung ke program."
          icon={Handshake}
          tone="green"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <SectionCard
          title="Tren Dampak Intervensi"
          description="Line chart sebelum dan sesudah intervensi secara bertahap."
        >
          <ImpactLineChart data={impactTrend} />
        </SectionCard>
        <SectionCard title="Insight Dampak">
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#EAF4FF] p-4 text-[#0B4EA2]">
              <p className="font-semibold">Risiko turun setelah pelatihan terarah.</p>
              <p className="mt-2 text-sm leading-7">
                Setelah intervensi pelatihan digital dan kemitraan industri,
                wilayah simulasi menunjukkan penurunan skor risiko dari kategori
                tinggi menjadi sedang.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFD43B]/14 p-4 text-[#7A5600]">
              <p className="font-semibold">Serapan kerja perlu dipantau 3 bulan.</p>
              <p className="mt-2 text-sm leading-7">
                Dampak awal paling terlihat pada kelulusan peserta. Serapan kerja
                butuh pemantauan lanjutan bersama mitra industri lokal.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard
        title="Evaluasi Per Wilayah"
        description="Perbandingan perubahan skor risiko dan indeks mismatch."
      >
        <div className="table-scroll">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="py-3 pr-4">Wilayah</th>
                <th className="py-3 pr-4">Peserta</th>
                <th className="py-3 pr-4">Lulus</th>
                <th className="py-3 pr-4">Terserap</th>
                <th className="py-3 pr-4">Risiko</th>
                <th className="py-3 pr-4">Mismatch</th>
              </tr>
            </thead>
            <tbody>
              {monitoringRecords.map((item) => (
                <tr key={item.region} className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-semibold text-[#061A33]">{item.region}</td>
                  <td className="py-4 pr-4">{item.participants}</td>
                  <td className="py-4 pr-4">{item.completionRate}%</td>
                  <td className="py-4 pr-4">{item.jobAbsorption}%</td>
                  <td className="py-4 pr-4">{item.beforeRisk} ke {item.afterRisk}</td>
                  <td className="py-4 pr-4">
                    {item.beforeMismatch.toFixed(2)} ke {item.afterMismatch.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
