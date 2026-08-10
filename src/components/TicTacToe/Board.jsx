import React from "react";
import { memo } from "react";

const Board = memo(({ board, onCellClick }) => {
  return (
    <div className="board">
      {board?.map((item, i) => (
        <div className="cell" key={i} onClick={() => onCellClick(i)}>
          {item}
        </div>
      ))}
    </div>
  );
});

export default Board;
