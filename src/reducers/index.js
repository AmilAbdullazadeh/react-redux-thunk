import petCounter from "./petCounter";
import petFavorite from "./petFavorite";
import users from "./users";
import { combineReducers } from "redux";

const reducers = combineReducers({
  petCounter,
  petFavorite,
  users,
});

export default reducers;
