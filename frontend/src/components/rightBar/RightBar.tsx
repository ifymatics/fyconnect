import { PersonAdd } from "@mui/icons-material";
import Card from "../card/Card";
import ProfileImg from "../image/Image";
import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="RightBar">
      <div className="rightBarContainer">
        <Card className="itemList">
          {/* <div className="item"> */}
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <ProfileImg src="/assets/profileImg/2.jpg" />
              <span className="userName">Ifeanyi Okorie</span>
            </div>
            <div className="button">
              <button>
                Add
                <PersonAdd className="addIcon" />
              </button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />
              <span className="userName">Ifeanyi Okorie</span>
            </div>
            <div className="button">
              <button>
                Add
                <PersonAdd className="addIcon" />
              </button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />
              <span className="userName">Ifeanyi Okorie</span>
            </div>
            <div className="button">
              <button>
                {" "}
                Add
                <PersonAdd className="addIcon" />
              </button>
              <button>Remove</button>
            </div>
          </div>
          {/* </div> */}
        </Card>
        <Card className="itemList">
          {/* <div className="item"> */}
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />
              <p>
                <span className="userName">Ifeanyi Okorie</span>
                <span className="text">changed his cover picture</span>
              </p>
            </div>
            <div className="button">
              <span>9 mins ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />
              <p>
                <span className="userName">Ifeanyi Okorie</span>{" "}
                <span className="text">liked your picture</span>
              </p>
            </div>
            <div className="button">
              <span>3 mins ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />
              <p>
                <span className="userName">Ifeanyi Okorie</span>
                <span className="text">accepted your friend request</span>
              </p>
            </div>
            <div className="button">
              <span>1 min ago</span>
            </div>
          </div>
          {/* </div> */}
        </Card>
        <Card className="itemList">
          {/* <div className="item"> */}
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />

              <div className="online"></div>
              <span className="userName">Ifeanyi Okorie</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />

              <div className="online"></div>
              <span className="userName">Ifeanyi Okorie</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />

              <div className="online"></div>
              <span className="userName">Ifeanyi Okorie</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />

              <div className="online"></div>
              <span className="userName">Ifeanyi Okorie</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assets/profileImg/2.jpg" alt="" />

              <div className="online"></div>
              <span className="userName">Ifeanyi Okorie</span>
            </div>
          </div>
          {/* </div> */}
        </Card>
      </div>
    </div>
  );
};

export default RightBar;
