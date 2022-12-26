import { FC } from "react";
import User from "../user/User";
import Comment from "./Comment/Comment";
import "./Comments.scss";
const currentUser = {
  id: "1",
  name: "Okorie Ifeanyi",
  profilePic: "/assets/profileImg/1.jpg",
};

interface CommentsProps {
  comments: any[];
}
const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="CommentsWrapper">
      <div className="inputWrapper">
        <User user={currentUser} fromComment={true} />
      </div>
      <div className="Comments">
        <Comment currentUser={currentUser} commentData={comments[0]} />
        <Comment currentUser={currentUser} commentData={comments[1]} />
      </div>
    </div>
  );
};

export default Comments;
