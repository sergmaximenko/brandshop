const http = require("http");
const express = require('express');
const app = express();
const http_server = http.createServer(app);

// создаём маршрут для главной страницы
// http://localhost:8080/
app.use('/img', express.static(__dirname + '/img'));
app.use('/file', express.static(__dirname + '/file'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/faq/img', express.static(__dirname + '/img'));
app.use('/faq/file', express.static(__dirname + '/file'));
app.use('/faq/fonts', express.static(__dirname + '/fonts'));
app.use('/faq/js', express.static(__dirname + '/js'));
app.use('/faq/css', express.static(__dirname + '/css'));
app.use('/OwlCarousel', express.static(__dirname + '/OwlCarousel'));

app.get('/OwlCarousel/dist/assets/owl.carousel.min.css', function (req, res) {
	res.sendfile('OwlCarousel/dist/assets/owl.carousel.min.css');
});
app.get('/OwlCarousel/dist/assets/owl.theme.default.min.css', function (req, res) {
	res.sendfile('OwlCarousel/dist/assets/owl.theme.default.min.css');
});
app.get('https://code.jquery.com/jquery-3.5.1.min.js', function (req, res) {
	res.sendfile('https://code.jquery.com/jquery-3.5.1.min.js');
});
app.get('https://code.jquery.com/jquery-3.5.1.min.js', function (req, res) {
	res.sendfile('https://code.jquery.com/jquery-3.5.1.min.js');
});
app.get('https://use.fontawesome.com/64249d1b61.js', function (req, res) {
	res.sendfile('https://use.fontawesome.com/64249d1b61.js');
});
app.get('/img/favicon.ico', function (req, res) {
	res.sendfile('/img/favicon.ico');
});
app.get('/style.css', function (req, res) {
	res.sendfile('style.css');
});

app.get('/', function (req, res) {
	res.sendfile('index.html');
});
app.get('/new', function (req, res) {
	res.sendfile('listBrand.html');
});
app.get('/brands', function (req, res) {
	res.sendfile('listBrand.html');
});
app.get('/man', function (req, res) {
	res.sendfile('listBrand.html');
});
app.get('/woman', function (req, res) {
	res.sendfile('listBrand.html');
});
app.get('/unisex', function (req, res) {
	res.sendfile('listBrand.html');
});
app.get('/list?:id', function (req, res) {
	res.sendfile('list.html');
});
app.get('/brand?:id', function (req, res) {
	res.sendfile('listBrand.html');
});
app.get('/item?:id', function (req, res) {
	res.sendfile('pageItem.html');
});
app.get('/faq', function (req, res) {
	res.sendfile('help.html');
});
app.get('/faq/:id', function (req, res) {
	if (req.params.id == '1') {
		res.sendfile('helpOne.html');
	} else if (req.params.id == '2') {
		res.sendfile('helpTwo.html');
	} else if (req.params.id == '3') {
		res.sendfile('helpThree.html');
	} else if (req.params.id == '4') {
		res.sendfile('helpFour.html');
	} else if (req.params.id == '5') {
		res.sendfile('helpFive.html');
	} else if (req.params.id == '6') {
		res.sendfile('helpSix.html');
	}
});
app.get('/contacts', function (req, res) {
	res.sendfile('kontakt.html');
});
app.get('/address', function (req, res) {
	res.sendfile('shop.html');
});

const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "bs",
	password: ""
});
connection.connect(function (err) {
	if (err) {
		return console.error("Ошибка: " + err.message);
	} else {
		console.log('Подключение к серверу MySQL успешно установлено');
	}
});

app.get(/.*BRAND$/, function (req, res) {
	let reg = /%20/gi;
	let brand = decodeURI(req.url.slice(1).slice(0, -5).replace(reg, ' '));
	let query;
	if (brand == 'All') {
		query = `SELECT * FROM bs`;
	} else {
		query = `SELECT * FROM bs WHERE brand = '${brand}'`;
	}
	connection.query(query, (err, result, field) => {
		res.send(result);
	})
});

app.get(/.*ITEM$/, function (req, res) {
	let reg = /%20/gi;
	let slovo = decodeURI(req.url.slice(1).slice(0, -4).replace(reg, ' '));
	slovo = slovo.split('&');
	let brand = slovo[0];
	let item = slovo[1];
	let query;
	if (brand == 'All') {
		query = `SELECT * FROM bs WHERE category = '${item}'`;
	} else {
		query = `SELECT * FROM bs WHERE brand = '${brand}' AND category = '${item}'`;
	}
	connection.query(query, (err, result, field) => {
		res.send(result);
	})
});
app.get(/.*SEX$/, function (req, res) {
	let reg = /%20/gi;
	let slovo = decodeURI(req.url.slice(1).slice(0, -3).replace(reg, ' '));
	slovo = slovo.split('&');
	let brand = slovo[0];
	let item = slovo[1];
	let query;
	if (brand == 'All') {
		query = `SELECT * FROM bs WHERE sex = '${item}'`;
	} else {
		query = `SELECT * FROM bs WHERE brand = '${brand}' AND sex = '${item}'`;
	}
	connection.query(query, (err, result, field) => {
		res.send(result);
	})
});
app.get(/.*BLEND$/, function (req, res) {
	let reg = /%20/gi;
	let slovo = decodeURI(req.url.slice(1).slice(0, -5).replace(reg, ' '));
	slovo = slovo.split('&');
	let sex = slovo[0];
	let item = slovo[1];
	let query;
	if (item == 'All') {
		query = `SELECT * FROM bs WHERE sex = '${sex}'`;
	} else {
		query = `SELECT * FROM bs WHERE sex = '${sex}' AND category = '${item}'`;
	}
	connection.query(query, (err, result, field) => {
		res.send(result);
	})
});

app.get(/.*ID$/, function (req, res) {
	let id = req.url.slice(1).slice(0, -2)
	let query;
	query = `SELECT * FROM bs WHERE id = '${id}'`;
	connection.query(query, (err, result, field) => {
		res.send(result);
	})
});

http_server.listen(8080, () => {
	console.log('Server started on port 8080');
});
