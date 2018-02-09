// This app serves some static content from a static path and serves a REST API that's
// defined on the api.yaml swagger 2.0 file
// Usage:
// node server -h

var SwaggerBP = require('swagger-boilerplate');
var Utils = SwaggerBP.Utils;
var Logger = Utils.MultiLevelLogger;
var logger = new Logger('HTTP Server App');

var Server = require('swagger-boilerplate').Server;

var server =
 new Server({
   apiFile: './api.yml',
   modulePath: __dirname + '/server/',
   appName: 'OpentokRTC-V2 Main',
   staticOptions: {
     dotfiles: 'ignore',
     extensions: ['jpg'],
     index: false,
     redirect: false,
     setHeaders: function(res, path) {
       if (path.indexOf('/images/background.jpg') > -1) {
         res.set('Cache-Control', 'max-age=31536000')
       }
     }
   }
 });
var wwwhisper = require('connect-wwwhisper');
// app holds a reference to express or connect framework, it
// may be named differently in your source file.
app.use(wwwhisper());

// Alternatively, if you don't want wwwhisper to insert
// a logout iframe into HTML responses use.
app.use(wwwhisper(false));

server.start();
