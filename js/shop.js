let magaz_but = document.querySelectorAll('.magaz_but');
let map_wrap = document.querySelector('.map_wrap');
let owl_carousel = document.querySelector('.owl-carousel');
let item_img = document.querySelectorAll('.item_img');
let dot = document.querySelectorAll('.owl-dot');

owl_carousel.style.display = 'none';

for (let i = 0; i < dot.length; i++) {
	let img_dot = document.createElement('div');
	img_dot.classList.add('new_div');
	dot[i].appendChild(img_dot);
}

magaz_but[0].onclick = function () {
	if (magaz_but[0].className == 'magaz_but active_but') {
		magaz_but[0].classList.remove('active_but');
		magaz_but[0].style.backgroundColor = '#f2f2f2';
		magaz_but[0].style.color = 'black';
		magaz_but[0].textContent = 'Подробнее';
		map_wrap.style.display = 'none';
		owl_carousel.style.display = 'none';
	} else {
		let p = document.querySelector('.p');
		let qua = document.querySelector('.qua');
		let asrt = document.querySelector('.asrt');
		let segm = document.querySelector('.segm');
		magaz_but[0].style.backgroundColor = 'black';
		magaz_but[0].style.color = 'white';
		magaz_but[0].textContent = 'Свернуть';
		magaz_but[1].style.backgroundColor = '#f2f2f2';
		magaz_but[1].style.color = 'black';
		magaz_but[1].textContent = 'Подробнее';
		magaz_but[0].classList.add('active_but');
		magaz_but[1].classList.remove('active_but');
		map_wrap.style.display = 'flex';
		p.textContent = '300 м';
		qua.textContent = '50';
		asrt.textContent = 'Мужской 90% / Женский 10%';
		segm.textContent = 'Premium';
		owl_carousel.style.display = 'block';
		for (let i = 3; i < item_img.length - 3; i++) {
			item_img[i].style.background = 'url(./img/shops/' + (i - 2) + '.jpg)';
		}
		let new_div = document.querySelectorAll('.new_div');
		for (let i = 0; i < new_div.length; i++) {
			new_div[i].style.background = 'url(./img/shops/dots/' + (i + 1) + '.jpg)';
		}
	}
}

magaz_but[1].onclick = function () {
	if (magaz_but[1].className == 'magaz_but active_but') {
		magaz_but[1].classList.remove('active_but');
		magaz_but[1].style.backgroundColor = '#f2f2f2';
		magaz_but[1].style.color = 'black';
		magaz_but[1].textContent = 'Подробнее';
		map_wrap.style.display = 'none';
		owl_carousel.style.display = 'none';
	} else {
		let p = document.querySelector('.p');
		let qua = document.querySelector('.qua');
		let asrt = document.querySelector('.asrt');
		let segm = document.querySelector('.segm');
		magaz_but[1].style.backgroundColor = 'black';
		magaz_but[1].style.color = 'white';
		magaz_but[1].textContent = 'Свернуть';
		magaz_but[0].style.backgroundColor = '#f2f2f2';
		magaz_but[0].style.color = 'black';
		magaz_but[0].textContent = 'Подробнее';
		magaz_but[1].classList.add('active_but');
		magaz_but[0].classList.remove('active_but');
		map_wrap.style.display = 'flex';
		p.textContent = '360 м';
		qua.textContent = '80';
		asrt.textContent = 'Мужской 70% / Женский 30%';
		segm.textContent = 'Middle / Middle-Up';
		owl_carousel.style.display = 'block';
		for (let i = 3; i < item_img.length - 3; i++) {
			item_img[i].style.background = 'url(./img/shops/' + (i + 4) + '.jpg)';
		}
		let new_div = document.querySelectorAll('.new_div');
		for (let i = 0; i < new_div.length; i++) {
			new_div[i].style.background = 'url(./img/shops/dots/' + (i + 7) + '.jpg)';
		}
	}

}
ymaps.ready(init);

function init() {
	// Создание карты.
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчнию: «широта, долгота».
		center: [55.772537, 37.610008],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 12.5,

		// Элементы управления
		// https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
		controls: [

                'zoomControl', // Ползунок масштаба
                'trafficControl', // Пробки
                'typeSelector', // Переключатель слоев карты
                'fullscreenControl', // Полноэкранный режим

                // Поисковая строка
                new ymaps.control.SearchControl({
				options: {
					// вид - поисковая строка
					size: 'medium',
					// Включим возможность искать не только топонимы, но и организации.
					provider: 'yandex#search',

				}
			})

            ]
	}, {
		suppressMapOpenBlock: true
	});

	// Добавление метки
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
	var myPlacemark = new ymaps.Placemark([55.772537, 37.610008], {
		// Хинт показывается при наведении мышкой на иконку метки.
		hintContent: 'Москва, Каретный ряд, 8',
	}, {
		iconLayout: 'default#image',
		iconImageHref: './img/kontakt/map.png',
		iconImageSize: [35, 32],
	});

	// После того как метка была создана, добавляем её на карту.
	myMap.geoObjects.add(myPlacemark);
}
