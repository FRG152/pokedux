import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { useEffect, useState } from "react";
import { getPokemons } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemos = async () => {
      const results = await getPokemons();
      setPokemons(results);
    };
    fetchPokemos();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src="/logo.svg" alt="Podedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
