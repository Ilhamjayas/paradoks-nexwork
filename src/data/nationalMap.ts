export const nationalRegions = [
  { id: "sumatra", name: "Sumatra", province: "Sumatera Utara", risk: "Sedang", score: 61, mismatch: 0.52, tpt: 6.8, training: "Administrasi Digital", mobile: "Tersedia", x: 8, y: 35, w: 23, r: -15 },
  { id: "java", name: "Jawa", province: "Jawa Timur", risk: "Tinggi", score: 78, mismatch: 0.68, tpt: 8.9, training: "Data Analysis & QC", mobile: "Aktif", x: 28, y: 67, w: 31, r: 2 },
  { id: "kalimantan", name: "Kalimantan", province: "Kalimantan Timur", risk: "Rendah", score: 48, mismatch: 0.41, tpt: 5.2, training: "Logistik Digital", mobile: "Terjadwal", x: 42, y: 27, w: 21, r: 5 },
  { id: "sulawesi", name: "Sulawesi", province: "Sulawesi Selatan", risk: "Tinggi", score: 73, mismatch: 0.61, tpt: 7.4, training: "Web & Konten Digital", mobile: "Aktif", x: 64, y: 42, w: 14, r: -28 },
  { id: "bali-nt", name: "Bali & Nusa Tenggara", province: "Nusa Tenggara Barat", risk: "Sedang", score: 65, mismatch: 0.57, tpt: 6.9, training: "Hospitality Digital", mobile: "Dalam perjalanan", x: 56, y: 73, w: 25, r: 3 },
  { id: "maluku", name: "Maluku", province: "Maluku", risk: "Rendah", score: 44, mismatch: 0.39, tpt: 5.1, training: "Kewirausahaan", mobile: "Terjadwal", x: 78, y: 49, w: 9, r: -12 },
  { id: "papua", name: "Papua", province: "Papua", risk: "Sangat Tinggi", score: 86, mismatch: 0.74, tpt: 9.8, training: "Teknisi Jaringan", mobile: "Prioritas", x: 87, y: 43, w: 12, r: 8 },
];

export const mapStats = { provinces: 38, priorityAreas: 12, mobileUnits: 7, activeTrainings: 28 };

export type ProvinceRisk = "Rendah" | "Sedang" | "Tinggi" | "Sangat Tinggi";

export type ProvinceInsight = {
  risk: ProvinceRisk;
  score: number;
  mismatch: number;
  tpt: number;
  training: string;
  sector: string;
  mobile: string;
  action: string;
};

const highRisk = new Set(["Banten", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Sulawesi Selatan", "Nusa Tenggara Barat"]);
const veryHighRisk = new Set(["Papua", "Papua Pegunungan", "Papua Tengah"]);
const lowRisk = new Set(["DI Yogyakarta", "Bali", "Kepulauan Riau", "Kalimantan Timur"]);

export function getProvinceInsight(name: string): ProvinceInsight {
  const risk: ProvinceRisk = veryHighRisk.has(name) ? "Sangat Tinggi" : highRisk.has(name) ? "Tinggi" : lowRisk.has(name) ? "Rendah" : "Sedang";
  const base = risk === "Sangat Tinggi" ? 86 : risk === "Tinggi" ? 76 : risk === "Sedang" ? 62 : 46;
  const modifier = name.length % 6;
  const digital = ["Jawa Timur", "Jawa Barat", "DKI Jakarta", "Banten", "DI Yogyakarta"].includes(name);
  const industry = ["Banten", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Timur"].includes(name);
  return {
    risk,
    score: Math.min(94, base + modifier),
    mismatch: Number(((base + modifier) / 112).toFixed(2)),
    tpt: Number(((base + modifier) / 9.2).toFixed(1)),
    training: digital ? "Data Entry, Digital Marketing, Administrasi Digital" : industry ? "Quality Control, K3, Operator Produksi" : "Administrasi Digital, Kewirausahaan, Pemasaran Lokal",
    sector: digital ? "Teknologi, perdagangan, dan jasa digital" : industry ? "Manufaktur, logistik, dan industri pengolahan" : "Jasa lokal, agroindustri, dan UMKM",
    mobile: risk === "Sangat Tinggi" ? "Prioritas penjadwalan" : risk === "Tinggi" ? "Dijadwalkan" : risk === "Sedang" ? "Tersedia" : "Terpantau",
    action: risk === "Sangat Tinggi" ? "Perluas akses pelatihan dasar dan kirim unit BLK Mobile ke kabupaten dengan jangkauan terendah." : risk === "Tinggi" ? "Perkuat pelatihan digital dan koneksi industri lokal melalui kelas singkat berbasis kebutuhan." : "Jaga kesinambungan pelatihan dan arahkan peserta ke sektor yang sedang tumbuh.",
  };
}

export const blkMapMarkers = [
  { name: "BLK Mobile Aceh", lon: 95.32, lat: 5.55 },
  { name: "BLK Mobile Bandung", lon: 107.62, lat: -6.91 },
  { name: "BLK Mobile Surabaya", lon: 112.75, lat: -7.25 },
  { name: "BLK Mobile Lombok", lon: 116.12, lat: -8.58 },
  { name: "BLK Mobile Makassar", lon: 119.43, lat: -5.14 },
  { name: "BLK Mobile Ambon", lon: 128.18, lat: -3.7 },
  { name: "BLK Mobile Jayapura", lon: 140.71, lat: -2.53 },
];
