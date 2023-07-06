//create an object
let person = {
    name : "Alice",
    age : 20,
    friend:{
        name:"Amanda",
        age: 25,
        myFriend:{
            name:"Susan",
            age:21
        }
    }
}

let person2 = new Object();
person2.name = "Ann";  //Adding properties
person2['age'] = 30;
console.log({person2});
person2.age = 56; //updating properties
console.log({person2})
//Accessing a property
console.log(person.name);
console.log(person.friend.myFriend.name);
console.log(person['friend']['myFriend']['name']);
//deleting 
delete person.age;
console.log({person});
//cloning objects
let person3 = Object.assign(person);
console.log({person3});
//getting keys
let keys = Object.keys({person3});
console.log({keys});
