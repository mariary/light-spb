var slider = document.querySelector('.slider');
var left=document.querySelector('.slider-button-left')
var right=document.querySelector('.slider-button-right')

right.addEventListener('click', function() {
    slider.style.transform = 'translate(-102%)';  
  });
  
left.addEventListener('click', function() {
    slider.style.transform = 'translate(0%)';  
   
  });


var one=document.querySelector('.slider-button-one')
var two=document.querySelector('.slider-button-two')
var first_block=document.querySelector('.first_block')
var second_block=document.querySelector('.second_block')

one.addEventListener('click', function() {
  two.classList.remove('choosen');
  one.classList.add('choosen');
  first_block.classList.remove('hidden');
  second_block.classList.add('hidden');
  });

two.addEventListener('click', function() {
  one.classList.remove('choosen');
  two.classList.add('choosen');
  second_block.classList.remove('hidden');
  first_block.classList.add('hidden');
  });