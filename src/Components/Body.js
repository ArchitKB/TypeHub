import React, { useState } from "react";
import Main from "./Main-box";
import Displayer from "./Displayer";

function Body() {
  var [totalCorrectWords, setTotalCorrectWords] = useState(0);
  var [runningFlag, setRunningFlag] = useState(0);

  return (
    <div className="body">
      <Main
        setTotalCorrectWords={setTotalCorrectWords}
        setRunningFlag={setRunningFlag}
      />
      <Displayer
        totalCorrectWords={totalCorrectWords}
        runningFlag={runningFlag}
        setRunningFlag={setRunningFlag}
      />
    </div>
  );
}

export default Body;
