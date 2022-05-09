let imgTub = document.querySelectorAll(".imgTub div img");
let imgWin = document.querySelectorAll(".imgWin img");
let tubSize = document.querySelectorAll(".size div");
let active = document.querySelector('.sizeActive')
let addBasket = document.querySelector(".addBasket h2");
let tubItem = document.querySelectorAll(".info div");
let ulItem = document.querySelectorAll(".info ul");
let addBasketTwo = document.querySelector(".addBasketTwo");
let addBasketOne = document.querySelector(".addBasket");
	




for(let i=0; i<imgTub.length; i++){
	imgTub[i].onclick = function(){
		let active = document.querySelector('.activeImg')
		if(active){
			active.classList.remove('activeImg');
		}
		imgTub[i].parentNode.classList.add('activeImg');
		imgWin[i].scrollIntoView({behavior: "smooth"});
	}
}

addBasket.textContent = active.textContent;

for(let i=0; i<tubSize.length; i++){
	tubSize[i].onclick = function(){
		let active = document.querySelector('.sizeActive')
		if(active){
			active.classList.remove('sizeActive');
		}
		tubSize[i].classList.add('sizeActive');
		addBasket.textContent = tubSize[i].textContent;
				addBasketOne.classList.remove('opacity0');
				setTimeout(function(){addBasketOne.classList.remove('display0');}, 250);
				addBasketTwo.classList.remove('opacity1');
				setTimeout(function(){addBasketTwo.classList.add('display0');}, 250);

	}
}		
	let tub = 0;
	addBasket.parentNode.onclick = function(){
		tub++
		if(tub >= 2){
			tub = 0;
			e.stopPropagation();
		}
		let tuta = this;
		tuta.style.zIndex = '-1';
		addBasketTwo.style.zIndex = '1';
		tuta.classList.add('opacity0');
		
		setTimeout(function(){tuta.classList.add('display0');}, 250)
		addBasketTwo.classList.add('opacity1');
		
		setTimeout(function(){addBasketTwo.classList.toggle('display0');}, 250)
		let span = document.querySelectorAll(".addBasketTwo div span");
		span[0].onclick = function(){
			if(parseInt(span[1].textContent) == 1){
				tuta.classList.remove('opacity0');
				setTimeout(function(){tuta.classList.remove('display0');}, 250);
				addBasketTwo.classList.remove('opacity1');
				setTimeout(function(){addBasketTwo.classList.toggle('display0');}, 250);
				let sizeActive = document.querySelector('.sizeActive');
				for(let i=0; i<keys.length; i++){
				if(keys[i].size == sizeActive.textContent){
					itemsBasket.splice(i,1);
					keys.splice(i,1);
					render(itemsBasket, keys);
				}
				}
			} else{
				let a = parseInt(span[1].textContent) - 1;
				let num = document.querySelector(".num");
				num.textContent = a;
			}
			let sizeActive = document.querySelector('.sizeActive');
			for(let i=0; i<keys.length; i++){
				if(keys[i].size == sizeActive.textContent){
					keys[i].col = keys[i].col - 1;
				}
			}
	render(itemsBasket, keys);
		}
		span[3].onclick = function(){
			let a = parseInt(span[1].textContent) + 1;
			let num = document.querySelector(".num");
			num.textContent = a;
			let sizeActive = document.querySelector('.sizeActive');
			for(let i=0; i<keys.length; i++){
				if(keys[i].size == sizeActive.textContent){
					keys[i].col = keys[i].col + 1;
				}
			}
		}
		setTimeout(function(){tub = 0;}, 350)
		
	}	
	
			
  	

				let hieght1 = ulItem[0].offsetHeight;	
				let hieght2 = ulItem[1].offsetHeight;
				let hieght3 = ulItem[2].offsetHeight;

				for(let i=0; i<ulItem.length;i++){
					ulItem[i].classList.add("display0");
				}	

				let a = 0, b = 0, c = 0;


for(let i=0; i<tubItem.length; i++){
	tubItem[i].onclick = function(){
		if(i == 0){
			if(a == 0){
				let pusk = setInterval(function(){
					ulItem[0].style.height = a + "px";
					ulItem[0].classList.remove("display0");
					a=a+hieght1/10;
					if(a >= hieght1){
					ulItem[0].style.height = hieght1 + "px";	
					clearInterval(pusk);
					}}, 1)
			} else if(a >= hieght1){
					a = 0;
					let reverse = setInterval(function(){
					ulItem[0].style.height = hieght1 - a + "px";
					a=a+hieght1/10;
					if(a >= hieght1){
					ulItem[0].style.height = 0 + "px";
					a = 0;
					clearInterval(reverse);
					}}, 1)	
			}
		} else if(i == 1){
			if(b == 0){
				let pusk = setInterval(function(){
					ulItem[1].style.height = b + "px";
					ulItem[1].classList.remove("display0");
					b=b+hieght2/40;
					if(b >= hieght2){
					ulItem[1].style.height = hieght2 + "px";
					clearInterval(pusk);
					}}, 1)
			} else if(b >= hieght2){
					b = 0;
					let reverse = setInterval(function(){
					ulItem[1].style.height = hieght2 - b + "px";
					b=b+hieght2/40;	
					if(b >= hieght2){
					ulItem[1].style.height = 0 + "px";
					b = 0;
					clearInterval(reverse);
					}}, 1)	
			}
		} else if(i == 2){
			if(c == 0){
				let pusk = setInterval(function(){
					ulItem[2].style.height = c + "px";
					ulItem[2].classList.remove("display0");
					c=c+hieght3/20;	
					if(c >= hieght3){
					ulItem[2].style.height = hieght3 + "px";
					clearInterval(pusk);
					}}, 1)
			} else if(c >= hieght3){
					c = 0;
					let reverse = setInterval(function(){
					ulItem[2].style.height = hieght3 - c + "px";
					c=c+hieght3/20;		
					if(c >= hieght3){
					ulItem[2].style.height = 0 + "px";
					c = 0;
					clearInterval(reverse);
					}}, 1)	
			}
		}
		
	}
}