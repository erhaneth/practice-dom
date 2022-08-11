// practice with javascript
console.log('DOM PRACTICE');
let temp = 0
let unit = 'Fahrenheit'

const tempConverter = (temp, unit) => {
    if (unit === 'Fahrenheit') {
        return (temp - 32) * 5 / 9
    } else {
        return (temp * 9 / 5) + 32
    }
}

document.addEventListener('DOMContentLoaded', function() {
    //change the resul bacjground color
    document.body.style.backgroundColor = '#f2f2f2'
    //change the text color
    document.body.style.color = '#000'
    //change the font size
    document.body.style.fontSize = '1.5rem'
    //change the font family
    document.body.style.fontFamily = 'sans-serif'

    //  Select the element with the id of 'button-submit'
    document.querySelector('#button-submit').addEventListener('click', function(event) {
        //save the user input to a variable
        const userInput = document.querySelector('#user-input');
        //set global variable temp to user input
        temp = userInput.value;
        console.log(temp);
        let result = tempConverter(temp, unit);

        //select the result element and set the innerText to the user input
        const resultEl = document.querySelector('#result');
        resultEl.innerText = result;
    });  
    //select the element with the id of 'button-clear'
    document.querySelector('#button-clear').addEventListener('click', function(event) {
        //set the innerHTML of the result element to an empty string
        console.log('clear', event.target.value);
        document.querySelector('#result').innerHTML = '';
    });
    //select the radio button with the id of 'radio-fah'
    document.querySelector('#radio-fah').addEventListener('click', function(event){
        // set the global unit variable to 'fahrenheit'
        unit = event.target.value;
        console.log(unit, 'fahrenheit');
    

    })
    //select the radio button with the id of 'radio-cel'
    document.querySelector('#radio-cel').addEventListener('click', function(event){
        unit = event.target.value;
        console.log(unit, );
    })







});
