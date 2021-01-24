import * as ActionTypes from './ActionTypes';
import { HOTEL_URL, PRICE_USD_URL, PRICE_SGD_URL, PRICE_CNY_URL, PRICE_KRW_URL, CURRENCIES_SYMBOLS } from '../shared/variables';

export const addHotels = (hotels) => ({
     type: ActionTypes.ADD_HOTELS,
     payload: hotels
});

export const hotelsLoading = () => ({
     type: ActionTypes.HOTELS_LOADING
});

export const hotelsFailed = (errmess) => ({
     type: ActionTypes.HOTELS_FAILED,
     payload: errmess
});

export const fetchHotels = () => (dispatch) => {

     dispatch(hotelsLoading(true));

     return fetch(HOTEL_URL)
          .then(response => {
               if (response.ok) {
                    return response;
               } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
               }
          },
               error => {
                    var errmess = new Error(error.message);
                    throw errmess;
               })
          .then(response => response.json())
          .then(hotels => dispatch(addHotels(hotels)))
          .catch(error => dispatch(hotelsFailed(error.message)));
}

export const addPrices = (prices) => ({
     type: ActionTypes.ADD_PRICES,
     payload: prices
});

export const pricesLoading = () => ({
     type: ActionTypes.PRICES_LOADING
});

export const pricesFailed = (errmess) => ({
     type: ActionTypes.PRICES_FAILED,
     payload: errmess
});

export const fetchPrices = (currency) => (dispatch) => {

     dispatch(pricesLoading(true));

     let url = '';
     switch (currency) {
          default:
          case 'USD':
               url = PRICE_USD_URL;
               break;
          case 'SGD':
               url = PRICE_SGD_URL;
               break;
          case 'CNY':
               url = PRICE_CNY_URL;
               break;
          case 'KRW':
               url = PRICE_KRW_URL;
               break;
     }

     return fetch(url)
          .then(response => {
               if (response.ok) {
                    return response;
               } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
               }
          },
               error => {
                    var errmess = new Error(error.message);
                    throw errmess;
               })
          .then(response => response.json())
          .then(prices => dispatch(addPrices(prices)))
          .catch(error => dispatch(pricesFailed(error.message)));
}

export const setCurrency = (currency) => ({
     type: ActionTypes.SET_CURRENCY,
     payload: {
          name: currency,
          symbol: CURRENCIES_SYMBOLS[currency]
     }
});