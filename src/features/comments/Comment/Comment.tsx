import { FC } from "react";

import "./Comment.scss";
interface UserProps {
  id: string;
  name: string;
  profilePic: string;
}
interface CommentProps {
  commentData: {
    user: UserProps;
    comment: string;
  };
}
const Comment: FC<CommentProps> = ({ commentData }) => {
  return (
    <>
      <div className="commentor">
        <div className="commentorWrapper">
          <img
            src={commentData.user.profilePic}
            alt=""
            className="userCommentImg"
          />
          <div className="userComment">{commentData.comment}</div>
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
