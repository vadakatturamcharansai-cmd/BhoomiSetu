"use client";

import { useState } from "react";
import { CheckCircle2, ShieldAlert, Code2, Check, Copy, AlertTriangle } from "lucide-react";

export default function EvidenceAndAPI() {
  const [taskCreated, setTaskCreated] = useState(false);
  const [copied, setCopied] = useState(false);

  const jsonOutput = {
    "parcel_id": "P104",
    "status": "escalate",
    "conflict_type": "ownership_conflict",
    "action": "field_verification",
    "confidence": 0.72,
    "requires_field_verification": true
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonOutput, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateTask = () => {
    setTaskCreated(true);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col space-y-12 pb-12">
      
      {/* Evidence & Explanation (Screen 7 equivalent) */}
      <section>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Evidence & Explanation</h1>
          <p className="text-slate-500">BhoomiSetu does not behave like a black-box AI. Every decision is explainable.</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Example: P103 — Why is this a Recommendation?</h3>
            <span className="bg-warning-bg text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Recommendation Pending
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 p-6 gap-8">
            {/* Map Evidence */}
            <div className="bg-slate-100 rounded-lg border border-slate-200 p-4 flex flex-col">
              <div className="flex-1 min-h-[250px] relative flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full p-2">
                  {/* Old Cadastral (Red dash) */}
                  <polygon points="50,50 150,45 155,145 45,150" className="fill-none stroke-danger stroke-2 stroke-dasharray-4" />
                  
                  {/* Municipal / New Survey (Blue / Harmonized proposed) */}
                  <polygon points="40,55 140,50 145,155 35,160" className="fill-info/10 stroke-info stroke-2" />
                  
                  <text x="95" y="105" textAnchor="middle" className="text-xs font-bold fill-info-700">P103</text>
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-slate-600 bg-white p-3 rounded border border-slate-200">
                <div className="flex items-center gap-2"><span className="w-4 h-0.5 bg-danger border-b-2 border-dashed border-danger"></span> Old Cadastral</div>
                <div className="flex items-center gap-2"><span className="w-4 h-0.5 bg-info"></span> New Survey / Municipal</div>
              </div>
            </div>

            {/* Key Evidence Text */}
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 mb-4">Key Evidence</h4>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0">1</div>
                  <p className="text-sm text-slate-700">Boundary differs by approximately <span className="font-semibold text-slate-900">1.4 m</span> from the older cadastral map.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0">2</div>
                  <p className="text-sm text-slate-700">New survey and municipal geometry <span className="text-success font-semibold">agree with each other</span>.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0">3</div>
                  <p className="text-sm text-slate-700">Neighbouring parcels remain valid (no new overlaps created).</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0">4</div>
                  <p className="text-sm text-slate-700">No ownership conflict detected.</p>
                </li>
              </ul>
              
              <div className="mt-6 bg-warning-bg border border-amber-200 rounded-lg p-4">
                <h5 className="font-bold text-amber-900 mb-1 text-sm uppercase tracking-wider">Recommendation</h5>
                <p className="text-amber-800 text-sm">Update boundary according to the newer survey evidence. Requires officer approval.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Verification (Screen 8 equivalent) */}
      <section>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-danger-bg p-8 border-r border-red-100 flex flex-col justify-center items-center text-center">
            <ShieldAlert size={48} className="text-danger mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">Field Verification Required</h3>
            <span className="bg-danger text-white px-4 py-1 rounded-full font-bold uppercase tracking-widest text-sm mb-4 shadow-sm shadow-danger/20">
              P104 - Escalate
            </span>
            <p className="text-red-800 text-sm font-medium">Conflicting ownership information found in source records. Automatic resolution unsafe.</p>
          </div>
          
          <div className="p-8 md:w-2/3 flex flex-col justify-center">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Create Field Verification Task</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs">1</span>
                Assign to field surveyor via mobile app
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs">2</span>
                Capture GNSS points & field remarks
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs">3</span>
                Sync verified evidence back to BhoomiSetu
              </div>
            </div>
            
            {taskCreated ? (
              <div className="bg-success-bg border border-green-200 text-green-800 p-4 rounded-lg flex items-center gap-3 font-semibold">
                <CheckCircle2 className="text-success" />
                <div>
                  <p>Verification task created</p>
                  <p className="text-xs font-normal">Demo Task ID: FV-P104-001</p>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleCreateTask}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md w-full sm:w-auto"
              >
                Create Verification Task
              </button>
            )}
          </div>
        </div>
      </section>

      {/* API / Output (Screen 9 equivalent) */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Code2 size={24} className="text-primary" /> Harmonization Output API
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* JSON Output */}
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="bg-slate-950 px-4 py-3 flex justify-between items-center border-b border-slate-800">
              <span className="text-slate-400 text-sm font-mono">P104_harmonization_result.json</span>
              <button 
                onClick={copyToClipboard}
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold bg-slate-800 px-2.5 py-1.5 rounded"
              >
                {copied ? <><Check size={14} className="text-success" /> Copied</> : <><Copy size={14} /> Copy JSON</>}
              </button>
            </div>
            <div className="p-6 overflow-x-auto text-sm text-green-400 font-mono flex-1">
              <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
            </div>
          </div>

          {/* Evidence Receipt */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Evidence Receipt Summary</h3>
            <div className="space-y-4 flex-1">
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-sm text-slate-500 font-medium">Parcel ID</span>
                <span className="font-bold text-slate-900">P104</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-sm text-slate-500 font-medium">Decision</span>
                <span className="font-bold text-danger">ESCALATE</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-sm text-slate-500 font-medium">Reason</span>
                <span className="font-medium text-slate-700">Ownership mismatch</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-sm text-slate-500 font-medium">Confidence Score</span>
                <span className="font-bold text-slate-900">72%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-slate-500 font-medium">Human Review</span>
                <span className="font-bold text-warning flex items-center gap-1">Required <AlertTriangle size={14} /></span>
              </div>
            </div>
            <p className="text-xs text-center text-slate-400 mt-6 bg-slate-50 p-2 rounded">
              Ready for integration with existing government municipal platforms.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
