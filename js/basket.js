let body = document.querySelector('body');
let cont = document.querySelector('.basket .cont');
let basket = document.querySelector('.basket');
let headerIcon = document.querySelectorAll('.icon img');
let itemsBasket;
let keys;
let dataItems;
let dataKeys;
let bas = [];
if (!sessionStorage.getItem("dataItems")) {
	itemsBasket = [];
	keys = [];
} else {

	itemsBasket = JSON.parse(sessionStorage.getItem("dataItems"));
	keys = JSON.parse(sessionStorage.getItem("dataKeys"));
}


headerIcon[1].onclick = function () {
	render(itemsBasket)
}

body.addEventListener('click', hideBasket, true);

function hideBasket() {
	let children = basket.getElementsByTagName("*");
	for (let i = 0; i < children.length; i++) {
		if (event.target == children[i]) {
			return false
		}
	}
	if (event.target == headerIcon[1]) {
		basket.classList.toggle('display0');
		return false
	}
	basket.classList.add('display0');
}

function render(itemsBasket) {
	if (itemsBasket == 0 || !itemsBasket) {
		reRender();
		let basketNul = document.createElement('div');
		basketNul.classList.add('basketNul');
		basket.appendChild(basketNul);
		let h1 = document.createElement('h1');
		h1.textContent = 'Корзина';
		basketNul.appendChild(h1);
		let p = document.createElement('p');
		p.textContent = 'Вы пока что еще ничего не добавили в корзину';
		basketNul.appendChild(p);
		let div = document.createElement('div');
		div.textContent = 'Перейти к новинкам';
		let a = document.createElement('a');
		a.href = "javascript:void(0)";
		a.onclick = function () {
			route('new')
		}
		a.appendChild(div);
		basketNul.appendChild(a);
	} else {
		let summa = 0;
		reRender()

		for (let i = 0; i < itemsBasket.length; i++) {
			let a = i;
			let numId;
			for (let a = 0; a < keys.length; a++) {
				if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size) {
					numId = keys[a].col;
				}
			}
			let item = document.createElement('div');
			item.classList.add('itemBasket');
			cont.appendChild(item);
			let itemImg = document.createElement('div');
			item.appendChild(itemImg);
			let img = document.createElement('img');
			img.src = itemsBasket[i].img;
			img.onclick = function () {
				giper.click();
			}
			itemImg.appendChild(img);

			let info = document.createElement('div');
			item.appendChild(info);
			let brand = document.createElement('h1');
			let giper = document.createElement('a');
			giper.href = 'javascript:void(0)';
			giper.onclick = function () {
				loadItem(itemsBasket[i].id + 'ID')
				route(`item?${itemsBasket[i].id}`)
			}
			giper.appendChild(brand);
			brand.textContent = itemsBasket[i].brand;
			info.appendChild(giper);
			let model = document.createElement('p');
			model.classList.add('info');
			model.textContent = itemsBasket[i].type + " " + itemsBasket[i].model;
			info.appendChild(model);

			let cur = document.createElement('p');
			info.appendChild(cur);
			let num = document.createElement('span');
			num.textContent = numId;
			cur.appendChild(num);
			let plus = document.createElement('span');
			plus.textContent = ' +';
			plus.onclick = function () {
				let sumBasket = document.querySelector('.butBasket div span');
				let priceBasket = parseInt(sumBasket.textContent.replace(",", ".").replace(/[^0-9.]/gim, ""));
				num.textContent = Number(num.textContent) + 1;
				for (let a = 0; a < keys.length; a++) {
					if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size) {
						keys[a].col = Number(num.textContent);
						let span = document.querySelectorAll(".addBasketTwo div span");
						let active = document.querySelector('.sizeActive');
						if (span.length > 0 && active.textContent == keys[a].size) {
							span[2].textContent = keys[a].col
						}

					}
				}
				p.textContent = (parseInt(p.textContent.replace(",", ".").replace(/[^0-9.]/gim, "")) + parseInt(String(itemsBasket[i].price).replace(",", ".").replace(/[^0-9.]/gim, ""))).toLocaleString() + " ₽";
				let ex = document.createElement('span');
				ex.textContent = '+';
				p.appendChild(ex);
				ex.onclick = function () {
					this.parentNode.parentNode.parentNode.parentNode.removeChild(item)

					for (let a = 0; a < keys.length; a++) {
						if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size) {
							keys[a].col = 0
						}
						if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size && keys[a].col <= 0) {
							let span = document.querySelectorAll(".addBasketTwo div span");
							let active = document.querySelector('.sizeActive');
							if (span.length > 0 && active.textContent == keys[a].size) {
								span[2].textContent = 1;
								span[0].click();
							}
							itemsBasket.splice(i, 1);
							keys.splice(a, 1);
							render(itemsBasket, keys)
						}
					}
					if (itemsBasket.length == 0) {
						render([])
					}
				}
				sumBasket.textContent = (priceBasket + parseInt(String(itemsBasket[i].price).replace(",", ".").replace(/[^0-9.]/gim, ""))).toLocaleString() + " ₽";
			}
			let min = document.createElement('span');
			min.textContent = '– ';
			min.onclick = function () {
				let sumBasket = document.querySelector('.butBasket div span');
				let priceBasket = parseInt(sumBasket.textContent.replace(",", ".").replace(/[^0-9.]/gim, ""));
				num.textContent = Number(num.textContent) - 1;
				for (let a = 0; a < keys.length; a++) {
					if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size) {
						keys[a].col = Number(num.textContent);
						let span = document.querySelectorAll(".addBasketTwo div span");
						let active = document.querySelector('.sizeActive');
						if (span.length > 0 && active.textContent == keys[a].size) {
							span[2].textContent = keys[a].col
						}
						if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size && keys[a].col <= 0) {
							this.parentNode.parentNode.parentNode.parentNode.removeChild(item);
							let span = document.querySelectorAll(".addBasketTwo div span");
							let active = document.querySelector('.sizeActive');
							if (span.length > 0 && active.textContent == keys[a].size) {
								span[2].textContent = 1;
								span[0].click();
							}
							itemsBasket.splice(i, 1);
							keys.splice(a, 1);
							render(itemsBasket, keys)
						}
					}
				}
				if (itemsBasket.length > 0) {
					p.textContent = (parseInt(p.textContent.replace(",", ".").replace(/[^0-9.]/gim, "")) - parseInt(String(itemsBasket[i].price).replace(",", ".").replace(/[^0-9.]/gim, ""))).toLocaleString() + " ₽";
					sumBasket.textContent = (priceBasket - parseInt(String(itemsBasket[i].price).replace(",", ".").replace(/[^0-9.]/gim, ""))).toLocaleString() + " ₽";
					let ex = document.createElement('span');
					ex.textContent = '+';
					p.appendChild(ex);
					ex.onclick = function () {
						this.parentNode.parentNode.parentNode.parentNode.removeChild(item)

						for (let a = 0; a < keys.length; a++) {
							if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size) {
								keys[a].col = 0
							}
							if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size && keys[a].col <= 0) {
								let span = document.querySelectorAll(".addBasketTwo div span");
								let active = document.querySelector('.sizeActive');
								if (span.length > 0 && active.textContent == keys[a].size) {
									span[2].textContent = 1;
									span[0].click();
								}
								itemsBasket.splice(i, 1);
								keys.splice(a, 1);
								render(itemsBasket, keys)
							}
						}
						if (itemsBasket.length == 0) {
							render([])
						}
					}
				}
				if (itemsBasket.length == 0) {
					render([])
				}
			}
			cur.appendChild(min);
			cur.appendChild(plus);
			let size = document.createElement('span');
			size.textContent = itemsBasket[i].size;
			cur.appendChild(size);

			let price = document.createElement('div');
			item.appendChild(price);
			let p = document.createElement('p');
			p.textContent = Number(itemsBasket[i].price).toLocaleString() + " ₽";
			for (let i = 0; i < +num.textContent - 1; i++) {
				p.textContent = (parseInt(p.textContent.replace(",", ".").replace(/[^0-9.]/gim, "")) + parseInt(String(itemsBasket[a].price).replace(",", ".").replace(/[^0-9.]/gim, ""))).toLocaleString() + " ₽";
			}
			let ex = document.createElement('span');
			ex.textContent = '+';
			ex.onclick = function () {
				this.parentNode.parentNode.parentNode.parentNode.removeChild(item)

				for (let a = 0; a < keys.length; a++) {
					if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size) {
						keys[a].col = 0
					}
					if (itemsBasket[i].id == keys[a].id && itemsBasket[i].size == keys[a].size && keys[a].col <= 0) {
						let span = document.querySelectorAll(".addBasketTwo div span");
						let active = document.querySelector('.sizeActive');
						if (span.length > 0 && active.textContent == keys[a].size) {
							span[2].textContent = 1;
							span[0].click();
						}
						itemsBasket.splice(i, 1);
						keys.splice(a, 1);
						render(itemsBasket, keys)
					}
				}
				if (itemsBasket.length == 0) {
					render([])
				}
			}
			p.appendChild(ex);
			price.appendChild(p);

			summa = summa + parseInt(p.textContent.replace(",", ".").replace(/[^0-9.]/gim, ""));
		}

		if (itemsBasket.length > 0) {
			let butBasket = document.createElement('div');
			butBasket.classList.add('butBasket')
			basket.appendChild(butBasket);
			let but = document.createElement('div');
			but.textContent = 'Оформить заказ';
			butBasket.appendChild(but);
			let col = document.createElement('div');
			col.textContent = 'Общая стоимость:';
			let price = document.createElement('span');
			price.textContent = summa.toLocaleString() + " ₽";
			col.appendChild(price);
			butBasket.appendChild(col);
		}
	}
	dataItems = JSON.stringify(itemsBasket);
	dataKeys = JSON.stringify(keys);
	sessionStorage.setItem("dataItems", dataItems);
	sessionStorage.setItem("dataKeys", dataKeys);
}

function reRender() {
	let items = document.querySelectorAll('.itemBasket');
	let butBasket = document.querySelectorAll('.butBasket');
	let basketNul = document.querySelectorAll('.basketNul');
	for (let i = 0; i < items.length; i++) {
		items[i].parentNode.removeChild(items[i])
	}
	for (let i = 0; i < butBasket.length; i++) {
		butBasket[i].parentNode.removeChild(butBasket[i])
	}
	for (let i = 0; i < basketNul.length; i++) {
		basketNul[i].parentNode.removeChild(basketNul[i])
	}
}
