const input = document.getElementById("inputBox")
const button = document.getElementById("button");

function reverseString(str) {
    return str.split('').reverse().join('');
}

button.addEventListener("click", function() {
    const value = input.value;
    const reversedValue = reverseString(value);

    if (value == reversedValue) {
        alert(value + " is a palindrome.");
    }
    else {
        alert(value + " is not a palindrome.");
    }
})