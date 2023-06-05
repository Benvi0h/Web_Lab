/*let users = [{
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Mohan'
  },
  {
    id: 3,
    name: 'Kumar'
  },
  {
    id: 4,
    name: 'Karthik'
  },
  {
    id: 5,
    name: 'Kiran'
  }
]
let userNames = users.map(function(user) {
  console.log(user.name)
});*/

/*//Examples of set(), get(), entries()
const user1 = new Map();
user1.set('id', 1);
user1.set('name', 'Mohan');

console.log(user1.get('id'));

let iterator = user1.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
*/
//Map vs Object Performance
let obj = {}, map = new Map();
let users = ["John", "mohan", "kumar", "tg", "Ram", "laksh"];

for (let i = 0; i < users.length; i++) {
  obj[i]=users[i];
  map.set(i, users[i]);
}
let result;
console.log(obj);
console.log(map);
console.time('Object'); 
result = obj.hasOwnProperty("moh"); 
console.timeEnd('Object');
console.time('Map'); 
result = map.has("moh"); 
console.timeEnd('Map');

//iteration over a map collection
/*let userIDs = new Map();
let user1 = {name: 'John'}, user2 = {name: 'Mohan'}, user3 = {name: 'Kumar'};
userIDs.set(user1, 1) .set(user2, 2) .set(user3, 3);

// Method 1
for (let [name, id] of userIDs) {
  console.log(name);
  console.log(id);
}

// Method 2
userIDs.forEach((id, name) => {
  console.log(name);
  console.log(id);
});*/

//To convert an object to a map
/*let obj = {
    'name': 'John',
    id: 1,
  }
  
let map = new Map(Object.entries(obj));
console.log(map.get('name'));*/

