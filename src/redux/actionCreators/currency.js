import * as ActionTypes from '../ActionTypes';
import { CURRENCIES_SYMBOLS } from '../../shared/variables';

export const setCurrency = (currency) => ({
     type: ActionTypes.SET_CURRENCY,
     payload: {
          name: currency,
          symbol: CURRENCIES_SYMBOLS[currency]
     }
});