import React from "react";

export default function Button({ content, name }) {
  return (
    <button type="button" className={name}>
      {content}
    </button>
  );
}
