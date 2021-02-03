/*********** Currency selectors ***********/
export const getCurrencyState = (store) => store.currency;

export const getCurrencyName = (store) =>
    getCurrencyState(store) ? getCurrencyState(store).name : "";

export const getCurrencySymbol = (store) =>
    getCurrencyState(store) ? getCurrencyState(store).symbol : "";