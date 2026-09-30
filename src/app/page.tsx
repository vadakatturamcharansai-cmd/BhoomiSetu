import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowRight, Play, Database, ShieldCheck, Map, ArrowDownCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <Logo iconSize={28} className="text-xl" />
        <nav className="flex gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="text-primary font-semibold">Home</Link>
          <Link href="#" className="hover:text-primary transition-colors">About</Link>
          <Link href="#workflow" className="hover:text-primary transition-colors">Workflow</Link>
          <Link href="/prototype" className="hover:text-primary transition-colors">Prototype</Link>
          <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Subtle Map-like Background Elements */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6 uppercase tracking-wide">
            SIH 2026 Prototype
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            BhoomiSetu
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-6">
            Bridging Land Data. Building Trust.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Harmonize fragmented land records for accurate, transparent and interoperable urban land governance.
          </p>
        </div>

        {/* Action Cards */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl w-full px-4 mb-24">
          {/* Card 1: See How */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
              <Play className="fill-current ml-1" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">See How<br />BhoomiSetu Works</h3>
            <p className="text-slate-600 mb-8 flex-1">
              Guided walkthrough of the complete harmonization workflow.
            </p>
            <Link href="#workflow" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
              Explore Workflow <ArrowDownCircle size={18} />
            </Link>
          </div>

          {/* Card 2: Try Prototype */}
          <div className="bg-white rounded-2xl p-8 border-2 border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-sm shadow-primary/30">
              <Map size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Try BhoomiSetu<br />Core Engine MVP</h3>
            <p className="text-slate-600 mb-8 flex-1">
              Upload sample land data or use our demo dataset to experience the harmonization engine.
            </p>
            <Link href="/prototype" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors shadow-sm">
              Launch Prototype <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Workflow Section */}
        <div id="workflow" className="relative z-10 w-full max-w-5xl bg-white rounded-2xl border border-slate-200 shadow-sm p-10 pt-12 mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Workflow Visual</h3>
            <p className="text-slate-500">How BhoomiSetu harmonizes fragmented records</p>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto relative">
            {/* The line connecting them all */}
            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 z-0"></div>

            <div className="relative z-10 bg-slate-100 border border-slate-300 text-slate-700 font-medium py-3 px-6 rounded-lg mb-8 shadow-sm text-center w-full flex items-center justify-center gap-2">
              <Database size={18} className="text-slate-500" /> Cadastral + Revenue + Survey Data
            </div>
            
            {[
              "Data Standardization",
              "Parcel Matching",
              "Conflict Detection",
              "Evidence Scoring",
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white border border-slate-200 text-slate-700 font-medium py-2 px-6 rounded-full mb-8 shadow-sm text-center text-sm">
                {step}
              </div>
            ))}

            <div className="relative z-10 grid grid-cols-3 gap-2 w-full mb-8">
              <div className="bg-info-bg border border-info/30 text-info font-bold py-2 px-2 rounded-lg text-xs text-center shadow-sm">AUTO-FIX</div>
              <div className="bg-warning-bg border border-warning/30 text-warning font-bold py-2 px-2 rounded-lg text-xs text-center shadow-sm">RECOMMEND</div>
              <div className="bg-danger-bg border border-danger/30 text-danger font-bold py-2 px-2 rounded-lg text-xs text-center shadow-sm">ESCALATE</div>
            </div>

            <div className="relative z-10 bg-white border border-slate-200 text-slate-700 font-medium py-2 px-6 rounded-full mb-8 shadow-sm text-center text-sm">
              Neighbour Validation
            </div>

            <div className="relative z-10 bg-success border-2 border-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-md shadow-success/20 text-center w-full flex items-center justify-center gap-2">
              <ShieldCheck size={20} /> ULPIN-linked Harmonized Record
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800 flex flex-col items-center">
        <p className="font-medium text-slate-300 mb-1">BhoomiSetu • Evidence-Aware Urban Land Harmonization</p>
        <p className="text-sm">Synthetic Demo Data • For Prototype Demonstration Only</p>
      </footer>
    </div>
  );
}
