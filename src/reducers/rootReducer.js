import { combineReducers } from "redux";
import pokemonReducer from "../slices/pokemonSlice.js";

const rootReducer = combineReducers({
  data: pokemonReducer,
});

export default rootReducer;
