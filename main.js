// practice with javascript
console.log('DOM PRACTICE');

document.addEventListener('DOMContentLoaded', function() {
    //  Select the element with the id of 'button-submit'
    document.querySelector('#button-submit').addEventListener('click', function() {
        //save the user input to a variable
        const userInput = document.querySelector('#user-input').value;
        console.log(userInput);
    });  
    //select the element with the id of 'button-clear'
    document.querySelector('#button-clear').addEventListener('click', function() {
        console.log('BUTTON CLEARED');
    });
    //select the radio button with the id of 'radio-fah'
    document.querySelector('#radio-fah').addEventListener('click', function(){
        console.log('RADIO FAH');
    })
    //select the radio button with the id of 'radio-cel'
    document.querySelector('#radio-cel').addEventListener('click', function(){
        console.log('RADIO CEL');
    })







});
