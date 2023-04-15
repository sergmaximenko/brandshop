function imgScroll() {
	let imgZoom = document.querySelectorAll('.image-zoom');
	let shadow = [];
	for (let i = 0; i < imgZoom.length; i++) {
		let imgTub = document.querySelector('.imgTub').children;
		scroll(imgZoom[i], i)
		shadow.push(imgTub[i].children[1])
	}
	shadow[0].style.opacity = '1';
	function scroll(x, i) {
		
		// Получаем нужный элемент
		var element = x;
		var Visible = function (target) {
			let imgZoomH = imgZoom[0].offsetHeight / 1.5;
			let imgTub = shadow;
			
			// Все позиции элемента
			var targetPosition = {
					top: window.pageYOffset + target.getBoundingClientRect().top,
					left: window.pageXOffset + target.getBoundingClientRect().left,
					right: window.pageXOffset + target.getBoundingClientRect().right,
					bottom: window.pageYOffset + target.getBoundingClientRect().bottom
				},
				// Получаем позиции окна
				windowPosition = {
					top: window.pageYOffset,
					left: window.pageXOffset,
					right: window.pageXOffset + document.documentElement.clientWidth,
					bottom: window.pageYOffset + document.documentElement.clientHeight
				};

			if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
				targetPosition.top + imgZoomH < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
				targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
				targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
				// Если элемент полностью видно, то запускаем следующий код
				if (imgTub[i - 1]) {
					imgTub[i - 1].style.opacity = '0';
				}
				imgTub[i].style.opacity = '1';
			} else {
				// Если элемент не видно, то запускаем этот код
				imgTub[i].style.opacity = '0';
			};
		};

		// Запускаем функцию при прокрутке страницы
		window.addEventListener('scroll', function () {
			Visible(element);
		});

		// А также запустим функцию сразу. А то вдруг, элемент изначально видно
		//		Visible (element);
	}
}
