import React, { useState } from 'react';
import { X, Printer, Download, CheckCircle2, FileText, Tractor, Landmark } from 'lucide-react';
import { STATES_AND_UTS_DATA, StateAgriData } from '../data/statesData';
import { NATIONAL_HISTORICAL_TRENDS, downloadCSV } from '../data/productionData';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [selectedTarget, setSelectedTarget] = useState<string>('national');

  if (!isOpen) return null;

  const selectedStateData =
    selectedTarget !== 'national'
      ? STATES_AND_UTS_DATA.find((s) => s.id === selectedTarget) || null
      : null;

  const handlePrint = () => {
    window.print();
  };

  const handleExportReportCSV = () => {
    if (selectedStateData) {
      const rows = selectedStateData.historicalTrends.map((t) => ({
        State: selectedStateData.name,
        Capital: selectedStateData.capital,
        Year: t.year,
        'Production (Million Tonnes)': t.productionMillionTonnes,
        'Cultivated Area (Lakh Ha)': t.areaLakhHa,
        'Yield (kg/ha)': t.yieldKgPerHa,
        'Major Crops': selectedStateData.majorCrops.join('; '),
        'Irrigation (%)': `${selectedStateData.irrigationPercentage}%`,
        'Rainfall (mm)': selectedStateData.rainfallMm,
        Source: 'Directorate of Economics & Statistics (DES)'
      }));
      downloadCSV(rows, `AgriVision_Report_${selectedStateData.name}_${new Date().toISOString().slice(0, 10)}`);
    } else {
      const rows = NATIONAL_HISTORICAL_TRENDS.map((t) => ({
        Year: t.year,
        'National Foodgrain Output (MT)': t.totalFoodgrainProductionMT,
        'Cultivated Area (Lakh Ha)': t.totalCultivatedAreaLakhHa,
        'Average National Yield (kg/ha)': t.averageNationalYieldKgHa,
        'Kharif Share (%)': `${t.kharifSharePercentage}%`,
        'Rabi Share (%)': `${t.rabiSharePercentage}%`,
        'Zaid Share (%)': `${t.zaidSharePercentage}%`,
        Source: 'Ministry of Agriculture and Farmers Welfare (DES)'
      }));
      downloadCSV(rows, `AgriVision_National_Agricultural_Report_${new Date().toISOString().slice(0, 10)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Controls Toolbar (Hidden when printed) */}
        <div className="p-4 bg-stone-900 text-white flex items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Agricultural Analysis Report Generator</h3>
              <p className="text-[11px] text-stone-300">Generate printable executive dossiers & datasets</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedTarget}
              onChange={(e) => setSelectedTarget(e.target.value)}
              className="px-3 py-1.5 text-xs text-stone-900 bg-white rounded-lg focus:outline-none font-medium cursor-pointer"
            >
              <option value="national">National Agricultural Overview</option>
              {STATES_AND_UTS_DATA.map((s) => (
                <option key={s.id} value={s.id}>{s.name} Dossier</option>
              ))}
            </select>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleExportReportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-8 bg-white text-stone-900">
          {/* Official Letterhead */}
          <div className="border-b-2 border-emerald-800 pb-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest">
                <Tractor className="w-4 h-4 text-emerald-700" />
                <span>Raithu Rajayam · Indian Agricultural Analysis System</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                {selectedStateData
                  ? `State Agricultural Intelligence Dossier: ${selectedStateData.name}`
                  : 'National Agricultural Crop Production Executive Report'}
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Grounded in data from Directorate of Economics & Statistics (DES) & Ministry of Agriculture and Farmers Welfare
              </p>
            </div>
            <div className="text-right text-xs text-stone-500">
              <div>Date Generated: <strong className="text-stone-800">{new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></div>
              <div>Report ID: <span className="font-mono">AGRI-REP-{selectedTarget.toUpperCase()}-2024</span></div>
              <div className="text-emerald-800 font-semibold mt-1">Final Advance Estimates Cycle</div>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-1">
              1. Executive Agricultural Summary
            </h2>
            <p className="text-xs text-stone-700 leading-relaxed">
              {selectedStateData ? (
                `The state of ${selectedStateData.name} located in the ${selectedStateData.zone} agricultural zone represents a gross cultivated footprint of ${selectedStateData.cultivatedAreaLakhHa} lakh hectares with an annual harvest output of ${selectedStateData.totalProductionMillionTonnes} million tonnes. Productivity stands at ${selectedStateData.avgYieldKgPerHa} kg/ha with ${selectedStateData.irrigationPercentage}% net irrigation coverage and average annual precipitation of ${selectedStateData.rainfallMm} mm.`
              ) : (
                'India achieved a record foodgrain production of 332.3 million tonnes during the 2023-24 crop year, demonstrating robust climate resilience against erratic monsoon onset. Cultivated area across all seasons spanned 1,302.8 lakh hectares with an average national productivity yield of 2,551 kg/ha. The seasonal contribution registered 48.7% for Kharif, 43.0% for Rabi, and 8.3% for Summer/Zaid.'
              )}
            </p>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                <span className="text-[10px] text-stone-500 block uppercase">
                  {selectedStateData ? 'Total Production' : 'Total Foodgrains'}
                </span>
                <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                  {selectedStateData ? `${selectedStateData.totalProductionMillionTonnes} MT` : '332.3 MT'}
                </span>
              </div>
              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                <span className="text-[10px] text-stone-500 block uppercase">Cultivated Area</span>
                <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                  {selectedStateData ? `${selectedStateData.cultivatedAreaLakhHa} L.Ha` : '1,302.8 L.Ha'}
                </span>
              </div>
              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                <span className="text-[10px] text-stone-500 block uppercase">Average Yield</span>
                <span className="text-lg font-bold text-emerald-800 font-mono tabular-nums">
                  {selectedStateData ? `${selectedStateData.avgYieldKgPerHa} kg/ha` : '2,551 kg/ha'}
                </span>
              </div>
              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                <span className="text-[10px] text-stone-500 block uppercase">
                  {selectedStateData ? 'Irrigation Net' : 'Kharif vs Rabi'}
                </span>
                <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                  {selectedStateData ? `${selectedStateData.irrigationPercentage}%` : '48.7% / 43%'}
                </span>
              </div>
            </div>
          </div>

          {/* Historical Dynamics Section */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-1">
              2. Multi-Year Production Trajectory (2018-19 to 2023-24)
            </h2>
            <div className="border border-stone-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="px-4 py-2.5">Crop Year</th>
                    <th className="px-4 py-2.5 text-right">Production (Million Tonnes)</th>
                    <th className="px-4 py-2.5 text-right">Cultivated Area (Lakh Ha)</th>
                    <th className="px-4 py-2.5 text-right">Yield (kg/ha)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-mono">
                  {(selectedStateData ? selectedStateData.historicalTrends : NATIONAL_HISTORICAL_TRENDS).map((row: any) => (
                    <tr key={row.year}>
                      <td className="px-4 py-2 font-sans font-medium text-stone-900">{row.year}</td>
                      <td className="px-4 py-2 text-right font-bold tabular-nums">
                        {row.productionMillionTonnes || row.totalFoodgrainProductionMT} MT
                      </td>
                      <td className="px-4 py-2 text-right tabular-nums">
                        {row.areaLakhHa || row.totalCultivatedAreaLakhHa}
                      </td>
                      <td className="px-4 py-2 text-right text-emerald-800 font-bold tabular-nums">
                        {row.yieldKgPerHa || row.averageNationalYieldKgHa}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Agronomic Particulars / Policy Interventions */}
          {selectedStateData && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-1">
                3. Agronomic Conditions & Interventions
              </h2>
              <div className="grid grid-cols-2 gap-4 text-xs text-stone-700">
                <div>
                  <strong className="text-stone-900 block mb-1">Major Cultivated Crops:</strong>
                  <p>{selectedStateData.majorCrops.join(', ')}</p>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-1">Dominant Soils:</strong>
                  <p>{selectedStateData.soilTypes.join(', ')}</p>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-1">Climatic Zone:</strong>
                  <p>{selectedStateData.climate}</p>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-1">Key Agricultural Districts:</strong>
                  <p>{selectedStateData.majorDistricts.join(', ')}</p>
                </div>
              </div>

              {selectedStateData.governmentSchemes.length > 0 && (
                <div className="pt-2">
                  <strong className="text-xs font-bold text-stone-900 block mb-1">
                    Flagship State Scheme:
                  </strong>
                  <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-lg text-xs text-emerald-950">
                    <span className="font-bold">{selectedStateData.governmentSchemes[0].name}: </span>
                    {selectedStateData.governmentSchemes[0].description}{' '}
                    <span className="font-semibold">(Impact: {selectedStateData.governmentSchemes[0].impact})</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Verification & Footnotes */}
          <div className="pt-6 border-t border-stone-200 text-[11px] text-stone-500 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Official Dataset Certification</span>
            </div>
            <p>
              Published by the Directorate of Economics & Statistics, Department of Agriculture & Farmers Welfare, Krishi Bhawan, New Delhi. Historical production numbers correspond to finalized crop estimates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
