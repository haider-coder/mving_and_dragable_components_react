/** @format */

import { useEffect, useState } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

const Cursor = ({ start_x, end_x, start_y, end_y, speed_delay }) => {
  const [smallcircle, setsmallcircle] = useState({ x: start_x, y: start_y, angle: 70, x_direction: 1, speed_delay: speed_delay });
  useEffect(() => {
    const magnitude = 20;
    var x_direction = smallcircle.x_direction;
    var current_speed_delay = smallcircle.speed_delay;

    const interval = setInterval(() => {
      // console.log(smallcircle.angle, smallcircle.x, smallcircle.y, smallcircle.x_direction)

      if (smallcircle.speed_delay != speed_delay) {
        current_speed_delay = current_speed_delay - 500
      }

      var current_angle = smallcircle.angle;
      var current_x = smallcircle.x + magnitude * x_direction * Math.cos(smallcircle.angle);
      var current_y = smallcircle.y + magnitude * Math.sin(smallcircle.angle);

      if (current_x > end_x) {
        current_angle = current_angle + 270;
        current_x = smallcircle.x;
        x_direction = -1;
        console.log("Reached ==>> RIGHT")
        current_speed_delay = smallcircle.speed_delay + 500
      }
      if (current_x < start_x) {
        console.log("Reached ==>> LEFT")
        current_angle = current_angle - 270;
        current_x = smallcircle.x
        x_direction = 1;
        current_speed_delay = smallcircle.speed_delay + 500
      }
      if (current_y > end_y) {
        console.log("Reached ==>> BOTTOM")
        current_angle = current_angle - 90;
        current_y = smallcircle.y
        current_speed_delay = smallcircle.speed_delay + 500
      }

      if (current_y < start_y) {
        console.log("Reached ==>> TOP")
        current_angle = current_angle + 90;
        current_y = smallcircle.y
        current_speed_delay = smallcircle.speed_delay + 500
      }
      if (current_angle > 360) {
        current_angle = current_angle % 360;
      }
      setsmallcircle({ x: current_x, y: current_y, angle: current_angle, x_direction: x_direction, speed_delay: current_speed_delay });

    }, current_speed_delay);
    return () => clearInterval(interval);


  }, [smallcircle]);

  return (
    <div className="motion_area">
      <motion.div
        animate={{
          x: smallcircle.x,
          y: smallcircle.y,
          transition: { type: "spring", duration: 1, mass: 1 },
        }}
        className="small_circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
        </svg>
      </motion.div>

    </div>
  );
};

export default Cursor;
