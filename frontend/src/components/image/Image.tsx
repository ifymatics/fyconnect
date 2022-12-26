import { FC } from "react";
import "./Image.scss";

interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  style?: any;
  onClick?: () => {};
}
const Image: FC<ImageProps> = (props) => {
  const classNames = [props.className, "Image"];

  return (
    <img
      className={classNames.join(" ")}
      src={props.src}
      alt={props.alt ? props.alt : ""}
      onClick={props.onClick}
    />
  );
};

export default Image;
