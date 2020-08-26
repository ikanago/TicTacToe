const { rowAndColumnToIndex } = require("./index");

describe("Convert row and column pair to index", () => {
    const size = 3;

    test("(1, 2) -> 5", () => {
        const index = rowAndColumnToIndex(1, 2, size);
        expect(index).toEqual(5);
    });

    test("(0, 0) -> 0", () => {
        const index = rowAndColumnToIndex(0, 0, size);
        expect(index).toEqual(0);
    });
});
