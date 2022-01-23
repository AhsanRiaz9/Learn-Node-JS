const http = require('http');

const server = http.createServer(function(req, res){
    let url = req.url.toLowerCase();
    if(url=='/'){
        res.end("<h1>Welcome to Node JS</h1>");
    }
    else if(url=='/about'){
        res.end("<h1>About Page</h1>");
    }
    else if(url=='/contact')
    {
        res.end('<h1>Contact Us Page</h1>')
    }
    else{
        res.end("404 - Page not found");
    }    
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server address is 127.0.0.1/${port}`);