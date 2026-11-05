import React, { useState, useMemo, useEffect } from 'react';
import {
  FileSpreadsheet,
  Download,
  Search,
  Filter,
  RefreshCw,
  Plus,
  Calendar,
  Clock,
  User,
  Wheat,
  Tractor,
  Layers,
  MapPin,
  CheckCircle2,
  X,
  FileDown,
  Sparkles,
  Phone
} from 'lucide-react';
import { FarmerLoginRecord, FarmerCategory } from '../types/farmerDatabase';
import {
  getStoredFarmerLogins,
  saveFarmerLogins,
  exportToExcelFile,
  exportToExcelCSV,
  recordFarmerLogin
} from '../services/farmerDatabaseService';
import { STATES_AND_UTS_DATA } from '../data/statesData';

interface FarmerDatabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEmbedded?: boolean; // When rendered inline as a main section
}

export const FarmerDatabaseModal: React.FC<FarmerDatabaseModalProps> = ({
  isOpen,
  onClose,
  isEmbedded = false
}) => {
  const [records, setRecords] = useState<FarmerLoginRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCrop, setSelectedCrop] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // New Record Form State
  const [newFarmerName, setNewFarmerName] = useState('');
  const [newMobile, setNewMobile] = useState('');
  const [newFarmerType, setNewFarmerType] = useState<FarmerCategory>('Small Farmer (2.5 - 5 Acres)');
  const [newCrops, setNewCrops] = useState('Rice (Paddy), Cotton');
  const [newAcres, setNewAcres] = useState('4.0');
  const [newState, setNewState] = useState('Andhra Pradesh');
  const [newDistrict, setNewDistrict] = useState('Guntur');
  const [newPractice, setNewPractice] = useState<FarmerLoginRecord['farmingPractice']>('Mechanized / Drip');
  const [newSeason, setNewSeason] = useState('Kharif 2024-25');

  // Load records
  const loadRecords = () => {
    const list = getStoredFarmerLogins();
    setRecords(list);
  };

  useEffect(() => {
    if (isOpen || isEmbedded) {
      loadRecords();
    }
  }, [isOpen, isEmbedded]);

  // Derived filter options
  const allCrops = useMemo(() => {
    const cropSet = new Set<string>();
    records.forEach((r) => {
      r.cropList?.forEach((c) => cropSet.add(c));
      r.cropsCultivating?.split(',').forEach((c) => {
        const trimmed = c.trim();
        if (trimmed) cropSet.add(trimmed);
      });
    });
    return Array.from(cropSet).sort();
  }, [records]);

  const allStates = useMemo(() => {
    const stateSet = new Set<string>();
    records.forEach((r) => {
      if (r.state) stateSet.add(r.state);
    });
    return Array.from(stateSet).sort();
  }, [records]);

  // Filtered records
  const filteredRecords = useMemo(() => {
    return records.filter((r) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        r.farmerName.toLowerCase().includes(q) ||
        r.mobile.includes(q) ||
        r.kisanId.toLowerCase().includes(q) ||
        r.district.toLowerCase().includes(q) ||
        r.cropsCultivating.toLowerCase().includes(q) ||
        r.farmerType.toLowerCase().includes(q);

      const matchesType =
        selectedType === 'all' ||
        r.farmerType.toLowerCase().includes(selectedType.toLowerCase());

      const matchesCrop =
        selectedCrop === 'all' ||
        r.cropsCultivating.toLowerCase().includes(selectedCrop.toLowerCase());

      const matchesState =
        selectedState === 'all' ||
        r.state.toLowerCase() === selectedState.toLowerCase();

      return matchesSearch && matchesType && matchesCrop && matchesState;
    });
  }, [records, searchQuery, selectedType, selectedCrop, selectedState]);

  // Summary statistics
  const stats = useMemo(() => {
    const totalLogins = records.length;
    const smallAndMarginal = records.filter(
      (r) =>
        r.farmerType.includes('Marginal') ||
        r.farmerType.includes('Small') ||
        r.farmerType.includes('Tenant')
    ).length;
    const totalLandholding = records.reduce((sum, r) => sum + (r.landholdingAcres || 0), 0);
    const activeSessions = records.filter((r) => r.sessionStatus === 'Active Now').length;

    return {
      totalLogins,
      smallAndMarginal,
      smallAndMarginalPct: totalLogins > 0 ? Math.round((smallAndMarginal / totalLogins) * 100) : 0,
      totalLandholding: Math.round(totalLandholding * 10) / 10,
      activeSessions
    };
  }, [records]);

  const handleDownloadExcel = () => {
    exportToExcelFile(filteredRecords, 'Raithu_Rajayam_Farmers_Login_Ledger');
    setDownloadSuccess('Microsoft Excel (.xlsx) file downloaded successfully!');
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const handleDownloadCSV = () => {
    exportToExcelCSV(filteredRecords, 'Raithu_Rajayam_Farmers_Login_Ledger');
    setDownloadSuccess('Excel-compatible CSV (.csv) file downloaded successfully!');
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const handleAddNewFarmer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFarmerName.trim()) return;

    const dummyUser = {
      id: `manual-${Date.now()}`,
      name: newFarmerName.trim(),
      mobile: newMobile || '9848011223',
      kisanId: `RR-RAI-${Math.floor(1000 + Math.random() * 9000)}`,
      role: 'Raithu (Farmer)' as const,
      state: newState,
      district: newDistrict,
      landholdingAcres: parseFloat(newAcres) || 0,
      primaryCrops: newCrops.split(',').map((c) => c.trim()).filter(Boolean),
      joinedDate: new Date().toISOString().slice(0, 10)
    };

    recordFarmerLogin(dummyUser, {
      farmerType: newFarmerType,
      cropsCultivating: newCrops,
      farmingPractice: newPractice,
      season: newSeason
    });

    loadRecords();
    setShowAddModal(false);
    setNewFarmerName('');
    setNewMobile('');
  };

  if (!isOpen && !isEmbedded) return null;

  const content = (
    <div className="space-y-6">
      {/* Top Banner & Excel CTA */}
      <div className="bg-gradient-to-r from-emerald-900 via-green-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden border border-emerald-800/80">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <Tractor className="w-3.5 h-3.5" />
              <span>Raithu Rajayam Database</span>
              <span className="text-emerald-400">·</span>
              <span>Live Login Ledger</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Farmer Login Database & Excel Ledger
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Every authenticated farmer session is tracked with real-time <strong>Date & Time</strong>, <strong>Farmer Classification</strong> (Marginal, Small, Medium, Large, Tenant), and <strong>Crops Currently Cultivated</strong>. Export complete records directly to Excel.
            </p>
          </div>

          {/* Action Buttons for Excel */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <button
              onClick={handleDownloadExcel}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-950" />
              <span>Download Excel Sheet (.xlsx)</span>
            </button>

            <button
              onClick={handleDownloadCSV}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer"
              title="Download Excel-ready CSV with UTF-8 encoding"
            >
              <FileDown className="w-4 h-4 text-emerald-300" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="mt-4 p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-emerald-200 text-xs flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Total Logged Sessions</span>
            <User className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-stone-900">{stats.totalLogins}</div>
          <div className="text-[11px] text-emerald-700 mt-1 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{stats.activeSessions} active currently</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Small & Marginal</span>
            <Layers className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-stone-900">{stats.smallAndMarginal}</div>
          <div className="text-[11px] text-stone-500 mt-1 font-medium">
            <strong>{stats.smallAndMarginalPct}%</strong> of registered cultivators
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Cultivated Area</span>
            <Wheat className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-stone-900">{stats.totalLandholding} <span className="text-xs font-semibold text-stone-500">Acres</span></div>
          <div className="text-[11px] text-stone-500 mt-1 font-medium">
            Across {allStates.length} Indian States
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Top Cultivated Crops</span>
            <Tractor className="w-4 h-4 text-green-700" />
          </div>
          <div className="text-sm font-bold text-stone-900 truncate">
            Rice, Cotton, Chili, Wheat
          </div>
          <div className="text-[11px] text-emerald-800 font-semibold mt-1">
            {allCrops.length} Distinct crop varieties logged
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by farmer name, Kisan ID, mobile, district, or crop..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 text-stone-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Log Farmer Session</span>
            </button>

            <button
              onClick={loadRecords}
              title="Refresh ledger"
              className="p-2 text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-stone-100 text-xs">
          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
              Filter by Farmer Type:
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-md text-stone-800 focus:outline-none focus:border-emerald-600 cursor-pointer text-xs"
            >
              <option value="all">All Farmer Types ({records.length})</option>
              <option value="Marginal">Marginal Farmer (&lt; 2.5 Acres)</option>
              <option value="Small">Small Farmer (2.5 - 5 Acres)</option>
              <option value="Semi-Medium">Semi-Medium (5 - 10 Acres)</option>
              <option value="Medium">Medium Farmer (10 - 25 Acres)</option>
              <option value="Large">Large Commercial (&gt; 25 Acres)</option>
              <option value="Tenant">Tenant / Kowlu Raithu</option>
              <option value="Organic">Organic & Natural</option>
              <option value="Scientist">Agronomist / Scientist</option>
              <option value="Officer">Agricultural Officer</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
              Filter by Cultivating Crop:
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-md text-stone-800 focus:outline-none focus:border-emerald-600 cursor-pointer text-xs"
            >
              <option value="all">All Crops Cultivated</option>
              {allCrops.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
              Filter by State:
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-md text-stone-800 focus:outline-none focus:border-emerald-600 cursor-pointer text-xs"
            >
              <option value="all">All States</option>
              {allStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Database Table */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-2xs overflow-hidden">
        <div className="px-5 py-3.5 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900">Registered Farmer Sessions</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
              Showing {filteredRecords.length} of {records.length} records
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadExcel}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 hover:underline cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
              <span>Download Excel Table</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto max-h-[580px] overflow-y-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-stone-100/80 text-stone-700 font-bold border-b border-stone-200 sticky top-0 z-10 backdrop-blur-xs">
              <tr>
                <th className="py-3 px-3 w-10 text-center">#</th>
                <th className="py-3 px-3.5 min-w-[150px]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    <span>Time & Date</span>
                  </div>
                </th>
                <th className="py-3 px-3.5 min-w-[180px]">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-stone-400" />
                    <span>Farmer & Kisan ID</span>
                  </div>
                </th>
                <th className="py-3 px-3.5 min-w-[170px]">
                  <div className="flex items-center gap-1">
                    <Tractor className="w-3 h-3 text-stone-400" />
                    <span>Type of Farmer</span>
                  </div>
                </th>
                <th className="py-3 px-3.5 min-w-[200px]">
                  <div className="flex items-center gap-1">
                    <Wheat className="w-3 h-3 text-stone-400" />
                    <span>Crop Cultivating</span>
                  </div>
                </th>
                <th className="py-3 px-3.5 text-right min-w-[90px]">Land (Acres)</th>
                <th className="py-3 px-3.5 min-w-[150px]">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    <span>Location</span>
                  </div>
                </th>
                <th className="py-3 px-3.5 min-w-[110px] text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-stone-400">
                    <FileSpreadsheet className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                    <p className="font-medium text-stone-600">No farmer records match the selected filters.</p>
                    <p className="text-[11px] mt-1">Try clearing search terms or resetting filters.</p>
                  </td>
                </tr>
              ) : (
                filteredRecords.map((r, idx) => {
                  // Badges for farmer types
                  const isSmallOrMarginal =
                    r.farmerType.includes('Marginal') || r.farmerType.includes('Small');
                  const isTenant = r.farmerType.includes('Tenant');
                  const isLarge = r.farmerType.includes('Large') || r.farmerType.includes('Medium');
                  const isOrganic = r.farmerType.includes('Organic');
                  const isOfficial = r.farmerType.includes('Scientist') || r.farmerType.includes('Officer');

                  let badgeColor = 'bg-stone-100 text-stone-800 border-stone-200';
                  if (isSmallOrMarginal) badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                  else if (isTenant) badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
                  else if (isLarge) badgeColor = 'bg-blue-50 text-blue-800 border-blue-200';
                  else if (isOrganic) badgeColor = 'bg-green-50 text-green-800 border-green-200';
                  else if (isOfficial) badgeColor = 'bg-purple-50 text-purple-800 border-purple-200';

                  return (
                    <tr
                      key={r.id}
                      className="hover:bg-emerald-50/40 transition-colors group"
                    >
                      {/* S.No */}
                      <td className="py-3 px-3 text-center font-mono text-[11px] text-stone-400">
                        {idx + 1}
                      </td>

                      {/* Time & Date */}
                      <td className="py-3 px-3.5">
                        <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{r.loginTime}</span>
                        </div>
                        <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                          {r.loginDate}
                        </div>
                      </td>

                      {/* Farmer Name & Kisan ID */}
                      <td className="py-3 px-3.5">
                        <div className="font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                          {r.farmerName}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-stone-500 font-mono mt-0.5">
                          <span className="text-emerald-700 font-semibold">{r.kisanId}</span>
                          <span>·</span>
                          <span>+91 {r.mobile}</span>
                        </div>
                      </td>

                      {/* Type of Farmer */}
                      <td className="py-3 px-3.5">
                        <span className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-semibold border ${badgeColor}`}>
                          {r.farmerType}
                        </span>
                        {r.farmingPractice && (
                          <div className="text-[10px] text-stone-500 mt-0.5">
                            {r.farmingPractice}
                          </div>
                        )}
                      </td>

                      {/* Crop Cultivating */}
                      <td className="py-3 px-3.5">
                        <div className="font-semibold text-stone-800">
                          {r.cropsCultivating}
                        </div>
                        <div className="text-[10px] text-emerald-700 mt-0.5">
                          Season: {r.season}
                        </div>
                      </td>

                      {/* Landholding */}
                      <td className="py-3 px-3.5 text-right font-mono font-bold text-stone-800">
                        {r.landholdingAcres > 0 ? `${r.landholdingAcres} ac` : '—'}
                      </td>

                      {/* Location */}
                      <td className="py-3 px-3.5">
                        <div className="font-medium text-stone-900">{r.district}</div>
                        <div className="text-[11px] text-stone-500">{r.state}</div>
                      </td>

                      {/* Session Status */}
                      <td className="py-3 px-3.5 text-center">
                        {r.sessionStatus === 'Active Now' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800 border border-green-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-ping" />
                            <span>Active</span>
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-stone-100 text-stone-600">
                            {r.sessionStatus}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info strip */}
        <div className="px-5 py-3 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            Data ledger persists in local session storage and syncs across farmer logins.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadExcel}
              className="font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Download Full Excel (.xlsx)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Manual Add / Log Session Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Tractor className="w-5 h-5 text-emerald-700" />
                <h3 className="text-sm font-bold text-stone-900">Log New Farmer Session</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-md text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddNewFarmer} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 block mb-1">Farmer Full Name</label>
                <input
                  type="text"
                  required
                  value={newFarmerName}
                  onChange={(e) => setNewFarmerName(e.target.value)}
                  placeholder="e.g. Venkata Rao"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={newMobile}
                    onChange={(e) => setNewMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder="98480 12345"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Type of Farmer</label>
                  <select
                    value={newFarmerType}
                    onChange={(e) => setNewFarmerType(e.target.value as FarmerCategory)}
                    className="w-full px-2.5 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer text-xs"
                  >
                    <option value="Marginal Farmer (< 2.5 Acres)">Marginal (&lt; 2.5 Acres)</option>
                    <option value="Small Farmer (2.5 - 5 Acres)">Small (2.5 - 5 Acres)</option>
                    <option value="Semi-Medium Farmer (5 - 10 Acres)">Semi-Medium (5 - 10 Acres)</option>
                    <option value="Medium Farmer (10 - 25 Acres)">Medium (10 - 25 Acres)</option>
                    <option value="Large Commercial Farmer (> 25 Acres)">Large Commercial (&gt; 25 Acres)</option>
                    <option value="Tenant Farmer (Kowlu Raithu)">Tenant / Kowlu Raithu</option>
                    <option value="Organic & Natural Farming Practitioner">Organic Practitioner</option>
                    <option value="Agronomist / Research Scientist">Agronomist / Scientist</option>
                    <option value="Agricultural Officer / Inspector">Agricultural Officer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Crops Cultivating</label>
                <input
                  type="text"
                  required
                  value={newCrops}
                  onChange={(e) => setNewCrops(e.target.value)}
                  placeholder="e.g. Rice (Paddy), Cotton, Chili, Maize"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Land (Acres)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={newAcres}
                    onChange={(e) => setNewAcres(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Season</label>
                  <input
                    type="text"
                    value={newSeason}
                    onChange={(e) => setNewSeason(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">State</label>
                  <select
                    value={newState}
                    onChange={(e) => setNewState(e.target.value)}
                    className="w-full px-2.5 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer text-xs"
                  >
                    {STATES_AND_UTS_DATA.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">District</label>
                  <input
                    type="text"
                    value={newDistrict}
                    onChange={(e) => setNewDistrict(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg font-bold transition-colors cursor-pointer"
                >
                  Save & Record Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  // Modal mode overlay
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-stone-50 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-4 bg-emerald-950 text-white flex items-center justify-between border-b border-emerald-900 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
              <FileSpreadsheet className="w-4 h-4 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Farmer Login Database & Excel Ledger</h2>
              <p className="text-[11px] text-emerald-300">Raithu Rajayam Central Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadExcel}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-stone-950 font-bold text-xs hover:bg-emerald-400 cursor-pointer transition-colors shadow-xs"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Export Excel (.xlsx)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {content}
        </div>
      </div>
    </div>
  );
};
