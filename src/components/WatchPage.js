import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searhParams] = useSearchParams();
  //   console.log(searhParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col">
      <div className="pl-20 py-2">
        <iframe
          width="930"
          height="523"
          src={"https://www.youtube.com/embed/" + searhParams.get("v")}
          title="Tom &amp; Jerry | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
