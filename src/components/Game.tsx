import React, { useState } from "react";
import styled from "styled-components";
import { Board } from "./board/Board";
import { judgeWinner } from "./board";

export const Game = () => {
    // The number of row or column.
    const size = 3;
    const [boardHistory, setBoardHistory] = useState([Array<string>(size * size).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    // Step user sees on the board.
    const [stepNumber, setStepNumber] = useState(0);
    const winner = judgeWinner(boardHistory[boardHistory.length - 1], size);
    const status = winner !== null ? `Winner: ${winner}`
        : `Next player: ${xIsNext ? "X" : "O"}`;

    const moves = boardHistory.map((_, step) => {
        const description = `Go to move #${step}`;
        return (
            <li key={step}>
                <button onClick={() => jumpTo(step)}>{description}</button>
            </li>
        )
    });

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const updateCells = (index: number) => {
        const history = boardHistory.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const board = [...current];
        if (judgeWinner(board, size) || board[index]) {
            return;
        }
        board[index] = xIsNext ? "X" : "O";
        setBoardHistory(history.concat([board]));
        setStepNumber(history.length);
        setXIsNext(!xIsNext);
    };

    return (
        <div>
            <Board board={boardHistory[stepNumber]} onClick={index => updateCells(index)} />
            <div>
                <Status>{status}</Status>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

const Status = styled.div`
    margin-bottom: 0.5rem;
`;
