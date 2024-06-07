
import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [scores, setScores] = useState({ X: 0, O: 0 });

  useEffect(() => {
    const savedScores = localStorage.getItem('tic-tac-toe-scores');
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tic-tac-toe-scores', JSON.stringify(scores));
  }, [scores]);

  const handleGameEnd = (winner) => {
    setScores((prevScores) => ({
      ...prevScores,
      [winner]: prevScores[winner] + 1,
    }));
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className="scores">
        <span className="score blue">Blue (X): {scores.X}</span>
        <span className="score red">Red (O): {scores.O}</span>
      </div>
      <Board onGameEnd={handleGameEnd} />
    </div>
  );
};

export default App;
