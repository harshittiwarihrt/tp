let namew = {
    firstName :'Harshit',
    lastName:'Tiwari'
}

function fullName(){
    console.log(this.firstName + ' ' + this.lastName)
}

myFullName = fullName.bind(namew)
myFullName();

Function.prototype.Mybind =  function(...args){
    obj = this;
    params = args.slice(1)
    return function(...args2){
        obj.call(args[0], ...params, ...args2)
    }
}


myFullName2 = fullName.Mybind(namew)
myFullName2()

