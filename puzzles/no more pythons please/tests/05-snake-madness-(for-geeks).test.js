/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const input = ["80 80", "................................................................................", "................................................................................", "...o....................................................o.......................", "...|....................................................|.......................", "...|....................................................|.......................", "...|....................................................|.......................", "...|.................o->................................|.......................", "...|....................................................|.......................", "...*----->..............................................|.......................", "........................................................|.......................", "........................................................|.......................", ".................................................o----->|.......................", "........................................................v.......................", "................................................................................", "................................................................................", "o-----------------------------------*...........................................", "............................o------*|...........................................", "......................^............||...........................................", "......................|............||...........................................", "....................o-*............||...........................................", "...................................||...........................................", "...................................||...........................................", "...................................||...........................................", "...................................||...........................................", "...................................||...........................................", "...................................||...........................................", "...................................v|...........................................", "....................................|...........................................", "....................................|............................^^^^^^.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|.................*-----*....||||||.........", "....................................|.................|*---*|....||||||.........", "....................................|.................||o..||....||||||.........", "....................................|.................|||..||....||||||.........", "....................................|.................v|*--*|....||||||.........", "....................................|..................*----*....||||||.........", "....................................|............................||||||.........", "....................................|............................||||||.........", "....................................|............................o|||||.........", "................<-----------------o.|.............................|||||.........", "....................................|.............................|||||.........", "..................................o.|.............................|||||.........", "^.................................|.|.............................||o||.........", "|.................................|.|.............................||.||.........", "|.................................|.|.*------------*..............||.||.........", "|.................................|.|.|*---------->|..............||.||.........", "|..........o--------------------->|.|.||...........|..............||.||.........", "|....o--------------------------->|.|.||...........|..............||.||.........", "|..o----------------------------->|.|.||...........|..............o|.||.........", "*--------------------------------o|.|.||...........|...............|.||.........", "..................................|.|.||...........|...............|.||.........", "..................................|.|.||...........|...............|.||.........", "..................................|.|.||...........|...............|.||.........", "..................................|.|.||...........|...............|.||.........", "..................................|.|.v|...........|...............|.o|.........", "..................................|.*--*...........|...............|..|.........", "..................................*----------------*...............o..|.........", ".............................................................o--------*.........", ""];
const output = ["123", "1"];

const readline = () => {
	return input.shift();
};
// Mocking user input and capturing console.log output

test("05 Snake Madness (for Geeks)", () => handleTest(output, solve, readline));

