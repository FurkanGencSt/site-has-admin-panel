import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
const YouTubeVideo = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const usefulWidth = (width * 80) / 100;
  const usefulHeight = usefulWidth / 1.77;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const opts = {
    height: usefulHeight,
    width: usefulWidth,
    playerVars: {
      autoplay: 0,
    },
  };
  function _onReady(event) {
    event.target.pauseVideo();
  }
  return (
    <div className="w-full flex flex-col items-center gap-4 justify-center mt-5 mb-5  ">
      <YouTube
        className="border-8 border-black"
        videoId="d-hyH_jOkN0"
        opts={opts}
        onReady={_onReady}
      />{" "}
      <YouTube
        className="border-8 border-black"
        videoId="qVuIK9KMBDQ"
        opts={opts}
        onReady={_onReady}
      />{" "}
      <YouTube
        className="border-8 border-black"
        videoId="jviA_7dKsDs"
        opts={opts}
        onReady={_onReady}
      />
    </div>
  );
};

export default YouTubeVideo;
