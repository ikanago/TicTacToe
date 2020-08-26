import { Board } from "./Board";
import { judgeWinner } from "./judgeBoard";

/**
 * Consider representing a 2-dimentional square-shaped array in a 1-dimentional array.
 * This function converts row and column of the 2d array into an index of the 1d array.
 * @param row Row number of the 2d array
 * @param col Column number of the 2d array
 * @param size The number of elements in a row
 */
const rowAndColumnToIndex = (row: number, col: number, size: number) => {
    return row * size + col;
};

export { Board, judgeWinner, rowAndColumnToIndex };
