import { currency } from '../redux/reducers/currency';
import { hotels } from '../redux/reducers/hotels';
import { prices } from '../redux/reducers/prices';
import * as types from '../redux/ActionTypes';

describe('currency reducer', () => {
     it('should return the initial state', () => {
          expect(currency(undefined, {})).toEqual(
               {
                    name: 'USD',
                    symbol: '$'
               }
          )
     })

     const payload = { name: 'SGD', symbol: 'S$' }
     it('should handle SET_CURRENCY', () => {
          expect(
               currency({}, {
                    type: types.SET_CURRENCY,
                    payload
               })
          ).toEqual(payload)
     })
})

describe('hotels reducer', () => {
     it('should return the initial state', () => {
          expect(hotels(undefined, {})).toEqual(
               {
                    isLoading: true,
                    errMess: null,
                    hotels: []
               }
          )
     })

     const payload = [{ id: 1 }, { id: 2 }];
     it('should handle ADD_HOTELS', () => {
          expect(hotels([], {
               type: types.ADD_HOTELS,
               payload
          })).toEqual({
               isLoading: false,
               errMess: null,
               hotels: payload
          })
     })

     it('should handle HOTELS_LOADING', () => {
          expect(hotels([], {
               type: types.HOTELS_LOADING
          })).toEqual({
               isLoading: true,
               errMess: null,
               hotels: []
          })
     })
})

describe('prices reducer', () => {
     it('should return the initial state', () => {
          expect(prices(undefined, {})).toEqual(
               {
                    isLoading: true,
                    errMess: null,
                    prices: []
               }
          )
     })

     const payload = [{ id: 1 }, { id: 2 }];
     it('should handle ADD_PRICES', () => {
          expect(prices([], {
               type: types.ADD_PRICES,
               payload
          })).toEqual({
               isLoading: false,
               errMess: null,
               prices: payload
          })
     })

     it('should handle PRICES_LOADING', () => {
          expect(prices([], {
               type: types.PRICES_LOADING
          })).toEqual({
               isLoading: true,
               errMess: null,
               prices: []
          })
     })
})