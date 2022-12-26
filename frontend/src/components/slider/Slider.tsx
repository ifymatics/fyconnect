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
const Slider: FC<SliderProps> = ({ position, className, onClick }) => {
  //console.log(position, className);
  const handleSliderClick = (position: string) => {
    console.log(className, "sliderComponent");
    if (onClick) onClick(position);
  };

  const left = {
    position: "absolute",
    top: 0,
    bottom: 0,
    // left: "30px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "white",
    cursor: "pointer",
  };

  return (
    <>
      {position === "left" && (
        <div className="SliderLeft" onClick={() => handleSliderClick(position)}>
          <ArrowBackIosOutlined />
        </div>
      )}
      {position === "right" && (
        <div
          className="SliderRight"
          onClick={() => handleSliderClick(position)}
        >
          <ArrowForwardIosOutlined />
        </div>
      )}
    </>
  );
};

export default Slider;
