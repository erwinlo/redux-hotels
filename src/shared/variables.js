const baseUrl = 'https://5df9cc6ce9f79e0014b6b3dc.mockapi.io';
const type = 'hotels';
const city = 'tokyo';
export const HOTEL_URL = baseUrl + '/' + type + '/' + city;
export const PRICE_USD_URL = HOTEL_URL + '/1/USD';
export const PRICE_SGD_URL = HOTEL_URL + '/1/SGD';
export const PRICE_CNY_URL = HOTEL_URL + '/1/CNY';
export const PRICE_KRW_URL = HOTEL_URL + '/1/KRW';
export const CURRENCIES = ['USD', 'SGD', 'CNY', 'KRW'];
export const CURRENCIES_SYMBOLS = {
     USD: '$',
     SGD: 'S$',
     CNY: '¥',
     KRW: '₩'
};
export const DISPLAY_LIMIT = 4;