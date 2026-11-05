export interface UserProfile {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  kisanId: string;
  role: 'Raithu (Farmer)' | 'Agronomist / Scientist' | 'Agricultural Officer';
  state: string;
  district: string;
  landholdingAcres?: number;
  primaryCrops?: string[];
  joinedDate: string;
}

export const DEMO_USERS: UserProfile[] = [
  {
    id: 'user-1',
    name: 'Ramesh Kumar Chowdary',
    mobile: '9848022334',
    email: 'ramesh.farmer@raithu.org',
    kisanId: 'RR-AP-2024-8841',
    role: 'Raithu (Farmer)',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    landholdingAcres: 5.5,
    primaryCrops: ['Rice (Paddy)', 'Chili', 'Cotton'],
    joinedDate: '2024-03-12'
  },
  {
    id: 'user-2',
    name: 'Dr. Sunita Sharma',
    mobile: '9414011223',
    email: 'sunita.icar@icar.gov.in',
    kisanId: 'RR-ICAR-9021',
    role: 'Agronomist / Scientist',
    state: 'Punjab',
    district: 'Ludhiana',
    landholdingAcres: 0,
    primaryCrops: ['Wheat', 'Basmati Rice'],
    joinedDate: '2023-11-05'
  },
  {
    id: 'user-3',
    name: 'Mahesh Deshmukh',
    mobile: '9822099881',
    email: 'm.deshmukh@mahaagri.gov.in',
    kisanId: 'RR-OFF-4412',
    role: 'Agricultural Officer',
    state: 'Maharashtra',
    district: 'Nashik',
    landholdingAcres: 0,
    primaryCrops: ['Onion', 'Grapes', 'Sugarcane'],
    joinedDate: '2024-01-18'
  }
];
