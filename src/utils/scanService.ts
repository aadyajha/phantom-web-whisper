
import { ScanResult, AccountData } from '@/types';

// Expanded mock data for demonstration (over 100 sites)
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
  },
  {
    id: '9',
    name: 'LinkedIn',
    url: 'linkedin.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png',
    deleteUrl: 'https://www.linkedin.com/help/linkedin/answer/63',
    category: 'Professional',
    hasPersonalInfo: true
  },
  {
    id: '10',
    name: 'Instagram',
    url: 'instagram.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png',
    deleteUrl: 'https://www.instagram.com/accounts/remove/request/permanent/',
    category: 'Social',
    hasPersonalInfo: true
  },
  {
    id: '11',
    name: 'Gmail',
    url: 'gmail.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/240px-Gmail_icon_%282020%29.svg.png',
    deleteUrl: 'https://myaccount.google.com/deleteservices',
    category: 'Email',
    hasPersonalInfo: true
  },
  {
    id: '12',
    name: 'Airbnb',
    url: 'airbnb.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/240px-Airbnb_Logo_B%C3%A9lo.svg.png',
    deleteUrl: 'https://www.airbnb.com/help/article/240/how-do-i-cancel-my-account',
    category: 'Travel',
    hasPersonalInfo: true
  },
  {
    id: '13',
    name: 'Uber',
    url: 'uber.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/240px-Uber_logo_2018.svg.png',
    deleteUrl: 'https://help.uber.com/riders/article/delete-my-account--?nodeId=24010fe7-7a67-4ee5-9938-c734000b144a',
    category: 'Transportation',
    hasPersonalInfo: true
  },
  {
    id: '14',
    name: 'PayPal',
    url: 'paypal.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/240px-PayPal.svg.png',
    deleteUrl: 'https://www.paypal.com/myaccount/settings/data-controls',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '15',
    name: 'Microsoft',
    url: 'microsoft.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/240px-Microsoft_logo.svg.png',
    deleteUrl: 'https://account.microsoft.com/profile/manage-account',
    category: 'Technology',
    hasPersonalInfo: true
  },
  {
    id: '16',
    name: 'Yahoo',
    url: 'yahoo.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Yahoo%21_Logo_1995-2019.svg/240px-Yahoo%21_Logo_1995-2019.svg.png',
    deleteUrl: 'https://help.yahoo.com/kb/SLN2044.html',
    category: 'Email',
    hasPersonalInfo: true
  },
  {
    id: '17',
    name: 'Slack',
    url: 'slack.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/240px-Slack_Technologies_Logo.svg.png',
    deleteUrl: 'https://slack.com/help/articles/203953146-Delete-your-Slack-account',
    category: 'Productivity',
    hasPersonalInfo: false
  },
  {
    id: '18',
    name: 'Reddit',
    url: 'reddit.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/240px-Reddit_logo_new.svg.png',
    deleteUrl: 'https://www.reddit.com/settings/account',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '19',
    name: 'Tumblr',
    url: 'tumblr.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tumblr_logo.svg/240px-Tumblr_logo.svg.png',
    deleteUrl: 'https://www.tumblr.com/account/delete',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '20',
    name: 'TikTok',
    url: 'tiktok.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/240px-TikTok_logo.svg.png',
    deleteUrl: 'https://www.tiktok.com/legal/report/account-deletion',
    category: 'Social',
    hasPersonalInfo: true
  }
];

// Generate a large number of additional mock sites
const generateAdditionalSites = () => {
  const categories = ['Social', 'Shopping', 'Entertainment', 'Finance', 'Travel', 'Technology', 'Email', 'Gaming', 'News', 'Health', 'Food', 'Education', 'Business', 'Sports'];
  const siteSuffixes = ['.com', '.org', '.net', '.co', '.io', '.app', '.store', '.blog'];
  
  const additionalSites: AccountData[] = [];
  
  for (let i = 21; i <= 1000; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const siteName = `Site${i}`;
    const domain = siteName.toLowerCase() + siteSuffixes[Math.floor(Math.random() * siteSuffixes.length)];
    
    additionalSites.push({
      id: i.toString(),
      name: siteName,
      url: domain,
      logo: '',
      deleteUrl: `https://${domain}/account/delete`,
      category,
      hasPersonalInfo: Math.random() > 0.7 // About 30% have personal info
    });
  }
  
  return additionalSites;
};

// Combine original mock sites with generated ones
const allMockAccounts = [...mockAccounts, ...generateAdditionalSites()];

// Simulate a scanning process
export const scanEmailAccounts = async (email: string): Promise<ScanResult> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return a random number between 50 and 200 accounts
      const numAccounts = Math.floor(Math.random() * 151) + 50; // Between 50 and 200
      
      // Shuffle the accounts and select the first numAccounts
      const shuffled = [...allMockAccounts].sort(() => 0.5 - Math.random());
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
        scannedAt: new Date(),
        totalAccounts: numAccounts
      });
    }, 2500); // 2.5 seconds delay to simulate scanning
  });
};
