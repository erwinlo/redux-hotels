import { combineReducers } from "redux";
import { currency } from "./currency";
import { hotels } from "./hotels";
import { prices } from "./prices";

export default combineReducers({ currency, hotels, prices });
