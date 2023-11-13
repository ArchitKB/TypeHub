import React from "react";
import Text from "./Text";

function Main(props) {
  return (
    <div className="main">
      <div className="topbar">
        <h3 class="sub-header">
          Register and/or login for playing against friends, custom challenges
          and much more :)
        </h3>
      </div>

      <Text
        setTotalCorrectWords={props.setTotalCorrectWords}
        setRunningFlag={props.setRunningFlag}
      />
    </div>
  );
}

export default Main;
