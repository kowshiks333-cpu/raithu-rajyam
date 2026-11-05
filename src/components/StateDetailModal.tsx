import React from 'react';
import { X, MapPin, Droplets, Sun, Calendar, Layers, Award, Landmark, TrendingUp } from 'lucide-react';
import { StateAgriData } from '../data/statesData';

interface StateDetailModalProps {
  stateData: StateAgriData | null;
  onClose: () => void;
  onSelectCrop?: (cropName: string) => void;
}

export const StateDetailModal: React.FC<StateDetailModalProps> = ({
  stateData,
  onClose,
  onSelectCrop
}) => {
  if (!stateData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-stone-900 text-white relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <span>{stateData.zone} Zone</span>
                <span>·</span>
                <span>{stateData.type}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                {stateData.name}
              </h2>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-stone-300">
                <span className="flex items-center gap-1">
                  <Landmark className="w-3.5 h-3.5 text-stone-400" />
                  <span>Capital: <strong>{stateData.capital}</strong></span>
                </span>
                <span>·</span>
                <span>Cultivated Area: <strong className="text-white tabular-nums">{stateData.cultivatedAreaLakhHa} Lakh Ha</strong></span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Core Agricultural KPIs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/15">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-[11px] text-stone-300">Total Production</div>
              <div className="text-lg sm:text-xl font-bold text-white tabular-nums mt-0.5">
                {stateData.totalProductionMillionTonnes} MT
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-[11px] text-stone-300">Average Yield</div>
              <div className="text-lg sm:text-xl font-bold text-emerald-300 tabular-nums mt-0.5">
                {stateData.avgYieldKgPerHa} kg/ha
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-[11px] text-stone-300">Annual Rainfall</div>
              <div className="text-lg sm:text-xl font-bold text-sky-300 tabular-nums mt-0.5">
                {stateData.rainfallMm} mm
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-[11px] text-stone-300">Irrigation Net</div>
              <div className="text-lg sm:text-xl font-bold text-amber-300 tabular-nums mt-0.5">
                {stateData.irrigationPercentage}%
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Major Crops & Cultivars */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Major Crops & Prominent Cultivars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {stateData.majorCrops.map((crop) => (
                <div
                  key={crop}
                  className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors"
                >
                  <div className="font-bold text-stone-900 text-sm flex items-center justify-between">
                    <span>{crop}</span>
                    {onSelectCrop && (
                      <button
                        onClick={() => onSelectCrop(crop)}
                        className="text-[10px] text-emerald-700 hover:underline cursor-pointer"
                      >
                        Crop Specs →
                      </button>
                    )}
                  </div>
                  {stateData.cultivars[crop] ? (
                    <div className="mt-2 text-xs text-stone-600">
                      <span className="text-[11px] font-medium text-stone-400 block mb-0.5">Released Cultivars:</span>
                      <div className="flex flex-wrap gap-1">
                        {stateData.cultivars[crop].map((v) => (
                          <span key={v} className="text-[11px] bg-white border border-stone-200 px-1.5 py-0.5 rounded text-stone-700">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-1 text-xs text-stone-500">Traditional and hybrid cultivars grown</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sowing and Harvesting Seasons */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Seasonal Timelines & Growth Duration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stateData.sowingHarvestingTimeline.map((item) => (
                <div key={item.season} className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <span className="font-bold text-stone-900 text-sm">{item.season} Season</span>
                    <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      ~{item.avgDurationDays} Days
                    </span>
                  </div>
                  <div className="mt-3 space-y-1 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span className="text-stone-400">Sowing Period:</span>
                      <span className="font-medium text-stone-800">{item.sowing}</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span className="text-stone-400">Harvesting:</span>
                      <span className="font-medium text-stone-800">{item.harvesting}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                    <span className="font-medium text-stone-700">Key Crops:</span> {item.primaryCrops.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soil, Climate & Irrigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>Soil Profiles & Climatic Conditions</span>
              </div>
              <div className="text-xs text-stone-700 space-y-2">
                <div>
                  <strong className="text-stone-900 block mb-0.5">Dominant Soil Types:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {stateData.soilTypes.map((soil) => (
                      <span key={soil} className="bg-white px-2 py-0.5 border border-stone-200 rounded text-stone-700">
                        {soil}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Climatic Zone:</strong>
                  <p className="text-stone-600 leading-relaxed">{stateData.climate}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Droplets className="w-4 h-4 text-sky-700" />
                <span>Irrigation Infrastructure & Sources</span>
              </div>
              <div className="text-xs text-stone-700 space-y-2">
                <div>
                  <strong className="text-stone-900 block mb-0.5">Primary Irrigation Systems:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-600">
                    {stateData.irrigationMethods.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Net Irrigated Ratio:</strong>
                  <span className="text-stone-800 font-semibold">{stateData.irrigationPercentage}% of total cultivated area</span>
                </div>
              </div>
            </div>
          </div>

          {/* Major Agricultural Districts */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Major Agricultural Districts
            </h3>
            <div className="flex flex-wrap gap-2">
              {stateData.majorDistricts.map((district) => (
                <div
                  key={district}
                  className="flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-800 shadow-2xs"
                >
                  <MapPin className="w-3 h-3 text-emerald-700" />
                  <span>{district}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6-Year Historical Production Trend */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Historical Production & Productivity Trend (2018-19 to 2023-24)
            </h3>
            <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="px-4 py-2.5">Year</th>
                      <th className="px-4 py-2.5 text-right">Production (Million Tonnes)</th>
                      <th className="px-4 py-2.5 text-right">Cultivated Area (Lakh Ha)</th>
                      <th className="px-4 py-2.5 text-right">Productivity Yield (kg/ha)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {stateData.historicalTrends.map((trend) => (
                      <tr key={trend.year} className="hover:bg-stone-50/60 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-stone-900">{trend.year}</td>
                        <td className="px-4 py-2.5 text-right font-mono font-medium text-stone-900 tabular-nums">
                          {trend.productionMillionTonnes} MT
                        </td>
                        <td className="px-4 py-2.5 text-right font-mono text-stone-600 tabular-nums">
                          {trend.areaLakhHa}
                        </td>
                        <td className="px-4 py-2.5 text-right font-mono font-semibold text-emerald-800 tabular-nums">
                          {trend.yieldKgPerHa}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Government Agricultural Schemes */}
          {stateData.governmentSchemes.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Key State Agricultural Schemes & Interventions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stateData.governmentSchemes.map((scheme) => (
                  <div key={scheme.name} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-stone-900 text-xs sm:text-sm">{scheme.name}</h4>
                        <p className="mt-1 text-xs text-stone-600 leading-relaxed">{scheme.description}</p>
                        <div className="mt-2 text-[11px] font-medium text-emerald-900 bg-emerald-100/60 px-2 py-0.5 rounded inline-block">
                          Impact: {scheme.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <div>Official Sources: Directorate of Economics & Statistics (DES) & State Departments of Agriculture</div>
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
