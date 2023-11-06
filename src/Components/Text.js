import React, { useState } from "react";
import content from "./Typing-content";

//test comment

function Text() {
  var para = content[Math.floor(content.length * Math.random())];

  function updateText(e) {
    var input = e.target.value;
    var len = input.length;
    if (input !== para.substring(0, len)) {
      setClasses("text red");
    } else {
      setClasses("text");
    }
  }

  var [classes, setClasses] = useState("text");
  return (
    <div className="long">
      <textarea className={classes} placeholder={para} onInput={updateText} />
    </div>
  );
}

export default Text;
