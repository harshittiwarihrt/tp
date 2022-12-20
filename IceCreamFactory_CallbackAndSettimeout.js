//URL for the reference is below

//https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        //we can call as many functions in here as we want.
        call_production();
    },1000)

    
 }

 let production = () => {
    console.log("Production has started");

    setTimeout(() => {
        console.log("The fruit has been chopped");

        setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

            setTimeout(()=>{
                console.log("The machine was started")

                setTimeout(()=> {
                    console.log(`IceCream was placed on ${stocks.holder[0]}`)

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was added as toppings`)

                        setTimeout(()=>{
                            console.log("The ice-cream has been served")
                        }, 2000)
                    }, 3000)
                }, 2000)
            }, 1000)
        }, 1000)
    }, 2000)
 }

 order(0, production);