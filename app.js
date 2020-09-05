import { handlesSumClick, handlesSubtClick, handlesMultiClick, handlesDivClick} from './handlers.js';

// import functions and grab DOM elements:

const sumButton = document.getElementById('sum-button');
const subtButton = document.getElementById('subtract-button');
const multiButton = document.getElementById('mult-button');
const divButton = document.getElementById('divide-button');

// set event listeners to update state and DOM :
sumButton.addEventListener('click', handlesSumClick);
subtButton.addEventListener('click', handlesSubtClick);
multiButton.addEventListener('click', handlesMultiClick);
divButton.addEventListener('click', handlesDivClick);