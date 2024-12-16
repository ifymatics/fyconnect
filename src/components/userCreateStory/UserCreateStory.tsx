import { Add } from "@mui/icons-material";
import { FC } from "react";
import Card from "../card/Card";
import "./UserCreateStory.scss";

interface UserCreateStoryProps {
  user: { id: string; name: string; profilePic: string };
  style: any;
}
const UserCreateStory: FC<UserCreateStoryProps> = ({ user, style }) => {
  return (
    <div className="UserCreateStory" style={style}>
      <div className="profilePicWrapper">
        <img src={user.profilePic} alt="" />
      </div>
      <Card className="createStory">
        <span>Create Story</span>
      </Card>
      <Card className="createButton">
        <Add className="addIcon" />
      </Card>
    </div>
  );
};

export default UserCreateStory;
