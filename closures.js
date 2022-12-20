//functions bind with its lexical environment forms a closure

function d(){
    let somwthing = 'somethinggggg'
    function a(someValue){
        let a1 = 10
        let b1=10
        return function b (){
            console.log(a1, someValue, somwthing)
        }
        
    }
}




let c = a(20)
c()


// console.log('hello')



