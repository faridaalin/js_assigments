// question 1
const firstName = document.querySelector('#firstName');
firstName.addEventListener('keyup', logLength);

function logLength(event) {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;

    if(valueLength >= 2) {
        console.log(valueLength)
    } else {
        console.log('The input has less than two values')
    }
}

const form = document.querySelector('#contactForm');
form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstName');
    const firstNameError = document.querySelector('#firstNameError');
    const firstNameValue = firstName.value;
    console.log(firstNameValue)

    if(checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = 'none';
    } else {
        firstNameError.style.display = 'block';
    }

}


function checkInputLength(value) {
    const trimmedValue = value.trim();

    if(trimmedValue.length >= 2) {
        return true;
    } else {
        return false;
    }
} 
