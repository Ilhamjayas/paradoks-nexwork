import { Clock, GraduationCap, Target, Users } from "lucide-react";
import { SectionCard, StatCard, StatusBadge } from "@/src/components/dashboard/ui";
import { trainingRecommendations } from "@/src/data/training";
import { TrainingCatalog } from "@/src/components/dashboard/training-catalog";

export default function TrainingRecommendationPage() {
  return <TrainingCatalog />;
  /* Legacy recommendation table retained temporarily.
  const active = trainingRecommendations.filter((item) => item.status !== "Selesai");
  const participants = trainingRecommendations.reduce(
    (sum, item) => sum + item.estimatedParticipants,
    0,
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Program Aktif"
          value={String(active.length)}
          note="Rekomendasi yang berjalan atau siap dijadwalkan."
          icon={Target}
        />
        <StatCard
          title="Estimasi Peserta"
          value={String(participants)}
          note="Total target peserta pada daftar rekomendasi."
          icon={Users}
          tone="navy"
        />
        <StatCard
          title="Mode BLK Mobile"
          value="4"
          note="Program yang cocok dikirim melalui armada keliling."
          icon={GraduationCap}
          tone="amber"
        />
        <StatCard
          title="Rata-rata Durasi"
          value="15 hari"
          note="Durasi pendek agar intervensi cepat menjangkau wilayah."
          icon={Clock}
          tone="green"
        />
      </div>

      <SectionCard
        title="Tabel Rekomendasi Pelatihan"
        description="Program disusun berdasarkan risiko wilayah, sektor dominan, dan kapasitas pelatihan."
      >
        <div className="table-scroll">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="py-3 pr-4">ID</th>
                <th className="py-3 pr-4">Wilayah</th>
                <th className="py-3 pr-4">Pelatihan</th>
                <th className="py-3 pr-4">Prioritas</th>
                <th className="py-3 pr-4">Peserta</th>
                <th className="py-3 pr-4">Durasi</th>
                <th className="py-3 pr-4">Mode</th>
                <th className="py-3 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {trainingRecommendations.map((item) => (
                <tr key={item.id} className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-mono text-xs text-slate-500">{item.id}</td>
                  <td className="py-4 pr-4 font-semibold text-[#061A33]">{item.region}</td>
                  <td className="py-4 pr-4 text-slate-700">{item.training}</td>
                  <td className="py-4 pr-4">
                    <StatusBadge value={item.priority} />
                  </td>
                  <td className="py-4 pr-4">{item.estimatedParticipants}</td>
                  <td className="py-4 pr-4">{item.duration}</td>
                  <td className="py-4 pr-4">{item.mode}</td>
                  <td className="py-4 pr-4">
                    <StatusBadge value={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <div className="grid gap-4 lg:grid-cols-3">
        {trainingRecommendations.slice(0, 3).map((item) => (
          <article key={item.id} className="nexwork-lift rounded-2xl bg-white p-5 shadow-lg shadow-[#061A33]/7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-500">{item.region}</p>
                <h3 className="mt-2 font-semibold text-[#061A33]">{item.training}</h3>
              </div>
              <StatusBadge value={item.priority} />
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Target {item.estimatedParticipants} peserta selama {item.duration}
              melalui {item.mode}. Status saat ini: {item.status.toLowerCase()}.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
  */
}
