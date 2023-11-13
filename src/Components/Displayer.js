import React, { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Displayer(props) {
  var [WPM, setWPM] = useState(0);
  var [WPMTimer, setWPMTimer] = useState(0);
  var [timer, setTimer] = useState(100);

  useEffect(() => {
    var intervalName;

    intervalName = setInterval(
      () => setWPMTimer((WPMTimer) => WPMTimer + 5),
      5000
    );

    return () => clearInterval(intervalName);
  }, []);

  useEffect(() => {
    setWPM(Math.floor((props.totalCorrectWords * 60) / WPMTimer));
  }, [WPMTimer]);

  return (
    <div className="displayer">
      <p>WPM:{WPMTimer === 0 ? "---" : WPM}</p>
      <p>Time:</p>
      {props.runningFlag ? (
        <Timer
          setTimer={setTimer}
          timer={timer}
          runningFlag={props.runningFlag}
          setRunningFlag={props.setRunningFlag}
        />
      ) : (
        <Button timer={timer} setTimer={setTimer} />
      )}
      <p>Errors</p>
      <p>Accuracy</p>
    </div>
  );
}

function Timer(props) {
  if (props.timer == 0) props.setRunningFlag(false);

  useEffect(() => {
    var intervalName = setInterval(
      () => props.setTimer((timer) => timer - 1),
      1000
    );

    return () => clearInterval(intervalName);
  }, []);

  var minutes = Math.floor(props.timer / 60);

  var seconds = props.timer % 60;

  return (
    <p>
      {Math.floor(minutes / 10) +
        (minutes % 10) +
        ":" +
        Math.floor(seconds / 10) +
        (seconds % 10)}
    </p>
  );
}

function Button(props) {
  var [curTime, setCurTime] = useState(props.timer);

  var minutes = curTime / 60;
  var seconds = curTime % 60;
  function modifyTimer(e) {
    var time = e.target.getAttribute("time");
    setCurTime(time);
    props.setTimer(time);
  }
  return (
    <div class="btn-group dropup">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {Math.floor(minutes / 10) +
          Math.floor(minutes % 10) +
          ":" +
          Math.floor(seconds / 10) +
          (seconds % 10)}
      </button>

      <div class="dropdown-menu">
        <p time="30" onClick={modifyTimer}>
          00:30
        </p>
        <p time="60" onClick={modifyTimer}>
          01:00
        </p>
        <p time="100" onClick={modifyTimer}>
          01:40
        </p>
        <p time="120" onClick={modifyTimer}>
          02:00
        </p>
        <p time="240" onClick={modifyTimer}>
          04:00
        </p>
        <p time="300" onClick={modifyTimer}>
          05:00
        </p>
      </div>
    </div>
  );
}
export default Displayer;
