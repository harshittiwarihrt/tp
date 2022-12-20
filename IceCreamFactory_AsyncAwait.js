//URL for the reference is below

//https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open = false;

function time(ms){
    return new Promise((resolve, reject) =>{
        if (is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("Shop is closed"))
        }
    });
}



async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]}`)

        await time(0000)
        console.log("Start the Production")

        await time(2000)
        console.log("The fruit was chopped")

        await time(2000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)

        await time(1000)
        console.log("The machine was started")

        await time(2000)
        console.log(`ice-cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was placed on ice-cream`)

        await time(2000)
        console.log("Ice-cream was served")
    }

    catch(error){
        console.log("Customer left", error)
    }

    finally{
        console.log("Shop is closed, day ended")
    }
}

kitchen()