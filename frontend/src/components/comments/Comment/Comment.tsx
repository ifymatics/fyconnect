import { FC } from "react";

import "./Comment.scss";
interface UserProps {
  id: string;
  name: string;
  profilePic: string;
}
interface CommentProps {
  currentUser: UserProps;
  commentData: {
    user: UserProps;
    comment: string;
  };
}
const Comment: FC<CommentProps> = ({ currentUser, commentData }) => {
  return (
    <>
      <div className="commentor">
        <div className="commentorWrapper">
          <img
            src={commentData.user.profilePic}
            alt=""
            className="userCommentImg"
          />
          <div className="userComment">
            I was in the school when it happened.
          </div>
        </div>
        <div className="likeAndReply">
          <span className="like">Like</span>
          <span className="reply">Reply</span>
        </div>
      </div>
    </>
  );
};

export default Comment;
