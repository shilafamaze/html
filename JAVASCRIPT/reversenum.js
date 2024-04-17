let inputNumber = 564;
let sumOfOddDigits = 0;

while (inputNumber > 0) {
    let digit = inputNumber % 10;
    if (digit % 2 !== 0) {
        sumOfOddDigits += digit;
    }
    inputNumber = Math.floor(inputNumber / 10);
}

console.log(sumOfOddDigits);
