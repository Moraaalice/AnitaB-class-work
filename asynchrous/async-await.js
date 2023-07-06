let sucess = true;
let promise = new Promise((resolve,reject)=>{
    if(sucess){
        setTimeout(()=>{resolve("I succeded")})
    }
    else{
        setTimeout(()=> {reject("I failed")})
    }
}
).then(() => {console.log("I will work hard");})
.catch(() => {console.log("I will upskill");})
.finally(() => {console.log("I am worthy");})
console.log({promise});

const student = async()=>{
    let result = await promise;
    console.log({result});
}
student();
