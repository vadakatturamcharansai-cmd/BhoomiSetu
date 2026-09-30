"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DataUnderstanding() {
  const stats = [
    { value: "5", label: "Parcels Detected", sub: "Cadastral" },
    { value: "5", label: "Records Detected", sub: "Revenue / Municipal" },
    { value: "12", label: "Fields Mapped", sub: "" },
    { value: "0", label: "Critical Errors", sub: "" },
  ];

  const cadastralFields = [
    { orig: "plot_no", mapped: "parcel_id" },
    { orig: "area", mapped: "area_m2" },
    { orig: "geometry", mapped: "geometry" },
    { orig: "owner_nm", mapped: "owner_name" },
    { orig: "type", mapped: "land_use" },
  ];

  const revenueFields = [
    { orig: "survey_no", mapped: "parcel_id" },
    { orig: "area_sqmt", mapped: "area_m2" },
    { orig: "geometry", mapped: "geometry" },
    { orig: "owner_name", mapped: "owner_name" },
    { orig: "ward", mapped: "ward" },
    { orig: "address", mapped: "address" },
  ];

  return (
    <div className="max-w-5xl mx-auto flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Data Understanding</h1>
        <p className="text-slate-500">BhoomiSetu has processed your files and mapped the fields.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <span className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</span>
            <span className="text-sm font-semibold text-slate-700">{stat.label}</span>
            {stat.sub && <span className="text-xs text-slate-400 mt-1">{stat.sub}</span>}
          </div>
        ))}
      </div>

      {/* Tables */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 flex-1">
        {/* Left Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h3 className="font-bold text-slate-800">Detected Fields — Cadastral</h3>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Original Field</th>
                <th className="px-6 py-3">Mapped To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cadastralFields.map((f, i) => (
                <tr key={i}>
                  <td className="px-6 py-3 font-mono text-slate-600">{f.orig}</td>
                  <td className="px-6 py-3">
                    <span className="bg-success-bg text-green-800 px-2 py-1 rounded-md font-mono text-xs border border-green-200">
                      {f.mapped}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h3 className="font-bold text-slate-800">Detected Fields — Revenue / Municipal</h3>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Original Field</th>
                <th className="px-6 py-3">Mapped To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {revenueFields.map((f, i) => (
                <tr key={i}>
                  <td className="px-6 py-3 font-mono text-slate-600">{f.orig}</td>
                  <td className="px-6 py-3">
                    <span className="bg-success-bg text-green-800 px-2 py-1 rounded-md font-mono text-xs border border-green-200">
                      {f.mapped}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Success Banner & Action */}
      <div className="bg-success-bg border border-green-200 rounded-xl p-6 flex items-center justify-between mt-auto">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="text-success mt-0.5" size={24} />
          <div>
            <h4 className="text-green-900 font-bold text-lg mb-1">Data looks good!</h4>
            <p className="text-green-800 text-sm">All required fields are mapped. Coordinate system: EPSG:4326.</p>
          </div>
        </div>
        <Link 
          href="/prototype/property-matching"
          className="bg-success hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
        >
          Continue to Property Matching <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
