import "./LeftBar.scss";
// import profileImg from "./../../../public/assets/profileImg/1.jpg";
import LeftBarItem from "../leftBarItem/LeftBarItem";
import { leftBarItems } from "./../leftBarItem/leftBarItems";
import Friend, { User } from "../Friend/Friend";
import { Friends } from "../Friend/Friends";

const LeftBar = () => {
  return (
    <div className="LeftBar">
      <div className="leftBarContainer">
        <ul className="leftBarItemList">
          {leftBarItems.map((item) => (
            <LeftBarItem key={item.title}>
              <item.component className="leftBarItemIcon" />
              <span className="textSpan">{item.title}</span>
            </LeftBarItem>
          ))}
        </ul>
        <button className="leftBarButton">Show more</button>
        <hr className="leftBarHr" />
        <ul className="leftBarFriendList">
          {Friends.map((friend: User) => (
            <Friend key={friend.fullName} user={friend} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
