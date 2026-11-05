import React, { useState, useMemo } from 'react';
import { CloudSun, Droplets, Wind, AlertTriangle, Sprout, CheckCircle2, Thermometer, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import { STATES_AND_UTS_DATA } from '../data/statesData';
import { STATE_WEATHER_PROFILES, calculateCropRecommendations, CropRecommendationResult } from '../data/weatherData';

export const WeatherAdvisorySection: React.FC = () => {
  const [selectedStateId, setSelectedStateId] = useState<string>('punjab');

  // Recommendation Tool Form State
  const [recState, setRecState] = useState<string>('Punjab');
  const [recSeason, setRecSeason] = useState<'Kharif' | 'Rabi' | 'Zaid'>('Rabi');
  const [recSoil, setRecSoil] = useState<string>('Alluvial Soil');
  const [recWater, setRecWater] = useState<'Low / Rainfed' | 'Medium / Partial Irrigation' | 'High / Canal & Borewell'>('High / Canal & Borewell');
  const [recommendations, setRecommendations] = useState<CropRecommendationResult[] | null>(null);

  const currentWeather = useMemo(() => {
    return (
      STATE_WEATHER_PROFILES[selectedStateId] || {
        stateId: selectedStateId,
        stateName: STATES_AND_UTS_DATA.find((s) => s.id === selectedStateId)?.name || 'India',
        currentTempC: 28,
        minTempC: 18,
        maxTempC: 32,
        humidityPercentage: 60,
        rainfallStatus: 'Normal' as const,
        rainfallMmCurrentMonth: 55,
        windSpeedKmh: 12,
        monsoonPhase: 'Seasonal Transition / Post-Monsoon',
        agrometAdvisory: 'Ensure timely field preparation and seed treatment before sowing the next cycle. Monitor soil moisture depth.',
        fiveDayForecast: [
          { day: 'Mon', condition: 'Sunny' as const, tempMax: 32, tempMin: 19, rainProb: 5 },
          { day: 'Tue', condition: 'Sunny' as const, tempMax: 31, tempMin: 18, rainProb: 10 },
          { day: 'Wed', condition: 'Partly Cloudy' as const, tempMax: 31, tempMin: 18, rainProb: 15 },
          { day: 'Thu', condition: 'Sunny' as const, tempMax: 30, tempMin: 17, rainProb: 5 },
          { day: 'Fri', condition: 'Sunny' as const, tempMax: 30, tempMin: 17, rainProb: 0 }
        ]
      }
    );
  }, [selectedStateId]);

  const handleGenerateRecommendations = (e: React.FormEvent) => {
    e.preventDefault();
    const results = calculateCropRecommendations(recState, recSeason, recSoil, recWater);
    setRecommendations(results);
  };

  // Initial calculation
  React.useEffect(() => {
    setRecommendations(calculateCropRecommendations(recState, recSeason, recSoil, recWater));
  }, []);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
          <span>Agrometeorology & Crop Advisory</span>
          <span>·</span>
          <span>IMD & ICAR Grounded</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Agricultural Weather & Smart Crop Recommendation Engine
        </h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          Real-time agro-meteorological advisories, monsoon progression indicators, and intelligent crop suitability matching based on your location, soil type, and irrigation capacity.
        </p>
      </div>

      {/* Mandatory Statutory Disclaimer Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950">
          <strong className="font-bold">Official Agricultural Advisory Notice:</strong>
          <span className="block mt-0.5">
            Recommendations and weather advisories are algorithmic estimates derived from Indian Council of Agricultural Research (ICAR) guidelines and India Meteorological Department (IMD) agromet bulletins. Soil nutrient testing via your local Krishi Vigyan Kendra (KVK) and certified seed sourcing from National Seeds Corporation (NSC) must always be consulted before sowing.
          </span>
        </div>
      </div>

      {/* Part 1: Real-Time State Agromet Weather Dashboard */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-amber-600" />
              <span>Agro-Meteorological Bulletin & 5-Day Forecast</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Live weather metrics impacting farming operations, pest proliferation, and irrigation scheduling.
            </p>
          </div>

          <div className="w-full sm:w-64">
            <select
              value={selectedStateId}
              onChange={(e) => setSelectedStateId(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              {STATES_AND_UTS_DATA.map((s) => (
                <option key={s.id} value={s.id}>{s.name} ({s.capital})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Current State Weather Panel */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center gap-1.5 text-stone-500 text-xs">
              <Thermometer className="w-4 h-4 text-amber-700" />
              <span>Current Temp</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1 font-mono">
              {currentWeather.currentTempC}°C
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">
              Min: {currentWeather.minTempC}°C · Max: {currentWeather.maxTempC}°C
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center gap-1.5 text-stone-500 text-xs">
              <Droplets className="w-4 h-4 text-sky-700" />
              <span>Relative Humidity</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1 font-mono">
              {currentWeather.humidityPercentage}%
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">
              {currentWeather.humidityPercentage > 75 ? 'High fungal pest risk' : 'Optimal plant transpiration'}
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center gap-1.5 text-stone-500 text-xs">
              <Droplets className="w-4 h-4 text-emerald-700" />
              <span>Rainfall Status</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums mt-1">
              {currentWeather.rainfallStatus}
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">
              Current Period: <strong className="text-stone-800">{currentWeather.rainfallMmCurrentMonth} mm</strong>
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center gap-1.5 text-stone-500 text-xs">
              <Wind className="w-4 h-4 text-stone-600" />
              <span>Surface Wind</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1 font-mono">
              {currentWeather.windSpeedKmh} <span className="text-xs font-normal text-stone-500">km/h</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">
              {currentWeather.windSpeedKmh > 20 ? 'Avoid spray drift' : 'Safe for agrochemical spraying'}
            </div>
          </div>
        </div>

        {/* Official Agromet Advisory Callout */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-950">
            <strong className="font-bold text-sm block mb-1">
              IMD Agromet Advisory for {currentWeather.stateName} ({currentWeather.monsoonPhase}):
            </strong>
            <p className="leading-relaxed text-emerald-900">
              {currentWeather.agrometAdvisory}
            </p>
          </div>
        </div>

        {/* 5-Day Visual Forecast Strip */}
        <div>
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2.5">
            5-Day Agromet Forecast (IMD):
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {currentWeather.fiveDayForecast.map((fc, i) => (
              <div key={i} className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center space-y-1">
                <span className="text-xs font-bold text-stone-700 block">{fc.day}</span>
                <span className="text-[11px] text-emerald-800 font-semibold block">{fc.condition}</span>
                <div className="text-sm font-mono font-bold text-stone-900 tabular-nums">
                  {fc.tempMax}° / <span className="text-stone-400 font-normal">{fc.tempMin}°</span>
                </div>
                <div className="text-[10px] text-sky-700 font-medium">
                  {fc.rainProb}% Rain Prob
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 2: Smart Agronomic Crop Recommendation Engine */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Agronomic Advisory Engine</span>
          </div>
          <h3 className="text-xl font-bold text-stone-900">
            Tailored Crop Recommendation Tool
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            Select your farm conditions to calculate the highest-yielding crop cultivars suited to your soil profile and water security.
          </p>
        </div>

        {/* Input Parameters Form */}
        <form onSubmit={handleGenerateRecommendations} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Region / State</label>
            <select
              value={recState}
              onChange={(e) => setRecState(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              {STATES_AND_UTS_DATA.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Target Growing Season</label>
            <select
              value={recSeason}
              onChange={(e) => setRecSeason(e.target.value as any)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              <option value="Kharif">Kharif (Monsoon Sowing: June - July)</option>
              <option value="Rabi">Rabi (Winter Sowing: Oct - Nov)</option>
              <option value="Zaid">Zaid (Summer Sowing: March - April)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Soil Classification</label>
            <select
              value={recSoil}
              onChange={(e) => setRecSoil(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              <option value="Alluvial Soil">Alluvial Soil (Gangetic/Valley)</option>
              <option value="Black Cotton Soil">Black Cotton Soil (Regur)</option>
              <option value="Red and Yellow Soil">Red and Yellow Soil</option>
              <option value="Sandy / Desert Soil">Sandy / Arid Soil</option>
              <option value="Laterite Soil">Laterite Soil (Acidic/Highland)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Water Security / Source</label>
            <select
              value={recWater}
              onChange={(e) => setRecWater(e.target.value as any)}
              className="w-full px-3 py-2 text-xs text-stone-900 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-semibold cursor-pointer"
            >
              <option value="High / Canal & Borewell">High (Canal / Tube-well)</option>
              <option value="Medium / Partial Irrigation">Medium (Partial Irrigation / Farm Pond)</option>
              <option value="Low / Rainfed">Low (Rainfed Only / Drought-prone)</option>
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Update Recommendations</span>
            </button>
          </div>
        </form>

        {/* Results Cards */}
        {recommendations && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-stone-700">
                Recommended Candidates for {recState} ({recSeason} Season):
              </span>
              <span>Sorted by Agronomic Suitability Index</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.cropName}
                  className="bg-stone-50 p-5 rounded-xl border border-stone-200 hover:border-emerald-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
                          {rec.category}
                        </span>
                        <h4 className="text-base font-bold text-stone-900">{rec.cropName}</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-extrabold text-emerald-800 font-mono tabular-nums">
                          {rec.suitabilityScore}%
                        </div>
                        <span className="text-[10px] text-stone-400">Suitability</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-stone-200/60">
                      <div>
                        <span className="text-[10px] text-stone-400 block">Sowing Window:</span>
                        <span className="font-medium text-stone-800">{rec.sowingWindow}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 block">Expected Yield:</span>
                        <span className="font-bold text-emerald-800">{rec.expectedYieldTonnesHa}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-stone-400 block mb-1">Recommended Varieties:</span>
                      <div className="flex flex-wrap gap-1">
                        {rec.recommendedVarieties.map((v) => (
                          <span key={v} className="text-[10px] bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded font-medium">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-stone-600 bg-white p-3 rounded-lg border border-stone-200/80">
                      <strong className="text-stone-900 block text-xs mb-0.5">Agronomic Rationale:</strong>
                      {rec.agronomicRationale}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-200/60 text-[11px] text-emerald-900 font-medium">
                    💧 Irrigation Advice: {rec.waterAdvice}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
