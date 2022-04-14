let tubsFilter = document.querySelectorAll('.fil div');
let ulFilter = document.querySelectorAll('.fil ul');
let pFilter = document.querySelectorAll('.fil p');
let filter = document.querySelector('.filter');
let filterShadow = document.querySelector('.filShadow');


for(let i=0; i<tubsFilter.length; i++){
	 let cur = 0;
	tubsFilter[i].onclick = function(){
		ulFilter[i].classList.toggle('display0');
		if(cur == 0){
			pFilter[i].textContent = '–';
			cur = 1;
		} else if(cur == 1){
			pFilter[i].textContent = '+';
			cur = 0;
		}
		
	}
}

window.addEventListener('scroll', function() {
	var scrollHeight = Math.max(
  		document.body.scrollHeight, document.documentElement.scrollHeight,
  		document.body.offsetHeight, document.documentElement.offsetHeight,
  		document.body.clientHeight, document.documentElement.clientHeight
	);
	let i;
	if(notesOnPage == 9){
		i =2;
	} else if(notesOnPage == 18){
		i =1.4;
	}else if(notesOnPage == 27){
		i =1.3;
	}
	if(pageYOffset > 150 &&
	   filter.clientHeight<=295){
		filter.classList.add('fixed');
		filter.style.top = "20px";
		filter.style.bottom = "auto";
		filterShadow.classList.remove('display0');
	}else if(pageYOffset > 150 && filter.clientHeight>295 &&
			pageYOffset*i<scrollHeight){
		filter.classList.add('fixed');
		filter.style.top = "20px";
		filter.style.bottom = "auto";
		filterShadow.classList.remove('display0');
	}else if(pageYOffset > 150 && filter.clientHeight>295 &&
			pageYOffset*i>scrollHeight){
		filter.classList.add('fixed');
		filter.style.top = "auto";
		filter.style.bottom = "440px";
		filterShadow.classList.remove('display0');
	}else{
		filter.classList.remove('fixed');
		filter.style.top = "";
		filterShadow.classList.add('display0');
	}
});
