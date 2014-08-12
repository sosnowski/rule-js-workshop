var http = require('http'),
    url = require('url'),
    fs = require('fs');

var server = http.createServer(function (req, res) {

    var path = url.parse(req.url, true).path;
    var fileName = '';
    var content = '';

    switch (path) {
        case '/':
            fileName = 'index.html';
            break;
        case '/view1':
            fileName = 'view1.html';
            break;
        case '/view2':
            fileName = 'view2.html';
            break;
    }

    if (fileName) {
        content = fs.readFileSync('./' + fileName);
    }
    setTimeout(function () {
        res.writeHead(200);
        res.write(content);
        res.end();
    }, 1500);
});

var port = 8000;
server.listen(port, function () {
    console.log('server listening on port - ' + port);
});
