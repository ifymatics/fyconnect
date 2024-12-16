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
const RightSlider: FC<SliderProps> = ({ position, className, onClick }) => {
  const handleSliderClick = (position: string) => {
    //console.log(className, "sliderComponent");
    if (onClick) onClick(position);
  };
  return (
    <div className="SliderRight" onClick={() => handleSliderClick(position)}>
      {/* <ArrowBackIosOutlined /> */}
      <ArrowForwardIosOutlined />
    </div>
  );
};

export default RightSlider;
