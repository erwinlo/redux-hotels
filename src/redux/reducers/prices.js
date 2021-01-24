import * as ActionTypes from '../ActionTypes';

const initialState = {
     isLoading: true,
     errMess: null,
     prices: []
};

export const prices = (state = initialState, action) => {
     switch (action.type) {
          case ActionTypes.ADD_PRICES:
            return {...state, isLoading: false, errMess: null, prices: action.payload};

        case ActionTypes.PRICES_LOADING:
            return {...state, isLoading: true, errMess: null, prices: []}

        case ActionTypes.PRICES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
     }
}