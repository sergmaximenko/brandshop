	let id = 1;

	function filCreaList(ass) {
		ass = DataOpen;
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

//		let sexOn = document.querySelector('.sexFilter').querySelectorAll('.custom-checkbox');
//		let typeOn = document.querySelector('.typeFilter').querySelectorAll('.custom-checkbox');
//		let colorOn = document.querySelector('.colorFilter').querySelectorAll('.custom-checkbox');
//		let sizeOn = document.querySelector('.sizeFilter').querySelectorAll('.custom-checkbox');

//		let sexInx = 0;
//		let typeInx = 0;
//		let colorInx = 0;
//		let sizeInx = 0;

//		for (let b = 0; b < sexOn.length; b++) {
//			if (sexOn[b].checked == true) {
//				sexInx++
//			}
//		}
//		for (let b = 0; b < typeOn.length; b++) {
//			if (typeOn[b].checked == true) {
//				typeInx++
//			}
//		}
//		for (let b = 0; b < colorOn.length; b++) {
//			if (colorOn[b].checked == true) {
//				colorInx++
//			}
//		}
//		for (let b = 0; b < sizeOn.length; b++) {
//			if (sizeOn[b].checked == true) {
//				sizeInx++
//			}
//		}
//
//		if (sexInx != 0 && typeInx == 0 && colorInx == 0 && sizeInx == 0) {
//			ulTypeFilter.replaceChildren();
//			ulColorFilter.replaceChildren();
//			ulSizeFilter.replaceChildren();
//		} else if (sexInx == 0 && typeInx != 0 && colorInx == 0 && sizeInx == 0) {
//			ulSexFilter.replaceChildren();
//			ulColorFilter.replaceChildren();
//			ulSizeFilter.replaceChildren();
//		} else if (sexInx == 0 && typeInx == 0 && colorInx != 0 && sizeInx == 0) {
//			ulSexFilter.replaceChildren();
//			ulTypeFilter.replaceChildren();
//			ulSizeFilter.replaceChildren();
//		} else if (sexInx == 0 && typeInx == 0 && colorInx == 0 && sizeInx != 0) {
//			ulSexFilter.replaceChildren();
//			ulTypeFilter.replaceChildren();
//			ulColorFilter.replaceChildren();
//		}
//		
//		if (sexInx != 0 && typeInx != 0 && colorInx == 0 && sizeInx == 0) {
//			ulColorFilter.replaceChildren();
//			ulSizeFilter.replaceChildren();
//		} else if(sexInx != 0 && typeInx == 0 && colorInx != 0 && sizeInx == 0){
//			ulTypeFilter.replaceChildren();
//			ulSizeFilter.replaceChildren();
//		} else if(sexInx != 0 && typeInx == 0 && colorInx == 0 && sizeInx != 0){
//			ulTypeFilter.replaceChildren();
//			ulColorFilter.replaceChildren();
//		} else if(sexInx == 0 && typeInx != 0 && colorInx != 0 && sizeInx == 0){
//			ulSexFilter.replaceChildren();
//			ulSizeFilter.replaceChildren();
//		} else if(sexInx == 0 && typeInx != 0 && colorInx == 0 && sizeInx != 0){
//			ulSexFilter.replaceChildren();
//			ulColorFilter.replaceChildren();
//		} else if(sexInx == 0 && typeInx == 0 && colorInx != 0 && sizeInx != 0){
//			ulSexFilter.replaceChildren();
//			ulTypeFilter.replaceChildren();
//		}
//		
//		if(sexInx == 0 && typeInx != 0 && colorInx != 0 && sizeInx != 0){
//			ulSexFilter.replaceChildren();
//		} else if(sexInx != 0 && typeInx == 0 && colorInx != 0 && sizeInx != 0){
//			ulTypeFilter.replaceChildren();
//		} else if(sexInx != 0 && typeInx != 0 && colorInx == 0 && sizeInx != 0){
//			ulColorFilter.replaceChildren();
//		} else if(sexInx != 0 && typeInx != 0 && colorInx != 0 && sizeInx == 0){
//			ulSizeFilter.replaceChildren();
//		}
//		
//		if(sexInx == 0 && typeInx == 0 && colorInx == 0 && sizeInx == 0){
//			ulSexFilter.replaceChildren();
//			ulTypeFilter.replaceChildren();
//			ulColorFilter.replaceChildren();
//			ulSizeFilter.replaceChildren();
//		}
		
		
		for (let i = 0; i < ass.length; i++) {
			for (let key in ass[i]) {
				if (key == "sex") {
					sex.push(ass[i].sex)
				} else if (key == "category") {
					category.push(ass[i].category)
				} else if (key == "color") {
					color.push(ass[i].color)
				} else if (key == "size") {
					let a = ass[i].size;
					for (let i = 0; i < a.length; i++) {
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

		function sortSize(a) {
			let x = a.slice('');
			if (Number.isNaN(Number(x[0])) == true) {
				sizeStr.push(a)
			} else if (x[x.length - 2] + x[x.length - 1] == "EU") {
				sizeEU.push(a)
			} else if (x[x.length - 2] + x[x.length - 1] == "US") {
				sizeUS.push(a)
			} else if (typeof Number(x) == 'number') {
				sizeNum.push(a)
			}
		}
		size.map(sortSize);

		sizeUS.sort(function (a, b) {
			let x = a.slice('');
			let y = b.slice('');
			return parseInt(x[0] + x[1]) - parseInt(y[0] + y[1]);
		});
		sizeEU.sort(function (a, b) {
			let x = a.slice('');
			let y = b.slice('');
			return parseInt(x[0] + x[1]) - parseInt(y[0] + y[1]);
		});

		sizeStr.sort(function (a, b) {
			if (a == "XS" && b !== "XS") {
				return -1
			} else if (a !== "XS" && b == "XS") {
				return 1
			} else if (a == "S" && b !== "S") {
				return -1
			} else if (a !== "S" && b == "S") {
				return 1
			} else if (a == "M" && b !== "M") {
				return -1
			} else if (a !== "M" && b == "M") {
				return 1
			} else if (a == "L" && b !== "L") {
				return -1
			} else if (a !== "L" && b == "L") {
				return 1
			} else if (a == "XL" && b !== "XL") {
				return -1
			} else if (a !== "XL" && b == "XL") {
				return 1
			} else if (a == "XXL" && b !== "XXL") {
				return -1
			} else if (a !== "XXL" && b == "XXL") {
				return 1
			} else if (a == "ONE SIZE" && b !== "ONE SIZE") {
				return -1
			} else if (a !== "ONE SIZE" && b == "ONE SIZE") {
				return 1
			}
		})
		sizeNum.sort(function (a, b) {
			return a - b
		});

		size = [].concat(sizeUS, sizeEU, sizeNum, sizeStr)
		sizeUS = "";
		sizeEU = "";
		sizeStr = "";
		sizeNum = "";

		for (let i = 0; i < sex.length; i++) {
//			if (sexInx != 0) {
//				continue
//			}
			let li = document.createElement('li');
			li.classList.add('li_fil');
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
		for (let i = 0; i < category.length; i++) {
//			if (typeInx != 0) {
//				continue
//			}
			let li = document.createElement('li');
			li.classList.add('li_fil');
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
		for (let i = 0; i < color.length; i++) {
//			if (colorInx != 0) {
//				continue
//			}
			let li = document.createElement('li');
			li.classList.add('li_fil');
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
		for (let i = 0; i < size.length; i++) {
//			if (sizeInx != 0) {
//				continue
//			}
			let li = document.createElement('li');
			li.classList.add('li_fil');
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
		refresh()
		filSeaList()
	}
