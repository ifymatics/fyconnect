import { AutoStories, VideoCall, VideoLibrary } from "@mui/icons-material";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../card/Card";
import Reels from "../../features/reels/Reels";
import Rooms from "../../features/rooms/Rooms";

import Stories from "../../features/stories/Stories";

import "./StoriesLayout.scss";

const StoriesLayout: FC = () => {
  const [isActive, setIsActive] = useState({
    stories: "active",
    reels: "",
    rooms: "",
  });
  const [activeLink, setActiveLink] = useState("stories");

  const handleClick = (link: string) => {
    if (link === "rooms") {
      setIsActive({ stories: "", reels: "", rooms: "active" });
    } else if (link === "reels") {
      setIsActive({ stories: "", reels: "active", rooms: "" });
    } else {
      setIsActive({ stories: "active", reels: "", rooms: "" });
    }
  };
  return (
    <Card
      className="StoriesLayout"
      // style={{ padding: "1rem  0", borderRadius: "10px" }}
    >
      <div className="topContainer">
        <span
          className={`stories ${isActive.stories}`}
          onClick={() => handleClick("stories")}
        >
          <AutoStories className="storiesIcon" />
          <span className="text">Stories</span>
        </span>
        <span
          className={`reels ${isActive.reels}`}
          onClick={() => handleClick("reels")}
        >
          <VideoLibrary className="storiesIcon" />
          <span className="text">Reels</span>
        </span>
        <span
          className={`rooms ${isActive.rooms}`}
          onClick={() => handleClick("rooms")}
        >
          <VideoCall className="storiesIcon" />
          <span className="text">Rooms</span>
        </span>
      </div>

      <div className="downContainer">
        {isActive.stories && <Stories />}
        {isActive.reels && <Reels />}
        {isActive.rooms && <Rooms />}
      </div>
    </Card>
  );
};

export default StoriesLayout;
