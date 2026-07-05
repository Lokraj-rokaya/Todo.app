import "./App.css";
import { useState } from "react";

function BasicState() {
  const [text, setText] = useState("Enter Text");
  const [items, setItems] = useState([""]);
  function addNewItem() {
    if (text.trim()) {
      setItems([...items, text]);
      setText("");
    }
  }
  function removeItem(index) {
    items.splice(index, 1);
    setItems([...items]);
  }

  return (
    <>
      <div className="wrap-btn-text">
        <div className="input-section">
          <input
            type="text"
            className="input-field"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="add-btn" type="" onClick={addNewItem}>
            Add task
          </button>
        </div>
        <div className="display-section">
          <ul>
            {items.map((item, i) => (
              <li className="list-item">
                {item}
                <button
                  className="remove-btn"
                  onClick={() => {
                    removeItem(i);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BasicState;
