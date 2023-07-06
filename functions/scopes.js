let a = 20;//Global variable

function add(b){
    console.log(a+b);
    let c = 30;//Local variable
    console.log(a+b+c);
}
add(20);

function greet(){
    let hello = "Hey";
    function talk(){
        let greeting = "Hello there";
        console.log(`${hello} ${greeting}`);
    }
    talk();
}
greet();

