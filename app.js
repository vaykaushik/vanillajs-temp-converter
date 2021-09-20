// Bringing in inputs

const inputFahrenheit = document.getElementById('user-input-fahrenheit');
const inputCelsius = document.getElementById('user-input-celsius');

// Bringing in buttons

const btnFahrenheit = document.getElementById('convert-fahrenheit');
const btnCelsius = document.getElementById('convert-celsius');

// Bringing in results container

const resultContainer = document.querySelector('.results-container');

// Result 

const result = document.querySelector('#result');

// ------------------------------------------------------------------------------------------------ //

btnFahrenheit.addEventListener('click', () => {
    if (inputFahrenheit.value === '') {
        alert('Please enter a value in Fahrenheit!');
    }

    const resultInput = document.getElementById('result');

    const inputF = inputFahrenheit.value;

    let celsiusCalc = (inputF - 32) * 5 / 9;

    resultInput.value = Math.floor(celsiusCalc);

    inputFahrenheit.value = '';
});

btnCelsius.addEventListener('click', () => {
    if (inputCelsius.value === '') {
        alert('Please enter a value in Celsius!');
    }

    const resultInput = document.getElementById('result');

    const inputC = inputCelsius.value;

    let fahrenheitCalc = (inputC * 1.8) + 32;

    resultInput.value = Math.floor(fahrenheitCalc);

    inputCelsius.value = '';
});