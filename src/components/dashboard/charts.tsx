"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartProps = {
  data: Record<string, string | number>[];
};

export function TrendLineChart({ data }: ChartProps) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: -12, bottom: 0 }}>
          <CartesianGrid strokeDasharray="2 6" stroke="#D9E9FA" />
          <XAxis dataKey="year" stroke="#52667f" fontSize={12} />
          <YAxis stroke="#52667f" fontSize={12} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="tpt"
            name="TPT Vokasi"
            stroke="#FFD43B"
            strokeWidth={2.5}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="mismatch"
            name="Mismatch Index"
            stroke="#2A8CFF"
            strokeWidth={2.5}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function GraduatesDemandChart({ data }: ChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: -12, bottom: 0 }}>
          <CartesianGrid strokeDasharray="2 6" stroke="#D9E9FA" />
          <XAxis dataKey="sector" stroke="#52667f" fontSize={12} />
          <YAxis stroke="#52667f" fontSize={12} />
          <Tooltip />
          <Legend />
          <Bar dataKey="graduates" name="Lulusan Tersedia" fill="#2A8CFF" radius={[8, 8, 0, 0]} />
          <Bar dataKey="demand" name="Kebutuhan Industri" fill="#FFD43B" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ImpactLineChart({ data }: ChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: -12, bottom: 0 }}>
          <CartesianGrid strokeDasharray="2 6" stroke="#D9E9FA" />
          <XAxis dataKey="month" stroke="#52667f" fontSize={12} />
          <YAxis stroke="#52667f" fontSize={12} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="trained" name="Peserta Dilatih" stroke="#2A8CFF" strokeWidth={2.5} />
          <Line type="monotone" dataKey="absorbed" name="Terserap Kerja" stroke="#061A33" strokeWidth={2.5} />
          <Line type="monotone" dataKey="risk" name="Skor Risiko" stroke="#FFD43B" strokeWidth={2.5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
