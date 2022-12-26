import {
  ChatBubbleOutline,
  Favorite,
  MoreHoriz,
  Share,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { FC, useState } from "react";
import Comments from "../comments/Comments";
import Image from "../image/Image";
import Card from "./../card/Card";
import "./Post.scss";

type UserType = {
  id: string;
  name: string;
  profilePic: string;
};
type CommentType = {
  user: UserType;
  comment: string;
};

type PostProp = {
  image?: string;
  title: string;
  date: string;
  user: string;
  likes: number;
  comments: CommentType[];
};
interface PostProps {
  post: PostProp;
}
const Post: FC<PostProps> = ({ post }) => {
  const [commentsIsOpen, setCommentsIsOpen] = useState(false);
  const handleCommentsClick = () => {
    setCommentsIsOpen((previousClick) => !previousClick);
  };
  return (
    <Card className="Post">
      <div className="postWrapper">
        <div className="topPost">
          <div className="topPostLeft">
            <Image src="/assets/postImg/1.jpg" className="postProfileImg" />
            <div className="postUserNameContainer">
              <span className="postUsername">
                <strong> {post.user}</strong>
              </span>
              <span className="postDate">{post.date}</span>
            </div>
          </div>
          <div className="topPostRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="centerPost">
          <span className="centerPostTitle">{post.title}</span>
          <img src={post.image} alt="" className="centerPostImg" />
        </div>
        <div className="bottomPost">
          <div className="bottomPostLeft">
            <div className="postLike">
              <ThumbUpAlt className="postIcon" />
            </div>
            <div className="postLove">
              <Favorite className="postIcon" />
            </div>
            <div className="postLikeCount">{post.likes} people like it</div>
          </div>
          <div className="bottomPostRight" onClick={handleCommentsClick}>
            <div className="postComment">{post.comments.length} comments</div>
          </div>
        </div>
        <hr className="commentsHr" />
        <div className="commentShare">
          <div className="likeWrapper">
            <ThumbUpOffAlt />
            <span className="like">Like</span>
          </div>

          <div className="commentWrapper">
            <ChatBubbleOutline />
            <span className="comment">Comment</span>
          </div>
          <div className="shareWrapper">
            <Share />
            <span className="share">Share</span>
          </div>
        </div>
        {commentsIsOpen && post.comments.length && (
          <div>
            <hr className="commentsHr" />
            <Comments comments={post.comments} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Post;
