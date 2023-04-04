const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
let p = document.querySelector('p');
let number = 0;

const zero = document.createElement('p');
p.textContent = 0;

increase.addEventListener('click', function(){
    increase.setAttribute('style', 'color: darkgreen; background-color: lightgrey;');
    decrease.setAttribute('style', 'background-color: #EFEFEF');
    number++;
    p.textContent = number;
    p.setAttribute('style', 'color: darkgreen;')
}) 

decrease.addEventListener('click', function(){
    decrease.setAttribute('style', 'color: red; background-color: lightgrey;');
    increase.setAttribute('style', 'background-color: #EFEFEF');
    number--;
    p.textContent = number;
    p.setAttribute('style', 'color: red;')
}) 

reset.addEventListener('click', function(){
    increase.setAttribute('style', 'background-color: #EFEFEF');
    decrease.setAttribute('style', 'background-color: #EFEFEF');
    number = 0; 
    p.textContent = number;
    p.setAttribute('style', 'color: black;')
})
