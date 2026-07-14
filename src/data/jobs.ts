export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  field: string;
  type: string;
  level: string;
  match: number;
  salary: string;
  reason: string;
  skills: string[];
};

export const jobs: Job[] = [
  { id: 1, title: "Junior Data Analyst", company: "Nusa Retail Group", location: "Surabaya", field: "Data & Teknologi", type: "Penuh waktu", level: "Pemula", match: 92, salary: "Rp5–7 juta", reason: "Excel, data cleaning, dan visualisasi datamu sesuai dengan kebutuhan peran ini.", skills: ["Excel", "SQL Dasar", "Dashboard"] },
  { id: 2, title: "Business Intelligence Intern", company: "LogistikKita", location: "Sidoarjo", field: "Data & Teknologi", type: "Magang", level: "Pemula", match: 87, salary: "Rp3–4 juta", reason: "Pelatihan data analysis dan domisilimu relevan dengan tim operasional Jawa Timur.", skills: ["Data Cleaning", "Excel", "Presentasi"] },
  { id: 3, title: "Digital Marketing Assistant", company: "Ruang UMKM", location: "Surabaya", field: "Pemasaran", type: "Penuh waktu", level: "Pemula", match: 84, salary: "Rp4,5–6 juta", reason: "Minat digital marketing dan kemampuan membaca data kampanye menjadi nilai tambah.", skills: ["Content", "Analytics", "Copywriting"] },
  { id: 4, title: "Admin Data Entry", company: "Prima Manufaktur", location: "Gresik", field: "Administrasi", type: "Kontrak", level: "Pemula", match: 82, salary: "Rp4–5 juta", reason: "Ketelitian dan kemampuan Excel-mu cocok untuk pengelolaan data produksi.", skills: ["Excel", "Administrasi", "Data Entry"] },
  { id: 5, title: "Social Media Analyst", company: "Lokal Kreatif Studio", location: "Hybrid", field: "Pemasaran", type: "Kontrak", level: "Pemula", match: 78, salary: "Rp4–6 juta", reason: "Kombinasi minat konten dan analisis data mendukung pemantauan performa kanal.", skills: ["Analytics", "Social Media", "Reporting"] },
  { id: 6, title: "Web Content Assistant", company: "EduTumbuh", location: "Remote", field: "Kreatif", type: "Penuh waktu", level: "Pemula", match: 76, salary: "Rp4–5,5 juta", reason: "Dasar HTML, penulisan, dan minat web development-mu relevan untuk tim konten.", skills: ["HTML", "CMS", "SEO Dasar"] },
];

export const jobFilters = {
  fields: ["Semua bidang", "Data & Teknologi", "Pemasaran", "Administrasi", "Kreatif"],
  locations: ["Semua lokasi", "Surabaya", "Sidoarjo", "Gresik", "Remote", "Hybrid"],
  types: ["Semua tipe", "Penuh waktu", "Kontrak", "Magang"],
  levels: ["Semua level", "Pemula"],
};
