import { Database, LockKeyhole, Settings } from "lucide-react";
import { SectionCard, StatCard } from "@/src/components/dashboard/ui";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Mode Aplikasi"
          value="Demo"
          note="Autentikasi dan data masih berjalan di sisi browser."
          icon={Settings}
          tone="navy"
        />
        <StatCard
          title="Sumber Data"
          value="Dummy"
          note="Data lokal TypeScript untuk kebutuhan MVP."
          icon={Database}
        />
        <StatCard
          title="Akses"
          value="Lokal"
          note="Login demo tersimpan di localStorage browser."
          icon={LockKeyhole}
          tone="amber"
        />
      </div>
      <SectionCard title="Catatan Prototype">
        <p className="max-w-3xl text-sm leading-7 text-slate-600">
          Halaman ini menandai bahwa NexWork 2045 masih berada pada tahap
          prototype. Untuk implementasi berikutnya, autentikasi dapat diganti
          ke Supabase Auth atau NextAuth, data wilayah dapat memakai PostgreSQL,
          dan peta risiko dapat ditingkatkan menjadi GeoJSON Indonesia.
        </p>
      </SectionCard>
    </div>
  );
}
