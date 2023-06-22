const sumAll = function(number1, number2) {
    let result = 0;
    let i = number1;
    let n = number2;

    if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }

    if ((typeof number1) !== 'number' || (typeof number2) !== 'number') {
        return "ERROR";
    }

    if (i <= n) {
        for (; i <= n; i++) {
            result += i;
        }
    } else {
        for (; i >= n; i--) {
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
