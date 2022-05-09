window.addEventListener('scroll', function() {
	let imgTub = document.querySelector('.imgTub');
	let imgTubWrap = document.querySelector('.imgTubWrap');
	let option = document.querySelector('.option');
	let optionWrap = document.querySelector('.optionWrap');
	if(pageYOffset >= 80){
		imgTub.style.position = 'fixed';
		imgTub.style.top = '5.924950625411455vw';
		imgTubWrap.style.marginLeft = '0px';
		/*option.style.position = 'fixed';
		option.style.top = '5.924950625411455vw';
		option.style.right = '13.10072416063199vw';
		optionWrap.style.marginLeft = '0px';*/
	} else if(pageYOffset <= 80){
		imgTub.style.position = '';
		imgTub.style.top = '';
		imgTubWrap.style.marginLeft = '-3.159973666886109vw';
		/*option.style.position = '';
		option.style.top = '';
		option.style.right = '';
		optionWrap.style.marginLeft = '-23.10730743910467vw';*/
	}
})