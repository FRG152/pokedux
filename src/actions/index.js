import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
  types: SET_POKEMONS,
  payload,
});
