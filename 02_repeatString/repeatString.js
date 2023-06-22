const repeatString = function(string, number) {
    let resultString = "";

    if (number < 0) {
       return resultString = "ERROR";
    }

    let i = 0;
    
    for (; i < number; i++) {
        resultString += string;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
