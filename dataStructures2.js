// 14. Generate Random Fractions with JavaScript
function randomFraction() {
 return Math.random();
}

// 15. Create complex multi-dimensional arrays
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested', ['deep', ['deeper',[3,'hat','deepest']]]],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push']
];

// 16. Add items to an object
let foods = {
  apples: 25,
  plums: 28
};
foods.bananas = 13;
foods["strawberries"]= 27;
console.log(foods);

// 17. Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity);
