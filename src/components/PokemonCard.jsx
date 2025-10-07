import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";

const PokemonCard = ({ name, image, abilities }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
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
