import { judgeDiagonally, judgeWinner,judgeHorizontally, judgeVertically } from "./judgeBoard";

describe("Judge winner scanning board vertically", () => {
    test("X wins (1)", () => {
        const board = ["X", "O", null, "X", null, null, "X", "O", null];
        const winner = "X";
        expect(judgeVertically(board, 3)).toMatch(winner);
    });

    test("X wins (2)", () => {
        const board = [null, null, "X", "O", null, "X", "O", null, "X"];
        const winner = "X";
        expect(judgeVertically(board, 3)).toMatch(winner);
    });

    test("X wins (3)", () => {
        const board = ["O", "X", null, null, "X", null, "O", "X", null];
        const winner = "X";
        expect(judgeVertically(board, 3)).toMatch(winner);
    });

    test("No winner", () => {
        const board = ["X", "O", null, null, null, null, "X", "O", null];
        expect(judgeVertically(board, 3)).toBeFalsy();
    });
});

describe("Judge winner scanning board horizontally", () => {
    test("X wins (1)", () => {
        const board = ["X", "X", "X", null, "O", null, null, null, "O"];
        const winner = "X";
        expect(judgeHorizontally(board, 3)).toMatch(winner);
    });

    test("X wins (2)", () => {
        const board = [null, null, null, "O", null, "O", "X", "X", "X"];
        const winner = "X";
        expect(judgeHorizontally(board, 3)).toMatch(winner);
    });

    test("X wins (3)", () => {
        const board = ["O", null, null, "X", "X", "X", null, null, "O"];
        const winner = "X";
        expect(judgeHorizontally(board, 3)).toMatch(winner);
    });

    test("No winner", () => {
        const board = ["X", "X", null, "O", null, null, "X", "O", null];
        expect(judgeHorizontally(board, 3)).toBeFalsy();
    });
});

describe("Judge winner scanning board diagonally", () => {
    test("X wins (1)", () => {
        const board = ["X", "O", "X", null, "X", null, "O", null, "X"];
        const winner = "X";
        expect(judgeDiagonally(board, 3)).toMatch(winner);
    });

    test("X wins (2)", () => {
        const board = [null, null, "X", null, "X", null, "X", "O", "O"];
        const winner = "X";
        expect(judgeDiagonally(board, 3)).toMatch(winner);
    });

    test("No winner", () => {
        const board = ["X", "X", null, "O", "X", null, "X", "O", "O"];
        expect(judgeDiagonally(board, 3)).toBeFalsy();
    });
});

describe("Judge winner", () => {
    test("X wins (1)", () => {
        const board = ["X", "O", null, "X", null, null, "X", "O", null];
        const winner = "X";
        expect(judgeWinner(board, 3)).toMatch(winner);
    });

    test("O wins (1)", () => {
        const board = ["O", "O", "O", null, "X", "X", null, "X"];
        const winner = "O";
        expect(judgeWinner(board, 3)).toMatch(winner);
    });

    test("O wins (2)", () => {
        const board = ["O", "X", "O", null, "X", "O", null, "X", "O"];
        const winner = "X";
        expect(judgeWinner(board, 3)).toMatch(winner);
    });

    test("No winner", () => {
        const board = [null, "O", null, "X", null, null, "X", "O", null];
        expect(judgeVertically(board, 3)).toBeFalsy();
    });
});
