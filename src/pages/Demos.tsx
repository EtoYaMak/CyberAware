import { useState } from "react";
import "./pages.css";

//Three videos to switch as video src
//dos_demo.mp4 for Denial of Service onClick
//mal_demo.mp4 for Malware onClick
//phish_demo.mp4 for Phishing onClick
const Demos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>(
    "/assets/dos_demo.mp4"
  );

  const changeVideo = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="section-title">
          Security Demonstrations
        </h1>

        <div className="demos-container">
          <div className="buttons-container">
            <button
              type="button"
              className="demo-button bg-yellow-400 text-black hover:bg-yellow-500"
              onClick={() => changeVideo("/assets/dos_demo.mp4")}
            >
              Denial Of Service
            </button>
            <button
              type="button"
              className="demo-button bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => changeVideo("/assets/phish_demo.mp4")}
            >
              Phishing
            </button>
            <button
              type="button"
              className="demo-button bg-red-500 text-white hover:bg-red-600"
              onClick={() => changeVideo("/assets/mal_demo.mp4")}
            >
              Malware
            </button>
          </div>
          <div className="video-container">
            <video src={selectedVideo} controls={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
