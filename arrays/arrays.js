let items = [2,3,"sweet",false,45];
//Array Methods
//adds an element at the end of an array
items.push(62);
console.log(items);
//adds an element at the start of an array
items.unshift(6.5);
//removes an array at the end 
items.pop();
console.log(items);
//removes an array at the start
items.shift();
console.log(items);

let num = [1,5,10,12,25,30];
//let sorted = num.sort((a,b)=> a -b);
//console.log(num);

//Given an array of x elements ,return an array with each element multiplied by 2
const result = num.map(
    (item)=>{
        return item*2
    }
)
console.log(result);

//concatenation
let a = [1,2,3];
let b = [4,5,6,];
let joined1 = a.concat(b);
console.log({joined1});
let c = [1,...a];
console.log(c);
//array destructuring,storing arrays elements in new variables
let [z,x, ...e]=c
console.log({z});
console.log({x});
console.log({e});

