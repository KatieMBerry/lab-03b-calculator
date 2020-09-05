import { addTwoNums, subtTwoNums, multiTwoNums, divTwoNums } from './mathUtils.js';

//Add two nums -------------------------------
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumSpan = document.getElementById('sum-span');

export function handlesSumClick() {
    const val1 = sumInput1.value;
    const val2 = sumInput2.value;

    const sum = addTwoNums(val1, val2);

    sumSpan.textContent = sum;
}

//Subtract two nums -------------------------------
const subtInput1 = document.getElementById('subtract-input-1');
const subtInput2 = document.getElementById('subtract-input-2');
const subtSpan = document.getElementById('subtract-span');

export function handlesSubtClick() {
    const val1 = subtInput1.value;
    const val2 = subtInput2.value;

    const subt = subtTwoNums(val1, val2);

    subtSpan.textContent = subt;
}

//Mutiply two nums -------------------------------
const multiInput1 = document.getElementById('mult-input-1');
const multiInput2 = document.getElementById('mult-input-2');
const multiSpan = document.getElementById('mult-span');

export function handlesMultiClick() {
    const val1 = multiInput1.value;
    const val2 = multiInput2.value;

    const multi = multiTwoNums(val1, val2);

    multiSpan.textContent = multi;
}

//Divide two nums -------------------------------
const divInput1 = document.getElementById('divide-input-1');
const divInput2 = document.getElementById('divide-input-2');
const divSpan = document.getElementById('divide-span');

export function handlesDivClick() {
    const val1 = divInput1.value;
    const val2 = divInput2.value;

    const divide = divTwoNums(val1, val2);

    divSpan.textContent = divide;
}