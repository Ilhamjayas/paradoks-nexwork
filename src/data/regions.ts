export type RiskCategory = "Rendah" | "Sedang" | "Tinggi" | "Sangat Tinggi";

export type Region = {
  id: number;
  province: string;
  region: string;
  riskScore: number;
  riskCategory: RiskCategory;
  mismatchIndex: number;
  vocationalUnemployment: number;
  dominantSector: string;
  recommendation: string;
};

export const regions: Region[] = [
  {
    id: 1,
    province: "Jawa Barat",
    region: "Kabupaten Garut",
    riskScore: 82,
    riskCategory: "Tinggi",
    mismatchIndex: 0.71,
    vocationalUnemployment: 9.42,
    dominantSector: "Industri Kreatif dan Perdagangan",
    recommendation: "Digital Marketing, Desain Konten, dan Administrasi Digital",
  },
  {
    id: 2,
    province: "Banten",
    region: "Kota Cilegon",
    riskScore: 88,
    riskCategory: "Sangat Tinggi",
    mismatchIndex: 0.76,
    vocationalUnemployment: 10.31,
    dominantSector: "Manufaktur dan Logistik",
    recommendation: "Quality Control, Operator Mesin, dan Basic Automation",
  },
  {
    id: 3,
    province: "Jawa Tengah",
    region: "Kabupaten Brebes",
    riskScore: 79,
    riskCategory: "Tinggi",
    mismatchIndex: 0.68,
    vocationalUnemployment: 8.87,
    dominantSector: "Agroindustri dan Perdagangan",
    recommendation: "Pengolahan Data Dasar dan Administrasi Perkantoran Digital",
  },
  {
    id: 4,
    province: "Nusa Tenggara Barat",
    region: "Kabupaten Lombok Timur",
    riskScore: 66,
    riskCategory: "Sedang",
    mismatchIndex: 0.58,
    vocationalUnemployment: 7.14,
    dominantSector: "Pariwisata dan Food Service",
    recommendation: "Barista, Food Service, dan Digital Hospitality",
  },
  {
    id: 5,
    province: "Sulawesi Selatan",
    region: "Kabupaten Gowa",
    riskScore: 61,
    riskCategory: "Sedang",
    mismatchIndex: 0.54,
    vocationalUnemployment: 6.83,
    dominantSector: "Perdagangan dan Jasa Digital",
    recommendation: "Desain Grafis, Konten Digital, dan Basic Web Development",
  },
  {
    id: 6,
    province: "Jawa Timur",
    region: "Kabupaten Sidoarjo",
    riskScore: 73,
    riskCategory: "Tinggi",
    mismatchIndex: 0.65,
    vocationalUnemployment: 8.21,
    dominantSector: "Manufaktur Ringan",
    recommendation: "Welding Dasar, Quality Control Industri, dan K3 Dasar",
  },
  {
    id: 7,
    province: "DI Yogyakarta",
    region: "Kabupaten Bantul",
    riskScore: 47,
    riskCategory: "Rendah",
    mismatchIndex: 0.42,
    vocationalUnemployment: 4.95,
    dominantSector: "Ekonomi Kreatif dan UMKM",
    recommendation: "Branding Produk, Marketplace, dan Konten Digital",
  },
];

export const riskTrend = [
  { year: "2021", tpt: 8.4, mismatch: 0.69 },
  { year: "2022", tpt: 8.1, mismatch: 0.67 },
  { year: "2023", tpt: 7.8, mismatch: 0.66 },
  { year: "2024", tpt: 7.5, mismatch: 0.64 },
  { year: "2025", tpt: 7.2, mismatch: 0.63 },
  { year: "2026", tpt: 6.9, mismatch: 0.61 },
];

export const mismatchComparison = [
  { sector: "Manufaktur", graduates: 42, demand: 68 },
  { sector: "Digital", graduates: 35, demand: 61 },
  { sector: "Hospitality", graduates: 48, demand: 52 },
  { sector: "Logistik", graduates: 30, demand: 47 },
  { sector: "Agroindustri", graduates: 45, demand: 39 },
];
