let sum = function (a, b){
    console.log( a+b)
}

let Sum2 = sum.bind(this, 2)
function sum(a=2, b=5){
    console.log("7")
}
Sum2(3)

//through bind
//through closures

