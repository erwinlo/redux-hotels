import * as ActionTypes from "../ActionTypes";

const initialState = {
    name: null,
    stars: null,
    price: null,
    rating: null,
};

export const filter = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_NAME_FILTER:
            const { name } = action.payload;
            return {
                ...state,
                name,
            };

        case ActionTypes.SET_STARS_FILTER:
            const { stars } = action.payload;
            return {
                ...state,
                stars,
            };

        case ActionTypes.SET_PRICE_FILTER:
            const { price } = action.payload;
            return {
                ...state,
                price,
            };

        case ActionTypes.SET_RATING_FILTER:
            const { rating } = action.payload;
            return {
                ...state,
                rating,
            };

        default:
            return state;
    }
};
