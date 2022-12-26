import { Search, Chat, NotificationsNone, Person } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ProfileImg from "../image/Image";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logoContainer">
        <h2 className="logo">fyconnect</h2>
      </div>
      <div className="searchContainer">
        <div className="search">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search for friend, video"
            spellCheck="false"
            autoComplete="off"
            aria-label="Search for friend, video"
          ></input>
        </div>
      </div>
      <div className="rightContainer">
        {/* <div className="timeLine">Timeline</div> */}
        <div className="rightContainerIcons">
          {/* <div className="friendRequest">
            <Badge badgeContent={1} color="error">
              <Person className="navBarIcon" />
            </Badge>

          </div> */}
          <div className="chat">
            <Badge badgeContent={1} color="error">
              <Chat className="navBarIcon" />
            </Badge>
          </div>
          <div className="notification">
            <Badge badgeContent={3} color="error">
              <NotificationsNone className="navBarIcon" />
            </Badge>
          </div>
        </div>
        <div className="rightContainerProfileContainer">
          {/* <img
            src="./assets/profileImg/1.jpg"
            alt=""
            className="rightContainerProfileImg"
          /> */}
          <ProfileImg
            src="./assets/profileImg/2.jpg"
            className="rightContainerProfileImg"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
