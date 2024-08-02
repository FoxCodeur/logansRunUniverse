import React from "react";
import "./Timeline.scss";
import PartTimeline from "./partTimeline/PartTimeline";
import PartTitleTimeline from "./partTitleTimeline/PartTitleTimeline";
import ResumeTimeline from "./resumeTimeline/ResumeTimeline";
import ThinkerBox from "./thinkerBox/ThinkerBox";

const Timeline = () => {
  return (
    <div>
      <PartTitleTimeline />
      <ResumeTimeline />
      <PartTimeline />
      <ThinkerBox />
    </div>
  );
};

export default Timeline;
