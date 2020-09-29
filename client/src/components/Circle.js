import React from "react";
// import {easeQuadInOut} from "d3-ease";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Circle.css";
import ReviewsProvider from "./ReviewsProvider";

const Circle = ({number, apps}) => {
  return (
    <div>
      <div className="main-circle">
        <ReviewsProvider valueStart={0} valueEnd={100}>
          {(value) => (
            <div className="circle-inside">
              <CircularProgressbar
                value={value}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "14px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 2,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(400, 0, 100, ${290 / 100})`,
                  textColor: "white",
                  trailColor: "#fff",

                  backgroundColor: "#fff",
                })}
                text={`${number} ${apps}`}
                strokeWidth={8}
              />
            </div>
          )}
        </ReviewsProvider>
      </div>
    </div>
  );
};

export default Circle;
