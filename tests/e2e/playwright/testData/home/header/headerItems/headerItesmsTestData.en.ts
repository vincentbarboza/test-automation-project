import HeaderItemsTestData from "../../../../lib/type/home/header/headerItesmsTestData";

const languageCode = 'en';  
const headerItesmsTestData: HeaderItemsTestData = {
    languageCode: languageCode,
    languageName: 'English',
    availableLanguages: [
        { code: 'en', name: 'English' },
        { code: 'de', name: 'Deutsch' }
    ],
    optionSelectedText: '✓',
    menuItems: [
        { label: 'Electronics', url: `/${languageCode}/collection/electronics` }, 
        { label: 'Home & Garden', url: `/${languageCode}/collection/home-garden` }, 
        { label: 'Sports & Outdoor', url: `/${languageCode}/collection/sports-outdoor` }
    ],
};

export default headerItesmsTestData;