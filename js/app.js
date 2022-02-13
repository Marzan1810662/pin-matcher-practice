function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 digit and calling again', pin);
        getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    //console.log(event.target);
    //console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        // console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousCalc = calcInput.value;
        const newNumber = previousCalc + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    //console.log('going to verify');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const failError = document.getElementById('notify-failed');
    if (pin == typedNumbers) {

        successMsg.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMsg.style.display = 'none';
        failError.style.display = 'block';
    }
}