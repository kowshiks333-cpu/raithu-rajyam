export type FarmerCategory =
  | 'Marginal Farmer (< 2.5 Acres)'
  | 'Small Farmer (2.5 - 5 Acres)'
  | 'Semi-Medium Farmer (5 - 10 Acres)'
  | 'Medium Farmer (10 - 25 Acres)'
  | 'Large Commercial Farmer (> 25 Acres)'
  | 'Tenant Farmer (Kowlu Raithu)'
  | 'Organic & Natural Farming Practitioner'
  | 'Agronomist / Research Scientist'
  | 'Agricultural Officer / Inspector';

export interface FarmerLoginRecord {
  id: string;
  timestamp: number;
  loginDateTime: string;
  loginDate: string;
  loginTime: string;
  kisanId: string;
  farmerName: string;
  mobile: string;
  email?: string;
  farmerType: FarmerCategory | string;
  cropsCultivating: string;
  cropList: string[];
  landholdingAcres: number;
  state: string;
  district: string;
  farmingPractice: 'Traditional' | 'Natural / Organic' | 'Mechanized / Drip' | 'Integrated Farming';
  season: string;
  sessionStatus: 'Active Now' | 'Verified Session' | 'Previous Login';
}

export const INITIAL_FARMER_LOGIN_DB: FarmerLoginRecord[] = [
  {
    id: 'rec-101',
    timestamp: Date.now() - 1000 * 60 * 12, // 12 mins ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 12).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 12).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 12).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-8841',
    farmerName: 'Ramesh Kumar Chowdary',
    mobile: '9848022334',
    email: 'ramesh.farmer@raithu.org',
    farmerType: 'Small Farmer (2.5 - 5 Acres)',
    cropsCultivating: 'Rice (Paddy), Guntur Chili, Bt Cotton',
    cropList: ['Rice (Paddy)', 'Chili', 'Cotton'],
    landholdingAcres: 4.5,
    state: 'Andhra Pradesh',
    district: 'Guntur',
    farmingPractice: 'Mechanized / Drip',
    season: 'Kharif 2024-25',
    sessionStatus: 'Active Now'
  },
  {
    id: 'rec-102',
    timestamp: Date.now() - 1000 * 60 * 45, // 45 mins ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 45).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 45).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 45).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-7712',
    farmerName: 'Venkata Ramana Reddy',
    mobile: '9440155621',
    email: 'ramana.reddy@gmail.com',
    farmerType: 'Semi-Medium Farmer (5 - 10 Acres)',
    cropsCultivating: 'Cotton, Red Gram (Pigeon Pea), Maize',
    cropList: ['Cotton', 'Red Gram', 'Maize'],
    landholdingAcres: 7.0,
    state: 'Telangana',
    district: 'Warangal',
    farmingPractice: 'Integrated Farming',
    season: 'Kharif 2024-25',
    sessionStatus: 'Active Now'
  },
  {
    id: 'rec-103',
    timestamp: Date.now() - 1000 * 60 * 120, // 2 hours ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 120).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 120).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 120).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-3390',
    farmerName: 'Sardar Gurpreet Singh Dhillon',
    mobile: '9815044321',
    email: 'gurpreet.pb@punjabfarms.in',
    farmerType: 'Large Commercial Farmer (> 25 Acres)',
    cropsCultivating: 'Sharbati Wheat, Basmati Rice 1121, Mustard',
    cropList: ['Wheat', 'Basmati Rice', 'Mustard'],
    landholdingAcres: 28.0,
    state: 'Punjab',
    district: 'Ludhiana',
    farmingPractice: 'Mechanized / Drip',
    season: 'Rabi 2024-25',
    sessionStatus: 'Verified Session'
  },
  {
    id: 'rec-104',
    timestamp: Date.now() - 1000 * 60 * 190, // 3 hours ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 190).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 190).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 190).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-4182',
    farmerName: 'Balasaheb Shinde Patil',
    mobile: '9822311456',
    email: 'patil.agri@mahasugarcane.org',
    farmerType: 'Medium Farmer (10 - 25 Acres)',
    cropsCultivating: 'Sugarcane (Co 86032), Soybean, Onion',
    cropList: ['Sugarcane', 'Soybean', 'Onion'],
    landholdingAcres: 14.5,
    state: 'Maharashtra',
    district: 'Kolhapur',
    farmingPractice: 'Mechanized / Drip',
    season: 'Perennial / Kharif',
    sessionStatus: 'Verified Session'
  },
  {
    id: 'rec-105',
    timestamp: Date.now() - 1000 * 60 * 310, // 5 hours ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 310).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 310).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 310).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-9921',
    farmerName: 'Smt. Lakshmi Devi Anantapuram',
    mobile: '9908123478',
    farmerType: 'Organic & Natural Farming Practitioner',
    cropsCultivating: 'Finger Millet (Ragi), Foxtail Millet (Korralu), Groundnut',
    cropList: ['Millets', 'Groundnut', 'Pulses'],
    landholdingAcres: 3.2,
    state: 'Andhra Pradesh',
    district: 'Anantapur',
    farmingPractice: 'Natural / Organic',
    season: 'Kharif 2024-25',
    sessionStatus: 'Verified Session'
  },
  {
    id: 'rec-106',
    timestamp: Date.now() - 1000 * 60 * 480, // 8 hours ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 480).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 480).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 480).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-5619',
    farmerName: 'Shivanna Ningappa Gowda',
    mobile: '9480112990',
    farmerType: 'Tenant Farmer (Kowlu Raithu)',
    cropsCultivating: 'Ragi, Hybrid Maize, Sugarcane',
    cropList: ['Ragi', 'Maize', 'Sugarcane'],
    landholdingAcres: 2.0,
    state: 'Karnataka',
    district: 'Mandya',
    farmingPractice: 'Traditional',
    season: 'Kharif 2024-25',
    sessionStatus: 'Previous Login'
  },
  {
    id: 'rec-107',
    timestamp: Date.now() - 1000 * 60 * 720, // 12 hours ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 720).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 720).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 720).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-2204',
    farmerName: 'Rajeshwar Dayal Verma',
    mobile: '9450882319',
    farmerType: 'Marginal Farmer (< 2.5 Acres)',
    cropsCultivating: 'Wheat (HD-2967), Yellow Mustard, Potato',
    cropList: ['Wheat', 'Mustard', 'Potato'],
    landholdingAcres: 1.8,
    state: 'Uttar Pradesh',
    district: 'Meerut',
    farmingPractice: 'Traditional',
    season: 'Rabi 2024-25',
    sessionStatus: 'Previous Login'
  },
  {
    id: 'rec-108',
    timestamp: Date.now() - 1000 * 60 * 1440, // 1 day ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 1440).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 1440).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 1440).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-SCI-9021',
    farmerName: 'Dr. Sunita Sharma',
    mobile: '9414011223',
    email: 'sunita.icar@icar.gov.in',
    farmerType: 'Agronomist / Research Scientist',
    cropsCultivating: 'Research Trial: Basmati PB-1847, Climate-Resilient Wheat',
    cropList: ['Wheat', 'Basmati Rice'],
    landholdingAcres: 12.0,
    state: 'Punjab',
    district: 'Ludhiana',
    farmingPractice: 'Integrated Farming',
    season: 'Rabi 2024-25',
    sessionStatus: 'Previous Login'
  },
  {
    id: 'rec-109',
    timestamp: Date.now() - 1000 * 60 * 1800, // 30 hours ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 1800).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 1800).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 1800).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-OFF-4412',
    farmerName: 'Mahesh Deshmukh',
    mobile: '9822099881',
    email: 'm.deshmukh@mahaagri.gov.in',
    farmerType: 'Agricultural Officer / Inspector',
    cropsCultivating: 'District Monitoring: Red Onion, Export Grapes, Soybean',
    cropList: ['Onion', 'Grapes', 'Soybean'],
    landholdingAcres: 0,
    state: 'Maharashtra',
    district: 'Nashik',
    farmingPractice: 'Integrated Farming',
    season: 'Kharif 2024-25',
    sessionStatus: 'Previous Login'
  },
  {
    id: 'rec-110',
    timestamp: Date.now() - 1000 * 60 * 2400, // 40 hours ago
    loginDateTime: new Date(Date.now() - 1000 * 60 * 2400).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    loginDate: new Date(Date.now() - 1000 * 60 * 2400).toISOString().slice(0, 10),
    loginTime: new Date(Date.now() - 1000 * 60 * 2400).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    kisanId: 'RR-RAI-6643',
    farmerName: 'Birendra Nath Roy',
    mobile: '9734509182',
    farmerType: 'Marginal Farmer (< 2.5 Acres)',
    cropsCultivating: 'Aman Paddy, Raw Jute (Tossa), Mustard',
    cropList: ['Rice (Paddy)', 'Jute', 'Mustard'],
    landholdingAcres: 1.6,
    state: 'West Bengal',
    district: 'Nadia',
    farmingPractice: 'Traditional',
    season: 'Kharif 2024-25',
    sessionStatus: 'Previous Login'
  }
];
