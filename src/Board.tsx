import React from "react";
import styled from "styled-components";
import { Square } from "./Square";

export const Board = () => {
    const squares = new Array(9).fill(0);
    return (
        <BoardWrapper>
            {squares.map((_, i) => (
                <Square key={i} />
            ))}
        </BoardWrapper>
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
