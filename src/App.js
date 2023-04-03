/** @format */

// import { useState } from "react";
import "./App.css";
// import Cursor from "./components/Cursor";
import MovingDiv from "./components/movingDiv"
import DragableDiv from "./components/dragableDiv"

const App = () => {
  return (
    <div className="app">
      <DragableDiv start_x={0} start_y={0} />
      <MovingDiv start_x={0} end_x={200} start_y={0} end_y={200} speed_delay={2000} />
      {/* <Cursor start_x={0} end_x={200} start_y={0} end_y={200} speed_delay={200} /> */}
    </div>
  );
};

export default App;
