import React, { useState } from "react";
import styled from "styled-components";
import { Cell } from "../Cell";

type BoardProps = {
    board: Array<string>;
    onClick: (number) => void;
}

export const Board = ({board, onClick}: BoardProps) => {
    return (
        <>
            <BoardWrapper>
                {board.map((_, i) => (
                    <Cell
                        key={i}
                        value={board[i]}
                        onClick={() => onClick(i)}
                    />
                ))}
            </BoardWrapper>
        </>
    );
};

const BoardWrapper = styled.div`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    width: 10rem;
    height: 10rem;
    clear: both;
    content: "";
`;
