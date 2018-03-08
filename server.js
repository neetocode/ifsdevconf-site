var express = require('express')
var cors = require('cors')
var server = express()

server.use(cors())
if (process.env.NODE_ENV == 'production') {
    server.use(function (req, res, next) {
        var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();
        if (schema === 'https') {
            next();
        } else {
            res.redirect('https://' + req.headers.host + req.url);
        }
    });
}
server.use('/facebook', function(req, resp) {
    resp.redirect("https://www.facebook.com/devconftech/")
});
server.use('/instagram', function(req, resp) {
    resp.redirect("https://www.instagram.com/devconftech/")
});
server.use('/', express.static('dist'));


server.get('/', function(req, resp) {
    resp.sendFile('dist/index.html', {
        root: __dirname
    })
})

var port = process.env.PORT || 3000;

server.listen(port, function() {
    console.log('escutando na porta: ' + port)
})