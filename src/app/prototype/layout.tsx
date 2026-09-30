"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { 
  Upload, 
  FileSearch, 
  GitMerge, 
  AlertTriangle, 
  Map, 
  Code,
  ArrowLeft
} from "lucide-react";

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Data Input", path: "/prototype", icon: Upload },
    { name: "Data Understanding", path: "/prototype/data-understanding", icon: FileSearch },
    { name: "Property Matching", path: "/prototype/property-matching", icon: GitMerge },
    { name: "Conflict Detection", path: "/prototype/conflict-detection", icon: AlertTriangle },
    { name: "Harmonized View", path: "/prototype/harmonized-view", icon: Map },
    { name: "Evidence & API", path: "/prototype/evidence", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-sidebar text-slate-300 flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-6 border-b border-slate-800">
          <Logo className="text-white" />
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? "bg-primary text-white" 
                    : "hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={20} className={isActive ? "text-white" : "text-slate-400"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 mt-auto">
          <Link 
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 font-medium"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-72 flex flex-col min-h-screen">
        <div className="flex-1 p-8">
          {children}
        </div>
        
        {/* Subtle Footer */}
        <footer className="py-4 px-8 border-t border-slate-200 text-xs text-slate-400 flex justify-between">
          <span>BhoomiSetu Prototype Demo</span>
          <span>Synthetic Data • SIH 2026</span>
        </footer>
      </main>
    </div>
  );
}
