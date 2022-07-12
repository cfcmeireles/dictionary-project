import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  const title = props.phonetic.text;

  const start = function () {
    audio.play();
  };

  const pause = function () {
    audio.pause();
  };

  return (
    props.phonetic.audio && (
      <div className="audio-player">
        <div className="title">{title}</div>
        <button onClick={start}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    )
  );
}
