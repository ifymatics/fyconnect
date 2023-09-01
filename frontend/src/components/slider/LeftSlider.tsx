import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { FC } from "react";
import "./Slider.scss";
interface SliderProps {
  position: string;
  className: string;
  onClick?: (data: string) => void;
}
const LeftSlider: FC<SliderProps> = ({ position, className, onClick }) => {
  const handleSliderClick = (position: string) => {
    // console.log(className, "sliderComponent");
    if (onClick) onClick(position);
  };
  return (
    <div className="SliderLeft" onClick={() => handleSliderClick(position)}>
      {/* <ArrowForwardIosOutlined /> */}
      <ArrowBackIosOutlined />
    </div>
  );
};

export default LeftSlider;
