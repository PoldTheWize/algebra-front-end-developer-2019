const findMax = require(".script");
// npm run test 
/*
test("is ok", () => {
    expect(true).toBe(true);
});
*/

test("findMax is a function", () => {
    expect(findMax).toBeInstanceOf(Function);
});

test("maxNum", () => {
    expect(findMax([1,2,3])).toBe(3);
})