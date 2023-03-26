
import React, { useState, useEffect } from 'react';
import './Game.css';


function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [prevBoard, setPrevBoard] = useState([]);
  const [showUndo, setShowUndo] = useState(false);

  useEffect(() => {
    checkWinner();
    // eslint-disable-next-line
  }, [board]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!gameOver) {
        aiMove();
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, [xIsNext]);

  const handleClick = (index) => {
    if (board[index] === null && !gameOver) {
      setPrevBoard([...board]);
      setShowUndo(true);
      setBoard([...board.slice(0, index), xIsNext ? 'X' : 'O', ...board.slice(index + 1)]);
      setXIsNext(!xIsNext);
    }
  };

  const undoMove = () => {
    setBoard([...prevBoard]);
    setPrevBoard([]);
    setXIsNext(!xIsNext);
    setShowUndo(false);
  };

  const checkWinner = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        setGameOver(true);
        return;
      }
    }
    if (!board.includes(null)) {
      setWinner('tie');
      setGameOver(true);
      return;
    }
  };

  const aiMove = () => {
    const emptyCells = board.reduce((acc, cell, index) => (cell === null ? [...acc, index] : acc), []);
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    handleClick(emptyCells[randomIndex]);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setGameOver(false);
    setPrevBoard([]);
    setShowUndo(false);
    setXIsNext(true);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <div className="game-board">
        {winner ? (
          <div className="game-over">
            {winner === 'tie' ? 'It is a tie!' : `${winner} wins!`}
           
            <button className="play-again" onClick={resetGame}>
          Play again
        </button>
      </div>
    ) : (
      <>
        <div className="status">{`Next player: ${xIsNext ? 'X' : 'O'}`}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </>
    )}
    {showUndo && (
      <button className="undo" onClick={undoMove}>
        Undo
      </button>
    )}
  </div>
</div>
);
}
export default Game