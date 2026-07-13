export type BlkStatus =
  | "Siap Berangkat"
  | "Dalam Perjalanan"
  | "Pelatihan Berjalan"
  | "Selesai"
  | "Evaluasi Dampak";

export type BlkMobileUnit = {
  id: string;
  destination: string;
  trainingType: string;
  capacity: number;
  schedule: string;
  status: BlkStatus;
  partner: string;
  route: string;
};

export const blkMobileUnits: BlkMobileUnit[] = [
  {
    id: "BLK-001",
    destination: "Kabupaten Garut",
    trainingType: "Digital Marketing dan Desain Konten",
    capacity: 40,
    schedule: "12 Agustus 2026",
    status: "Pelatihan Berjalan",
    partner: "SMK Mitra dan UMKM Lokal",
    route: "Bandung - Garut - Tasikmalaya",
  },
  {
    id: "BLK-002",
    destination: "Kota Cilegon",
    trainingType: "Quality Control dan Basic Automation",
    capacity: 36,
    schedule: "18 Agustus 2026",
    status: "Siap Berangkat",
    partner: "Kawasan Industri Cilegon",
    route: "Serang - Cilegon - Anyer",
  },
  {
    id: "BLK-003",
    destination: "Kabupaten Lombok Timur",
    trainingType: "Barista dan Food Service",
    capacity: 30,
    schedule: "24 Agustus 2026",
    status: "Dalam Perjalanan",
    partner: "SMK Pariwisata dan Hotel Lokal",
    route: "Mataram - Praya - Selong",
  },
  {
    id: "BLK-004",
    destination: "Kabupaten Brebes",
    trainingType: "Administrasi Digital",
    capacity: 44,
    schedule: "3 September 2026",
    status: "Evaluasi Dampak",
    partner: "Disnaker dan BUMDes",
    route: "Tegal - Brebes - Slawi",
  },
];
