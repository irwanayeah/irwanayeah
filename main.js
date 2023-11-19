const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200); // success status code
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};
const server = http.createServer(requestListener);
server.listen(port, host, function (error) {
    if (error) {
        console.log('Something went wrong', error)
    }
    else {
        console.log(`Server is running on http://${host}:${port}`);
    }
});