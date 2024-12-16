import { FC } from "react";
import Image from "../image/Image";
import "./User.scss";
interface UserInterface {
  id: string;
  name: string;
  profilePic: string;
}
interface UserProps {
  user: UserInterface;
  fromComment: Boolean;
}
const User: FC<UserProps> = ({ user, fromComment }) => {
  return (
    <div className="currentUserCommentWrapper">
      {/* <img className="currentUser" src="/assets/profileImg/1.jpg" alt="" /> */}
      <Image src={user.profilePic} className="currentUser" />
      {fromComment && (
        <div className="userInput">
          <input type="text" placeholder="Please write a comment" />
        </div>
      )}
    </div>
  );
};

export default User;
