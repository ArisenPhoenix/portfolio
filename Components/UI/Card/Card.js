import css from "./Card.module.css";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Card_ = (props) => {
  const { theme, styles } = useSelector((state) => state.THEME);
  const { bg, text } = theme;
  const currentStyles = `${bg} ${text} ${props.className}`;
  return (
    <Card
      className={currentStyles}
      id={props.id}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.children}
    </Card>
  );
};

export default Card_;
