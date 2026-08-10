import React from "react";
import { useCallback, useState } from "react";
import "./TicTacToe.css";
import Board from "./Board";
import ProjectLayout from "../ProjectLayout";

const WinningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [xTurn, setXTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [msg, setMsg] = useState("");

  const checkWinner = useCallback(() => {
    for (const [a, b, c] of WinningPatterns) {
      if (board[a]?.length && board[a] === board[b] && board[b] === board[c]) {
        setMsg(`Congrats, Winner is '${board[a]}'`);
      }
    }

    const isDraw = board?.every((ele) => ele !== "");
    if (isDraw) {
      setMsg(`Its a Draw!`);
    }
  }, [board]);

  const handleCellClick = useCallback(
    (i) => {
      if (board[i]?.length || msg?.length) {
        return;
      }
      const val = xTurn ? "X" : "O";
      setXTurn(!xTurn);
      board[i] = val;
      setBoard([...board]);

      checkWinner();
    },
    [xTurn, board, msg?.length, checkWinner],
  );

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(""));
    setMsg("");
    setXTurn(true);
  }, []);
  return (
    <ProjectLayout
      title="Tic Tac Toe"
      description="A simple Tic Tac Toe game built with React."
      icon="🎮"
    >
      <div className="tic-tac-toe">
        <div className="content-wrapper">
          {!!msg?.length && <h4>{msg}</h4>}
          <Board onCellClick={handleCellClick} xTurn={xTurn} board={board} />
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default TicTacToe;
