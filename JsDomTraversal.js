// let g1 = document.querySelector(".grandparent");
// let g1 = document.getElementById("lol")
const g1 = Array.from(document.querySelectorAll(".parent"));

// let g1 = Array.from(document.querySelectorAll(".child"));

//from lower to upper
// let g3 = document.querySelector(".child");
// let g4 = g3.closest(".grandparent");

//next sibling
// let g5 = g3.nextElementSibling;

//previousSibling
// let g6 = g5.previousElementSibling;

// const g2 = Array.from(g1.children); 

// g1.forEach(ColorIt);

// function ColorIt(element) {
//     element.style.backgroundColor = "#333";
// }

// ColorIt(g1);


let temp = document.querySelector(".butt");
temp.addEventListener('click', () => {
    g1.style.backgroundColor = "#131";
})


// function changecolor(){
//     g1.style.backgroundColor = "#131";
// }

// console.log(g4);
console.log("lmao");

// document.getElementById("demo").innerHTML = 5 + 6;


