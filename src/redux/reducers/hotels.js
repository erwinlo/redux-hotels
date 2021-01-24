import * as ActionTypes from '../ActionTypes';

const initialState = {
     isLoading: true,
     errMess: null,
     hotels: []
};

export const hotels = (state = initialState, action) => {
     switch (action.type) {
          case ActionTypes.ADD_HOTELS:
               return { ...state, isLoading: false, errMess: null, hotels: action.payload };

          case ActionTypes.HOTELS_LOADING:
               return { ...state, isLoading: true, errMess: null, hotels: [] }

          case ActionTypes.HOTELS_FAILED:
               return { ...state, isLoading: false, errMess: action.payload };

          default:
               return state;
     }
}