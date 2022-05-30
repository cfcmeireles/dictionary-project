import React from "react";

export default function Example(props) {
  const example = props.example;

  if (example) {
    return (
      <div className="Example">
        <strong>Example: </strong>
        <em>{example}</em>
      </div>
    );
  } else {
    return null;
  }
}
