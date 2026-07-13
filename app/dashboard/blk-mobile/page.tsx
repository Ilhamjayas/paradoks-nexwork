import { BusFront, MapPinned, Route, Users } from "lucide-react";
import { SectionCard, StatCard, StatusBadge } from "@/src/components/dashboard/ui";
import { blkMobileUnits } from "@/src/data/blkMobile";

export default function BlkMobilePage() {
  const totalCapacity = blkMobileUnits.reduce((sum, item) => sum + item.capacity, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Armada BLK Mobile"
          value={String(blkMobileUnits.length)}
          note="Unit pelatihan keliling dalam simulasi jadwal."
          icon={BusFront}
          tone="navy"
        />
        <StatCard
          title="Kapasitas Peserta"
          value={String(totalCapacity)}
          note="Total kapasitas batch pelatihan berjalan."
          icon={Users}
        />
        <StatCard
          title="Wilayah Tujuan"
          value="4"
          note="Daerah prioritas yang sedang dijadwalkan."
          icon={MapPinned}
          tone="amber"
        />
        <StatCard
          title="Rute Simulasi"
          value="4"
          note="Koridor perjalanan untuk intervensi lapangan."
          icon={Route}
          tone="green"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {blkMobileUnits.map((unit) => (
          <article key={unit.id} className="nexwork-lift rounded-2xl bg-white p-5 shadow-lg shadow-[#061A33]/7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD43B] text-[#061A33]">
                  <BusFront size={24} />
                </span>
                <div>
                  <p className="font-semibold text-[#061A33]">{unit.id}</p>
                  <p className="text-sm text-slate-500">{unit.destination}</p>
                </div>
              </div>
              <StatusBadge value={unit.status} />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Pelatihan", unit.trainingType],
                ["Kapasitas", `${unit.capacity} peserta`],
                ["Jadwal", unit.schedule],
                ["Mitra Lokal", unit.partner],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-[#F8FAFC] p-4">
                  <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-[#061A33]">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-[#061A33] p-4 text-sm font-semibold text-white">
              Rute: {unit.route}
            </div>
          </article>
        ))}
      </div>

      <SectionCard
        title="Jadwal Kunjungan BLK Mobile"
        description="Urutan pengiriman armada berdasarkan wilayah prioritas."
      >
        <div className="table-scroll">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="py-3 pr-4">Unit</th>
                <th className="py-3 pr-4">Tujuan</th>
                <th className="py-3 pr-4">Pelatihan</th>
                <th className="py-3 pr-4">Jadwal</th>
                <th className="py-3 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {blkMobileUnits.map((unit) => (
                <tr key={unit.id} className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-mono text-xs text-slate-500">{unit.id}</td>
                  <td className="py-4 pr-4 font-semibold text-[#061A33]">{unit.destination}</td>
                  <td className="py-4 pr-4 text-slate-600">{unit.trainingType}</td>
                  <td className="py-4 pr-4">{unit.schedule}</td>
                  <td className="py-4 pr-4">
                    <StatusBadge value={unit.status} />
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
