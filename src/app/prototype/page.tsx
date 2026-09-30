"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud, FileJson, FileSpreadsheet, Loader2 } from "lucide-react";

export default function DataInput() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const handleDemoClick = () => {
    setIsProcessing(true);
    
    // Simulate loading sequence
    const steps = [
      "Reading datasets...",
      "Mapping schema...",
      "Matching parcels...",
      "Checking conflicts..."
    ];
    
    let stepIndex = 0;
    setLoadingText(steps[0]);
    
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setLoadingText(steps[stepIndex]);
      } else {
        clearInterval(interval);
        router.push("/prototype/data-understanding");
      }
    }, 400); // Fast 400ms per step, total < 2 seconds
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload Land Data</h1>
        <p className="text-slate-500">Upload cadastral maps and revenue/municipal records, or use our demo dataset.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Left Card: Cadastral */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <FileJson size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">Cadastral Map</h3>
          <p className="text-sm text-slate-500 mb-6 font-medium">GeoJSON</p>
          
          <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg border border-slate-300 border-dashed transition-colors flex items-center justify-center gap-2 mb-4">
            <UploadCloud size={18} />
            Choose File
          </button>
          
          <p className="text-xs text-slate-400">Supports: .geojson</p>
        </div>

        {/* Right Card: Revenue */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <FileSpreadsheet size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">Revenue / Municipal Records</h3>
          <p className="text-sm text-slate-500 mb-6 font-medium">CSV</p>
          
          <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg border border-slate-300 border-dashed transition-colors flex items-center justify-center gap-2 mb-4">
            <UploadCloud size={18} />
            Choose File
          </button>
          
          <p className="text-xs text-slate-400">Supports: .csv</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 w-full max-w-sm mb-8">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-slate-400 font-semibold text-sm">OR</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <button 
          onClick={handleDemoClick}
          disabled={isProcessing}
          className="bg-success hover:bg-green-700 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-md transition-colors disabled:opacity-80 flex flex-col items-center min-w-[300px]"
        >
          {isProcessing ? (
            <div className="flex items-center gap-3">
              <Loader2 className="animate-spin" size={24} />
              <span>{loadingText}</span>
            </div>
          ) : (
            <>
              <span>Use Demo Dataset</span>
              <span className="text-xs font-normal text-green-100 mt-1">5 synthetic parcel cases are included.</span>
            </>
          )}
        </button>

        <div className="mt-8 bg-blue-50 text-blue-700 p-4 rounded-lg text-sm flex gap-6 border border-blue-100">
          <div><strong className="font-semibold">Supported CRS:</strong> EPSG:4326</div>
          <div><strong className="font-semibold">Maximum file size:</strong> 2 MB each</div>
          <div><strong className="font-semibold">Demo prototype supports:</strong> GeoJSON + CSV</div>
        </div>
      </div>
    </div>
  );
}
