
import { ScanResult, AccountData } from '@/types';

// Real website mock data with recognizable brands
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

// Expanded mock data with actual site names for more realistic results
const generateAdditionalSites = () => {
  // Real world popular websites by category
  const additionalSites = [
    // Social Media
    { name: 'Snapchat', url: 'snapchat.com', category: 'Social', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/240px-Snapchat_logo.svg.png' },
    { name: 'WhatsApp', url: 'whatsapp.com', category: 'Social', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png' },
    { name: 'Discord', url: 'discord.com', category: 'Social', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Discord_Color_Text_Logo.svg/240px-Discord_Color_Text_Logo.svg.png' },
    { name: 'Telegram', url: 'telegram.org', category: 'Social', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png' },
    { name: 'Clubhouse', url: 'clubhouse.com', category: 'Social', logo: '' },
    { name: 'Mastodon', url: 'mastodon.social', category: 'Social', logo: '' },
    
    // Shopping
    { name: 'eBay', url: 'ebay.com', category: 'Shopping', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/240px-EBay_logo.svg.png' },
    { name: 'Etsy', url: 'etsy.com', category: 'Shopping', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/240px-Etsy_logo.svg.png' },
    { name: 'Walmart', url: 'walmart.com', category: 'Shopping', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/240px-Walmart_logo.svg.png' },
    { name: 'Target', url: 'target.com', category: 'Shopping', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/240px-Target_Corporation_logo_%28vector%29.svg.png' },
    { name: 'Best Buy', url: 'bestbuy.com', category: 'Shopping', logo: '' },
    { name: 'Wayfair', url: 'wayfair.com', category: 'Shopping', logo: '' },
    { name: 'ASOS', url: 'asos.com', category: 'Shopping', logo: '' },
    
    // Entertainment
    { name: 'Disney+', url: 'disneyplus.com', category: 'Entertainment', logo: '' },
    { name: 'Hulu', url: 'hulu.com', category: 'Entertainment', logo: '' },
    { name: 'HBO Max', url: 'hbomax.com', category: 'Entertainment', logo: '' },
    { name: 'YouTube', url: 'youtube.com', category: 'Entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/240px-YouTube_full-color_icon_%282017%29.svg.png' },
    { name: 'Twitch', url: 'twitch.tv', category: 'Entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/240px-Twitch_logo.svg.png' },
    { name: 'SoundCloud', url: 'soundcloud.com', category: 'Entertainment', logo: '' },
    { name: 'Pandora', url: 'pandora.com', category: 'Entertainment', logo: '' },
    { name: 'Apple Music', url: 'music.apple.com', category: 'Entertainment', logo: '' },
    
    // Technology
    { name: 'Apple', url: 'apple.com', category: 'Technology', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/240px-Apple_logo_black.svg.png' },
    { name: 'Google', url: 'google.com', category: 'Technology', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png' },
    { name: 'Adobe', url: 'adobe.com', category: 'Technology', logo: '' },
    { name: 'Samsung', url: 'samsung.com', category: 'Technology', logo: '' },
    
    // Finance
    { name: 'Venmo', url: 'venmo.com', category: 'Finance', logo: '' },
    { name: 'Cash App', url: 'cash.app', category: 'Finance', logo: '' },
    { name: 'Chase', url: 'chase.com', category: 'Finance', logo: '' },
    { name: 'Bank of America', url: 'bankofamerica.com', category: 'Finance', logo: '' },
    { name: 'Wells Fargo', url: 'wellsfargo.com', category: 'Finance', logo: '' },
    { name: 'Coinbase', url: 'coinbase.com', category: 'Finance', logo: '' },
    { name: 'Robinhood', url: 'robinhood.com', category: 'Finance', logo: '' },
    
    // Productivity
    { name: 'Zoom', url: 'zoom.us', category: 'Productivity', logo: '' },
    { name: 'Trello', url: 'trello.com', category: 'Productivity', logo: '' },
    { name: 'Asana', url: 'asana.com', category: 'Productivity', logo: '' },
    { name: 'Notion', url: 'notion.so', category: 'Productivity', logo: '' },
    { name: 'Monday', url: 'monday.com', category: 'Productivity', logo: '' },
    { name: 'Google Drive', url: 'drive.google.com', category: 'Productivity', logo: '' },
    { name: 'OneDrive', url: 'onedrive.live.com', category: 'Productivity', logo: '' },
    
    // Travel
    { name: 'Booking.com', url: 'booking.com', category: 'Travel', logo: '' },
    { name: 'Expedia', url: 'expedia.com', category: 'Travel', logo: '' },
    { name: 'Hotels.com', url: 'hotels.com', category: 'Travel', logo: '' },
    { name: 'TripAdvisor', url: 'tripadvisor.com', category: 'Travel', logo: '' },
    { name: 'Lyft', url: 'lyft.com', category: 'Travel', logo: '' },
    
    // Food
    { name: 'DoorDash', url: 'doordash.com', category: 'Food', logo: '' },
    { name: 'Uber Eats', url: 'ubereats.com', category: 'Food', logo: '' },
    { name: 'Grubhub', url: 'grubhub.com', category: 'Food', logo: '' },
    { name: 'Instacart', url: 'instacart.com', category: 'Food', logo: '' },
    { name: 'Yelp', url: 'yelp.com', category: 'Food', logo: '' },
    
    // News
    { name: 'The New York Times', url: 'nytimes.com', category: 'News', logo: '' },
    { name: 'CNN', url: 'cnn.com', category: 'News', logo: '' },
    { name: 'BBC', url: 'bbc.com', category: 'News', logo: '' },
    { name: 'The Guardian', url: 'theguardian.com', category: 'News', logo: '' },
    { name: 'Medium', url: 'medium.com', category: 'News', logo: '' },
    { name: 'Bloomberg', url: 'bloomberg.com', category: 'News', logo: '' },
    
    // Education
    { name: 'Coursera', url: 'coursera.org', category: 'Education', logo: '' },
    { name: 'Udemy', url: 'udemy.com', category: 'Education', logo: '' },
    { name: 'Khan Academy', url: 'khanacademy.org', category: 'Education', logo: '' },
    { name: 'edX', url: 'edx.org', category: 'Education', logo: '' },
    { name: 'Duolingo', url: 'duolingo.com', category: 'Education', logo: '' },
    
    // Health
    { name: 'MyFitnessPal', url: 'myfitnesspal.com', category: 'Health', logo: '' },
    { name: 'Fitbit', url: 'fitbit.com', category: 'Health', logo: '' },
    { name: 'Strava', url: 'strava.com', category: 'Health', logo: '' },
    { name: 'Headspace', url: 'headspace.com', category: 'Health', logo: '' },
    { name: 'Calm', url: 'calm.com', category: 'Health', logo: '' }
  ];
  
  // Format all sites to match the AccountData interface
  return additionalSites.map((site, index) => ({
    id: (index + 21).toString(), // IDs continue from where mockAccounts left off
    name: site.name,
    url: site.url,
    logo: site.logo || '', // Use provided logo or empty string
    deleteUrl: `https://${site.url}/account/delete`,
    category: site.category,
    hasPersonalInfo: Math.random() > 0.7 // About 30% have personal info
  }));
};

// Generate additional generic sites to reach the 1000 total if needed
const generateGenericSites = (startId: number, count: number) => {
  const categories = ['Social', 'Shopping', 'Entertainment', 'Finance', 'Travel', 'Technology', 'Email', 'Gaming', 'News', 'Health', 'Food', 'Education', 'Business', 'Sports'];
  const siteSuffixes = ['.com', '.org', '.net', '.co', '.io', '.app', '.store', '.blog'];
  
  const genericSites: AccountData[] = [];
  
  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const siteName = `Site${startId + i}`;
    const domain = siteName.toLowerCase() + siteSuffixes[Math.floor(Math.random() * siteSuffixes.length)];
    
    genericSites.push({
      id: (startId + i).toString(),
      name: siteName,
      url: domain,
      logo: '',
      deleteUrl: `https://${domain}/account/delete`,
      category,
      hasPersonalInfo: Math.random() > 0.7 // About 30% have personal info
    });
  }
  
  return genericSites;
};

// Get additional sites from our predefined list
const additionalRealSites = generateAdditionalSites();

// Calculate how many more generic sites we need to reach 1000
const remainingCount = 1000 - (mockAccounts.length + additionalRealSites.length);

// Generate remaining generic sites if needed
const genericSites = remainingCount > 0 ? 
  generateGenericSites(mockAccounts.length + additionalRealSites.length, remainingCount) : 
  [];

// Combine all sites
const allMockAccounts = [...mockAccounts, ...additionalRealSites, ...genericSites];

// Simulate a scanning process
export const scanEmailAccounts = async (email: string): Promise<ScanResult> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return a random number between 50 and 200 accounts
      const numAccounts = Math.floor(Math.random() * 151) + 50; // Between 50 and 200
      
      // Prioritize real accounts in the results
      let selected: AccountData[] = [];
      
      // First add all real accounts (mockAccounts + additionalRealSites)
      const realAccounts = [...mockAccounts, ...additionalRealSites];
      
      // Shuffle the real accounts for randomness
      const shuffledRealAccounts = [...realAccounts].sort(() => 0.5 - Math.random());
      
      // Take at least 30 real accounts or all if less than 30
      const realAccountsToUse = shuffledRealAccounts.slice(0, Math.min(30, shuffledRealAccounts.length));
      selected = [...realAccountsToUse];
      
      // If we need more accounts to reach numAccounts, add generic ones
      if (selected.length < numAccounts) {
        const remainingNeeded = numAccounts - selected.length;
        const shuffledGeneric = [...genericSites].sort(() => 0.5 - Math.random());
        const genericAccountsToUse = shuffledGeneric.slice(0, remainingNeeded);
        selected = [...selected, ...genericAccountsToUse];
      }
      
      // Ensure at least one has personal info
      const hasPersonalInfo = selected.some(a => a.hasPersonalInfo);
      if (!hasPersonalInfo) {
        const personalInfoAccount = mockAccounts.find(a => a.hasPersonalInfo);
        if (personalInfoAccount) {
          selected[0] = personalInfoAccount;
        }
      }
      
      // Shuffle the final selection for a random order
      selected = selected.sort(() => 0.5 - Math.random());
      
      resolve({
        email,
        accounts: selected,
        scannedAt: new Date(),
        totalAccounts: numAccounts
      });
    }, 2500); // 2.5 seconds delay to simulate scanning
  });
};

