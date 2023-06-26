const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let prevTwoNumber = 0;
    let prevNumber = 0;
    let i = 1;
    let currentResult = 1;
    for (; i < number; i++) {
        prevTwoNumber = prevNumber;
        prevNumber = currentResult;
        currentResult = prevNumber + prevTwoNumber;
    }
    return currentResult;
};

// Do not edit below this line
module.exports = fibonacci;
