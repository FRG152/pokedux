import Meta from "antd/es/card/Meta";
import StartButton from "./StartButton";
import { Button, Card, Space } from "antd";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ id, name, image, abilities }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={true} onClick={handleOnFavorite} />}
    >
      <Meta description="Fire, Magic" />
      <Space wrap style={{ marginTop: 10 }}>
        {abilities.length > 0 &&
          abilities.map((item) => <Button>{item.ability.name}</Button>)}
      </Space>
    </Card>
  );
};

export default PokemonCard;
