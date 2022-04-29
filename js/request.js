 let brand = [];

function loadBrand(x) {

      var xhr = new XMLHttpRequest();

      xhr.open('GET', x, false);

      xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;


        if (xhr.status != 200) {
          // обработать ошибку
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          try {
            brand = xhr.responseText;
          } catch (e) {
            alert("Некорректный ответ " + e.message);
          }
          	sessionStorage.setItem("brand", brand);
        }

      }

      xhr.send();

    }


let items = [];

function loadItem(words) {

      var xhr = new XMLHttpRequest();

      xhr.open('GET', '/js/data/All.json', false);

      xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;


        if (xhr.status != 200) {
          // обработать ошибку
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          try {
            items = JSON.parse(xhr.responseText);
          } catch (e) {
            alert("Некорректный ответ " + e.message);
          }
			if(words == 'all'){
				items = JSON.stringify(items);
				sessionStorage.setItem("brand", items);
			}
			let wordsMas = words.split('/');
			let newItems = [];
			items.map(function(item){
				let indx = 0;
				for(let key in item){
					if(key == "type"){
						continue
					}
					for(let i =0; i<wordsMas.length; i++){
						if(item[key] == wordsMas[i]){
							indx++
						}
					}
				}
				if(indx == wordsMas.length){
					newItems.push(item)
				}
			})
			items = [];
			newItems = JSON.stringify(newItems);
			sessionStorage.setItem("brand", newItems);
        }

      }

      xhr.send();

    }

