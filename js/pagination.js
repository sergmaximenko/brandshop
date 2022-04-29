let notesOnPage = 9;
let sort = 'normal';
let DataOpen = JSON.parse(sessionStorage.getItem("brand"));
let none = 0;
let tabs;
function pagi(){

	
let pagination = document.querySelector('.pagination');
let content = document.querySelector('.content');
pagination.innerHTML = '';



let countOfItems = Math.ceil(DataOpen.length / notesOnPage);

for(let i=1; i<=countOfItems; i++){
	let li = document.createElement('li');
	li.textContent = i;
	pagination.appendChild(li);
}

tabs = document.querySelectorAll('.pagination li');
showPage(tabs[0]);
if(tabs.length == 1){
	tabs[0].classList.add('opacity0')
}
for(let i =0; i<tabs.length; i++){
	tabs[i].onclick=function(){
		showPage(tabs[i]);
	}
}


if(countOfItems > 5){
	let left = document.createElement('i');
	left.className='fa fa-angle-left faPag display0';
	left.ariaHidden=true;
	pagination.insertBefore(left, pagination.firstChild);
	let right = document.createElement('i');
	right.className='fa fa-angle-right faPag';
	right.ariaHidden=true;
	pagination.appendChild(right);
	
	let fa = document.querySelectorAll('.faPag');
	
	fa[1].onclick = function(){
	let active = document.querySelector('.pagination li.active');
	showPage(tabs[+active.innerHTML]);
	}
	fa[0].onclick = function(){
	let active = document.querySelector('.pagination li.active');
	showPage(tabs[+active.innerHTML - 2]);
}
}






	function showPage(item){
		if(item){
			let active = document.querySelector('.pagination li.active');
		if(active){
			active.classList.remove('active');
		}
		item.classList.add('active');
		let pageNum = +item.innerHTML;
		
		if(countOfItems > 5){
			let fa = document.querySelectorAll('.faPag');
			if(tabs[tabs.length-1].className == 'active'){
			fa[1].classList.add('display0');
			} else if(tabs[tabs.length-1].className !== 'active' && fa[1]){
				fa[1].classList.remove('display0');
			}
			if(tabs[0].className == 'active' && fa[0]){
				fa[0].classList.add('display0');	
			} else if (tabs[0].className !== 'active' && fa[0]){
				fa[0].classList.remove('display0');
			}
		}
		
		if(countOfItems>=5){
			
		for(let i =0; i<tabs.length; i++){
			tabs[i].classList.add('display0');
		}
		if(pageNum==1){
			tabs[pageNum-1].classList.remove('display0');
			tabs[pageNum].classList.remove('display0');
			tabs[pageNum+1].classList.remove('display0');
			tabs[pageNum+2].classList.remove('display0');
			tabs[pageNum+3].classList.remove('display0');
		} else if(pageNum==2){
			tabs[pageNum-2].classList.remove('display0');
			tabs[pageNum-1].classList.remove('display0');
			tabs[pageNum].classList.remove('display0');
			tabs[pageNum+1].classList.remove('display0');
			tabs[pageNum+2].classList.remove('display0');
		} else if(pageNum>tabs.length - 1){
			tabs[pageNum-5].classList.remove('display0');
			tabs[pageNum-4].classList.remove('display0');
			tabs[pageNum-3].classList.remove('display0');
			tabs[pageNum-2].classList.remove('display0');
			tabs[pageNum-1].classList.remove('display0');
		}else if(pageNum>tabs.length - 2){
			tabs[pageNum-4].classList.remove('display0');
			tabs[pageNum-3].classList.remove('display0');
			tabs[pageNum-2].classList.remove('display0');
			tabs[pageNum-1].classList.remove('display0');
			tabs[pageNum].classList.remove('display0');
		}  else if(pageNum>2){
			tabs[pageNum-3].classList.remove('display0');
			tabs[pageNum-2].classList.remove('display0');
			tabs[pageNum-1].classList.remove('display0');
			tabs[pageNum].classList.remove('display0');
			tabs[pageNum+1].classList.remove('display0');
		}
		}
		
		
		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;
		let massive;
		if(sort == 'normal'){
			massive = DataOpen.slice().reverse().slice(start, end);
		} else if(sort == '+'){
			massive = DataOpen.slice().sort(min).slice(start, end);
		} else if(sort == '-'){
			massive = DataOpen.slice().sort(min).reverse().slice(start, end);
		} else if(sort == 'new'){
			massive = DataOpen.slice().reverse().slice(start, end);
		} else if(sort == 'old'){
			massive = DataOpen.slice(start, end);
		}
		let notes = massive;
		curItems = notes.length;
		content.innerHTML = '';
			if( none == 1){
				none = 0;
				return
			} else{
			for(let i=0; i<notes.length; i++){
			let item = document.createElement('div');
			item.className = 'item';
			content.appendChild(item);
			let shadow = document.createElement('div');
			shadow.className = 'shadow';
			item.appendChild(shadow);
				let qwe;
			shadow.onmouseover = function(){
				setTimeout(function(){qwe = setInterval(function(){item.style.zIndex = 102;}, 1)}, 1)
			}
			shadow.onmouseout = function(){
				clearInterval(qwe)
				setTimeout(function(){item.style.zIndex = 99;}, 100)
			}
			let img = document.createElement('img');
			img.src = notes[i].img;
			item.appendChild(img);
			
			let h1 = document.createElement('h1');
			h1.textContent = notes[i].brand;
			item.appendChild(h1);
			
			let p = document.createElement('p');
			item.appendChild(p);
			
			let type = document.createElement('span');
			type.textContent = notes[i].type;
			p.appendChild(type);
			let model = document.createElement('span');
			model.textContent = notes[i].model;
			p.appendChild(model);
			
			let h3 = document.createElement('h3');
			h3.textContent = Number(notes[i].price).toLocaleString()+" ₽";
			item.appendChild(h3);
			let marTop = h3.offsetTop;
				
			let sizeWrap = document.createElement('div');
			sizeWrap.className = 'size_wrap';
			sizeWrap.style.marginTop = 	marTop + 30 + 'px';
			let size = document.createElement('div');
			size.className = 'size';
				
			for(let a =0; a<notes[i].size.length; a++){
				let div = document.createElement('div');
				div.textContent = notes[i].size[a];
				size.appendChild(div);
				
				div.onclick = function(){
				let key = {};
				let newObj = {};
				for(let key in notes[i]){
					newObj[key] = notes[i][key];
				}
				newObj.size = div.textContent
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
			}
				
					
			}
			shadow.appendChild(sizeWrap);
			sizeWrap.appendChild(size);
		}	
		}
	} else{
		DataOpen = [''];
		none = 1;
		pagi();
	}
		}
}
pagi();

