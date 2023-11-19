import React, { useState } from "react";
import Main from "./Main-box";
import Displayer from "./Displayer";

function Body() {
  var [totalCorrectWords, setTotalCorrectWords] = useState(0);
  var [runningFlag, setRunningFlag] = useState(false);
  var [errors, setErrors] = useState(0);
  var [totalCharacters, setTotalCharacters] = useState(0);

  return (
    <div className="body">
      <Main
        setTotalCorrectWords={setTotalCorrectWords}
        runningFlag={runningFlag}
        setRunningFlag={setRunningFlag}
        errors={errors}
        setErrors={setErrors}
        totalCharacters={totalCharacters}
        setTotalCharacters={setTotalCharacters}
      />
      <Displayer
        totalCorrectWords={totalCorrectWords}
        runningFlag={runningFlag}
        setRunningFlag={setRunningFlag}
        errors={errors}
        setErrors={setErrors}
        totalCharacters={totalCharacters}
        setTotalCharacters={setTotalCharacters}
      />
    </div>
  );
}

export default Body;
