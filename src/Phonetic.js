import React, { useState, useRef } from "react";
import "./Phonetic.css";
import Play from "./Play";
import Pause from "./Pause";

export default function Phonetic(props) {
  const audioRef = useRef(new Audio(props.phonetic.audio));
  const title = props.phonetic.text;
  const [isPlaying, setIsPlaying] = useState(0);

  const play = function () {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pause = function () {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  audioRef.current.onended = (event) => {
    setIsPlaying(false);
  };

  return (
    props.phonetic.audio && (
      <div className="audio-player">
        <div className="title">
          {title} <span className="listen">(Click to listen)</span>
        </div>
        <button className="play" onClick={isPlaying ? pause : play}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    )
  );
}
