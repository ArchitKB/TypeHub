import React from "react";
import Text from "./Text";

function Main(props) {
  return (
    <div className="main">
      <div className="topbar">
        <h5 class="sub-header">
          Register and/or login for playing against friends, custom challenges
          and much more :)
        </h5>
      </div>

      <Text
        setTotalCorrectWords={props.setTotalCorrectWords}
        runningFlag={props.runningFlag}
        setRunningFlag={props.setRunningFlag}
        errors={props.errors}
        setErrors={props.setErrors}
        totalCharacters={props.totalCharacters}
        setTotalCharacters={props.setTotalCharacters}
      />
    </div>
  );
}

export default Main;
