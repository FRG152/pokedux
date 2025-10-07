import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { useEffect } from "react";
import { getPokemons } from "./api";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemos = async () => {
      const result = await getPokemons();
      dispatch(setPokemons(result));
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
