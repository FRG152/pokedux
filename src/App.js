import { Col } from "antd";
import "./App.css";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={Array.from({ length: 5 }, (_, i) => i)} />
    </div>
  );
}

export default App;
