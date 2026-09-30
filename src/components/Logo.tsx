import React from 'react';
import { Layers } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
}

export function Logo({ className = '', iconSize = 24 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 font-bold ${className}`}>
      <div className="bg-primary text-white p-1.5 rounded-md flex items-center justify-center">
        <Layers size={iconSize} />
      </div>
      <span className="tracking-tight text-slate-900 dark:text-white">BhoomiSetu</span>
    </div>
  );
}
