let but_map = document.querySelector('.but');
let icon = document.querySelector('.icon');

but_map.onclick = function () {
	let yandex_map = document.querySelector('.yandex_map');
	let ya_map = document.querySelector('.ya_map');
	yandex_map.style.backgroundColor = 'rgba(0,0,0,.7)';
	ya_map.classList.add('mapAnim');
	ya_map.classList.remove('mapAnimRev');
	ya_map.style.bottom = '13.1665569454vw';
	// Функция ymaps.ready() будет вызвана, когда
	// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
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
						size: 'large',
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
		let map_ex = document.querySelector('.map_ex');
		map_ex.onclick = function () {
			let yandex_map = document.querySelector('.yandex_map');
			let ya_map = document.querySelector('.ya_map');
			ya_map.classList.remove('mapAnim');
			ya_map.classList.add('mapAnimRev');
			ya_map.style.bottom = '-32.9163923634vw';
			yandex_map.style.backgroundColor = 'rgba(0,0,0,0)';
			setTimeout(function () {
				yandex_map.style.display = 'none';
				body.style.overflow = 'inherit';
				body.style.paddingRight = '0px';
				icon.style.paddingRight = '0px';
				myMap.destroy();
			}, 200)

		}
		yandex_map.onclick = function () {
			if (event.target.className == 'yandex_map') {
				let yandex_map = document.querySelector('.yandex_map');
				let ya_map = document.querySelector('.ya_map');
				ya_map.classList.remove('mapAnim');
				ya_map.classList.add('mapAnimRev');
				ya_map.style.bottom = '-32.9163923634vw';
				yandex_map.style.backgroundColor = 'rgba(0,0,0,0)';
				setTimeout(function () {
					yandex_map.style.display = 'none';
					body.style.overflow = 'inherit';
					body.style.paddingRight = '0px';
					icon.style.paddingRight = '0px';
					myMap.destroy();
				}, 200)
			}
		}
	}

	function scrollbarWidth() {
		var documentWidth = parseInt(document.documentElement.clientWidth);
		var windowsWidth = parseInt(window.innerWidth);
		var scrollbarWidth = windowsWidth - documentWidth;
		return scrollbarWidth;
	}
	let quant = scrollbarWidth();

	yandex_map.style.display = 'flex';
	body.style.overflow = 'hidden';
	body.style.paddingRight = quant + 'px';
	icon.style.paddingRight = quant + 'px';

}
