var opr = prompt("Choose an action:")
var num1 = parseInt(prompt("Number 1:"))
var num2 = parseInt(prompt("Number 2:"))

if (opr == "+") {
    console.log(num1 + num2)
} else if (opr == "-") {
    console.log(num1 - num2)
} else if (opr == "*") {
    console.log(num1 * num2)
} else if (opr == "/") {
    console.log(num1 / num2)
    if (num1 == '') console.warn("You can't divide by zero")
}