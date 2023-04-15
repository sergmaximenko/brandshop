let words = [];
function filSeaList() {
	let filter = document.querySelector('.filter');
	let labelSex = document.querySelectorAll('.sexFilter label');
	let labelType = document.querySelectorAll('.typeFilter label');
	let labelColor = document.querySelectorAll('.colorFilter label');
	let labelSize = document.querySelectorAll('.sizeFilter label');
//	let words = [],
	let	mas1 = [],
		mas2 = [],
		mas3 = [],
		mas4 = [];

	filter.onclick = function () {
		let a = 0,
			b = 0,
			c = 0,
			d = 0,
			sum = 0;
		let indexSize = 0,
			indexSlovo = 0;
		if (event.target.tagName == "DIV" ||
			event.target.tagName == "INPUT" ||
			event.target.tagName == "H1" ||
			event.target.tagName == "P") {
			return
		} else {
			event.target.classList.toggle("active-li");
		}
		if (event.target.className == "active-li") {
			words.push(event.target.textContent);
			words = Array.from(new Set(words));
		} else {
			words.forEach(function (cur, i, arr) {
				if (cur == event.target.textContent) {
					arr.splice(i, 1)
				}
			})
		}
		for (let i = 0; i < labelSex.length; i++) {
			if (labelSex[i].className == 'active-li') {
				a = 1;
			}
		}
		for (let i = 0; i < labelType.length; i++) {
			if (labelType[i].className == 'active-li') {
				b = 1;
			}
		}
		for (let i = 0; i < labelColor.length; i++) {
			if (labelColor[i].className == 'active-li') {
				c = 1;
			}
		}
		for (let i = 0; i < labelSize.length; i++) {
			if (labelSize[i].className == 'active-li') {
				d = 1;
			}
		}
		for (let i = 0; i < labelSize.length; i++) {
			if (labelSize[i].className == 'active-li') {
				indexSize = 1
			}
		}
		for (let i = 0; i < labelSex.length; i++) {
			if (labelSex[i].className == 'active-li') {
				indexSlovo = 1
			}
		}
		for (let i = 0; i < labelType.length; i++) {
			if (labelType[i].className == 'active-li') {
				indexSlovo = 1
			}
		}
		for (let i = 0; i < labelColor.length; i++) {
			if (labelColor[i].className == 'active-li') {
				indexSlovo = 1
			}
		}
		sum = a + b + c + d;
		mas1 = [];
		DataOpen = JSON.parse(sessionStorage.getItem("brand"));
		DataOpen.map(function (obj) {
			let a = words.length;
			let b = 0;
			for (let i = 0; i < words.length; i++) {
				for (let key in obj) {
					if (key == 'type' || key == 'size') {
						continue
					}
					if (obj[key] == words[i]) {
						a++
					}
				}
				for (let key in obj) {
					if (key == 'size') {
						if (obj[key].includes(words[i]) == true) {
							b++
						}
					}
				}
			}
			if (indexSize == 0) {
				if (a > words.length) {
					mas1.push(obj);
					mas1 = Array.from(new Set(mas1));
				}
			} else if (indexSize == 1 && indexSlovo == 0) {
				if (b > 0) {
					mas1.push(obj);
					mas1 = Array.from(new Set(mas1));
				}
			} else if (indexSize == 1 && indexSlovo == 1) {
				if (a > words.length && b > 0) {
					mas1.push(obj);
					mas1 = Array.from(new Set(mas1));
				}
			}
		})
		mas2 = [];
		mas1.map(function (obj) {
			let a = words.length - 1;
			let b = 0;
			for (let i = 0; i < words.length; i++) {
				for (let key in obj) {
					if (key == 'type' || key == 'size') {
						continue
					}
					if (obj[key] == words[i]) {
						a++
					}
				}
				for (let key in obj) {
					if (key == 'size') {
						if (obj[key].includes(words[i]) == true) {
							b++
						}
					}
				}
			}
			if (indexSize == 0) {
				if (a > words.length) {
					mas2.push(obj);
					mas2 = Array.from(new Set(mas2));
				}
			} else if (indexSize == 1 && indexSlovo == 0) {
				if (b > 0) {
					mas2.push(obj);
					mas2 = Array.from(new Set(mas2));
				}
			} else if (indexSize == 1 && indexSlovo == 1) {
				if (a > words.length - 1 && b > 0) {
					mas2.push(obj);
					mas2 = Array.from(new Set(mas2));
				}
			}
		})
		mas3 = [];
		mas2.map(function (obj) {
			let a = words.length - 2;
			let b = 0;
			for (let i = 0; i < words.length; i++) {
				for (let key in obj) {
					if (key == 'type' || key == 'size') {
						continue
					}
					if (obj[key] == words[i]) {
						a++
					}
				}
				for (let key in obj) {
					if (key == 'size') {
						if (obj[key].includes(words[i]) == true) {
							b++
						}
					}
				}
			}

			if (indexSize == 0) {
				if (a > words.length) {
					mas3.push(obj);
					mas3 = Array.from(new Set(mas3));
				}
			} else if (indexSize == 1 && indexSlovo == 0) {
				if (b > 0) {
					mas3.push(obj);
					mas3 = Array.from(new Set(mas3));
				}
			} else if (indexSize == 1 && indexSlovo == 1) {
				if (a > words.length - 1 && b > 0) {
					mas3.push(obj);
					mas3 = Array.from(new Set(mas3));
				}
			}
		})
		mas4 = [];
		mas3.map(function (obj) {
			let a = words.length - 3;
			let b = 0;
			for (let i = 0; i < words.length; i++) {
				for (let key in obj) {
					if (key == 'type' || key == 'size') {
						continue
					}
					if (obj[key] == words[i]) {
						a++
					}
				}
				for (let key in obj) {
					if (key == 'size') {
						if (obj[key].includes(words[i]) == true) {
							b++
						}
					}
				}
			}
			if (indexSize == 0) {
				if (a > words.length) {
					mas4.push(obj);
					mas4 = Array.from(new Set(mas4));
				}
			} else if (indexSize == 1 && indexSlovo == 0) {
				if (b > 0) {
					mas4.push(obj);
					mas4 = Array.from(new Set(mas4));
				}
			} else if (indexSize == 1 && indexSlovo == 1) {
				if (a > words.length - 1 && b > 0) {
					mas4.push(obj);
					mas4 = Array.from(new Set(mas4));
				}
			}
		})
		if (sum == 0) {
			DataOpen = JSON.parse(sessionStorage.getItem("brand"));
			pagi();	
		} else if (sum == 1) {
			DataOpen = mas1;
			pagi();
		} else if (sum == 2) {
			DataOpen = mas2;
			pagi();
		} else if (sum == 3) {
			DataOpen = mas3;
			pagi();
		} else if (sum == 4) {
			DataOpen = mas4;
			pagi();
		}
		shadowItem();
	}
}
