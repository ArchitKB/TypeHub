import React, { useState } from "react";
import content from "./Typing-content";

//test comment

var para = content[Math.floor(content.length * Math.random())];

function Text() {
  function updateText(e) {
    var input = e.target.value;
    var len = input.length;
    var char = input[len - 1];

    if (input === para) {
      para = content[Math.floor(content.length * Math.random())];
      e.target.value = "";
      setState([]);
      input = "";
    } else if (len < state.length) {
      setState(state.slice(0, -1));
    } else if (char !== para[len - 1]) {
      setState([...state, { content: char, color: "col-red", id: len }]);
    } else {
      setState([...state, { content: char, color: "col-green", id: len }]);
    }
  }

  var [state, setState] = useState([]);
  return (
    <div className="long">
      <textarea className="text" onInput={updateText} />
      <div className="super">
        <ul className="super-list">
          {state.map((item) => (
            <li key={item.id} className={item.color}>
              {item.content}
            </li>
          ))}
          <li className="guiding-text">
            {para.substring(state.length, para.length)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Text;
