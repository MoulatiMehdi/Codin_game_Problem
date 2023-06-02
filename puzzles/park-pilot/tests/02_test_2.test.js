/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["74", "1111", "1111", "1111", "1111", "0111", "1111", "1111", "1111", "1111", "1011", "0010", "0011", "0111", "0111", "1111", "1101", "1100", "1000", "1010", "0010", "0011", "0111", "0111", "0001", "0001", "1000", "1100", "1110", "1110", "1100", "0100", "0001", "0011", "0011", "0011", "0011", "1010", "1100", "1100", "1000", "1000", "0000", "0001", "1011", "1011", "0001", "0001", "0100", "0100", "0101", "1101", "1100", "1000", "1010", "1010", "0010", "0011", "0011", "0101", "0101", "0101", "0100", "1100", "1000", "1010", "1010", "1010", "0010", "0011", "0101", "0101", "0101", "0101", "0100"];
const output = ["7", "51R", "52R", "67L", "79L"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(output, solve, readline));

