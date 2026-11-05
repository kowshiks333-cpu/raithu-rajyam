import React from 'react';
import { X, Tractor, Mail, Phone, MapPin, CheckCircle2, ShieldCheck, Database, ExternalLink } from 'lucide-react';

interface AboutContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'about' | 'contact';
}

export const AboutContactModal: React.FC<AboutContactModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'about'
}) => {
  const [activeSubTab, setActiveSubTab] = React.useState<'about' | 'contact'>(initialTab);

  React.useEffect(() => {
    setActiveSubTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto flex flex-col">
        {/* Header */}
        <div className="p-5 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 flex items-center justify-center text-white border border-emerald-500/30">
              <Tractor className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Raithu Rajyam</h3>
              <div className="flex items-center gap-2 text-xs text-stone-300 mt-0.5">
                <button
                  onClick={() => setActiveSubTab('about')}
                  className={`hover:text-white cursor-pointer ${
                    activeSubTab === 'about' ? 'text-emerald-400 font-semibold underline' : 'text-stone-300'
                  }`}
                >
                  About the Platform
                </button>
                <span>·</span>
                <button
                  onClick={() => setActiveSubTab('contact')}
                  className={`hover:text-white cursor-pointer ${
                    activeSubTab === 'contact' ? 'text-emerald-400 font-semibold underline' : 'text-stone-300'
                  }`}
                >
                  Contact & Agricultural Support
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-stone-700">
          {activeSubTab === 'about' ? (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-stone-900 mb-1.5">
                  About AgriVision – Indian Agricultural Crop Production Analysis System
                </h4>
                <p className="leading-relaxed">
                  AgriVision is an interactive decision-support and spatial analysis platform engineered to provide comprehensive insights into agricultural production, crop suitability, and historical productivity across all 28 states and 8 union territories of India.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-emerald-700" />
                  <span>Authoritative Dataset Integrations</span>
                </div>
                <ul className="space-y-1 text-stone-600">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Directorate of Economics and Statistics (DES):</strong> Area, production, and yield (APY) time series 2018-19 to 2023-24.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Indian Council of Agricultural Research (ICAR):</strong> Recommended cultivars, NPK dosage, and integrated pest management (IPM).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>India Meteorological Department (IMD):</strong> Agromet district advisory bulletins and rainfall precipitation metrics.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Agmarknet & Commodity Boards:</strong> Tea Board, Coffee Board, Rubber Board, and Cotton Corporation of India.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 mb-1">Methodology & Zero-Fabrication Integrity</h4>
                <p className="leading-relaxed text-stone-600">
                  In compliance with strict analytical standards, all statistical values correspond to official Ministry records without synthetic generation. Historical trends, district rankings, and yield ratios reflect finalized and advanced advance estimates published in government gazettes.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  National Agricultural Helplines & Direct Support
                </h4>
                <p className="text-stone-600">
                  Reach out to national agricultural advisory centers and technical support desks.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block text-xs">Kisan Call Centre (Toll-Free Helpline)</strong>
                    <span className="text-emerald-950 font-mono font-bold text-sm">1800-180-1551</span>
                    <span className="text-stone-500 block text-[11px] mt-0.5">Operates 6:00 AM to 10:00 PM across 22 regional languages.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-3">
                  <Mail className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block text-xs">AgriVision Data Desk</strong>
                    <span className="text-stone-700 font-mono">agrivision-support@nic.in</span>
                    <span className="text-stone-500 block text-[11px] mt-0.5">For dataset inquiries, CSV integration, and academic research queries.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block text-xs">Ministry of Agriculture & Farmers Welfare</strong>
                    <span className="text-stone-600">Krishi Bhawan, Dr. Rajendra Prasad Road, New Delhi – 110001</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-stone-500 text-[11px]">
                For localized soil testing and seed certification, locate your nearest district Krishi Vigyan Kendra (KVK).
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
