const palindromes = function (str) {

    const processedStr = str.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(" ","");
    console.log(processedStr);
    const strLength = processedStr.length;
    const loopLength = Math.floor(strLength / 2);

    for (let i = 0; i < loopLength; i++) {
        if (processedStr[i] !== processedStr[strLength - i - 1]) {
            return false;
        }
    }
    return true;
};

palindromes("Hey, find us!");

// Do not edit below this line
module.exports = palindromes;
