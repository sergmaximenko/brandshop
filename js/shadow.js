function shadowItem() {
	let shadow = document.querySelectorAll('.shadow');
	let item = document.querySelectorAll('.item');
	let hieght_max = [];
	let start = [];
	let qwe;

	for (let i = 0; i < shadow.length; i++) {

		start[i] = 250;
		hieght_max[i] = shadow[i].offsetHeight;


		shadow[i].onmouseenter = function (el) {
			setTimeout(function () {
				qwe = setInterval(function () {
					item[i].style.zIndex = 102;
				}, 1)
			}, 1)
			let pusk = setInterval(function () {
				shadow[i].style.height = start[i] + "px";
				start[i] = start[i] + hieght_max[i] / 40;
				if (start[i] >= hieght_max[i]) {
					shadow[i].style.height = hieght_max[i] + "px";
					clearInterval(pusk);
				}
			}, 1)
		}

		shadow[i].onmouseleave = function (el) {
			clearInterval(qwe)
			setTimeout(function () {
				item[i].style.zIndex = 99;
			}, 100)
			start[i] = 250;
			let reverse = setInterval(function () {
				shadow[i].style.height = hieght_max[i] - start[i] + "px";
				start[i] = start[i] + hieght_max[i] / 100;
				if (start[i] >= hieght_max[i]) {
					shadow[i].style.height = "auto";
					start[i] = 250;
					clearInterval(reverse);
				}
			}, 1)
		}
	}
}
