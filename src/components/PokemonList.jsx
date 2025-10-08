import "./PokemonList.css";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          id={pokemon.id}
          key={pokemon.name}
          name={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.sprites.front_default}
        />
      ))}
    </div>
  );
};

export default PokemonList;
