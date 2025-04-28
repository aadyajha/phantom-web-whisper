
import { ScanResult, AccountData } from '@/types';

// Popular Indian websites and services
const indianWebsites: AccountData[] = [
  {
    id: '1',
    name: 'Flipkart',
    url: 'flipkart.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flipkart_logo.svg/240px-Flipkart_logo.svg.png',
    deleteUrl: 'https://www.flipkart.com/account/manageaddress',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '2',
    name: 'Myntra',
    url: 'myntra.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Myntra_logo.png/240px-Myntra_logo.png',
    deleteUrl: 'https://www.myntra.com/my/profile',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '3',
    name: 'Paytm',
    url: 'paytm.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/240px-Paytm_Logo_%28standalone%29.svg.png',
    deleteUrl: 'https://paytm.com/care/account-settings',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '4',
    name: 'IRCTC',
    url: 'irctc.co.in',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/IRCTC_Logo.svg/240px-IRCTC_Logo.svg.png',
    deleteUrl: 'https://www.irctc.co.in/nget/profile',
    category: 'Travel',
    hasPersonalInfo: true
  },
  {
    id: '5',
    name: 'MakeMyTrip',
    url: 'makemytrip.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/MakeMyTrip_Logo.png/240px-MakeMyTrip_Logo.png',
    deleteUrl: 'https://www.makemytrip.com/profile/',
    category: 'Travel',
    hasPersonalInfo: true
  },
  {
    id: '6',
    name: 'Ola',
    url: 'olacabs.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ola_Cabs_logo.svg/240px-Ola_Cabs_logo.svg.png',
    deleteUrl: 'https://help.olacabs.com/support/home',
    category: 'Transportation',
    hasPersonalInfo: true
  },
  {
    id: '7',
    name: 'Swiggy',
    url: 'swiggy.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Swiggy_logo.svg/240px-Swiggy_logo.svg.png',
    deleteUrl: 'https://www.swiggy.com/my-account',
    category: 'Food',
    hasPersonalInfo: true
  },
  {
    id: '8',
    name: 'Zomato',
    url: 'zomato.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/240px-Zomato_logo.png',
    deleteUrl: 'https://www.zomato.com/contact',
    category: 'Food',
    hasPersonalInfo: true
  },
  {
    id: '9',
    name: 'JioMart',
    url: 'jiomart.com',
    logo: 'https://jep-asset.akamaized.net/jiostaticresources/jiomart/jm-logo.PNG',
    deleteUrl: 'https://www.jiomart.com/customer/account/',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '10',
    name: 'BigBasket',
    url: 'bigbasket.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/BigBasket_logo.svg/240px-BigBasket_logo.svg.png',
    deleteUrl: 'https://www.bigbasket.com/account/profile/',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '11',
    name: 'Naukri',
    url: 'naukri.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Naukri_Logo.png/240px-Naukri_Logo.png',
    deleteUrl: 'https://www.naukri.com/nlogin/logout',
    category: 'Jobs',
    hasPersonalInfo: true
  },
  {
    id: '12',
    name: 'IndiaMART',
    url: 'indiamart.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/IndiaMart_Logo.svg/240px-IndiaMart_Logo.svg.png',
    deleteUrl: 'https://my.indiamart.com/',
    category: 'Business',
    hasPersonalInfo: true
  },
  {
    id: '13',
    name: 'PhonePe',
    url: 'phonepe.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/PhonePe_Logo.svg/240px-PhonePe_Logo.svg.png',
    deleteUrl: 'https://www.phonepe.com/contact-us/',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '14',
    name: 'Google Pay',
    url: 'pay.google.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/240px-Google_Pay_Logo_%282020%29.svg.png',
    deleteUrl: 'https://payments.google.com/payments/home#settings',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '15',
    name: 'BookMyShow',
    url: 'bookmyshow.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/BookMyShow_Logo.svg/240px-BookMyShow_Logo.svg.png',
    deleteUrl: 'https://in.bookmyshow.com/contact-us',
    category: 'Entertainment',
    hasPersonalInfo: true
  },
  {
    id: '16',
    name: 'Gaana',
    url: 'gaana.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Gaana_logo.svg/240px-Gaana_logo.svg.png',
    deleteUrl: 'https://gaana.com/settings',
    category: 'Entertainment',
    hasPersonalInfo: false
  },
  {
    id: '17',
    name: 'JioSaavn',
    url: 'jiosaavn.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/JioSaavn_Logo.svg/240px-JioSaavn_Logo.svg.png',
    deleteUrl: 'https://www.jiosaavn.com/account',
    category: 'Entertainment',
    hasPersonalInfo: false
  },
  {
    id: '18',
    name: 'Hotstar',
    url: 'hotstar.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Disney%2B_Hotstar_logo.svg/240px-Disney%2B_Hotstar_logo.svg.png',
    deleteUrl: 'https://www.hotstar.com/in/subscribe/my-account',
    category: 'Entertainment',
    hasPersonalInfo: true
  },
  {
    id: '19',
    name: 'Snapdeal',
    url: 'snapdeal.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Snapdeal_Logo_new.png/240px-Snapdeal_Logo_new.png',
    deleteUrl: 'https://www.snapdeal.com/page/contact-us',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '20',
    name: 'Urban Company',
    url: 'urbancompany.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Urban_Company_Logo.png/240px-Urban_Company_Logo.png',
    deleteUrl: 'https://www.urbancompany.com/customer/account',
    category: 'Services',
    hasPersonalInfo: true
  },
  {
    id: '21',
    name: 'HDFC Bank',
    url: 'hdfcbank.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/HDFC_Bank_Logo.svg/240px-HDFC_Bank_Logo.svg.png',
    deleteUrl: 'https://www.hdfcbank.com/personal/resources/support',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '22',
    name: 'SBI',
    url: 'sbi.co.in',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/State_Bank_of_India_logo.svg/240px-State_Bank_of_India_logo.svg.png',
    deleteUrl: 'https://www.onlinesbi.com/',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '23',
    name: 'ICICI Bank',
    url: 'icicibank.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/240px-ICICI_Bank_Logo.svg.png',
    deleteUrl: 'https://www.icicibank.com/customer-care',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '24',
    name: 'Axis Bank',
    url: 'axisbank.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Axis_Bank_logo.svg/240px-Axis_Bank_logo.svg.png',
    deleteUrl: 'https://www.axisbank.com/contact-us',
    category: 'Finance',
    hasPersonalInfo: true
  },
  {
    id: '25',
    name: 'Amazon India',
    url: 'amazon.in',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/240px-Amazon_logo.svg.png',
    deleteUrl: 'https://www.amazon.in/gp/help/customer/display.html?nodeId=GE2R5JQGERCRJMNE',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '26',
    name: 'Reliance Digital',
    url: 'reliancedigital.in',
    logo: 'https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg',
    deleteUrl: 'https://www.reliancedigital.in/customerprofile',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '27',
    name: 'Sharechat',
    url: 'sharechat.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sharechat_Logo.svg/240px-Sharechat_Logo.svg.png',
    deleteUrl: 'https://help.sharechat.com/',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '28',
    name: 'Moj',
    url: 'mojapp.in',
    logo: 'https://static.moj.io/moj/Moj-Logo.png',
    deleteUrl: 'https://help.mojapp.in/',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '29',
    name: 'Tata CLiQ',
    url: 'tatacliq.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/TataCliQ-Logo.png/240px-TataCliQ-Logo.png',
    deleteUrl: 'https://www.tatacliq.com/contact-us',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '30',
    name: 'Croma',
    url: 'croma.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Croma_Logo.svg/240px-Croma_Logo.svg.png',
    deleteUrl: 'https://www.croma.com/contact-us',
    category: 'Shopping',
    hasPersonalInfo: true
  }
];

// Popular global websites that are frequently used in India
const globalWebsites: AccountData[] = [
  {
    id: '31',
    name: 'Facebook',
    url: 'facebook.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Facebook_f_Logo_%282019%29.svg/240px-Facebook_f_Logo_%282019%29.svg.png',
    deleteUrl: 'https://www.facebook.com/help/delete_account',
    category: 'Social',
    hasPersonalInfo: true
  },
  {
    id: '32',
    name: 'WhatsApp',
    url: 'whatsapp.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png',
    deleteUrl: 'https://faq.whatsapp.com/android/account-and-profile/how-to-delete-your-account',
    category: 'Social',
    hasPersonalInfo: true
  },
  {
    id: '33',
    name: 'Instagram',
    url: 'instagram.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png',
    deleteUrl: 'https://www.instagram.com/accounts/remove/request/permanent/',
    category: 'Social',
    hasPersonalInfo: true
  },
  {
    id: '34',
    name: 'Gmail',
    url: 'gmail.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/240px-Gmail_icon_%282020%29.svg.png',
    deleteUrl: 'https://myaccount.google.com/deleteservices',
    category: 'Email',
    hasPersonalInfo: true
  },
  {
    id: '35',
    name: 'YouTube',
    url: 'youtube.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/240px-YouTube_full-color_icon_%282017%29.svg.png',
    deleteUrl: 'https://myaccount.google.com/deleteservices',
    category: 'Entertainment',
    hasPersonalInfo: false
  },
  {
    id: '36',
    name: 'LinkedIn',
    url: 'linkedin.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png',
    deleteUrl: 'https://www.linkedin.com/help/linkedin/answer/63',
    category: 'Professional',
    hasPersonalInfo: true
  },
  {
    id: '37',
    name: 'Twitter',
    url: 'twitter.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/240px-Logo_of_Twitter.svg.png',
    deleteUrl: 'https://twitter.com/settings/deactivate',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '38',
    name: 'Telegram',
    url: 'telegram.org',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png',
    deleteUrl: 'https://telegram.org/faq#q-how-do-i-delete-my-account',
    category: 'Social',
    hasPersonalInfo: false
  },
  {
    id: '39',
    name: 'Zoom',
    url: 'zoom.us',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Zoom_logo.svg/240px-Zoom_logo.svg.png',
    deleteUrl: 'https://support.zoom.us/hc/en-us/articles/203993967-Deleting-a-Zoom-account',
    category: 'Productivity',
    hasPersonalInfo: false
  },
  {
    id: '40',
    name: 'Netflix',
    url: 'netflix.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/240px-Netflix_2015_logo.svg.png',
    deleteUrl: 'https://www.netflix.com/cancelplan',
    category: 'Entertainment',
    hasPersonalInfo: true
  }
];

// Additional Indian and international websites
const additionalWebsites: AccountData[] = [
  {
    id: '41',
    name: 'Goibibo',
    url: 'goibibo.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Goibibo_logo.svg/240px-Goibibo_logo.svg.png',
    deleteUrl: 'https://www.goibibo.com/help/',
    category: 'Travel',
    hasPersonalInfo: true
  },
  {
    id: '42',
    name: 'Cleartrip',
    url: 'cleartrip.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/CleartripLogo.svg/240px-CleartripLogo.svg.png',
    deleteUrl: 'https://www.cleartrip.com/support',
    category: 'Travel',
    hasPersonalInfo: true
  },
  {
    id: '43',
    name: 'Yatra',
    url: 'yatra.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Yatra_Logo.svg/240px-Yatra_Logo.svg.png',
    deleteUrl: 'https://www.yatra.com/support',
    category: 'Travel',
    hasPersonalInfo: true
  },
  {
    id: '44',
    name: 'Lenskart',
    url: 'lenskart.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Lenskart_Logo.svg/240px-Lenskart_Logo.svg.png',
    deleteUrl: 'https://www.lenskart.com/customer/account/',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '45',
    name: 'Nykaa',
    url: 'nykaa.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nykaa_Logo.svg/240px-Nykaa_Logo.svg.png',
    deleteUrl: 'https://www.nykaa.com/account/orders',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '46',
    name: 'Ajio',
    url: 'ajio.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ajio_Logo.svg/240px-Ajio_Logo.svg.png',
    deleteUrl: 'https://www.ajio.com/help/customercare',
    category: 'Shopping',
    hasPersonalInfo: true
  },
  {
    id: '47',
    name: 'Rapido',
    url: 'rapido.bike',
    logo: 'https://www.rapido.bike/assets/images/logo/rapido_logo1.png',
    deleteUrl: 'https://www.rapido.bike/contact-us',
    category: 'Transportation',
    hasPersonalInfo: true
  },
  {
    id: '48',
    name: 'IndiGo',
    url: 'goindigo.in',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/IndiGo_Airlines_logo.svg/240px-IndiGo_Airlines_logo.svg.png',
    deleteUrl: 'https://www.goindigo.in/information/contact-us.html',
    category: 'Travel',
    hasPersonalInfo: true
  },
  {
    id: '49',
    name: 'Practo',
    url: 'practo.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Practo_Logo.svg/240px-Practo_Logo.svg.png',
    deleteUrl: 'https://www.practo.com/company/contact',
    category: 'Healthcare',
    hasPersonalInfo: true
  },
  {
    id: '50',
    name: '1mg',
    url: '1mg.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/1MG_Logo.svg/240px-1MG_Logo.svg.png',
    deleteUrl: 'https://www.1mg.com/contact_us',
    category: 'Healthcare',
    hasPersonalInfo: true
  }
];

// Function to generate a large set of realistic websites
const generateMoreRealWebsites = (): AccountData[] => {
  const baseWebsites = [
    // Indian Companies
    { name: "Byju's", domain: "byjus.com", category: "Education" },
    { name: "Unacademy", domain: "unacademy.com", category: "Education" },
    { name: "Vedantu", domain: "vedantu.com", category: "Education" },
    { name: "Cult.fit", domain: "cult.fit", category: "Healthcare" },
    { name: "PolicyBazaar", domain: "policybazaar.com", category: "Finance" },
    { name: "BharatPe", domain: "bharatpe.com", category: "Finance" },
    { name: "Meesho", domain: "meesho.com", category: "Shopping" },
    { name: "Grofers", domain: "blinkit.com", category: "Shopping" },
    { name: "Blinkit", domain: "blinkit.com", category: "Shopping" },
    { name: "Zerodha", domain: "zerodha.com", category: "Finance" },
    { name: "Ixigo", domain: "ixigo.com", category: "Travel" },
    { name: "CoinDCX", domain: "coindcx.com", category: "Finance" },
    { name: "WazirX", domain: "wazirx.com", category: "Finance" },
    { name: "Pharmeasy", domain: "pharmeasy.in", category: "Healthcare" },
    { name: "CarDekho", domain: "cardekho.com", category: "Automotive" },
    { name: "Dream11", domain: "dream11.com", category: "Gaming" },
    { name: "MPL", domain: "mpl.live", category: "Gaming" },
    { name: "MyGate", domain: "mygate.com", category: "Services" },
    { name: "Dunzo", domain: "dunzo.com", category: "Services" },
    { name: "CRY", domain: "cry.org", category: "Nonprofit" },
    { name: "Faasos", domain: "faasos.io", category: "Food" },
    { name: "Netmeds", domain: "netmeds.com", category: "Healthcare" },
    { name: "Oyo", domain: "oyorooms.com", category: "Travel" },
    { name: "Cars24", domain: "cars24.com", category: "Automotive" },
    { name: "Kotak", domain: "kotak.com", category: "Finance" },
    { name: "Yes Bank", domain: "yesbank.in", category: "Finance" },
    
    // International websites popular in India
    { name: "Uber", domain: "uber.com", category: "Transportation" },
    { name: "Microsoft", domain: "microsoft.com", category: "Technology" },
    { name: "Apple", domain: "apple.com", category: "Technology" },
    { name: "Slack", domain: "slack.com", category: "Productivity" },
    { name: "Airbnb", domain: "airbnb.com", category: "Travel" },
    { name: "Google", domain: "google.com", category: "Technology" },
    { name: "Yahoo", domain: "yahoo.com", category: "Email" },
    { name: "Spotify", domain: "spotify.com", category: "Entertainment" },
    { name: "GitHub", domain: "github.com", category: "Development" },
    { name: "TikTok", domain: "tiktok.com", category: "Social" },
    { name: "Reddit", domain: "reddit.com", category: "Social" },
    { name: "Skype", domain: "skype.com", category: "Communication" },
    { name: "Expedia", domain: "expedia.com", category: "Travel" },
    { name: "Booking.com", domain: "booking.com", category: "Travel" },
    { name: "PayPal", domain: "paypal.com", category: "Finance" },
    { name: "Quora", domain: "quora.com", category: "Social" }
  ];
  
  const result: AccountData[] = [];
  let idCounter = 51;
  
  // Create variations of websites to reach 1000
  for (const site of baseWebsites) {
    result.push({
      id: idCounter.toString(),
      name: site.name,
      url: site.domain,
      logo: '', // Most will have empty logos for simplicity
      deleteUrl: `https://${site.domain}/account/delete`,
      category: site.category,
      hasPersonalInfo: Math.random() > 0.7 // About 30% have personal info
    });
    
    idCounter++;
  }
  
  // Generate more entries if needed to reach 1000
  const domains = [".in", ".co.in", ".org.in", ".net.in", ".com", ".org", ".net"];
  const serviceTypes = ["Online", "Web", "Mobile", "India", "Connect", "MyAccount", "Go", "Pro", "Plus"];
  const industries = ["Shopping", "News", "Media", "Finance", "Health", "Tech", "Store", "Education", "Service"];
  
  const indianCities = [
    "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", 
    "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", 
    "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad"
  ];
  
  while (result.length + indianWebsites.length + globalWebsites.length + additionalWebsites.length < 1000) {
    const city = indianCities[Math.floor(Math.random() * indianCities.length)];
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const serviceType = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    const name = `${city}${industry}`;
    const url = `${name.toLowerCase().replace(/\s+/g, '')}${domain}`;
    
    result.push({
      id: idCounter.toString(),
      name: name,
      url: url,
      logo: '',
      deleteUrl: `https://${url}/account/delete`,
      category: industry,
      hasPersonalInfo: Math.random() > 0.7
    });
    
    idCounter++;
  }
  
  return result;
};

// Combine all websites
const allWebsites: AccountData[] = [
  ...indianWebsites,          // Priority Indian websites (30)
  ...globalWebsites,          // Popular global websites (10)
  ...additionalWebsites,      // Additional Indian websites (10)
  ...generateMoreRealWebsites() // Additional websites to reach 1000 total
];

// Simulate a scanning process with higher priority for Indian websites
export const scanEmailAccounts = async (email: string): Promise<ScanResult> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return a random number between 30 and 150 accounts
      const numAccounts = Math.floor(Math.random() * 121) + 30; // Between 30 and 150
      
      // Ensure that Indian websites have a higher chance of being included
      let selected: AccountData[] = [];
      
      // Ensure at least 60% of results are from top Indian websites if possible
      const indianWebsitesCount = Math.min(
        Math.floor(numAccounts * 0.6), 
        indianWebsites.length
      );
      
      // Randomly select Indian websites
      const shuffledIndianWebsites = [...indianWebsites].sort(() => 0.5 - Math.random());
      selected = selected.concat(shuffledIndianWebsites.slice(0, indianWebsitesCount));
      
      // Fill the rest with other websites
      const remainingCount = numAccounts - selected.length;
      
      if (remainingCount > 0) {
        // Shuffle the global and additional websites
        const otherWebsites = [...globalWebsites, ...additionalWebsites, ...allWebsites.slice(indianWebsites.length + globalWebsites.length + additionalWebsites.length)];
        const shuffledOtherWebsites = otherWebsites.sort(() => 0.5 - Math.random());
        
        selected = selected.concat(shuffledOtherWebsites.slice(0, remainingCount));
      }
      
      // Ensure all IDs are unique by reassigning them
      selected = selected.map((website, index) => ({
        ...website,
        id: (index + 1).toString()
      }));
      
      // Final shuffle to make the results look natural
      selected = selected.sort(() => 0.5 - Math.random());
      
      // Ensure at least one has personal info
      const hasPersonalInfo = selected.some(a => a.hasPersonalInfo);
      if (!hasPersonalInfo && indianWebsites.length > 0) {
        const personalInfoAccount = indianWebsites.find(a => a.hasPersonalInfo);
        if (personalInfoAccount) {
          selected[0] = personalInfoAccount;
        }
      }
      
      resolve({
        email,
        accounts: selected,
        scannedAt: new Date(),
        totalAccounts: selected.length
      });
    }, 2500); // 2.5 seconds delay to simulate scanning
  });
};
