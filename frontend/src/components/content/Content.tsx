import Post from "../post/Post";
import Share from "../share/Share";
import StoriesLayout from "../storiesLayout/StoriesLayout";
import "./Content.scss";
const posts = [
  {
    id: 1,
    title: "Nice environment",
    user: "Johnson Doe",
    date: "9 mins ago",
    image: "/assets/postImg/post1.jpg",
    comments: [
      {
        user: {
          id: "6",
          name: "John Doe",
          profilePic: "/assets/profileImg/2.jpg",
        },
        comment: "This is a good news!",
      },

      {
        user: {
          id: "10",
          name: "Sabaston Bayero",
          profilePic: "/assets/storyProfileImg/story1.jpg",
        },
        comment: "I am happy for you sir. Keep the good work.",
      },
    ],
    likes: 0,
  },
  {
    id: 2,
    title: "Meet and greet",
    user: "Ifeanyi Okorie",
    date: "18 mins ago",
    image: "/assets/postImg/post2.jpg",
    comments: [],
    likes: 0,
  },
];

const Content = () => {
  console.log(crypto.randomUUID());
  return (
    <div className="Content">
      <div className="contentWrapper">
        <StoriesLayout />
        <Share />

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Content;
