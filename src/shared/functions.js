import { CURRENCIES_SYMBOLS } from './variables';

export const formatNumber = (currency, number) => {
     // round number based on currency
     let roundedNumber = ['KRW', 'JPY', 'IDR'].includes(currency)
          ? Math.round(number / 100) * 100
          : Math.round(number)

     // add thousand separators
     let regexp = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
     return roundedNumber.toString().replace(regexp, ',');

}

export const formatCurrency = (currency, value, round = true) => {
     return CURRENCIES_SYMBOLS[currency] + ' ' +
          (round ? formatNumber(currency, value) : value);
}