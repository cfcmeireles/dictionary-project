import React from "react";

export default function Examples(props) {
  if (props.example && props.example.length > 0) {
    return (
      <div className="Examples">
        {props.example.map(function (example, index) {
          return <div key={index}>{example}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
