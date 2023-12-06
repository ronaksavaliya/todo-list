import React, { useState } from "react";
import "./TodoList.css";
import List from "./List";

export default function TodoList() {
  const [iteamList, setiteamList] = useState([]);
  const [iteam, setiteam] = useState("");

  function handleList() {
    if (iteam === "") {
      alert("Please add a note");
    } else {
      setiteamList([...iteamList, iteam]);
      setiteam("");
    }
  }

  function handleonChange(e) {
    setiteam(e.target.value);
  }

  function handleRemove(key) {
    let newList = iteamList.filter((val, index) => {
      return key != index;
    });

    setiteamList([...newList]);
  }

  function handleEdit(text,id) {
    let newList =iteamList.map((curVal,index)=>{
        if(id===index)
        return text;

        else
        return curVal;
    })
    
    setiteamList(newList);
  }

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <h1> Todo List </h1>
          <div>
            <input
              type="text"
              placeholder="Add a iteam"
              value={iteam}
              onChange={handleonChange}
            />
            <button className="add" onClick={handleList}>
              +
            </button>
          </div>

          <div className="iteams">
            <ul>
              {iteamList.map((val, index) => {
                return (
                  <List
                    key={index}
                    id={index}
                    val={val}
                    handleRemove={handleRemove}
                    handleEdit={handleEdit}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
