import React from "react"
import styled from "styled-components"
import { Square } from "./Square"

export class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <Status>{status}</Status>
                <BoardRow>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </BoardRow>
            </div>
        );
    }
}

const Status = styled.div`
margin-bottom: 0.5rem;
`

const BoardRow = styled.div`
clear: both;
content: "";
display: table;
`;