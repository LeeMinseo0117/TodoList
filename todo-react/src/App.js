import React, { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [addTxt, setAddTxt] = useState("");
  const [Lists, setLists] = useState([]);

  function clickAdd(e) {
    console.log("버튼 클릭");
    if (addTxt !== "") {
      e.preventDefault();
      console.log("내용 있음 addTxt :", addTxt);
      setLists([...Lists, addTxt]);
      console.log("typeof Lists :", typeof Lists);
      setAddTxt("");
    } else {
      console.log("내용 없음");
      alert("내용 작성 부탁");
    }
  }
  return (
    <>
      <h1>TODO LIST</h1>
      <input
        value={addTxt}
        onChange={(e) => setAddTxt(e.target.value)}
        type="text"
        placeholder="할일 작성"
      ></input>
      <button onClick={clickAdd} type="submit">
        추가
      </button>
      <TodoList Lists={Lists}></TodoList>
    </>
  );
}
