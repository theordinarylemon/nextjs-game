"use client"
import { useState } from 'react';
import styles from './game.module.css'

function Square({value, onSquareClick}) {
    return (
    <button className={styles.aSquare}
    onClick={onSquareClick}
    >
      {value}
      </button>
    );
}

function Board() {
  const [nextIsX, setNextIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (nextIsX) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setNextIsX(!nextIsX);
    }

  let status;
  let winer = calculateWinner(squares);
  if (winer) {
    status = "Winner:" + winer;
  }
  else {
    status = "Next player:" + (nextIsX? "X" : "O");
  }

  function calculateWinner (squares) {
   const line = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
   ];
   for(let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a]=== squares[c]) {
      console.log(`{squres[a]} wins!`);
      return squares[a];
    }
   }
   return null;
  }
  return (
    <>
    <div className={styles.game}>
      <div>
        <div className={styles.row}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          </div>
          <div className={styles.row}>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          </div>
          <div className={styles.row}>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
          </div>
      </div>
      <div className={styles.textDisplay}>{status}</div>
    </div>
    </>
  )
}

export default function Game() {
  return (
    <>
    <Board />
    </>
  );
}