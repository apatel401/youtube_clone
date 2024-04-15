import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  // console.log(thumbnails.medium)
  const viewCountDecimals = (vc) => {
    if (vc?.length <= 3) return vc / 1;
    if (vc?.length >= 4 && vc?.length < 7)
      return parseFloat(vc / 1000).toFixed(1) + "K";
    if (vc?.length >= 7 && vc?.length <= 10)
      return parseFloat(vc / 1000000).toFixed(1) * 1 + "M";
    if (vc?.length > 10)
      return parseFloat(vc / 1000000).toFixed(1) * 1 + "B";
  };
  const trimTitle = (title) => {
    if (title.length < 50) return title;
    return title.slice(0, 49) + "...";
  };
  return (
    <div className="my-4 w-60 min-h-[250px]">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={title} />
      <ul>
        <li className="font-semibold text-sm py-1 min-h-[3rem]">
          {title && trimTitle(title)}
        </li>
        <li className="py-1 text-xs">{channelTitle}</li>
        <li className="text-xs">
          {statistics.viewCount && viewCountDecimals(statistics.viewCount) + " views"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
