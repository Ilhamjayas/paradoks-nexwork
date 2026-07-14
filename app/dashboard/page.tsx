import { BarChart3, BusFront, MapPinned, Target } from "lucide-react";
import { TrendLineChart } from "@/src/components/dashboard/charts";
import { RiskMapGrid, SectionCard, StatCard, StatusBadge } from "@/src/components/dashboard/ui";
import { regions, riskTrend } from "@/src/data/regions";
import { DashboardOverviewV2 } from "@/src/components/dashboard/overview-v2";
import { DashboardOverviewV3 } from "@/src/components/dashboard/overview-v3";

export default function DashboardOverviewPage() {
  return <DashboardOverviewV3 />;
  /* Legacy overview kept below while the new personal dashboard is validated.
  const topRegions = [...regions].sort((a, b) => b.riskScore - a.riskScore).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Skill Mismatch Index Nasional"
          value="0.63"
          note="Simulasi rata-rata nasional untuk lulusan vokasi."
          icon={BarChart3}
          tone="green"
        />
        <StatCard
          title="Wilayah Prioritas Tinggi"
          value="12"
          note="Daerah dengan skor risiko tinggi dan sangat tinggi."
          icon={MapPinned}
          tone="red"
        />
        <StatCard
          title="Rekomendasi Pelatihan Aktif"
          value="28"
          note="Program yang disarankan berdasarkan kebutuhan lokal."
          icon={Target}
          tone="amber"
        />
        <StatCard
          title="BLK Mobile Terjadwal"
          value="7"
          note="Armada pelatihan keliling dalam jadwal simulasi."
          icon={BusFront}
          tone="navy"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <SectionCard
          title="Tren TPT Lulusan Vokasi"
          description="Simulasi tren TPT dan indeks mismatch nasional."
        >
          <TrendLineChart data={riskTrend} />
        </SectionCard>
        <SectionCard
          title="Mini Map Wilayah Prioritas"
          description="Representasi grid wilayah untuk MVP sebelum GeoJSON."
        >
          <RiskMapGrid />
        </SectionCard>
      </div>

      <SectionCard
        title="Wilayah dengan Skor Risiko Tertinggi"
        description="Tabel ringkas daerah prioritas untuk intervensi BLK Mobile."
      >
        <div className="table-scroll">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-3 pr-4 font-semibold">Wilayah</th>
                <th className="py-3 pr-4 font-semibold">Provinsi</th>
                <th className="py-3 pr-4 font-semibold">Skor Risiko</th>
                <th className="py-3 pr-4 font-semibold">Kategori</th>
                <th className="py-3 pr-4 font-semibold">Rekomendasi</th>
              </tr>
            </thead>
            <tbody>
              {topRegions.map((region) => (
                <tr key={region.id} className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-semibold text-[#061A33]">
                    {region.region}
                  </td>
                  <td className="py-4 pr-4 text-slate-600">{region.province}</td>
                  <td className="py-4 pr-4 font-semibold">{region.riskScore}</td>
                  <td className="py-4 pr-4">
                    <StatusBadge value={region.riskCategory} />
                  </td>
                  <td className="py-4 pr-4 text-slate-600">
                    {region.recommendation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
  */
}
