import React from "react";

function ToDoItem(props) {
  const [isline, setisline] = React.useState(false);
  function line() {
    setisline((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={line}
      style={{
        textDecoration: isline && "line-through"
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
