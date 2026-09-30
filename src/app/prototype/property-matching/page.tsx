"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

export default function PropertyMatching() {
  const matches = [
    { cad: "P101", rev: "R101", score: 96, factors: "Location, Area, Survey No.", status: "good" },
    { cad: "P102", rev: "R102", score: 91, factors: "Location, Area, Shape", status: "good" },
    { cad: "P103", rev: "R103", score: 88, factors: "Location, Address", status: "good" },
    { cad: "P104", rev: "R104", score: 85, factors: "Location, Area", status: "warning" },
    { cad: "P105", rev: "—", score: 60, factors: "Location — No Revenue Record", status: "bad" },
  ];

  return (
    <div className="max-w-5xl mx-auto flex flex-col h-full">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Property Matching</h1>
          <p className="text-slate-500 max-w-2xl">BhoomiSetu identifies records that most likely represent the same real-world parcel using spatial and attribute matching.</p>
        </div>
        <Link 
          href="/prototype/conflict-detection"
          className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
        >
          Analyse Conflicts <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8 flex-1">
        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-5 py-4">Cadastral ID</th>
                <th className="px-5 py-4">Revenue ID</th>
                <th className="px-5 py-4">Match Score</th>
                <th className="px-5 py-4">Key Matching Factors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {matches.map((m, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-medium text-slate-900">{m.cad}</td>
                  <td className="px-5 py-4 font-medium text-slate-600">{m.rev}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {m.status === "good" && <CheckCircle2 className="text-success" size={16} />}
                      {m.status === "warning" && <AlertCircle className="text-warning" size={16} />}
                      {m.status === "bad" && <XCircle className="text-danger" size={16} />}
                      <span className={`font-bold ${
                        m.status === "good" ? "text-success" : 
                        m.status === "warning" ? "text-warning" : "text-danger"
                      }`}>
                        {m.score}%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-500 text-xs">{m.factors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* GIS Style Map Area */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4 px-2">
            <h3 className="font-bold text-slate-800">Spatial Match Overview</h3>
            <div className="flex gap-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-success/20 border border-success"></span> Matched</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-warning/20 border border-warning"></span> Low Match</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-danger/20 border border-danger"></span> No Match</span>
            </div>
          </div>
          
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg relative overflow-hidden flex items-center justify-center min-h-[350px]">
            {/* SVG Map of Parcels */}
            <svg viewBox="0 0 400 300" className="w-full h-full p-4 drop-shadow-sm">
              {/* P101: Clean Match (Green) */}
              <g className="group cursor-pointer">
                <polygon points="50,50 150,40 160,120 40,130" className="fill-success/20 stroke-success stroke-2 transition-all group-hover:fill-success/40" />
                <text x="100" y="90" textAnchor="middle" className="text-xs font-bold fill-success" dominantBaseline="middle">P101</text>
              </g>

              {/* P102: Good Match (Green) */}
              <g className="group cursor-pointer">
                <polygon points="150,40 250,30 270,110 160,120" className="fill-success/20 stroke-success stroke-2 transition-all group-hover:fill-success/40" />
                <text x="210" y="80" textAnchor="middle" className="text-xs font-bold fill-success" dominantBaseline="middle">P102</text>
              </g>

              {/* P103: Good Match (Green) */}
              <g className="group cursor-pointer">
                <polygon points="40,130 160,120 180,210 30,220" className="fill-success/20 stroke-success stroke-2 transition-all group-hover:fill-success/40" />
                <text x="105" y="175" textAnchor="middle" className="text-xs font-bold fill-success" dominantBaseline="middle">P103</text>
              </g>

              {/* P104: Low Match (Yellow) */}
              <g className="group cursor-pointer">
                <polygon points="160,120 270,110 290,200 180,210" className="fill-warning/20 stroke-warning stroke-2 transition-all group-hover:fill-warning/40" />
                <text x="225" y="165" textAnchor="middle" className="text-xs font-bold fill-warning-700" dominantBaseline="middle">P104</text>
              </g>

              {/* P105: No Match (Red) */}
              <g className="group cursor-pointer">
                <polygon points="270,110 350,100 370,190 290,200" className="fill-danger/20 stroke-danger stroke-2 transition-all group-hover:fill-danger/40" />
                <text x="320" y="150" textAnchor="middle" className="text-xs font-bold fill-danger" dominantBaseline="middle">P105</text>
              </g>

              {/* Contextual grey parcels */}
              <polygon points="50,50 10,40 0,110 40,130" className="fill-slate-200 stroke-slate-300 stroke-1" />
              <polygon points="250,30 360,20 350,100 270,110" className="fill-slate-200 stroke-slate-300 stroke-1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
