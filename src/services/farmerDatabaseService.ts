import * as XLSX from 'xlsx';
import { FarmerLoginRecord, INITIAL_FARMER_LOGIN_DB, FarmerCategory } from '../types/farmerDatabase';
import { UserProfile } from '../types/auth';

const STORAGE_KEY = 'raithu_farmer_login_ledger_v1';

export function getStoredFarmerLogins(): FarmerLoginRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_FARMER_LOGIN_DB));
      return INITIAL_FARMER_LOGIN_DB;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_FARMER_LOGIN_DB;
  } catch (err) {
    console.error('Failed to load farmer logins from storage:', err);
    return INITIAL_FARMER_LOGIN_DB;
  }
}

export function saveFarmerLogins(records: FarmerLoginRecord[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to save farmer logins:', err);
  }
}

export function recordFarmerLogin(
  user: UserProfile,
  extraOptions?: {
    farmerType?: string;
    cropsCultivating?: string;
    farmingPractice?: FarmerLoginRecord['farmingPractice'];
    season?: string;
  }
): FarmerLoginRecord {
  const currentRecords = getStoredFarmerLogins();
  const now = new Date();

  // Determine farmer type based on acres or user role
  let derivedFarmerType: string = extraOptions?.farmerType || '';
  if (!derivedFarmerType) {
    if (user.role === 'Agronomist / Scientist') {
      derivedFarmerType = 'Agronomist / Research Scientist';
    } else if (user.role === 'Agricultural Officer') {
      derivedFarmerType = 'Agricultural Officer / Inspector';
    } else {
      const acres = user.landholdingAcres || 0;
      if (acres <= 0) derivedFarmerType = 'Tenant Farmer (Kowlu Raithu)';
      else if (acres < 2.5) derivedFarmerType = 'Marginal Farmer (< 2.5 Acres)';
      else if (acres <= 5.0) derivedFarmerType = 'Small Farmer (2.5 - 5 Acres)';
      else if (acres <= 10.0) derivedFarmerType = 'Semi-Medium Farmer (5 - 10 Acres)';
      else if (acres <= 25.0) derivedFarmerType = 'Medium Farmer (10 - 25 Acres)';
      else derivedFarmerType = 'Large Commercial Farmer (> 25 Acres)';
    }
  }

  const crops = extraOptions?.cropsCultivating || (user.primaryCrops && user.primaryCrops.length > 0
    ? user.primaryCrops.join(', ')
    : 'Rice (Paddy), Cotton');

  const newRecord: FarmerLoginRecord = {
    id: `rec-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    timestamp: now.getTime(),
    loginDateTime: now.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'medium'
    }),
    loginDate: now.toISOString().slice(0, 10),
    loginTime: now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }),
    kisanId: user.kisanId || `RR-RAI-${Math.floor(1000 + Math.random() * 9000)}`,
    farmerName: user.name,
    mobile: user.mobile || '9848022334',
    email: user.email || '',
    farmerType: derivedFarmerType,
    cropsCultivating: crops,
    cropList: crops.split(',').map((c) => c.trim()).filter(Boolean),
    landholdingAcres: user.landholdingAcres ?? (derivedFarmerType.includes('Small') ? 3.5 : 2.0),
    state: user.state || 'Andhra Pradesh',
    district: user.district || 'Guntur',
    farmingPractice: extraOptions?.farmingPractice || 'Mechanized / Drip',
    season: extraOptions?.season || 'Kharif 2024-25',
    sessionStatus: 'Active Now'
  };

  // Mark all previous sessions as 'Previous Login' or 'Verified Session'
  const updated = [
    newRecord,
    ...currentRecords.map((r) => ({
      ...r,
      sessionStatus: (r.sessionStatus === 'Active Now' ? 'Verified Session' : r.sessionStatus) as FarmerLoginRecord['sessionStatus']
    }))
  ];

  saveFarmerLogins(updated);
  return newRecord;
}

/**
 * Exports records to genuine Microsoft Excel (.xlsx) workbook
 */
export function exportToExcelFile(records: FarmerLoginRecord[], fileNamePrefix: string = 'Raithu_Rajayam_Farmers_Database'): void {
  const formattedData = records.map((r, index) => ({
    'S.No': index + 1,
    'Login Date & Time': r.loginDateTime,
    'Date': r.loginDate,
    'Time': r.loginTime,
    'Kisan ID': r.kisanId,
    'Farmer Name': r.farmerName,
    'Contact Mobile': r.mobile,
    'Email Address': r.email || 'N/A',
    'Type of Farmer': r.farmerType,
    'Crops Cultivating': r.cropsCultivating,
    'Landholding (Acres)': r.landholdingAcres,
    'State': r.state,
    'District': r.district,
    'Farming Practice': r.farmingPractice,
    'Agricultural Season': r.season,
    'Session Status': r.sessionStatus
  }));

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Set explicit column widths for Excel
  worksheet['!cols'] = [
    { wch: 6 },  // S.No
    { wch: 22 }, // Login Date & Time
    { wch: 12 }, // Date
    { wch: 14 }, // Time
    { wch: 18 }, // Kisan ID
    { wch: 28 }, // Farmer Name
    { wch: 15 }, // Mobile
    { wch: 26 }, // Email
    { wch: 32 }, // Type of Farmer
    { wch: 38 }, // Crops Cultivating
    { wch: 18 }, // Landholding
    { wch: 18 }, // State
    { wch: 18 }, // District
    { wch: 22 }, // Farming Practice
    { wch: 18 }, // Season
    { wch: 16 }, // Status
  ];

  // Create workbook and append sheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Farmer_Login_Database');

  // Trigger download
  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `${fileNamePrefix}_${dateStr}.xlsx`);
}

/**
 * Also provides high-compatibility CSV with UTF-8 BOM that opens directly in Excel
 */
export function exportToExcelCSV(records: FarmerLoginRecord[], fileNamePrefix: string = 'Raithu_Rajayam_Farmers_Database'): void {
  const headers = [
    'S.No',
    'Login Date & Time',
    'Date',
    'Time',
    'Kisan ID',
    'Farmer Name',
    'Contact Mobile',
    'Email Address',
    'Type of Farmer',
    'Crops Cultivating',
    'Landholding (Acres)',
    'State',
    'District',
    'Farming Practice',
    'Agricultural Season',
    'Session Status'
  ];

  const escapeCSV = (val: any) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = records.map((r, idx) => [
    idx + 1,
    escapeCSV(r.loginDateTime),
    escapeCSV(r.loginDate),
    escapeCSV(r.loginTime),
    escapeCSV(r.kisanId),
    escapeCSV(r.farmerName),
    escapeCSV(r.mobile),
    escapeCSV(r.email || 'N/A'),
    escapeCSV(r.farmerType),
    escapeCSV(r.cropsCultivating),
    r.landholdingAcres,
    escapeCSV(r.state),
    escapeCSV(r.district),
    escapeCSV(r.farmingPractice),
    escapeCSV(r.season),
    escapeCSV(r.sessionStatus)
  ].join(','));

  // Prepend UTF-8 BOM (\uFEFF) so Excel respects UTF-8 encoding
  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0, 10);
  link.setAttribute('href', url);
  link.setAttribute('download', `${fileNamePrefix}_${dateStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
