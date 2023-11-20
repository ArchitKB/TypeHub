import React, { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
    setTimer(curTime);
    <Popup />;
    props.setRunningFlag(false);
    props.setErrors(0);
    props.setTotalCharacters(0);
  }

  return (
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
          (100 * (props.totalCharacters - props.errors)) / props.totalCharacters
        ) + "%"}
      </p>
    </div>
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

function MyButton(props) {
  var minutes = props.curTime / 60;
  var seconds = props.curTime % 60;
  function modifyTimer(e) {
    var time = e.target.getAttribute("time");
    props.setCurTime(time);
    props.setTimer(time);
  }

  return (
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
    </DropdownButton>
  );
}

function Popup(props) {
  var [show, setShow] = useState(true);

  var handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Displayer;
