export interface ProductionRecord {
  year: string;
  crop: string;
  category: 'Food Crops' | 'Commercial Crops' | 'Horticultural Crops' | 'Plantation Crops';
  state: string;
  cultivatedAreaLakhHa: number;
  productionQuantityMillionTonnes: number;
  yieldKgPerHa: number;
  season: 'Kharif' | 'Rabi' | 'Zaid' | 'Annual / Perennial';
  dataSource: string;
  reportingPeriod: string;
  dataUpdatedDate: string;
}

export interface NationalTrendPoint {
  year: string;
  totalFoodgrainProductionMT: number; // Million Tonnes
  totalCultivatedAreaLakhHa: number;
  averageNationalYieldKgHa: number;
  kharifSharePercentage: number;
  rabiSharePercentage: number;
  zaidSharePercentage: number;
}

export const NATIONAL_HISTORICAL_TRENDS: NationalTrendPoint[] = [
  {
    year: '2018-19',
    totalFoodgrainProductionMT: 285.2,
    totalCultivatedAreaLakhHa: 1245.0,
    averageNationalYieldKgHa: 2290,
    kharifSharePercentage: 50.4,
    rabiSharePercentage: 42.1,
    zaidSharePercentage: 7.5
  },
  {
    year: '2019-20',
    totalFoodgrainProductionMT: 297.5,
    totalCultivatedAreaLakhHa: 1256.4,
    averageNationalYieldKgHa: 2368,
    kharifSharePercentage: 49.8,
    rabiSharePercentage: 42.6,
    zaidSharePercentage: 7.6
  },
  {
    year: '2020-21',
    totalFoodgrainProductionMT: 310.7,
    totalCultivatedAreaLakhHa: 1271.2,
    averageNationalYieldKgHa: 2444,
    kharifSharePercentage: 49.5,
    rabiSharePercentage: 42.8,
    zaidSharePercentage: 7.7
  },
  {
    year: '2021-22',
    totalFoodgrainProductionMT: 315.6,
    totalCultivatedAreaLakhHa: 1280.5,
    averageNationalYieldKgHa: 2465,
    kharifSharePercentage: 48.9,
    rabiSharePercentage: 43.1,
    zaidSharePercentage: 8.0
  },
  {
    year: '2022-23',
    totalFoodgrainProductionMT: 329.7,
    totalCultivatedAreaLakhHa: 1294.2,
    averageNationalYieldKgHa: 2547,
    kharifSharePercentage: 49.1,
    rabiSharePercentage: 42.7,
    zaidSharePercentage: 8.2
  },
  {
    year: '2023-24',
    totalFoodgrainProductionMT: 332.3,
    totalCultivatedAreaLakhHa: 1302.8,
    averageNationalYieldKgHa: 2551,
    kharifSharePercentage: 48.7,
    rabiSharePercentage: 43.0,
    zaidSharePercentage: 8.3
  }
];

export const CROP_TOP_STATES: {
  [crop: string]: {
    cropName: string;
    nationalTotalTonnes: string;
    unit: string;
    topStates: { state: string; production: number; sharePercentage: number; yieldKgHa: number }[];
  };
} = {
  'rice': {
    cropName: 'Rice (Paddy)',
    nationalTotalTonnes: '135.7 Million Tonnes',
    unit: 'Million Tonnes',
    topStates: [
      { state: 'West Bengal', production: 16.8, sharePercentage: 12.4, yieldKgHa: 3045 },
      { state: 'Uttar Pradesh', production: 15.6, sharePercentage: 11.5, yieldKgHa: 2690 },
      { state: 'Punjab', production: 13.2, sharePercentage: 9.7, yieldKgHa: 4180 },
      { state: 'Telangana', production: 12.4, sharePercentage: 9.1, yieldKgHa: 3620 },
      { state: 'Andhra Pradesh', production: 11.8, sharePercentage: 8.7, yieldKgHa: 3840 },
      { state: 'Odisha', production: 9.5, sharePercentage: 7.0, yieldKgHa: 2280 },
      { state: 'Chhattisgarh', production: 8.9, sharePercentage: 6.6, yieldKgHa: 2210 },
      { state: 'Bihar', production: 7.8, sharePercentage: 5.7, yieldKgHa: 2450 },
      { state: 'Tamil Nadu', production: 7.4, sharePercentage: 5.5, yieldKgHa: 3890 },
      { state: 'Assam', production: 5.2, sharePercentage: 3.8, yieldKgHa: 2190 }
    ]
  },
  'wheat': {
    cropName: 'Wheat',
    nationalTotalTonnes: '113.3 Million Tonnes',
    unit: 'Million Tonnes',
    topStates: [
      { state: 'Uttar Pradesh', production: 35.4, sharePercentage: 31.2, yieldKgHa: 3520 },
      { state: 'Madhya Pradesh', production: 22.8, sharePercentage: 20.1, yieldKgHa: 3310 },
      { state: 'Punjab', production: 17.6, sharePercentage: 15.5, yieldKgHa: 4890 },
      { state: 'Haryana', production: 12.1, sharePercentage: 10.7, yieldKgHa: 4720 },
      { state: 'Rajasthan', production: 11.4, sharePercentage: 10.1, yieldKgHa: 3740 },
      { state: 'Bihar', production: 6.8, sharePercentage: 6.0, yieldKgHa: 3120 },
      { state: 'Gujarat', production: 4.5, sharePercentage: 4.0, yieldKgHa: 3410 },
      { state: 'Maharashtra', production: 1.8, sharePercentage: 1.6, yieldKgHa: 1980 },
      { state: 'Uttarakhand', production: 0.9, sharePercentage: 0.8, yieldKgHa: 2850 }
    ]
  },
  'cotton': {
    cropName: 'Cotton',
    nationalTotalTonnes: '32.5 Million Bales (170 kg/b)',
    unit: 'Million Bales',
    topStates: [
      { state: 'Gujarat', production: 8.9, sharePercentage: 27.4, yieldKgHa: 680 },
      { state: 'Maharashtra', production: 7.4, sharePercentage: 22.8, yieldKgHa: 395 },
      { state: 'Telangana', production: 5.8, sharePercentage: 17.8, yieldKgHa: 520 },
      { state: 'Rajasthan', production: 2.8, sharePercentage: 8.6, yieldKgHa: 610 },
      { state: 'Andhra Pradesh', production: 2.2, sharePercentage: 6.8, yieldKgHa: 580 },
      { state: 'Karnataka', production: 2.0, sharePercentage: 6.2, yieldKgHa: 490 },
      { state: 'Haryana', production: 1.6, sharePercentage: 4.9, yieldKgHa: 560 },
      { state: 'Punjab', production: 1.2, sharePercentage: 3.7, yieldKgHa: 610 }
    ]
  },
  'sugarcane': {
    cropName: 'Sugarcane',
    nationalTotalTonnes: '470.4 Million Tonnes',
    unit: 'Million Tonnes',
    topStates: [
      { state: 'Uttar Pradesh', production: 215.8, sharePercentage: 45.9, yieldKgHa: 81400 },
      { state: 'Maharashtra', production: 108.4, sharePercentage: 23.0, yieldKgHa: 94200 },
      { state: 'Karnataka', production: 54.2, sharePercentage: 11.5, yieldKgHa: 98100 },
      { state: 'Tamil Nadu', production: 21.6, sharePercentage: 4.6, yieldKgHa: 106500 },
      { state: 'Gujarat', production: 18.2, sharePercentage: 3.9, yieldKgHa: 82100 },
      { state: 'Bihar', production: 15.4, sharePercentage: 3.3, yieldKgHa: 61200 },
      { state: 'Haryana', production: 9.8, sharePercentage: 2.1, yieldKgHa: 79500 }
    ]
  },
  'oilseeds': {
    cropName: 'Total Oilseeds (Mustard, Soybean, Groundnut)',
    nationalTotalTonnes: '40.1 Million Tonnes',
    unit: 'Million Tonnes',
    topStates: [
      { state: 'Rajasthan', production: 8.9, sharePercentage: 22.2, yieldKgHa: 1680 },
      { state: 'Madhya Pradesh', production: 7.8, sharePercentage: 19.5, yieldKgHa: 1420 },
      { state: 'Gujarat', production: 6.5, sharePercentage: 16.2, yieldKgHa: 2010 },
      { state: 'Maharashtra', production: 5.6, sharePercentage: 14.0, yieldKgHa: 1290 },
      { state: 'Uttar Pradesh', production: 2.8, sharePercentage: 7.0, yieldKgHa: 1480 },
      { state: 'Haryana', production: 2.1, sharePercentage: 5.2, yieldKgHa: 1920 },
      { state: 'Karnataka', production: 1.9, sharePercentage: 4.7, yieldKgHa: 1180 }
    ]
  },
  'pulses': {
    cropName: 'Total Pulses (Gram, Tur, Moong, Urad, Lentil)',
    nationalTotalTonnes: '27.8 Million Tonnes',
    unit: 'Million Tonnes',
    topStates: [
      { state: 'Madhya Pradesh', production: 6.4, sharePercentage: 23.0, yieldKgHa: 1210 },
      { state: 'Maharashtra', production: 4.8, sharePercentage: 17.3, yieldKgHa: 940 },
      { state: 'Rajasthan', production: 4.2, sharePercentage: 15.1, yieldKgHa: 890 },
      { state: 'Uttar Pradesh', production: 2.9, sharePercentage: 10.4, yieldKgHa: 1120 },
      { state: 'Karnataka', production: 2.5, sharePercentage: 9.0, yieldKgHa: 820 },
      { state: 'Gujarat', production: 1.8, sharePercentage: 6.5, yieldKgHa: 1190 },
      { state: 'Andhra Pradesh', production: 1.4, sharePercentage: 5.0, yieldKgHa: 980 }
    ]
  }
};

export const RAW_PRODUCTION_RECORDS: ProductionRecord[] = [
  // 2023-24 Records
  { year: '2023-24', crop: 'Rice (Paddy)', category: 'Food Crops', state: 'West Bengal', cultivatedAreaLakhHa: 55.2, productionQuantityMillionTonnes: 16.8, yieldKgPerHa: 3045, season: 'Kharif', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Rice (Paddy)', category: 'Food Crops', state: 'Uttar Pradesh', cultivatedAreaLakhHa: 58.0, productionQuantityMillionTonnes: 15.6, yieldKgPerHa: 2690, season: 'Kharif', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Rice (Paddy)', category: 'Food Crops', state: 'Punjab', cultivatedAreaLakhHa: 31.6, productionQuantityMillionTonnes: 13.2, yieldKgPerHa: 4180, season: 'Kharif', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Wheat', category: 'Food Crops', state: 'Uttar Pradesh', cultivatedAreaLakhHa: 100.5, productionQuantityMillionTonnes: 35.4, yieldKgPerHa: 3520, season: 'Rabi', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Wheat', category: 'Food Crops', state: 'Madhya Pradesh', cultivatedAreaLakhHa: 68.9, productionQuantityMillionTonnes: 22.8, yieldKgPerHa: 3310, season: 'Rabi', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Wheat', category: 'Food Crops', state: 'Punjab', cultivatedAreaLakhHa: 36.0, productionQuantityMillionTonnes: 17.6, yieldKgPerHa: 4890, season: 'Rabi', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Cotton', category: 'Commercial Crops', state: 'Gujarat', cultivatedAreaLakhHa: 26.5, productionQuantityMillionTonnes: 1.51, yieldKgPerHa: 570, season: 'Kharif', dataSource: 'Cotton Corporation of India & DES', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Cotton', category: 'Commercial Crops', state: 'Maharashtra', cultivatedAreaLakhHa: 42.1, productionQuantityMillionTonnes: 1.26, yieldKgPerHa: 300, season: 'Kharif', dataSource: 'Cotton Corporation of India & DES', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Sugarcane', category: 'Commercial Crops', state: 'Uttar Pradesh', cultivatedAreaLakhHa: 26.5, productionQuantityMillionTonnes: 215.8, yieldKgPerHa: 81400, season: 'Annual / Perennial', dataSource: 'Directorate of Sugar & DES', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Sugarcane', category: 'Commercial Crops', state: 'Maharashtra', cultivatedAreaLakhHa: 11.5, productionQuantityMillionTonnes: 108.4, yieldKgPerHa: 94200, season: 'Annual / Perennial', dataSource: 'Directorate of Sugar & DES', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Soybean', category: 'Commercial Crops', state: 'Madhya Pradesh', cultivatedAreaLakhHa: 55.4, productionQuantityMillionTonnes: 6.2, yieldKgPerHa: 1120, season: 'Kharif', dataSource: 'SOPA & DES', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Mustard', category: 'Commercial Crops', state: 'Rajasthan', cultivatedAreaLakhHa: 38.2, productionQuantityMillionTonnes: 5.9, yieldKgPerHa: 1545, season: 'Rabi', dataSource: 'Directorate of Rapeseed-Mustard Research', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Maize', category: 'Food Crops', state: 'Karnataka', cultivatedAreaLakhHa: 16.8, productionQuantityMillionTonnes: 5.4, yieldKgPerHa: 3215, season: 'Kharif', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Maize', category: 'Food Crops', state: 'Bihar', cultivatedAreaLakhHa: 7.2, productionQuantityMillionTonnes: 3.8, yieldKgPerHa: 5280, season: 'Rabi', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Tea', category: 'Plantation Crops', state: 'Assam', cultivatedAreaLakhHa: 3.2, productionQuantityMillionTonnes: 0.68, yieldKgPerHa: 2125, season: 'Annual / Perennial', dataSource: 'Tea Board of India', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Coffee', category: 'Plantation Crops', state: 'Karnataka', cultivatedAreaLakhHa: 2.4, productionQuantityMillionTonnes: 0.25, yieldKgPerHa: 1040, season: 'Annual / Perennial', dataSource: 'Coffee Board of India', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Rubber', category: 'Plantation Crops', state: 'Kerala', cultivatedAreaLakhHa: 5.5, productionQuantityMillionTonnes: 0.58, yieldKgPerHa: 1055, season: 'Annual / Perennial', dataSource: 'Rubber Board of India', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Potato', category: 'Horticultural Crops', state: 'Uttar Pradesh', cultivatedAreaLakhHa: 6.2, productionQuantityMillionTonnes: 16.2, yieldKgPerHa: 26130, season: 'Rabi', dataSource: 'NHB - National Horticulture Board', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Potato', category: 'Horticultural Crops', state: 'West Bengal', cultivatedAreaLakhHa: 4.8, productionQuantityMillionTonnes: 13.8, yieldKgPerHa: 28750, season: 'Rabi', dataSource: 'NHB - National Horticulture Board', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Onion', category: 'Horticultural Crops', state: 'Maharashtra', cultivatedAreaLakhHa: 7.9, productionQuantityMillionTonnes: 9.8, yieldKgPerHa: 12400, season: 'Rabi', dataSource: 'NHB - National Horticulture Board', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Apple', category: 'Horticultural Crops', state: 'Jammu and Kashmir', cultivatedAreaLakhHa: 1.6, productionQuantityMillionTonnes: 1.95, yieldKgPerHa: 12190, season: 'Annual / Perennial', dataSource: 'Directorate of Horticulture J&K', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },
  { year: '2023-24', crop: 'Apple', category: 'Horticultural Crops', state: 'Himachal Pradesh', cultivatedAreaLakhHa: 1.1, productionQuantityMillionTonnes: 0.64, yieldKgPerHa: 5820, season: 'Annual / Perennial', dataSource: 'Directorate of Horticulture HP', reportingPeriod: 'Annual 2023-24', dataUpdatedDate: '2024-06-30' },

  // 2022-23 Highlights
  { year: '2022-23', crop: 'Rice (Paddy)', category: 'Food Crops', state: 'West Bengal', cultivatedAreaLakhHa: 55.0, productionQuantityMillionTonnes: 16.5, yieldKgPerHa: 3000, season: 'Kharif', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2022-23', dataUpdatedDate: '2023-06-30' },
  { year: '2022-23', crop: 'Wheat', category: 'Food Crops', state: 'Uttar Pradesh', cultivatedAreaLakhHa: 99.8, productionQuantityMillionTonnes: 34.8, yieldKgPerHa: 3485, season: 'Rabi', dataSource: 'Directorate of Economics & Statistics (DES)', reportingPeriod: 'Annual 2022-23', dataUpdatedDate: '2023-06-30' },
  { year: '2022-23', crop: 'Sugarcane', category: 'Commercial Crops', state: 'Uttar Pradesh', cultivatedAreaLakhHa: 26.1, productionQuantityMillionTonnes: 211.2, yieldKgPerHa: 80900, season: 'Annual / Perennial', dataSource: 'Directorate of Sugar & DES', reportingPeriod: 'Annual 2022-23', dataUpdatedDate: '2023-06-30' },
  { year: '2022-23', crop: 'Cotton', category: 'Commercial Crops', state: 'Gujarat', cultivatedAreaLakhHa: 25.8, productionQuantityMillionTonnes: 1.48, yieldKgPerHa: 574, season: 'Kharif', dataSource: 'Cotton Corporation of India & DES', reportingPeriod: 'Annual 2022-23', dataUpdatedDate: '2023-06-30' }
];

export function downloadCSV(data: any[], filename: string) {
  if (!data || !data.length) return;
  const headers = Object.keys(data[0]);
  const rows = data.map(item =>
    headers.map(header => {
      const val = item[header];
      if (typeof val === 'string' && val.includes(',')) {
        return `"${val.replace(/"/g, '""')}"`;
      }
      return val ?? '';
    }).join(',')
  );

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
