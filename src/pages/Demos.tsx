import React, { useState } from "react";

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
    <div className="demos min-h-screen bg-red-500 flex justify-center items-center">
      <div className="text-white flex flex-col gap-10 justify-center items-center max-w-4xl px-4">
        <div className="buttons text-white flex sm:flex-row flex-wrap gap-4 py-4 px-3 font-Jost font-bold w-full justify-center items-center">
          <button
            type="button"
            className="DenialOfService px-3 py-2 w-[10rem] bg-yellow-400 text-black"
            onClick={() => changeVideo("/assets/dos_demo.mp4")}
          >
            Denial Of Service
          </button>
          <button
            type="button"
            className="Phishing px-3 py-2 w-[10rem] bg-blue-500"
            onClick={() => changeVideo("/assets/phish_demo.mp4")}
          >
            Phishing
          </button>
          <button
            type="button"
            className="Malware px-3 py-2 w-[10rem] bg-red-500"
            onClick={() => changeVideo("/assets/mal_demo.mp4")}
          >
            Malware
          </button>
        </div>
        <div className="max-w-7xl">
          <video src={selectedVideo} controls={true} />
        </div>
      </div>
    </div>
  );
};

export default Demos;
