
// import functions and grab DOM elements for addition:
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumButton = document.getElementById('sum-button');
const sumSpan = document.getElementById('sum-span');

// set event listeners to update state and DOM for addition:
sumButton.addEventListener('click', () => {
    const val1 = sumInput1.value;
    const val2 = sumInput2.value;

    const sum = Number(val1) + Number(val2);

    console.log(sum);
    sumSpan.textContent = sum;
});

//--------------------------------------------------------

// import functions and grab DOM elements for subtraction:
const subtInput1 = document.getElementById('subtract-input-1');
const subtInput2 = document.getElementById('subtract-input-2');
const subtButton = document.getElementById('subtract-button');
const subtSpan = document.getElementById('subtract-span');

// set event listeners to update state and DOM for subtraction:
subtButton.addEventListener('click', () => {
    const val3 = subtInput1.value;
    const val4 = subtInput2.value;

    const subt = Number(val3) - Number(val4);

    console.log(subt);
    subtSpan.textContent = subt;
});

//--------------------------------------------------------

// import functions and grab DOM elements for multiplication:
const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multSpan = document.getElementById('mult-span');

// set event listeners to update state and DOM for multiplication:
multButton.addEventListener('click', () => {
    const val5 = multInput1.value;
    const val6 = multInput2.value;

    const mult = Number(val5) * Number(val6);

    console.log(mult);
    multSpan.textContent = mult;
});

//--------------------------------------------------------

// import functions and grab DOM elements for division:
const divInput1 = document.getElementById('divide-input-1');
const divInput2 = document.getElementById('divide-input-2');
const divButton = document.getElementById('divide-button');
const divSpan = document.getElementById('divide-span');

// set event listeners to update state and DOM for division:
divButton.addEventListener('click', () => {
    const val7 = divInput1.value;
    const val8 = divInput2.value;

    const divide = Number(val7) / Number(val8);

    console.log(divide);
    divSpan.textContent = divide;
});