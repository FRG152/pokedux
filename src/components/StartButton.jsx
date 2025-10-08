import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StartButton = ({ isFavorite, onClick }) => {
  return (
    <Button
      onClick={onClick}
      icon={isFavorite ? <StarFilled /> : <StarOutlined />}
    />
  );
};

export default StartButton;
