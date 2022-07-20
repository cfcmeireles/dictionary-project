import React from "react";
import { ReactComponent as Pause } from "./assets/pause.svg";

const pausebutton = function () {
  <div className="pause-button">
    <button type="button" className="pause">
      <Pause />
    </button>
  </div>;
};

export default Pause;
