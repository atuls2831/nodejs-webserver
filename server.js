// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ),
    vhost = require( 'vhost' );
    http = require('http');
    conf = require(application_root + '/vhost.js');

function createVirtualHost(domainName, dirPath) {
    return vhost(domainName, express.static( dirPath ));
}

//Create server
var app = express();

const config = conf.finalJson();
config.forEach( element => {
    var finalStr = application_root + element.root + 'index.js' ;
    console.log(finalStr);
    var site_root = require(finalStr);
    var host = vhost(element.domain, site_root);
    app.use(host);
  
});

//Start server
var port = 3000;
//app.listen( port, function() {
//    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
//});

http.createServer(app).listen(port, function(){
    console.log("vhost enabled Express server listening on port " + app.get('port'));
  });