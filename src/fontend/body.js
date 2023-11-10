import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Styled Components
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const TimerButton = styled.button`
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const DifficultyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const DifficultyButton = styled.button`
  padding: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

const PracticeBox = styled.textarea`
  width: 80%;
  height: 200px;
  margin-top: 20px;
`;

const StartButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

// React Component
const TypingPracticeBody = () => {
  const [timer, setTimer] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const [practiceText, setPracticeText] = useState('');

  const startTimer = (minutes) => {
    const milliseconds = minutes * 60 * 1000;
    setTimer(milliseconds);
  };

  useEffect(() => {
    let interval;
    if (timer !== null) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1000 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    // Trigger action when difficulty changes
    console.log(`Difficulty changed to: ${difficulty}`);
    // Add your action here
  }, [difficulty]);

  useEffect(() => {
    // Trigger action when timer reaches 0
    if (timer === 0) {
      console.log('Timer reached 0. Perform action here.');
      // Add your action here
    }
  }, [timer]);

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
  };

  const handleStart = () => {
    // Add any additional actions you want to perform when the "Start" button is clicked
    console.log('Start button clicked');
  };

  return (
    <BodyContainer>
      <TimerContainer>
        <TimerButton
          className="btn btn-primary"
          onClick={() => startTimer(1)}
        >
          1 min
        </TimerButton>
        <TimerButton
          className="btn btn-primary"
          onClick={() => startTimer(2)}
        >
          2 min
        </TimerButton>
        <TimerButton
          className="btn btn-primary"
          onClick={() => startTimer(5)}
        >
          5 min
        </TimerButton>
      </TimerContainer>

      <DifficultyContainer>
        <DifficultyButton
          className={`btn btn-${difficulty === 'easy' ? 'success' : 'light'}`}
          onClick={() => handleDifficultyChange('easy')}
        >
          Easy
        </DifficultyButton>
        <DifficultyButton
          className={`btn btn-${difficulty === 'medium' ? 'warning' : 'light'}`}
          onClick={() => handleDifficultyChange('medium')}
        >
          Medium
        </DifficultyButton>
        <DifficultyButton
          className={`btn btn-${difficulty === 'hard' ? 'danger' : 'light'}`}
          onClick={() => handleDifficultyChange('hard')}
        >
          Hard
        </DifficultyButton>
      </DifficultyContainer>

      <PracticeBox
        className="form-control"
        placeholder="Start typing here..."
        value={practiceText}
        onChange={(e) => setPracticeText(e.target.value)}
      />

      <StartButton onClick={handleStart}>Start</StartButton>
    </BodyContainer>
  );
};

export default TypingPracticeBody;
