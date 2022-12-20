//URL for the reference is below

//https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open = false;

 let order = (myFun, time) => {

    return new Promise(( resolve, reject ) => {
        if (is_shop_open){
            setTimeout(()=>{
                resolve(myFun());
            },time);
        }
        else {
            reject(console.log("Our shop is closed"));
        }
    }) 
 }
 order(funName, 1000)
 //

 order(()=>{
     console.log(`${stocks.Fruits[0]} was selected`)
 }, 2000)

 //if you dont write "return" it'll not work
 .then(()=>{
     return order(()=> {
         console.log("Production has started")
     }, 0000)
 })

 .then( ()=>{
     return order(()=>{
         console.log("The fruit was chopped")
     }, 2000)
 })

 .then( ()=>{
     return order(()=>{
         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
     }, 1000)
 })

 .then(()=>{
     return order(()=>{
         console.log("The machine was started")
     }, 1000)
 })

 .then(()=>{
     return order(()=>{
         console.log(`ice-cream placed on ${stocks.holder[0]}`)
     }, 2000)
 })

 .then(()=>{
     return order(()=>{
         console.log(`${stocks.toppings[0]} was placed on ice-cream`)
     }, 3000)
 })

 .then(()=>{
     return order(()=>console.log("Ice-cream was served"), 2000)
 })

 .catch(()=>{
     console.log("Customer left")
 })

 .finally(()=>{
    console.log("end of day")
  })