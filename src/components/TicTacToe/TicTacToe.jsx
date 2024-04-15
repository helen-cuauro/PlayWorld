import { I18nContext } from "../../locales/I18nContext";
import GameBoard from "../GameBoard";
import GameInfo from "../GameInfo/GameInfo";
import styles from "./TicTacToe.module.css";
import { useState, useContext } from "react";

function TicTacToe() {
  
  const [history, setHistory] = useState(() => {
    const historyLocal = localStorage.getItem("history")
    if (historyLocal) return JSON.parse(historyLocal)
    return [Array(9).fill(null)]
  });
  console.log("history en reder",history);
  const [currentMove, setCurrentMove] = useState(() => {
    const moveLocal = localStorage.getItem("move")
    if (moveLocal) return JSON.parse(moveLocal)
    return 0
  });
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const { t } = useContext(I18nContext);
  // console.log(t);
  console.log(currentMove);
  function handlePlay(nextSquares) {
    //TODO
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // console.log("nextHistory",nextHistory)
    localStorage.setItem("history", JSON.stringify(nextHistory))
    localStorage.setItem("move", JSON.stringify(nextHistory.length - 1))
  }

  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    localStorage.setItem("history", JSON.stringify([Array(9).fill(null)]))
    localStorage.setItem("move", JSON.stringify(0))
  }
  function jumpTo(nextMove) {
    //TODO
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = t("move") + "#" + move;
    } else {
      description = t("move-0");
    }
    return (
      <button key={move} onClick={() => jumpTo(move)}>
        {description}
      </button>
    );
  });
  return (
    <div className={styles.box}>
      <section className={styles.container}>
        <GameBoard
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          move={currentMove}
        />
        <GameInfo moves={moves} handleReset={handleReset} />
      </section>
    </div>
  );
}

export default TicTacToe;
