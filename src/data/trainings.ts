export type Training = {
  id: number;
  name: string;
  category: string;
  level: "Dasar" | "Menengah" | "Lanjutan";
  duration: string;
  mode: "Online" | "BLK Mobile" | "Hybrid";
  skills: string[];
  status: "Tersedia" | "Segera Dibuka" | "Sedang Berjalan";
  seats: number;
};

export const trainings: Training[] = [
  { id: 1, name: "Microsoft Excel untuk Dunia Kerja", category: "Bisnis & Administrasi", level: "Dasar", duration: "12 jam", mode: "Online", skills: ["Formula", "Pivot Table", "Reporting"], status: "Tersedia", seats: 28 },
  { id: 2, name: "Dasar Data Analysis", category: "Data & Teknologi", level: "Dasar", duration: "3 minggu", mode: "Hybrid", skills: ["Data Cleaning", "Visualisasi", "Insight"], status: "Tersedia", seats: 16 },
  { id: 3, name: "Digital Marketing untuk UMKM", category: "Bisnis & Administrasi", level: "Dasar", duration: "10 hari", mode: "BLK Mobile", skills: ["Konten", "Iklan", "Analytics"], status: "Sedang Berjalan", seats: 0 },
  { id: 4, name: "Desain CV dan Portofolio Digital", category: "Komunikasi & Karir", level: "Dasar", duration: "6 jam", mode: "Online", skills: ["CV", "Personal Branding", "Portofolio"], status: "Tersedia", seats: 42 },
  { id: 5, name: "Public Speaking untuk Interview", category: "Komunikasi & Karir", level: "Menengah", duration: "2 hari", mode: "Hybrid", skills: ["Interview", "Storytelling", "Confidence"], status: "Segera Dibuka", seats: 24 },
  { id: 6, name: "Web Development Dasar", category: "Data & Teknologi", level: "Dasar", duration: "4 minggu", mode: "Online", skills: ["HTML", "CSS", "JavaScript"], status: "Tersedia", seats: 19 },
  { id: 7, name: "Administrasi Perkantoran Digital", category: "Bisnis & Administrasi", level: "Menengah", duration: "14 hari", mode: "BLK Mobile", skills: ["Dokumen", "Spreadsheet", "Arsip Digital"], status: "Segera Dibuka", seats: 35 },
  { id: 8, name: "Operator Produksi dan Quality Control", category: "Industri", level: "Dasar", duration: "21 hari", mode: "BLK Mobile", skills: ["QC", "K3", "Produksi"], status: "Tersedia", seats: 30 },
  { id: 9, name: "Teknisi Jaringan Dasar", category: "Data & Teknologi", level: "Dasar", duration: "18 hari", mode: "Hybrid", skills: ["Jaringan", "Troubleshooting", "Perangkat"], status: "Segera Dibuka", seats: 20 },
  { id: 10, name: "Content Creator untuk Karir Digital", category: "Komunikasi & Karir", level: "Menengah", duration: "2 minggu", mode: "Online", skills: ["Video", "Copywriting", "Strategi Konten"], status: "Tersedia", seats: 31 },
];

export const trainingCategories = ["Semua pelatihan", "Data & Teknologi", "Bisnis & Administrasi", "Industri", "Komunikasi & Karir", "BLK Mobile"];
