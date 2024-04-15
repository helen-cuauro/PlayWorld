import { useEffect, useState } from "react";
import styles from "./Square.module.css";
export default function Square({ id, value, onSquareClick, winners }) {
  let className = `${styles.square}`;
    
  if(winners && winners.includes(id)) {
    className += ` ${styles.green}`
  }
  
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}
