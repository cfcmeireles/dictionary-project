import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = props.phonetic.audio;

  return (
    audio && (
      <div className="AudioPlayer">
        <div className="text">
          {props.phonetic.text}
          <span className="listen"> (Click to listen) </span>
        </div>
        <ReactAudioPlayer src={audio} volume={0.5} controls />
      </div>
    )
  );
}
