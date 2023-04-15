let faq = document.querySelector('.faq').getElementsByTagName("ul");
let faq1 = document.querySelector('.faq').getElementsByTagName("div");
let faqUl = [];
let faqDiv = [];
let hieghtUl = [];
let span2 = document.querySelectorAll('.span2')

for (let i = 0; i < faq.length; i++) {
	if (faq[i].parentNode.tagName == 'DIV') {
		faqUl.push(faq[i]);
	}
}
for (let i = 0; i < faq1.length; i++) {
	if (faq1[i].parentNode.className == 'faq') {
		faqDiv.push(faq1[i]);
	}
}

for (let i = 0; i < faqUl.length; i++) {
	hieghtUl.push(faqUl[i].offsetHeight);
	faqUl[i].classList.add("display0");
}

let q = 0,
	w = 0,
	e = 0,
	r = 0,
	t = 0,
	y = 0,
	u = 0,
	z = 0,
	o = 0,
	p = 0,
	a = 0,
	s = 0;

for (let i = 0; i < faqDiv.length; i++) {
	faqDiv[i].onclick = function () {
		if (i == 0) {
			if (q == 0) {
				let pusk = setInterval(function () {
					faqUl[0].style.height = q + "px";
					faqUl[0].classList.remove("display0");
					q = q + hieghtUl[0] / 10;
					if (q >= hieghtUl[0]) {
						faqUl[0].style.height = hieghtUl[0] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[0].style.transform = 'none';
			} else if (q >= hieghtUl[0]) {
				q = 0;
				let reverse = setInterval(function () {
					faqUl[0].style.height = hieghtUl[0] - q + "px";
					q = q + hieghtUl[0] / 10;
					if (q >= hieghtUl[0]) {
						faqUl[0].style.height = 0 + "px";
						q = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[0].style.transform = 'rotate(90deg)';
			}
		} else if (i == 1) {
			if (w == 0) {
				let pusk = setInterval(function () {
					faqUl[1].style.height = w + "px";
					faqUl[1].classList.remove("display0");
					w = w + hieghtUl[1] / 10;
					if (w >= hieghtUl[1]) {
						faqUl[1].style.height = hieghtUl[1] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[1].style.transform = 'none';
			} else if (w >= hieghtUl[1]) {
				w = 0;
				let reverse = setInterval(function () {
					faqUl[1].style.height = hieghtUl[1] - w + "px";
					w = w + hieghtUl[1] / 10;
					if (w >= hieghtUl[1]) {
						faqUl[1].style.height = 0 + "px";
						w = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[1].style.transform = 'rotate(90deg)';
			}
		} else if (i == 2) {
			if (e == 0) {
				let pusk = setInterval(function () {
					faqUl[2].style.height = e + "px";
					faqUl[2].classList.remove("display0");
					e = e + hieghtUl[2] / 10;
					if (e >= hieghtUl[2]) {
						faqUl[2].style.height = hieghtUl[2] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[2].style.transform = 'none';
			} else if (e >= hieghtUl[2]) {
				e = 0;
				let reverse = setInterval(function () {
					faqUl[2].style.height = hieghtUl[2] - e + "px";
					e = e + hieghtUl[2] / 10;
					if (e >= hieghtUl[2]) {
						faqUl[2].style.height = 0 + "px";
						e = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[2].style.transform = 'rotate(90deg)';
			}
		} else if (i == 3) {
			if (r == 0) {
				let pusk = setInterval(function () {
					faqUl[3].style.height = r + "px";
					faqUl[3].classList.remove("display0");
					r = r + hieghtUl[3] / 10;
					if (r >= hieghtUl[3]) {
						faqUl[3].style.height = hieghtUl[3] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[3].style.transform = 'none';
			} else if (r >= hieghtUl[3]) {
				r = 0;
				let reverse = setInterval(function () {
					faqUl[3].style.height = hieghtUl[3] - r + "px";
					r = r + hieghtUl[3] / 10;
					if (r >= hieghtUl[3]) {
						faqUl[3].style.height = 0 + "px";
						r = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[3].style.transform = 'rotate(90deg)';
			}
		} else if (i == 4) {
			if (t == 0) {
				let pusk = setInterval(function () {
					faqUl[4].style.height = t + "px";
					faqUl[4].classList.remove("display0");
					t = t + hieghtUl[4] / 10;
					if (t >= hieghtUl[4]) {
						faqUl[4].style.height = hieghtUl[4] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[4].style.transform = 'none';
			} else if (t >= hieghtUl[4]) {
				t = 0;
				let reverse = setInterval(function () {
					faqUl[4].style.height = hieghtUl[4] - t + "px";
					t = t + hieghtUl[4] / 10;
					if (t >= hieghtUl[4]) {
						faqUl[4].style.height = 0 + "px";
						t = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[4].style.transform = 'rotate(90deg)';
			}
		} else if (i == 5) {
			if (y == 0) {
				let pusk = setInterval(function () {
					faqUl[5].style.height = y + "px";
					faqUl[5].classList.remove("display0");
					y = y + hieghtUl[5] / 10;
					if (y >= hieghtUl[5]) {
						faqUl[5].style.height = hieghtUl[5] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[5].style.transform = 'none';
			} else if (y >= hieghtUl[5]) {
				y = 0;
				let reverse = setInterval(function () {
					faqUl[5].style.height = hieghtUl[5] - y + "px";
					y = y + hieghtUl[5] / 10;
					if (y >= hieghtUl[5]) {
						faqUl[5].style.height = 0 + "px";
						y = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[5].style.transform = 'rotate(90deg)';
			}
		} else if (i == 6) {
			if (u == 0) {
				let pusk = setInterval(function () {
					faqUl[6].style.height = u + "px";
					faqUl[6].classList.remove("display0");
					u = u + hieghtUl[6] / 10;
					if (u >= hieghtUl[6]) {
						faqUl[6].style.height = hieghtUl[6] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[6].style.transform = 'none';
			} else if (u >= hieghtUl[6]) {
				u = 0;
				let reverse = setInterval(function () {
					faqUl[6].style.height = hieghtUl[6] - u + "px";
					u = u + hieghtUl[6] / 10;
					if (u >= hieghtUl[6]) {
						faqUl[6].style.height = 0 + "px";
						u = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[6].style.transform = 'rotate(90deg)';
			}
		} else if (i == 7) {
			if (z == 0) {
				let pusk = setInterval(function () {
					faqUl[7].style.height = z + "px";
					faqUl[7].classList.remove("display0");
					z = z + hieghtUl[7] / 10;
					if (z >= hieghtUl[7]) {
						faqUl[7].style.height = hieghtUl[7] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[7].style.transform = 'none';
			} else if (z >= hieghtUl[7]) {
				z = 0;
				let reverse = setInterval(function () {
					faqUl[7].style.height = hieghtUl[7] - z + "px";
					z = z + hieghtUl[7] / 10;
					if (z >= hieghtUl[7]) {
						faqUl[7].style.height = 0 + "px";
						z = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[7].style.transform = 'rotate(90deg)';
			}
		} else if (i == 8) {
			if (o == 0) {
				let pusk = setInterval(function () {
					faqUl[8].style.height = o + "px";
					faqUl[8].classList.remove("display0");
					o = o + hieghtUl[8] / 10;
					if (o >= hieghtUl[8]) {
						faqUl[8].style.height = hieghtUl[8] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[8].style.transform = 'none';
			} else if (o >= hieghtUl[8]) {
				o = 0;
				let reverse = setInterval(function () {
					faqUl[8].style.height = hieghtUl[8] - o + "px";
					o = o + hieghtUl[8] / 10;
					if (o >= hieghtUl[8]) {
						faqUl[8].style.height = 0 + "px";
						o = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[8].style.transform = 'rotate(90deg)';
			}
		} else if (i == 9) {
			if (p == 0) {
				let pusk = setInterval(function () {
					faqUl[9].style.height = p + "px";
					faqUl[9].classList.remove("display0");
					p = p + hieghtUl[9] / 10;
					if (p >= hieghtUl[9]) {
						faqUl[9].style.height = hieghtUl[9] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[9].style.transform = 'none';
			} else if (p >= hieghtUl[9]) {
				p = 0;
				let reverse = setInterval(function () {
					faqUl[9].style.height = hieghtUl[9] - p + "px";
					p = p + hieghtUl[9] / 10;
					if (p >= hieghtUl[9]) {
						faqUl[9].style.height = 0 + "px";
						p = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[9].style.transform = 'rotate(90deg)';
			}
		} else if (i == 10) {
			if (a == 0) {
				let pusk = setInterval(function () {
					faqUl[10].style.height = a + "px";
					faqUl[10].classList.remove("display0");
					a = a + hieghtUl[10] / 10;
					if (a >= hieghtUl[10]) {
						faqUl[10].style.height = hieghtUl[10] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[10].style.transform = 'none';
			} else if (a >= hieghtUl[10]) {
				a = 0;
				let reverse = setInterval(function () {
					faqUl[10].style.height = hieghtUl[10] - a + "px";
					a = a + hieghtUl[10] / 10;
					if (a >= hieghtUl[10]) {
						faqUl[10].style.height = 0 + "px";
						a = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[10].style.transform = 'rotate(90deg)';
			}
		} else if (i == 11) {
			if (s == 0) {
				let pusk = setInterval(function () {
					faqUl[11].style.height = s + "px";
					faqUl[11].classList.remove("display0");
					s = s + hieghtUl[11] / 10;
					if (s >= hieghtUl[11]) {
						faqUl[11].style.height = hieghtUl[11] + "px";
						clearInterval(pusk);
					}
				}, 1)
				span2[11].style.transform = 'none';
			} else if (s >= hieghtUl[11]) {
				s = 0;
				let reverse = setInterval(function () {
					faqUl[11].style.height = hieghtUl[11] - s + "px";
					s = s + hieghtUl[11] / 10;
					if (s >= hieghtUl[11]) {
						faqUl[11].style.height = 0 + "px";
						s = 0;
						clearInterval(reverse);
					}
				}, 1)
				span2[11].style.transform = 'rotate(90deg)';
			}
		}
	}
}
