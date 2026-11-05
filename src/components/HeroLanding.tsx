import React from 'react';
import { MapPin, BarChart3, Sprout, ArrowRight, TrendingUp, Layers, CheckCircle2, FileSpreadsheet, Presentation } from 'lucide-react';
import { CROPS_DATABASE } from '../data/cropsData';

interface HeroLandingProps {
  onNavigate: (tab: string) => void;
  onSelectCrop: (cropId: string) => void;
  onOpenPresentation?: () => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({ onNavigate, onSelectCrop, onOpenPresentation }) => {
  const featuredCrops = CROPS_DATABASE.slice(0, 4);

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-900 text-white min-h-[520px] flex items-center">
        {/* Background Image with Measured Contrast Scrim */}
        <img
          src="/src/assets/images/hero_indian_farmland_1792943177783.jpg"
          alt="Expansive Indian farmlands with paddy terraces and golden fields at sunrise"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/80 to-stone-950/60" />

        <div className="relative max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center sm:text-left z-10 w-full">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-300 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Ministry of Agriculture & DES Grounded Analysis</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15] text-balance">
            Agricultural Crop Production Analysis System
          </h1>

          <p className="mt-4 text-base sm:text-xl text-stone-200 max-w-2xl font-normal leading-relaxed">
            Explore crops, production, productivity, and agricultural trends across all 28 states and 8 union territories of India.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3.5">
            <button
              onClick={() => onNavigate('states')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-emerald-950" />
              <span>Explore States</span>
            </button>

            <button
              onClick={() => onNavigate('crops')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all backdrop-blur-xs cursor-pointer"
            >
              <Sprout className="w-4 h-4 text-emerald-300" />
              <span>Analyze Crops</span>
            </button>

            <button
              onClick={() => onNavigate('production')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all backdrop-blur-xs cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-emerald-300" />
              <span>View Production Data</span>
            </button>

            <button
              onClick={() => onNavigate('farmer-db')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-800/90 hover:bg-emerald-700 border border-emerald-500/50 rounded-lg transition-all backdrop-blur-xs cursor-pointer shadow-sm"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-300" />
              <span>Farmer Database (Excel)</span>
            </button>

            {onOpenPresentation && (
              <button
                onClick={onOpenPresentation}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-purple-200 bg-purple-900/60 hover:bg-purple-800/80 border border-purple-500/50 rounded-lg transition-all backdrop-blur-xs cursor-pointer shadow-sm"
              >
                <Presentation className="w-4 h-4 text-purple-300" />
                <span>Presentation Deck (8 Slides)</span>
              </button>
            )}
          </div>

          {/* Clean Unboxed Editorial Metadata Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                36
              </div>
              <div className="text-xs text-stone-300 mt-1">
                All 28 States & 8 UTs Covered
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                4 Major
              </div>
              <div className="text-xs text-stone-300 mt-1">
                Crop Categories Analyzed
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tabular-nums">
                332.3 MT
              </div>
              <div className="text-xs text-stone-300 mt-1">
                National Foodgrain Output (23-24)
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                100%
              </div>
              <div className="text-xs text-stone-300 mt-1">
                Verified Official DES Datasets
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights & Scope Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900">Interactive India State Explorer</h2>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Explore soil types, irrigation infrastructure, agro-climatic zones, seasonal calendars (Kharif, Rabi, Zaid), and government schemes for each region.
            </p>
          </div>
          <button
            onClick={() => onNavigate('states')}
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 cursor-pointer"
          >
            <span>Launch States Map</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
              <Sprout className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900">Botanical & Agronomic Database</h2>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              High-resolution guides on varieties, water/NPK dosage, common pests with integrated pest management (IPM), and post-harvest storage conditions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('crops')}
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 cursor-pointer"
          >
            <span>Browse Crops Database</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-800 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900">Multi-Year Analytics & Comparison</h2>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Compare 2 or 3 states head-to-head, analyze top-10 producing clusters, study 6-year production dynamics, and export clean CSV datasets.
            </p>
          </div>
          <button
            onClick={() => onNavigate('production')}
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 cursor-pointer"
          >
            <span>Open Production Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Featured Primary Crops Showcase */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-stone-900">Featured Agricultural Staples</h2>
            <p className="text-sm text-stone-600 mt-0.5">
              Explore primary cereals, commercial fiber, and hill plantation crops driving the rural economy.
            </p>
          </div>
          <button
            onClick={() => onNavigate('crops')}
            className="text-xs font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>View All 20+ Crops in Database</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCrops.map((crop) => (
            <div
              key={crop.id}
              onClick={() => onSelectCrop(crop.id)}
              className="group bg-stone-50 rounded-lg border border-stone-200 overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-44 bg-stone-200 overflow-hidden">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.includes('image_3ef8ae2a.png')) {
                      img.src = '/assets/aistudio/image_55e10274.png';
                    } else if (!img.src.includes('image_55e10274.png')) {
                      img.src = '/assets/aistudio/image_3ef8ae2a.png';
                    }
                  }}
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 text-[11px] font-medium text-stone-800 bg-white/90 backdrop-blur-xs rounded shadow-2xs">
                  {crop.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-800 transition-colors">
                    {crop.name}
                  </h3>
                  <p className="text-xs text-stone-500 italic mt-0.5">{crop.scientificName}</p>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-2">
                    {crop.generalGuidance}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                  <span>Avg Duration: <strong className="text-stone-800 font-semibold">{crop.averageDurationDays}d</strong></span>
                  <span className="text-emerald-700 font-semibold group-hover:translate-x-0.5 transition-transform">
                    View Specs →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Data Sources Reference Banner */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-stone-900">
              Authoritative Indian Agricultural Data Sources
            </div>
            <div className="text-xs text-stone-600 mt-0.5">
              Directorate of Economics & Statistics (DES) · Ministry of Agriculture & Farmers Welfare · ICAR · IMD Agromet · Agmarknet
            </div>
          </div>
        </div>
        <div className="text-xs text-stone-500 tabular-nums whitespace-nowrap">
          Reporting Cycle: 2023-24 Final Advance Estimates
        </div>
      </div>
    </div>
  );
};
