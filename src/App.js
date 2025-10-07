import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src="/logo.svg" alt="Podedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={Array.from({ length: 5 }, (_, i) => i)} />
    </div>
  );
}

export default App;
