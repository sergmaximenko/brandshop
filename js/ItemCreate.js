let thisItem = JSON.parse(sessionStorage.item);


let tubImg = document.querySelector('.imgTub');
let div = document.createElement('div');
let img = document.createElement('img');
img.src = thisItem.img
let shadowItem = document.createElement('div');
shadowItem.classList.add('shadow');
div.appendChild(img);
div.appendChild(shadowItem);
tubImg.appendChild(div);
for(let key in thisItem){
	if(key == 'photo'){
		for(let i=0; i<thisItem.photo.length; i++){
			let div = document.createElement('div');
			let img = document.createElement('img');
			img.src = thisItem.photo[i];
			let shadowItem = document.createElement('div');
			shadowItem.classList.add('shadow');
			div.appendChild(img);
			div.appendChild(shadowItem);
			tubImg.appendChild(div);
		}
	}
}

let winImg = document.querySelector('.imgWin');
div = document.createElement('div');
div.classList.add('image-zoom');
img = document.createElement('img');
img.src = thisItem.img;
div.appendChild(img);
let block = document.createElement('div');
block.classList.add('image-zoom-block');
div.appendChild(block);
winImg.appendChild(div);
for(let key in thisItem){
	if(key == 'photo'){
		for(let i=0; i<thisItem.photo.length; i++){
			div = document.createElement('div');
			div.classList.add('image-zoom');
			img = document.createElement('img');
			img.src = thisItem.photo[i];
			div.appendChild(img);
			let block = document.createElement('div');
			block.classList.add('image-zoom-block');
			div.appendChild(block);
			winImg.appendChild(div);
		}
	}
}

let optionSize = document.querySelector('.optionSize');
let h1 = document.createElement('h1');
h1.textContent = thisItem.brand;
optionSize.appendChild(h1);
let h2 = document.createElement('h2');
h2.textContent = thisItem.type + " " + thisItem.model;
optionSize.appendChild(h2);
let h3 = document.createElement('h3');
h3.textContent = 'Доступные размеры';
optionSize.appendChild(h3);

let sizeWrap = document.createElement('div');
sizeWrap.classList.add("sizeWrap");
let size = document.createElement('div');
size.classList.add('size');
sizeWrap.appendChild(size);
optionSize.appendChild(sizeWrap);


sortSizeAll(thisItem.size)


let priceH1 = document.querySelector('.price h1');
priceH1.textContent = Number(thisItem.price).toLocaleString() + " ₽";


let infoItem = document.querySelector('.infoItem');

for(let i=0; i<thisItem.info.length; i++){	
let li = document.createElement('li');
let span = document.createElement('span');
li.textContent = thisItem.info[i];
span.textContent = '–';
li.prepend(span);
infoItem.appendChild(li);
}

let addBasketWrap = document.querySelector('.addBasketWrap');
addBasketWrap.onclick = function(){
	let sizeActive = document.querySelector('.sizeActive');
				let key = {};
				let newObj = {};
				for(let key in thisItem){
					newObj[key] = thisItem[key];
				}
				newObj.size = sizeActive.textContent;
					let indx = 0;
					if(itemsBasket.length > 0){
						for(let b=0; b<itemsBasket.length; b++){
							if(JSON.stringify(itemsBasket[b]) == JSON.stringify(newObj)){
								itemsBasket.splice(b,1,newObj);	
								for(let a = 0; a<keys.length; a++){
									if(keys[a].id == newObj.id && keys[a].size == newObj.size){
										keys[a].col = keys[a].col + 1
									}
								}
							} else{
								indx++
							}	
						}
						if(indx == itemsBasket.length){
							key.id = newObj.id;
							key.size = newObj.size;
							key.col = 1;
							keys.push(key)
							itemsBasket.push(newObj);
						}
					} else{
						key.id = newObj.id;
						key.size = newObj.size;
						key.col = 1;
						keys.push(key)
						itemsBasket.push(newObj);
					}
					render(itemsBasket, keys);
	
	
	let num = document.querySelector('.num');
	for(let i=0; i<keys.length; i++){
		if(keys[i].size == sizeActive.textContent){
			num.textContent = keys[i].col;
		}
	}
			}


let allItem = document.querySelector('.allItem div');
allItem.textContent = 'Больше от' + " " + thisItem.brand;
let allItemA = document.querySelector('.allItemA');
let parse = thisItem.brand.replace(/\s/g, '');
let str = '/js/data/' + parse + '.json';
allItemA.onclick = function(){
	loadBrand(str);
}






