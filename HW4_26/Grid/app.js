var colors =["orange", "white","red","blue","green","brown"];
var currentColor = 0;
window.addEventListener("click", colorChange);
function colorChange(){
    let list = document.querySelectorAll('.circles');
  

list.forEach(item =>
    item.style.backgroundColor = colors[currentColor]);


if(currentColor===5){
currentColor=0};
currentColor++;

};

