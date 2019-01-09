const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'fernadno',
            edad: 24,
            url: req.url
        };
        res.write(JSON.stringify(salida));

        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8888);

console.log('Escuchando el puerto 8080');

//entrar a: http://127.0.0.1:8888/