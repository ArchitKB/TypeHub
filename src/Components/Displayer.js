import React, { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import {
  Dropdown,
  ButtonGroup,
  DropdownButton,
  Modal,
  Button,
} from "react-bootstrap";

function Displayer(props) {
  var [WPM, setWPM] = useState(0);
  var [WPMTimer, setWPMTimer] = useState(0);
  var [timer, setTimer] = useState(100);
  var [curTime, setCurTime] = useState(timer);
  var [showPopup, setShowPopup] = useState(false);
  var [result, setResult] = useState([0, 0, 0]);

  useEffect(() => {
    var intervalName;

    intervalName = setInterval(
      () => setWPMTimer((WPMTimer) => WPMTimer + 5),
      5000
    );

    return () => {
      setWPMTimer(0);
      return clearInterval(intervalName);
    };
  }, [props.runningFlag]);

  useEffect(() => {
    setWPM(Math.floor((props.totalCorrectWords * 60) / WPMTimer));
  }, [WPMTimer]);

  if (timer === 0) {
    setResult([
      WPM,
      props.errors,
      Math.floor(
        (100 * (props.totalCharacters - props.errors)) / props.totalCharacters
      ),
    ]);
    setTimer(curTime);
    props.setRunningFlag(false);
    props.setErrors(0);
    props.setTotalCharacters(0);
    setShowPopup(true);
  }

  return (
    <>
      {showPopup ? <Popup setShowPopup={setShowPopup} result={result} /> : null}
      <div className="displayer">
        <p>WPM:{WPMTimer === 0 ? "---" : WPM}</p>
        <p>Time:</p>
        {props.runningFlag ? (
          <Timer
            setTimer={setTimer}
            timer={timer}
            curTime={curTime}
            runningFlag={props.runningFlag}
            setRunningFlag={props.setRunningFlag}
            setErrors={props.setErrors}
            setTotalCharacters={props.setTotalCharacters}
          />
        ) : (
          <MyButton
            timer={timer}
            setTimer={setTimer}
            curTime={curTime}
            setCurTime={setCurTime}
          />
        )}
        <p>Errors: {props.errors}</p>
        <p>
          Accuracy:{" "}
          {Math.floor(
            (100 * (props.totalCharacters - props.errors)) /
              props.totalCharacters
          ) + "%"}
        </p>
      </div>
    </>
  );
}

function Timer(props) {
  useEffect(() => {
    var intervalName = setInterval(
      () => props.setTimer((timer) => timer - 1),
      1000
    );

    return () => clearInterval(intervalName);
  }, []);

  function resetter() {
    props.setRunningFlag(false);
    props.setErrors(0);
    props.setTotalCharacters(0);
    props.setTimer(props.curTime);
  }
  var minutes = Math.floor(props.timer / 60);

  var seconds = props.timer % 60;

  return (
    <p onClick={resetter}>
      {Math.floor(minutes / 10) +
        (minutes % 10) +
        ":" +
        Math.floor(seconds / 10) +
        (seconds % 10)}
    </p>
  );
}

function MyButton(props) {
  var minutes = props.curTime / 60;
  var seconds = props.curTime % 60;
  function modifyTimer(e) {
    var time = e.target.getAttribute("time");
    props.setCurTime(time);
    props.setTimer(time);
  }

  return (
    <div className="popup-button">
      <DropdownButton
        as={ButtonGroup}
        key={"up"}
        id={"dropdown-button-drop-up"}
        drop={"up"}
        variant="secondary"
        title={
          Math.floor(minutes / 10) +
          Math.floor(minutes % 10) +
          ":" +
          Math.floor(seconds / 10) +
          (seconds % 10)
        }
      >
        {" "}
        <div className="popup">
          <Dropdown.Item eventKey="1" time="30" onClick={modifyTimer}>
            00:30
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" time="60" onClick={modifyTimer}>
            01:00
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" time="60" onClick={modifyTimer}>
            01:40
          </Dropdown.Item>
          <Dropdown.Item eventKey="4" time="120" onClick={modifyTimer}>
            02:00
          </Dropdown.Item>
          <Dropdown.Item eventKey="5" time="240" onClick={modifyTimer}>
            04:00
          </Dropdown.Item>
          <Dropdown.Item eventKey="6" time="300" onClick={modifyTimer}>
            05:00
          </Dropdown.Item>
        </div>
      </DropdownButton>
    </div>
  );
}

function Popup(props) {
  var [show, setShow] = useState(true);

  var handleClose = () => {
    setShow(false);
    props.setShowPopup(false);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Words per minute:</h4>{" "}
        <span className="result">{props.result[0]}</span> <br />
        <h4>Errors:</h4> <span className="result">{props.result[1]}</span>{" "}
        <br />
        <h4>Accuracy:</h4> <span className="result">{props.result[2]}</span>{" "}
        <br />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Displayer;
