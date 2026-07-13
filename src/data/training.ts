export type TrainingRecommendation = {
  id: string;
  region: string;
  training: string;
  priority: "Rendah" | "Sedang" | "Tinggi" | "Kritis";
  estimatedParticipants: number;
  duration: string;
  mode: "BLK Mobile" | "Kelas Mitra" | "Online";
  status: "Direncanakan" | "Berjalan" | "Selesai";
};

export const trainingRecommendations: TrainingRecommendation[] = [
  {
    id: "TRN-001",
    region: "Kabupaten Garut",
    training: "Digital Marketing Dasar",
    priority: "Tinggi",
    estimatedParticipants: 40,
    duration: "14 hari",
    mode: "BLK Mobile",
    status: "Berjalan",
  },
  {
    id: "TRN-002",
    region: "Kota Cilegon",
    training: "Quality Control Industri",
    priority: "Kritis",
    estimatedParticipants: 36,
    duration: "21 hari",
    mode: "BLK Mobile",
    status: "Direncanakan",
  },
  {
    id: "TRN-003",
    region: "Kabupaten Sidoarjo",
    training: "Welding Dasar",
    priority: "Tinggi",
    estimatedParticipants: 32,
    duration: "18 hari",
    mode: "Kelas Mitra",
    status: "Berjalan",
  },
  {
    id: "TRN-004",
    region: "Kabupaten Lombok Timur",
    training: "Barista dan Food Service",
    priority: "Sedang",
    estimatedParticipants: 30,
    duration: "10 hari",
    mode: "BLK Mobile",
    status: "Direncanakan",
  },
  {
    id: "TRN-005",
    region: "Kabupaten Gowa",
    training: "Basic Web Development",
    priority: "Sedang",
    estimatedParticipants: 28,
    duration: "16 hari",
    mode: "Online",
    status: "Selesai",
  },
  {
    id: "TRN-006",
    region: "Kabupaten Brebes",
    training: "Administrasi Perkantoran Digital",
    priority: "Tinggi",
    estimatedParticipants: 44,
    duration: "12 hari",
    mode: "BLK Mobile",
    status: "Direncanakan",
  },
];
