/***** filter selector */
export const getFilterState = (store) => store.filter;

export const getNameFilter = (store) => store.filter.name;

export const getStarsFilter = (store) => store.filter.stars;

export const getMinPriceFilter = (store) => store.filter.minPrice;

export const getMaxPriceFilter = (store) => store.filter.maxPrice;

export const getMinRatingFilter = (store) => store.filter.minRating;

export const getMaxRatingFilter = (store) => store.filter.maxRating;