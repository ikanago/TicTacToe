import { rowAndColumnToIndex } from "./index";

const judgeWinner = (
    board: Array<string | null>,
    size: number
): string | null => {
    const winnerVerticalJudge = judgeVertically(board, size);
    if (winnerVerticalJudge) {
        return winnerVerticalJudge;
    }
    const winnerHorizontalJudge = judgeHorizontally(board, size);
    if (winnerHorizontalJudge) {
        return winnerHorizontalJudge;
    }
    const winnerDiagonalJudge = judgeDiagonally(board, size);
    if (winnerDiagonalJudge) {
        return winnerDiagonalJudge;
    }
    return null;
};

/**
 * Scan board through each column and judge if all elements in the column is same.
 * @param board Board to scan
 * @param size The number of cells in a row
 */
const judgeVertically = (
    board: Array<string | null>,
    size: number
): string | null => {
    for (let i = 0; i < size; i++) {
        const firstIndex = rowAndColumnToIndex(0, i, size);
        let mark = board[firstIndex];
        let isMatched = true;
        for (let j = 0; j < size; j++) {
            const index = rowAndColumnToIndex(j, i, size);
            if (board[index] === null || board[index] !== mark) {
                isMatched = false;
                continue;
            }
        }
        if (isMatched) {
            return mark;
        }
    }
    return null;
};

/**
 * Scan board through each row and judge if all elements in the row is same.
 * @param board Board to scan
 * @param size The number of cells in a row
 */
const judgeHorizontally = (
    board: Array<string | null>,
    size: number
): string | null => {
    for (let i = 0; i < size; i++) {
        const firstIndex = rowAndColumnToIndex(i, 0, size);
        let mark = board[firstIndex];
        let isMatched = true;
        for (let j = 0; j < size; j++) {
            const index = rowAndColumnToIndex(i, j, size);
            if (board[index] === null || board[index] !== mark) {
                isMatched = false;
                continue;
            }
        }
        if (isMatched) {
            return mark;
        }
    }
    return null;
};

/**
 * Scan board through each diagonal and judge if all elements in the diagonal is same.
 * @param board Board to scan
 * @param size The number of cells in a row
 */
const judgeDiagonally = (
    board: Array<string | null>,
    size: number
): string | null => {
    const firstIndexLeft = rowAndColumnToIndex(0, 0, size);
    let mark = board[firstIndexLeft];
    let isMatched = true;
    for (let i = 0; i < size; i++) {
        const index = rowAndColumnToIndex(i, i, size);
        if (board[index] === null || board[index] !== mark) {
            isMatched = false;
            continue;
        }
    }
    if (isMatched) {
        return mark;
    }

    const firstIndexRight = rowAndColumnToIndex(0, size - 1, size);
    mark = board[firstIndexRight];
    isMatched = true;
    for (let i = 0; i < size; i++) {
        const index = rowAndColumnToIndex(i, size - i - 1, size);
        if (board[index] === null || board[index] !== mark) {
            isMatched = false;
            continue;
        }
    }
    if (isMatched) {
        return mark;
    }
    return null;
};

export { judgeWinner, judgeHorizontally, judgeVertically, judgeDiagonally };
