// 1. How to compare two JSON have thwe same properties without order?
// False
var obj1 = { name : "person 1" , age: 5};
var obj2 = {age: 5 ,  name : "person 1" };
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))




// True

var obj5 = { name : "person 1" , age: 5};
var obj6 = { name : "person 1" , age: 5};
console.log(JSON.stringify(obj5)===JSON.stringify(obj6))

