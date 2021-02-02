import * as ActionTypes from "../ActionTypes";

const initialState = {
    name: '',
    stars: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    maxRating: '',
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

        case ActionTypes.SET_MIN_PRICE_FILTER:
            const { minPrice } = action.payload;
            return {
                ...state,
                minPrice,
            };

        case ActionTypes.SET_MAX_PRICE_FILTER:
            const { maxPrice } = action.payload;
            return {
                ...state,
                maxPrice,
            };

        case ActionTypes.SET_MIN_RATING_FILTER:
            const { minRating } = action.payload;
            return {
                ...state,
                minRating,
            };

        case ActionTypes.SET_MAX_RATING_FILTER:
            const { maxRating } = action.payload;
            return {
                ...state,
                maxRating,
            };

        default:
            return state;
    }
};
