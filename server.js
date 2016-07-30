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

