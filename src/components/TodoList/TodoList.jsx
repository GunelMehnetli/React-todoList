import { useState } from "react";
import "./TodoList.css";
import React from "react";

function TodoList() {
  const [newItem, setNewItems] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItems("");
  }
  function deleteItem(id) {
    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
  }
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form>
        <input
          type="text"
          placeholder="Add an Item..."
          value={newItem}
          onChange={(e) => setNewItems(e.target.value)}
        />
      </form>
      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
