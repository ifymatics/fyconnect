import { Outlet } from "react-router-dom";

import LeftBar from "../leftBar/LeftBar";
import NavBar from "../navBar/NavBar";
import RightBar from "../rightBar/RightBar";
import "./Home.scss";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="theme-light">
      {/* <NavBar /> */}
      <Header />
      <div className="Home">
        <LeftBar />
        {/* <Content /> */}
        <Outlet></Outlet>
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
