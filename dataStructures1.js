// 1. Use an Array to Store a Collection of Data
let yourArray = [6, "six", false, "the length needs", " to be 5"];

// 2. Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "not B";
console.log(myArray);

// 3. Arr.push() and Arr.unshift()
function mixedNumbers(arr) {
    arr.unshift("I", 2, 'three');
    arr.push(7,'VIII', 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// 4. Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
