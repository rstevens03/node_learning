var http = require("http");
var url = require("url");

var route = {
    routes : {},
    for: function(path, handler){
        this.routes[path] = handler;
    }
};

route.for("/start", function(request, response){
    response.writeHead(200, {"Content-TYpe" : "text/plain"});
    response.write("Hello");
    response.end();
});

function process_request(req, res) {
    var body = 'Thanks for calling!\n';
    var content_length = body.length;
    
    res.writeHead(200, {'Content-Length': content_length, 'Content-TYpe': 'text/plain'});
    res.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);

