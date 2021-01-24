import * as ActionTypes from '../ActionTypes';

const initialState = {
     name: 'USD',
     symbol: '$'
};

export const currency = (state = initialState, action) => {
     switch (action.type) {
          case ActionTypes.SET_CURRENCY:
               const { name, symbol } = action.payload;
               return {
                    ...state,
                    name,
                    symbol
               };

          default:
               return state;
     }
}