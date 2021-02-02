/*********** Currency selectors ***********/
export const getCurrencyState = (store) => store.currency;

export const getCurrencyName = (store) =>
    getCurrencyState(store) ? getCurrencyState(store).name : "";

export const getCurrencySymbol = (store) =>
    getCurrencyState(store) ? getCurrencyState(store).symbol : "";

/*********** Hotel selectors ***********/
export const getHotelsState = (store) => store.hotels.hotels;

export const getHotelById = (store, id) =>
    getHotelsState(store)
        ? getHotelsState(store).filter((hotel) => hotel.id === id)[0]
        : {};

export const getHotelByFilter = (store, filter) =>
    getHotelsState(store)
        ? getHotelsState(store).filter((hotel) => hotel.name.includes(filter.name))// && hotel.stars.includes(filter.stars))
        : {};

export const areHotelsLoading = (store) => store.hotels.isLoading;

/*********** Price selectors ***********/
export const getPricesState = (store) => store.prices.prices;

export const getPricesByHotelId = (store, id) =>
    getPricesState(store)
        ? getPricesState(store).filter((price) => price.id === id)[0]
        : {};

export const isPriceLoading = (store) => store.prices.isLoading;

/***** filter selector */
export const getFilterState = (store) => store.filter;

export const getNameFilter = (store) => store.filter.name;