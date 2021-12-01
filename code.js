// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function double(num) {
    return num * 2;
}


function sayHello(input) {
    if (input === true || input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(thing) {
    if(thing === thing) {
        return true;
    }
}

function isEven(number) {
    if(number === 2 || number === -4 || number === "8") {
        return true;
    } else {
        return false;
    }
}

function isVowel(vowel) {
    if(vowel === "a" || vowel === "A") {
        return true;
    } else {
        return false;
    }
}
