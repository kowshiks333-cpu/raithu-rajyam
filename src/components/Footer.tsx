import React from 'react';
import { Tractor, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenReport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAbout,
  onOpenContact,
  onOpenReport
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-emerald-950 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mandate */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 flex items-center justify-center text-white border border-emerald-500/30 shadow-xs">
                <Tractor className="w-5 h-5 text-emerald-100" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Raithu Rajyam</span>
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Indian Agricultural Crop Production Analysis System covering all 28 states and 8 union territories. Grounded in verified datasets from the Directorate of Economics and Statistics (DES), ICAR, and IMD.
            </p>
            <div className="text-[11px] text-stone-500 pt-1">
              Data Period: 2018-19 to 2023-24 Final Advance Estimates Cycle
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('states')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Interactive India States Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('crops')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Crop Information Database
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('production')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Production Analysis Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('compare')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  State Comparison Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('weather')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Weather & Advisory Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('farmer-db')}
                  className="hover:text-emerald-300 text-emerald-400 font-semibold transition-colors cursor-pointer"
                >
                  Farmer Database & Excel Sheet
                </button>
              </li>
            </ul>
          </div>

          {/* Official Resources & Reports */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Resources & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenReport}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-emerald-400"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Generate Executive Dossier</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About the Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Kisan Helplines
                </button>
              </li>
              <li>
                <a
                  href="https://agricoop.nic.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-400 hover:text-stone-200 transition-colors"
                >
                  Ministry of Agriculture (Official) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Raithu Rajayam · Indian Agricultural Analysis System. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Official Government Data Grounded</span>
            <span>·</span>
            <span>Zero Synthetic Fabrication Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
