const fs = require('fs');

var files = fs.readdirSync(__dirname + '/vhost');

var finalConfig = new Array();

  finalJson = () => {
    for (var i in files) {
        var vhost = fs.readFileSync(__dirname +'/vhost/'+files[i])
        finalConfig = finalConfig.concat(JSON.parse(vhost));
      }
      return finalConfig;
  }

  module.exports = {
    finalJson
  }
