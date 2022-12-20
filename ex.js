



// let order = ()=>{
//     setTimeout(() => {
//         //order lera hu
//         production()
//     }, 12000);
    
// }

// async function order(){
//     try{
//         await abc
//     }

//     catch(error){
//         console.log("There is no such function")
//     }

//     finally{
//         console.log("lmao")
//     }
// }

let toppings_choice = ()=>{
    return new Promise ( (resolve, reject)=>{
        setTimeout(() => {
            resolve(console.log("Which topping would you like?"))
        }, 15);
    } )
}

async function kitchen(){
    console.log("A")
    console.log("B")
    await toppings_choice()//dusra kaam
    console.log("C")
    console.log("D")
}

kitchen()

console.log("Cleaning the table")
setTimeout(()=>console.log('hahaha'), 2999)
console.log("Taking others orders")
console.log("Doing the dishes")
console.log("Taking others orders")

