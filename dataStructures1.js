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

// LESSON NOTES 1: splice() takes up to 3 params. It both modifies the original array AND returns the removed items
// on the other hand, slice() copies/extracts, elements to a new array, leaving the original array untouched
// qffslice param 2 isn't number to take, it's up until which index

// 5. Remove Items Using splice() to Return 10
function sumOfTen(arr) {
  arr.splice(1,2);
  return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// 6. Add Items Using splice()- Splice first 2 params remove items; can replace using the 3rd+ param
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond')
  return arr;
} 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

// 7. Copy Array Items Using slice()
function forecast(arr) {
let newArr = arr.slice(2,4);
  return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// 8. Copy an Array with the Spread Operator
// return the original array to the new array a set # of times
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// 9. Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
console.log(spreadOut());

//10. Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
 return arr.indexOf(elem) > -1 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 11. Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) < 0){
    newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [19, 1, 9]], 3)); // Returns [[19,1,9]]
