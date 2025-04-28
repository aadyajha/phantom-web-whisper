
import { ScanResult, AccountData } from '@/types';

// Mock data for demonstration
const mockAccounts: AccountData[] = [
  {
    id: '1',
    name: 'Facebook',
    url: 'facebook.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Facebook_f_Logo_%282019%29.svg/240px-Facebook_f_Logo_%282019%29.svg.png',
    deleteUrl: 'https://facebook.com/help/delete_account',
    category: 'Social',
    hasPersonalInfo: true
  },
  {
    id: '2',
    name: 'Twitter',
    url: 'twitter.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/240px-Logo_of_Twitter.svg.png',
    deleteUrl: 'https://twitter.com/settings/deactivate',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '3',
    name: 'Amazon',
    url: 'amazon.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/240px-Amazon_logo.svg.png',
    deleteUrl: 'https://amazon.com/gp/help/customer/display.html?nodeId=GDK92DNLSGWTV6MP',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '4',
    name: 'Netflix',
    url: 'netflix.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/240px-Netflix_2015_logo.svg.png',
    deleteUrl: 'https://www.netflix.com/cancelplan',
    category: 'Entertainment',
    hasPersonalInfo: true
  },
  {
    id: '5',
    name: 'Dropbox',
    url: 'dropbox.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/240px-Dropbox_logo_2017.svg.png',
    deleteUrl: 'https://www.dropbox.com/account/delete',
    category: 'Storage',
    hasPersonalInfo: true
  },
  {
    id: '6',
    name: 'Spotify',
    url: 'spotify.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/240px-Spotify_logo_without_text.svg.png',
    deleteUrl: 'https://www.spotify.com/account/overview/',
    category: 'Entertainment',
    hasPersonalInfo: false
  },
  {
    id: '7',
    name: 'Pinterest',
    url: 'pinterest.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/240px-Pinterest_Logo.svg.png',
    deleteUrl: 'https://www.pinterest.com/settings/',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '8',
    name: 'GitHub',
    url: 'github.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png',
    deleteUrl: 'https://github.com/settings/admin',
    category: 'Development',
    hasPersonalInfo: false
  }
];

// Simulate a scanning process
export const scanEmailAccounts = async (email: string): Promise<ScanResult> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return 4-7 random accounts with 1-2 guaranteed to have personal info
      const shuffled = [...mockAccounts].sort(() => 0.5 - Math.random());
      const numAccounts = Math.floor(Math.random() * 4) + 4; // Between 4 and 7
      let selected = shuffled.slice(0, numAccounts);
      
      // Ensure at least one has personal info
      const hasPersonalInfo = selected.some(a => a.hasPersonalInfo);
      if (!hasPersonalInfo) {
        const personalInfoAccount = mockAccounts.find(a => a.hasPersonalInfo);
        if (personalInfoAccount) {
          selected[0] = personalInfoAccount;
        }
      }
      
      resolve({
        email,
        accounts: selected,
        scannedAt: new Date()
      });
    }, 2500); // 2.5 seconds delay to simulate scanning
  });
};
