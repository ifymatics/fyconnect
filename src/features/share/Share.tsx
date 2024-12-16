import {
  PermMedia,
  /*Label,
  Room,*/
  EmojiEmotions,
  Videocam,
} from "@mui/icons-material";
import Card from "../../components/card/Card";
import Image from "../../components/image/Image";
import "./Share.scss";

const Share = () => {
  return (
    <Card className="Share">
      <div className="shareWrapper">
        <div className="topShare">
          <Image src="assets/profileImg/1.jpg" alt="" className="topShareImg" />
          <input
            className="topShareText"
            placeholder="What's in your mind, Ifeanyi?"
          ></input>
        </div>
        <hr className="shareHr" />
        <div className="bottomShare">
          <div className="shareOptionsWrapper">
            <div className="shareOptions">
              <div className="shareOption">
                <Videocam htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Live video</span>
              </div>
              <div className="shareOption">
                <PermMedia htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Photo/Video</span>
              </div>

              <div className="shareOption feeling">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText">Feeling/Activity</span>
              </div>
            </div>
            {/* <div className="shareButtonContainer">
              <button className="shareButton">Share</button>
            </div> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Share;
