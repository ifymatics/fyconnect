import { Link } from "react-router-dom";
import "./Header.scss";
import { Logo, Search } from "../../svg";

const Header = () => {
  const color = "#65676b";
  return (
    <header>
      <div className="left_header">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search">
          <Search color={color} />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hide_input"
          />
        </div>
      </div>
      <div className="middle_header"></div>
      <div className="right_header"></div>
    </header>
  );
};

export default Header;
