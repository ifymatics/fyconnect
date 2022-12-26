import { FC, useLayoutEffect, useRef, useState } from "react";
import LeftSlider from "../slider/LeftSlider";
import RightSlider from "../slider/RightSlider";
import Story from "../story/Story";
import UserCreateStory from "../userCreateStory/UserCreateStory";
import "./Stories.scss";
const stories = [
  {
    id: "1",
    img: "/assets/postImg/post1.jpg",
    user: {
      pic: "/assets/profileImg/2.jpg",
      name: "Ifeanyi Okorie",
      id: "1",
    },
  },
  {
    id: "2",
    img: "/assets/postImg/post1.jpg",
    user: {
      pic: "/assets/storyProfileImg/story2.jpg",
      name: "Ifeanyi Okorie",
      id: "2",
    },
  },
  {
    id: "3",
    img: "/assets/postImg/post1.jpg",
    user: {
      pic: "assets/storyProfileImg/story3.jpg",
      name: "Ifeanyi Okorie",
      id: "3",
    },
  },
  {
    id: "4",
    img: "/assets/postImg/post1.jpg",
    user: {
      pic: "/assets/profileImg/1.jpg",
      name: "Ifeanyi Okorie",
      id: "4",
    },
  },
  {
    id: "5",
    img: "/assets/profileImg/2.jpg",
    user: {
      pic: "/assets/profileImg/2.jpg",
      name: "Ifeanyi Jahbuikem",
      id: "5",
    },
  },
  {
    id: "6",
    img: "/assets/postImg/post1.jpg",
    user: {
      pic: "/assets/profileImg/1.jpg",
      name: "Ifeanyi Okorie",
      id: "6",
    },
  },
  {
    id: "7",
    img: "/assets/storyProfileImg/story2.jpg",
    user: {
      pic: "/assets/profileImg/2.jpg",
      name: "Ifeanyi Jahbuikem",
      id: "7",
    },
  },
  {
    id: "8",
    img: "/assets/storyProfileImg/story2.jpg",
    user: {
      pic: "/assets/profileImg/2.jpg",
      name: "Ifeanyi Jahbuikem",
      id: "8",
    },
  },
  {
    id: "9",
    img: "/assets/storyProfileImg/story2.jpg",
    user: {
      pic: "/assets/profileImg/2.jpg",
      name: "Ifeanyi Jahbuikem",
      id: "9",
    },
  },
  {
    id: "10",
    img: "/assets/storyProfileImg/story2.jpg",
    user: {
      pic: "/assets/profileImg/2.jpg",
      name: "Ifeanyi Jahbuikem",
      id: "10",
    },
  },
];
const currentUser = {
  id: "10",

  profilePic: "/assets/profileImg/2.jpg",
  name: "Ifeanyi Jahbuikem",
};
interface StoryInterface {
  id: string;
  img: string;
  user: { pic: string; name: string; id: string };
}
interface StoriesProps {
  stories: StoryInterface[];
}
const Stories: FC = () => {
  const [slideIndex, setSlides] = useState(0);
  const [count, setCount] = useState(1);
  const [visiblePix, setVisiblePix] = useState(120 * 3);

  const onClickStory = (story: any) => {
    console.log(story);
  };
  //right:44px;transform:translate(calc(50% + 4px), -50%)
  const s = {
    transform: `translateX(${slideIndex * -visiblePix}px)`,
    transitionDuration: ".5s",
  };

  const handleClick = (position: string) => {
    if (position === "left") {
      setSlides((prev) => (prev > 0 ? prev - 1 : prev + 1));
    } else {
      setSlides((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
      if (count < Math.trunc(stories.length / 3)) {
        setCount((prev) => prev + 1);
      } else if (count === Math.trunc(stories.length / 3)) {
        setVisiblePix((stories.length % 3) * 131);
        setSlides((prev) =>
          prev < stories.length - 1 ? prev + 1 : stories.length - 1
        );
      }
    }
  };

  return (
    <>
      {slideIndex > 0 && (
        <LeftSlider className="left" position="left" onClick={handleClick} />
      )}
      <div className="storiesWrapper">
        <UserCreateStory style={s} user={currentUser} />
        {stories.map((story, i) => (
          <Story
            key={story.id}
            story={story}
            handleClick={onClickStory}
            index={i}
            style={s}
          />
        ))}
      </div>

      {slideIndex < stories.length - 1 && (
        <RightSlider className="right" position="right" onClick={handleClick} />
      )}
    </>
  );
};

export default Stories;
