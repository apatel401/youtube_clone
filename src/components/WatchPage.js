import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const vId = searchParams.get("v")
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      <iframe
        width="640"
        height="380"
        src={"https://www.youtube.com/embed/" + vId + "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoPlay
      ></iframe>
    </div>
  );
};

export default WatchPage;
