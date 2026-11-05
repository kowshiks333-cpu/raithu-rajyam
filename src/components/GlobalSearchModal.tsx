import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, Sprout, ArrowRight } from 'lucide-react';
import { STATES_AND_UTS_DATA } from '../data/statesData';
import { CROPS_DATABASE } from '../data/cropsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState: (stateId: string) => void;
  onSelectCrop: (cropId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectState,
  onSelectCrop
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedStates = q
    ? STATES_AND_UTS_DATA.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.capital.toLowerCase().includes(q) ||
          s.majorCrops.some((c) => c.toLowerCase().includes(q)) ||
          s.majorDistricts.some((d) => d.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  const matchedCrops = q
    ? CROPS_DATABASE.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.scientificName.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.popularVarieties.some((v) => v.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-stone-200 gap-3">
          <Search className="w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by state, crop, cultivar, or district (e.g., Punjab, Basmati, Cotton, Nashik)..."
            className="w-full text-stone-800 placeholder-stone-400 text-sm focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-stone-400 hover:text-stone-700 px-2 py-1 rounded bg-stone-100 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {!query ? (
            <div className="p-4 text-center text-xs text-stone-500">
              Type to search all 28 states, 8 union territories, cultivars, and crop production datasets.
            </div>
          ) : (
            <>
              {matchedStates.length === 0 && matchedCrops.length === 0 && (
                <div className="p-6 text-center text-xs text-stone-500">
                  No direct matches found for "{query}". Try searching "Rice", "Wheat", "Maharashtra", or "Cotton".
                </div>
              )}

              {matchedStates.length > 0 && (
                <div>
                  <div className="px-2 py-1 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    States & Union Territories ({matchedStates.length})
                  </div>
                  <div className="mt-1 space-y-1">
                    {matchedStates.map((state) => (
                      <div
                        key={state.id}
                        onClick={() => {
                          onSelectState(state.id);
                          onClose();
                        }}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer border border-transparent hover:border-stone-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-800 flex items-center justify-center">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-stone-900">
                              {state.name}
                            </div>
                            <div className="text-xs text-stone-500 flex items-center gap-2">
                              <span>Capital: {state.capital}</span>
                              <span>·</span>
                              <span>Zone: {state.zone}</span>
                              <span>·</span>
                              <span>Output: {state.totalProductionMillionTonnes} MT</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedCrops.length > 0 && (
                <div>
                  <div className="px-2 py-1 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Crops & Cultivars ({matchedCrops.length})
                  </div>
                  <div className="mt-1 space-y-1">
                    {matchedCrops.map((crop) => (
                      <div
                        key={crop.id}
                        onClick={() => {
                          onSelectCrop(crop.id);
                          onClose();
                        }}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer border border-transparent hover:border-stone-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-md bg-amber-50 text-amber-800 flex items-center justify-center">
                            <Sprout className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-stone-900">
                              {crop.name}
                            </div>
                            <div className="text-xs text-stone-500 flex items-center gap-2">
                              <span className="italic">{crop.scientificName}</span>
                              <span>·</span>
                              <span>{crop.category}</span>
                              <span>·</span>
                              <span>{crop.seasons.join(', ')}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
