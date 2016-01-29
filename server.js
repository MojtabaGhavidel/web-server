//in code baraye teste middleware hast ke ba raftan be har safhe chizi ro neshon mide baraye test be
// localhost:3000 va  /about berid


var express = require('express');

var app = express();
var PORT = 3000 ;

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

	app.use(middleware.logger);
 
/*middleware ro be app ezafe mikunim.tartibe ezafe karde onha moheme.masalan agar
zire rout mizashtim hichvaght ejra namishud pas ayad on ro dar bala gharar bedim*/
/*app.use middleware ba sathe application hast.baraye har page request va har  route hiti farakhani mishe*/
//comment kardim ta be route ABOUT ezafash kunim 
//app.use(middleware.requireAuthentication);

/*agar bekhaim  khate bala faAl beshe baya middleware.requireAuthentication
ro az zir pak kunim*/
//middleware zire sathe route hast va faghat dar /about amal mikune
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('Do you like me now?');
});


app.use(express.static(__dirname +'/public' ));

app.listen(PORT , function (){
	console.log('express server started on port ' + PORT)
});