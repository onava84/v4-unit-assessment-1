//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name. */

//CODE HERE 
const myName = 'Oscar'
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
const faveNum = 20

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
let lovesCode= true

//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/
function sum(num1,num2) {
  return num1 + num2
}
//CODE HERE

//////////////////PROBLEM 5////////////////////
/*
  Create a function called 'lovesCodeChecker' that takes in a single parameter called 'x'. 
  Check to see if 'x' is equal to true. 
  If it is, return a true boolean. 
  If 'x' does not equal true, return a false boolean.
*/

//CODE HERE
function lovesCodeChecker(x) {
  if (x) {
    return true
  } else {
    return false
  }
}

//////////////////PROBLEM 6////////////////////
/*
  Create a function called 'oddChecker' that takes in one parameter, 'num'. 
  Your function should check to see if the parameter is even or odd. 
  If the parameter is odd, return the string: 'the number is odd'. 
  If the number is even, return the string: 'the number is even'.
*/

//CODE HERE
function oddChecker(num) {
  if (num % 2 !== 0) {
    return `the number is odd`
  } else {
    return `the number is even`
  }
}

//////////////////PROBLEM 7////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE
function iLove(name, love) {
  return `${name} loves ${love}`
}


//////////////////PROBLEM 8////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
let colorCopy = faveColors.slice();

//////////////////PROBLEM 9////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push('orange');

//////////////////PROBLEM 10////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
let middleNums = numbers.slice(1,4)

//////////////////PROBLEM 11////////////////////
/*
  Create an object called 'me' that has the following keys: 
  firstName, state, age, and greeter. 
  The value of the firstName key should be your name as a string. 
  The value of the property state should be your current state or providence of
  residence as a string. 
  The value of age should be your age as a number. 
  Last, greeter should be a method that returns the string 
  'Hello! My name is NAMEVALUE and I live in STATEVALUE' 
  with the corresponding values.
  For example: 'Hello! My name is Joseph and I live in Utah"
*/

//CODE HERE
let me = {
  firstName: 'Oscar',
  state: 'Missouri',
  age: 36,
  greeter: function() {
    return `Hello! My name is ${me.firstname} and I live in ${me.state}`
  }
 }

//////////////////PROBLEM 12////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/
function bigOrSmall(arr) {
  let answers = []
  for (let i=0; i < arr.length ; i++) {
    if (arr[i] > 100) {
      answers.push('big')
    } else if (arr[i] <= 100) {
      answers.push('small')
    }
  }
  return answers
}
// CODE HERE

//////////////////PROBLEM 13////////////////////
/* 
  Create a function called 'arrayReverser' that takes in one parameter, 'arr'. 
  Inside of arrayReverser, create an empty array called 'reversed'. 
  Using a for loop, loop over the passed in array IN REVERSE 
  (this means your counter should decrement), and then add each item
  to the 'reversed' array variable you created. 
  Finally, return the 'reversed' array variable.
*/

//CODE HERE
function arrayReverser(arr) {
  let reversed = []
  for (let i = arr.length -1; i >= 0 ; i--) {
    reversed.push(arr[i])
  } 
  return reversed
}

//////////////////PROBLEM 14////////////////////

let global = 'cool string'

function firstFunction() {
  let outer = 'awesome string'
  function innerFunction() {
    let inner = 'fun string'
  }
}

function secondFunction() {
  let functional = 'lonely string'
}

/*
  There are 4 variables above: global, outer, inner and functional
  all within different scopes.
  Given the functions and variables above, edit the arrays
  below to contain only the appropriate variable names
  as strings.
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ['global']

//This array should contain the variable names (as strings) accessible in the firstFunction function.
let firstFunctionScope = ['outer', 'global']

//This array should contain the variable names (as strings) accessible in the innerFunction function.
let innerFunctionScope = ['global', 'inner', 'outer']

//This array should contain the variable names (as strings) accessible in the secondFunction function.
let secondFunctionScope = ['global','functional']


//////////////////PROBLEM 15////////////////////
/* 
  Write a function called firstItem that takes in two parameters: an array and a callback.  
  Invoke the callback passing the first item in the array as an argument.
*/

//CODE HERE
function firstItem(arr, callback) {
  callback(arr[0])
}

//////////////////PROBLEM 16////////////////////
/* 
  Write a function called isItBob that takes in two arguments: an object and a callback function. 
  Check if the object's name property is equal to 'Bob'.  
  If it is, invoke the callback passing in true as an argument.  
  Otherwise, invoke the callback passing in false.
*/

//CODE HERE
function isItBob(obj, callback) {
  if (obj.name === 'Bob') {
    callback(true)
  } else {
    callback(false)
  }
}

//////////////////PROBLEM 17////////////////////
/*
  Write a function called giveMeDoubles that takes in two arguments: an array of numbers and a callback.  
  Use a for loop to double all numbers in the array and invoke the callback, passing in the doubled array.
*/

//CODE HERE
function giveMeDoubles(arr, callback) {
  for (let i=0; i < arr.length ; i++) {
    arr[i] = arr[i] * 2
  }
  callback(arr)
}
//////////////////PROBLEM 18////////////////////
/*
  Write a function called carFactory that takes in three arguments: a make, model, and year.  
  Create a new object using those keys.  
  If the year of the car is after 2018, add a key to the object called isNew and set it to true.  
  Otherwise set it to false.
*/

//CODE HERE
function carFactory(make, model, year) {
  let newCar = {
    make: make,
    model: model,
    year: year
  }
  if (newCar.year > 2018) {
    newCar.isNew = true;
  } else {
    newCar.isNew = false;
  }
  return newCar
}


