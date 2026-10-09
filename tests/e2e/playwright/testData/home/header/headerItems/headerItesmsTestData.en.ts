import HeaderItemsTestData from "../../../../lib/type/home/header/headerItesmsTestData";

const language = 'en';  
const headerItesmsTestData: HeaderItemsTestData = {
    language: language,
    menuItems: [
        { label: 'Electronics', url: `/${language}/collection/electronics` }, 
        { label: 'Home & Garden', url: `/${language}/collection/home-garden` }, 
        { label: 'Sports & Outdoor', url: `/${language}/collection/sports-outdoor` }
    ],
};

export default headerItesmsTestData;