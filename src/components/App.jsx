import React from "react";

function App() {
  const [items, setitems] = React.useState([]);
  const [mean, setmean] = React.useState("");

  function onChange(event) {
    var value = event.target.value;
    setmean(value);
  }

  function onClick() {
    setitems((prevValue) => {
      return [...prevValue, mean];
    });
    setmean("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={onChange} type="text" value={mean} />
        <button onClick={onClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
