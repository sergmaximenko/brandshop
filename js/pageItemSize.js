function sortSizeAll(a) {
	let size = document.querySelector('.size')
	let sizeMas = a;
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

	if (Array.isArray(sizeMas)) {
		sizeMas.map(sortSize);
	} else {
		sizeMas = sizeMas.split()
		sizeMas.map(sortSize);
	}


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

	addSize(sizeUS, sizeEU, sizeStr, sizeNum);

	function addSize(a, b, c, d) {
		let x = [];
		if (a.length > 0) {
			x = a;
		} else if (b.length > 0) {
			x = b;
		} else if (c.length > 0) {
			x = c;
		} else if (d.length > 0) {
			x = d;
		}
		for (let i = 0; i < x.length; i++) {
			if (i == 0) {
				let div = document.createElement('div');
				div.classList.add('sizeActive');
				div.textContent = x[i];
				size.appendChild(div);
				continue
			}
			let div = document.createElement('div');
			div.textContent = x[i];
			size.appendChild(div);
		}
	}
}
