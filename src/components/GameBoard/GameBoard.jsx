import { useContext, useState } from "react";
import Square from "../Square";
import styles from "./GameBoard.module.css";
import { I18nContext } from "../../locales/I18nContext";
function GameBoard({ xIsNext, squares, onPlay, move }) {
  const {t} = useContext(I18nContext)
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares).winner) return;
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const results = calculateWinner(squares);
  let status;
  if (results.winner) {
    status = t("won-game")+ " " + results.winner;
  } else {
    status = `${t("next-player")}: ` + (xIsNext ? "X" : "O");
    if (move === 9 ) {
      status = t("tied-game")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        <div className={styles.row}>
          <Square id={0} winners={results.positions} value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square id={1} winners={results.positions} value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square id={2} winners={results.positions} value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className={styles.row}>
          <Square id={3} winners={results.positions} value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square id={4} winners={results.positions} value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square id={5} winners={results.positions} value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className={styles.row}>
          <Square id={6} winners={results.positions} value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square id={7} winners={results.positions} value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square id={8} winners={results.positions} value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default GameBoard;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner: squares[a], positions: lines[i]};
    }
  }
  return {winner: null, positions: null};
}
