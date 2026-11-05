export interface WeatherProfile {
  stateId: string;
  stateName: string;
  currentTempC: number;
  minTempC: number;
  maxTempC: number;
  humidityPercentage: number;
  rainfallStatus: 'Deficit' | 'Normal' | 'Excess' | 'Scanty' | 'Active Northeast Monsoon';
  rainfallMmCurrentMonth: number;
  windSpeedKmh: number;
  monsoonPhase: string;
  agrometAdvisory: string;
  fiveDayForecast: {
    day: string;
    condition: 'Sunny' | 'Partly Cloudy' | 'Scattered Showers' | 'Heavy Rain' | 'Thunderstorm';
    tempMax: number;
    tempMin: number;
    rainProb: number;
  }[];
}

export const STATE_WEATHER_PROFILES: { [stateId: string]: WeatherProfile } = {
  'punjab': {
    stateId: 'punjab',
    stateName: 'Punjab',
    currentTempC: 28,
    minTempC: 17,
    maxTempC: 31,
    humidityPercentage: 54,
    rainfallStatus: 'Normal',
    rainfallMmCurrentMonth: 42,
    windSpeedKmh: 11,
    monsoonPhase: 'Post-Monsoon Transition / Early Rabi Field Prep',
    agrometAdvisory: 'Optimal window for pre-sowing irrigation (Rauni) for timely sown wheat varieties (HD 3086, DBW 187). Keep harvesting paddy at 14% grain moisture and utilize Happy Seeder for zero-till wheat sowing.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Sunny', tempMax: 31, tempMin: 18, rainProb: 5 },
      { day: 'Tue', condition: 'Sunny', tempMax: 30, tempMin: 17, rainProb: 0 },
      { day: 'Wed', condition: 'Partly Cloudy', tempMax: 30, tempMin: 17, rainProb: 10 },
      { day: 'Thu', condition: 'Sunny', tempMax: 29, tempMin: 16, rainProb: 0 },
      { day: 'Fri', condition: 'Sunny', tempMax: 29, tempMin: 16, rainProb: 5 }
    ]
  },
  'uttar-pradesh': {
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    currentTempC: 30,
    minTempC: 19,
    maxTempC: 33,
    humidityPercentage: 62,
    rainfallStatus: 'Normal',
    rainfallMmCurrentMonth: 58,
    windSpeedKmh: 9,
    monsoonPhase: 'Autumn Transition / Kharif Harvest',
    agrometAdvisory: 'Complete harvesting of early rice and autumn sugarcane planting with trench system. Apply Trichoderma viride enriched FYM to potato fields before tuber planting to check soil-borne fungal rots.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Sunny', tempMax: 33, tempMin: 20, rainProb: 10 },
      { day: 'Tue', condition: 'Partly Cloudy', tempMax: 32, tempMin: 19, rainProb: 15 },
      { day: 'Wed', condition: 'Sunny', tempMax: 32, tempMin: 19, rainProb: 5 },
      { day: 'Thu', condition: 'Sunny', tempMax: 31, tempMin: 18, rainProb: 0 },
      { day: 'Fri', condition: 'Sunny', tempMax: 31, tempMin: 18, rainProb: 0 }
    ]
  },
  'madhya-pradesh': {
    stateId: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    currentTempC: 29,
    minTempC: 18,
    maxTempC: 32,
    humidityPercentage: 58,
    rainfallStatus: 'Normal',
    rainfallMmCurrentMonth: 65,
    windSpeedKmh: 12,
    monsoonPhase: 'Post-Monsoon / Gram & Wheat Sowing Prep',
    agrometAdvisory: 'Conserve residual soil moisture after soybean thrashing for dry sowing of chickpea (JG 11, JAKI 9218). In mustard fields, ensure seed treatment with metalaxyl for white rust protection.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Sunny', tempMax: 32, tempMin: 19, rainProb: 0 },
      { day: 'Tue', condition: 'Sunny', tempMax: 31, tempMin: 18, rainProb: 5 },
      { day: 'Wed', condition: 'Partly Cloudy', tempMax: 31, tempMin: 18, rainProb: 10 },
      { day: 'Thu', condition: 'Sunny', tempMax: 30, tempMin: 17, rainProb: 0 },
      { day: 'Fri', condition: 'Sunny', tempMax: 30, tempMin: 17, rainProb: 0 }
    ]
  },
  'maharashtra': {
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    currentTempC: 31,
    minTempC: 21,
    maxTempC: 34,
    humidityPercentage: 66,
    rainfallStatus: 'Normal',
    rainfallMmCurrentMonth: 82,
    windSpeedKmh: 14,
    monsoonPhase: 'Retreating Monsoon / Rabi Sowing',
    agrometAdvisory: 'Sow Rabi Jowar (Maldandi) under conserved black soil moisture. Install yellow sticky traps and pheromone lures in cotton fields against pink bollworm. Prune wine and table grapes in Nashik region.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Partly Cloudy', tempMax: 34, tempMin: 22, rainProb: 20 },
      { day: 'Tue', condition: 'Scattered Showers', tempMax: 33, tempMin: 21, rainProb: 40 },
      { day: 'Wed', condition: 'Sunny', tempMax: 33, tempMin: 21, rainProb: 10 },
      { day: 'Thu', condition: 'Sunny', tempMax: 34, tempMin: 20, rainProb: 5 },
      { day: 'Fri', condition: 'Sunny', tempMax: 34, tempMin: 20, rainProb: 0 }
    ]
  },
  'rajasthan': {
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    currentTempC: 32,
    minTempC: 17,
    maxTempC: 35,
    humidityPercentage: 38,
    rainfallStatus: 'Normal',
    rainfallMmCurrentMonth: 24,
    windSpeedKmh: 15,
    monsoonPhase: 'Dry Post-Monsoon / Mustard Sowing Peak',
    agrometAdvisory: 'Peak recommended sowing time for Mustard (Giriraj, RH 749) and Taramira. Apply 20 kg Sulphur per hectare with basal fertilizer to boost seed oil concentration. Harvest Bajra and Guar without delay.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Sunny', tempMax: 35, tempMin: 18, rainProb: 0 },
      { day: 'Tue', condition: 'Sunny', tempMax: 34, tempMin: 17, rainProb: 0 },
      { day: 'Wed', condition: 'Sunny', tempMax: 34, tempMin: 17, rainProb: 0 },
      { day: 'Thu', condition: 'Sunny', tempMax: 33, tempMin: 16, rainProb: 0 },
      { day: 'Fri', condition: 'Sunny', tempMax: 33, tempMin: 16, rainProb: 0 }
    ]
  },
  'west-bengal': {
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    currentTempC: 29,
    minTempC: 22,
    maxTempC: 32,
    humidityPercentage: 78,
    rainfallStatus: 'Excess',
    rainfallMmCurrentMonth: 145,
    windSpeedKmh: 13,
    monsoonPhase: 'Late Kharif Flowering to Maturity',
    agrometAdvisory: 'Maintain shallow water level in Aman paddy during grain filling. Keep drainage channels open in vegetable and potato fields to avert water stagnation from retreating cyclonic rain spells.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Scattered Showers', tempMax: 32, tempMin: 23, rainProb: 45 },
      { day: 'Tue', condition: 'Partly Cloudy', tempMax: 31, tempMin: 22, rainProb: 30 },
      { day: 'Wed', condition: 'Sunny', tempMax: 32, tempMin: 22, rainProb: 15 },
      { day: 'Thu', condition: 'Sunny', tempMax: 32, tempMin: 21, rainProb: 10 },
      { day: 'Fri', condition: 'Sunny', tempMax: 31, tempMin: 21, rainProb: 10 }
    ]
  },
  'tamil-nadu': {
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    currentTempC: 30,
    minTempC: 24,
    maxTempC: 33,
    humidityPercentage: 81,
    rainfallStatus: 'Active Northeast Monsoon',
    rainfallMmCurrentMonth: 210,
    windSpeedKmh: 18,
    monsoonPhase: 'Active Northeast Monsoon (NEM)',
    agrometAdvisory: 'Samba paddy fields require strict drainage maintenance to prevent seedling submergence. Apply split dose of urea and potash after heavy showers subside. Stake banana crops to resist gusty coastal winds.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Heavy Rain', tempMax: 31, tempMin: 24, rainProb: 80 },
      { day: 'Tue', condition: 'Thunderstorm', tempMax: 30, tempMin: 24, rainProb: 75 },
      { day: 'Wed', condition: 'Scattered Showers', tempMax: 31, tempMin: 23, rainProb: 50 },
      { day: 'Thu', condition: 'Partly Cloudy', tempMax: 32, tempMin: 24, rainProb: 30 },
      { day: 'Fri', condition: 'Scattered Showers', tempMax: 31, tempMin: 23, rainProb: 45 }
    ]
  },
  'kerala': {
    stateId: 'kerala',
    stateName: 'Kerala',
    currentTempC: 28,
    minTempC: 23,
    maxTempC: 31,
    humidityPercentage: 86,
    rainfallStatus: 'Excess',
    rainfallMmCurrentMonth: 230,
    windSpeedKmh: 14,
    monsoonPhase: 'Northeast Monsoon / Mundakan Season',
    agrometAdvisory: 'Spray 1% Bordeaux mixture on rubber trees and black pepper vines to prevent fungal quick wilt. In Kuttanad polders, monitor bund stability and maintain drainage pumps for Mundakan paddy.',
    fiveDayForecast: [
      { day: 'Mon', condition: 'Scattered Showers', tempMax: 30, tempMin: 23, rainProb: 65 },
      { day: 'Tue', condition: 'Scattered Showers', tempMax: 31, tempMin: 23, rainProb: 55 },
      { day: 'Wed', condition: 'Partly Cloudy', tempMax: 31, tempMin: 22, rainProb: 35 },
      { day: 'Thu', condition: 'Sunny', tempMax: 32, tempMin: 23, rainProb: 20 },
      { day: 'Fri', condition: 'Scattered Showers', tempMax: 30, tempMin: 23, rainProb: 40 }
    ]
  }
};

export interface CropRecommendationResult {
  cropName: string;
  category: string;
  suitabilityScore: number; // 0 to 100
  recommendedVarieties: string[];
  expectedYieldTonnesHa: string;
  sowingWindow: string;
  agronomicRationale: string;
  waterAdvice: string;
}

export function calculateCropRecommendations(
  stateName: string,
  season: 'Kharif' | 'Rabi' | 'Zaid',
  soilType: string,
  waterAvailability: 'Low / Rainfed' | 'Medium / Partial Irrigation' | 'High / Canal & Borewell'
): CropRecommendationResult[] {
  const recommendations: CropRecommendationResult[] = [];

  if (season === 'Kharif') {
    if (waterAvailability === 'High / Canal & Borewell') {
      recommendations.push({
        cropName: 'Rice (Paddy - High Yield)',
        category: 'Food Crop',
        suitabilityScore: 94,
        recommendedVarieties: ['Pusa Basmati 1121', 'PR 126', 'MTU 1010', 'Swarna'],
        expectedYieldTonnesHa: '4.5 - 6.2 tonnes/ha',
        sowingWindow: 'June 15 - July 15',
        agronomicRationale: 'Rich water availability and summer warmth provide ideal thermal summation for panicle branching.',
        waterAdvice: 'Adopt Alternate Wetting & Drying (AWD) after initial 2 weeks of standing water.'
      });
      recommendations.push({
        cropName: 'Sugarcane (Autumn/Spring)',
        category: 'Commercial Crop',
        suitabilityScore: 88,
        recommendedVarieties: ['Co 0238', 'Co 86032', 'Co 0118'],
        expectedYieldTonnesHa: '85 - 110 tonnes/ha',
        sowingWindow: 'July - August (Adsali) or Oct',
        agronomicRationale: 'Long duration crop thrives with assured canal water, producing high cane girth and pol recovery.',
        waterAdvice: 'Drip fertigation recommended to conserve 45% water.'
      });
    }

    if (soilType.toLowerCase().includes('black') || soilType.toLowerCase().includes('loam')) {
      recommendations.push({
        cropName: 'Cotton (Bt Hybrids)',
        category: 'Commercial Crop',
        suitabilityScore: 91,
        recommendedVarieties: ['RCH 689 Bt', 'Ajit 155 Bt', 'Mallika'],
        expectedYieldTonnesHa: '2.2 - 3.2 tonnes/ha',
        sowingWindow: 'June - July (onset of rains)',
        agronomicRationale: 'Deep moisture-retentive black soil supports continuous boll filling even in mid-season dry spells.',
        waterAdvice: 'Ridge and furrow planting avoids root stagnation during sudden downpours.'
      });
      recommendations.push({
        cropName: 'Soybean',
        category: 'Commercial Oilseed',
        suitabilityScore: 86,
        recommendedVarieties: ['JS 20-34', 'JS 95-60', 'NRC 86'],
        expectedYieldTonnesHa: '1.8 - 2.5 tonnes/ha',
        sowingWindow: 'June 20 - July 10',
        agronomicRationale: 'Nitrogen-fixing legume enriches soil while yielding high protein and oil content.',
        waterAdvice: 'Rainfed; requires drainage channels on heavy soils.'
      });
    }

    if (waterAvailability === 'Low / Rainfed' || soilType.toLowerCase().includes('sand') || soilType.toLowerCase().includes('arid')) {
      recommendations.push({
        cropName: 'Pearl Millet (Bajra)',
        category: 'Nutri-Cereal',
        suitabilityScore: 95,
        recommendedVarieties: ['HHB 67 Improved', 'RHB 173', 'MP 7792'],
        expectedYieldTonnesHa: '2.0 - 3.2 tonnes/ha',
        sowingWindow: 'July 1 - July 20',
        agronomicRationale: 'Exceptional drought tolerance and short 80-day growth cycle ensures harvest before moisture depletion.',
        waterAdvice: 'Conserves moisture through deep taproots; minimal water requirement.'
      });
      recommendations.push({
        cropName: 'Pigeonpea / Tur (Arhar)',
        category: 'Pulse',
        suitabilityScore: 85,
        recommendedVarieties: ['BSMR 736', 'GRG 811', 'Asha'],
        expectedYieldTonnesHa: '1.4 - 2.0 tonnes/ha',
        sowingWindow: 'June - July',
        agronomicRationale: 'Deep rooting system breaks hardpans and sustains green foliage through dry autumn.',
        waterAdvice: 'One protective irrigation at podding boosts yield significantly.'
      });
    }
  } else if (season === 'Rabi') {
    if (waterAvailability !== 'Low / Rainfed') {
      recommendations.push({
        cropName: 'Wheat (High Productivity)',
        category: 'Food Crop',
        suitabilityScore: 96,
        recommendedVarieties: ['DBW 187 (Karan Vandana)', 'HD 3086', 'DBW 303', 'PBW 725'],
        expectedYieldTonnesHa: '4.8 - 6.2 tonnes/ha',
        sowingWindow: 'November 1 - November 20',
        agronomicRationale: 'Optimal temperature match for tillering and grain filling with cool northern winters.',
        waterAdvice: 'Requires 4-5 irrigations; CRI stage at 21 days is non-negotiable.'
      });
      recommendations.push({
        cropName: 'Potato',
        category: 'Horticulture / Cash Crop',
        suitabilityScore: 89,
        recommendedVarieties: ['Kufri Pukhraj', 'Kufri Jyoti', 'Kufri Chipsona'],
        expectedYieldTonnesHa: '28 - 36 tonnes/ha',
        sowingWindow: 'October 15 - November 5',
        agronomicRationale: 'Loose loamy soil and crisp winter nights stimulate rapid tuber bulking.',
        waterAdvice: 'Light frequent irrigations; do not submerge ridges.'
      });
    }

    recommendations.push({
      cropName: 'Mustard / Rapeseed',
      category: 'Oilseed',
      suitabilityScore: 92,
      recommendedVarieties: ['Giriraj (DRMRIJ 31)', 'RH 749', 'Pusa Bold'],
      expectedYieldTonnesHa: '2.0 - 2.8 tonnes/ha',
      sowingWindow: 'October 10 - October 25',
      agronomicRationale: 'Low water requirement (only 2 irrigations) and high commercial oil value.',
      waterAdvice: 'Irrigate at flowering and siliqua development stages.'
    });

    recommendations.push({
      cropName: 'Gram / Chickpea',
      category: 'Pulse',
      suitabilityScore: 90,
      recommendedVarieties: ['JAKI 9218', 'JG 11', 'RVG 202'],
      expectedYieldTonnesHa: '1.6 - 2.4 tonnes/ha',
      sowingWindow: 'October 20 - November 10',
      agronomicRationale: 'Excellent utilization of residual moisture; fixes soil nitrogen.',
      waterAdvice: 'Intolerant to excess irrigation; requires dry cool weather.'
    });
  } else {
    // Zaid
    recommendations.push({
      cropName: 'Summer Greengram (Moong)',
      category: 'Short Duration Pulse',
      suitabilityScore: 95,
      recommendedVarieties: ['IPM 02-3', 'Samrat', 'Virat', 'SML 668'],
      expectedYieldTonnesHa: '1.0 - 1.5 tonnes/ha',
      sowingWindow: 'March 15 - April 10',
      agronomicRationale: 'Matures in 60-65 days; utilizes post-wheat fallow window without delaying Kharif paddy.',
      waterAdvice: 'Requires 3-4 light irrigations.'
    });
    recommendations.push({
      cropName: 'Cucurbits (Watermelon & Muskmelon)',
      category: 'Horticulture',
      suitabilityScore: 90,
      recommendedVarieties: ['Sugar Baby', 'Arka Manik', 'Kajri'],
      expectedYieldTonnesHa: '20 - 30 tonnes/ha',
      sowingWindow: 'February - March',
      agronomicRationale: 'High market demand during summer peaks; thrives in riverine and alluvial soils.',
      waterAdvice: 'Drip irrigation with silver-black mulch.'
    });
  }

  return recommendations;
}
