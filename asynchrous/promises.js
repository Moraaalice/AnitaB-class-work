let sucess = true;
let promise = new Promise((resolve,reject)=>{
    if(sucess){
        resolve("I succeded");
    }
    else{
        reject("I am still looking for job");
    }
}
).then(() => {console.log("I will work hard");})
.catch(() => {console.log("I will upskill");})
.finally(() => {console.log("I am worthy");})
console.log({promise});
