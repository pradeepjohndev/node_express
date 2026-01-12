import { createServer } from "http";

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello from Node.js server!</h1>");
});

server.listen(3000, () => {
    console.log("Node server running at http://localhost:3000");
});

