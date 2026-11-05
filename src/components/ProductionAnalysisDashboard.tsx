import React, { useState, useMemo } from 'react';
import { BarChart3, TrendingUp, PieChart, Download, Search, ArrowUpDown, Info } from 'lucide-react';
import { STATES_AND_UTS_DATA } from '../data/statesData';
import { NATIONAL_HISTORICAL_TRENDS, CROP_TOP_STATES, RAW_PRODUCTION_RECORDS, downloadCSV } from '../data/productionData';

export const ProductionAnalysisDashboard: React.FC = () => {
  const [selectedCropCategory, setSelectedCropCategory] = useState<string>('rice');
  const [sortField, setSortField] = useState<'production' | 'yield' | 'area' | 'name'>('production');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [tableSearch, setTableSearch] = useState<string>('');

  const activeCropCluster = CROP_TOP_STATES[selectedCropCategory] || CROP_TOP_STATES['rice'];

  // National Production Total Calculation
  const totalNationalProduction = useMemo(() => {
    return STATES_AND_UTS_DATA.reduce((acc, s) => acc + s.totalProductionMillionTonnes, 0);
  }, []);

  // Sorted and filtered table rows
  const tableData = useMemo(() => {
    return STATES_AND_UTS_DATA
      .filter((s) => {
        if (!tableSearch) return true;
        const q = tableSearch.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.capital.toLowerCase().includes(q) ||
          s.majorCrops.some((c) => c.toLowerCase().includes(q))
        );
      })
      .map((s) => ({
        id: s.id,
        name: s.name,
        type: s.type,
        zone: s.zone,
        production: s.totalProductionMillionTonnes,
        yield: s.avgYieldKgPerHa,
        area: s.cultivatedAreaLakhHa,
        share: ((s.totalProductionMillionTonnes / totalNationalProduction) * 100).toFixed(1),
        majorCrops: s.majorCrops.slice(0, 3).join(', ')
      }))
      .sort((a, b) => {
        const factor = sortOrder === 'desc' ? -1 : 1;
        if (sortField === 'name') return a.name.localeCompare(b.name) * factor;
        return (a[sortField] - b[sortField]) * factor;
      });
  }, [tableSearch, sortField, sortOrder, totalNationalProduction]);

  const handleSort = (field: 'production' | 'yield' | 'area' | 'name') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const handleExportCSV = () => {
    const exportRows = tableData.map((row) => ({
      'State / UT': row.name,
      'Administrative Type': row.type,
      'Geographic Zone': row.zone,
      'Total Production (Million Tonnes)': row.production,
      'Cultivated Area (Lakh Hectares)': row.area,
      'Average Productivity Yield (kg/ha)': row.yield,
      'National Contribution Share (%)': `${row.share}%`,
      'Primary Crops': row.majorCrops,
      'Data Source': 'DES & Ministry of Agriculture and Farmers Welfare (2023-24)'
    }));
    downloadCSV(exportRows, `AgriVision_Indian_Crop_Production_${new Date().toISOString().slice(0, 10)}`);
  };

  return (
    <div className="space-y-8">
      {/* Dashboard Title & Top Metrics */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <span>Production Analysis Dashboard</span>
            <span>·</span>
            <span>Directorate of Economics & Statistics (DES)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            National Agricultural Yield & Output Analytics
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Interactive multi-year production analytics across staple cereals, commercial cash crops, and horticultural yield distributions.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors shadow-2xs self-start md:self-auto cursor-pointer"
        >
          <Download className="w-4 h-4 text-emerald-800" />
          <span>Export All States Data (CSV)</span>
        </button>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-2xs">
          <span className="text-xs text-stone-500 font-medium block">Total National Foodgrains (23-24)</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
            332.3 <span className="text-sm font-normal text-stone-500">MT</span>
          </div>
          <div className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+0.8% YoY from 329.7 MT in 22-23</span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-2xs">
          <span className="text-xs text-stone-500 font-medium block">Total Cultivated Area</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
            1,302.8 <span className="text-sm font-normal text-stone-500">Lakh Ha</span>
          </div>
          <div className="text-[11px] text-stone-500 mt-1">Gross Cropped Area across all seasons</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-2xs">
          <span className="text-xs text-stone-500 font-medium block">National Average Productivity</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tabular-nums mt-1">
            2,551 <span className="text-sm font-normal text-stone-500">kg/ha</span>
          </div>
          <div className="text-[11px] text-stone-500 mt-1">Punjab leads with 4,420 kg/ha</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-2xs">
          <span className="text-xs text-stone-500 font-medium block">Seasonal Production Split</span>
          <div className="text-xl sm:text-2xl font-bold text-stone-900 tabular-nums mt-1">
            48.7% <span className="text-xs font-normal text-stone-500">Kharif</span> / 43% <span className="text-xs font-normal text-stone-500">Rabi</span>
          </div>
          <div className="text-[11px] text-stone-500 mt-1">Zaid season contributes 8.3%</div>
        </div>
      </div>

      {/* Row: Crop-Wise Top 10 States Comparison Chart */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              Top 10 Producing States by Crop
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Select a crop below to analyze state-wise output volumes and national contribution percentages.
            </p>
          </div>

          {/* Crop Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {Object.entries(CROP_TOP_STATES).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setSelectedCropCategory(key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCropCategory === key
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {item.cropName.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Crop National Summary Banner */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-stone-500">Selected Analysis:</span>{' '}
            <strong className="text-stone-900 font-bold">{activeCropCluster.cropName}</strong>
          </div>
          <div>
            <span className="text-stone-500">Estimated Total Harvest:</span>{' '}
            <strong className="text-emerald-800 font-bold font-mono tabular-nums">{activeCropCluster.nationalTotalTonnes}</strong>
          </div>
        </div>

        {/* Visual Horizontal Bar Chart of Top States */}
        <div className="space-y-3 pt-2">
          {activeCropCluster.topStates.map((st, index) => {
            const maxVal = activeCropCluster.topStates[0].production;
            const percentageWidth = Math.round((st.production / maxVal) * 100);

            return (
              <div key={st.state} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 text-stone-400 font-mono text-[11px] text-right">
                      #{index + 1}
                    </span>
                    <span className="font-semibold text-stone-800">{st.state}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-stone-500 text-[11px] hidden sm:inline">
                      Yield: <strong className="text-stone-700 font-mono">{st.yieldKgHa} kg/ha</strong>
                    </span>
                    <span className="font-bold text-stone-900 font-mono tabular-nums">
                      {st.production} {activeCropCluster.unit.includes('Bales') ? 'M.Bales' : 'MT'}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 w-12 text-right tabular-nums">
                      {st.sharePercentage}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-700 rounded-full transition-all duration-500"
                    style={{ width: `${percentageWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row: 6-Year Historical National Trends (2018-19 to 2023-24) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                National Foodgrain Output & Yield Growth Trajectory (2018-2024)
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Steadily expanding from 285.2 MT in 2018-19 to record 332.3 MT in 2023-24.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              +16.5% 6-Yr Growth
            </span>
          </div>

          {/* Multi-Year Trend Table & Visual Trend Bars */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 pt-3">
            {NATIONAL_HISTORICAL_TRENDS.map((t) => (
              <div key={t.year} className="bg-stone-50 p-3 rounded-xl border border-stone-200 flex flex-col justify-between text-center">
                <span className="text-xs font-semibold text-stone-500">{t.year}</span>
                <div className="my-2">
                  <div className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                    {t.totalFoodgrainProductionMT}
                  </div>
                  <span className="text-[10px] text-stone-400">Million Tonnes</span>
                </div>
                <div className="text-[11px] text-emerald-800 font-mono font-medium pt-2 border-t border-stone-200">
                  {t.averageNationalYieldKgHa} kg/ha
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-stone-500 pt-2 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-stone-400" />
            <span>Driver factors: Expansion in hybrid seeds, micro-irrigation subsidies, and PM-KISAN liquidity support.</span>
          </div>
        </div>

        {/* Seasonal Distribution Donut/Metric Breakdown */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-stone-900">Seasonal Output Share</h3>
            <p className="text-xs text-stone-500 mt-0.5">National agricultural calendar breakdown</p>

            <div className="mt-5 space-y-4">
              <div className="p-3.5 rounded-xl border border-emerald-100 bg-emerald-50/50">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-emerald-950 font-bold">Kharif Season (Monsoon)</strong>
                  <span className="font-mono font-bold text-emerald-900">48.7%</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-1">
                  Primary crops: Paddy, Cotton, Soybean, Bajra, Groundnut. Relies heavily on Southwest Monsoon rains.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-100 bg-amber-50/50">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-amber-950 font-bold">Rabi Season (Winter)</strong>
                  <span className="font-mono font-bold text-amber-900">43.0%</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-1">
                  Primary crops: Wheat, Mustard, Gram, Barley, Potato. Supported by canal, tubewell, and winter western disturbances.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-sky-100 bg-sky-50/50">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-sky-950 font-bold">Zaid Season (Summer)</strong>
                  <span className="font-mono font-bold text-sky-900">8.3%</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-1">
                  Primary crops: Summer Moong, Watermelon, Muskmelon, Vegetables, Fodder Maize. Grown in 60-day window.
                </p>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-stone-400 text-center pt-2 border-t border-stone-100">
            Source: DES Agricultural Statistics at a Glance
          </div>
        </div>
      </div>

      {/* Complete State-Wise Production & Yield Data Table */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              State-Wise Agricultural Production & Productivity Register
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Click column headers to sort by Output, Yield, or Cultivated Area. Search by state or crop.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                placeholder="Search table..."
                className="pl-8 pr-3 py-1.5 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV</span>
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase text-[10px] tracking-wider select-none">
              <tr>
                <th
                  onClick={() => handleSort('name')}
                  className="px-4 py-3 cursor-pointer hover:bg-stone-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>State / UT</span>
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th className="px-4 py-3">Zone</th>
                <th
                  onClick={() => handleSort('production')}
                  className="px-4 py-3 text-right cursor-pointer hover:bg-stone-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Output (Million Tonnes)</span>
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('area')}
                  className="px-4 py-3 text-right cursor-pointer hover:bg-stone-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Area (Lakh Ha)</span>
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('yield')}
                  className="px-4 py-3 text-right cursor-pointer hover:bg-stone-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Avg Yield (kg/ha)</span>
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th className="px-4 py-3 text-right">National Share (%)</th>
                <th className="px-4 py-3">Dominant Crops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-stone-50/70 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">
                    {row.name}
                    <span className="text-[10px] font-normal text-stone-400 ml-1.5">({row.type})</span>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{row.zone}</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-stone-900 tabular-nums">
                    {row.production} MT
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-stone-700 tabular-nums">
                    {row.area}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-800 tabular-nums">
                    {row.yield}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-medium text-stone-800 tabular-nums">
                    {row.share}%
                  </td>
                  <td className="px-4 py-3 text-stone-600 max-w-xs truncate">
                    {row.majorCrops}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-500 flex flex-wrap items-center justify-between gap-2">
          <span>Showing all {tableData.length} administrative entities.</span>
          <span>Reporting Period: 2023-24 Final Estimate Cycle</span>
        </div>
      </div>
    </div>
  );
};
