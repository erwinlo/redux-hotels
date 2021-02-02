/*********** Hotel selectors ***********/
export const getHotelsState = (store) => store.hotels.hotels;

export const getHotelById = (store, id) =>
    getHotelsState(store)
        ? getHotelsState(store).filter((hotel) => hotel.id === id)[0]
        : {};

export const getHotelsByFilter = (store, filter) => {
    let hotels = store.hotels.hotels;
    let prices = store.prices.prices;

    if (hotels && prices) {
        if (filter.name)
            hotels = hotels.filter((hotel) =>
                hotel.name.toLowerCase().includes(filter.name.toLowerCase())
            );

        if (filter.stars)
            hotels = hotels.filter((hotel) => hotel.stars === filter.stars);

        if (filter.minRating)
            hotels = hotels.filter((hotel) => hotel.rating >= filter.minRating);

        if (filter.maxRating)
            hotels = hotels.filter((hotel) => hotel.rating <= filter.maxRating);

        if (filter.minPrice) {
            let filteredIds = [];
            for (const item in prices) {
                if (prices[item].price >= filter.minPrice)
                    filteredIds.push(prices[item].id);
            }
            hotels = hotels.filter((hotel) => filteredIds.includes(hotel.id));
        }

        if (filter.maxPrice) {
            let filteredIds = [];
            for (const item in prices) {
                if (prices[item].price <= filter.maxPrice)
                    filteredIds.push(prices[item].id);
            }
            hotels = hotels.filter((hotel) => filteredIds.includes(hotel.id));
        }
    }

    return hotels;
};

export const areHotelsLoading = (store) => store.hotels.isLoading;
