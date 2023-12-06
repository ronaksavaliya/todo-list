import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export default function List(props) {
  const [show, setshow] = useState(false);
  const [editText, seteditText] = useState(props.val);

  function handleClick() {
    setshow(true);
  }

  function handleOnChange(e){
     seteditText(e.target.value);
  }

  function handleEdit(){
    setshow(false);
    props.handleEdit(editText,props.id);
   
  }

  return (
    <li>
      {show ? (
        <>
          <input
            className="textEdit"
            type="text"
            value={editText}
            onChange={handleOnChange}
          />
          <button className="btn edit" onClick={handleEdit}> <AddIcon/> </button>
        </>
      ) : (
        <>
          <button
            className="btn remove"
            onClick={() => {
              props.handleRemove(props.id);
            }}
          >
            <DeleteIcon />
          </button>
          <button className="btn edit" onClick={handleClick}>
            <EditIcon />
          </button>
          <span className="text"> {props.val} </span>
        </>
      )}
    </li>
  );
}
