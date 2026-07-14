"use client";

import { useEffect, useMemo, useState } from "react";
import { blkMapMarkers, getProvinceInsight, type ProvinceRisk } from "@/src/data/nationalMap";

type Coordinates = number[][][][] | number[][][];
type GeoFeature = { properties: { name: string }; geometry: { type: "Polygon" | "MultiPolygon"; coordinates: Coordinates } };
type GeoJson = { features: GeoFeature[] };

const WIDTH = 1000;
const HEIGHT = 390;
const bounds = { minLon: 94.5, maxLon: 141.5, minLat: -11.5, maxLat: 6.5 };

function project([lon, lat]: number[]) {
  return [((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * WIDTH, ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * HEIGHT];
}

function ringPath(ring: number[][]) {
  if (!ring.length) return "";
  return ring.map((point, index) => { const [x, y] = project(point); return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ") + " Z";
}

function geometryPath(feature: GeoFeature) {
  const polygons = feature.geometry.type === "MultiPolygon" ? feature.geometry.coordinates as number[][][][] : [feature.geometry.coordinates as number[][][]];
  return polygons.flatMap((polygon) => polygon.map(ringPath)).join(" ");
}

const riskFill: Record<ProvinceRisk, string> = { "Rendah": "#70C9F2", "Sedang": "#F8D35B", "Tinggi": "#F2A53A", "Sangat Tinggi": "#DF625A" };

export function IndonesiaMap({ selectedProvince, onProvinceChange, compact = false, riskFilter = "Semua risiko" }: { selectedProvince?: string; onProvinceChange?: (name: string) => void; compact?: boolean; riskFilter?: string }) {
  const [geo, setGeo] = useState<GeoJson | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  useEffect(() => { fetch("/indonesia-provinces.geojson").then((response) => response.json()).then(setGeo).catch(() => setGeo(null)); }, []);
  const paths = useMemo(() => geo?.features.map(feature => ({ name: feature.properties.name, path: geometryPath(feature), insight: getProvinceInsight(feature.properties.name) })) ?? [], [geo]);
  return <div className={`relative overflow-hidden rounded-2xl bg-[#071E39] ${compact ? "h-[290px]" : "min-h-[390px]"}`}>
    <div className="absolute inset-0 nexwork-dot-map opacity-35" />
    {!geo ? <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[#9FC5EC]">Menyiapkan peta Indonesia...</div> : <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="relative z-10 h-full w-full" role="img" aria-label="Peta provinsi Indonesia berbasis data GeoJSON resmi">
      <g>
        {paths.map(item => {
          const dimmed = riskFilter !== "Semua risiko" && item.insight.risk !== riskFilter;
          const active = selectedProvince === item.name;
          return <path key={item.name} d={item.path} fill={riskFill[item.insight.risk]} fillOpacity={dimmed ? 0.13 : active ? 1 : 0.82} stroke={active ? "#FFFFFF" : "#0B3766"} strokeWidth={active ? 2.4 : 0.75} className="cursor-pointer transition-[fill-opacity] duration-150 hover:fill-opacity-100" onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)} onClick={() => onProvinceChange?.(item.name)}><title>{item.name} · Risiko {item.insight.risk} · Skor {item.insight.score}</title></path>;
        })}
      </g>
      {blkMapMarkers.map(marker => { const [x,y] = project([marker.lon, marker.lat]); return <g key={marker.name} transform={`translate(${x} ${y})`} className="pointer-events-none"><circle r="8" fill="#FFD23F" fillOpacity=".2" /><circle r="3.5" fill="#FFD23F" stroke="#FFFFFF" strokeWidth="1.4"><title>{marker.name}</title></circle></g>; })}
    </svg>}
    {hovered && !compact ? <div className="pointer-events-none absolute bottom-4 left-4 z-20 rounded-xl bg-white/95 px-3 py-2 shadow-xl"><p className="text-[10px] font-bold text-[#0B4EA2]">{hovered}</p><p className="mt-0.5 text-[9px] text-[#52667F]">Risiko {getProvinceInsight(hovered).risk} · Klik untuk detail</p></div> : null}
    <div className="pointer-events-none absolute bottom-3 right-3 z-20 rounded-lg bg-[#061A33]/80 px-2.5 py-1.5 text-[8px] font-semibold text-[#A8C9EA] backdrop-blur">Sumber geometri: Geoportal Kementerian Pertanian / BIG</div>
  </div>;
}
