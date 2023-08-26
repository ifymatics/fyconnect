import { FC } from "react";
import "./LeftBarItem.scss";
interface LeftBarItemProp {
  children: React.ReactNode;
}

const LeftBarItem: FC<LeftBarItemProp> = ({ children }) => {
  return <li className="leftBarItem">{children}</li>;
};

export default LeftBarItem;
