import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  CheckCircle2,
  CircleDot,
  Database,
  FileSearch,
  LineChart,
  MapPinned,
  Menu,
  Radar,
  Route,
  ShieldAlert,
  Sparkles,
  Target,
} from "lucide-react";

const workflow = [
  "Data ketenagakerjaan terintegrasi",
  "Risiko wilayah dihitung",
  "Peta prioritas terbentuk",
  "Pelatihan direkomendasikan",
  "BLK Mobile dikirim",
  "Dampak dievaluasi",
];

const problemCards = [
  {
    title: "Data tersebar",
    text: "Informasi pendidikan, pengangguran, dan sektor ekonomi belum selalu terbaca sebagai keputusan yang cepat.",
    icon: Database,
  },
  {
    title: "Mismatch berbeda tiap wilayah",
    text: "Kebutuhan Cilegon tidak sama dengan Garut, Gowa, atau Lombok Timur. Intervensinya perlu spesifik.",
    icon: Radar,
  },
  {
    title: "Pelatihan belum selalu tepat sasaran",
    text: "Program pelatihan perlu dikaitkan dengan risiko lokal, peluang industri, dan kesiapan peserta.",
    icon: Target,
  },
];

const dashboardPanels = [
  ["Skill Mismatch Index", "0.63", "Simulasi nasional"],
  ["Wilayah prioritas", "12", "Risiko tinggi"],
  ["Rekomendasi aktif", "28", "Program pelatihan"],
  ["BLK terjadwal", "7", "Armada mobile"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#102033]">
      <header className="sticky top-0 z-40 border-b border-[#0B4EA2]/10 bg-[#F8FAFC]/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#061A33] text-[#FFD43B] shadow-lg shadow-[#061A33]/15">
              <Sparkles size={20} />
            </span>
            <span>
              <span className="block text-base font-semibold text-[#061A33]">
                NexWork 2045
              </span>
              <span className="block text-xs font-semibold uppercase text-[#0B4EA2]">
                Workforce Intelligence
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#31445f] md:flex">
            <a className="transition hover:text-[#0B4EA2]" href="#masalah">
              Masalah
            </a>
            <a className="transition hover:text-[#0B4EA2]" href="#solusi">
              Solusi
            </a>
            <a className="transition hover:text-[#0B4EA2]" href="#blk-mobile">
              BLK Mobile
            </a>
            <a className="transition hover:text-[#0B4EA2]" href="#dashboard-preview">
              Dashboard
            </a>
            <a className="transition hover:text-[#0B4EA2]" href="#demo">
              Demo
            </a>
          </div>
          <Link
            href="/login"
            className="hidden rounded-xl bg-[#061A33] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#061A33]/16 transition hover:bg-[#0B4EA2] md:inline-flex"
          >
            Masuk Demo
          </Link>
          <Link
            href="/login"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#061A33] shadow-sm shadow-[#061A33]/10 md:hidden"
            aria-label="Buka demo"
          >
            <Menu size={20} />
          </Link>
        </nav>
      </header>

      <section
        id="beranda"
        className="relative overflow-hidden bg-[#061A33] text-white"
      >
        <div className="absolute inset-0 nexwork-grid opacity-40" />
        <div className="absolute right-[-120px] top-[-160px] h-96 w-96 rounded-full bg-[#2A8CFF]/18 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-160px] h-[28rem] w-[28rem] rounded-full bg-[#FFD43B]/8 blur-3xl" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 nexwork-dot-map opacity-30 lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-xs font-semibold text-[#FFD43B] shadow-sm shadow-black/10">
              <ShieldAlert size={15} />
              Coming Soon - Demo Prototype Available
            </span>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Memetakan{" "}
              <span className="text-[#FFD43B]">Risiko Kerja</span>, Mengirim
              Pelatihan yang{" "}
              <span className="text-[#FFD43B]">Tepat Sasaran.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D8E8FF] sm:text-lg">
              NexWork 2045 membaca skill mismatch di tiap wilayah, menentukan
              prioritas intervensi, lalu menghubungkannya dengan aksi lapangan
              melalui BLK Mobile.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFD43B] px-5 py-3 text-sm font-semibold text-[#061A33] shadow-xl shadow-[#FFD43B]/18 transition hover:bg-[#FFE481]"
              >
                Coba Dashboard Demo <ArrowRight size={18} />
              </Link>
              <a
                href="#solusi"
                className="inline-flex items-center justify-center rounded-xl bg-white/9 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-black/10 backdrop-blur transition hover:bg-white/14"
              >
                Lihat Cara Kerjanya
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["38", "indikator wilayah"],
                ["6", "lapisan analisis"],
                ["2045", "arah bonus demografi"],
              ].map(([value, label]) => (
                <div key={label} className="nexwork-accent-line pl-4">
                  <p className="text-2xl font-semibold text-[#FFD43B]">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#BFD8FA]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-12 h-24 w-24 rounded-full bg-[#2A8CFF]/12 blur-2xl" />
            <div className="absolute right-10 top-0 h-3 w-3 rounded-full bg-[#FFD43B] shadow-lg shadow-[#FFD43B]/40" />
            <div className="nexwork-glass rounded-[1.35rem] p-3">
              <div className="nexwork-panel rounded-2xl p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[#8FC6FF]">
                      Command Center Simulasi
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      NexWork Regional Priority Map
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#FFD43B]/12 px-3 py-1 text-xs font-semibold text-[#FFD43B]">
                    Demo Mode
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {dashboardPanels.map(([label, value, note]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white/[0.065] p-4 shadow-sm shadow-black/10"
                    >
                      <p className="text-xs text-[#BFD8FA]">{label}</p>
                      <p className="mt-2 text-2xl font-semibold text-[#FFD43B]">
                        {value}
                      </p>
                      <p className="mt-1 text-[11px] text-[#8CBDF1]">{note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-2xl bg-[#102F57] p-4 shadow-lg shadow-black/10">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-semibold">Peta risiko wilayah</p>
                      <MapPinned className="text-[#FFD43B]" size={18} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["Jabar", "Banten", "Jateng", "Jatim", "NTB", "Sulsel"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className={`rounded-full px-3 py-2 text-center text-xs font-semibold ${
                              index < 2
                                ? "bg-[#FFD43B]/16 text-[#FFE481]"
                                : index < 4
                                  ? "bg-[#2A8CFF]/14 text-[#CFE8FF]"
                                  : "bg-emerald-300/10 text-emerald-100"
                            }`}
                          >
                            {item}
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.065] p-4 shadow-lg shadow-black/10">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-semibold">Grafik tren TPT vokasi</p>
                      <LineChart className="text-[#FFD43B]" size={18} />
                    </div>
                    <div className="flex h-28 items-end gap-2">
                      {[46, 58, 50, 64, 56, 72, 61].map((height, index) => (
                        <div
                          key={`trend-${index}-${height}`}
                          className="flex flex-1 flex-col items-center gap-2"
                        >
                          <div
                            className={`w-full rounded-t-lg ${
                              index === 5 ? "bg-[#FFD43B]" : "bg-[#2A8CFF]"
                            }`}
                            style={{ height }}
                          />
                          <span className="h-1 w-1 rounded-full bg-[#75B9FF]" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl bg-white/[0.055] p-3">
                      <p className="text-xs text-[#FFE481]">
                        Prioritas: Garut - Cilegon - Brebes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-[#061A33]/65 p-4 shadow-lg shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#FFD43B]">
                      BLK Mobile 01
                    </p>
                    <p className="mt-1 text-xs text-[#D8E8FF]">
                      Bandung -&gt; Garut -&gt; Tasikmalaya
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-[#061A33]">
                    Pelatihan berjalan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="masalah" className="bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#0B4EA2]">
              Masalah yang Dibaca
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#061A33] sm:text-4xl">
              Bonus demografi tidak cukup hanya dibaca dari angka.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Tantangannya bukan sekadar jumlah pengangguran. Yang perlu
              dipetakan adalah jarak antara lulusan, kebutuhan industri, dan
              akses pelatihan yang berbeda di setiap wilayah.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="nexwork-card nexwork-lift rounded-2xl p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#0B4EA2]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 font-semibold text-[#061A33]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solusi" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#0B4EA2]">
                Dari Data ke Aksi Lapangan
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#061A33] sm:text-4xl">
                NexWork tidak berhenti di dashboard. Sistem ini membantu
                menentukan aksi.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-600">
              Alur kerja disusun agar keputusan pelatihan bisa bergerak dari
              pembacaan risiko menuju pengiriman BLK Mobile.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {workflow.map((step, index) => (
              <article
                key={step}
                className="relative rounded-2xl bg-[#F8FAFC] p-5 shadow-sm shadow-[#061A33]/6"
              >
                {index < workflow.length - 1 ? (
                  <span className="absolute left-[calc(100%-8px)] top-9 hidden h-px w-6 bg-[#FFD43B]/75 lg:block" />
                ) : null}
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061A33] text-lg font-semibold text-[#FFD43B]">
                  {index + 1}
                </span>
                <p className="mt-5 text-sm font-semibold leading-6 text-[#061A33]">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard-preview" className="bg-[#EAF4FF]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#0B4EA2]">
              Dashboard Preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#061A33] sm:text-4xl">
              Command center untuk membaca prioritas intervensi.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Simulasi dashboard berbasis data dummy untuk menunjukkan cara
              NexWork bekerja dari peta risiko hingga jadwal BLK Mobile.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-white p-4 shadow-2xl shadow-[#061A33]/10">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl bg-[#061A33] p-5 text-white shadow-xl shadow-[#061A33]/18">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#75B9FF]">
                      Peta Risiko Wilayah
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      Prioritas Intervensi Nasional
                    </h3>
                  </div>
                  <CircleDot className="text-[#FFD43B]" size={24} />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    ["Garut", "82", "Tinggi"],
                    ["Cilegon", "88", "Sangat tinggi"],
                    ["Brebes", "79", "Tinggi"],
                    ["Lombok Timur", "66", "Sedang"],
                    ["Gowa", "61", "Sedang"],
                    ["Bantul", "47", "Rendah"],
                  ].map(([region, score, risk], index) => (
                    <div
                      key={region}
                      className={`rounded-2xl p-4 ${
                        index < 2
                          ? "bg-[#FFD43B]/12"
                          : "bg-white/[0.06]"
                      }`}
                    >
                      <p className="text-xs text-[#BFD8FA]">{region}</p>
                      <p className="mt-2 text-3xl font-semibold text-[#FFD43B]">
                        {score}
                      </p>
                      <p className="mt-1 text-xs text-[#D8E8FF]">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-[#F8FAFC] p-5 shadow-sm shadow-[#061A33]/6">
                  <p className="text-sm font-semibold text-[#061A33]">
                    Rekomendasi pelatihan
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Quality Control Industri",
                      "Digital Marketing Dasar",
                      "Administrasi Digital",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl bg-white p-3"
                      >
                        <span className="text-sm font-semibold text-[#061A33]">
                          {item}
                        </span>
                        <span className="rounded-full bg-[#FFD43B]/18 px-3 py-1 text-xs font-semibold text-[#7A5600]">
                          P{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm shadow-[#061A33]/6">
                  <p className="text-sm font-semibold text-[#061A33]">
                    BLK Mobile schedule
                  </p>
                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#061A33] p-4 text-white">
                    <BusFront className="text-[#FFD43B]" size={24} />
                    <div>
                      <p className="font-semibold">BLK Mobile 01</p>
                      <p className="text-xs text-[#BFD8FA]">
                        Garut - 12 Agustus 2026 - 40 peserta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blk-mobile" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#0B4EA2]">
                BLK Mobile
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#061A33] sm:text-4xl">
                BLK Mobile sebagai jembatan dari analisis menuju aksi nyata.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Wilayah prioritas tidak hanya masuk daftar. NexWork membantu
                menghubungkan rekomendasi pelatihan dengan jadwal, kapasitas,
                mitra lokal, dan evaluasi dampak.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Pelatihan keliling",
                  "Sertifikasi kompetensi",
                  "Kolaborasi industri",
                  "Monitoring dampak",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-semibold text-[#061A33] shadow-sm shadow-[#061A33]/6"
                  >
                    <CheckCircle2 className="text-[#F6B800]" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#061A33] p-5 text-white shadow-2xl shadow-[#061A33]/18">
              <div className="rounded-2xl bg-[#102F57] p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD43B] text-[#061A33] shadow-lg shadow-[#FFD43B]/12">
                      <BusFront size={34} />
                    </div>
                    <div>
                      <p className="text-sm text-[#BFD8FA]">Fleet active</p>
                      <h3 className="text-2xl font-semibold">BLK Mobile 01</h3>
                    </div>
                  </div>
                  <span className="w-fit rounded-full bg-emerald-300/16 px-4 py-2 text-sm font-semibold text-emerald-100">
                    Pelatihan Berjalan
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Tujuan", "Kabupaten Garut"],
                    ["Pelatihan", "Digital Marketing"],
                    ["Kapasitas", "40 peserta"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white/[0.065] p-4"
                    >
                      <p className="text-xs font-semibold uppercase text-[#75B9FF]">
                        {label}
                      </p>
                      <p className="mt-2 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#061A33]/55 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <Route className="text-[#FFD43B]" size={22} />
                    <p className="text-sm font-semibold">
                      Wilayah prioritas -&gt; Jadwal pelatihan -&gt; Pelaksanaan -&gt;
                      Evaluasi dampak
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-[#061A33] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold text-[#FFD43B]">
              Platform Sedang Dikembangkan
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Demo sudah bisa dicoba untuk melihat simulasi keputusan berbasis
              data.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#D8E8FF]">
              Masuk ke akun demo untuk melihat peta risiko wilayah, rekomendasi
              pelatihan, rencana pengiriman BLK Mobile, dan monitoring dampak.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-[#102033] shadow-2xl shadow-black/18">
            <div className="flex items-center gap-3">
              <FileSearch className="text-[#0B4EA2]" size={24} />
              <p className="font-semibold text-[#061A33]">Demo prototype ready</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Gunakan akun demo untuk mengeksplorasi alur kerja NexWork 2045.
            </p>
            <Link
              href="/login"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFD43B] px-5 py-3 text-sm font-semibold text-[#061A33] transition hover:bg-[#FFE481]"
            >
              Masuk ke Dashboard Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#0B4EA2]/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-[#061A33]">NexWork 2045</p>
            <p className="mt-1">Workforce intelligence for targeted training intervention.</p>
          </div>
          <p>Prototype / Coming Soon - kontak@nexwork.id</p>
        </div>
      </footer>
    </main>
  );
}
