export interface CropData {
  id: string;
  name: string;
  scientificName: string;
  category: 'Food Crops' | 'Commercial Crops' | 'Horticultural Crops' | 'Plantation Crops';
  subcategory: string;
  image: string;
  popularVarieties: string[];
  suitableStates: string[];
  topDistricts: string[];
  soilRequirements: string;
  climateRequirements: string;
  idealTemperature: string;
  rainfallRequirementMm: string;
  seasons: ('Kharif' | 'Rabi' | 'Zaid' | 'Perennial')[];
  sowingSeason: string;
  harvestingSeason: string;
  averageDurationDays: number;
  waterRequirements: string;
  fertilizerNPK: string;
  expectedYieldPerHa: string;
  nationalProductionShare: number; // % of its category
  commonPestsDiseases: {
    name: string;
    type: 'Pest' | 'Disease';
    symptoms: string;
    management: string;
  }[];
  harvestingAndStorage: {
    method: string;
    moistureContent: string;
    storageConditions: string;
  };
  generalGuidance: string;
  regionalGuidance: {
    region: string;
    tips: string;
  }[];
}

export const CROPS_DATABASE: CropData[] = [
  // --- FOOD CROPS ---
  {
    id: 'rice-paddy',
    name: 'Rice (Paddy)',
    scientificName: 'Oryza sativa',
    category: 'Food Crops',
    subcategory: 'Cereal',
    image: '/assets/aistudio/image_3ef8ae2a.png',
    popularVarieties: ['Pusa Basmati 1121', 'Pusa Basmati 1509', 'IR 64', 'Swarna (MTU 7029)', 'BPT 5204 (Samba Mahsuri)', 'PR 126', 'Gobindobhog', 'Chak-hao'],
    suitableStates: ['West Bengal', 'Uttar Pradesh', 'Punjab', 'Andhra Pradesh', 'Telangana', 'Odisha', 'Chhattisgarh', 'Bihar', 'Tamil Nadu', 'Assam'],
    topDistricts: ['Purba Bardhaman (WB)', 'Ludhiana (PB)', 'Karnal (HR)', 'East Godavari (AP)', 'Nalgonda (TS)', 'Bargarh (OD)'],
    soilRequirements: 'Heavy clay or clayey loam soils capable of holding standing water. pH range 5.5 to 7.0.',
    climateRequirements: 'Hot and humid climate with prolonged sunshine during grain filling. Abundant water availability.',
    idealTemperature: '22°C to 34°C during growth; requires >20°C for flowering',
    rainfallRequirementMm: '1200 - 2000 mm (or equivalent canal/tubewell irrigation)',
    seasons: ['Kharif', 'Rabi', 'Zaid'],
    sowingSeason: 'June - July (Kharif) / Nov - Dec (Rabi/Boro)',
    harvestingSeason: 'October - November (Kharif) / April - May (Boro)',
    averageDurationDays: 130,
    waterRequirements: 'High (1200 - 1400 mm total requirement); 5 cm standing water during tillering to panicle initiation.',
    fertilizerNPK: '120:60:40 kg/ha (N:P2O5:K2O) + 25 kg Zinc Sulphate',
    expectedYieldPerHa: '3.8 - 6.5 tonnes/ha (irrigated Indo-Gangetic Plains); 2.5 - 3.5 tonnes/ha (rainfed eastern plains)',
    nationalProductionShare: 42.5,
    commonPestsDiseases: [
      { name: 'Brown Plant Hopper (BPH)', type: 'Pest', symptoms: 'Circular patches of drying plants known as "hopper burn".', management: 'Avoid excessive nitrogen; drain standing water intermittently; spray Pymetrozine 50% WG @ 120 g/acre.' },
      { name: 'Bacterial Leaf Blight (BLB)', type: 'Disease', symptoms: 'Yellowish wavy marginal lesions along the leaf blades with bacterial ooze.', management: 'Plant resistant cultivars (Pusa 1121 Sub-1); spray Streptocycline 15g + Copper Oxychloride 500g in 200L water.' },
      { name: 'Rice Blast', type: 'Disease', symptoms: 'Spindle-shaped lesions with grey center and brownish border on leaves and neck rot.', management: 'Spray Tricyclazole 75 WP @ 0.6 g/litre at boot leaf and panicle emergence.' }
    ],
    harvestingAndStorage: {
      method: 'Harvest when 80-85% grains turn golden yellow. Combine harvester or manual sickles.',
      moistureContent: 'Dry harvested grain down to 12 - 14% moisture before warehousing.',
      storageConditions: 'Store in airtight hermetic bags or ventilated metal silos to prevent rice weevil (Sitophilus oryzae).'
    },
    generalGuidance: 'Adopt alternate wetting and drying (AWD) irrigation to conserve up to 30% water and curb methane emissions without penalizing grain yield.',
    regionalGuidance: [
      { region: 'North-Western Plains (Punjab, Haryana)', tips: 'Opt for short-duration varieties like PR 126 to vacate fields by early October, allowing timely wheat sowing without stubble burning.' },
      { region: 'Eastern India (West Bengal, Bihar, Odisha)', tips: 'Use flood-tolerant Sub-1 submergence-resilient varieties in lowlands prone to monsoon waterlogging.' }
    ]
  },
  {
    id: 'wheat',
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    category: 'Food Crops',
    subcategory: 'Cereal',
    image: '/assets/aistudio/image_809f440f.png',
    popularVarieties: ['HD 2967', 'HD 3086 (Pusa Gautami)', 'DBW 187 (Karan Vandana)', 'DBW 303', 'PBW 725', 'Sharbati (MP)', 'HI 8663 (Durum)'],
    suitableStates: ['Uttar Pradesh', 'Madhya Pradesh', 'Punjab', 'Haryana', 'Rajasthan', 'Bihar', 'Gujarat'],
    topDistricts: ['Sangrur (PB)', 'Karnal (HR)', 'Muzaffarnagar (UP)', 'Hoshangabad (MP)', 'Sri Ganganagar (RJ)'],
    soilRequirements: 'Well-drained fertile loamy to clay loam soils with neutral pH (6.5 - 7.5). Susceptible to waterlogging.',
    climateRequirements: 'Cool and dry winter growing season with bright sunshine, followed by warm sunny ripening period.',
    idealTemperature: '12°C to 15°C at tillering; 20°C to 25°C at grain filling; susceptible to terminal heat >32°C',
    rainfallRequirementMm: '350 - 550 mm (requires 4 to 6 timely irrigations)',
    seasons: ['Rabi'],
    sowingSeason: 'First fortnight of November (optimal)',
    harvestingSeason: 'March - April',
    averageDurationDays: 140,
    waterRequirements: 'Moderate (350 - 400 mm). Critical stages: Crown Root Initiation (CRI at 21 days), Tillering, Late Jointing, Flowering, Milking, Dough.',
    fertilizerNPK: '150:60:40 kg/ha (N:P2O5:K2O). Half N at sowing, remaining half split between first and second irrigation.',
    expectedYieldPerHa: '4.8 - 6.2 tonnes/ha (Punjab/Haryana); 3.2 - 4.5 tonnes/ha (Central/Eastern India)',
    nationalProductionShare: 35.8,
    commonPestsDiseases: [
      { name: 'Yellow Rust (Stripe Rust)', type: 'Disease', symptoms: 'Bright yellow powdery stripes along leaf veins, wiping off easily on touch.', management: 'Spray Propiconazole 25 EC (Tilt) @ 1 ml/litre at first appearance; grow resistant DBW 187.' },
      { name: 'Loose Smut', type: 'Disease', symptoms: 'Black powdery mass replacing grains inside earheads, visible upon emergence.', management: 'Treat seed with Carboxin 75 WP (Vitavax) @ 2.5 g/kg seed.' },
      { name: 'Aphids', type: 'Pest', symptoms: 'Clusters sucking sap from leaves and young earheads during warm cloudy February days.', management: 'Spray Imidacloprid 17.8 SL @ 0.3 ml/litre if threshold exceeds 10-15 aphids/tiller.' }
    ],
    harvestingAndStorage: {
      method: 'Combine harvester or mechanical reaper when grains become hard and straw turns golden and brittle.',
      moistureContent: 'Sun dry until grain moisture is below 10-12%.',
      storageConditions: 'Fumigate with Aluminium Phosphide in airtight warehouses; check regularly for Khapra beetle.'
    },
    generalGuidance: 'Sowing by November 15 safeguards against terminal heat waves in March that cause shrivelled grain.',
    regionalGuidance: [
      { region: 'Indo-Gangetic Belt', tips: 'Use Happy Seeder or Super Seeder for direct drilling into standing paddy stubble, retaining soil moisture and lowering costs.' },
      { region: 'Central Zone (MP, Gujarat)', tips: 'Cultivate high-protein durum or Sharbati wheats suited to semi-arid conditions.' }
    ]
  },
  {
    id: 'maize',
    name: 'Maize (Corn)',
    scientificName: 'Zea mays',
    category: 'Food Crops',
    subcategory: 'Cereal / Feed',
    image: '/assets/aistudio/image_6dee4834.png',
    popularVarieties: ['Shaktiman 1 to 5 (Quality Protein Maize - QPM)', 'DKC 9081', 'Pioneer 30V92', 'DHM 117', 'Ganga 11'],
    suitableStates: ['Karnataka', 'Madhya Pradesh', 'Bihar', 'Maharashtra', 'Telangana', 'Rajasthan', 'Uttar Pradesh'],
    topDistricts: ['Davanagere (KA)', 'Samastipur (BR)', 'Chhindwara (MP)', 'Nashik (MH)', 'Khammam (TS)'],
    soilRequirements: 'Deep, rich, well-drained fertile alluvial loam or red loam soils with pH 6.0 to 7.5.',
    climateRequirements: 'Warm weather crop; sensitive to frost and water stagnation.',
    idealTemperature: '21°C to 27°C during vegetative stage',
    rainfallRequirementMm: '500 - 800 mm evenly distributed',
    seasons: ['Kharif', 'Rabi', 'Zaid'],
    sowingSeason: 'June - July (Kharif) / October - November (Rabi)',
    harvestingSeason: 'September - October (Kharif) / March - April (Rabi)',
    averageDurationDays: 105,
    waterRequirements: 'Moderate (500 - 600 mm). Extremely sensitive to waterlogging; critical moisture at tasseling and silking.',
    fertilizerNPK: '120:60:40 kg/ha (Kharif); 150:75:50 kg/ha (Rabi)',
    expectedYieldPerHa: '3.5 - 5.5 tonnes/ha (Kharif); world-record 8.0 - 10.0 tonnes/ha (Winter Maize in Bihar)',
    nationalProductionShare: 11.2,
    commonPestsDiseases: [
      { name: 'Fall Armyworm (FAW)', type: 'Pest', symptoms: 'Ragged holes in leaves and sawdust-like frass deep inside central whorls.', management: 'Spray Chlorantraniliprole 18.5 SC @ 0.4 ml/L or Emamectin Benzoate 5 SG @ 0.4 g/L into whorls.' },
      { name: 'Maydis Leaf Blight', type: 'Disease', symptoms: 'Elongated rectangular grayish-brown lesions between veins.', management: 'Seed treatment with Thiram; spray Mancozeb 75 WP @ 2.5 g/L.' }
    ],
    harvestingAndStorage: {
      method: 'Harvest when husk turns paper dry and black layer forms at the tip of kernels.',
      moistureContent: 'Dry cobs to 13% moisture before shelling and storage.',
      storageConditions: 'Store shelled grain in moisture-proof bins to avert aflatoxin contamination by Aspergillus flavus.'
    },
    generalGuidance: 'Winter (Rabi) maize yields up to 70% higher than Kharif due to prolonged grain filling duration and absence of cloud cover.',
    regionalGuidance: [
      { region: 'Bihar (Kosi-Seemanchal Belt)', tips: 'Rabi maize delivers world-class grain yields; ensure phosphorus application at root depth.' }
    ]
  },
  {
    id: 'millets-bajra-jowar-ragi',
    name: 'Millets (Bajra, Jowar & Ragi)',
    scientificName: 'Pennisetum glaucum / Sorghum bicolor / Eleusine coracana',
    category: 'Food Crops',
    subcategory: 'Nutri-Cereals',
    image: '/assets/aistudio/image_8c413589.png',
    popularVarieties: ['Bajra: HHB 67 Improved, RHB 173', 'Jowar: CSV 15, Phule Yashoda, M 35-1 (Maldandi)', 'Ragi: GPU 28, ML 365, KMR 301'],
    suitableStates: ['Rajasthan', 'Maharashtra', 'Karnataka', 'Gujarat', 'Uttar Pradesh', 'Madhya Pradesh', 'Tamil Nadu', 'Odisha'],
    topDistricts: ['Alwar (RJ)', 'Solapur (MH)', 'Dharwad (KA)', 'Banaskantha (GJ)', 'Kurnool (AP)'],
    soilRequirements: 'Thrives on poor, sandy, stony, or shallow red and black soils where other cereals fail. Drought hardy.',
    climateRequirements: 'High heat tolerance, C4 carbon pathway, exceptional climate-resilient water-use efficiency.',
    idealTemperature: '26°C to 38°C; highly drought and thermal stress tolerant',
    rainfallRequirementMm: '350 - 650 mm (thrives in arid rainfed zones)',
    seasons: ['Kharif', 'Rabi'],
    sowingSeason: 'July (Kharif) / September - October (Rabi Jowar)',
    harvestingSeason: 'October - November (Kharif) / February - March (Rabi)',
    averageDurationDays: 85,
    waterRequirements: 'Low (250 - 350 mm). Survives prolonged dry spells via deep root systems.',
    fertilizerNPK: '60:30:20 kg/ha for hybrids; 40:20:0 kg/ha for rainfed varieties',
    expectedYieldPerHa: '1.8 - 3.2 tonnes/ha (Bajra); 1.5 - 2.8 tonnes/ha (Jowar); 2.2 - 3.5 tonnes/ha (Ragi)',
    nationalProductionShare: 6.8,
    commonPestsDiseases: [
      { name: 'Ergot & Downy Mildew', type: 'Disease', symptoms: 'Sticky honeydew exudation on ears turning into hard dark sclerotia.', management: 'Soak seeds in 20% brine solution to float out sclerotia; spray Metalaxyl 35 SD.' },
      { name: 'Shoot Fly (Jowar)', type: 'Pest', symptoms: 'Dead hearts in young 1 to 4 week seedlings.', management: 'Sow within 10 days of monsoon onset; seed treat with Imidacloprid 70 WS.' }
    ],
    harvestingAndStorage: {
      method: 'Cut earheads with sickles when grains are hard and dry.',
      moistureContent: '10 - 12% moisture.',
      storageConditions: 'Traditional mud bins lined with neem leaves maintain grain viability for years.'
    },
    generalGuidance: 'Superfood grain packed with dietary fiber, iron, calcium (Ragi has 344mg Ca/100g), and low glycemic index.',
    regionalGuidance: [
      { region: 'Western Rajasthan', tips: 'Sow early-maturing HHB 67 to escape terminal drought before monsoon retreats.' },
      { region: 'Deccan Plateau', tips: 'Rabi Jowar (Maldandi) produces superior sweet grain for Bhakri.' }
    ]
  },
  {
    id: 'pulses-gram-tur-moong',
    name: 'Pulses (Gram, Tur / Arhar & Moong)',
    scientificName: 'Cicer arietinum / Cajanus cajan / Vigna radiata',
    category: 'Food Crops',
    subcategory: 'Legumes / Protein',
    image: '/src/assets/images/crop_wheat_field_1792943179356.jpg',
    popularVarieties: ['Gram: JAKI 9218, JG 11, RVG 202', 'Tur: BSMR 736, Asha (ICPL 87119), GRG 811', 'Moong: IPM 02-3, Samrat, Virat'],
    suitableStates: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Karnataka', 'Uttar Pradesh', 'Andhra Pradesh'],
    topDistricts: ['Vidisha (MP)', 'Kalaburagi (KA - Tur Bowl)', 'Latur (MH)', 'Bikaner (RJ)', 'Guntur (AP)'],
    soilRequirements: 'Well-drained loam or medium black soil. Intolerant to waterlogging and saline conditions.',
    climateRequirements: 'Semi-arid climate with warm days and cool nights. Fixes atmospheric nitrogen symbiotically.',
    idealTemperature: '18°C to 30°C depending on species',
    rainfallRequirementMm: '400 - 700 mm',
    seasons: ['Kharif', 'Rabi', 'Zaid'],
    sowingSeason: 'June - July (Tur, Kharif Moong) / Oct - Nov (Gram) / Mar (Summer Moong)',
    harvestingSeason: 'October (Moong) / December - January (Tur) / March - April (Gram)',
    averageDurationDays: 120,
    waterRequirements: 'Low to moderate (250 - 400 mm). One irrigation at pre-flowering and one at pod formation boosts yield by 40%.',
    fertilizerNPK: '20:50:20 kg/ha (N:P2O5:K2O) + Rhizobium inoculant seed treatment',
    expectedYieldPerHa: '1.4 - 2.4 tonnes/ha (Gram); 1.2 - 2.0 tonnes/ha (Tur); 0.9 - 1.5 tonnes/ha (Moong)',
    nationalProductionShare: 8.5,
    commonPestsDiseases: [
      { name: 'Pod Borer (Helicoverpa armigera)', type: 'Pest', symptoms: 'Circular bore holes on pods with caterpillar feeding half-submerged.', management: 'Install pheromone traps @ 5/ha; spray NPV 250 LE or Flubendiamide 39.35 SC @ 0.2 ml/L.' },
      { name: 'Fusarium Wilt', type: 'Disease', symptoms: 'Drooping and yellowing of foliage starting from lower leaves, dark vascular discoloration.', management: 'Seed treatment with Trichoderma viride @ 10 g/kg; grow resistant varieties (JG 11, JAKI 9218).' }
    ],
    harvestingAndStorage: {
      method: 'Harvest when 85% pods turn brownish-straw color and seeds rattle in pods.',
      moistureContent: 'Dry grains to 9 - 10% moisture.',
      storageConditions: 'Mix pulse seeds with inert neem oil or activated clay to prevent Pulse Beetle (Callosobruchus chinensis).'
    },
    generalGuidance: 'Nitrogen-fixing legumes enrich soil fertility by adding 30-40 kg atmospheric N/ha for subsequent cereal crops.',
    regionalGuidance: [
      { region: 'Northern Indo-Gangetic Plains', tips: 'Cultivate 60-day summer moong in the fallow window between wheat harvest and paddy transplanting.' }
    ]
  },

  // --- COMMERCIAL CROPS ---
  {
    id: 'cotton',
    name: 'Cotton (White Gold)',
    scientificName: 'Gossypium hirsutum',
    category: 'Commercial Crops',
    subcategory: 'Fiber Crop',
    image: '/assets/aistudio/image_11e8642d.png',
    popularVarieties: ['RCH 689 Bt', 'Ajit 155 Bt', 'Mallika Bt', 'PAU Bt 1', 'Brahma Bt', 'Suvin (Extra Long Staple)'],
    suitableStates: ['Gujarat', 'Maharashtra', 'Telangana', 'Andhra Pradesh', 'Rajasthan', 'Haryana', 'Punjab', 'Karnataka'],
    topDistricts: ['Rajkot (GJ)', 'Yavatmal (MH)', 'Nalgonda (TS)', 'Sirsa (HR)', 'Bathinda (PB)'],
    soilRequirements: 'Deep black cotton soil (Regur) with high clay content and high moisture retention capacity.',
    climateRequirements: 'Semi-arid tropical conditions requiring at least 200 frost-free days and abundant sunshine during boll opening.',
    idealTemperature: '21°C to 35°C; sensitive to heavy downpours during flowering and boll bursting',
    rainfallRequirementMm: '600 - 1000 mm (or controlled drip irrigation)',
    seasons: ['Kharif'],
    sowingSeason: 'April - May (North India irrigated) / June - July (Central & South India rainfed)',
    harvestingSeason: 'October to February (multiple pickings)',
    averageDurationDays: 160,
    waterRequirements: 'Moderate (700 - 900 mm). Drip irrigation with fertigation delivers highest lint quality.',
    fertilizerNPK: '120:60:60 kg/ha (N:P2O5:K2O) + Magnesium sulphate & Boron foliar spray',
    expectedYieldPerHa: '2.0 - 3.2 tonnes/ha seed cotton (Kapas) under drip; 1.2 - 1.8 tonnes/ha rainfed',
    nationalProductionShare: 24.6,
    commonPestsDiseases: [
      { name: 'Pink Bollworm (Pectinophora gossypiella)', type: 'Pest', symptoms: 'Rosetted flowers, premature boll opening, damaged lint and stained seed.', management: 'Install delta pheromone traps; spray Profenofos 50 EC @ 2 ml/L or Spinetoram 11.7 SC.' },
      { name: 'Cotton Leaf Curl Virus (CLCuV)', type: 'Disease', symptoms: 'Upward curling of leaves, thickened veins, and leaf-like enations on lower surface transmitted by whitefly.', management: 'Spray Diafenthiuron 50 WP @ 1.25 g/L; destroy host weeds.' }
    ],
    harvestingAndStorage: {
      method: 'Hand picking in dry sunny morning hours when dew evaporates. Avoid trash and leaf contamination.',
      moistureContent: 'Moisture content of raw kapas must be under 8 - 9%.',
      storageConditions: 'Store in dry covered ginning yards away from moisture to avoid fungal discoloration.'
    },
    generalGuidance: 'High-density planting systems (HDPS) with compact plant architecture increase yield by 35% in rainfed conditions.',
    regionalGuidance: [
      { region: 'Gujarat (Saurashtra)', tips: 'Widely cultivated under drip irrigation; achieve top fiber strength and length in Shankar hybrids.' }
    ]
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane',
    scientificName: 'Saccharum officinarum',
    category: 'Commercial Crops',
    subcategory: 'Sugar & Biofuel',
    image: '/src/assets/images/crop_tea_plantation_1792943179948.jpg',
    popularVarieties: ['Co 0238 (Karan 4)', 'Co 86032 (Nira)', 'Co 0118', 'Co 15023', 'CoLk 94184', 'CoM 0265'],
    suitableStates: ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Bihar', 'Haryana'],
    topDistricts: ['Muzaffarnagar (UP)', 'Kolhapur (MH)', 'Belagavi (KA)', 'Meerut (UP)', 'Pune (MH)'],
    soilRequirements: 'Deep, rich, well-drained loamy soils with neutral pH (6.5 to 7.8). Intolerant to waterlogging.',
    climateRequirements: 'Tropical to sub-tropical requiring warm humid weather for growth and cool dry sunny weather for sucrose accumulation.',
    idealTemperature: '28°C to 36°C for vegetative growth; 12°C to 18°C for sugar ripening',
    rainfallRequirementMm: '1500 - 2500 mm (or 18 to 24 canal/borewell irrigations)',
    seasons: ['Kharif', 'Perennial'],
    sowingSeason: 'Autumn (Oct) or Spring (Feb - Mar) in North India; Adsali (July - Aug) in Maharashtra',
    harvestingSeason: 'December to April (10 to 18 months crop duration)',
    averageDurationDays: 360,
    waterRequirements: 'High (1800 - 2200 mm). Sub-surface drip irrigation saves 45% water and increases cane diameter.',
    fertilizerNPK: '200:80:80 kg/ha in North India; 300:100:100 kg/ha in Maharashtra/South India',
    expectedYieldPerHa: '80 - 115 tonnes/ha (North India); 110 - 145 tonnes/ha (Maharashtra Adsali crop)',
    nationalProductionShare: 32.4,
    commonPestsDiseases: [
      { name: 'Red Rot (Colletotrichum falcatum)', type: 'Disease', symptoms: 'Drying of upper leaves, longitudinal red discolored lesions with crosswise white patches inside split cane emitting alcoholic smell.', management: 'Plant disease-free tissue culture seed sets; avoid planting susceptible Co 0238; rotate crop.' },
      { name: 'Early Shoot Borer', type: 'Pest', symptoms: 'Dead hearts in shoots aged 1 to 3 months emitting foul smell when pulled.', management: 'Apply Chlorantraniliprole 0.4 GR @ 18 kg/ha at planting along cane furrows.' }
    ],
    harvestingAndStorage: {
      method: 'Cut at ground level where sugar concentration is highest. Transport to sugar mill within 24 hours to prevent sucrose inversion into reducing sugars.',
      moistureContent: 'Harvested cane contains 70% water, 12-14% pol (sucrose).',
      storageConditions: 'Immediate milling essential; staling leads to 0.5% sugar recovery loss per day.'
    },
    generalGuidance: 'Trench planting with single-bud sets reduces seed cane requirement by 60% compared to traditional 3-bud setts.',
    regionalGuidance: [
      { region: 'Western UP', tips: 'Diversify away from exclusive reliance on Co 0238 to prevent widespread Red Rot epidemic.' },
      { region: 'Maharashtra (Deccan)', tips: 'Adopt Trash Mulching to preserve soil moisture and add valuable organic matter.' }
    ]
  },
  {
    id: 'jute',
    name: 'Jute (Golden Fiber)',
    scientificName: 'Corchorus olitorius / Corchorus capsularis',
    category: 'Commercial Crops',
    subcategory: 'Fiber Crop',
    image: '/assets/aistudio/image_5b562018.png',
    popularVarieties: ['JRO 524 (Navin)', 'JRO 204', 'JBO 2003 H (Ira)', 'JRC 698', 'JRO 8432'],
    suitableStates: ['West Bengal', 'Bihar', 'Assam', 'Odisha', 'Meghalaya', 'Tripura'],
    topDistricts: ['Nadia (WB)', 'Murshidabad (WB)', 'North 24 Parganas (WB)', 'Purnia (BR)', 'Nagaon (AS)'],
    soilRequirements: 'Rich fertile new alluvial flood plains (Brahmaputra & Ganga delta) renewed annually by river silt.',
    climateRequirements: 'Warm, humid tropical climate with frequent pre-monsoon showers and standing retting water.',
    idealTemperature: '24°C to 38°C with relative humidity 70% to 90%',
    rainfallRequirementMm: '1500 - 2000 mm',
    seasons: ['Kharif'],
    sowingSeason: 'March - May (pre-monsoon)',
    harvestingSeason: 'July - August (small pod stage)',
    averageDurationDays: 120,
    waterRequirements: 'Moderate during growth, but requires voluminous slow-flowing clean water for stem retting.',
    fertilizerNPK: '60:30:30 kg/ha (N:P2O5:K2O)',
    expectedYieldPerHa: '2.8 - 3.8 tonnes/ha dry fiber',
    nationalProductionShare: 8.2,
    commonPestsDiseases: [
      { name: 'Stem Rot / Root Rot (Macrophomina phaseolina)', type: 'Disease', symptoms: 'Brown spots on stem spreading and girdling, causing wilting.', management: 'Seed treatment with Carbendazim 2 g/kg; apply Potash to reduce disease severity.' },
      { name: 'Yellow Mite', type: 'Pest', symptoms: 'Downward curling and coppery discoloration of apical leaves.', management: 'Spray Fenpyroximate 5 EC @ 1.5 ml/L.' }
    ],
    harvestingAndStorage: {
      method: 'Harvest at 50% flowering stage. Tie into bundles and submerge in water for 12-15 days for microbial retting.',
      moistureContent: 'Dry extracted golden fiber under shade to 14% moisture before baling.',
      storageConditions: 'Store bales on elevated wooden platforms in ventilated dry godowns.'
    },
    generalGuidance: 'Use ICAR-CRIJAF "Sona" microbial microbial consortium during retting to accelerate the process from 18 days to 9 days and improve fiber grade.',
    regionalGuidance: [
      { region: 'Lower Gangetic Plain (Bengal)', tips: 'West Bengal produces over 75% of Indian raw jute; ensure clean water retting to fetch TD-3 export grade.' }
    ]
  },
  {
    id: 'oilseeds-mustard-soybean',
    name: 'Oilseeds (Mustard & Soybean)',
    scientificName: 'Brassica juncea / Glycine max',
    category: 'Commercial Crops',
    subcategory: 'Oil & Protein',
    image: '/src/assets/images/crop_wheat_field_1792943179356.jpg',
    popularVarieties: ['Mustard: Giriraj (DRMRIJ 31), RH 749, Pusa Bold, NRCHB 101', 'Soybean: JS 20-34, JS 95-60, JS 20-29, NRC 86'],
    suitableStates: ['Rajasthan', 'Madhya Pradesh', 'Maharashtra', 'Uttar Pradesh', 'Gujarat', 'Haryana'],
    topDistricts: ['Bharatpur (RJ)', 'Alwar (RJ)', 'Ujjain (MP)', 'Indore (MP)', 'Latur (MH)'],
    soilRequirements: 'Mustard: Light to heavy loamy soils. Soybean: Deep black and clayey soils.',
    climateRequirements: 'Mustard: Cool dry winter crop. Soybean: Warm rainy season Kharif crop.',
    idealTemperature: 'Mustard: 15°C to 25°C; Soybean: 22°C to 32°C',
    rainfallRequirementMm: 'Mustard: 300 - 450 mm; Soybean: 600 - 900 mm',
    seasons: ['Rabi', 'Kharif'],
    sowingSeason: 'October (Mustard) / June - July (Soybean)',
    harvestingSeason: 'February - March (Mustard) / October (Soybean)',
    averageDurationDays: 115,
    waterRequirements: 'Low to moderate. Mustard needs 2 irrigations (flowering and pod filling); Soybean is rainfed.',
    fertilizerNPK: 'Mustard: 80:40:40 kg/ha + 20 kg Sulphur; Soybean: 30:60:40 kg/ha',
    expectedYieldPerHa: '2.0 - 2.8 tonnes/ha (Mustard); 1.8 - 2.5 tonnes/ha (Soybean)',
    nationalProductionShare: 22.1,
    commonPestsDiseases: [
      { name: 'Mustard Aphid (Lipaphis erysimi)', type: 'Pest', symptoms: 'Severe curling of leaves and floral twigs laden with sticky black aphids in cloudy January weather.', management: 'Spray Dimethoate 30 EC @ 1.5 ml/L or Thiamethoxam 25 WG @ 0.3 g/L.' },
      { name: 'Soybean Yellow Mosaic Virus (YMV)', type: 'Disease', symptoms: 'Bright yellow patches on foliage transmitted by whitefly.', management: 'Grow resistant varieties like JS 20-34; control whitefly with Acetamiprid.' }
    ],
    harvestingAndStorage: {
      method: 'Harvest when pods turn golden brown. Avoid delay to prevent pod shattering.',
      moistureContent: 'Dry seeds below 8% moisture for safe storage without rancidity.',
      storageConditions: 'Store in clean moisture-proof gunny bags away from direct heat.'
    },
    generalGuidance: 'Application of elemental Sulphur @ 20-30 kg/ha boosts oil content in seeds by 2-3%.',
    regionalGuidance: [
      { region: 'Rajasthan', tips: 'Leading mustard state in India; sowing before Oct 20 escapes peak aphid infestation.' }
    ]
  },

  // --- HORTICULTURAL CROPS ---
  {
    id: 'mango',
    name: 'Mango (King of Fruits)',
    scientificName: 'Mangifera indica',
    category: 'Horticultural Crops',
    subcategory: 'Fruit',
    image: '/src/assets/images/hero_indian_farmland_1792943177783.jpg',
    popularVarieties: ['Alphonso (Hapus - Ratnagiri)', 'Kesar (Gir)', 'Dasheri (Malihabad)', 'Langra (Varanasi)', 'Banganapalli (AP)', 'Chaunsa', 'Amrapali', 'Mallika'],
    suitableStates: ['Uttar Pradesh', 'Andhra Pradesh', 'Maharashtra', 'Gujarat', 'Karnataka', 'Bihar', 'West Bengal'],
    topDistricts: ['Ratnagiri (MH)', 'Junagadh (GJ)', 'Lucknow (UP - Malihabad)', 'Krishna (AP)', 'Bhagalpur (BR)'],
    soilRequirements: 'Deep alluvial well-drained loam to red loamy soils with 2m+ profile depth and pH 5.5 to 7.5.',
    climateRequirements: 'Tropical to sub-tropical with distinct dry spell prior to flowering. Susceptible to frost and unseasonal hail.',
    idealTemperature: '24°C to 30°C; requires dry sunny weather from December to February for blossom induction',
    rainfallRequirementMm: '750 - 2500 mm annually',
    seasons: ['Perennial'],
    sowingSeason: 'Graft planting in July - August (monsoon)',
    harvestingSeason: 'March (South) to July (North)',
    averageDurationDays: 120, // fruit development
    waterRequirements: 'Withhold irrigation 2 months prior to flowering to promote floral bud differentiation; irrigate regularly during fruit development.',
    fertilizerNPK: '1000:500:1000 g N:P2O5:K2O per mature bearing tree per year',
    expectedYieldPerHa: '10 - 18 tonnes/ha under commercial high density orchards (Meadow orchard: Amrapali)',
    nationalProductionShare: 21.4,
    commonPestsDiseases: [
      { name: 'Mango Hopper (Amritodus atkinsoni)', type: 'Pest', symptoms: 'Sucking sap from inflorescence panicles, secreting honeydew resulting in sooty mould.', management: 'Spray Imidacloprid 17.8 SL @ 0.3 ml/L at panicle emergence before flowers open.' },
      { name: 'Powdery Mildew (Oidium mangiferae)', type: 'Disease', symptoms: 'White powdery growth over panicles and fruitlets, resulting in massive fruit drop.', management: 'Spray Wettable Sulphur 80 WP @ 3 g/L or Hexaconazole 5 EC @ 1 ml/L.' }
    ],
    harvestingAndStorage: {
      method: 'Harvest with 1 cm stalk attached using mango harvesters to avoid latex drip that burns skin.',
      moistureContent: 'Ripened at 20-22°C and 85-90% relative humidity.',
      storageConditions: 'Cold store at 12-13°C for 2-3 weeks; Hot Water Treatment (HWT) at 48°C for fruit fly export clearance.'
    },
    generalGuidance: 'Paclobutrazol soil drenching in September induces regular bearing in alternate-bearing cultivars like Alphonso and Dasheri.',
    regionalGuidance: [
      { region: 'Konkan Coast (Maharashtra)', tips: 'GI-tagged Ratnagiri & Sindhudurg Alphonso commands world-record export prices; shield orchards from sea salt sprays.' }
    ]
  },
  {
    id: 'apple',
    name: 'Apple',
    scientificName: 'Malus domestica',
    category: 'Horticultural Crops',
    subcategory: 'Fruit',
    image: '/src/assets/images/hero_indian_farmland_1792943177783.jpg',
    popularVarieties: ['Royal Delicious', 'Red Chief', 'Gala', 'Fuji', 'Granny Smith', 'Scarlet Spur', 'Golden Delicious'],
    suitableStates: ['Jammu and Kashmir', 'Himachal Pradesh', 'Uttarakhand', 'Arunachal Pradesh'],
    topDistricts: ['Shopian (JK)', 'Baramulla (JK)', 'Shimla (HP - Kotgarh)', 'Kullu (HP)', 'Kinnaur (HP)'],
    soilRequirements: 'Deep, rich, well-aerated sandy loam soils rich in organic matter with pH 6.0 - 6.8.',
    climateRequirements: 'Temperate climate requiring 800 - 1200 chilling hours (<7°C) for dormancy breaking.',
    idealTemperature: '21°C to 24°C in summer; below freezing in winter',
    rainfallRequirementMm: '1000 - 1250 mm evenly distributed throughout year',
    seasons: ['Perennial'],
    sowingSeason: 'Planting bare-root rootstocks in December - February (dormant winter)',
    harvestingSeason: 'July to October depending on elevation and cultivar',
    averageDurationDays: 150,
    waterRequirements: 'Crucial moisture requirement during fruit enlargement stage; drip irrigation paired with anti-hail nets.',
    fertilizerNPK: '700:350:700 g N:P2O5:K2O per mature tree annually',
    expectedYieldPerHa: '12 - 15 tonnes/ha (traditional); 35 - 55 tonnes/ha (High Density Italian/Dutch M9 rootstocks)',
    nationalProductionShare: 14.8,
    commonPestsDiseases: [
      { name: 'Apple Scab (Venturia inaequalis)', type: 'Disease', symptoms: 'Olive-green velvety spots on leaves and corky scab lesions on fruit skin.', management: 'Spray Mancozeb @ 3 g/L at green tip and Difenoconazole @ 0.5 ml/L at petal fall.' },
      { name: 'San Jose Scale', type: 'Pest', symptoms: 'Small circular grey scales infesting twigs, limbs, and red rings on fruit skin.', management: 'Dormant winter spray of Tree Spray Oil (Horticultural Mineral Oil @ 2%).' }
    ],
    harvestingAndStorage: {
      method: 'Manual picking when background green changes to yellow/red and starch index indicates maturity.',
      moistureContent: 'High water content (85%).',
      storageConditions: 'Controlled Atmosphere (CA) storage at 0°C - 1°C, 90-95% RH, 1.5% O2 and 1.5% CO2 keeps fruit crisp for 10 months.'
    },
    generalGuidance: 'High-density apple plantations on dwarfing rootstocks (M9, MM106) planted at 3m x 1m spacing start fruiting in Year 2 vs Year 7 for seedlings.',
    regionalGuidance: [
      { region: 'Kashmir Valley & Kinnaur', tips: 'J&K produces over 70% of India’s apples; Kinnaur apples are celebrated for exceptional crunch and deep red color.' }
    ]
  },
  {
    id: 'potato-onion-tomato',
    name: 'Vegetables (Potato, Onion & Tomato)',
    scientificName: 'Solanum tuberosum / Allium cepa / Solanum lycopersicum',
    category: 'Horticultural Crops',
    subcategory: 'Vegetables',
    image: '/src/assets/images/crop_paddy_rice_1792943178998.jpg',
    popularVarieties: ['Potato: Kufri Jyoti, Kufri Pukhraj, Kufri Chipsona', 'Onion: Bhima Super, Bhima Dark Red, Agrifound Dark Red', 'Tomato: Pusa Ruby, Arka Rakshak, Abhinav'],
    suitableStates: ['Uttar Pradesh', 'West Bengal', 'Maharashtra', 'Madhya Pradesh', 'Gujarat', 'Karnataka', 'Bihar'],
    topDistricts: ['Agra (UP)', 'Hooghly (WB)', 'Nashik (MH - Onion Capital)', 'Kolar (KA - Tomato Hub)', 'Indore (MP)'],
    soilRequirements: 'Well-drained loose friable sandy loam rich in organic matter. Free from stones and clods.',
    climateRequirements: 'Cool climate for tuberization in potato (18-20°C); dry curing conditions for onion; warm sunny climate for tomato.',
    idealTemperature: 'Potato: 15°C - 20°C; Onion: 18°C - 30°C; Tomato: 20°C - 28°C',
    rainfallRequirementMm: '500 - 700 mm (controlled irrigation)',
    seasons: ['Rabi', 'Kharif', 'Zaid'],
    sowingSeason: 'October (Potato, Rabi Onion) / July (Kharif Tomato, Kharif Onion)',
    harvestingSeason: 'January - March (Potato, Rabi Onion) / October - November (Kharif Onion)',
    averageDurationDays: 100,
    waterRequirements: 'Regular, light irrigations via drip or furrow. Onion neck fall indicates irrigation stoppage.',
    fertilizerNPK: 'Potato: 150:80:120 kg/ha; Onion: 100:50:50 kg/ha; Tomato: 120:80:80 kg/ha',
    expectedYieldPerHa: '25 - 35 tonnes/ha (Potato); 22 - 30 tonnes/ha (Onion); 40 - 65 tonnes/ha (Hybrid Tomato)',
    nationalProductionShare: 38.2,
    commonPestsDiseases: [
      { name: 'Late Blight (Phytophthora infestans in Potato/Tomato)', type: 'Disease', symptoms: 'Water-soaked irregular blackish lesions on leaves with white mouldy growth underneath in cold foggy weather.', management: 'Prophylactic spray of Mancozeb 75 WP @ 2.5 g/L; curative spray of Cymoxanil 8% + Mancozeb 64% WP @ 3 g/L.' },
      { name: 'Onion Thrips (Thrips tabaci)', type: 'Pest', symptoms: 'Silvery white streaks on leaves followed by drying of tips.', management: 'Spray Fipronil 5 SC @ 1.5 ml/L or Spinosad 45 SC @ 0.3 ml/L.' }
    ],
    harvestingAndStorage: {
      method: 'Cure onions under shade for 10-15 days to seal necks; dehaulm potato crops 10 days before digging to harden skin.',
      moistureContent: 'Cool dry airflow.',
      storageConditions: 'Onion stored in ventilated bottom chawls; Potatoes in cold stores at 2-4°C (table) or 8-10°C with CIPC (processing).'
    },
    generalGuidance: 'Adopting Arka Rakshak F1 hybrid tomato gives triple resistance to Tomato Leaf Curl Virus, Bacterial Wilt, and Early Blight.',
    regionalGuidance: [
      { region: 'Nashik (Maharashtra)', tips: 'Hub of Lasalgaon market; cultivate Rabi crop for long storage life up to 6 months.' }
    ]
  },
  {
    id: 'spices-cardamom-pepper-turmeric',
    name: 'Spices (Cardamom, Pepper & Turmeric)',
    scientificName: 'Elettaria cardamomum / Piper nigrum / Curcuma longa',
    category: 'Horticultural Crops',
    subcategory: 'Spices & Aromatics',
    image: '/src/assets/images/crop_tea_plantation_1792943179948.jpg',
    popularVarieties: ['Cardamom: Njallani Green Gold, ICRI 1', 'Black Pepper: Panniyur 1, Karimunda', 'Turmeric: Lakadong (Meghalaya), Salem, IISR Pratibha'],
    suitableStates: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Meghalaya', 'Telangana', 'Odisha'],
    topDistricts: ['Idukki (KL - Cardamom Hills)', 'Wayanad (KL)', 'Kodagu (KA)', 'Nizamabad (TS)', 'West Jaintia Hills (ML)'],
    soilRequirements: 'Forest loam rich in humus, well-drained red laterite with pH 5.5 to 6.5.',
    climateRequirements: 'Warm, humid tropical rainforest climates under filtered dappled tree shade.',
    idealTemperature: '15°C to 32°C; continuous high relative humidity (>80%)',
    rainfallRequirementMm: '1500 - 3500 mm annually',
    seasons: ['Perennial', 'Kharif'],
    sowingSeason: 'June - July (Monsoon planting)',
    harvestingSeason: 'August to February (Cardamom/Pepper); January - March (Turmeric)',
    averageDurationDays: 240,
    waterRequirements: 'Requires humid conditions; sprinkler irrigation during summer dry months protects cardamom panicles.',
    fertilizerNPK: 'Cardamom: 75:75:150 kg/ha; Turmeric: 120:60:120 kg/ha',
    expectedYieldPerHa: 'Cardamom: 400 - 650 kg dry capsules/ha; Pepper: 1500 - 2500 kg dry berries/ha; Turmeric: 25 - 35 tonnes fresh rhizomes/ha',
    nationalProductionShare: 18.5,
    commonPestsDiseases: [
      { name: 'Cardamom Thrips & "Azhukal" Rot', type: 'Pest', symptoms: 'Scabs on capsules causing warty spots; rotting of pseudostems and panicles in heavy rains.', management: 'Spray 1% Bordeaux mixture before monsoon; spray Quinalphos @ 2 ml/L for thrips.' },
      { name: 'Quick Wilt of Black Pepper (Phytophthora capsici)', type: 'Disease', symptoms: 'Rapid defoliation, blackening of leaves, and rotting of root system.', management: 'Drench root zone with Metalaxyl-Mancozeb @ 2 g/L.' }
    ],
    harvestingAndStorage: {
      method: 'Cardamom capsules harvested at ripe green stage; black pepper berries harvested when 1-2 berries turn orange-red.',
      moistureContent: 'Cured in cardamom curing chambers at 45-50°C to retain vibrant green color (moisture <10%).',
      storageConditions: 'Pack in polythene-lined gunny bags in dark cool rooms to prevent bleaching of green cardamom.'
    },
    generalGuidance: 'Lakadong turmeric from Meghalaya contains 7.5 - 9% curcumin (triple the national average), driving premium pharmaceutical and export demand.',
    regionalGuidance: [
      { region: 'Western Ghats (Kerala, Kodagu)', tips: 'Black pepper intercropped with Silver Oak standards inside coffee and tea estates maximizes land productivity.' }
    ]
  },

  // --- PLANTATION CROPS ---
  {
    id: 'tea',
    name: 'Tea (Chai)',
    scientificName: 'Camellia sinensis',
    category: 'Plantation Crops',
    subcategory: 'Beverage Crop',
    image: '/src/assets/images/crop_tea_plantation_1792943179948.jpg',
    popularVarieties: ['Assamica clones: TV 1, TV 20, TV 29', 'Darjeeling clones: AV 2, Bannockburn 157 (Muscatel flavor)', 'South Indian: UPASI 3, UPASI 9'],
    suitableStates: ['Assam', 'West Bengal', 'Tamil Nadu', 'Kerala', 'Himachal Pradesh (Kangra)'],
    topDistricts: ['Dibrugarh (AS)', 'Tinsukia (AS)', 'Jalpaiguri (WB - Dooars)', 'Darjeeling (WB)', 'Nilgiris (TN)'],
    soilRequirements: 'Deep, light, well-drained friable acidic soils (pH 4.5 to 5.5) rich in organic matter. Intolerant to stagnant water and lime.',
    climateRequirements: 'Hot and humid climate with frequent showers, mist, and filtered morning sunshine. Frost-free slopes.',
    idealTemperature: '20°C to 30°C; growth ceases below 13°C and above 35°C',
    rainfallRequirementMm: '1500 - 3000 mm evenly distributed throughout the year',
    seasons: ['Perennial'],
    sowingSeason: 'Planting vegetative biclonal seedlings in May - June or October',
    harvestingSeason: 'March to November (First Flush, Second Flush, Rain Flush, Autumn Flush)',
    averageDurationDays: 365,
    waterRequirements: 'Frequent mist and rain; sprinkler irrigation during winter dry months maintains leaf turgidity.',
    fertilizerNPK: '140:30:140 kg/ha N:P2O5:K2O applied in splits after pruning and plucking.',
    expectedYieldPerHa: '2.0 - 2.8 tonnes/ha made tea (Assam plain CTC); 600 - 900 kg/ha made tea (Darjeeling orthodox)',
    nationalProductionShare: 48.2,
    commonPestsDiseases: [
      { name: 'Tea Mosquito Bug (Helopeltis theivora)', type: 'Pest', symptoms: 'Circular brownish-black necrotic lesions on tender plucking shoots, causing curl and drying.', management: 'Spray Thiamethoxam 25 WG @ 100 g/ha or Quinalphos @ 1 ml/L.' },
      { name: 'Red Spider Mite (Oligonychus coffeae)', type: 'Pest', symptoms: 'Bronzing and rusty coppery appearance on upper leaf surfaces during dry months.', management: 'Spray Spiromesifen 22.9 SC @ 1 ml/L.' }
    ],
    harvestingAndStorage: {
      method: 'Selective plucking of "two leaves and a bud" at 7 to 10 days intervals during active flushes.',
      moistureContent: 'Withering reduces moisture from 75% to 55%; drying finishes made tea to 2.5 - 3% moisture.',
      storageConditions: 'Pack in aluminum-foil lined multi-wall kraft paper sacks to prevent absorption of ambient moisture and off-odors.'
    },
    generalGuidance: 'India is the world’s 2nd largest tea producer; orthodox Darjeeling tea commands GI protection and the title "Champagne of Teas".',
    regionalGuidance: [
      { region: 'Brahmaputra Valley (Assam)', tips: 'Produces malty, strong CTC black teas; maintain Albizia shade trees at 12m spacing.' },
      { region: 'Nilgiris (Tamil Nadu)', tips: 'High-elevation fragrant teas plucked year-round due to mild tropical climate.' }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee (Arabica & Robusta)',
    scientificName: 'Coffea arabica / Coffea canephora',
    category: 'Plantation Crops',
    subcategory: 'Beverage Crop',
    image: '/src/assets/images/crop_tea_plantation_1792943179948.jpg',
    popularVarieties: ['Arabica: S.795, Chandragiri, Cauvery (Catimor)', 'Robusta: CxR (Congensis x Robusta hybrid), S.274'],
    suitableStates: ['Karnataka', 'Kerala', 'Tamil Nadu', 'Andhra Pradesh (Araku Valley)', 'Odisha'],
    topDistricts: ['Chikkamagaluru (KA)', 'Kodagu (KA)', 'Hassan (KA)', 'Wayanad (KL)', 'Dindigul (TN - Kodaikanal)'],
    soilRequirements: 'Deep, porous, rich friable volcanic or forest loam soils high in humus and iron, pH 6.0 - 6.5.',
    climateRequirements: 'Grown exclusively under two-tier shade canopy in the Western Ghats; protected from direct sun and heavy winds.',
    idealTemperature: 'Arabica: 15°C to 25°C (high elevation 1000-1500m); Robusta: 20°C to 32°C (lower elevation 500-1000m)',
    rainfallRequirementMm: '1500 - 2500 mm with critical "Blossom Showers" in March and "Backing Showers" in April',
    seasons: ['Perennial'],
    sowingSeason: 'Planting in June - July at onset of monsoon',
    harvestingSeason: 'November to January (Arabica) / January to March (Robusta)',
    averageDurationDays: 365,
    waterRequirements: 'Blossom overhead sprinkler irrigation (25 mm) in March triggers uniform flowering.',
    fertilizerNPK: '120:90:120 kg/ha for high yielding Arabica; 80:60:80 kg/ha for Robusta',
    expectedYieldPerHa: '1.0 - 1.5 tonnes/ha clean coffee (Arabica); 1.5 - 2.2 tonnes/ha (Robusta)',
    nationalProductionShare: 26.5,
    commonPestsDiseases: [
      { name: 'Coffee White Stem Borer (Xylotrechus quadripes)', type: 'Pest', symptoms: 'Ridges on stem bark, wilting and death of Arabica bushes caused by tunneling grubs.', management: 'Bark scraping of main stem; lime washing with 10% lime + Fipronil.' },
      { name: 'Coffee Leaf Rust (Hemileia vastatrix)', type: 'Disease', symptoms: 'Orange powdery pustules on lower leaf surface causing extensive defoliation.', management: 'Spray 0.5% Bordeaux mixture before and after monsoon.' }
    ],
    harvestingAndStorage: {
      method: 'Selective manual stripping of ripe red cherries ("Fly picking" followed by main pickings).',
      moistureContent: 'Wet processed (washed parchment) sun dried on tiled drying yards to 10% moisture.',
      storageConditions: 'Store clean parchment in moisture-tight jute bags in well-ventilated timber-floored warehouses.'
    },
    generalGuidance: 'Monsooned Malabar Coffee is a unique Indian specialty coffee where beans undergo monsoonal humid winds for 12-16 weeks, swelling to golden color with mellow body.',
    regionalGuidance: [
      { region: 'Kodagu & Chikkamagaluru (Karnataka)', tips: 'Karnataka accounts for over 70% of Indian coffee production; intercropping with black pepper doubles revenue per hectare.' }
    ]
  },
  {
    id: 'rubber',
    name: 'Natural Rubber',
    scientificName: 'Hevea brasiliensis',
    category: 'Plantation Crops',
    subcategory: 'Industrial Polymer',
    image: '/src/assets/images/crop_tea_plantation_1792943179948.jpg',
    popularVarieties: ['RRII 105 (Highest yielding Indian clone)', 'RRII 414', 'RRII 430', 'RRIM 600'],
    suitableStates: ['Kerala', 'Tripura', 'Tamil Nadu (Kanyakumari)', 'Assam', 'Karnataka'],
    topDistricts: ['Kottayam (KL - Rubber City)', 'Ernakulam (KL)', 'Kollam (KL)', 'West Tripura (TR)', 'Kanyakumari (TN)'],
    soilRequirements: 'Deep, well-drained, acidic laterite and red loamy soils with high water-holding capacity and absence of hard pan.',
    climateRequirements: 'Equatorial humid tropical climate without prolonged dry spells or excessive cold.',
    idealTemperature: '25°C to 34°C with high relative humidity (>80%)',
    rainfallRequirementMm: '2000 - 3000 mm uniformly distributed over 100 - 150 rain days',
    seasons: ['Perennial'],
    sowingSeason: 'Planting budded stumps in polybags in June - July',
    harvestingSeason: 'Tapping begins in 7th year, continuing for 25-30 years',
    averageDurationDays: 365,
    waterRequirements: 'Rainfed under tropical conditions; plastic rainguards attached over tapping panel to allow tapping during monsoon.',
    fertilizerNPK: '30:30:30 kg/ha N:P2O5:K2O during tapping years',
    expectedYieldPerHa: '1.8 - 2.4 tonnes/ha dry rubber sheets',
    nationalProductionShare: 18.2,
    commonPestsDiseases: [
      { name: 'Abnormal Leaf Fall (Phytophthora botryosa)', type: 'Disease', symptoms: 'Extensive shedding of green leaves with water-soaked lesions during heavy SW monsoon.', management: 'Aerial or tractor-mounted micron dusting with Copper Oxychloride in oil.' },
      { name: 'Corynespora Leaf Spot', type: 'Disease', symptoms: 'Fish-bone like dark veins on young flushes.', management: 'Grow resistant RRII 400 series clones.' }
    ],
    harvestingAndStorage: {
      method: 'Scientific controlled tapping of bark in early morning hours to tap latex vessels at 30° angle.',
      moistureContent: 'Latex coagulated with formic acid, rolled into sheets, and smoke-cured to Ribbed Smoked Sheet (RSS 4).',
      storageConditions: 'Store graded RSS sheets in dry smoke-curing sheds protected from direct sunlight and moisture.'
    },
    generalGuidance: 'Rubber Board of India supports rainguarding and decentralized processing smoke houses for smallholders.',
    regionalGuidance: [
      { region: 'Kerala', tips: 'Produces 75% of Indian natural rubber; adoption of RRII 429 clone ensures high cold tolerance for non-traditional regions.' },
      { region: 'Tripura', tips: 'Second largest rubber state; transformed tribal economy through settled agro-forestry.' }
    ]
  },
  {
    id: 'coconut-cocoa',
    name: 'Coconut & Cocoa',
    scientificName: 'Cocos nucifera / Theobroma cacao',
    category: 'Plantation Crops',
    subcategory: 'Oil & Confectionery',
    image: '/src/assets/images/crop_tea_plantation_1792943179948.jpg',
    popularVarieties: ['Coconut: West Coast Tall, Chowghat Orange Dwarf, Kera Sankara (Hybrid)', 'Cocoa: VTLCC 1, CCRP 8, Forestero'],
    suitableStates: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Odisha', 'Goa', 'Andaman & Nicobar', 'Lakshadweep'],
    topDistricts: ['Coimbatore (TN - Pollachi)', 'Kozhikode (KL)', 'Tumakuru (KA)', 'East Godavari (AP)', 'Malappuram (KL)'],
    soilRequirements: 'Coastal sand, alluvial soils, red sandy loam, and well-drained laterite soils. Tolerates salinity.',
    climateRequirements: 'Equatorial maritime climate with warm sun, high humidity, and absence of prolonged drought or frost.',
    idealTemperature: '27°C (fluctuations <7°C optimal)',
    rainfallRequirementMm: '1300 - 2500 mm annually',
    seasons: ['Perennial'],
    sowingSeason: 'Planting 1-year-old seed nuts in pits in May - June',
    harvestingSeason: 'Year-round harvesting at 45 to 60-day intervals (12 bunches/year)',
    averageDurationDays: 365,
    waterRequirements: 'Requires 45 - 60 litres water per adult palm per day in dry summer months (drip irrigation).',
    fertilizerNPK: '500:320:1200 g N:P2O5:K2O per palm annually + 500g Magnesium sulphate',
    expectedYieldPerHa: '12,000 - 18,000 nuts/ha/year (Coconut) + 600 - 900 kg dry beans/ha (intercropped Cocoa)',
    nationalProductionShare: 7.1,
    commonPestsDiseases: [
      { name: 'Rhinoceros Beetle (Oryctes rhinoceros)', type: 'Pest', symptoms: 'V-shaped geometrical cuts on fronds; chewed fiber in crown.', management: 'Hook out beetles from crowns; apply Metarhizium anisopliae fungal bioagent to breeding compost heaps.' },
      { name: 'Root (Wilt) Disease', type: 'Disease', symptoms: 'Ribbing and flaccidity of leaflets, marginal necrosis and general yellowing.', management: 'Eradicate heavily diseased palms; replant with tolerant Chowghat Green Dwarf hybrids.' }
    ],
    harvestingAndStorage: {
      method: 'Skilled palm climbers or telescopic carbon fiber harvesting poles pluck 11-12 month mature nuts.',
      moistureContent: 'Dehusked nuts split and sun dried or copra kiln dried to 6% moisture for oil expelling.',
      storageConditions: 'Store copra in well-ventilated dry lofts to prevent fungal mould and red-legged ham beetle.'
    },
    generalGuidance: 'Cocoa planted in the interspaces of coconut orchards provides ideal 50% shade, generating 100% bonus revenue from the same land parcel without competing for light or water.',
    regionalGuidance: [
      { region: 'Pollachi (Tamil Nadu)', tips: 'India’s largest tender coconut and copra processing hub; high water-use efficiency through drip irrigation.' },
      { region: 'Lakshadweep', tips: 'Certified 100% organic micro-copra with exceptional oil recovery (>72%).' }
    ]
  }
];
