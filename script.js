//A Simple Javascript Calculator//


let operation = prompt('What operation do you want to perform: + , - , * or / : ')
let firstNumber = parseInt(prompt('Enter a number : '))
let secondNumber = parseInt(prompt('Enter another number : '))

if (operation == '+') {
    alert(firstNumber + secondNumber);
    console.log(firstNumber + secondNumber);
    
}
else if (operation == '-') {
    alert(firstNumber - secondNumber);
    console.log(firstNumber - secondNumber)
}
else if (operation == '*') {
    alert(firstNumber * secondNumber);
    console.log(firstNumber * secondNumber)
}
else if (operation == '/') {
    alert(firstNumber / secondNumber);
    console.log(firstNumber / secondNumber)
}
else{
    console.log('invalid operation');

}