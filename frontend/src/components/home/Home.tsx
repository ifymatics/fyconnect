import { Outlet } from "react-router-dom";
import Content from "../content/Content";

import LeftBar from "../leftBar/LeftBar";
import NavBar from "../navBar/NavBar";
import RightBar from "../rightBar/RightBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="theme-light">
      <NavBar />
      <div className="Home">
        <LeftBar />
        <Content />
        {/* <Outlet></Outlet> */}
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
