import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  Home,
  Menu,
  Person,
  PlayCircleFilled,
  RssFeed,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import "./LeftBar.scss";
import profileImg from "./../../../public/assets/profileImg/1.jpg";

const LeftBar = () => {
  return (
    <div className="LeftBar">
      <div className="leftBarContainer">
        <ul className="leftBarItemList">
          <li className="leftBarItem">
            <Home className="leftBarItemIcon" />
            <span className="textSpan">Home</span>
          </li>
          <li className="leftBarItem">
            <Menu className="leftBarItemIcon" />
            <span className="textSpan">Menu</span>
          </li>
          <li className="leftBarItem">
            <RssFeed className="leftBarItemIcon" />
            <span className="textSpan">Feeds</span>
          </li>
          <li className="leftBarItem">
            <Chat className="leftBarItemIcon" />
            <span className="textSpan">Chats</span>
          </li>
          <li className="leftBarItem">
            <Group className="leftBarItemIcon" />
            <span className="textSpan">Groups</span>
          </li>
          <li className="leftBarItem">
            <Bookmark className="leftBarItemIcon" />
            <span className="textSpan">Bookmarks</span>
          </li>
          <li className="leftBarItem">
            <HelpOutline className="leftBarItemIcon" />
            <span className="textSpan">Questions</span>
          </li>
          <li className="leftBarItem">
            <WorkOutline className="leftBarItemIcon" />
            <span className="textSpan">Jobs</span>
          </li>
          <li className="leftBarItem">
            <PlayCircleFilled className="leftBarItemIcon" />
            <span className="textSpan">Videos</span>
          </li>
          <li className="leftBarItem">
            <Event className="leftBarItemIcon" />
            <span className="textSpan">Events</span>
          </li>
          <li className="leftBarItem">
            <School className="leftBarItemIcon" />
            <span className="textSpan">Courses</span>
          </li>
        </ul>
        <button className="leftBarButton">Show more</button>
        <hr className="leftBarHr" />
        <ul className="leftBarFriendList">
          <li className="leftBarFriend">
            {/* <img src="" alt="" className="leftBarFriendImage" /> */}
            <Person className="leftBarItemIcon" />
            <span className="leftBarFriendName">Jahbuikem Okorie</span>
          </li>
          <li className="leftBarFriend">
            {/* <img src="" alt="" className="leftBarFriendImage" /> */}
            <Person className="leftBarItemIcon" />
            <span className="leftBarFriendName">Jahbuikem Okorie</span>
          </li>
          <li className="leftBarFriend">
            {/* <img src="" alt="" className="leftBarFriendImage" /> */}
            <Person className="leftBarItemIcon" />
            <span className="leftBarFriendName">Jahbuikem Okorie</span>
          </li>
          <li className="leftBarFriend">
            <img
              src="./assets/profileImg/1.jpg"
              alt="profile"
              className="leftBarFriendImage"
            />
            {/* <Person className="leftBarItemIcon" /> */}
            <span className="leftBarFriendName">Jahbuikem Okorie</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
