import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Board from './components/board';

function App() {
  let [boardsize, setBoardsize] = useState(10)
  return (
    <div>
      <Header/>
      {boardsize > 0 && boardsize !== 2 && boardsize !== 3 && boardsize &&
        <Board size={boardsize}/>
      }
    </div>
  );
}

export default App;
