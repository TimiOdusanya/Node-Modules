const http = require ('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end("Welcome to the home page")
    }
    if (req.url === '/about'){
        res.end('This is the about page')
    }
    res.end(`
        <h1>Error!</h1>
        <p>The page you are looking for does not exist</p>
        <a href="/">Back to home page</a>
    `)
})

server.listen(3000);