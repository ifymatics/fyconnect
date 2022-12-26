import { FC } from "react";
import "./Card.scss";
interface CardProp {
  className?: string;
  children: any;
  style?: any;
}
const Card: FC<CardProp> = (props) => {
  const classNames = [props.className, "Card"];
  return (
    <div className={classNames.join(" ")} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
