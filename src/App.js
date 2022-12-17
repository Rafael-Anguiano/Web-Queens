import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Board from './components/board';
import Footer from './components/footer';

function App() {
  let [boardsize, setBoardsize] = useState(8)
  return (
    <div className='mh-100 mw-100 pb-4' >
      <Header setBoardsize={setBoardsize} currentValue={boardsize}/>
      {boardsize > 0 && boardsize !== 2 && boardsize !== 3 && boardsize &&
        <Board size={boardsize}/>
      }
      <Footer/>
    </div>
  );
}

export default App;
