let sexFilter = document.querySelector('.sexFilter');
let ulSexFilter = document.querySelector('.sexFilter ul');
let typeFilter = document.querySelector('.typeFilter');
let ulTypeFilter = document.querySelector('.typeFilter ul');
let colorFilter = document.querySelector('.colorFilter');
let ulColorFilter = document.querySelector('.colorFilter ul');
let sizeFilter = document.querySelector('.sizeFilter');
let ulSizeFilter = document.querySelector('.sizeFilter ul');

let sex = [];
let category = [];
let color = [];
let size = [];

for(let i=0; i<DataOpen.length; i++){
	for(let key in DataOpen[i]){
		if(key == "sex"){
			sex.push(DataOpen[i].sex)
		} else if(key == "category"){
			category.push(DataOpen[i].category)	
		} else if(key == "color"){
			color.push(DataOpen[i].color)	
		} else if(key == "size"){
			let a = DataOpen[i].size;
			for(let i=0; i<a.length; i++){
				size.push(a[i]);
			}
		}
	}
}


sex = Array.from(new Set(sex)).sort();
category = Array.from(new Set(category)).sort();
color = Array.from(new Set(color)).sort();
size = Array.from(new Set(size));
let sizeUS = [];
let sizeEU = [];
let sizeStr = [];
let sizeNum = [];

function sortSize(a){
	let x = a.slice('');
	if(Number.isNaN(Number(x[0])) == true){
		sizeStr.push(a)
	} else if(x[x.length-2]+x[x.length-1] == "EU"){
		sizeEU.push(a)
	} else if(x[x.length-2]+x[x.length-1] == "US"){
		sizeUS.push(a)
	} else if (typeof Number(x) == 'number'){
		sizeNum.push(a)
	}
}
size.map(sortSize);

sizeUS.sort(function(a, b){
	let x = a.slice('');
	let y = b.slice('');
	return parseInt(x[0]+x[1]) - parseInt(y[0]+y[1]);
});
sizeEU.sort(function(a, b){
	let x = a.slice('');
	let y = b.slice('');
	return parseInt(x[0]+x[1]) - parseInt(y[0]+y[1]);
});

sizeStr.sort(function(a, b){
	if(a == "XS" && b !== "XS"){
		return -1
	} else if(a !== "XS" && b == "XS"){
		return 1
	} else if(a == "S" && b !== "S"){
		return -1
	} else if(a !== "S" && b == "S"){
		return 1
	} else if(a == "M" && b !== "M"){
		return -1
	} else if(a !== "M" && b == "M"){
		return 1
	} else if(a == "L" && b !== "L"){
		return -1
	} else if(a !== "L" && b == "L"){
		return 1
	} else if(a == "XL" && b !== "XL"){
		return -1
	} else if(a !== "XL" && b == "XL"){
		return 1
	} else if(a == "XXL" && b !== "XXL"){
		return -1
	} else if(a !== "XXL" && b == "XXL"){
		return 1
	} else if(a == "ONE SIZE" && b !== "ONE SIZE"){
		return -1
	} else if(a !== "ONE SIZE" && b == "ONE SIZE"){
		return 1
	}   
})
sizeNum.sort(function(a, b){
	return a - b
});

size = [].concat(sizeUS, sizeEU, sizeNum, sizeStr)
sizeUS = "";
sizeEU = "";
sizeStr = "";
sizeNum = "";
let id = 1;
for(let i=0; i<sex.length; i++){
	let li = document.createElement('li');
	ulSexFilter.appendChild(li);
	let input = document.createElement('input');
	li.appendChild(input);
	input.type = "checkbox";
	input.id = id;
	input.className = "custom-checkbox";
	let label = document.createElement('label');
	li.appendChild(label);
	label.setAttribute('for', id);
	label.textContent = sex[i];
	id++
}
for(let i=0; i<category.length; i++){
	let li = document.createElement('li');
	ulTypeFilter.appendChild(li);
	let input = document.createElement('input');
	li.appendChild(input);
	input.type = "checkbox";
	input.id = id;
	input.className = "custom-checkbox";
	let label = document.createElement('label');
	li.appendChild(label);
	label.setAttribute('for', id);
	label.textContent = category[i];
	id++
}
for(let i=0; i<color.length; i++){
	let li = document.createElement('li');
	ulColorFilter.appendChild(li);
	let input = document.createElement('input');
	li.appendChild(input);
	input.type = "checkbox";
	input.id = id;
	input.className = "custom-checkbox";
	let label = document.createElement('label');
	li.appendChild(label);
	label.setAttribute('for', id);
	label.textContent = color[i];
	id++
}
for(let i=0; i<size.length; i++){
	let li = document.createElement('li');
	ulSizeFilter.appendChild(li);
	let input = document.createElement('input');
	li.appendChild(input);
	input.type = "checkbox";
	input.id = id;
	input.className = "custom-checkbox";
	let label = document.createElement('label');
	li.appendChild(label);
	label.setAttribute('for', id);
	label.textContent = size[i];
	id++
}