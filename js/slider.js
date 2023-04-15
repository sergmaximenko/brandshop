function sliderItem() {
	let slider = document.querySelector('.slider').childNodes[3];
	let owl_carousel = document.querySelector('.owl-carousel');
	let items = document.querySelectorAll('.item')
	let newHis = [];
	let num = 16;
	if (localStorage.his) {
		newHis = JSON.parse(localStorage.his);
		let item = JSON.parse(sessionStorage.item);
		if (newHis.length == 16 && poisk()) {
			newHis.pop()
			localStorage.setItem("his", JSON.stringify(newHis));
		}
		if (poisk()) {
			newHis.unshift(item);
			localStorage.setItem("his", JSON.stringify(newHis));
		} else {
			refresh();
			newHis.unshift(item);
			localStorage.setItem("his", JSON.stringify(newHis));
		}
	} else {
		let his = [];
		newHis.push(JSON.parse(sessionStorage.item));
		his.push(JSON.parse(sessionStorage.item))
		localStorage.setItem("his", JSON.stringify(his));
	}

	function poisk() {
		newHis = JSON.parse(localStorage.his);
		let item = JSON.parse(sessionStorage.item);
		for (let i = 0; i < newHis.length; i++) {
			if (newHis[i].id == item.id) {
				return false;
				break;
			} else if (i == newHis.length - 1) {
				return true;
			}
		}
	}

	function refresh() {
		newHis = JSON.parse(localStorage.his);
		let item = JSON.parse(sessionStorage.item);
		for (let i = 0; i < newHis.length; i++) {
			if (newHis[i].id == item.id) {
				newHis.splice(i, 1);
			}
		}
	}
	for (let i = 0; i < newHis.length; i++) {
		items[i].children[1].src = newHis[i].img;
		items[i].children[2].textContent = newHis[i].brand;
		items[i].children[3].children[0].textContent = newHis[i].type;
		items[i].children[3].children[1].textContent = newHis[i].model;
		items[i].children[4].textContent = parseInt(newHis[i].price).toLocaleString() + ' ₽';
	}
	for (let i = 0; i < items.length; i++) {
		if (items[i].children[2].textContent == '') {
			owl_carousel.removeChild(items[i].parentNode)
			num--
		}
	}

	function owlStart() {
		if (num == 0) {
			$('.owl-carousel').owlCarousel({
				loop: true,
				margin: 0,
				number: 1,
				slideBy: 4,
				mouseDrag: false,
				slideTransition: 'ease',
				nav: true,
				navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 4
					}
				}
			})
		} else if (num <= 4) {
			$('.owl-carousel').owlCarousel({
				loop: true,
				margin: 25,
				number: num,
				slideBy: num,
				mouseDrag: false,
				slideTransition: 'ease',
				nav: true,
				navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: num
					}
				}
			})
		} else if (num <= 7) {
			$('.owl-carousel').owlCarousel({
				loop: true,
				margin: 25,
				number: num % 4,
				slideBy: num % 4,
				mouseDrag: false,
				slideTransition: 'ease',
				nav: true,
				navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 4
					}
				}
			})
		} else if (num <= 16) {
			$('.owl-carousel').owlCarousel({
				loop: true,
				margin: 25,
				number: 4,
				slideBy: 4,
				mouseDrag: false,
				slideTransition: 'ease',
				nav: true,
				navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 4
					}
				}
			})
		} else if (num >= 16) {
			$('.owl-carousel').owlCarousel({
				loop: true,
				margin: 25,
				number: 4,
				slideBy: 4,
				mouseDrag: false,
				slideTransition: 'ease',
				nav: true,
				navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 4
					}
				}
			})
		}
	}
	owlStart();

	let tupoMas = [];
	let owl_item = document.querySelectorAll('.owl-item');
	if (newHis.length <= 4) {
		for (let i = 0, a = 0, x = newHis.length - 1; i < owl_item.length; i++, a++, x++) {
			if (a == newHis.length) {
				a = 0;
			}
			tupoMas[x] = newHis[a];
			tupoMas[newHis.length - 2] = newHis[newHis.length - 1];
			owl_item[i].onclick = function () {
				route(`item?${tupoMas[x].id}`)
				sessionStorage.setItem("item", JSON.stringify(tupoMas[x]));
			}
		}
	} else if (newHis.length <= 5) {
		shit(0, 9)
	} else if (newHis.length <= 6) {
		shit(1, 9)
	} else if (newHis.length <= 7) {
		shit(2, 11)
	} else if (newHis.length <= 8) {
		shit(3, 13)
	} else if (newHis.length <= 9) {
		shit(3, 15)
	} else if (newHis.length <= 10) {
		shit(4, 17)
	} else if (newHis.length <= 11) {
		shit(4, 19)
	} else if (newHis.length <= 12) {
		shit(5, 21)
	} else if (newHis.length <= 13) {
		shit(5, 23)
	} else if (newHis.length <= 14) {
		shit(6, 25)
	} else if (newHis.length <= 15) {
		shit(6, 27)
	} else if (newHis.length <= 16) {
		shit(7, 29)
	}

	function shit(q, w) {
		for (let i = 0, a = 0, x = newHis.length - 1, y = i + q; i < owl_item.length; i++, a++, x++, y++) {
			if (a == newHis.length) {
				a = 0;
			}
			tupoMas[x] = newHis[a];
			tupoMas[newHis.length - 2] = newHis[newHis.length - 1];
			owl_item[i].onclick = function () {
				if (y == newHis.length - 3) {
					y = w;
				}
				if (y == newHis.length - 4) {
					w--
					y = w;
				}
				if (y == newHis.length - 5) {
					w--
					y = w;
				}
				route(`item?${tupoMas[y].id}`)
				sessionStorage.setItem("item", JSON.stringify(tupoMas[y]));
			}
		}
	}

}
