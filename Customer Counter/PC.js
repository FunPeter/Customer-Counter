// let countEl = document.getElementById("count-el");

// let count = 0;
// function increment (){
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// };
let saveEl = document.getElementById("save-el");
let countEL = document.getElementById("count-el");

let count = 0;
function increment(){
    count += 1
    countEL.textContent = count
}; 
function save(){
    let counStr = count + " - ";
    saveEl.textContent += counStr
    countEL.textContent = 0
    count = 0
};
 


