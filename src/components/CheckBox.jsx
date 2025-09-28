import React from "react";

export default function CheckBox({ id, label = id }) {
  return (
    <label htmlFor={id} className="checkbox-label">
      <input
        type="checkbox"
        name="Category"
        id={id}
        className="checkbox-field"
      />
      {label}
    </label>
  );
}
