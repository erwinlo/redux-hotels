import { combineReducers } from "redux";
import { currency } from "./currency";
import { hotels } from "./hotels";
import { prices } from "./prices";
import { filter } from './filter';

export default combineReducers({ currency, hotels, prices, filter });
