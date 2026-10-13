import HeaderItemsTestData from "../../../../lib/type/home/header/headerItesmsTestData";

const languageCode = 'de';  
const headerItesmsTestData: HeaderItemsTestData = {
    languageCode: languageCode,
    languageName: 'Deutsch',
    availableLanguages: [
        { code: 'de', name: 'Deutsch' },
        { code: 'en', name: 'English' },
    ],
    optionSelectedText: '✓',
    menuItems: [
        { label: 'Electronics', url: `/${languageCode}/collection/electronics` }, 
        { label: 'Home & Garden', url: `/${languageCode}/collection/home-garden` }, 
        { label: 'Sports & Outdoor', url: `/${languageCode}/collection/sports-outdoor` }
    ],
};

export default headerItesmsTestData;