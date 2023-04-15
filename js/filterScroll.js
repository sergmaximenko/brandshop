let ulFilter = document.querySelectorAll('.fil ul');
let q = 0,
	w = 0,
	e = 0,
	r = 0,
	t = 0;

function filScrol() {
	let tubsFilter = document.querySelectorAll('.fil_div');
//	let pFilter = document.querySelectorAll('.fil p');
	let filter = document.querySelector('.filter');
	let filterShadow = document.querySelector('.filShadow');
	let curItems;

	let span2 = document.querySelectorAll('.span2')
	let hieghtUl = [];


	for (let i = 0; i < ulFilter.length; i++) {
		ulFilter[i].classList.remove("display0");
		hieghtUl.push(ulFilter[i].offsetHeight);
		if(hieghtUl[i]>=284){
			ulFilter[i].style.overflow = 'auto';
		} else{
			ulFilter[i].style.overflow = 'hidden';
		}
		if (ulFilter[i].className == 'fil_ul open') {
			continue;
		} else {
			ulFilter[i].classList.add("display0");
		}
		if (indxLi2 == 1) {
			continue;
		} else {
			ulFilter[i].classList.add("display0");
		}
	}
	for (let i = 0; i < tubsFilter.length; i++) {
		tubsFilter[i].onclick = function (el) {
			if (i == 0) {
				if (q == 0) {
					let pusk = setInterval(function () {
						ulFilter[0].style.marginBottom = 0.6583278473 + "vw";
						ulFilter[0].style.height = q + "px";
						ulFilter[0].classList.remove("display0");
						ulFilter[0].classList.add("open");
						q = q + hieghtUl[0] / 40;
						if (q >= hieghtUl[0] + 6) {
							ulFilter[0].style.height = hieghtUl[0] + 6 + "px";
							clearInterval(pusk);
						}
					}, 1)
					span2[0].style.transform = 'none';
				} else if (q >= hieghtUl[0]) {
					ulFilter[0].style.marginBottom = 0;
					q = 0;
					let reverse = setInterval(function () {
						ulFilter[0].style.height = hieghtUl[0] - q + "px";
						q = q + hieghtUl[0] / 40;
						if (q >= hieghtUl[0]) {
							ulFilter[0].style.height = 0 + "px";
							q = 0;
							ulFilter[0].classList.remove("open");
							clearInterval(reverse);
						}
					}, 1)
					span2[0].style.transform = 'rotate(90deg)';
				}
			} else if (i == 1) {
				if (w == 0) {
					let pusk = setInterval(function () {
						ulFilter[1].style.marginBottom = 0.6583278473 + "vw";
						ulFilter[1].style.height = w + "px";
						ulFilter[1].classList.remove("display0");
						ulFilter[1].classList.add("open");
						w = w + hieghtUl[1] / 50;
						if (w >= hieghtUl[1] + 6) {
							ulFilter[1].style.height = hieghtUl[1] + 6 + "px";
							clearInterval(pusk);
						}
					}, 1)
					span2[1].style.transform = 'none';
				} else if (w >= hieghtUl[1]) {
					ulFilter[1].style.marginBottom = 0;
					w = 0;
					let reverse = setInterval(function () {
						ulFilter[1].style.height = hieghtUl[1] - w + "px";
						w = w + hieghtUl[1] / 50;
						if (w >= hieghtUl[1]) {
							ulFilter[1].style.height = 0 + "px";
							w = 0;
							ulFilter[1].classList.remove("open");
							clearInterval(reverse);
						}
					}, 1)
					span2[1].style.transform = 'rotate(90deg)';
				}
			} else if (i == 2) {
				if (e == 0) {
					let pusk = setInterval(function () {
						ulFilter[2].style.marginBottom = 0.6583278473 + "vw";
						ulFilter[2].style.height = e + "px";
						ulFilter[2].classList.remove("display0");
						ulFilter[2].classList.add("open");
						e = e + hieghtUl[2] / 50;
						if (e >= hieghtUl[2] + 6) {
							ulFilter[2].style.height = hieghtUl[2] + 6 + "px";
							clearInterval(pusk);
						}
					}, 1)
					span2[2].style.transform = 'none';
				} else if (e >= hieghtUl[2]) {
					ulFilter[2].style.marginBottom = 0;
					e = 0;
					let reverse = setInterval(function () {
						ulFilter[2].style.height = hieghtUl[2] - e + "px";
						e = e + hieghtUl[2] / 50;
						if (e >= hieghtUl[2]) {
							ulFilter[2].style.height = 0 + "px";
							e = 0;
							ulFilter[2].classList.remove("open");
							clearInterval(reverse);
						}
					}, 1)
					span2[2].style.transform = 'rotate(90deg)';
				}
			} else if (i == 3) {
				if (r == 0) {
					let pusk = setInterval(function () {
						ulFilter[3].style.marginBottom = 0.6583278473 + "vw";
						ulFilter[3].style.height = r + "px";
						ulFilter[3].classList.remove("display0");
						ulFilter[3].classList.add("open");
						r = r + hieghtUl[3] / 50;
						if (r >= hieghtUl[3] + 6) {
							ulFilter[3].style.height = hieghtUl[3] + 6 + "px";
							clearInterval(pusk);
						}
					}, 1)
					span2[3].style.transform = 'none';
				} else if (r >= hieghtUl[3]) {
					ulFilter[3].style.marginBottom = 0;
					r = 0;
					let reverse = setInterval(function () {
						ulFilter[3].style.height = hieghtUl[3] - r + "px";
						r = r + hieghtUl[3] / 50;
						if (r >= hieghtUl[3]) {
							ulFilter[3].style.height = 0 + "px";
							r = 0;
							ulFilter[3].classList.remove("open");
							clearInterval(reverse);
						}
					}, 1)
					span2[3].style.transform = 'rotate(90deg)';
				}
			} else if (i == 4) {
				if (t == 0) {
					let pusk = setInterval(function () {
						ulFilter[4].style.marginBottom = 0.6583278473 + "vw";
						ulFilter[4].style.height = t + "px";
						ulFilter[4].classList.remove("display0");
						ulFilter[4].classList.add("open");
						t = t + hieghtUl[4] / 50;
						if (t >= hieghtUl[4] + 6) {
							ulFilter[4].style.height = hieghtUl[4] + 6 + "px";
							clearInterval(pusk);
						}
					}, 1)
					span2[4].style.transform = 'none';
				} else if (t >= hieghtUl[4]) {
					ulFilter[4].style.marginBottom = 0;
					t = 0;
					let reverse = setInterval(function () {
						ulFilter[4].style.height = hieghtUl[4] - t + "px";
						t = t + hieghtUl[4] / 50;
						if (t >= hieghtUl[4]) {
							ulFilter[4].style.height = 0 + "px";
							t = 0;
							ulFilter[4].classList.remove("open");
							clearInterval(reverse);
						}
					}, 1)
					span2[4].style.transform = 'rotate(90deg)';
				}
			}
		}
	}
}