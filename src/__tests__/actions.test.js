import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../redux/ActionCreators';
import * as types from '../redux/ActionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { HOTEL_URL, PRICE_SGD_URL } from '../shared/variables';

describe('actions', () => {
     it('should create an action to set Currency', () => {
          const currency = 'USD';
          const expectedAction = {
               type: types.SET_CURRENCY,
               payload: { name: currency, symbol: '$' }
          }
          expect(actions.setCurrency(currency)).toEqual(expectedAction)
     })

     it('should create an action to add hotels', () => {
          const hotels = [{ id: 1 }, { id: 2 }];
          const expectedAction = {
               type: types.ADD_HOTELS,
               payload: hotels
          }
          expect(actions.addHotels(hotels)).toEqual(expectedAction)
     })

     it('should create an action to add prices', () => {
          const prices = [{ id: 1 }, { id: 2 }];
          const expectedAction = {
               type: types.ADD_PRICES,
               payload: prices
          }
          expect(actions.addPrices(prices)).toEqual(expectedAction)
     })
})

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
     afterEach(() => {
          fetchMock.restore()
     })

     it('creates ADD_HOTELS when fetching hotels has been done', () => {
          const hotels = [{ id: 1 }, { id: 2 }];

          fetchMock.getOnce(HOTEL_URL, {
               body: hotels
          })

          const expectedActions = [
               { type: types.HOTELS_LOADING },
               { type: types.ADD_HOTELS, payload: hotels }
          ]
          const store = mockStore({ hotels: [] })

          return store.dispatch(actions.fetchHotels()).then(() => {
               // return of async actions
               expect(store.getActions()).toEqual(expectedActions)
          })
     })

     it('creates ADD_PRICES when fetching prices has been done', () => {
          const prices = [{ id: 1 }, { id: 2 }];
          const currency = 'SGD';

          fetchMock.getOnce(PRICE_SGD_URL, {
               body: prices
          })

          const expectedActions = [
               { type: types.PRICES_LOADING },
               { type: types.ADD_PRICES, payload: prices }
          ]
          const store = mockStore({ prices: [] })

          return store.dispatch(actions.fetchPrices(currency)).then(() => {
               // return of async actions
               expect(store.getActions()).toEqual(expectedActions)
          })
     })
})