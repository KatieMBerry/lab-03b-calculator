// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { addTwoNums, subtTwoNums, multiTwoNums, divTwoNums } from '../mathUtils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


const test1 = QUnit.test;

test('should return 7 if passed 3 & 4', (expect) => {
    const expected = 7;
    const firstNum = 3;
    const secondNum = 4;

    const actual = addTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});

const test2 = QUnit.test;

test('should return 3 if passed 7 & 4', (expect) => {
    const expected = 3;
    const firstNum = 7;
    const secondNum = 4;

    const actual = subtTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});

const test3 = QUnit.test;

test('should return 15 if passed 5 & 3', (expect) => {
    const expected = 15;
    const firstNum = 5;
    const secondNum = 3;

    const actual = multiTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});

const test4 = QUnit.test;

test('should return 6 if passed 12 & 2', (expect) => {
    const expected = 6;
    const firstNum = 12;
    const secondNum = 2;

    const actual = divTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});