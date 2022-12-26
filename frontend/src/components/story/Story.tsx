import { FC, useLayoutEffect, useRef, useState } from "react";
import Image from "../image/Image";
import "./Story.scss";
type StoryData = {
  img: string;
  user: { pic: string; name: string };
};
type StoryProps = {
  story: StoryData;
  index: number;
  style: any;
  handleClick: (e: StoryData) => any;
};
const Story: FC<StoryProps> = ({ story, handleClick, index, style }) => {
  const storiesDiv = useRef<any>(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setHeight(storiesDiv.current.clientHeight);
    setWidth(storiesDiv?.current.clientWidth);
  }, []);
  const onClick = () => {
    handleClick(story);
  };

  return (
    <div className="Story" onClick={onClick} style={style} ref={storiesDiv}>
      <div className="StoryWrapper">
        <img src={story.img} alt="" style={{ width: "100%" }} />
        <Image src={story.user.pic} className="storyProfile" />
        <span className="name">{story.user.name}</span>
      </div>
    </div>
  );
};

export default Story;
