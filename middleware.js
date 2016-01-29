


//1 object jadid be name middleware misazim
var middleware = {
	//middleware sathe route hast
	/*dar zir next ro gharar dadim chun Authentication ghabl az route about ejre
	mishe va agar dorost amal kard be badi mire.agar ham na ke error ro namayesh midim*/
	requireAuthentication : function (req, res, next) {
		console.log('private route hit');
		next();
			},
			//1 object be name loger misazim
			logger: function (req, res, next) {
				//zamane darkhast ro neshon mide
				var time = new Date().toString();

				//mikhaim safheyi ke be on req bode ro neshon bedim.bedone APP.USE kar nemikune ln16
				//req.method noe darkharst ro mide masalan GET,req.originalUrl safheye darkhaste shude roconsole imkune
				console.log('request' + time + ' ' + req.method + ' ' + req.originalUrl);
				//next nazarim khate badi ejra nemishe
				next();
			}
	};

	module.exports = middleware;