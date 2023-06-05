/*let events = new Set();
let event1 = { type: "concert", day: "Saturday" };
let event2 = { type: "book launch", day: "Wednesday"};
let event3 = { type: "conference", day: "Thursday"};
let event4 = { type: "meet up", day: "Monday" };
let event5 = { type: "meet up", day: "Monday" };
events.add(event1);
events.add(event2);
events.add(event3);
events.add(event4);
events.add(event1);
for (let item of events) {
  console.log(item);
}
// Checking if a value is contained in the set
console.log(events.has(event2));
// Deleting a value from the set
events.delete(event3);
for (let value of events) {
	console.log(value);
}
// Can we add the same value twice? 
let cities = new Set();
let city1 = { name: "London" };
let city2 = { name: "Barcelona"};
let city3 = { name: "Milan"};
cities.add(city1);
cities.add(city2);
cities.add(city1);
cities.add(city3);
cities.forEach((city, cities) => {
  console.log(city);
})
console.log(cities.size);
/*cities.clear();
cities.forEach((city, cities) => {
    console.log(city);
  })*/

let set = new Set([9, 15, "a string", {"objectKey": "objectValue"}]);
set.add(true);
let arr = [...set];
arr.push(15);
console.log(arr); 

let arr2 = [9, 15, 15, "a string", {"objectKey": "objectValue"}];
let arr2converted = [...new Set(arr2)];
console.log(arr2converted);

console.log(typeof arr);
console.log(typeof arr2converted);
//we have duplicate items in an array and we want to filter them out
/*let users = ["John", "Murray", "Jane", "Jane", "Anne"];
function unique(users) {
	return Array.from(new Set(users));
}
console.log(unique(users));

let set1 = new Set(users);
let arrFromSet = [...set1];
console.log(arrFromSet);*/
/*
let arr = [], set = new Set();
let users = ["John", "Mohan", "Kumar", "Karthik", "Kiran", "John"];
for (let i = 0; i < users.length; i++) {
  arr.push(users[i]);
  set.add(users[i]);
}
let result;

console.time('Array'); 
result = arr.indexOf("Mohan") !== -1; 
console.timeEnd('Array');

console.time('Set'); 
result = set.has("Mohan"); 
console.timeEnd('Set');*/
