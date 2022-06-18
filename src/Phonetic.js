import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = props.phonetic.audio;

  if (audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        {" "}
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  }
}
