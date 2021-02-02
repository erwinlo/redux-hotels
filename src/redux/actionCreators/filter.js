import * as ActionTypes from "../ActionTypes";

export const setNameFilter = (filter) => ({
    type: ActionTypes.SET_NAME_FILTER,
    payload: {
        name: filter,
    },
});

export const setStarsFilter = (filter) => ({
    type: ActionTypes.SET_STARS_FILTER,
    payload: {
        stars: filter,
    },
});

export const setMinPriceFilter = (filter) => ({
    type: ActionTypes.SET_MIN_PRICE_FILTER,
    payload: {
        minPrice: filter,
    },
});

export const setMaxPriceFilter = (filter) => ({
    type: ActionTypes.SET_MAX_PRICE_FILTER,
    payload: {
        maxPrice: filter,
    },
});

export const setMinRatingFilter = (filter) => ({
    type: ActionTypes.SET_MIN_RATING_FILTER,
    payload: {
        minRating: filter,
    },
});

export const setMaxRatingFilter = (filter) => ({
    type: ActionTypes.SET_MAX_RATING_FILTER,
    payload: {
        maxRating: filter,
    },
});
