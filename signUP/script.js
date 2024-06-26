
const container = document.querySelector('.container');

const signUpForm = document.querySelector('#signup-form');
const submitBtn = document.querySelector('#submit-btn');
console.log('signup form: ', signUpForm);
const labels = ['signup-name', 'signup-email', 'signup-pwd', 'signup-confirm-pwd']
const userInput = Object(); // object do not necessarily require 'new' keyword

const signupName = document.querySelector('#signup-name')
const signupEmail = document.querySelector('#signup-email')
const signupPwd = document.querySelector('#signup-pwd')
const signupConfirmPwd = document.querySelector('#signup-confirm-pwd');

let formStatus = 0;

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // do not send it to the server

    // validate data
    // function validate(){}

    // storing the data after validation
    // function storeDate(){}

    
    if ((signupPwd.value !== signupConfirmPwd.value) && (signupConfirmPwd.value !== '') && (signupPwd.value !== '')){
        alert('enter-valid pwd');
    }


    formStatus = 1;

    for (const label of labels) {
        console.log(label);
        if (document.querySelector(`#${label}`).value === '') {
            alert(`${label} is invalid. please enter correct details`);
            formStatus = -1; // invalid input
            break; // coming out of loop
            
        }
        else {
            userInput[`${label}`] = document.querySelector(`#${label}`).value;
            document.querySelector(`#${label}`).value = ''; // resetting input values
        }
    }


    console.log(userInput);
        if (formStatus === 1) {
            container.innerHTML = '<h1 style="text-align:center" >Form submitted successfully</h1>';

        }

})
