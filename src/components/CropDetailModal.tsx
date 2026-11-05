import React from 'react';
import { X, Sprout, Droplets, Thermometer, ShieldAlert, Package, Calendar, Globe, MapPin } from 'lucide-react';
import { CropData } from '../data/cropsData';

interface CropDetailModalProps {
  crop: CropData | null;
  onClose: () => void;
  onSelectState?: (stateName: string) => void;
}

export const CropDetailModal: React.FC<CropDetailModalProps> = ({
  crop,
  onClose,
  onSelectState
}) => {
  if (!crop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header with Crop Image Banner */}
        <div className="relative h-64 bg-stone-900 text-white overflow-hidden shrink-0">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-full object-cover object-top opacity-100"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.includes('image_3ef8ae2a.png')) {
                img.src = '/assets/aistudio/image_55e10274.png';
              } else if (!img.src.includes('image_55e10274.png')) {
                img.src = '/assets/aistudio/image_3ef8ae2a.png';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/10" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/40 hover:bg-black/60 text-stone-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Crop Identity Title */}
          <div className="absolute bottom-5 left-6 right-6 z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
              <span>{crop.category}</span>
              <span>·</span>
              <span>{crop.subcategory}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {crop.name}
            </h2>
            <div className="text-sm text-stone-300 italic font-serif mt-0.5">
              Botanical Name: {crop.scientificName}
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Agronomic Quick Reference Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                <span>Growing Duration</span>
              </div>
              <div className="text-lg font-bold text-stone-900 mt-1 tabular-nums">
                ~{crop.averageDurationDays} Days
              </div>
              <div className="text-[10px] text-stone-400 mt-0.5">Sow: {crop.sowingSeason}</div>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                <Droplets className="w-3.5 h-3.5 text-sky-700" />
                <span>Rainfall / Water</span>
              </div>
              <div className="text-sm font-bold text-stone-900 mt-1 truncate">
                {crop.rainfallRequirementMm}
              </div>
              <div className="text-[10px] text-stone-400 mt-0.5">{crop.waterRequirements.slice(0, 24)}...</div>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                <Thermometer className="w-3.5 h-3.5 text-amber-700" />
                <span>Thermal Range</span>
              </div>
              <div className="text-sm font-bold text-stone-900 mt-1 truncate">
                {crop.idealTemperature}
              </div>
              <div className="text-[10px] text-stone-400 mt-0.5">Season: {crop.seasons.join(', ')}</div>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                <Sprout className="w-3.5 h-3.5 text-emerald-800" />
                <span>Expected Yield</span>
              </div>
              <div className="text-sm font-bold text-emerald-800 mt-1 truncate">
                {crop.expectedYieldPerHa}
              </div>
              <div className="text-[10px] text-stone-400 mt-0.5">NPK: {crop.fertilizerNPK}</div>
            </div>
          </div>

          {/* Popular Varieties & Cultivars */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Popular High-Yield Varieties & Cultivars
            </h3>
            <div className="flex flex-wrap gap-2">
              {crop.popularVarieties.map((v) => (
                <span
                  key={v}
                  className="px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-lg text-xs font-medium"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Suitable States & Leading Districts */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Suitable States & Primary Growing Clusters
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {crop.suitableStates.map((st) => (
                <button
                  key={st}
                  onClick={() => onSelectState && onSelectState(st)}
                  className="flex items-center gap-1.5 px-3 py-1 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  <MapPin className="w-3 h-3 text-emerald-700" />
                  <span>{st}</span>
                </button>
              ))}
            </div>
            <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-200">
              <strong className="text-stone-900">Leading Agricultural Districts:</strong> {crop.topDistricts.join(' · ')}
            </div>
          </div>

          {/* Soil, Climate & Nutritional Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-2">
              <strong className="text-xs font-bold uppercase text-stone-700 block">
                Soil & Edaphic Requirements
              </strong>
              <p className="text-xs text-stone-600 leading-relaxed">
                {crop.soilRequirements}
              </p>
              <div className="pt-2 border-t border-stone-200/60 text-xs">
                <span className="text-stone-500">Fertilizer Regimen (N:P:K):</span>{' '}
                <strong className="text-stone-900">{crop.fertilizerNPK}</strong>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-2">
              <strong className="text-xs font-bold uppercase text-stone-700 block">
                Climate & Water Management
              </strong>
              <p className="text-xs text-stone-600 leading-relaxed">
                {crop.climateRequirements}
              </p>
              <div className="pt-2 border-t border-stone-200/60 text-xs">
                <span className="text-stone-500">Irrigation Advice:</span>{' '}
                <span className="text-stone-700">{crop.waterRequirements}</span>
              </div>
            </div>
          </div>

          {/* Common Pests and Integrated Pest Management (IPM) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              Common Pests, Pathogens & Integrated Management
            </h3>
            <div className="space-y-3">
              {crop.commonPestsDiseases.map((item) => (
                <div key={item.name} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">{item.name}</span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-stone-600">
                    <strong className="text-stone-700">Symptoms:</strong> {item.symptoms}
                  </p>
                  <p className="mt-1 text-xs text-emerald-900 bg-emerald-50/70 p-2 rounded border border-emerald-100">
                    <strong className="text-emerald-950">Recommended IPM Control:</strong> {item.management}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Harvesting Methods & Storage Protocol */}
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-stone-600" />
              Harvesting Methods & Storage Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-stone-600">
              <div>
                <strong className="text-stone-900 block mb-0.5">Harvesting Technique:</strong>
                {crop.harvestingAndStorage.method}
              </div>
              <div>
                <strong className="text-stone-900 block mb-0.5">Critical Moisture Level:</strong>
                {crop.harvestingAndStorage.moistureContent}
              </div>
              <div>
                <strong className="text-stone-900 block mb-0.5">Safe Warehousing:</strong>
                {crop.harvestingAndStorage.storageConditions}
              </div>
            </div>
          </div>

          {/* Distinction: General Guidance vs Region-Specific Recommendations */}
          <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/30 space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2 mb-1">
                <Globe className="w-4 h-4 text-emerald-800" />
                <span>General National Agronomic Guidance</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {crop.generalGuidance}
              </p>
            </div>

            <div className="pt-3 border-t border-emerald-200/60">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                Region-Specific Recommendations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {crop.regionalGuidance.map((rg) => (
                  <div key={rg.region} className="bg-white p-3 rounded-lg border border-emerald-100 text-xs">
                    <strong className="text-stone-900 block text-xs mb-0.5">{rg.region}</strong>
                    <p className="text-stone-600 leading-relaxed">{rg.tips}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <div>Standards: Indian Council of Agricultural Research (ICAR) & State Agricultural Universities</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
