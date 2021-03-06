import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import koLang from './entries/ko-KO';

const AppLocale = {
    en: enLang,
    ko: koLang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.ko.data);
export default AppLocale;
