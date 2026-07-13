"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  MapPinned,
  Radar,
  Sparkles,
} from "lucide-react";
import {
  AUTH_STORAGE_KEY,
  DEMO_EMAIL,
  DEMO_PASSWORD,
  isDemoCredential,
} from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isDemoCredential(email, password)) {
      setError("Email atau password demo belum sesuai.");
      return;
    }

    window.localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ email: DEMO_EMAIL, loginAt: new Date().toISOString() }),
    );
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#EAF4FF] px-4 py-10 text-[#102033]">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-[#061A33]/12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative overflow-hidden bg-[#061A33] p-8 text-white sm:p-10">
          <div className="absolute inset-0 nexwork-grid opacity-30" />
          <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#2A8CFF]/20 blur-3xl" />
          <div className="absolute bottom-8 right-8 h-44 w-44 nexwork-dot-map opacity-70" />

          <div className="relative">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#BFD8FA] transition hover:text-[#FFD43B]"
            >
              <ArrowLeft size={18} />
              Kembali ke beranda
            </Link>

            <div className="mt-16 max-w-xl">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#FFD43B] text-[#061A33]">
                <Sparkles size={24} />
              </span>
              <p className="mt-8 text-sm font-semibold text-[#FFD43B]">
                NexWork 2045 Demo Access
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Masuk ke command center skill mismatch wilayah.
              </h1>
              <p className="mt-5 leading-8 text-[#D8E8FF]">
                Jelajahi simulasi peta risiko, rekomendasi pelatihan, jadwal BLK
                Mobile, dan monitoring dampak intervensi.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                ["Risk Map", "Peta prioritas wilayah"],
                ["BLK Mobile", "Rute pelatihan keliling"],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/[0.07] p-4 shadow-sm shadow-black/10 backdrop-blur"
                >
                  {index === 0 ? (
                    <MapPinned className="text-[#FFD43B]" size={22} />
                  ) : (
                    <Radar className="text-[#FFD43B]" size={22} />
                  )}
                  <p className="mt-4 font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#BFD8FA]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#0B4EA2]">
              <LockKeyhole size={22} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase text-[#0B4EA2]">
                Demo Authentication
              </p>
              <h2 className="text-2xl font-semibold text-[#061A33]">
                Akses Prototype
              </h2>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-[#FFD43B]/12 p-5">
            <p className="text-sm font-semibold text-[#061A33]">
              Gunakan akun demo
            </p>
            <div className="mt-3 grid gap-2 text-sm">
              <code className="rounded-xl bg-white px-3 py-2 font-mono text-[#0B4EA2]">
                {DEMO_EMAIL}
              </code>
              <code className="rounded-xl bg-white px-3 py-2 font-mono text-[#0B4EA2]">
                {DEMO_PASSWORD}
              </code>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="mt-2 w-full rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm outline-none ring-1 ring-[#0B4EA2]/10 transition focus:ring-4 focus:ring-[#EAF4FF]"
                placeholder="demo@nexwork.id"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                Password
              </span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="mt-2 w-full rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm outline-none ring-1 ring-[#0B4EA2]/10 transition focus:ring-4 focus:ring-[#EAF4FF]"
                placeholder="nexwork2045"
              />
            </label>
            {error ? (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#061A33] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#061A33]/14 transition hover:bg-[#0B4EA2]"
            >
              Masuk Dashboard <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Login ini menyimpan status demo di browser lokal. Data yang tampil
            adalah simulasi untuk membaca alur kerja NexWork 2045.
          </p>
        </div>
      </section>
    </main>
  );
}
