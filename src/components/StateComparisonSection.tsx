import React, { useState, useMemo } from 'react';
import { ArrowLeftRight, Check, Droplets, Layers, Sprout, MapPin, Award } from 'lucide-react';
import { STATES_AND_UTS_DATA, StateAgriData } from '../data/statesData';

export const StateComparisonSection: React.FC = () => {
  const [selectedStateId1, setSelectedStateId1] = useState<string>('punjab');
  const [selectedStateId2, setSelectedStateId2] = useState<string>('haryana');
  const [selectedStateId3, setSelectedStateId3] = useState<string>('none'); // optional third state

  const state1 = useMemo(() => STATES_AND_UTS_DATA.find((s) => s.id === selectedStateId1) || STATES_AND_UTS_DATA[0], [selectedStateId1]);
  const state2 = useMemo(() => STATES_AND_UTS_DATA.find((s) => s.id === selectedStateId2) || STATES_AND_UTS_DATA[1], [selectedStateId2]);
  const state3 = useMemo(() => STATES_AND_UTS_DATA.find((s) => s.id === selectedStateId3) || null, [selectedStateId3]);

  const activeStates = [state1, state2, state3].filter(Boolean) as StateAgriData[];

  // Quick Preset Handlers
  const handlePreset = (s1: string, s2: string, s3: string = 'none') => {
    setSelectedStateId1(s1);
    setSelectedStateId2(s2);
    setSelectedStateId3(s3);
  };

  // Find max values for visual comparative bar scaling
  const maxProduction = Math.max(...activeStates.map((s) => s.totalProductionMillionTonnes));
  const maxYield = Math.max(...activeStates.map((s) => s.avgYieldKgPerHa));
  const maxArea = Math.max(...activeStates.map((s) => s.cultivatedAreaLakhHa));
  const maxRainfall = Math.max(...activeStates.map((s) => s.rainfallMm));

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
          <span>Head-to-Head State Comparison</span>
          <span>·</span>
          <span>Multi-State Benchmarking</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Comparative Agricultural Analysis
        </h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          Select two or three states to analyze differences in cropping patterns, land productivity, rainfall endowments, irrigation infrastructure, and district leadership.
        </p>
      </div>

      {/* Preset Pills & Selectors */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
        {/* Preset Buttons */}
        <div>
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
            Curated Agronomic Comparison Presets:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handlePreset('punjab', 'haryana')}
              className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              🌾 Punjab vs Haryana (Wheat Bowl)
            </button>
            <button
              onClick={() => handlePreset('maharashtra', 'gujarat')}
              className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              ☁️ Maharashtra vs Gujarat (Cotton & Oilseeds)
            </button>
            <button
              onClick={() => handlePreset('uttar-pradesh', 'madhya-pradesh')}
              className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              🚜 UP vs Madhya Pradesh (Central Giants)
            </button>
            <button
              onClick={() => handlePreset('kerala', 'assam')}
              className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              🍃 Kerala vs Assam (Plantation Giants)
            </button>
            <button
              onClick={() => handlePreset('andhra-pradesh', 'telangana', 'tamil-nadu')}
              className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              🍚 AP vs Telangana vs Tamil Nadu (Southern Rice Triad)
            </button>
          </div>
        </div>

        {/* State Dropdown Selectors */}
        <div className="pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">State 1</label>
            <select
              value={selectedStateId1}
              onChange={(e) => setSelectedStateId1(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              {STATES_AND_UTS_DATA.map((s) => (
                <option key={s.id} value={s.id}>{s.name} ({s.zone})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">State 2</label>
            <select
              value={selectedStateId2}
              onChange={(e) => setSelectedStateId2(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              {STATES_AND_UTS_DATA.map((s) => (
                <option key={s.id} value={s.id}>{s.name} ({s.zone})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">State 3 (Optional)</label>
            <select
              value={selectedStateId3}
              onChange={(e) => setSelectedStateId3(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              <option value="none">-- None (2 States Only) --</option>
              {STATES_AND_UTS_DATA.map((s) => (
                <option key={s.id} value={s.id}>{s.name} ({s.zone})</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Head-to-Head Comparative Visual Metric Bars */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-6">
        <h3 className="text-base font-bold text-stone-900">
          Core Agricultural Productivity & Resource Benchmarks
        </h3>

        {/* 1. Production Comparison */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-700">Annual Production (Million Tonnes)</span>
            <span className="text-[11px] text-stone-400">Higher indicates gross volume</span>
          </div>
          <div className="space-y-1.5">
            {activeStates.map((st) => {
              const widthPct = Math.round((st.totalProductionMillionTonnes / maxProduction) * 100);
              return (
                <div key={st.id} className="space-y-0.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-stone-800">{st.name}</span>
                    <span className="font-mono font-bold text-stone-900 tabular-nums">
                      {st.totalProductionMillionTonnes} MT
                    </span>
                  </div>
                  <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-700 rounded-full transition-all duration-300"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Yield Comparison */}
        <div className="space-y-2 pt-3 border-t border-stone-100">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-700">Productivity Yield (kg/ha)</span>
            <span className="text-[11px] text-stone-400">Higher indicates agricultural efficiency</span>
          </div>
          <div className="space-y-1.5">
            {activeStates.map((st) => {
              const widthPct = Math.round((st.avgYieldKgPerHa / maxYield) * 100);
              return (
                <div key={st.id} className="space-y-0.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-stone-800">{st.name}</span>
                    <span className="font-mono font-bold text-emerald-800 tabular-nums">
                      {st.avgYieldKgPerHa} kg/ha
                    </span>
                  </div>
                  <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Cultivated Area */}
        <div className="space-y-2 pt-3 border-t border-stone-100">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-700">Total Cultivated Area (Lakh Hectares)</span>
            <span className="text-[11px] text-stone-400">Total agrarian land footprint</span>
          </div>
          <div className="space-y-1.5">
            {activeStates.map((st) => {
              const widthPct = Math.round((st.cultivatedAreaLakhHa / maxArea) * 100);
              return (
                <div key={st.id} className="space-y-0.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-stone-800">{st.name}</span>
                    <span className="font-mono font-bold text-stone-900 tabular-nums">
                      {st.cultivatedAreaLakhHa} Lakh Ha
                    </span>
                  </div>
                  <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-600 rounded-full transition-all duration-300"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Rainfall and Irrigation */}
        <div className="space-y-2 pt-3 border-t border-stone-100">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-700">Irrigation Coverage & Annual Rainfall</span>
            <span className="text-[11px] text-stone-400">Water endowments</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeStates.map((st) => (
              <div key={st.id} className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                <span className="font-bold text-stone-900 block">{st.name}</span>
                <div className="mt-2 space-y-1 text-stone-600">
                  <div className="flex justify-between">
                    <span>Irrigation Coverage:</span>
                    <strong className="text-stone-900 font-mono">{st.irrigationPercentage}%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Rainfall:</span>
                    <strong className="text-sky-800 font-mono">{st.rainfallMm} mm</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deep Side-by-Side Comparison Matrix Table */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-stone-200">
          <h3 className="text-base font-bold text-stone-900">
            Agronomic & Policy Matrix Comparison
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            Side-by-side analysis of soils, seasonal calendars, cultivars, and major agricultural districts.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-5 py-3.5 w-1/4">Comparison Parameter</th>
                {activeStates.map((st) => (
                  <th key={st.id} className="px-5 py-3.5 w-1/3">
                    <span className="text-sm font-bold text-stone-900 block">{st.name}</span>
                    <span className="text-[10px] font-normal text-stone-400 capitalize">{st.capital} ({st.zone})</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-5 py-3.5 font-bold text-stone-700 bg-stone-50/40">
                  Major Crops Cultivated
                </td>
                {activeStates.map((st) => (
                  <td key={st.id} className="px-5 py-3.5 text-stone-800">
                    <div className="flex flex-wrap gap-1">
                      {st.majorCrops.map((c) => (
                        <span key={c} className="bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded text-[11px]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="px-5 py-3.5 font-bold text-stone-700 bg-stone-50/40">
                  Dominant Soil Types
                </td>
                {activeStates.map((st) => (
                  <td key={st.id} className="px-5 py-3.5 text-stone-700">
                    <ul className="list-disc list-inside space-y-0.5">
                      {st.soilTypes.map((soil) => (
                        <li key={soil}>{soil}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="px-5 py-3.5 font-bold text-stone-700 bg-stone-50/40">
                  Climate & Agro-Zone
                </td>
                {activeStates.map((st) => (
                  <td key={st.id} className="px-5 py-3.5 text-stone-600 leading-relaxed">
                    {st.climate}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="px-5 py-3.5 font-bold text-stone-700 bg-stone-50/40">
                  Primary Irrigation Methods
                </td>
                {activeStates.map((st) => (
                  <td key={st.id} className="px-5 py-3.5 text-stone-700">
                    {st.irrigationMethods.join(', ')}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="px-5 py-3.5 font-bold text-stone-700 bg-stone-50/40">
                  Leading Agricultural Districts
                </td>
                {activeStates.map((st) => (
                  <td key={st.id} className="px-5 py-3.5 text-stone-800 font-medium">
                    {st.majorDistricts.join(', ')}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="px-5 py-3.5 font-bold text-stone-700 bg-stone-50/40">
                  Flagship Government Scheme
                </td>
                {activeStates.map((st) => (
                  <td key={st.id} className="px-5 py-3.5 text-stone-700">
                    {st.governmentSchemes[0] ? (
                      <div>
                        <strong className="text-stone-900 block text-xs">{st.governmentSchemes[0].name}</strong>
                        <span className="text-[11px] text-stone-500">{st.governmentSchemes[0].impact}</span>
                      </div>
                    ) : (
                      'PM-KISAN & PMFBY'
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
