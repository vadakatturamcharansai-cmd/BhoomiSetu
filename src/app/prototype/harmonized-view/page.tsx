"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, User, FileText, Info } from "lucide-react";

export default function HarmonizedView() {
  const [selectedParcel, setSelectedParcel] = useState("P102");

  const parcels = ["P101", "P102", "P103", "P104", "P105"];

  const parcelData: Record<string, any> = {
    "P101": { status: "HARMONIZED", area: "120.0", orig: "120.0", owner: "Amit Kumar", use: "Residential", issue: "None", action: "None", bg: "bg-success", text: "text-success", badge: "bg-success-bg text-green-800" },
    "P102": { status: "AUTO-FIXED", area: "249.6", orig: "250.0", owner: "Rahul Sharma", use: "Residential", issue: "Small boundary overlap (2 m²)", action: "Auto-corrected", bg: "bg-info", text: "text-info", badge: "bg-info-bg text-blue-800" },
    "P103": { status: "RECOMMENDATION PENDING", area: "310.5", orig: "312.0", owner: "Sunita Devi", use: "Commercial", issue: "Boundary mismatch (1.4 m)", action: "Recommend survey update", bg: "bg-warning", text: "text-warning", badge: "bg-warning-bg text-amber-800" },
    "P104": { status: "ESCALATED", area: "400.0", orig: "400.0", owner: "Conflict Detected", use: "Agricultural", issue: "Ownership conflict", action: "Field Verification Required", bg: "bg-danger", text: "text-danger", badge: "bg-danger-bg text-red-800" },
    "P105": { status: "RECOMMENDATION PENDING", area: "150.0", orig: "150.0", owner: "Unknown (No Revenue Record)", use: "Unknown", issue: "Missing revenue record", action: "Recommend creation", bg: "bg-warning", text: "text-warning", badge: "bg-warning-bg text-amber-800" },
  };

  const data = parcelData[selectedParcel];

  return (
    <div className="max-w-6xl mx-auto flex flex-col h-full">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Harmonized Parcel Record</h1>
          <p className="text-slate-500">The final evidence-backed view after standardizing and resolving conflicts.</p>
        </div>
        <Link 
          href="/prototype/evidence"
          className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
        >
          View Evidence & API <ArrowRight size={18} />
        </Link>
      </div>

      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {parcels.map(p => (
          <button
            key={p}
            onClick={() => setSelectedParcel(p)}
            className={`px-6 py-2 rounded-full font-bold transition-all border ${
              selectedParcel === p 
                ? "bg-slate-800 text-white border-slate-800 shadow-md" 
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 flex-1">
        {/* Map View */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Spatial Context</h3>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Info size={14} /> Harmonized Geometry</span>
          </div>
          <div className="flex-1 bg-slate-100 relative min-h-[400px]">
            {/* SVG Interactive Map */}
            <svg viewBox="0 0 400 300" className="w-full h-full p-4">
              {/* Other parcels */}
              <polygon points="50,50 150,40 160,120 40,130" className={`transition-all cursor-pointer ${selectedParcel === 'P101' ? 'fill-success/40 stroke-success stroke-2' : 'fill-slate-300/50 stroke-slate-400 stroke-1'}`} onClick={() => setSelectedParcel("P101")} />
              <polygon points="150,40 250,30 270,110 160,120" className={`transition-all cursor-pointer ${selectedParcel === 'P102' ? 'fill-info/40 stroke-info stroke-2' : 'fill-slate-300/50 stroke-slate-400 stroke-1'}`} onClick={() => setSelectedParcel("P102")} />
              <polygon points="40,130 160,120 180,210 30,220" className={`transition-all cursor-pointer ${selectedParcel === 'P103' ? 'fill-warning/40 stroke-warning stroke-2' : 'fill-slate-300/50 stroke-slate-400 stroke-1'}`} onClick={() => setSelectedParcel("P103")} />
              <polygon points="160,120 270,110 290,200 180,210" className={`transition-all cursor-pointer ${selectedParcel === 'P104' ? 'fill-danger/40 stroke-danger stroke-2' : 'fill-slate-300/50 stroke-slate-400 stroke-1'}`} onClick={() => setSelectedParcel("P104")} />
              <polygon points="270,110 350,100 370,190 290,200" className={`transition-all cursor-pointer ${selectedParcel === 'P105' ? 'fill-warning/40 stroke-warning stroke-2' : 'fill-slate-300/50 stroke-slate-400 stroke-1'}`} onClick={() => setSelectedParcel("P105")} />
            </svg>
          </div>
        </div>

        {/* Parcel Details */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none rounded-bl-full ${data.bg}`}></div>
          
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Parcel Details — {selectedParcel}</h2>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold flex items-center gap-1">
                <MapPin size={12} /> ULPIN: DEMO-ULPIN-{selectedParcel}-001
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${data.badge}`}>
              {data.status}
            </span>
          </div>

          <div className="px-8 py-6 flex-1 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">Recorded Area</p>
                <p className="text-lg font-bold text-slate-900">{data.orig} m²</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-1">Harmonized Area <CheckCircle2 size={14} className="text-success" /></p>
                <p className={`text-lg font-bold ${data.text}`}>{data.area} m²</p>
              </div>
            </div>
            
            <div className="h-px bg-slate-100 w-full"></div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-1"><User size={14} /> Owner Name</p>
                <p className="font-bold text-slate-900">{data.owner}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-1"><FileText size={14} /> Land Use</p>
                <p className="font-bold text-slate-900">{data.use}</p>
              </div>
            </div>

            <div className="h-px bg-slate-100 w-full"></div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Harmonization Log</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Issue Detected</span>
                  <span className="text-sm font-medium text-slate-900">{data.issue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Action Taken</span>
                  <span className={`text-sm font-medium ${data.text}`}>{data.action}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Neighbour Validation</span>
                  <span className="text-sm font-bold text-success flex items-center gap-1">Passed <CheckCircle2 size={14} /></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-3 text-center border-t border-amber-100">
            <p className="text-xs text-amber-700 font-medium">Synthetic Demo Data • Not for official use</p>
          </div>
        </div>
      </div>
    </div>
  );
}
