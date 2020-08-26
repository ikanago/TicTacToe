const { judgeVertically } = require("./judgeBoard");

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
