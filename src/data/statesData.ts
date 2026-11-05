export interface StateAgriData {
  id: string;
  name: string;
  capital: string;
  type: 'State' | 'Union Territory';
  zone: 'Northern' | 'Southern' | 'Eastern' | 'Western' | 'Central' | 'North-Eastern';
  majorCrops: string[];
  cultivars: { [crop: string]: string[] };
  seasons: {
    kharif: string[];
    rabi: string[];
    zaid: string[];
  };
  sowingHarvestingTimeline: {
    season: 'Kharif' | 'Rabi' | 'Zaid';
    sowing: string;
    harvesting: string;
    avgDurationDays: number;
    primaryCrops: string[];
  }[];
  soilTypes: string[];
  climate: string;
  rainfallMm: number;
  irrigationPercentage: number;
  irrigationMethods: string[];
  cultivatedAreaLakhHa: number;
  totalProductionMillionTonnes: number;
  avgYieldKgPerHa: number;
  majorDistricts: string[];
  historicalTrends: {
    year: string;
    productionMillionTonnes: number;
    areaLakhHa: number;
    yieldKgPerHa: number;
  }[];
  governmentSchemes: {
    name: string;
    description: string;
    impact: string;
  }[];
}

export const STATES_AND_UTS_DATA: StateAgriData[] = [
  {
    id: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    type: 'State',
    zone: 'Northern',
    majorCrops: ['Wheat', 'Rice (Paddy)', 'Cotton', 'Maize', 'Sugarcane', 'Mustard'],
    cultivars: {
      'Wheat': ['HD 3086', 'PBW 725', 'PBW 824', 'Unnat PBW 343'],
      'Rice (Paddy)': ['PR 126', 'PR 131', 'Pusa Basmati 1121', 'Pusa Basmati 1509'],
      'Cotton': ['PAU Bt 1', 'RCH 689 Bt', 'F 2383']
    },
    seasons: {
      kharif: ['Rice (Paddy)', 'Cotton', 'Maize', 'Basmati', 'Sugarcane'],
      rabi: ['Wheat', 'Gram', 'Mustard', 'Barley', 'Sunflower'],
      zaid: ['Moong (Summer)', 'Fodder Maize', 'Vegetables', 'Muskmelon']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - November', avgDurationDays: 130, primaryCrops: ['Rice (Paddy)', 'Cotton', 'Maize'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'April - May', avgDurationDays: 150, primaryCrops: ['Wheat', 'Mustard', 'Barley'] },
      { season: 'Zaid', sowing: 'March - April', harvesting: 'June - July', avgDurationDays: 70, primaryCrops: ['Summer Moong', 'Cucurbits'] }
    ],
    soilTypes: ['Alluvial Soil (Flood plain)', 'Sandy Loam', 'Desert Soil (South-West)'],
    climate: 'Semi-arid to sub-humid with extreme hot summers and cold winters',
    rainfallMm: 649,
    irrigationPercentage: 98.7,
    irrigationMethods: ['Tube-wells (electric & solar)', 'Canal irrigation (Bhakra-Nangal system)'],
    cultivatedAreaLakhHa: 41.5,
    totalProductionMillionTonnes: 31.8,
    avgYieldKgPerHa: 4420,
    majorDistricts: ['Ludhiana', 'Sangrur', 'Patiala', 'Bathinda', 'Amritsar', 'Jalandhar', 'Firozpur'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 31.2, areaLakhHa: 41.4, yieldKgPerHa: 4310 },
      { year: '2019-20', productionMillionTonnes: 31.5, areaLakhHa: 41.5, yieldKgPerHa: 4350 },
      { year: '2020-21', productionMillionTonnes: 31.9, areaLakhHa: 41.6, yieldKgPerHa: 4400 },
      { year: '2021-22', productionMillionTonnes: 30.8, areaLakhHa: 41.4, yieldKgPerHa: 4280 },
      { year: '2022-23', productionMillionTonnes: 31.4, areaLakhHa: 41.5, yieldKgPerHa: 4380 },
      { year: '2023-24', productionMillionTonnes: 31.8, areaLakhHa: 41.5, yieldKgPerHa: 4420 }
    ],
    governmentSchemes: [
      { name: 'Crop Residue Management (CRM) Scheme', description: 'Financial subsidy up to 80% on in-situ crop residue management machinery to eliminate stubble burning.', impact: 'Reduced farm fires by over 45% in active districts.' },
      { name: 'Direct Seeding of Rice (DSR) Incentive', description: 'Cash subsidy of ₹1,500 per acre provided to farmers adopting direct drilling to conserve groundwater.', impact: 'Saved over 25 billion litres of groundwater.' }
    ]
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    type: 'State',
    zone: 'Northern',
    majorCrops: ['Sugarcane', 'Wheat', 'Rice (Paddy)', 'Potato', 'Mustard', 'Maize', 'Mango'],
    cultivars: {
      'Sugarcane': ['Co 0238', 'Co 0118', 'Co 15023', 'CoLk 94184'],
      'Wheat': ['HD 2967', 'KRL 210', 'PBW 502', 'DBW 187'],
      'Potato': ['Kufri Chipsona-1', 'Kufri Bahar', 'Kufri Pukhraj']
    },
    seasons: {
      kharif: ['Rice (Paddy)', 'Maize', 'Arhar (Pigeonpea)', 'Bajra', 'Sugarcane'],
      rabi: ['Wheat', 'Mustard', 'Barley', 'Gram', 'Peas', 'Potato'],
      zaid: ['Moong', 'Urad', 'Melons', 'Fodder Maize', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - November', avgDurationDays: 125, primaryCrops: ['Rice (Paddy)', 'Maize', 'Pulses'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'April - May', avgDurationDays: 140, primaryCrops: ['Wheat', 'Potato', 'Mustard'] },
      { season: 'Zaid', sowing: 'March - April', harvesting: 'June', avgDurationDays: 65, primaryCrops: ['Summer Pulses', 'Vegetables'] }
    ],
    soilTypes: ['Alluvial (Ganga-Yamuna doab)', 'Sandy Alluvium', 'Terai Soils', 'Bundelkhand Black Soil'],
    climate: 'Sub-tropical monsoon, hot summers (up to 46°C) and cool winters',
    rainfallMm: 890,
    irrigationPercentage: 86.4,
    irrigationMethods: ['Private tube-wells', 'State canal networks (Sharda, Upper Ganga)', 'Tanks (Bundelkhand)'],
    cultivatedAreaLakhHa: 165.7,
    totalProductionMillionTonnes: 58.4,
    avgYieldKgPerHa: 3120,
    majorDistricts: ['Meerut', 'Muzaffarnagar', 'Gorakhpur', 'Varanasi', 'Agra', 'Bareilly', 'Badaun', 'Aligarh'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 55.2, areaLakhHa: 164.2, yieldKgPerHa: 2980 },
      { year: '2019-20', productionMillionTonnes: 56.1, areaLakhHa: 165.0, yieldKgPerHa: 3020 },
      { year: '2020-21', productionMillionTonnes: 57.3, areaLakhHa: 165.4, yieldKgPerHa: 3070 },
      { year: '2021-22', productionMillionTonnes: 56.8, areaLakhHa: 165.2, yieldKgPerHa: 3050 },
      { year: '2022-23', productionMillionTonnes: 57.9, areaLakhHa: 165.5, yieldKgPerHa: 3090 },
      { year: '2023-24', productionMillionTonnes: 58.4, areaLakhHa: 165.7, yieldKgPerHa: 3120 }
    ],
    governmentSchemes: [
      { name: 'Kisan Kalyan Mission', description: 'Multi-sectoral scheme aimed at doubling farmers’ income through technology and input distribution.', impact: 'Benefited 2.4 crore farmers with subsidized high-yield seeds.' },
      { name: 'Panchamrut Sugarcane Scheme', description: 'Modern 5-point sugarcane cultivation technique including drip irrigation and trench sowing.', impact: 'Boosted sugarcane yield by 18%.' }
    ]
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    type: 'State',
    zone: 'Central',
    majorCrops: ['Soybean', 'Wheat', 'Gram (Chickpea)', 'Mustard', 'Maize', 'Garlic', 'Cotton'],
    cultivars: {
      'Soybean': ['JS 95-60', 'JS 20-34', 'JS 20-29', 'NRC 86'],
      'Wheat': ['Sharbati', 'HI 8663 (Poshan)', 'GW 322', 'JW 3288'],
      'Gram (Chickpea)': ['JG 11', 'JG 14', 'JAKI 9218', 'RVG 202']
    },
    seasons: {
      kharif: ['Soybean', 'Maize', 'Cotton', 'Arhar', 'Urad', 'Paddy'],
      rabi: ['Wheat (Sharbati & Durum)', 'Gram', 'Mustard', 'Lentil', 'Linseed'],
      zaid: ['Summer Moong', 'Maize', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'September - October', avgDurationDays: 100, primaryCrops: ['Soybean', 'Maize', 'Cotton'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'March - April', avgDurationDays: 135, primaryCrops: ['Wheat', 'Gram', 'Mustard'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'May - June', avgDurationDays: 65, primaryCrops: ['Summer Moong'] }
    ],
    soilTypes: ['Deep Black Cotton Soil (Malwa)', 'Medium Black Soil', 'Mixed Red and Black Soil', 'Alluvial (Chambal)'],
    climate: 'Tropical monsoon, hot summer, mild winter, rainfall concentrated in July-September',
    rainfallMm: 1160,
    irrigationPercentage: 74.2,
    irrigationMethods: ['Narmada Valley Canal network', 'Open wells', 'Borewells', 'Stop dams and check dams'],
    cultivatedAreaLakhHa: 153.2,
    totalProductionMillionTonnes: 38.6,
    avgYieldKgPerHa: 2790,
    majorDistricts: ['Indore', 'Ujjain', 'Hoshangabad (Narmadapuram)', 'Sehore', 'Vidisha', 'Dewas', 'Mandsaur'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 34.5, areaLakhHa: 149.8, yieldKgPerHa: 2540 },
      { year: '2019-20', productionMillionTonnes: 36.2, areaLakhHa: 151.2, yieldKgPerHa: 2630 },
      { year: '2020-21', productionMillionTonnes: 37.4, areaLakhHa: 152.4, yieldKgPerHa: 2710 },
      { year: '2021-22', productionMillionTonnes: 36.9, areaLakhHa: 152.0, yieldKgPerHa: 2680 },
      { year: '2022-23', productionMillionTonnes: 37.9, areaLakhHa: 152.8, yieldKgPerHa: 2740 },
      { year: '2023-24', productionMillionTonnes: 38.6, areaLakhHa: 153.2, yieldKgPerHa: 2790 }
    ],
    governmentSchemes: [
      { name: 'Bhavantar Bhugtan Yojana', description: 'Price deficiency payment scheme providing compensation when modal market rates fall below MSP.', impact: 'Insured over 1.6 million soybean and pulse farmers.' },
      { name: 'Mukhya Mantri Solar Pump Yojana', description: '90% subsidized installation of solar agricultural pumps for off-grid farms.', impact: 'Energized 35,000+ deep borewells cleanly.' }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    type: 'State',
    zone: 'Western',
    majorCrops: ['Cotton', 'Sugarcane', 'Soybean', 'Jowar (Sorghum)', 'Onion', 'Grapes', 'Pomegranate', 'Pulses'],
    cultivars: {
      'Cotton': ['Ajit 155 Bt', 'Mallika Bt', 'Brahma Bt'],
      'Sugarcane': ['Co 86032 (Nira)', 'MS 10001', 'CoM 0265'],
      'Grapes': ['Thompson Seedless', 'Sharad Seedless', 'Tas-A-Ganesh', 'Manik Chaman']
    },
    seasons: {
      kharif: ['Cotton', 'Soybean', 'Paddy', 'Tur (Arhar)', 'Bajra', 'Groundnut'],
      rabi: ['Jowar', 'Gram', 'Wheat', 'Safflower', 'Onion'],
      zaid: ['Summer Groundnut', 'Sunflower', 'Watermelon', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - December', avgDurationDays: 140, primaryCrops: ['Cotton', 'Soybean', 'Tur'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'February - March', avgDurationDays: 120, primaryCrops: ['Rabi Jowar', 'Gram'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 80, primaryCrops: ['Summer Groundnut', 'Vegetables'] }
    ],
    soilTypes: ['Black Regur Soil (Deccan Traps)', 'Laterite (Konkan)', 'Coastal Alluvium', 'Red Sandy Soil'],
    climate: 'Tropical monsoon with humid coastal Konkan and semi-arid dry Marathwada & Vidarbha',
    rainfallMm: 1180,
    irrigationPercentage: 21.6,
    irrigationMethods: ['Drip and micro-irrigation (highest adoption in India)', 'Wells and farm ponds (Jalyukt Shivar)'],
    cultivatedAreaLakhHa: 174.5,
    totalProductionMillionTonnes: 26.8,
    avgYieldKgPerHa: 1820,
    majorDistricts: ['Nashik', 'Pune', 'Ahmednagar', 'Solapur', 'Kolhapur', 'Amravati', 'Yavatmal', 'Jalgaon'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 22.4, areaLakhHa: 171.2, yieldKgPerHa: 1590 },
      { year: '2019-20', productionMillionTonnes: 24.8, areaLakhHa: 173.0, yieldKgPerHa: 1710 },
      { year: '2020-21', productionMillionTonnes: 26.1, areaLakhHa: 174.1, yieldKgPerHa: 1780 },
      { year: '2021-22', productionMillionTonnes: 25.4, areaLakhHa: 173.8, yieldKgPerHa: 1740 },
      { year: '2022-23', productionMillionTonnes: 26.3, areaLakhHa: 174.2, yieldKgPerHa: 1800 },
      { year: '2023-24', productionMillionTonnes: 26.8, areaLakhHa: 174.5, yieldKgPerHa: 1820 }
    ],
    governmentSchemes: [
      { name: 'MahaDBT Farmer Horticulture Mission', description: 'Direct benefit transfer for drip irrigation, shade nets, and pack houses.', impact: 'Made Maharashtra India’s leader in grape and pomegranate exports.' },
      { name: 'Jalyukt Shivar Abhiyan 2.0', description: 'Decentralized water harvesting via deepening stream beds and farm pond construction.', impact: 'Created 24 lakh cubic meters of water storage.' }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    type: 'State',
    zone: 'Northern',
    majorCrops: ['Mustard', 'Bajra (Pearl Millet)', 'Gram', 'Guar Gum', 'Wheat', 'Soybean', 'Spices (Cumin, Coriander)'],
    cultivars: {
      'Mustard': ['Giriraj (DRMRIJ 31)', 'Pusa Bold', 'RH 749', 'NRCHB 101'],
      'Bajra': ['RHB 173', 'RHB 223', 'HHB 67 Improved'],
      'Cumin': ['GC 4', 'RZ 19', 'RZ 209']
    },
    seasons: {
      kharif: ['Bajra', 'Guar', 'Moong', 'Moth Bean', 'Sesamum', 'Soybean'],
      rabi: ['Mustard', 'Wheat', 'Gram', 'Barley', 'Isabgol', 'Cumin'],
      zaid: ['Summer Bajra', 'Cucurbits', 'Fodder']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'July', harvesting: 'September - October', avgDurationDays: 85, primaryCrops: ['Bajra', 'Guar', 'Moong'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'March - April', avgDurationDays: 130, primaryCrops: ['Mustard', 'Gram', 'Wheat'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'May', avgDurationDays: 60, primaryCrops: ['Cucurbits', 'Fodder'] }
    ],
    soilTypes: ['Desert Soil (Arid Thar)', 'Sandy Loam', 'Saline Soils', 'Red and Yellow Soil (Aravallis)'],
    climate: 'Arid to semi-arid with scorching summers (48°C) and scanty erratic rainfall',
    rainfallMm: 575,
    irrigationPercentage: 46.1,
    irrigationMethods: ['Indira Gandhi Canal Project (IGNP)', 'Tube-wells', 'Kunds (traditional rainwater storage)'],
    cultivatedAreaLakhHa: 181.3,
    totalProductionMillionTonnes: 28.3,
    avgYieldKgPerHa: 1910,
    majorDistricts: ['Sri Ganganagar', 'Hanumangarh', 'Alwar', 'Bharatpur', 'Jaipur', 'Nagaur', 'Barmer', 'Kota'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 24.1, areaLakhHa: 176.5, yieldKgPerHa: 1680 },
      { year: '2019-20', productionMillionTonnes: 25.9, areaLakhHa: 178.2, yieldKgPerHa: 1760 },
      { year: '2020-21', productionMillionTonnes: 27.2, areaLakhHa: 180.1, yieldKgPerHa: 1850 },
      { year: '2021-22', productionMillionTonnes: 26.8, areaLakhHa: 179.8, yieldKgPerHa: 1820 },
      { year: '2022-23', productionMillionTonnes: 27.9, areaLakhHa: 180.9, yieldKgPerHa: 1880 },
      { year: '2023-24', productionMillionTonnes: 28.3, areaLakhHa: 181.3, yieldKgPerHa: 1910 }
    ],
    governmentSchemes: [
      { name: 'Mukhyamantri Kisan Mitra Urja Yojana', description: '₹1,000 monthly power tariff subsidy on agricultural electricity connections.', impact: 'Reduced irrigation power costs for 12 lakh farmers.' },
      { name: 'Rajasthan Millet Promotion Mission', description: 'Free distribution of certified hybrid Bajra and micro-irrigation kits.', impact: 'Ranked Rajasthan #1 in national pearl millet and mustard output.' }
    ]
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    type: 'State',
    zone: 'Southern',
    majorCrops: ['Rice (Paddy)', 'Chili', 'Cotton', 'Tobacco', 'Groundnut', 'Oil Palm', 'Mango'],
    cultivars: {
      'Rice (Paddy)': ['BPT 5204 (Samba Mahsuri)', 'MTU 1010', 'MTU 1061', 'NLR 34449'],
      'Chili': ['Guntur Sannam (S4)', 'Teja', 'Byadagi hybrid', 'Devanur Deluxe'],
      'Groundnut': ['K 6 (Kadiri)', 'Dharani', 'Tag 24']
    },
    seasons: {
      kharif: ['Paddy', 'Groundnut', 'Cotton', 'Sugarcane', 'Chili'],
      rabi: ['Paddy (Dalwa)', 'Maize', 'Bengalgram', 'Sunflower', 'Blackgram'],
      zaid: ['Summer Sesame', 'Pulses', 'Melons']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'November - December', avgDurationDays: 145, primaryCrops: ['Paddy', 'Cotton', 'Chili'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'March - April', avgDurationDays: 125, primaryCrops: ['Dalwa Paddy', 'Maize', 'Bengalgram'] },
      { season: 'Zaid', sowing: 'February - March', harvesting: 'May', avgDurationDays: 75, primaryCrops: ['Sesame', 'Vegetables'] }
    ],
    soilTypes: ['Red Sandy Soils (Rayalaseema)', 'Black Soils (Guntur & Krishna)', 'Coastal Deltaic Alluvium'],
    climate: 'Tropical with hot summers and northeast monsoon rainfall',
    rainfallMm: 940,
    irrigationPercentage: 54.3,
    irrigationMethods: ['Krishna and Godavari barrage canals', 'Polavaram Project tributaries', 'Borewells'],
    cultivatedAreaLakhHa: 63.8,
    totalProductionMillionTonnes: 17.5,
    avgYieldKgPerHa: 3410,
    majorDistricts: ['East Godavari', 'West Godavari', 'Krishna', 'Guntur', 'Kurnool', 'Anantapur', 'Prakasam'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 15.6, areaLakhHa: 61.8, yieldKgPerHa: 3180 },
      { year: '2019-20', productionMillionTonnes: 16.3, areaLakhHa: 62.4, yieldKgPerHa: 3260 },
      { year: '2020-21', productionMillionTonnes: 17.1, areaLakhHa: 63.2, yieldKgPerHa: 3350 },
      { year: '2021-22', productionMillionTonnes: 16.8, areaLakhHa: 63.0, yieldKgPerHa: 3310 },
      { year: '2022-23', productionMillionTonnes: 17.2, areaLakhHa: 63.5, yieldKgPerHa: 3370 },
      { year: '2023-24', productionMillionTonnes: 17.5, areaLakhHa: 63.8, yieldKgPerHa: 3410 }
    ],
    governmentSchemes: [
      { name: 'Rythu Bharosa Kendras (RBKs)', description: 'One-stop village knowledge and input shops testing soil, certifying seeds, and booking crop insurance.', impact: 'Over 10,700 RBKs operating at gram panchayat levels.' },
      { name: 'YSR Rythu Bharosa', description: 'Direct financial assistance of ₹13,500/year to landholding and tenant farmers.', impact: 'Coverage of 53 lakh farming families.' }
    ]
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    type: 'State',
    zone: 'Eastern',
    majorCrops: ['Rice (Aman, Boro, Aus)', 'Jute', 'Potato', 'Tea', 'Mustard', 'Vegetables', 'Betel Vine'],
    cultivars: {
      'Rice (Paddy)': ['Swarna (MTU 7029)', 'Shatabdi (IET 4786)', 'Gobindobhog', 'Radhuni Pagal'],
      'Jute': ['JRO 524 (Navin)', 'JRO 204', 'JBO 2003 H (Ira)'],
      'Potato': ['Kufri Jyoti', 'Kufri Chandramukhi', 'Kufri Pokhraj']
    },
    seasons: {
      kharif: ['Aman Paddy (main wet season)', 'Jute', 'Maize', 'Vegetables'],
      rabi: ['Boro Paddy (winter-spring irrigated)', 'Potato', 'Mustard', 'Wheat', 'Pulses'],
      zaid: ['Aus Paddy (autumn pre-kharif)', 'Sesame', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'July - August', harvesting: 'November - December', avgDurationDays: 140, primaryCrops: ['Aman Paddy', 'Jute'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'March - April', avgDurationDays: 125, primaryCrops: ['Boro Paddy', 'Potato', 'Mustard'] },
      { season: 'Zaid', sowing: 'April - May', harvesting: 'July', avgDurationDays: 90, primaryCrops: ['Aus Paddy', 'Sesame'] }
    ],
    soilTypes: ['Ganga Alluvial (Gangetic Delta)', 'Terai soils (North)', 'Laterite (Red & Lateritic plateau)', 'Coastal saline soils (Sundarbans)'],
    climate: 'Tropical wet-and-dry to humid sub-tropical with heavy monsoon',
    rainfallMm: 1750,
    irrigationPercentage: 62.8,
    irrigationMethods: ['Shallow tube-wells', 'River lift irrigation', 'DVC Canal system', 'Ponds (Dighis)'],
    cultivatedAreaLakhHa: 55.4,
    totalProductionMillionTonnes: 24.2,
    avgYieldKgPerHa: 3260,
    majorDistricts: ['Purba Bardhaman', 'Paschim Bardhaman', 'Hooghly', 'Nadia', 'Murshidabad', 'North 24 Parganas', 'Darjeeling', 'Jalpaiguri'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 22.1, areaLakhHa: 54.8, yieldKgPerHa: 3080 },
      { year: '2019-20', productionMillionTonnes: 22.9, areaLakhHa: 55.0, yieldKgPerHa: 3140 },
      { year: '2020-21', productionMillionTonnes: 23.6, areaLakhHa: 55.2, yieldKgPerHa: 3200 },
      { year: '2021-22', productionMillionTonnes: 23.2, areaLakhHa: 55.1, yieldKgPerHa: 3160 },
      { year: '2022-23', productionMillionTonnes: 23.9, areaLakhHa: 55.3, yieldKgPerHa: 3220 },
      { year: '2023-24', productionMillionTonnes: 24.2, areaLakhHa: 55.4, yieldKgPerHa: 3260 }
    ],
    governmentSchemes: [
      { name: 'Krishak Bandhu Scheme', description: 'Annual financial aid of up to ₹10,000 per acre plus ₹2 lakh life insurance coverage for farmers.', impact: 'Benefiting 98 lakh registered farmers and sharecroppers.' },
      { name: 'Bangla Shasya Bima (BSB)', description: 'Zero-premium crop insurance funded entirely by the state government.', impact: 'Full risk mitigation against floods and cyclonic damage.' }
    ]
  },
  {
    id: 'haryana',
    name: 'Haryana',
    capital: 'Chandigarh',
    type: 'State',
    zone: 'Northern',
    majorCrops: ['Wheat', 'Rice (Basmati & Non-Basmati)', 'Cotton', 'Mustard', 'Sugarcane', 'Bajra'],
    cultivars: {
      'Wheat': ['WH 1105', 'HD 3086', 'WH 1270', 'DBW 187'],
      'Rice (Paddy)': ['Pusa Basmati 1509', 'Pusa Basmati 1718', 'PR 126'],
      'Mustard': ['RH 725', 'RH 0749', 'Laxmi']
    },
    seasons: {
      kharif: ['Paddy', 'Cotton', 'Bajra', 'Sugarcane', 'Guar'],
      rabi: ['Wheat', 'Mustard', 'Barley', 'Gram'],
      zaid: ['Summer Moong', 'Sunflower', 'Fodder', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - November', avgDurationDays: 130, primaryCrops: ['Basmati Rice', 'Cotton', 'Bajra'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'April', avgDurationDays: 145, primaryCrops: ['Wheat', 'Mustard'] },
      { season: 'Zaid', sowing: 'March - April', harvesting: 'June', avgDurationDays: 70, primaryCrops: ['Summer Moong', 'Fodder'] }
    ],
    soilTypes: ['Alluvial Loam (Indo-Gangetic)', 'Sandy soils (South-West)', 'Saline and Alkaline soils'],
    climate: 'Semi-arid, hot dry winds (Loo) in summer and severe cold in winter',
    rainfallMm: 545,
    irrigationPercentage: 91.2,
    irrigationMethods: ['Western Yamuna Canal & Bhakra system', 'Borewells with drip sub-mains'],
    cultivatedAreaLakhHa: 36.2,
    totalProductionMillionTonnes: 19.8,
    avgYieldKgPerHa: 4380,
    majorDistricts: ['Karnal', 'Kurukshetra', 'Kaithal', 'Sirsa', 'Fatehabad', 'Hisar', 'Ambala', 'Sonipat'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 18.5, areaLakhHa: 35.8, yieldKgPerHa: 4190 },
      { year: '2019-20', productionMillionTonnes: 18.9, areaLakhHa: 36.0, yieldKgPerHa: 4230 },
      { year: '2020-21', productionMillionTonnes: 19.4, areaLakhHa: 36.1, yieldKgPerHa: 4310 },
      { year: '2021-22', productionMillionTonnes: 18.8, areaLakhHa: 35.9, yieldKgPerHa: 4200 },
      { year: '2022-23', productionMillionTonnes: 19.5, areaLakhHa: 36.1, yieldKgPerHa: 4340 },
      { year: '2023-24', productionMillionTonnes: 19.8, areaLakhHa: 36.2, yieldKgPerHa: 4380 }
    ],
    governmentSchemes: [
      { name: 'Mera Pani Meri Virasat', description: 'Financial incentive of ₹7,000 per acre to switch from water-guzzling paddy to maize, cotton, pulses or agroforestry.', impact: 'Over 1.5 lakh acres successfully diversified.' },
      { name: 'Bhavantar Bharpayee Yojana (BBY)', description: 'Risk mitigation for 21 horticulture crops guaranteeing base MSP prices.', impact: 'Insulated vegetable growers from price crashes.' }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    type: 'State',
    zone: 'Western',
    majorCrops: ['Cotton', 'Groundnut', 'Castor', 'Wheat', 'Tobacco', 'Cumin', 'Fennel', 'Mango (Kesar)'],
    cultivars: {
      'Cotton': ['G.Cot.Hy-12', 'G.Cot-23', 'Bt hybrids (RCH-2)'],
      'Groundnut': ['GG 20', 'GG 22', 'GAUG 10', 'TG 37A'],
      'Castor': ['GCH 7', 'GCH 9', 'DCH 514']
    },
    seasons: {
      kharif: ['Cotton', 'Groundnut', 'Castor', 'Bajra', 'Sesame', 'Paddy'],
      rabi: ['Wheat', 'Mustard', 'Gram', 'Cumin', 'Fennel', 'Potato'],
      zaid: ['Summer Groundnut', 'Summer Bajra', 'Sesame']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - December', avgDurationDays: 140, primaryCrops: ['Cotton', 'Groundnut', 'Castor'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'March - April', avgDurationDays: 125, primaryCrops: ['Wheat', 'Cumin', 'Mustard'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 75, primaryCrops: ['Summer Bajra', 'Groundnut'] }
    ],
    soilTypes: ['Black soils (Saurashtra & Bharuch)', 'Alluvial (North & Central)', 'Coastal Saline Soils (Kutch)'],
    climate: 'Arid to semi-arid, dry winters and hot summers, erratic southwest monsoon',
    rainfallMm: 820,
    irrigationPercentage: 58.4,
    irrigationMethods: ['Sardar Sarovar Narmada Canal Project', 'SAUNI Yojana piped network', 'Check dams'],
    cultivatedAreaLakhHa: 103.4,
    totalProductionMillionTonnes: 16.9,
    avgYieldKgPerHa: 2680,
    majorDistricts: ['Rajkot', 'Junagadh', 'Amreli', 'Mehsana', 'Banaskantha', 'Vadodara', 'Bhavnagar', 'Surendranagar'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 14.8, areaLakhHa: 101.2, yieldKgPerHa: 2420 },
      { year: '2019-20', productionMillionTonnes: 15.6, areaLakhHa: 102.0, yieldKgPerHa: 2510 },
      { year: '2020-21', productionMillionTonnes: 16.3, areaLakhHa: 102.8, yieldKgPerHa: 2600 },
      { year: '2021-22', productionMillionTonnes: 16.0, areaLakhHa: 102.5, yieldKgPerHa: 2560 },
      { year: '2022-23', productionMillionTonnes: 16.7, areaLakhHa: 103.1, yieldKgPerHa: 2640 },
      { year: '2023-24', productionMillionTonnes: 16.9, areaLakhHa: 103.4, yieldKgPerHa: 2680 }
    ],
    governmentSchemes: [
      { name: 'SAUNI Yojana', description: 'Redirecting 1 million acre-feet floodwaters of Narmada into 115 dams across Saurashtra.', impact: 'Turned dry Saurashtra into India’s largest groundnut and cotton hub.' },
      { name: 'Kisan Suryodaya Yojana', description: 'Supplying dedicated 3-phase daytime electricity for agricultural pumps.', impact: 'Ended hazardous nocturnal irrigation for farmers.' }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    type: 'State',
    zone: 'Southern',
    majorCrops: ['Coffee (Arabica & Robusta)', 'Ragi (Finger Millet)', 'Maize', 'Sugarcane', 'Cotton', 'Tur (Arhar)', 'Sunflower', 'Arecanut'],
    cultivars: {
      'Coffee': ['S.795', 'Chandragiri', 'Cauvery', 'CxR Robusta'],
      'Ragi': ['GPU 28', 'GPU 48', 'ML 365', 'KMR 301'],
      'Tur': ['GRG 811', 'TS 3R', 'BSMR 736']
    },
    seasons: {
      kharif: ['Ragi', 'Maize', 'Paddy', 'Tur', 'Cotton', 'Groundnut', 'Soybean'],
      rabi: ['Rabi Jowar', 'Bengalgram', 'Wheat', 'Sunflower', 'Safflower'],
      zaid: ['Summer Paddy', 'Groundnut', 'Pulses']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'July', harvesting: 'November - December', avgDurationDays: 135, primaryCrops: ['Ragi', 'Maize', 'Tur', 'Cotton'] },
      { season: 'Rabi', sowing: 'October', harvesting: 'February - March', avgDurationDays: 120, primaryCrops: ['Jowar', 'Bengalgram'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 75, primaryCrops: ['Summer Groundnut', 'Vegetables'] }
    ],
    soilTypes: ['Red Sandy Loam (Southern plains)', 'Deep Black Soil (North Karnataka)', 'Laterite (Western Ghats & Coastal)'],
    climate: 'Varies from humid tropical in coastal regions to semi-arid in the northern plateau',
    rainfallMm: 1248,
    irrigationPercentage: 34.8,
    irrigationMethods: ['Cauvery, Krishna & Tungabhadra river canals', 'Borewells', 'Drip micro-irrigation'],
    cultivatedAreaLakhHa: 108.6,
    totalProductionMillionTonnes: 15.8,
    avgYieldKgPerHa: 2410,
    majorDistricts: ['Chikkamagaluru', 'Kodagu', 'Hassan', 'Belagavi', 'Kalaburagi', 'Davanagere', 'Mandya', 'Shimoga'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 13.9, areaLakhHa: 106.1, yieldKgPerHa: 2190 },
      { year: '2019-20', productionMillionTonnes: 14.6, areaLakhHa: 107.2, yieldKgPerHa: 2280 },
      { year: '2020-21', productionMillionTonnes: 15.3, areaLakhHa: 108.0, yieldKgPerHa: 2350 },
      { year: '2021-22', productionMillionTonnes: 14.9, areaLakhHa: 107.8, yieldKgPerHa: 2310 },
      { year: '2022-23', productionMillionTonnes: 15.5, areaLakhHa: 108.3, yieldKgPerHa: 2380 },
      { year: '2023-24', productionMillionTonnes: 15.8, areaLakhHa: 108.6, yieldKgPerHa: 2410 }
    ],
    governmentSchemes: [
      { name: 'Raitha Siri Scheme', description: 'Direct assistance of ₹10,000 per hectare for growing minor millets (Foxtail, Little, Kodo, Barnyard).', impact: 'Boosted millet area by 30% in drought-prone taluks.' },
      { name: 'Krishi Bhagya Scheme', description: 'Providing lined farm ponds with polythene sheeting and diesel pumpsets in rainfed areas.', impact: 'Installed 3.5 lakh farm ponds across the state.' }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    type: 'State',
    zone: 'Southern',
    majorCrops: ['Rice (Paddy - Kuruvai, Samba, Thaladi)', 'Sugarcane', 'Banana', 'Coconut', 'Groundnut', 'Cotton', 'Tea'],
    cultivars: {
      'Rice (Paddy)': ['ADT 37', 'ADT 45', 'CR 1009 Sub 1', 'BPT 5204', 'CO 51'],
      'Banana': ['Grand Naine', 'Robusta', 'Nendran', 'Poovan'],
      'Sugarcane': ['Co 86032', 'Co 0212', 'CoC 24']
    },
    seasons: {
      kharif: ['Kuruvai Paddy (June-Sept)', 'Groundnut', 'Cotton', 'Maize', 'Sesamum'],
      rabi: ['Samba Paddy (Aug-Jan)', 'Thaladi Paddy (Oct-Feb)', 'Blackgram', 'Greengram', 'Chilies'],
      zaid: ['Navarai Paddy', 'Summer Cotton', 'Watermelon', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June (Kuruvai)', harvesting: 'September - October', avgDurationDays: 110, primaryCrops: ['Kuruvai Paddy', 'Groundnut'] },
      { season: 'Rabi', sowing: 'August - September (Samba)', harvesting: 'January - February', avgDurationDays: 145, primaryCrops: ['Samba Paddy', 'Pulses'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 80, primaryCrops: ['Navarai Paddy', 'Vegetables'] }
    ],
    soilTypes: ['Red Sandy and Loamy (Central & South)', 'Black Cotton Soils (Coimbatore & Madurai)', 'Deltaic Alluvium (Cauvery Delta)'],
    climate: 'Tropical maritime with dominant rainfall from the Northeast Monsoon (October to December)',
    rainfallMm: 998,
    irrigationPercentage: 58.7,
    irrigationMethods: ['Cauvery Mettur dam canal networks', 'Tanks (Eris - traditional water bodies)', 'Open and tube wells'],
    cultivatedAreaLakhHa: 59.8,
    totalProductionMillionTonnes: 13.4,
    avgYieldKgPerHa: 3820,
    majorDistricts: ['Thanjavur', 'Tiruvarur', 'Nagapattinam', 'Coimbatore', 'Erode', 'Villupuram', 'Tirunelveli', 'Madurai'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 11.8, areaLakhHa: 58.2, yieldKgPerHa: 3490 },
      { year: '2019-20', productionMillionTonnes: 12.5, areaLakhHa: 59.0, yieldKgPerHa: 3610 },
      { year: '2020-21', productionMillionTonnes: 13.0, areaLakhHa: 59.4, yieldKgPerHa: 3720 },
      { year: '2021-22', productionMillionTonnes: 12.8, areaLakhHa: 59.2, yieldKgPerHa: 3680 },
      { year: '2022-23', productionMillionTonnes: 13.2, areaLakhHa: 59.6, yieldKgPerHa: 3780 },
      { year: '2023-24', productionMillionTonnes: 13.4, areaLakhHa: 59.8, yieldKgPerHa: 3820 }
    ],
    governmentSchemes: [
      { name: 'Kalaignarin All Village Integrated Agricultural Development Programme', description: 'Comprehensive village-level conversion of fallow lands into productive horticulture clusters.', impact: 'Reclaimed 45,000 hectares of fallow land.' },
      { name: 'Kuruvai Cultivation Package', description: 'Free certified paddy seeds, urea, and DAP distributed to Cauvery delta farmers ahead of Mettur water release.', impact: 'Achieved record 5.3 lakh acres Kuruvai acreage.' }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    type: 'State',
    zone: 'Southern',
    majorCrops: ['Rubber', 'Coconut', 'Black Pepper', 'Cardamom', 'Tea', 'Coffee', 'Rice (Pokkali, Kuttanad)', 'Tapioca'],
    cultivars: {
      'Rubber': ['RRII 105', 'RRII 414', 'RRII 430'],
      'Black Pepper': ['Panniyur 1', 'Panniyur 5', 'Panniyur 8', 'Karimunda'],
      'Cardamom': ['Njallani Green Gold', 'ICRI 1', 'PV 1']
    },
    seasons: {
      kharif: ['Virippu Paddy (Autumn - Apr to Sept)', 'Ginger', 'Turmeric', 'Tapioca'],
      rabi: ['Mundakan Paddy (Winter - Sept to Jan)', 'Vegetables', 'Pulses'],
      zaid: ['Puncha Paddy (Summer - Dec to May)', 'Kuttanad below-sea-level rice']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'April - May', harvesting: 'September', avgDurationDays: 130, primaryCrops: ['Virippu Paddy', 'Spices'] },
      { season: 'Rabi', sowing: 'September - October', harvesting: 'January - February', avgDurationDays: 125, primaryCrops: ['Mundakan Paddy'] },
      { season: 'Zaid', sowing: 'December - January', harvesting: 'March - April', avgDurationDays: 110, primaryCrops: ['Puncha Paddy (Kuttanad)'] }
    ],
    soilTypes: ['Laterite Soils (Midland & Highland, 65%)', 'Coastal Alluvium', 'Acid Saline Soils (Pokkali & Kari)', 'Forest Loam'],
    climate: 'Tropical wet maritime climate with copious rainfall from both SW and NE monsoons',
    rainfallMm: 3055,
    irrigationPercentage: 20.4,
    irrigationMethods: ['Perennial stream diversions', 'Open dug wells', 'Lift irrigation', 'Kuttanad polder bunding'],
    cultivatedAreaLakhHa: 25.8,
    totalProductionMillionTonnes: 4.8,
    avgYieldKgPerHa: 2840,
    majorDistricts: ['Kottayam', 'Idukki', 'Wayanad', 'Palakkad', 'Alappuzha', 'Thrissur', 'Kozhikode', 'Kollam'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 4.5, areaLakhHa: 25.5, yieldKgPerHa: 2710 },
      { year: '2019-20', productionMillionTonnes: 4.6, areaLakhHa: 25.6, yieldKgPerHa: 2750 },
      { year: '2020-21', productionMillionTonnes: 4.7, areaLakhHa: 25.7, yieldKgPerHa: 2800 },
      { year: '2021-22', productionMillionTonnes: 4.6, areaLakhHa: 25.6, yieldKgPerHa: 2780 },
      { year: '2022-23', productionMillionTonnes: 4.7, areaLakhHa: 25.7, yieldKgPerHa: 2820 },
      { year: '2023-24', productionMillionTonnes: 4.8, areaLakhHa: 25.8, yieldKgPerHa: 2840 }
    ],
    governmentSchemes: [
      { name: 'Subhiksha Keralam', description: 'State food security initiative encouraging fallow-land farming through self-help groups and youth collectives.', impact: 'Brought 22,000 hectares of barren land under organic cultivation.' },
      { name: 'Kuttanad Below-Sea-Level Heritage Agriculture Scheme', description: 'FAO-recognized Globally Important Agricultural Heritage System (GIAHS) conservation.', impact: 'Preserved saline-tolerant Pokkali and Puncha farming traditions.' }
    ]
  },
  {
    id: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    type: 'State',
    zone: 'Southern',
    majorCrops: ['Rice (Paddy)', 'Cotton', 'Maize', 'Chili', 'Soybean', 'Turmeric', 'Redgram'],
    cultivars: {
      'Rice (Paddy)': ['Telangana Sona (RNR 15048)', 'KNM 118', 'BPT 5204', 'JGL 18047'],
      'Cotton': ['Bt hybrids (Bunny Bt, Mallika Bt)'],
      'Turmeric': ['Armoor', 'Duggirala', 'IISR Pratibha']
    },
    seasons: {
      kharif: ['Paddy (Vanalam)', 'Cotton', 'Maize', 'Soybean', 'Chili', 'Redgram'],
      rabi: ['Paddy (Yasangi)', 'Maize', 'Bengalgram', 'Groundnut', 'Sunflower'],
      zaid: ['Summer Sesame', 'Watermelon', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - November', avgDurationDays: 135, primaryCrops: ['Vanalam Paddy', 'Cotton', 'Maize'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'March - April', avgDurationDays: 120, primaryCrops: ['Yasangi Paddy', 'Bengalgram'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 70, primaryCrops: ['Sesame', 'Vegetables'] }
    ],
    soilTypes: ['Red Sandy Soils (Chalkas, 48%)', 'Deep Black Soils (Regur, 25%)', 'Laterite Soils'],
    climate: 'Semi-arid tropical, hot summers (up to 44°C) and moderate winters',
    rainfallMm: 905,
    irrigationPercentage: 68.9,
    irrigationMethods: ['Kaleshwaram Lift Irrigation Scheme', 'Mission Kakatiya revitalized tanks', 'Borewells with 24x7 free power'],
    cultivatedAreaLakhHa: 53.2,
    totalProductionMillionTonnes: 18.2,
    avgYieldKgPerHa: 3420,
    majorDistricts: ['Nalgonda', 'Khammam', 'Nizamabad', 'Karimnagar', 'Warangal', 'Mahabubnagar', 'Suryapet', 'Sangareddy'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 13.8, areaLakhHa: 48.5, yieldKgPerHa: 2950 },
      { year: '2019-20', productionMillionTonnes: 15.2, areaLakhHa: 50.1, yieldKgPerHa: 3110 },
      { year: '2020-21', productionMillionTonnes: 16.9, areaLakhHa: 51.8, yieldKgPerHa: 3280 },
      { year: '2021-22', productionMillionTonnes: 17.1, areaLakhHa: 52.2, yieldKgPerHa: 3310 },
      { year: '2022-23', productionMillionTonnes: 17.8, areaLakhHa: 52.8, yieldKgPerHa: 3380 },
      { year: '2023-24', productionMillionTonnes: 18.2, areaLakhHa: 53.2, yieldKgPerHa: 3420 }
    ],
    governmentSchemes: [
      { name: 'Rythu Bandhu', description: 'Direct investment support of ₹10,000 per acre per year for purchase of inputs like seeds, fertilizers, and pesticides.', impact: 'Disbursed over ₹72,000 crore to 65 lakh farmers.' },
      { name: 'Mission Kakatiya', description: 'Massive restoration of 46,500 minor irrigation tanks and chain-tanks.', impact: 'Recharged groundwater tables across dry Telangana.' }
    ]
  },
  {
    id: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    type: 'State',
    zone: 'Eastern',
    majorCrops: ['Rice (Paddy)', 'Wheat', 'Maize (Kharif, Rabi & Zaid)', 'Litchi (Shahi)', 'Pulses (Lentil, Gram)', 'Makhana (Fox Nut)', 'Potato'],
    cultivars: {
      'Rice (Paddy)': ['Rajendra Sweta', 'Rajendra Kasturi', 'Swarna Sub-1', 'Sabour Harshit'],
      'Maize': ['Shaktiman 1', 'Shaktiman 2 (QPM)', 'DKC 9081', 'Pioneer 30V92'],
      'Makhana': ['Swarna Vaidehi', 'Sabour Makhana 1']
    },
    seasons: {
      kharif: ['Paddy', 'Maize', 'Arhar', 'Jute', 'Urad'],
      rabi: ['Wheat', 'Rabi Maize (world-record productivity)', 'Gram', 'Lentil', 'Mustard', 'Potato'],
      zaid: ['Summer Maize', 'Moong', 'Sunflower', 'Pointed Gourd (Parwal)']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - November', avgDurationDays: 130, primaryCrops: ['Paddy', 'Jute'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'April', avgDurationDays: 135, primaryCrops: ['Wheat', 'Rabi Maize', 'Lentil'] },
      { season: 'Zaid', sowing: 'March - April', harvesting: 'June', avgDurationDays: 70, primaryCrops: ['Summer Moong', 'Summer Maize'] }
    ],
    soilTypes: ['North Bihar Gangetic Alluvium (calcareous)', 'South Bihar Plain Alluvium', 'Tal and Diara Soils', 'Terai Soils'],
    climate: 'Sub-tropical monsoon, hot summers, fertile flood plains prone to seasonal floods',
    rainfallMm: 1205,
    irrigationPercentage: 66.3,
    irrigationMethods: ['Diesel and electric tube-wells', 'Gandak and Kosi canal systems', 'Ponds and borings'],
    cultivatedAreaLakhHa: 52.8,
    totalProductionMillionTonnes: 18.9,
    avgYieldKgPerHa: 2980,
    majorDistricts: ['Muzaffarpur', 'Samastipur', 'Rohtas', 'Katihar', 'Begusarai', 'Darbhanga', 'Nalanda', 'Purnia'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 16.2, areaLakhHa: 51.5, yieldKgPerHa: 2680 },
      { year: '2019-20', productionMillionTonnes: 17.1, areaLakhHa: 52.0, yieldKgPerHa: 2790 },
      { year: '2020-21', productionMillionTonnes: 17.9, areaLakhHa: 52.4, yieldKgPerHa: 2880 },
      { year: '2021-22', productionMillionTonnes: 17.5, areaLakhHa: 52.2, yieldKgPerHa: 2840 },
      { year: '2022-23', productionMillionTonnes: 18.3, areaLakhHa: 52.6, yieldKgPerHa: 2920 },
      { year: '2023-24', productionMillionTonnes: 18.9, areaLakhHa: 52.8, yieldKgPerHa: 2980 }
    ],
    governmentSchemes: [
      { name: 'Bihar Agricultural Road Map (Phase IV)', description: 'Strategic masterplan focusing on seed replacement, organic corridors along Ganga, and Makhana processing.', impact: 'Made Bihar produce 85% of global makhana supply.' },
      { name: 'Diesel Anudan Scheme', description: 'Direct fuel subsidy reimbursement during dry spells to ensure continuous tube-well irrigation.', impact: 'Prevented crop failure for 14 lakh marginal farmers.' }
    ]
  },
  {
    id: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    type: 'State',
    zone: 'Eastern',
    majorCrops: ['Rice (Paddy)', 'Pulses (Greengram, Blackgram)', 'Oilseeds (Groundnut, Mustard)', 'Sugarcane', 'Cashew', 'Turmeric (Kandhamal)'],
    cultivars: {
      'Rice (Paddy)': ['Pooja (CR 629-256)', 'Swarna Sub-1', 'Hasanta', 'Lalat', 'CR Dhan 310'],
      'Turmeric': ['Kandhamal Haldi (GI Tagged)']
    },
    seasons: {
      kharif: ['Sarada Paddy (autumn-winter)', 'Maize', 'Ragi', 'Arhar', 'Groundnut', 'Cotton'],
      rabi: ['Dalua Paddy (summer-spring)', 'Greengram', 'Blackgram', 'Mustard', 'Sunflower'],
      zaid: ['Summer Vegetables', 'Groundnut', 'Watermelon']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'November - December', avgDurationDays: 140, primaryCrops: ['Sarada Paddy', 'Millets'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'March - April', avgDurationDays: 120, primaryCrops: ['Dalua Paddy', 'Greengram'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 75, primaryCrops: ['Summer Groundnut', 'Vegetables'] }
    ],
    soilTypes: ['Red and Yellow Soils (western & central)', 'Laterite Soils', 'Coastal Deltaic Alluvium (Mahanadi)', 'Saline coastal soils'],
    climate: 'Tropical wet-and-dry, high humidity, cyclonic depressions from Bay of Bengal',
    rainfallMm: 1489,
    irrigationPercentage: 38.6,
    irrigationMethods: ['Hirakud and Rengali canal reservoirs', 'Deep borewells (Biju Krushak Vikas Yojana)', 'Check dams'],
    cultivatedAreaLakhHa: 53.6,
    totalProductionMillionTonnes: 11.2,
    avgYieldKgPerHa: 2240,
    majorDistricts: ['Bargarh (Rice Bowl of Odisha)', 'Ganjam', 'Balasore', 'Kalahandi', 'Cuttack', 'Kandhamal', 'Koraput', 'Sambalpur'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 9.8, areaLakhHa: 52.8, yieldKgPerHa: 1980 },
      { year: '2019-20', productionMillionTonnes: 10.4, areaLakhHa: 53.1, yieldKgPerHa: 2090 },
      { year: '2020-21', productionMillionTonnes: 10.9, areaLakhHa: 53.4, yieldKgPerHa: 2180 },
      { year: '2021-22', productionMillionTonnes: 10.6, areaLakhHa: 53.2, yieldKgPerHa: 2140 },
      { year: '2022-23', productionMillionTonnes: 11.0, areaLakhHa: 53.5, yieldKgPerHa: 2210 },
      { year: '2023-24', productionMillionTonnes: 11.2, areaLakhHa: 53.6, yieldKgPerHa: 2240 }
    ],
    governmentSchemes: [
      { name: 'Odisha Millets Mission (OMM)', description: 'Globally lauded flagship initiative reviving traditional millets (Mandia) among tribal farmers with assured procurement.', impact: 'Scaled to 177 blocks with 2.5 lakh smallholders.' },
      { name: 'KALIA Scheme', description: 'Krushak Assistance for Livelihood and Income Augmentation supporting small, marginal, and landless farm labourers.', impact: 'Direct support to 43 lakh farm families.' }
    ]
  },
  {
    id: 'assam',
    name: 'Assam',
    capital: 'Dispur',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Tea', 'Rice (Sali, Ahu, Boro)', 'Jute', 'Mustard', 'Arecanut', 'Assam Lemon (Kaji Nemu)', 'Ginger'],
    cultivars: {
      'Tea': ['TV 1', 'TV 20', 'TV 29', 'S.3A/1 (Assamica clone)'],
      'Rice (Paddy)': ['Ranjit Sub-1', 'Bahadur Sub-1', 'Bora Rice (Sticky)', 'Johas (Aromatic - Keteki Joha)'],
      'Mustard': ['TS 36', 'TS 38', 'M 27']
    },
    seasons: {
      kharif: ['Sali Paddy (winter rice - June to Dec)', 'Jute', 'Sugarcane', 'Tea flush'],
      rabi: ['Boro Paddy (summer rice)', 'Mustard', 'Potato', 'Pulses (Blackgram, Lentil)'],
      zaid: ['Ahu Paddy (autumn rice - Mar to July)', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'November - December', avgDurationDays: 145, primaryCrops: ['Sali Paddy', 'Jute'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'March - April', avgDurationDays: 120, primaryCrops: ['Boro Paddy', 'Mustard', 'Potato'] },
      { season: 'Zaid', sowing: 'March - April', harvesting: 'June - July', avgDurationDays: 95, primaryCrops: ['Ahu Paddy', 'Vegetables'] }
    ],
    soilTypes: ['Brahmaputra Flood Plain Alluvium (acidic)', 'Red and Yellow Mountain Soils', 'Terai Soils'],
    climate: 'Humid sub-tropical climate with very heavy monsoon rains and high humidity',
    rainfallMm: 2210,
    irrigationPercentage: 28.5,
    irrigationMethods: ['Shallow tube wells', 'River lift irrigation (Brahmaputra tributaries)', 'Dong traditional canal diversion'],
    cultivatedAreaLakhHa: 28.1,
    totalProductionMillionTonnes: 6.2,
    avgYieldKgPerHa: 2210,
    majorDistricts: ['Dibrugarh', 'Tinsukia', 'Golaghat', 'Sonitpur', 'Nagaon', 'Cachar', 'Barpeta', 'Kamrup'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 5.6, areaLakhHa: 27.8, yieldKgPerHa: 2020 },
      { year: '2019-20', productionMillionTonnes: 5.8, areaLakhHa: 27.9, yieldKgPerHa: 2090 },
      { year: '2020-21', productionMillionTonnes: 6.0, areaLakhHa: 28.0, yieldKgPerHa: 2160 },
      { year: '2021-22', productionMillionTonnes: 5.9, areaLakhHa: 28.0, yieldKgPerHa: 2130 },
      { year: '2022-23', productionMillionTonnes: 6.1, areaLakhHa: 28.1, yieldKgPerHa: 2180 },
      { year: '2023-24', productionMillionTonnes: 6.2, areaLakhHa: 28.1, yieldKgPerHa: 2210 }
    ],
    governmentSchemes: [
      { name: 'Assam Agri-business and Rural Transformation Project (APART)', description: 'World Bank assisted value chain development for climate-resilient rice and premium tea processing.', impact: 'Set up 50+ Farmer Producer Companies.' },
      { name: 'Mukhya Mantri Krishi Sa-Sajuli Yojana', description: '₹5,000 procurement grant for agricultural implements per farmer.', impact: 'Benefited 6 lakh small and marginal tea and paddy growers.' }
    ]
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    type: 'State',
    zone: 'Central',
    majorCrops: ['Rice (Paddy - Dhan ka Katora)', 'Maize', 'Kodo-Kutki (Minor Millets)', 'Gram', 'Soybean', 'Mustard', 'Niger'],
    cultivars: {
      'Rice (Paddy)': ['Mahamaya', 'Swarna', 'Dubraj (Aromatic)', 'IGKV R 1', 'Rajeshwari'],
      'Millets': ['Kodo (RBK 155)', 'Little Millet (Kutki - JK 8)']
    },
    seasons: {
      kharif: ['Paddy', 'Maize', 'Soybean', 'Arhar', 'Kodo-Kutki'],
      rabi: ['Gram', 'Lathyrus (Tiwra)', 'Mustard', 'Wheat', 'Linseed'],
      zaid: ['Summer Paddy', 'Groundnut', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'November - December', avgDurationDays: 135, primaryCrops: ['Paddy', 'Millets'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'March', avgDurationDays: 115, primaryCrops: ['Gram', 'Tiwra'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 75, primaryCrops: ['Vegetables', 'Summer Groundnut'] }
    ],
    soilTypes: ['Red and Yellow Soils (Matasi)', 'Red Sandy Soils (Bhata)', 'Clayey Black Soil (Kanhar)', 'Loamy Soil (Dorsa)'],
    climate: 'Tropical wet-and-dry with high summer heat and substantial monsoon rainfall',
    rainfallMm: 1292,
    irrigationPercentage: 36.2,
    irrigationMethods: ['Mahanadi canal system', 'Tubewells and solar irrigation pumps', 'Tanks'],
    cultivatedAreaLakhHa: 47.9,
    totalProductionMillionTonnes: 10.4,
    avgYieldKgPerHa: 2310,
    majorDistricts: ['Dhamtari', 'Raipur', 'Bilaspur', 'Durg', 'Rajnandgaon', 'Janjgir-Champa', 'Bastar'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 8.9, areaLakhHa: 47.1, yieldKgPerHa: 2010 },
      { year: '2019-20', productionMillionTonnes: 9.4, areaLakhHa: 47.3, yieldKgPerHa: 2110 },
      { year: '2020-21', productionMillionTonnes: 9.9, areaLakhHa: 47.6, yieldKgPerHa: 2210 },
      { year: '2021-22', productionMillionTonnes: 9.7, areaLakhHa: 47.5, yieldKgPerHa: 2180 },
      { year: '2022-23', productionMillionTonnes: 10.1, areaLakhHa: 47.8, yieldKgPerHa: 2260 },
      { year: '2023-24', productionMillionTonnes: 10.4, areaLakhHa: 47.9, yieldKgPerHa: 2310 }
    ],
    governmentSchemes: [
      { name: 'Rajiv Gandhi Kisan Nyay Yojana (RGKNY)', description: 'Direct input subsidy transfer of ₹9,000 per acre to paddy, millet, and pulse cultivators.', impact: 'Highest state procurement payout in central India.' },
      { name: 'Narva, Garuva, Ghurva, Badi (NGGB)', description: 'Integrated rural rejuvenation recharging rivulets (Narva) and utilizing organic manure.', impact: 'Restored over 10,000 micro-streams.' }
    ]
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    type: 'State',
    zone: 'Eastern',
    majorCrops: ['Rice (Paddy)', 'Maize', 'Pulses (Pigeonpea, Gram)', 'Mustard', 'Vegetables (Peas, Tomato, Cauliflower)'],
    cultivars: {
      'Rice (Paddy)': ['Birsa Dhan 108', 'Birsa Vikas Dhan 111', 'Sahbhagi Dhan', 'IR 64 Drt 1'],
      'Maize': ['Suwan 1', 'HQPM 1', 'Kanchan']
    },
    seasons: {
      kharif: ['Upland Paddy', 'Lowland Paddy', 'Maize', 'Arhar', 'Urad', 'Groundnut'],
      rabi: ['Wheat', 'Mustard', 'Gram', 'Lentil', 'Peas', 'Vegetables'],
      zaid: ['Summer Vegetables', 'Moong']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - November', avgDurationDays: 125, primaryCrops: ['Paddy', 'Maize'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'March', avgDurationDays: 120, primaryCrops: ['Mustard', 'Vegetables'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'May', avgDurationDays: 65, primaryCrops: ['Vegetables'] }
    ],
    soilTypes: ['Red Sandy Soils (Chotanagpur plateau, 80%)', 'Micaceous Soils (Koderma)', 'Laterite Soils'],
    climate: 'Tropical to sub-tropical with distinct wet monsoon season',
    rainfallMm: 1300,
    irrigationPercentage: 16.5,
    irrigationMethods: ['Check dams and micro-lift schemes', 'Farm ponds (Dobha)', 'Open wells'],
    cultivatedAreaLakhHa: 26.4,
    totalProductionMillionTonnes: 5.1,
    avgYieldKgPerHa: 2010,
    majorDistricts: ['Ranchi', 'Hazaribagh', 'Palamu', 'Giridih', 'Dumka', 'East Singhbhum', 'Gumla'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 4.4, areaLakhHa: 25.8, yieldKgPerHa: 1810 },
      { year: '2019-20', productionMillionTonnes: 4.7, areaLakhHa: 26.0, yieldKgPerHa: 1910 },
      { year: '2020-21', productionMillionTonnes: 4.9, areaLakhHa: 26.2, yieldKgPerHa: 1970 },
      { year: '2021-22', productionMillionTonnes: 4.8, areaLakhHa: 26.1, yieldKgPerHa: 1940 },
      { year: '2022-23', productionMillionTonnes: 5.0, areaLakhHa: 26.3, yieldKgPerHa: 1990 },
      { year: '2023-24', productionMillionTonnes: 5.1, areaLakhHa: 26.4, yieldKgPerHa: 2010 }
    ],
    governmentSchemes: [
      { name: 'Birsa Harit Gram Yojana', description: 'Afforestation and fruit-orchard cultivation on barren tribal lands alongside intercropping.', impact: 'Established 30,000+ acres of mango and guava orchards.' },
      { name: 'Jharkhand Krishi Rin Mafi Yojana', description: 'One-time farm loan waiver of up to ₹50,000 for distressed smallholders.', impact: 'Relieved debt for 4.7 lakh farmers.' }
    ]
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    type: 'State',
    zone: 'Northern',
    majorCrops: ['Apple', 'Maize', 'Wheat', 'Off-season Vegetables (Tomato, Capsicum, Peas)', 'Barley', 'Stone Fruits (Peach, Plum)'],
    cultivars: {
      'Apple': ['Royal Delicious', 'Red Chief', 'Gala', 'Fuji', 'Scarlet Spur'],
      'Maize': ['Palam Sankar Makka 1', 'Early Composite'],
      'Off-season Vegetables': ['Solan Lalima (Tomato)', 'California Wonder (Capsicum)']
    },
    seasons: {
      kharif: ['Maize', 'Rice (Paddy in valleys)', 'Off-season Tomato', 'Capsicum', 'Beans'],
      rabi: ['Wheat', 'Barley', 'Mustard', 'Winter Peas'],
      zaid: ['Apple harvest period (July-October)', 'Stone fruits (May-July)']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'May - June', harvesting: 'September - October', avgDurationDays: 120, primaryCrops: ['Maize', 'Vegetables'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'April - May', avgDurationDays: 160, primaryCrops: ['Wheat', 'Barley'] },
      { season: 'Zaid', sowing: 'Perennial', harvesting: 'July - October', avgDurationDays: 180, primaryCrops: ['Apple', 'Pear'] }
    ],
    soilTypes: ['Brown Hill Soil', 'Mountain Soil (sub-alpine & alpine)', 'Alluvial soil (valleys)'],
    climate: 'Cool temperate in mid and high hills, semi-tropical in foot hills, heavy winter snow',
    rainfallMm: 1251,
    irrigationPercentage: 22.8,
    irrigationMethods: ['Kuhl (traditional gravity channels from glaciers)', 'Lift irrigation from hill streams', 'Rainwater harvesting tanks'],
    cultivatedAreaLakhHa: 5.6,
    totalProductionMillionTonnes: 2.1,
    avgYieldKgPerHa: 2380,
    majorDistricts: ['Shimla', 'Kullu', 'Kinnaur', 'Kangra', 'Mandi', 'Solan', 'Sirmaur'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 1.8, areaLakhHa: 5.5, yieldKgPerHa: 2180 },
      { year: '2019-20', productionMillionTonnes: 1.9, areaLakhHa: 5.5, yieldKgPerHa: 2240 },
      { year: '2020-21', productionMillionTonnes: 2.0, areaLakhHa: 5.6, yieldKgPerHa: 2310 },
      { year: '2021-22', productionMillionTonnes: 1.9, areaLakhHa: 5.5, yieldKgPerHa: 2280 },
      { year: '2022-23', productionMillionTonnes: 2.0, areaLakhHa: 5.6, yieldKgPerHa: 2350 },
      { year: '2023-24', productionMillionTonnes: 2.1, areaLakhHa: 5.6, yieldKgPerHa: 2380 }
    ],
    governmentSchemes: [
      { name: 'Prakritik Kheti Khushhal Kisan Yojana (PK3Y)', description: 'Pioneering Subhash Palekar Natural Farming (SPNF) without synthetic inputs across apple orchards.', impact: 'Adopted across 1.7 lakh orchardists.' },
      { name: 'Himachal Pradesh Horticulture Development Project (HPHDP)', description: 'World Bank assisted rejuvenation of senile apple orchards with high-density dwarfing rootstocks.', impact: 'Boosted apple yield per hectare by 2.5x.' }
    ]
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    type: 'State',
    zone: 'Northern',
    majorCrops: ['Rice (Basmati)', 'Wheat', 'Sugarcane', 'Millets (Finger Millet / Mandua, Barnyard Millet / Jhangora)', 'Soybean', 'Apple'],
    cultivars: {
      'Rice (Paddy)': ['Type 3 (Dehraduni Basmati)', 'Pant Dhan 12', 'VL Dhan 208'],
      'Millets': ['VL Mandua 352', 'VL 376', 'VL Jhangora 29'],
      'Wheat': ['VL Gehun 907', 'UP 2572', 'HD 2967']
    },
    seasons: {
      kharif: ['Paddy', 'Mandua (Ragi)', 'Jhangora', 'Soybean', 'Sugarcane (Tarai)'],
      rabi: ['Wheat', 'Barley', 'Mustard', 'Lentil'],
      zaid: ['Summer Vegetables', 'Fodder Maize']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'May - June', harvesting: 'October', avgDurationDays: 130, primaryCrops: ['Paddy', 'Mandua', 'Jhangora'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'April - May', avgDurationDays: 155, primaryCrops: ['Wheat', 'Barley'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'June', avgDurationDays: 70, primaryCrops: ['Summer Vegetables'] }
    ],
    soilTypes: ['Tarai Alluvium (Udham Singh Nagar)', 'Mountain Forest Soil', 'Glacial and Alpine soils'],
    climate: 'Sub-tropical in plains/valleys to alpine cold in high altitudes',
    rainfallMm: 1550,
    irrigationPercentage: 49.2,
    irrigationMethods: ['Canals (Tarai region)', 'Tube wells', 'Gul / Kuhl (gravity hill flow)', 'Sprinklers'],
    cultivatedAreaLakhHa: 6.8,
    totalProductionMillionTonnes: 3.4,
    avgYieldKgPerHa: 2940,
    majorDistricts: ['Udham Singh Nagar', 'Haridwar', 'Dehradun', 'Nainital', 'Tehri Garhwal', 'Almora'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 3.0, areaLakhHa: 6.7, yieldKgPerHa: 2710 },
      { year: '2019-20', productionMillionTonnes: 3.1, areaLakhHa: 6.7, yieldKgPerHa: 2780 },
      { year: '2020-21', productionMillionTonnes: 3.3, areaLakhHa: 6.8, yieldKgPerHa: 2880 },
      { year: '2021-22', productionMillionTonnes: 3.2, areaLakhHa: 6.8, yieldKgPerHa: 2830 },
      { year: '2022-23', productionMillionTonnes: 3.3, areaLakhHa: 6.8, yieldKgPerHa: 2910 },
      { year: '2023-24', productionMillionTonnes: 3.4, areaLakhHa: 6.8, yieldKgPerHa: 2940 }
    ],
    governmentSchemes: [
      { name: 'Uttarakhand Millet Mission', description: 'Minimum support price and processing hubs for Mandua and Jhangora incorporated in midday meals.', impact: 'Doubled farm-gate realization for hill women farmers.' },
      { name: 'State Organic Farming Mission', description: 'Promotion of 100% organic certification in hill districts.', impact: 'Over 2 lakh hectares certified organic.' }
    ]
  },
  {
    id: 'jammu-and-kashmir',
    name: 'Jammu and Kashmir',
    capital: 'Srinagar / Jammu',
    type: 'Union Territory',
    zone: 'Northern',
    majorCrops: ['Apple (Kashmiri)', 'Saffron (Kashmiri Mongra)', 'Walnut', 'Almond', 'Paddy (Mushqbudji)', 'Maize', 'Wheat'],
    cultivars: {
      'Saffron': ['Crocus sativus (Mongra, Lacha - GI Tagged)'],
      'Apple': ['Kullu Delicious', 'Maharaji', 'Amri', 'Kala Kulu'],
      'Aromatic Rice': ['Mushqbudji', 'Kamad', 'Jhelum']
    },
    seasons: {
      kharif: ['Paddy (Valley)', 'Maize', 'Pulses', 'Saffron bloom (October-November)'],
      rabi: ['Wheat (Jammu plains)', 'Mustard', 'Barley', 'Oats'],
      zaid: ['Stone fruits', 'Cherry harvest (May-June)']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'May', harvesting: 'September - October', avgDurationDays: 130, primaryCrops: ['Valley Paddy', 'Maize'] },
      { season: 'Rabi', sowing: 'October', harvesting: 'May', avgDurationDays: 170, primaryCrops: ['Wheat', 'Mustard'] },
      { season: 'Zaid', sowing: 'Perennial', harvesting: 'October - November', avgDurationDays: 100, primaryCrops: ['Saffron', 'Walnut'] }
    ],
    soilTypes: ['Karewa Soils (Lacustrine terraces ideal for Saffron & Apple)', 'Alluvial Valley Soils', 'Mountain Skeletal Soils'],
    climate: 'Sub-tropical in Jammu plains, Mediterranean to alpine temperate in Kashmir valley',
    rainfallMm: 1011,
    irrigationPercentage: 42.1,
    irrigationMethods: ['Kuhl (gravity glacial streams)', 'Lift irrigation from River Jhelum', 'Sprinkler micro-irrigation'],
    cultivatedAreaLakhHa: 7.4,
    totalProductionMillionTonnes: 2.8,
    avgYieldKgPerHa: 2650,
    majorDistricts: ['Shopian', 'Baramulla', 'Pulwama (Saffron Bowl)', 'Anantnag', 'Jammu', 'Kathua', 'Budgam'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 2.4, areaLakhHa: 7.2, yieldKgPerHa: 2420 },
      { year: '2019-20', productionMillionTonnes: 2.5, areaLakhHa: 7.3, yieldKgPerHa: 2490 },
      { year: '2020-21', productionMillionTonnes: 2.7, areaLakhHa: 7.4, yieldKgPerHa: 2580 },
      { year: '2021-22', productionMillionTonnes: 2.6, areaLakhHa: 7.3, yieldKgPerHa: 2540 },
      { year: '2022-23', productionMillionTonnes: 2.7, areaLakhHa: 7.4, yieldKgPerHa: 2610 },
      { year: '2023-24', productionMillionTonnes: 2.8, areaLakhHa: 7.4, yieldKgPerHa: 2650 }
    ],
    governmentSchemes: [
      { name: 'National Saffron Mission', description: 'Rejuvenation of Karewas with drip irrigation, scientific corm multiplication, and India International Kashmir Saffron Trading Centre (IIKSTC).', impact: 'GI-tagged Kashmiri saffron prices doubled in global markets.' },
      { name: 'High-Density Apple Plantation Scheme', description: '50% capital subsidy on Italian and Dutch rootstocks.', impact: 'Shifted apple yield from 10 MT/ha to 40 MT/ha.' }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    capital: 'Leh',
    type: 'Union Territory',
    zone: 'Northern',
    majorCrops: ['Barley (Grim)', 'Sea Buckthorn (Leh Berry)', 'Apricot (Raktsey Karpo)', 'Alfalfa Fodder', 'Greenhouse Vegetables'],
    cultivars: {
      'Apricot': ['Raktsey Karpo (Sweet white seed - GI Tagged)', 'Halman', 'Shakarpara'],
      'Barley': ['Grim (Hulless Barley - Local Leh)', 'HBL 113']
    },
    seasons: {
      kharif: ['Barley (Grim)', 'Apricot', 'Sea Buckthorn', 'Buckwheat', 'Alfalfa'],
      rabi: ['Sub-zero deep winter freeze - Passive solar greenhouses active for leafy greens'],
      zaid: ['Pre-summer land preparation and glacial stream water channeling (April)']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'April - May', harvesting: 'August - September', avgDurationDays: 105, primaryCrops: ['Barley', 'Apricot', 'Buckwheat'] },
      { season: 'Rabi', sowing: 'Greenhouse only', harvesting: 'Continuous', avgDurationDays: 90, primaryCrops: ['Spinach', 'Coriander', 'Radish'] },
      { season: 'Zaid', sowing: 'April', harvesting: 'August', avgDurationDays: 110, primaryCrops: ['Alfalfa Fodder'] }
    ],
    soilTypes: ['Cold Desert Sandy Loam', 'Glacial Moraines', 'Alkaline Soils'],
    climate: 'Cold arid high-altitude desert with winter temperatures dipping to -30°C',
    rainfallMm: 102,
    irrigationPercentage: 99.1,
    irrigationMethods: ['Glacial melt channels (Chhurongs)', 'Artificial Ice Stupas (Sonam Wangchuk technology)'],
    cultivatedAreaLakhHa: 0.32,
    totalProductionMillionTonnes: 0.12,
    avgYieldKgPerHa: 2150,
    majorDistricts: ['Leh', 'Kargil'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.10, areaLakhHa: 0.31, yieldKgPerHa: 1980 },
      { year: '2019-20', productionMillionTonnes: 0.11, areaLakhHa: 0.31, yieldKgPerHa: 2040 },
      { year: '2020-21', productionMillionTonnes: 0.11, areaLakhHa: 0.32, yieldKgPerHa: 2090 },
      { year: '2021-22', productionMillionTonnes: 0.11, areaLakhHa: 0.32, yieldKgPerHa: 2080 },
      { year: '2022-23', productionMillionTonnes: 0.12, areaLakhHa: 0.32, yieldKgPerHa: 2120 },
      { year: '2023-24', productionMillionTonnes: 0.12, areaLakhHa: 0.32, yieldKgPerHa: 2150 }
    ],
    governmentSchemes: [
      { name: 'Mission Organic Development Initiative (M.O.D.I.)', description: 'Goal to transform Ladakh into 100% certified organic UT without synthetic fertilizers.', impact: 'Over 85 villages declared fully organic.' },
      { name: 'Sea Buckthorn Value Chain Mission', description: 'Promoting wild harvesting and processing of nutrient-rich wild seabuckthorn berries.', impact: 'Empowered women SHGs with stable high-altitude incomes.' }
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi (NCT)',
    capital: 'New Delhi',
    type: 'Union Territory',
    zone: 'Northern',
    majorCrops: ['Wheat', 'Paddy (Basmati)', 'Vegetables (Yamuna floodplains)', 'Flowers (Marigold, Rose)', 'Mustard'],
    cultivars: {
      'Wheat': ['HD 2967', 'HD 3086'],
      'Vegetables': ['Yamuna Belts Gourds', 'Okra', 'Spinach']
    },
    seasons: {
      kharif: ['Paddy', 'Bajra', 'Kharif Vegetables'],
      rabi: ['Wheat', 'Mustard', 'Winter Vegetables', 'Floriculture'],
      zaid: ['Cucurbits (Melons, Cucumbers in Yamuna bed)']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'July', harvesting: 'October - November', avgDurationDays: 120, primaryCrops: ['Paddy', 'Vegetables'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'April', avgDurationDays: 140, primaryCrops: ['Wheat', 'Mustard'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'June', avgDurationDays: 65, primaryCrops: ['Cucurbits', 'Vegetables'] }
    ],
    soilTypes: ['Yamuna Alluvial Floodplain', 'Sandy Loam'],
    climate: 'Sub-tropical semi-arid with scorching summers and chill foggy winters',
    rainfallMm: 611,
    irrigationPercentage: 81.2,
    irrigationMethods: ['Borewells', 'Treated recycled wastewater in peri-urban agriculture'],
    cultivatedAreaLakhHa: 0.28,
    totalProductionMillionTonnes: 0.18,
    avgYieldKgPerHa: 4120,
    majorDistricts: ['North West Delhi', 'South West Delhi', 'North Delhi', 'Alipur'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.17, areaLakhHa: 0.29, yieldKgPerHa: 3980 },
      { year: '2019-20', productionMillionTonnes: 0.17, areaLakhHa: 0.29, yieldKgPerHa: 4020 },
      { year: '2020-21', productionMillionTonnes: 0.18, areaLakhHa: 0.28, yieldKgPerHa: 4090 },
      { year: '2021-22', productionMillionTonnes: 0.17, areaLakhHa: 0.28, yieldKgPerHa: 4060 },
      { year: '2022-23', productionMillionTonnes: 0.18, areaLakhHa: 0.28, yieldKgPerHa: 4100 },
      { year: '2023-24', productionMillionTonnes: 0.18, areaLakhHa: 0.28, yieldKgPerHa: 4120 }
    ],
    governmentSchemes: [
      { name: 'Pusa Bio-Decomposer Free Spraying Scheme', description: 'Free microbial bio-enzyme spraying over paddy fields to decompose stubble without burning.', impact: 'Covered 5,000+ acres of agricultural land in Delhi border belts.' },
      { name: 'Peri-Urban Hydroponics & Rooftop Farming Support', description: 'Promoting vertical soilless farming for high-value salads and leafy vegetables.', impact: 'Reduced food miles for urban consumers.' }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    type: 'State',
    zone: 'Western',
    majorCrops: ['Cashew Nut', 'Coconut', 'Paddy', 'Arecanut', 'Mango (Mankurad)', 'Spices (Black Pepper, Nutmeg)'],
    cultivars: {
      'Cashew': ['Goa 1', 'Goa 2', 'Vengurla 4', 'Vengurla 7'],
      'Mango': ['Mankurad (GI Tagged)', 'Fernandina', 'Hilario'],
      'Paddy': ['Jyoti', 'Jaya', 'Korgut (Saline-tolerant Khazan rice)']
    },
    seasons: {
      kharif: ['Sorod Paddy (monsoon crop)', 'Cashew harvesting', 'Ginger', 'Turmeric'],
      rabi: ['Vaingan Paddy (winter irrigated crop)', 'Pulses (Alsande/Cowpea)', 'Sweet Potato'],
      zaid: ['Summer Vegetables', 'Watermelon']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June', harvesting: 'October', avgDurationDays: 125, primaryCrops: ['Sorod Paddy', 'Spices'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'March', avgDurationDays: 115, primaryCrops: ['Vaingan Paddy', 'Alsande'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'May', avgDurationDays: 60, primaryCrops: ['Vegetables'] }
    ],
    soilTypes: ['Laterite Soils (81%)', 'Alluvial & Coastal Sandy Soils', 'Saline Khazan Soils (estuarine floodplains)'],
    climate: 'Warm and humid tropical maritime climate with torrential SW monsoon',
    rainfallMm: 3005,
    irrigationPercentage: 27.2,
    irrigationMethods: ['Salaulim and Anjunem irrigation canal networks', 'Open tanks (Banda)', 'Khazan sluice-gate systems'],
    cultivatedAreaLakhHa: 1.34,
    totalProductionMillionTonnes: 0.38,
    avgYieldKgPerHa: 2740,
    majorDistricts: ['North Goa', 'South Goa'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.34, areaLakhHa: 1.32, yieldKgPerHa: 2580 },
      { year: '2019-20', productionMillionTonnes: 0.35, areaLakhHa: 1.33, yieldKgPerHa: 2630 },
      { year: '2020-21', productionMillionTonnes: 0.36, areaLakhHa: 1.33, yieldKgPerHa: 2680 },
      { year: '2021-22', productionMillionTonnes: 0.36, areaLakhHa: 1.33, yieldKgPerHa: 2670 },
      { year: '2022-23', productionMillionTonnes: 0.37, areaLakhHa: 1.34, yieldKgPerHa: 2710 },
      { year: '2023-24', productionMillionTonnes: 0.38, areaLakhHa: 1.34, yieldKgPerHa: 2740 }
    ],
    governmentSchemes: [
      { name: 'Shetkari Adhar Nidhi', description: 'Financial compensation for crop losses due to unseasonal rain or wild animal incursions.', impact: 'Protected coastal and Western Ghats fringe farmers.' },
      { name: 'Goa Khazan Land Restoration Project', description: 'Rebuilding saline dykes and mangrove buffer sluices protecting ancient estuarine farming.', impact: 'Restored 1,200 hectares of saline agricultural fields.' }
    ]
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Large Cardamom', 'Ginger', 'Buckwheat', 'Maize', 'Sikkim Mandarin (Orange)', 'Off-season Organic Vegetables'],
    cultivars: {
      'Large Cardamom': ['Ramsey', 'Sawney', 'Golsey', 'Varlangey (GI Tagged)'],
      'Ginger': ['Bhaise', 'Majhale', 'Gorubathan'],
      'Mandarin': ['Sikkim Mandarin (Sweet sweet-tart local)']
    },
    seasons: {
      kharif: ['Maize', 'Upland Paddy', 'Ginger', 'Buckwheat', 'Soybean'],
      rabi: ['Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Organic Green Peas'],
      zaid: ['Large Cardamom curing', 'Passion fruit', 'Mandarin harvesting']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'April - May', harvesting: 'September - October', avgDurationDays: 140, primaryCrops: ['Maize', 'Ginger'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'March - April', avgDurationDays: 145, primaryCrops: ['Wheat', 'Mustard'] },
      { season: 'Zaid', sowing: 'Perennial', harvesting: 'September - December', avgDurationDays: 120, primaryCrops: ['Large Cardamom'] }
    ],
    soilTypes: ['Brown Hill and Mountain Soils (humus-rich, acidic)', 'Skeletal Mountain Soils'],
    climate: 'Temperate alpine to humid sub-tropical depending on altitude, 100% Certified Organic State',
    rainfallMm: 2739,
    irrigationPercentage: 11.4,
    irrigationMethods: ['Spring water channelization (Dhara Vikas)', 'Gravity pipe systems', 'Rainwater rooftop and terrace harvesting'],
    cultivatedAreaLakhHa: 0.77,
    totalProductionMillionTonnes: 0.22,
    avgYieldKgPerHa: 1840,
    majorDistricts: ['East Sikkim (Gangtok)', 'West Sikkim (Gyalshing)', 'North Sikkim (Mangan)', 'South Sikkim (Namchi)'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.19, areaLakhHa: 0.76, yieldKgPerHa: 1710 },
      { year: '2019-20', productionMillionTonnes: 0.20, areaLakhHa: 0.76, yieldKgPerHa: 1760 },
      { year: '2020-21', productionMillionTonnes: 0.21, areaLakhHa: 0.77, yieldKgPerHa: 1800 },
      { year: '2021-22', productionMillionTonnes: 0.21, areaLakhHa: 0.77, yieldKgPerHa: 1790 },
      { year: '2022-23', productionMillionTonnes: 0.22, areaLakhHa: 0.77, yieldKgPerHa: 1820 },
      { year: '2023-24', productionMillionTonnes: 0.22, areaLakhHa: 0.77, yieldKgPerHa: 1840 }
    ],
    governmentSchemes: [
      { name: 'Sikkim Organic Mission (UN Future Policy Gold Award)', description: 'First 100% organic state in the world; total prohibition on sale and usage of chemical pesticides and fertilizers.', impact: 'Preserved Himalayan fragile biodiversity and fetched 40% export price premium.' },
      { name: 'Dhara Vikas Initiative', description: 'Spring-shed development recharging drying Himalayan mountain springs.', impact: 'Revived over 60 natural springs feeding terraced fields.' }
    ]
  },
  {
    id: 'tripura',
    name: 'Tripura',
    capital: 'Agartala',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Rice (Aman, Aus, Boro)', 'Rubber', 'Pineapple (Queen & Kew)', 'Jute', 'Tea', 'Potato', 'Arecanut'],
    cultivars: {
      'Pineapple': ['Queen Pineapple (GI Tagged - crisp aroma)', 'Kew'],
      'Rubber': ['RRII 105', 'RRIM 600'],
      'Rice (Paddy)': ['Gomati (TRC 2005-1)', 'Khowai', 'Puja']
    },
    seasons: {
      kharif: ['Aman Paddy', 'Jute', 'Maize', 'Vegetables'],
      rabi: ['Boro Paddy (irrigated)', 'Potato', 'Mustard', 'Pulses'],
      zaid: ['Aus Paddy', 'Pineapple harvest', 'Summer Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'November - December', avgDurationDays: 140, primaryCrops: ['Aman Paddy', 'Jute'] },
      { season: 'Rabi', sowing: 'November - December', harvesting: 'April', avgDurationDays: 125, primaryCrops: ['Boro Paddy', 'Potato'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'July', avgDurationDays: 110, primaryCrops: ['Aus Paddy', 'Pineapple'] }
    ],
    soilTypes: ['Red Sandy Loam', 'Alluvial Soils in River Valleys', 'Laterite Soils on Hillocks (Tillas)'],
    climate: 'Warm and humid sub-tropical monsoon climate with heavy rains',
    rainfallMm: 2200,
    irrigationPercentage: 35.8,
    irrigationMethods: ['Deep tube wells', 'River lift irrigation (Gomati, Khowai, Manu)', 'Artisanal check dams'],
    cultivatedAreaLakhHa: 2.95,
    totalProductionMillionTonnes: 0.94,
    avgYieldKgPerHa: 3010,
    majorDistricts: ['West Tripura', 'South Tripura', 'Gomati', 'Khowai', 'Dhalai', 'North Tripura'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.84, areaLakhHa: 2.88, yieldKgPerHa: 2790 },
      { year: '2019-20', productionMillionTonnes: 0.87, areaLakhHa: 2.90, yieldKgPerHa: 2860 },
      { year: '2020-21', productionMillionTonnes: 0.90, areaLakhHa: 2.92, yieldKgPerHa: 2940 },
      { year: '2021-22', productionMillionTonnes: 0.89, areaLakhHa: 2.91, yieldKgPerHa: 2910 },
      { year: '2022-23', productionMillionTonnes: 0.92, areaLakhHa: 2.94, yieldKgPerHa: 2980 },
      { year: '2023-24', productionMillionTonnes: 0.94, areaLakhHa: 2.95, yieldKgPerHa: 3010 }
    ],
    governmentSchemes: [
      { name: 'Mission for Integrated Development of Horticulture (MIDH - Pineapple)', description: 'Export promotion and cold-chain setting for Queen Pineapple to Middle East and European markets.', impact: 'Export volumes surged by 65%.' },
      { name: 'Tripura Natural Rubber Promotion Project', description: 'Second largest rubber producing state in India after Kerala; tribal settlement via rubber cultivation.', impact: 'Settled 40,000+ tribal shifting cultivators into settled estates.' }
    ]
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    capital: 'Shillong',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Lakadong Turmeric (High Curcumin)', 'Ginger', 'Rice (Paddy)', 'Maize', 'Arecanut', 'Betel Leaf', 'Khasi Mandarin'],
    cultivars: {
      'Turmeric': ['Lakadong (Curcumin content 7.5% - 9%)', 'Megha Turmeric 1'],
      'Ginger': ['Nadia', 'Maring'],
      'Orange': ['Khasi Mandarin (GI Tagged)']
    },
    seasons: {
      kharif: ['Paddy', 'Maize', 'Turmeric', 'Ginger', 'Sweet Potato', 'Soybean'],
      rabi: ['Mustard', 'Wheat', 'Winter Vegetables', 'Cole crops'],
      zaid: ['Summer Vegetables', 'Arecanut harvest']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'April - May', harvesting: 'October - November', avgDurationDays: 150, primaryCrops: ['Paddy', 'Turmeric', 'Ginger'] },
      { season: 'Rabi', sowing: 'October', harvesting: 'February - March', avgDurationDays: 130, primaryCrops: ['Mustard', 'Vegetables'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'May', avgDurationDays: 70, primaryCrops: ['Summer Vegetables'] }
    ],
    soilTypes: ['Red and Brown Hill Soils (strongly acidic)', 'Lateritic Soils'],
    climate: 'Temperate to sub-tropical with heaviest recorded rainfall on Earth (Mawsynram/Cherrapunji)',
    rainfallMm: 3100,
    irrigationPercentage: 23.4,
    irrigationMethods: ['Indigenous Bamboo Drip Irrigation System (200-year-old eco-engineering)', 'Stream diversions'],
    cultivatedAreaLakhHa: 2.85,
    totalProductionMillionTonnes: 0.52,
    avgYieldKgPerHa: 2110,
    majorDistricts: ['West Jaintia Hills', 'East Khasi Hills', 'Ri-Bhoi', 'West Garo Hills', 'South Garo Hills'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.46, areaLakhHa: 2.80, yieldKgPerHa: 1940 },
      { year: '2019-20', productionMillionTonnes: 0.48, areaLakhHa: 2.82, yieldKgPerHa: 2010 },
      { year: '2020-21', productionMillionTonnes: 0.50, areaLakhHa: 2.84, yieldKgPerHa: 2070 },
      { year: '2021-22', productionMillionTonnes: 0.49, areaLakhHa: 2.83, yieldKgPerHa: 2050 },
      { year: '2022-23', productionMillionTonnes: 0.51, areaLakhHa: 2.84, yieldKgPerHa: 2090 },
      { year: '2023-24', productionMillionTonnes: 0.52, areaLakhHa: 2.85, yieldKgPerHa: 2110 }
    ],
    governmentSchemes: [
      { name: 'Mission Lakadong', description: 'Expansion of world-famous Lakadong turmeric cultivation to 50,000 MT production target with direct processing units.', impact: 'Curcumin-certified harvest fetching top international pharma rates.' },
      { name: 'Aroma Mission Meghalaya', description: 'Cultivation of citronella, lemongrass, and patchouli for essential oil extraction on degraded hill slopes.', impact: 'Generated high-value alternate revenue for jhum cultivators.' }
    ]
  },
  {
    id: 'manipur',
    name: 'Manipur',
    capital: 'Imphal',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Rice (Chak-hao - Black Aromatic Rice)', 'Maize', 'King Chili (U-morok)', 'Kachai Lemon', 'Pulses', 'Ginger'],
    cultivars: {
      'Black Rice': ['Chak-hao Amubi (GI Tagged - Anthocyanin rich)', 'Chak-hao Poireiton'],
      'Rice (Paddy)': ['RCM 9', 'RCM 10', 'CAU R1'],
      'Chili': ['U-Morok / Ghost Pepper']
    },
    seasons: {
      kharif: ['Paddy (Valley wet rice)', 'Chak-hao', 'Maize', 'Soybean', 'King Chili'],
      rabi: ['Mustard', 'Field Pea', 'Broad Bean (Hawai-thrak)', 'Potato'],
      zaid: ['Summer Vegetables', 'Melons']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'November - December', avgDurationDays: 145, primaryCrops: ['Paddy', 'Chak-hao'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'March', avgDurationDays: 120, primaryCrops: ['Field Pea', 'Mustard'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'May', avgDurationDays: 70, primaryCrops: ['Vegetables'] }
    ],
    soilTypes: ['Imphal Valley Alluvial Loam', 'Ferruginous Red Soils on Hill slopes', 'Peaty organic soils around Loktak Lake'],
    climate: 'Sub-tropical temperate with pleasant summers and brisk cold winters',
    rainfallMm: 1467,
    irrigationPercentage: 26.8,
    irrigationMethods: ['Loktak lift canal scheme', 'Khonghampat stream network', 'Indigenous valley bunds'],
    cultivatedAreaLakhHa: 2.42,
    totalProductionMillionTonnes: 0.58,
    avgYieldKgPerHa: 2360,
    majorDistricts: ['Imphal West', 'Imphal East', 'Bishnupur', 'Thoubal', 'Ukhrul (Kachai)', 'Churachandpur'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.52, areaLakhHa: 2.38, yieldKgPerHa: 2190 },
      { year: '2019-20', productionMillionTonnes: 0.54, areaLakhHa: 2.39, yieldKgPerHa: 2260 },
      { year: '2020-21', productionMillionTonnes: 0.56, areaLakhHa: 2.41, yieldKgPerHa: 2320 },
      { year: '2021-22', productionMillionTonnes: 0.55, areaLakhHa: 2.40, yieldKgPerHa: 2300 },
      { year: '2022-23', productionMillionTonnes: 0.57, areaLakhHa: 2.41, yieldKgPerHa: 2340 },
      { year: '2023-24', productionMillionTonnes: 0.58, areaLakhHa: 2.42, yieldKgPerHa: 2360 }
    ],
    governmentSchemes: [
      { name: 'Mission Organic Value Chain Development for NER (MOVCD-NER)', description: 'Dedicated support for organic certification and brand building for Chak-hao Black Rice and Kachai Lemon.', impact: 'Chak-hao exported to European and US gourmet markets.' },
      { name: 'Kachai Lemon Festival & GI Promotion', description: 'Commercialization of unique high-ascorbic acid Kachai lemon variety from Ukhrul.', impact: 'Doubled tribal grower household income.' }
    ]
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Naga King Chili (Bhut Jolokia)', 'Rice (Jhum & Terraced TRC)', 'Maize', 'Soybean', 'Passion Fruit', 'Cardamom', 'Ginger'],
    cultivars: {
      'King Chili': ['Naga Mircha (GI Tagged - >1,000,000 Scoville Heat Units)'],
      'Rice (Paddy)': ['Rengma Rice', 'Tekake', 'Meghalaya 1', 'CAU R1'],
      'Ginger': ['Nadia']
    },
    seasons: {
      kharif: ['TRC (Terrace Rice Cultivation)', 'Jhum Paddy', 'Maize', 'Soybean', 'Naga Chili'],
      rabi: ['Mustard', 'Winter Vegetables', 'Barley', 'Peas'],
      zaid: ['Passion fruit harvesting', 'Off-season greens']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'April - May', harvesting: 'October - November', avgDurationDays: 160, primaryCrops: ['Paddy', 'Naga Mircha'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'March', avgDurationDays: 120, primaryCrops: ['Mustard', 'Peas'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'June', avgDurationDays: 90, primaryCrops: ['Passion Fruit'] }
    ],
    soilTypes: ['Ferruginous Red Soils', 'Forest Brown Soils (organic-rich)', 'Sandy Loam in foothill plains'],
    climate: 'Sub-tropical monsoon climate with heavy summer rainfall and cool winters',
    rainfallMm: 1850,
    irrigationPercentage: 24.1,
    irrigationMethods: ['Ruza traditional water harvesting system (Phek district)', 'Zabo farming system (integrated forest-pond-terrace system)'],
    cultivatedAreaLakhHa: 3.85,
    totalProductionMillionTonnes: 0.72,
    avgYieldKgPerHa: 2190,
    majorDistricts: ['Kohima', 'Dimapur', 'Mokokchung', 'Phek', 'Wokha', 'Mon', 'Tuensang'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.65, areaLakhHa: 3.80, yieldKgPerHa: 2010 },
      { year: '2019-20', productionMillionTonnes: 0.68, areaLakhHa: 3.82, yieldKgPerHa: 2090 },
      { year: '2020-21', productionMillionTonnes: 0.70, areaLakhHa: 3.84, yieldKgPerHa: 2150 },
      { year: '2021-22', productionMillionTonnes: 0.69, areaLakhHa: 3.83, yieldKgPerHa: 2130 },
      { year: '2022-23', productionMillionTonnes: 0.71, areaLakhHa: 3.84, yieldKgPerHa: 2170 },
      { year: '2023-24', productionMillionTonnes: 0.72, areaLakhHa: 3.85, yieldKgPerHa: 2190 }
    ],
    governmentSchemes: [
      { name: 'Zabo & Ruza Integrated Indigenous Water Conservation Promotion', description: 'Official adoption and scaling of ancient Angami and Chakhesang terraced eco-farming techniques.', impact: 'Zero water wastage across dry hill ridges.' },
      { name: 'Naga Organic App & FPO Aggregation', description: 'Digital traceability connecting Naga King Chili and organic ginger producers directly with buyers.', impact: 'Reduced middleman margin by 35%.' }
    ]
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    capital: 'Aizawl',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Mizo Chili (Bird’s Eye Chili)', 'Rice (Paddy)', 'Ginger (Thingpui)', 'Turmeric', 'Oil Palm', 'Anthuriams & Orchids', 'Banana'],
    cultivars: {
      'Bird’s Eye Chili': ['Mizo Chili (GI Tagged - highly pungent)'],
      'Ginger': ['Thingpui (GI Tagged aromatic ginger)', 'Thinglaidum'],
      'Rice (Paddy)': ['Zorin Dhan', 'Tai Paddy', 'Pusa 44']
    },
    seasons: {
      kharif: ['Jhum Paddy', 'Wet Rice Cultivation (WRC)', 'Ginger', 'Turmeric', 'Maize'],
      rabi: ['Mustard', 'Field Pea', 'Cabbage', 'Winter Maize'],
      zaid: ['Summer Vegetables', 'Passion fruit', 'Citrus']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'April - May', harvesting: 'October - November', avgDurationDays: 155, primaryCrops: ['WRC Paddy', 'Ginger', 'Chili'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'March', avgDurationDays: 125, primaryCrops: ['Mustard', 'Vegetables'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'June', avgDurationDays: 80, primaryCrops: ['Summer Vegetables'] }
    ],
    soilTypes: ['Red and Yellow Soils', 'Acidic Mountain Loam', 'Clayey Alluvium in narrow valley floors'],
    climate: 'Humid sub-tropical with abundant rainfall and pleasant mountain breezes',
    rainfallMm: 2540,
    irrigationPercentage: 14.8,
    irrigationMethods: ['Gravity stream piping', 'WRC channel diversion', 'Rainwater harvesting cisterns'],
    cultivatedAreaLakhHa: 1.28,
    totalProductionMillionTonnes: 0.28,
    avgYieldKgPerHa: 2180,
    majorDistricts: ['Aizawl', 'Lunglei', 'Champhai (Rice Bowl of Mizoram)', 'Kolasib', 'Serchhip'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.24, areaLakhHa: 1.24, yieldKgPerHa: 1980 },
      { year: '2019-20', productionMillionTonnes: 0.25, areaLakhHa: 1.25, yieldKgPerHa: 2060 },
      { year: '2020-21', productionMillionTonnes: 0.27, areaLakhHa: 1.27, yieldKgPerHa: 2130 },
      { year: '2021-22', productionMillionTonnes: 0.26, areaLakhHa: 1.26, yieldKgPerHa: 2100 },
      { year: '2022-23', productionMillionTonnes: 0.27, areaLakhHa: 1.27, yieldKgPerHa: 2160 },
      { year: '2023-24', productionMillionTonnes: 0.28, areaLakhHa: 1.28, yieldKgPerHa: 2180 }
    ],
    governmentSchemes: [
      { name: 'New Land Use Policy (NLUP) / SEDP', description: 'Socio-Economic Development Policy weaning tribal families away from destructive shifting cultivation towards permanent orchards and spice plots.', impact: 'Reduced jhum fires by 60%.' },
      { name: 'National Mission on Edible Oils - Oil Palm (NMEO-OP)', description: 'Cluster-based oil palm plantations in Kolasib and Mamit districts with local processing mills.', impact: 'Increased domestic cooking oil production.' }
    ]
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    type: 'State',
    zone: 'North-Eastern',
    majorCrops: ['Kiwi (Organic Ziro)', 'Large Cardamom', 'Rice (Apatani Rice-Fish System)', 'Maize', 'Millet (Finger Millet)', 'Ginger', 'Orange'],
    cultivars: {
      'Kiwi': ['Allison', 'Bruno', 'Hayward (GI Tagged certified organic)'],
      'Apatani Rice': ['Emo (White rice)', 'Pyaping (Red sticky rice)'],
      'Cardamom': ['Ramsai', 'Golsey']
    },
    seasons: {
      kharif: ['Paddy (Terraced & Jhum)', 'Maize', 'Millets', 'Ginger', 'Soybean'],
      rabi: ['Wheat', 'Mustard', 'Buckwheat', 'Barley', 'Potato'],
      zaid: ['Kiwi harvesting (October-November)', 'Apple & Walnut']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'April - May', harvesting: 'October - November', avgDurationDays: 160, primaryCrops: ['Paddy', 'Maize', 'Millets'] },
      { season: 'Rabi', sowing: 'October - November', harvesting: 'March - April', avgDurationDays: 140, primaryCrops: ['Mustard', 'Buckwheat'] },
      { season: 'Zaid', sowing: 'Perennial', harvesting: 'October - November', avgDurationDays: 120, primaryCrops: ['Kiwi', 'Orange'] }
    ],
    soilTypes: ['Brown Forest Soil', 'Red and Sandy Loam', 'Alluvial valley soils'],
    climate: 'Sub-tropical in southern foothills, temperate in mid hills, alpine in extreme northern ranges',
    rainfallMm: 3340,
    irrigationPercentage: 21.6,
    irrigationMethods: ['Apatani indigenous bamboo canal & sluice system', 'Stream diversion channels', 'Gravity pipes'],
    cultivatedAreaLakhHa: 2.18,
    totalProductionMillionTonnes: 0.44,
    avgYieldKgPerHa: 2020,
    majorDistricts: ['Lower Subansiri (Ziro Valley)', 'West Kameng', 'Papum Pare', 'East Siang', 'Tawang', 'Changlang'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.38, areaLakhHa: 2.12, yieldKgPerHa: 1810 },
      { year: '2019-20', productionMillionTonnes: 0.40, areaLakhHa: 2.14, yieldKgPerHa: 1890 },
      { year: '2020-21', productionMillionTonnes: 0.42, areaLakhHa: 2.16, yieldKgPerHa: 1960 },
      { year: '2021-22', productionMillionTonnes: 0.41, areaLakhHa: 2.15, yieldKgPerHa: 1930 },
      { year: '2022-23', productionMillionTonnes: 0.43, areaLakhHa: 2.17, yieldKgPerHa: 1990 },
      { year: '2023-24', productionMillionTonnes: 0.44, areaLakhHa: 2.18, yieldKgPerHa: 2020 }
    ],
    governmentSchemes: [
      { name: 'Apatani Agro-Fish Heritage Preservation Scheme', description: 'Protection of UNESCO tentative heritage Apatani wet rice terraces co-cultivated with Common Carp fish.', impact: 'Zero synthetic inputs with high caloric fish and carbohydrate yields.' },
      { name: 'Arunachal Organic Kiwi Mission', description: 'Certified India’s first indigenous organic kiwi; cold chain distribution across metropolitan centers.', impact: 'High export realization for Ziro farmers.' }
    ]
  },
  {
    id: 'andaman-and-nicobar-islands',
    name: 'Andaman & Nicobar Islands',
    capital: 'Port Blair',
    type: 'Union Territory',
    zone: 'Southern',
    majorCrops: ['Coconut', 'Arecanut', 'Paddy', 'Spices (Clove, Cinnamon, Nutmeg, Black Pepper)', 'Banana', 'Papaya'],
    cultivars: {
      'Coconut': ['Andaman Ordinary Tall', 'Nicobar Orange Dwarf', 'Nicobar Yellow Dwarf'],
      'Paddy': ['C14-8', 'Bhavani', 'CARILal Dhan']
    },
    seasons: {
      kharif: ['Paddy (Monsoon crop)', 'Cassava', 'Sweet Potato', 'Turmeric'],
      rabi: ['Pulses', 'Oilseeds', 'Vegetables (okra, brinjal, cucurbits)'],
      zaid: ['Coconut and spice harvesting', 'Tropical fruits']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'May - June', harvesting: 'November', avgDurationDays: 150, primaryCrops: ['Paddy', 'Tubers'] },
      { season: 'Rabi', sowing: 'December', harvesting: 'March', avgDurationDays: 100, primaryCrops: ['Pulses', 'Vegetables'] },
      { season: 'Zaid', sowing: 'Perennial', harvesting: 'Year-round', avgDurationDays: 365, primaryCrops: ['Coconut', 'Arecanut'] }
    ],
    soilTypes: ['Coastal Coralline Alluvium', 'Red Loamy Soils', 'Saline Mangrove Alluvial Soils'],
    climate: 'Equatorial humid tropical maritime climate with heavy precipitation from both monsoons',
    rainfallMm: 3180,
    irrigationPercentage: 8.5,
    irrigationMethods: ['Rainwater harvesting tanks', 'Perennial stream weirs', 'Open dug wells'],
    cultivatedAreaLakhHa: 0.48,
    totalProductionMillionTonnes: 0.16,
    avgYieldKgPerHa: 2710,
    majorDistricts: ['South Andaman', 'North & Middle Andaman', 'Nicobar'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.14, areaLakhHa: 0.46, yieldKgPerHa: 2540 },
      { year: '2019-20', productionMillionTonnes: 0.15, areaLakhHa: 0.47, yieldKgPerHa: 2600 },
      { year: '2020-21', productionMillionTonnes: 0.15, areaLakhHa: 0.47, yieldKgPerHa: 2660 },
      { year: '2021-22', productionMillionTonnes: 0.15, areaLakhHa: 0.47, yieldKgPerHa: 2640 },
      { year: '2022-23', productionMillionTonnes: 0.16, areaLakhHa: 0.48, yieldKgPerHa: 2690 },
      { year: '2023-24', productionMillionTonnes: 0.16, areaLakhHa: 0.48, yieldKgPerHa: 2710 }
    ],
    governmentSchemes: [
      { name: 'Island Organic Agriculture Promotion Program', description: 'Transforming Nicobar into a 100% organic virgin coconut oil hub.', impact: 'Certified 14,000 hectares of organic coconut estates.' },
      { name: 'Micro-Irrigation & Farm Pond Island Scheme', description: 'Preventing saltwater intrusion and storing tropical monsoon run-off.', impact: 'Added 1,100 high-density rainwater catchment tanks.' }
    ]
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    capital: 'Chandigarh',
    type: 'Union Territory',
    zone: 'Northern',
    majorCrops: ['Wheat', 'Fodder', 'Vegetables (Peri-urban)', 'Floriculture', 'Mushrooms'],
    cultivars: {
      'Wheat': ['HD 2967', 'HD 3086'],
      'Mushroom': ['Button Mushroom (Agaricus bisporus)']
    },
    seasons: {
      kharif: ['Fodder Maize', 'Chari', 'Vegetables'],
      rabi: ['Wheat', 'Mustard', 'Winter Vegetables', 'Roses & Chrysanthemums'],
      zaid: ['Summer Vegetables', 'Gourds']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'July', harvesting: 'October', avgDurationDays: 110, primaryCrops: ['Fodder', 'Vegetables'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'April', avgDurationDays: 140, primaryCrops: ['Wheat', 'Floriculture'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'June', avgDurationDays: 60, primaryCrops: ['Summer Vegetables'] }
    ],
    soilTypes: ['Indo-Gangetic Alluvium (Sandy Loam)'],
    climate: 'Sub-tropical with hot summers, cold winters, and moderate monsoon',
    rainfallMm: 1055,
    irrigationPercentage: 99.4,
    irrigationMethods: ['Deep tubewells', 'Canal supply from Kajauli water works'],
    cultivatedAreaLakhHa: 0.012,
    totalProductionMillionTonnes: 0.008,
    avgYieldKgPerHa: 4350,
    majorDistricts: ['Chandigarh (Peri-urban agricultural belt)'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.007, areaLakhHa: 0.012, yieldKgPerHa: 4120 },
      { year: '2019-20', productionMillionTonnes: 0.007, areaLakhHa: 0.012, yieldKgPerHa: 4190 },
      { year: '2020-21', productionMillionTonnes: 0.008, areaLakhHa: 0.012, yieldKgPerHa: 4280 },
      { year: '2021-22', productionMillionTonnes: 0.008, areaLakhHa: 0.012, yieldKgPerHa: 4250 },
      { year: '2022-23', productionMillionTonnes: 0.008, areaLakhHa: 0.012, yieldKgPerHa: 4320 },
      { year: '2023-24', productionMillionTonnes: 0.008, areaLakhHa: 0.012, yieldKgPerHa: 4350 }
    ],
    governmentSchemes: [
      { name: 'Urban Horticulture & Terrace Farming Subsidy', description: 'Promoting vertical gardens and hydroponic polyhouses in the urban periphery.', impact: 'Promoted local greens for city consumption.' }
    ]
  },
  {
    id: 'dadra-and-nagar-haveli-and-daman-and-diu',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    capital: 'Daman',
    type: 'Union Territory',
    zone: 'Western',
    majorCrops: ['Paddy', 'Ragi (Nagali)', 'Pulses (Tur, Urad)', 'Mango (Alphonso)', 'Coconut', 'Chiku (Sapodilla)'],
    cultivars: {
      'Paddy': ['Gurjari', 'GR 11', 'Jaya'],
      'Ragi': ['GN 4', 'GN 5', 'VL 352']
    },
    seasons: {
      kharif: ['Paddy', 'Ragi', 'Tur', 'Urad'],
      rabi: ['Wheat (irrigated)', 'Mustard', 'Vegetables'],
      zaid: ['Summer Vegetables', 'Coconut']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June - July', harvesting: 'October - November', avgDurationDays: 130, primaryCrops: ['Paddy', 'Ragi'] },
      { season: 'Rabi', sowing: 'November', harvesting: 'March', avgDurationDays: 120, primaryCrops: ['Vegetables'] },
      { season: 'Zaid', sowing: 'March', harvesting: 'May', avgDurationDays: 65, primaryCrops: ['Summer Vegetables'] }
    ],
    soilTypes: ['Coastal Alluvium', 'Lateritic Red Soils', 'Black Loamy Soils (Nagar Haveli)'],
    climate: 'Tropical maritime with high humidity and heavy SW monsoon',
    rainfallMm: 2150,
    irrigationPercentage: 32.5,
    irrigationMethods: ['Madhuban Dam canal network', 'Open wells', 'Lift irrigation from Damanganga River'],
    cultivatedAreaLakhHa: 0.26,
    totalProductionMillionTonnes: 0.08,
    avgYieldKgPerHa: 2540,
    majorDistricts: ['Dadra and Nagar Haveli (Silvassa)', 'Daman', 'Diu'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.07, areaLakhHa: 0.25, yieldKgPerHa: 2380 },
      { year: '2019-20', productionMillionTonnes: 0.07, areaLakhHa: 0.25, yieldKgPerHa: 2430 },
      { year: '2020-21', productionMillionTonnes: 0.08, areaLakhHa: 0.26, yieldKgPerHa: 2490 },
      { year: '2021-22', productionMillionTonnes: 0.08, areaLakhHa: 0.26, yieldKgPerHa: 2470 },
      { year: '2022-23', productionMillionTonnes: 0.08, areaLakhHa: 0.26, yieldKgPerHa: 2510 },
      { year: '2023-24', productionMillionTonnes: 0.08, areaLakhHa: 0.26, yieldKgPerHa: 2540 }
    ],
    governmentSchemes: [
      { name: 'Tribal Farm Support & High-Density Mango Plantation Scheme', description: 'Assistance for tribal farmers transitioning to grafted Alphonso and Kesar mango orchards.', impact: 'Higher disposable income for Varli and Dhodia farmers.' }
    ]
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    type: 'Union Territory',
    zone: 'Southern',
    majorCrops: ['Coconut (Laccadive Micro & Ordinary)', 'Breadfruit', 'Banana', 'Papaya', 'Intercropped Sweet Potato'],
    cultivars: {
      'Coconut': ['Laccadive Ordinary (Tall)', 'Laccadive Micro (Extremely high copra oil content)', 'Laccadive Small']
    },
    seasons: {
      kharif: ['Intercropped Vegetables during SW Monsoon'],
      rabi: ['Pulses and sweet potato on coral sands'],
      zaid: ['Year-round perennial coconut harvest and sun drying of copra']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'June', harvesting: 'September', avgDurationDays: 100, primaryCrops: ['Vegetables', 'Tubers'] },
      { season: 'Rabi', sowing: 'October', harvesting: 'January', avgDurationDays: 90, primaryCrops: ['Pulses'] },
      { season: 'Zaid', sowing: 'Perennial', harvesting: 'Monthly cycles', avgDurationDays: 365, primaryCrops: ['Coconut'] }
    ],
    soilTypes: ['Coral Sandy Soils (Calcium carbonate rich, alkaline)'],
    climate: 'Equatorial tropical marine with very high humidity and warm temperatures year-round',
    rainfallMm: 1615,
    irrigationPercentage: 100,
    irrigationMethods: ['Freshwater lens skimmed wells', 'Rainwater collection tanks'],
    cultivatedAreaLakhHa: 0.027,
    totalProductionMillionTonnes: 0.052,
    avgYieldKgPerHa: 2890,
    majorDistricts: ['Kavaratti', 'Agatti', 'Andrott', 'Minicoy'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.048, areaLakhHa: 0.027, yieldKgPerHa: 2710 },
      { year: '2019-20', productionMillionTonnes: 0.049, areaLakhHa: 0.027, yieldKgPerHa: 2770 },
      { year: '2020-21', productionMillionTonnes: 0.050, areaLakhHa: 0.027, yieldKgPerHa: 2830 },
      { year: '2021-22', productionMillionTonnes: 0.050, areaLakhHa: 0.027, yieldKgPerHa: 2810 },
      { year: '2022-23', productionMillionTonnes: 0.051, areaLakhHa: 0.027, yieldKgPerHa: 2860 },
      { year: '2023-24', productionMillionTonnes: 0.052, areaLakhHa: 0.027, yieldKgPerHa: 2890 }
    ],
    governmentSchemes: [
      { name: '100% Organic Island Territory Certification', description: 'Declared completely organic by Government of India; all copra and coconut products certified pesticide-free.', impact: 'Highest quality copra and virgin coconut oil fetch premium prices.' }
    ]
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    capital: 'Puducherry',
    type: 'Union Territory',
    zone: 'Southern',
    majorCrops: ['Rice (Paddy)', 'Sugarcane', 'Groundnut', 'Coconut', 'Tapioca', 'Banana', 'Betel Vine'],
    cultivars: {
      'Rice (Paddy)': ['ADT 37', 'ADT 43', 'BPT 5204', 'CO 43'],
      'Groundnut': ['TMV 7', 'VRI 2']
    },
    seasons: {
      kharif: ['Kuruvai / Sornavari Paddy (May-Aug)', 'Groundnut', 'Sugarcane'],
      rabi: ['Samba Paddy (Aug-Jan)', 'Thaladi Paddy (Oct-Feb)', 'Pulses'],
      zaid: ['Navarai Paddy', 'Summer Groundnut', 'Vegetables']
    },
    sowingHarvestingTimeline: [
      { season: 'Kharif', sowing: 'May - June', harvesting: 'September', avgDurationDays: 110, primaryCrops: ['Kuruvai Paddy', 'Groundnut'] },
      { season: 'Rabi', sowing: 'August - September', harvesting: 'January - February', avgDurationDays: 140, primaryCrops: ['Samba Paddy'] },
      { season: 'Zaid', sowing: 'February', harvesting: 'May', avgDurationDays: 80, primaryCrops: ['Navarai Paddy', 'Vegetables'] }
    ],
    soilTypes: ['Coastal Deltaic Alluvium', 'Red Sandy Soil', 'Black Soils (Karaikal)'] ,
    climate: 'Tropical wet-and-dry with northeast monsoon rains in October to December',
    rainfallMm: 1338,
    irrigationPercentage: 84.7,
    irrigationMethods: ['Ousteri and Bahour Lake canal feeders', 'Deep tubewells', 'Canal networks from Cauvery (Karaikal)'],
    cultivatedAreaLakhHa: 0.24,
    totalProductionMillionTonnes: 0.095,
    avgYieldKgPerHa: 3620,
    majorDistricts: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
    historicalTrends: [
      { year: '2018-19', productionMillionTonnes: 0.088, areaLakhHa: 0.24, yieldKgPerHa: 3380 },
      { year: '2019-20', productionMillionTonnes: 0.091, areaLakhHa: 0.24, yieldKgPerHa: 3460 },
      { year: '2020-21', productionMillionTonnes: 0.093, areaLakhHa: 0.24, yieldKgPerHa: 3540 },
      { year: '2021-22', productionMillionTonnes: 0.092, areaLakhHa: 0.24, yieldKgPerHa: 3510 },
      { year: '2022-23', productionMillionTonnes: 0.094, areaLakhHa: 0.24, yieldKgPerHa: 3590 },
      { year: '2023-24', productionMillionTonnes: 0.095, areaLakhHa: 0.24, yieldKgPerHa: 3620 }
    ],
    governmentSchemes: [
      { name: 'Uzhavar Santhai Direct Marketing Support', description: 'Direct farmer-to-consumer vegetable markets eliminating commission agents.', impact: 'Enhanced grower margins by 22%.' }
    ]
  }
];
