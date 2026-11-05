import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Layers, LayoutGrid, Map, ArrowRight, Eye } from 'lucide-react';
import { STATES_AND_UTS_DATA, StateAgriData } from '../data/statesData';
import { INDIA_MAP_SHAPES } from '../data/indiaMapPaths';
import { StateDetailModal } from './StateDetailModal';

interface IndiaMapSectionProps {
  onSelectCrop?: (cropName: string) => void;
  selectedStateIdFromExternal?: string | null;
}

export const IndiaMapSection: React.FC<IndiaMapSectionProps> = ({
  onSelectCrop,
  selectedStateIdFromExternal
}) => {
  const [selectedState, setSelectedState] = useState<StateAgriData | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'grid'>('map');

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [selectedCropFilter, setSelectedCropFilter] = useState<string>('All');
  const [selectedProductionTier, setSelectedProductionTier] = useState<string>('All');

  // Handle external selection if any
  React.useEffect(() => {
    if (selectedStateIdFromExternal) {
      const found = STATES_AND_UTS_DATA.find((s) => s.id === selectedStateIdFromExternal);
      if (found) setSelectedState(found);
    }
  }, [selectedStateIdFromExternal]);

  // Filtering states
  const filteredStates = useMemo(() => {
    return STATES_AND_UTS_DATA.filter((st) => {
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = st.name.toLowerCase().includes(q) || st.capital.toLowerCase().includes(q);
        const matchesCrop = st.majorCrops.some((c) => c.toLowerCase().includes(q));
        const matchesDist = st.majorDistricts.some((d) => d.toLowerCase().includes(q));
        if (!matchesName && !matchesCrop && !matchesDist) return false;
      }
      // Zone filter
      if (selectedZone !== 'All' && st.zone !== selectedZone) {
        return false;
      }
      // Crop filter
      if (selectedCropFilter !== 'All') {
        const hasCrop = st.majorCrops.some((c) =>
          c.toLowerCase().includes(selectedCropFilter.toLowerCase())
        );
        if (!hasCrop) return false;
      }
      // Production Tier
      if (selectedProductionTier === 'High') {
        return st.totalProductionMillionTonnes >= 25;
      }
      if (selectedProductionTier === 'Moderate') {
        return st.totalProductionMillionTonnes >= 10 && st.totalProductionMillionTonnes < 25;
      }
      if (selectedProductionTier === 'Developing') {
        return st.totalProductionMillionTonnes < 10;
      }
      return true;
    });
  }, [searchQuery, selectedZone, selectedCropFilter, selectedProductionTier]);

  const hoveredStateData = useMemo(() => {
    if (!hoveredStateId) return null;
    return STATES_AND_UTS_DATA.find((s) => s.id === hoveredStateId) || null;
  }, [hoveredStateId]);

  const getStateColor = (stateId: string) => {
    const data = STATES_AND_UTS_DATA.find((s) => s.id === stateId);
    if (!data) return '#cbd5e1';

    const isMatch = filteredStates.some((s) => s.id === stateId);
    if (!isMatch) return '#e2e8f0';

    if (data.totalProductionMillionTonnes >= 25) return '#166534'; // Emerald 800
    if (data.totalProductionMillionTonnes >= 10) return '#059669'; // Emerald 600
    if (data.totalProductionMillionTonnes >= 1) return '#10b981'; // Emerald 500
    return '#6ee7b7'; // Light Emerald for UTs/micro-producers
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <span>State-Wise Agricultural Analysis</span>
            <span>·</span>
            <span>All 28 States & 8 Union Territories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Interactive Agricultural Map of India
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Select any state or union territory on the map or in the directory to explore cropping patterns, soils, cultivars, irrigation infrastructure, and government schemes.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg self-start md:self-auto shrink-0">
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              viewMode === 'map'
                ? 'bg-white text-emerald-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Interactive Map</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-emerald-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Directory Grid ({filteredStates.length})</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search state, crop, district..."
            className="w-full pl-9 pr-3 py-2 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
          />
        </div>

        {/* Zone Selector */}
        <div>
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="w-full px-3 py-2 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="All">All Geographic Zones</option>
            <option value="Northern">Northern Zone</option>
            <option value="Southern">Southern Zone</option>
            <option value="Eastern">Eastern Zone</option>
            <option value="Western">Western Zone</option>
            <option value="Central">Central Zone</option>
            <option value="North-Eastern">North-Eastern Zone</option>
          </select>
        </div>

        {/* Crop Filter */}
        <div>
          <select
            value={selectedCropFilter}
            onChange={(e) => setSelectedCropFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="All">All Major Crops</option>
            <option value="Rice">Rice (Paddy)</option>
            <option value="Wheat">Wheat</option>
            <option value="Cotton">Cotton</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Maize">Maize</option>
            <option value="Mustard">Mustard</option>
            <option value="Soybean">Soybean</option>
            <option value="Tea">Tea</option>
            <option value="Coffee">Coffee</option>
          </select>
        </div>

        {/* Production Tier */}
        <div>
          <select
            value={selectedProductionTier}
            onChange={(e) => setSelectedProductionTier(e.target.value)}
            className="w-full px-3 py-2 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="All">All Production Levels</option>
            <option value="High">High Output (&gt; 25 MT)</option>
            <option value="Moderate">Moderate Output (10 - 25 MT)</option>
            <option value="Developing">Developing / UT (&lt; 10 MT)</option>
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'map' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Map Canvas Card */}
          <div className="lg:col-span-8 bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs relative">
            {/* Map Legend */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100 text-xs text-stone-600">
              <span className="font-semibold text-stone-800">State Production Scale:</span>
              <div className="flex items-center gap-4 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#166534]" />
                  <span>&gt; 25 MT (High)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#059669]" />
                  <span>10 - 25 MT</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#10b981]" />
                  <span>1 - 10 MT</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#6ee7b7]" />
                  <span>&lt; 1 MT / UT</span>
                </div>
              </div>
            </div>

            {/* Interactive SVG Map */}
            <div className="relative w-full aspect-[10/11] max-w-2xl mx-auto py-2">
              <svg
                viewBox="0 0 1000 1100"
                className="w-full h-full drop-shadow-xs"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' }}
              >
                {/* Background outline */}
                <rect width="1000" height="1100" fill="transparent" />

                {/* State Polygons */}
                {INDIA_MAP_SHAPES.map((shape) => {
                  const stateData = STATES_AND_UTS_DATA.find((s) => s.id === shape.id);
                  const isHovered = hoveredStateId === shape.id;
                  const isFiltered = filteredStates.some((s) => s.id === shape.id);
                  const fillColor = getStateColor(shape.id);

                  return (
                    <g key={shape.id} className="cursor-pointer transition-all duration-150">
                      <path
                        d={shape.path}
                        fill={fillColor}
                        stroke="#ffffff"
                        strokeWidth={isHovered ? 3 : 1.5}
                        className={`transition-colors duration-150 ${
                          !isFiltered ? 'opacity-30' : 'opacity-100'
                        }`}
                        onMouseEnter={() => setHoveredStateId(shape.id)}
                        onMouseLeave={() => setHoveredStateId(null)}
                        onClick={() => {
                          if (stateData) setSelectedState(stateData);
                        }}
                      />
                      {/* State centroid labels */}
                      <text
                        x={shape.centroid[0]}
                        y={shape.centroid[1]}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        className="text-[11px] font-bold fill-white pointer-events-none select-none"
                        style={{
                          textShadow: '0 1px 2px rgba(0,0,0,0.85)',
                          fontSize: shape.shortCode.length > 2 ? '9px' : '11px'
                        }}
                      >
                        {shape.shortCode}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Dynamic Tooltip */}
              {hoveredStateData && (
                <div className="absolute top-4 left-4 z-20 pointer-events-none bg-stone-900/90 text-white p-3 rounded-xl shadow-xl border border-white/10 text-xs backdrop-blur-xs max-w-xs transition-opacity animate-in fade-in duration-150">
                  <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-1.5 mb-1.5">
                    <span className="font-bold text-sm text-emerald-400">{hoveredStateData.name}</span>
                    <span className="text-[10px] text-stone-300">{hoveredStateData.zone}</span>
                  </div>
                  <div className="space-y-1 text-stone-200">
                    <div>Capital: <span className="text-white font-medium">{hoveredStateData.capital}</span></div>
                    <div>Annual Output: <span className="text-emerald-300 font-bold tabular-nums">{hoveredStateData.totalProductionMillionTonnes} MT</span></div>
                    <div>Average Yield: <span className="text-white font-mono tabular-nums">{hoveredStateData.avgYieldKgPerHa} kg/ha</span></div>
                    <div className="pt-1 text-[11px] text-stone-400 truncate">
                      Crops: {hoveredStateData.majorCrops.slice(0, 3).join(', ')}...
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] text-emerald-400 font-medium">Click to view complete dossier →</div>
                </div>
              )}
            </div>

            <div className="text-center text-xs text-stone-400 mt-2">
              Tip: Click any state on the map to open full agronomic, cultivar, irrigation, and historical trend data.
            </div>
          </div>

          {/* Quick Selected State Detail Card / Explorer Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  State Focus Panel
                </span>
                <span className="text-xs text-emerald-800 font-semibold">
                  {filteredStates.length} / 36 Matching
                </span>
              </div>

              {hoveredStateData || STATES_AND_UTS_DATA[0] ? (
                (() => {
                  const state = hoveredStateData || STATES_AND_UTS_DATA[0];
                  return (
                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="text-xs font-medium text-emerald-700">{state.type} · {state.zone} Zone</div>
                        <h3 className="text-2xl font-bold text-stone-900 mt-0.5">{state.name}</h3>
                        <p className="text-xs text-stone-500 mt-1">
                          Capital: <strong className="text-stone-700">{state.capital}</strong>
                        </p>
                      </div>

                      {/* Stat pills */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                          <span className="text-stone-500 block text-[10px]">Total Production</span>
                          <strong className="text-stone-900 text-sm tabular-nums">
                            {state.totalProductionMillionTonnes} MT
                          </strong>
                        </div>
                        <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                          <span className="text-stone-500 block text-[10px]">Average Yield</span>
                          <strong className="text-emerald-800 text-sm tabular-nums">
                            {state.avgYieldKgPerHa} kg/ha
                          </strong>
                        </div>
                        <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                          <span className="text-stone-500 block text-[10px]">Cultivated Area</span>
                          <strong className="text-stone-900 text-sm tabular-nums">
                            {state.cultivatedAreaLakhHa} Lakh Ha
                          </strong>
                        </div>
                        <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                          <span className="text-stone-500 block text-[10px]">Irrigation Ratio</span>
                          <strong className="text-stone-900 text-sm tabular-nums">
                            {state.irrigationPercentage}%
                          </strong>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-stone-700 block mb-1.5">Dominant Crops:</span>
                        <div className="flex flex-wrap gap-1">
                          {state.majorCrops.map((c) => (
                            <span key={c} className="text-xs bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-stone-700 block mb-1">Key Agricultural Districts:</span>
                        <p className="text-xs text-stone-600">{state.majorDistricts.slice(0, 5).join(', ')}</p>
                      </div>

                      <button
                        onClick={() => setSelectedState(state)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Open Full State Dossier</span>
                      </button>
                    </div>
                  );
                })()
              ) : null}
            </div>

            {/* Quick Filtered State List */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs max-h-72 overflow-y-auto space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                Clickable State Index ({filteredStates.length})
              </div>
              {filteredStates.map((st) => (
                <div
                  key={st.id}
                  onClick={() => setSelectedState(st)}
                  onMouseEnter={() => setHoveredStateId(st.id)}
                  onMouseLeave={() => setHoveredStateId(null)}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 text-xs transition-colors cursor-pointer border border-transparent hover:border-emerald-200"
                >
                  <span className="font-semibold text-stone-800">{st.name}</span>
                  <span className="text-stone-500 font-mono tabular-nums">{st.totalProductionMillionTonnes} MT</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* State Directory Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredStates.map((state) => (
            <div
              key={state.id}
              onClick={() => setSelectedState(state)}
              className="group bg-white p-5 rounded-xl border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                  <span>{state.zone} Zone</span>
                  <span className="font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {state.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                  {state.name}
                </h3>
                <div className="text-xs text-stone-500 mt-0.5">Capital: {state.capital}</div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs pt-3 border-t border-stone-100">
                  <div>
                    <span className="text-[10px] text-stone-400 block">Production</span>
                    <strong className="text-stone-900 tabular-nums">{state.totalProductionMillionTonnes} MT</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block">Yield</span>
                    <strong className="text-emerald-800 tabular-nums">{state.avgYieldKgPerHa} kg/ha</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block">Area</span>
                    <strong className="text-stone-700 tabular-nums">{state.cultivatedAreaLakhHa} L.Ha</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block">Irrigation</span>
                    <strong className="text-stone-700 tabular-nums">{state.irrigationPercentage}%</strong>
                  </div>
                </div>

                <div className="mt-3 text-xs text-stone-600">
                  <span className="text-[10px] text-stone-400 block mb-0.5">Primary Crops:</span>
                  <span className="line-clamp-1">{state.majorCrops.slice(0, 3).join(', ')}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-800 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>View Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* State Detail Modal */}
      <StateDetailModal
        stateData={selectedState}
        onClose={() => setSelectedState(null)}
        onSelectCrop={onSelectCrop}
      />
    </div>
  );
};
