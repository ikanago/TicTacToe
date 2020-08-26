import React, { useState } from "react";
import styled from "styled-components";
import { Cell } from "../Cell";
import { judgeWinner } from "./judgeBoard";

export const Board = () => {
    // The number of row or column.
    const size = 3;
    const [cells, setCells] = useState(Array(size * size).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const updateCells = (index: number) => {
        const _cells = [...cells];
        _cells[index] = xIsNext ? "X" : "O";
        setCells(_cells);
        setXIsNext(!xIsNext);
    };
    const winner = judgeWinner(cells, size);
    let status;
    console.log(winner);
    if (winner !== null) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
        <>
            <Status>{status}</Status>
            <BoardWrapper>
                {cells.map((_, i) => (
                    <Cell
                        key={i}
                        value={cells[i]}
                        onClick={() => updateCells(i)}
                    />
                ))}
            </BoardWrapper>
        </>
    );
};

const Status = styled.div`
    margin-bottom: 0.5rem;
`;

const BoardWrapper = styled.div`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    width: 10rem;
    height: 10rem;
    clear: both;
    content: "";
`;
