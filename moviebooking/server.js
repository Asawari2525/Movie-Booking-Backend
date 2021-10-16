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
        res.end('');
    }
})

app.listen(port);