/*********** Price selectors ***********/
export const getPricesState = (store) => store.prices.prices;

export const getPricesByHotelId = (store, id) =>
    getPricesState(store)
        ? getPricesState(store).filter((price) => price.id === id)[0]
        : {};

export const isPriceLoading = (store) => store.prices.isLoading;