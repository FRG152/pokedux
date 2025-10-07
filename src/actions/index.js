import { SET_POKEMONS } from "./types.js";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
