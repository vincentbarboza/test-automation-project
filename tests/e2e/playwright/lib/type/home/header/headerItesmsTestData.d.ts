import AvailableLanguage from '../../availableLanguage/availableLanguage';

export default interface HeaderItemsTestData {
    languageCode: string;
    languageName: string;
    optionSelectedText: string;
    availableLanguages: AvailableLanguage[];
    menuItems: { label: string; url: string }[];
}