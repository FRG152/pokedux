import { getPokemonsDetails } from "../api/index.js";
import { SET_LOADING, SET_POKEMONS } from "./types.js";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonsDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetails));
    dispatch(setLoading(true));
  };
