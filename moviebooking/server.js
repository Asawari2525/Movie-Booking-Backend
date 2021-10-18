const http = require('http');
const port = 9000;

const app = http.createServer((req,res)=>{
    if(req.url === '/movies' && req.method === 'GET'){
        res.writeHead(200);
        res.end('All Movies Data in JSON format from Mongo DB');
    }else if(req.url === '/geners' && req.method === 'GET'){
        res.writeHead(200);
        res.end('All Genres Data in JSON format from Mongo DB');
    }else if(req.url === '/artists' && req.method === 'GET'){
        res.writeHead(200);
        res.end('All Artists Data in JSON format from Mongo DB');
    }else{
        res.writeHead(404);
<<<<<<< HEAD
        res.end('Not Found');
=======
        res.end('Not Found!!');
>>>>>>> 56575fb0bc2cb56a8303134e41743a52e98beab6
    }
})

app.listen(port);
