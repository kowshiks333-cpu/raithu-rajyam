import React, { useState, useMemo } from 'react';
import { Search, Sprout, ArrowRight, Calendar, Droplets, MapPin, Eye } from 'lucide-react';
import { CROPS_DATABASE, CropData } from '../data/cropsData';
import { CropDetailModal } from './CropDetailModal';

interface CropDatabaseSectionProps {
  onSelectState?: (stateName: string) => void;
  selectedCropIdFromExternal?: string | null;
}

export const CropDatabaseSection: React.FC<CropDatabaseSectionProps> = ({
  onSelectState,
  selectedCropIdFromExternal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [activeCrop, setActiveCrop] = useState<CropData | null>(null);

  React.useEffect(() => {
    if (selectedCropIdFromExternal) {
      const match = CROPS_DATABASE.find(
        (c) =>
          c.id === selectedCropIdFromExternal ||
          c.name.toLowerCase().includes(selectedCropIdFromExternal.toLowerCase())
      );
      if (match) setActiveCrop(match);
    }
  }, [selectedCropIdFromExternal]);

  const categories = [
    'All',
    'Food Crops',
    'Commercial Crops',
    'Horticultural Crops',
    'Plantation Crops'
  ];

  const filteredCrops = useMemo(() => {
    return CROPS_DATABASE.filter((crop) => {
      // Category filter
      if (selectedCategory !== 'All' && crop.category !== selectedCategory) {
        return false;
      }
      // Season filter
      if (selectedSeason !== 'All') {
        const matchesSeason = crop.seasons.some((s) => s.toLowerCase() === selectedSeason.toLowerCase());
        if (!matchesSeason) return false;
      }
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = crop.name.toLowerCase().includes(q) || crop.scientificName.toLowerCase().includes(q);
        const matchesVariety = crop.popularVarieties.some((v) => v.toLowerCase().includes(q));
        const matchesState = crop.suitableStates.some((st) => st.toLowerCase().includes(q));
        if (!matchesName && !matchesVariety && !matchesState) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSeason, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
          <span>Crop Information Database</span>
          <span>·</span>
          <span>ICAR & SAU Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Indian Agricultural Crop Encyclopedia
        </h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          Comprehensive database covering foodgrains, commercial fiber/sugar, fruits, vegetables, spices, and hill plantation crops with varieties, climatic thresholds, and pest protocols.
        </p>
      </div>

      {/* Interactive Category Tabs & Filters */}
      <div className="space-y-3">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-2xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Season Controls */}
        <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by crop, scientific name, cultivar, or suitable state..."
              className="w-full pl-9 pr-3 py-1.5 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div className="w-full sm:w-48">
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full px-3 py-1.5 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer"
            >
              <option value="All">All Growing Seasons</option>
              <option value="Kharif">Kharif (Monsoon)</option>
              <option value="Rabi">Rabi (Winter)</option>
              <option value="Zaid">Zaid (Summer)</option>
              <option value="Perennial">Perennial / Multi-Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Crop Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredCrops.map((crop) => (
          <div
            key={crop.id}
            onClick={() => setActiveCrop(crop)}
            className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Photo */}
              <div className="relative h-44 bg-stone-100 overflow-hidden">
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
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-semibold text-stone-800 bg-white/95 backdrop-blur-xs rounded shadow-2xs">
                  {crop.subcategory}
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 text-[10px] font-mono text-emerald-950 bg-emerald-300/90 rounded backdrop-blur-xs">
                  ~{crop.averageDurationDays} Days
                </div>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-800 transition-colors">
                    {crop.name}
                  </h3>
                  <p className="text-xs text-stone-500 italic mt-0.5 font-serif">
                    {crop.scientificName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-stone-100">
                  <div>
                    <span className="text-[10px] text-stone-400 block">Season</span>
                    <span className="font-medium text-stone-800">{crop.seasons.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block">Yield</span>
                    <span className="font-bold text-emerald-800 truncate block">{crop.expectedYieldPerHa}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-stone-400 block mb-1">Key Cultivars:</span>
                  <div className="flex flex-wrap gap-1">
                    {crop.popularVarieties.slice(0, 3).map((v) => (
                      <span key={v} className="text-[10px] bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded">
                        {v}
                      </span>
                    ))}
                    {crop.popularVarieties.length > 3 && (
                      <span className="text-[10px] text-stone-400">+{crop.popularVarieties.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-stone-600 line-clamp-2">
                  <span className="text-stone-400 font-medium">Suitable:</span> {crop.suitableStates.slice(0, 4).join(', ')}
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-800 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Agronomic Specs</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCrops.length === 0 && (
        <div className="p-12 text-center bg-white rounded-xl border border-stone-200">
          <Sprout className="w-8 h-8 text-stone-300 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-stone-700">No crops match your active filter</h3>
          <p className="text-xs text-stone-500 mt-1">Try resetting the category or clearing the search bar.</p>
        </div>
      )}

      {/* Crop Detail Modal */}
      <CropDetailModal
        crop={activeCrop}
        onClose={() => setActiveCrop(null)}
        onSelectState={onSelectState}
      />
    </div>
  );
};
