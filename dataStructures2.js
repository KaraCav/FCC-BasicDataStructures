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

// 18. Access Property Names with Bracket Notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));

// 19. Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};
delete foods.oranges;
delete foods.plums;
console.log(foods);

// 20. Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  }
};

function isEveryoneHere(obj) {
  if('Alan' in users && 'Jeff' in users && 'Sarah' in users) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isEveryoneHere(users));

// 21. Iterate Through the Keys of an Object with a for...in Statement
function countOnline(usersObj) {
  let onlineUsers = 0;
  for (let user in usersObj) {
    if(usersObj[user].online === true) {
      onlineUsers += 1;
    }
  }
  return onlineUsers;
}
let usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
console.log(countOnline(usersObj));
