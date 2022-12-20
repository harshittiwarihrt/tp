const g1 = document.querySelector(".grandparent");
const p1 = document.querySelector(".parent");
const c1 = document.querySelector(".child");

g1.addEventListener('click', e => {
    console.log(e)
})

p1.addEventListener('click', e => {
    console.log(e)
})

function changeColor(){
    const v2 = document.querySelector(".child");
    v2.style.backgroundColor = "#333";   
}

console.log(g1);
