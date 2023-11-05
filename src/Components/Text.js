import React from "react";
import content from "./Typing-content";

//test comment

function Text() {
  return (
    <div className="long">
      <textarea className="text" placeholder={para} onInput={updateText} />
    </div>
  );
}

var cur = content[Math.floor(content.length * Math.random())];
var para = "";
for (var i = 0; i < cur.length; i++) para = para + cur[i];

var input = [];

function updateText() {
  var len = document.getElementsByClassName("text")[0].value.length;
  input = document.getElementsByClassName("text")[0].value;
  if (
    document.getElementsByClassName("text")[0].value !== para.substring(0, len)
  ) {
    document.querySelector(".main").classList.add("red");
    document.querySelector(".text").classList.add("red");
  } else {
    document.querySelector(".main").classList.remove("red");
    document.querySelector(".text").classList.remove("red");
  }
}

export default Text;
export { para, input };
