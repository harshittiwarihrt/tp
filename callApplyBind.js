
const obj = {
    namee:'Rohit',
    lastNamee:'Jiwnani',
}

function fullName (loc){
    namee='Harshit'
    console.log(this.namee + " " + this.lastNamee + " " + 'from ' + loc)
}

const obj2 = {
    namee:'Jyoti',
    lastNamee:'Asrani',
}

const obj3 = {
    namee:'Shreya',
    lastNamee:'Singh',
}


var myFullName = fullName.bind(obj3, "Raipur")
const obj23 = {
    namee:'Jyoti',
    lastNamee:'Asrani',
}

const obj32 = {
    namee:'Shreya',
    lastNamee:'Singh',
}

myFullName()

//call = function borrowing
//Apply = []

//bind = reference