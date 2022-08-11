// practice with javascript
console.log('Hello World');

document.addEventListener('DOMContentLoaded', function() {
    //  Select the element with the id of 'button-submit'
    document.querySelector('#button-submit').addEventListener('click', function() {
        console.log('BUTTON CLICKED');
    });  
    //select the element with the id of 'button-clear'
    document.querySelector('#button-clear').addEventListener('click', function() {
        console.log('BUTTON CLEARED');
    });






});
