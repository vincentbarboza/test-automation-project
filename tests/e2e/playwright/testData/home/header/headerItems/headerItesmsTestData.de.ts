import config from "../../../../lib/config/config";
import HeaderItemsTestData from "../../../../lib/type/home/header/headerItesmsTestData";

const languageCode = config.languageCode;  
const germanLanguage = config.germanLanguage;
const englishLanguage = config.englishLanguage;

const headerItesmsTestData: HeaderItemsTestData = {
    languageCode: languageCode,
    languageName: 'Deutsch',
    availableLanguages: [germanLanguage, englishLanguage],
    optionSelectedText: '✓',
    menuItems: [
        { label: 'Electronics', url: `/${languageCode}/collection/electronics` }, 
        { label: 'Home & Garden', url: `/${languageCode}/collection/home-garden` }, 
        { label: 'Sports & Outdoor', url: `/${languageCode}/collection/sports-outdoor` }
    ],
};

export default headerItesmsTestData;