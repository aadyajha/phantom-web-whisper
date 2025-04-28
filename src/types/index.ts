
export interface AccountData {
  id: string;
  name: string;
  url: string;
  logo: string;
  deleteUrl: string;
  category: string;
  hasPersonalInfo: boolean;
}

export interface ScanResult {
  email: string;
  accounts: AccountData[];
  scannedAt: Date;
}
