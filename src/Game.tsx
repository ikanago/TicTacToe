import React from "react";
import styled from "styled-components";
import { Board } from "./Board";

export const Game = () => {
    return (
        <div>
            <Board />
            <div>
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
};
