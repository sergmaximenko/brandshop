	let ulItem = document.querySelectorAll('.menu_mob ul ul');
	let tubItem = document.querySelectorAll('.mob_li');
	let str_mob = document.querySelectorAll('.fa-angle-right');

	let hieght1 = ulItem[0].offsetHeight;
	let hieght2 = ulItem[1].offsetHeight;
	let hieght3 = ulItem[2].offsetHeight;
	let hieght4 = ulItem[3].offsetHeight;


	for (let i = 0; i < ulItem.length; i++) {
		ulItem[i].classList.add("display0");
	}

	let a = 0,
		b = 0,
		c = 0,
		d = 0;

	for (let i = 0; i < tubItem.length; i++) {
		tubItem[i].onclick = function () {
			if (i == 0) {
				if (a == 0) {
					let pusk = setInterval(function () {
						ulItem[0].style.height = a + "px";
						ulItem[0].classList.remove("display0");
						a = a + hieght1 / 10;
						if (a >= hieght1) {
							ulItem[0].style.height = hieght1 + "px";
							clearInterval(pusk);
						}
					}, 1)
					str_mob[0].style.transform = 'rotate(-90deg)';
				} else if (a >= hieght1) {
					a = 0;
					let reverse = setInterval(function () {
						ulItem[0].style.height = hieght1 - a + "px";
						a = a + hieght1 / 10;
						if (a >= hieght1) {
							ulItem[0].style.height = 0 + "px";
							a = 0;
							clearInterval(reverse);
						}
					}, 1)
					str_mob[0].style.transform = 'none';
				}
			} else if (i == 1) {
				if (b == 0) {
					let pusk = setInterval(function () {
						ulItem[1].style.height = b + "px";
						ulItem[1].classList.remove("display0");
						b = b + hieght2 / 40;
						if (b >= hieght2) {
							ulItem[1].style.height = hieght2 + "px";
							clearInterval(pusk);
						}
					}, 1)
					str_mob[2].style.transform = 'rotate(-90deg)';
				} else if (b >= hieght2) {
					b = 0;
					let reverse = setInterval(function () {
						ulItem[1].style.height = hieght2 - b + "px";
						b = b + hieght2 / 40;
						if (b >= hieght2) {
							ulItem[1].style.height = 0 + "px";
							b = 0;
							clearInterval(reverse);
						}
					}, 1)
					str_mob[2].style.transform = 'none';
				}
			} else if (i == 2) {
				if (c == 0) {
					let pusk = setInterval(function () {
						ulItem[2].style.height = c + "px";
						ulItem[2].classList.remove("display0");
						c = c + hieght3 / 20;
						if (c >= hieght3) {
							ulItem[2].style.height = hieght3 + "px";
							clearInterval(pusk);
						}
					}, 1)
					str_mob[3].style.transform = 'rotate(-90deg)';
				} else if (c >= hieght3) {
					c = 0;
					let reverse = setInterval(function () {
						ulItem[2].style.height = hieght3 - c + "px";
						c = c + hieght3 / 20;
						if (c >= hieght3) {
							ulItem[2].style.height = 0 + "px";
							c = 0;
							clearInterval(reverse);
						}
					}, 1)
					str_mob[3].style.transform = 'none';
				}
			} else if (i == 3) {
				if (d == 0) {
					let pusk = setInterval(function () {
						ulItem[3].style.height = d + "px";
						ulItem[3].classList.remove("display0");
						d = d + hieght4 / 20;
						if (d >= hieght4) {
							ulItem[3].style.height = hieght4 + "px";
							clearInterval(pusk);
						}
					}, 1)
					str_mob[4].style.transform = 'rotate(-90deg)';
				} else if (d >= hieght4) {
					d = 0;
					let reverse = setInterval(function () {
						ulItem[3].style.height = hieght4 - d + "px";
						d = d + hieght4 / 20;
						if (d >= hieght4) {
							ulItem[3].style.height = 0 + "px";
							d = 0;
							clearInterval(reverse);
						}
					}, 1)
					str_mob[4].style.transform = 'none';
				}
			}

		}
	}

	let menu_mob = document.querySelector('.menu_mob');
	let burg = document.querySelector('.burg');
	let xmark = document.querySelector('.fa-xmark');
	let m_shadow = document.querySelector('.m_shadow');
	let left_menu = window.getComputedStyle(menu_mob).left;
	burg.onclick = function () {
		menu_mob.style.left = 0 + 'px';
		menu_mob.style.opacity = 1;
		body.style.overflow = "hidden";
		m_shadow.style.opacity = 0.7;
		m_shadow.style.zIndex = 1000;
	}

	xmark.onclick = function () {
		menu_mob.style.left = left_menu;
		menu_mob.style.opacity = 0;
		body.style.overflow = "inherit";
		m_shadow.style.opacity = 0;
		setTimeout("m_shadow.style.zIndex = 0", 200);
	}

	if (window.innerWidth < window.innerHeight) {
			let srt = document.querySelector('.srt');
			srt.querySelector('h1').textContent = "Сортировка";
	} else {
		//не выполнять
	}
