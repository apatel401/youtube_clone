import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const vId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
        <iframe
          width="860"
          height="500"
          src={"https://www.youtube.com/embed/" + vId + "?autoplay=1&mute=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
        </div>
      <div className="w-full">
      <Livechat />
      </div>
        </div>
        <CommentsContainer />
        </div>
    </>
  );
};

export default WatchPage;
