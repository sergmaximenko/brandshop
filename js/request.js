function clear(x) {
	brand = JSON.parse(x);
	var znak1 = /\[/gi;
	var znak2 = /\"/gi;
	var znak3 = /\]/gi;
	for (let i = 0; i < brand.length; i++) {
		brand[i].info = brand[i].info.replace(znak1, '').replace(znak2, '').replace(znak3, '').split(',');
		brand[i].photo = brand[i].photo.replace(znak1, '').replace(znak2, '').replace(znak3, '').split(',');
		brand[i].size = brand[i].size.replace(znak1, '').replace(znak2, '').replace(znak3, '').split(',');
	}
	for (let i = 0; i < brand.length; i++) {
		brand[i].size.map(function (el, ind) {
			brand[i].size[ind] = el.trim();
		})
	}
	return brand;
}

let brand = [];

function load(x) {
	fetch('/' + encodeURI(x))
		.then(res => res.text())
		.then(res => clear(res))
		.then(res => {
			brand = JSON.stringify(res);
			sessionStorage.setItem("brand", brand);
			DataOpen = res;
		})

}

function loadPage(x) {
	fetch('/' + encodeURI(x))
		.then(res => res.text())
		.then(res => clear(res))
		.then(res => {
			itemsSlider = res;
		})
}

function loadItem(x) {
	fetch('/' + encodeURI(x))
		.then(res => res.text())
		.then(res => clear(res))
		.then(res => {
			brand = JSON.stringify(res[0]);
			sessionStorage.setItem("item", brand);
			thisItem = res[0];
		})
}


function route(x) {
	document.location.href = `http://localhost:8080/${x}`;
	fetch('/' + encodeURI(x))
}







document.addEventListener("DOMContentLoaded", getData);

function getData() {
	if (document.location.href == 'http://localhost:8080/brands' || document.location.href == 'http://localhost:8080/new') {
		load('AllBRAND');
		startBrand()
	} else if (document.location.href == 'http://localhost:8080/man') {
		load('All&МужскойSEX')
		startBrand()
	} else if (document.location.href == 'http://localhost:8080/woman') {
		load('All&ЖенскийSEX')
		startBrand()
	} else if (document.location.href == 'http://localhost:8080/unisex') {
		load('All&УнисексSEX')
		startBrand()
	} else if (window.location.pathname == '/list') {
		let url;
		if (decodeURI(document.location.search).indexOf('&Мужской') != -1 ||
			decodeURI(document.location.search).indexOf('&Женский') != -1 ||
			decodeURI(document.location.search).indexOf('&Унисекс') != -1) {
			url = document.location.search.slice(1) + 'SEX';
		} else {
			url = document.location.search.slice(1) + 'BRAND';
		}
		let reg = /%20/gi;
		url = decodeURI(url.replace(reg, ' '));
		load(url)
		startList()
	} else if (window.location.pathname == '/brand') {
		let url;
		if (decodeURI(document.location.search).indexOf('Мужской&') != -1 ||
			decodeURI(document.location.search).indexOf('Женский&') != -1) {
			url = document.location.search.slice(1) + 'BLEND';
		} else {
			url = document.location.search.slice(1) + 'ITEM';
		}
		let reg = /%20/gi;
		url = decodeURI(url.replace(reg, ' '));
		load(url)
		startBrand()
	} else if (window.location.pathname == '/item') {
		let url = document.location.search.slice(1) + 'ID';
		loadItem(url)
		startItem()
	}
}

function startList() {
	let timerList = setInterval(function () {
		if (Array.isArray(DataOpen)) {
			pagi();
			shadowItem();
			filCreaList();
			filScrol()
			filSeaList()
			refresh();
			clearInterval(timerList)
		}
	}, 1);
}

function startBrand() {
	let timerBrand = setInterval(function () {
		if (Array.isArray(DataOpen)) {
			pagi();
			shadowItem();
			filCreaBrand();
			filScrol();
			filSeaBrand();
			refresh();
			clearInterval(timerBrand)
		}
	}, 1);
}

function startItem() {
	let timerItem = setInterval(function () {
		if (typeof thisItem != "undefined") {
			itemCrea();
			sliderItem();
			pageItem();
			lupa();
			imgScroll();
			clearInterval(timerItem)
		}
	}, 1);
}
