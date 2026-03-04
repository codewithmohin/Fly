const nums = [3, 1, 2];
const sorted = nums.toSorted((a, b) => a - b);  // [1, 2, 3], nums unchanged
const reversed = nums.toReversed();  // [2, 1, 3], nums unchanged
