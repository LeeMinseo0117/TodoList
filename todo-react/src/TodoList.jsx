import React from "react";

export default function TodoList({ Lists }) {
  return (
    <>
      <ul>
        {Lists.map((List, index) => (
          <li key={index}>{List}</li>
        ))}
      </ul>
    </>
  );
}
