import { rowAndColumnToIndex } from "./index"

/**
 * Scan board through each column and judge if all elements in the column is same.
 * @param board Board to scan
 * @param size The number of cells in a row
 */
const judgeVertically = (board: Array<string | null>, size: number): string | null => {
    for (let i = 0; i < size; i++) {
        const firstIndex = rowAndColumnToIndex(0, i, size);
        let mark = board[firstIndex];
        for (let j = 0; j < size; j++) {
            const index = rowAndColumnToIndex(j, i, size);
            if (board[index] === null || board[index] !== mark) {
                continue;
            } else {
                return mark;
            }
        }
    }
    return null;
};

export { judgeVertically };