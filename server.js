var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {

  if (req.url == '/js/data/Adidas.json' || req.url == '/js/data/CPCompany.json' ||
	 req.url == '/js/data/AlphaIndustries.json' || req.url == '/js/data/BookPublishers.json' ||
	 req.url == '/js/data/CalvinKleinJeans.json' || req.url == '/js/data/CanadaGoose.json' ||
	 req.url == '/js/data/Casio.json' || req.url == '/js/data/ChampionReverseWeave.json' ||
	 req.url == '/js/data/CommedesGarconsSHIRT.json' || req.url == '/js/data/DanielWellington.json' ||
	 req.url == '/js/data/Edwin.json' || req.url == '/js/data/Evisu.json' ||
	 req.url == '/js/data/Hackett.json' || req.url == '/js/data/HellyHansen.json' ||
	 req.url == '/js/data/Lacoste.json' || req.url == '/js/data/Levis.json' ||
	 req.url == '/js/data/LigneBlanche.json' || req.url == '/js/data/maharishi.json' ||
	 req.url == '/js/data/MaisonKitsune.json' || req.url == '/js/data/MARKET.json' ||
	 req.url == '/js/data/MasterPiece.json' || req.url == '/js/data/MAStrum.json' ||
	 req.url == '/js/data/MedicomToy.json' || req.url == '/js/data/MKIMiyukiZoku.json' ||
	 req.url == '/js/data/MSGM.json' || req.url == '/js/data/Napapijri.json' ||
	 req.url == '/js/data/NativeUnion.json' || req.url == '/js/data/NewBalance.json' ||
	 req.url == '/js/data/Nike.json' || req.url == '/js/data/NorseProjects.json' ||
	 req.url == '/js/data/Oakley.json' || req.url == '/js/data/PeacefulHooligan.json' ||
	 req.url == '/js/data/PoloRalphLauren.json' || req.url == '/js/data/PorterYoshidaCo.json' ||
	 req.url == '/js/data/Puma.json' || req.url == '/js/data/RAINS.json' ||
	 req.url == '/js/data/RayBan.json' || req.url == '/js/data/Reebok.json' ||
	 req.url == '/js/data/Ripndip.json' || req.url == '/js/data/Sandqvist.json' ||
	 req.url == '/js/data/Seiko.json' || req.url == '/js/data/StoneIsland.json' ||
	 req.url == '/js/data/TheNorthFace.json' || req.url == '/js/data/thisisneverthat.json' ||
	 req.url == '/js/data/Timberland.json' || req.url == '/js/data/Timex.json' ||
	 req.url == '/js/data/TommyJeans.json' || req.url == '/js/data/UniversalWorks.json' ||
	 req.url == '/js/data/Vans.json' || req.url == '/js/data/Y3.json' ||
	 req.url == '/js/data/YEEZY.json' || req.url == '/js/data/uniformExperiment.json' ||
	 req.url == '/js/data/BubbleGum.json' || req.url == '/js/data/Victorinox.json' ||
	 req.url == '/js/data/Crocs.json' || req.url == '/js/data/All.json') {
    file.serve(req, res);
}


// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}