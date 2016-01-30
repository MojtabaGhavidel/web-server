//in code baraye teste middleware hast ke ba raftan be har safhe chizi ro neshon mide baraye test be
// localhost:3000 va  /about berid


var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000 ;

var middleware = require('./middleware.js');


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
	res.send('Do you like me now?!');
});

 
app.use(express.static(__dirname +'/public' ));

app.listen(PORT , function (){
	console.log('express server started on port ' + PORT)
});