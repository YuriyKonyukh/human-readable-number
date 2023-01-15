module.exports = function toReadable (num) {
    let ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
    }

    let tens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
    }

    let dozens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
    }

    let prefix = {
        1: 'hundred'
    }

    let numText = "";

    function convertNum(num) {
        let absNum = Math.abs(num);

        return numText.trim();
    }

    numText += threeDigitConvert(num);

    function threeDigitConvert(num) {
        let currentNumText = "";

        if (num < 100) {
            currentNumText += twoDigitConvert(num);
            return currentNumText;
        }

        currentNumText += ones[num.toString().charAt(0)];
        currentNumText += ` ${prefix[1]} `;

        if (num.toString().substr(1) !== "00") {
            currentNumText += twoDigitConvert(parseInt(num.toString().substr(1)));
        }

        return currentNumText;
    }

    function twoDigitConvert(num) {
    let currentNumText = "";

    if (num < 10) {
        return ones[num]
    } 

    if (num in tens) {
        currentNumText += tens[num];
    } else {
        currentNumText += dozens[num.toString().charAt(0)];
        if (num.toString().charAt(1) !== "0") {
            currentNumText += " " + ones[num.toString().charAt(1)];
        }
    }
    return currentNumText;
    }

    let finalNumText = convertNum(num);

    return finalNumText;
}
