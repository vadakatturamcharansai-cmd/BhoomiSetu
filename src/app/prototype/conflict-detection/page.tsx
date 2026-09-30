"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info, AlertTriangle, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConflictDetection() {
  const router = useRouter();
  
  const issues = [
    { id: "P101", issue: "No major issue", desc: "All records consistent", action: "HARMONIZED", color: "success" },
    { id: "P102", issue: "Small overlap", desc: "Approx. 2 m² overlap with neighbour", action: "AUTO-FIX", color: "info" },
    { id: "P103", issue: "Boundary mismatch", desc: "Boundary differs by approx. 1.4 m from older cadastral map", action: "RECOMMEND", color: "warning" },
    { id: "P104", issue: "Ownership conflict", desc: "Different owner information across sources", action: "ESCALATE", color: "danger" },
    { id: "P105", issue: "Missing record", desc: "No linked revenue / municipal record", action: "RECOMMEND", color: "warning" },
  ];

  const getBadgeColor = (action: string) => {
    switch (action) {
      case "HARMONIZED": return "bg-success-bg text-green-800 border-green-200";
      case "AUTO-FIX": return "bg-info-bg text-blue-800 border-blue-200";
      case "RECOMMEND": return "bg-warning-bg text-amber-800 border-amber-200";
      case "ESCALATE": return "bg-danger-bg text-red-800 border-red-200";
      default: return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  const getIcon = (action: string) => {
    switch (action) {
      case "HARMONIZED": return <CheckCircle2 size={16} className="text-success" />;
      case "AUTO-FIX": return <Info size={16} className="text-info" />;
      case "RECOMMEND": return <AlertTriangle size={16} className="text-warning" />;
      case "ESCALATE": return <ShieldAlert size={16} className="text-danger" />;
      default: return null;
    }
  };

  const handleParcelClick = (id: string) => {
    // Basic navigation simulation depending on the parcel type clicked
    if (id === "P104") {
      router.push("/prototype/evidence"); // Escalate goes to evidence / verification
    } else {
      router.push("/prototype/harmonized-view"); // Others go to harmonized view
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col h-full pb-8">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Conflict Detection</h1>
          <p className="text-slate-500">Every detected issue is classified into an action based on evidence confidence.</p>
        </div>
        <Link 
          href="/prototype/harmonized-view"
          className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
        >
          View Harmonized Record <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">
          <table className="w-full text-sm text-left flex-1">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-5 py-3">Parcel</th>
                <th className="px-5 py-3">Issue Type</th>
                <th className="px-5 py-3">Description</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {issues.map((item, i) => (
                <tr 
                  key={i} 
                  className="hover:bg-slate-50 cursor-pointer transition-colors"
                  onClick={() => handleParcelClick(item.id)}
                >
                  <td className="px-5 py-4 font-bold text-slate-900">{item.id}</td>
                  <td className="px-5 py-4 font-medium text-slate-700">{item.issue}</td>
                  <td className="px-5 py-4 text-slate-500 text-xs">{item.desc}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold text-[10px] border tracking-wide uppercase ${getBadgeColor(item.action)}`}>
                      {getIcon(item.action)} {item.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-3 bg-slate-50 text-xs text-slate-400 text-center border-t border-slate-200">
            Click any row to view detailed evidence.
          </div>
        </div>

        {/* Map with Highlights */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col">
          <div className="flex flex-wrap gap-3 mb-4 px-2 text-xs font-semibold">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-success/20 border border-success"></span> Harmonized</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-info/20 border border-info"></span> Auto-Fix</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-warning/20 border border-warning"></span> Recommend</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-danger/20 border border-danger"></span> Escalate</span>
          </div>
          
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg relative overflow-hidden flex items-center justify-center min-h-[300px]">
            <svg viewBox="0 0 400 300" className="w-full h-full p-4 drop-shadow-sm">
              {/* P101: Harmonized */}
              <polygon 
                points="50,50 150,40 160,120 40,130" 
                className="fill-success/20 stroke-success stroke-2 cursor-pointer hover:fill-success/40 transition-colors" 
                onClick={() => handleParcelClick("P101")}
              />
              <text x="100" y="90" textAnchor="middle" className="text-xs font-bold fill-success pointer-events-none">P101</text>

              {/* P102: Auto-Fix */}
              <polygon 
                points="150,40 250,30 270,110 160,120" 
                className="fill-info/20 stroke-info stroke-2 cursor-pointer hover:fill-info/40 transition-colors" 
                onClick={() => handleParcelClick("P102")}
              />
              <text x="210" y="80" textAnchor="middle" className="text-xs font-bold fill-info-700 pointer-events-none">P102</text>

              {/* P103: Recommend */}
              <polygon 
                points="40,130 160,120 180,210 30,220" 
                className="fill-warning/20 stroke-warning stroke-2 cursor-pointer hover:fill-warning/40 transition-colors" 
                onClick={() => handleParcelClick("P103")}
              />
              <text x="105" y="175" textAnchor="middle" className="text-xs font-bold fill-warning-700 pointer-events-none">P103</text>

              {/* P104: Escalate */}
              <polygon 
                points="160,120 270,110 290,200 180,210" 
                className="fill-danger/20 stroke-danger stroke-2 cursor-pointer hover:fill-danger/40 transition-colors" 
                onClick={() => handleParcelClick("P104")}
              />
              <text x="225" y="165" textAnchor="middle" className="text-xs font-bold fill-danger pointer-events-none">P104</text>

              {/* P105: Recommend (Missing Record) */}
              <polygon 
                points="270,110 350,100 370,190 290,200" 
                className="fill-warning/20 stroke-warning stroke-2 cursor-pointer hover:fill-warning/40 transition-colors" 
                onClick={() => handleParcelClick("P105")}
              />
              <text x="320" y="150" textAnchor="middle" className="text-xs font-bold fill-warning-700 pointer-events-none">P105</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Before / After Harmonization View */}
      <div className="bg-slate-900 rounded-2xl p-8 shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-8 text-center text-slate-100">Before vs After Harmonization</h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-6">
          {/* BEFORE MAP */}
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col">
            <h3 className="font-semibold text-slate-300 text-center mb-4">Before Harmonization</h3>
            <div className="flex-1 bg-slate-950 rounded-lg relative overflow-hidden flex items-center justify-center p-2 min-h-[250px]">
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Fragmented/Misaligned Lines */}
                <polygon points="20,20 80,15 85,60 15,65" className="fill-none stroke-red-500 stroke-[1.5] stroke-dasharray-4" />
                <polygon points="18,18 78,17 83,58 13,63" className="fill-none stroke-blue-400 stroke-[1]" />
                
                <polygon points="80,15 140,10 145,55 85,60" className="fill-none stroke-red-500 stroke-[1.5]" />
                <polygon points="75,20 135,15 148,50 80,62" className="fill-none stroke-orange-400 stroke-[1.5]" />
                
                {/* Overlap marker */}
                <circle cx="82" cy="58" r="5" className="fill-red-500/50 animate-pulse" />
                <text x="92" y="60" className="text-[6px] fill-red-400">Overlap</text>
              </svg>
            </div>
          </div>

          {/* AFTER MAP */}
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col">
            <h3 className="font-semibold text-success text-center mb-4">After Harmonization</h3>
            <div className="flex-1 bg-slate-950 rounded-lg relative overflow-hidden flex items-center justify-center p-2 min-h-[250px]">
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Clean Harmonized Polygons */}
                <polygon points="20,20 80,15 85,60 15,65" className="fill-success/20 stroke-success stroke-[1]" />
                <polygon points="80,15 140,10 145,55 85,60" className="fill-success/20 stroke-success stroke-[1]" />
                <polygon points="15,65 85,60 90,105 10,110" className="fill-success/20 stroke-success stroke-[1]" />
                <polygon points="85,60 145,55 150,100 90,105" className="fill-success/20 stroke-success stroke-[1]" />
              </svg>
            </div>
          </div>
        </div>
        
        <p className="text-center text-slate-400 text-sm font-medium">
          Fragmented source boundaries &rarr; Evidence-backed harmonized parcel view
        </p>
      </div>
    </div>
  );
}
