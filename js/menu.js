let but = document.querySelectorAll("nav li");
let menu = document.querySelectorAll(".open_menu");


for(let i = 0; i<but.length; i++){
but[i].onmouseover = function(){
	menu[i].classList.toggle('display0');
}
but[i].onmouseout = function(){
	menu[i].classList.toggle('display0');
}
menu[i].onmouseover = function(){
	menu[i].classList.remove('display0');
}
menu[i].onmouseout = function(){
	menu[i].classList.add('display0');
}
}


