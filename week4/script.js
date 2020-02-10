// Removing space in a string, before and after, not in a sentence.

const anotherName = ' Burt';
console.log(anotherName.length);

const trimmedName = anotherName.trim();
console.log(trimmedName.length);

const space = ' ';
console.log(space.length);

console.log(space.trim().length);



const firstName = document.querySelector('#firstName');

firstName.addEventListener('keyup', checkLength);

function checkLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;

    if(valueLength > 0) {
        console.log('The input has a value');
    } else {
        console.log('The input does not have a value')
    }
}


// updated with trim() inside the function
const firstName = document.querySelector('#firstName');

firstName.addEventListener('keyup', checkLength);

function checkLength(event) {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;

    if(valueLength > 0) {
        console.log('The input has a value');
    } else {
        console.log('The input does not have a value')
    }
}

// regular expressions 
//https://regex101.com/

const string = 'All the stars are mine';
const regex = /stars/;
const isExisting = regex.test(string);
console.log(isExisting); // true

