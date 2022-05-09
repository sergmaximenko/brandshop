var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {

  if (req.url == '/js/data/СASIO.json' || req.url == '/js/data/adidasOriginals.json' ||
	 req.url == '/js/data/AlphaIndistries.json' || req.url == '/js/data/BookPublishers.json' ||
	 req.url == '/js/data/BubbleGum.json' || req.url == '/js/data/C.P.Company.json' ||
	 req.url == '/js/data/CalvinKleinJeans.json' || req.url == '/js/data/CanadaGoose.json' ||
	 req.url == '/js/data/ChampionReverseWeave.json' || req.url == '/js/data/CommedesGarconsSHIRT.json' ||
	 req.url == '/js/data/Converse.json' || req.url == '/js/data/Crocs.json' ||
	 req.url == '/js/data/DanielWellington.json' || req.url == '/js/data/Dr.Martens.json' ||
	 req.url == '/js/data/Edwin.json' || req.url == '/js/data/Evisu.json' ||
	 req.url == '/js/data/Hackett.json' || req.url == '/js/data/HellyHansen.json' ||
	 req.url == '/js/data/Lacoste.json' || req.url == '/js/data/Levis.json' ||
	 req.url == '/js/data/LigneBlanche.json' || req.url == '/js/data/MA.Strum.json' ||
	 req.url == '/js/data/maharishi.json' || req.url == '/js/data/MaisonKitsune.json' ||
	 req.url == '/js/data/MARKET.json' || req.url == '/js/data/Master-piece.json' ||
	 req.url == '/js/data/MedicomToy.json' || req.url == '/js/data/MKIMiyuki-Zoku.json' ||
	 req.url == '/js/data/MSGM.json' || req.url == '/js/data/Napapijri.json' ||
	 req.url == '/js/data/NativeUnion.json' || req.url == '/js/data/NewBalance.json' ||
	 req.url == '/js/data/Nike.json' || req.url == '/js/data/NorseProjects.json' ||
	 req.url == '/js/data/Oakley.json' || req.url == '/js/data/PeacefulHooligan.json' ||
	 req.url == '/js/data/PoloRalphLauren.json' || req.url == '/js/data/Porter-Yoshida&Co.json' ||
	 req.url == '/js/data/Puma.json' || req.url == '/js/data/RAINS.json' ||
	 req.url == '/js/data/Ray-Ban.json' || req.url == '/js/data/Reebok.json' ||
	 req.url == '/js/data/Ripndip.json' || req.url == '/js/data/Sandqvist.json' ||
	 req.url == '/js/data/Seiko.json' || req.url == '/js/data/StoneIsland.json' ||
	 req.url == '/js/data/TheNorthFace.json' || req.url == '/js/data/thisisneverthat.json' ||
	 req.url == '/js/data/Timberland.json' || req.url == '/js/data/Timex.json' ||
	 req.url == '/js/data/TommyJeans.json' || req.url == '/js/data/uniformexperiment.json' ||
	 req.url == '/js/data/UniversalWorks.json' || req.url == '/js/data/Vans.json' ||
	 req.url == '/js/data/Victorinox.json' || req.url == '/js/data/Y-3.json' ||
	 req.url == '/js/data/YEEZY.json' || req.url == '/js/data/All.json') {
    file.serve(req, res);
}


// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}