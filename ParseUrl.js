const url = require('url');

const urlString = 'https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_3fcf51ea-7885-4651-844d-8ed209c22390_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J';
const parsedUrl = new URL(urlString);

console.log('Parsed URL:');
console.log('Protocol:', parsedUrl.protocol);
console.log('Hostname:', parsedUrl.hostname);
console.log('Path:', parsedUrl.pathname);
console.log('Query:', parsedUrl.searchParams.toString());
