//Strings
let a = "hello";
a[0]="h";
console.log(a);
//using charAt
let names = "Alice";
let names2 = names.charAt(1);
console.log(names2);
//concating
let fruit = "pineapple";
let fruit2 = "is a good fruit";
let fruit3 = fruit.concat(" ",fruit2);
console.log(fruit3);
//replacing a string
let fruits = fruit.replace("pineapple","mango");
console.log(fruits);
//splitting
let fruits2 = fruit.split("");
console.log(fruits2);
//slicing
let cities = ("I love nakuru");
let cities2 = cities.slice(1,6);
console.log(cities2);
//substring
let statement = ("I love, javaScript,javascript is a good language");
let statement2 = statement.substring(2,8);
console.log(statement2);
//substr
let statement3 = statement.substr(2,8);
console.log(statement3);
//pad start
let word = "pepea";
let word2 = word.padStart(9,"x ");
console.log(word2);
//pad end
let word3 = word.padEnd(8, "a ");
console.log(word3);
//charCodeAt
let word4 = word.charCodeAt(4);
console.log(word4);
//
let text = "alice moraa";
function texts(text){
    return text.trim().split(" ");
}
console.log(texts("alice moraa"));
//
let numb = [12,34,56,78,4,1,45,49];
let numb2 = numb.sort(function(a,b){return a-b})
console.log(numb2);
//Remove the spaces found in a string
let naming = " alice moraa ";
let naming2 = naming.trim();
console.log(naming2.length);
//Sort an array from lowest to highest
let numArr = [10,30,56,8,4,2,90,56];
let numArr2 = numArr.sort(function(a,b){return a-b});
console.log(numArr2);
//Calculate the sum of numbers within an array
let arrNum = [5,6,7,10,34,56];
//
function citi(arrCit){
    let arrCit = ["nakuru","nairobi","kisumu"];
    let arrCit2 = arrCit.reverse();
    console.log(arrCit);
}
//Create a function that filters out negative numbers
function digits (digit){
    let digit4 = [10,4,-3,-1,34,78,-9];
    if(digit4 <= -1 ){
        console.log(digit);
    }
}
let shoppingCart = ["milk","coffee","tea","honey"];
shoppingCart.unshift("meat");
console.log(shoppingCart);
//
//Create a function that prints all even numbers from 0 – 10
function even(){
    for(let e=0;e<=10;e++){
        if(e%2==0){
            console.log(e)
        }
    }
}
even()
//Create a function that prints all even numbers from 0 – 100
function numPrint(){
    for(let x=0;x<=100;x++){
        if(x%2==0){
            console.log(x)
        }
    }

}
numPrint()














