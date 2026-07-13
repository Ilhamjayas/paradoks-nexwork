export type MonitoringRecord = {
  region: string;
  participants: number;
  completionRate: number;
  jobAbsorption: number;
  partners: number;
  beforeRisk: number;
  afterRisk: number;
  beforeMismatch: number;
  afterMismatch: number;
};

export const monitoringRecords: MonitoringRecord[] = [
  {
    region: "Kabupaten Garut",
    participants: 120,
    completionRate: 91,
    jobAbsorption: 47,
    partners: 8,
    beforeRisk: 82,
    afterRisk: 69,
    beforeMismatch: 0.71,
    afterMismatch: 0.59,
  },
  {
    region: "Kabupaten Brebes",
    participants: 96,
    completionRate: 88,
    jobAbsorption: 39,
    partners: 5,
    beforeRisk: 79,
    afterRisk: 70,
    beforeMismatch: 0.68,
    afterMismatch: 0.61,
  },
  {
    region: "Kabupaten Gowa",
    participants: 72,
    completionRate: 93,
    jobAbsorption: 52,
    partners: 7,
    beforeRisk: 61,
    afterRisk: 50,
    beforeMismatch: 0.54,
    afterMismatch: 0.45,
  },
];

export const impactTrend = [
  { month: "Mar", trained: 80, absorbed: 24, risk: 78 },
  { month: "Apr", trained: 132, absorbed: 41, risk: 74 },
  { month: "Mei", trained: 188, absorbed: 68, risk: 70 },
  { month: "Jun", trained: 241, absorbed: 96, risk: 66 },
  { month: "Jul", trained: 288, absorbed: 124, risk: 62 },
  { month: "Agu", trained: 342, absorbed: 158, risk: 58 },
];
