import React, { useState } from "react";

export default function Cell({ ...props }) {
  const [active, setActive] = useState("");
  const [showHint, setShowHint] = useState(false);

  const name = props.data.title ? props.data.title : "FREE";
  return (
    <td
      className={`cell ` + active}
      onDoubleClick={() => setActive(active === "" ? "active" : "")}
    >
      <p>{name}</p>
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? props.data.hint : "?"}
      </button>
    </td>
  );
}
