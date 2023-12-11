/*
const change = document.querySelector(".change")
const div = document.querySelector(".box")
const button = document.querySelector(".run")

button.addEventListener("click",function(){
    div.classList.toggle("error");
});
change.addEventListener("click",function(){
    div.classList.remove("error");
}); 


const div = document.querySelector(".box")
const btnSwitch = document.querySelector(".run");
let toggle = true;

btnSwitch.addEventListener('click', function() {
    if(toggle) {
        div.classList.remove("error");
    } else {
        div.classList.add("error");
    }

    toggle = !toggle;
});
*/

const toggleButton = document.querySelector('.run');
const box = document.querySelector('.box');
 
toggleButton.addEventListener('click', function() {
  box.classList.toggle('error');
});
 
const box2 = document.querySelector('.box2');
const btn = document.querySelector('.animate')
 
btn.addEventListener('click', function() {
  box2.classList.toggle('blinker');
  box2.classList.add('font')
});