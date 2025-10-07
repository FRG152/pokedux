import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = () => {
  return (
    <Card
      title="Pikachu"
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Pikachu"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="Fire, Magic" />
    </Card>
  );
};

export default PokemonCard;
