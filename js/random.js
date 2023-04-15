let slider = document.querySelector('.slider').childNodes[3];
let mbot = document.querySelector('.mbot').childNodes[3];
let itemsSlider;

let timerId = setInterval(function () {
	random()
	if (Array.isArray(itemsSlider)) {
		random()
		clearInterval(timerId)
	}
}, 1);


function random() {
	loadPage('AllBRAND');
	if (itemsSlider) {
		let slider1;
		let slider2;

		function getRandomInt(max) {
			return (Math.floor(Math.random() * max)) + '';
		}
		let indx1 = Array(16);
		let indx2 = Array(16);
		for (let i = 0; i < indx1.length;) {
			let rndm = getRandomInt(itemsSlider.length);
			if (indx1.indexOf(rndm) == -1) {
				indx1[i] = rndm;
				i++
			}
		}
		for (let i = 0; i < indx2.length;) {
			let rndm = getRandomInt(itemsSlider.length);
			if (indx2.indexOf(rndm) == -1) {
				indx2[i] = rndm;
				i++
			}
		}
		slider1 = itemsSlider.filter(function (el) {
			for (let i = 0; i < indx1.length; i++) {
				if (el.id == indx1[i]) {
					return el;
				}
			}
		})
		slider2 = itemsSlider.filter(function (el) {
			for (let i = 0; i < indx2.length; i++) {
				if (el.id == indx2[i]) {
					return el;
				}
			}
		})
		for (let i = 0, a = 0; i < 32; i++, a++) {
			let item = slider.children[0].children[0].children[i].children[0].children[0];
			item.onclick = function () {
				route(`item?${slider1[a].id}`)
				sessionStorage.setItem("item", JSON.stringify(slider1[a]));
			}
			item.children[1].src = slider1[a].img;
			item.children[2].textContent = slider1[a].brand;
			item.children[3].children[0].textContent = slider1[a].type;
			item.children[3].children[1].textContent = slider1[a].model;
			item.children[4].textContent = parseInt(slider1[a].price).toLocaleString() + ' ₽';
			if (a == slider1.length - 1) {
				a = -1
			}
		}
		for (let i = 0, a = 0; i < 32; i++, a++) {
			let item = mbot.children[0].children[0].children[i].children[0].children[0];
			item.onclick = function () {
				route(`item?${slider2[a].id}`)
				sessionStorage.setItem("item", JSON.stringify(slider2[a]));
			}
			item.children[1].src = slider2[a].img;
			item.children[2].textContent = slider2[a].brand;
			item.children[3].children[0].textContent = slider2[a].type;
			item.children[3].children[1].textContent = slider2[a].model;
			item.children[4].textContent = parseInt(slider2[a].price).toLocaleString() + ' ₽';
			if (a == slider2.length - 1) {
				a = -1
			}
		}
	}
};
