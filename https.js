import express from "express";
import https from "https";
import fs from "fs";
import WebSocket, { WebSocketServer } from "ws";
const app = express();

const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

const wss = new WebSocketServer({ server });

app.get("/", (req, res) => {
  res.send("Secure IT Monitoring Server is running.");
});

wss.on("connection", (ws, req) => {
  console.log("New secure WebSocket connection");

  ws.on("message", (message) => {
    console.log("Received:", message.toString());

    ws.send(
      JSON.stringify({
        status: "ok",
        received: message.toString(),
      })
    );
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`HTTPS server running at https://localhost:${PORT}`);
  console.log(`WSS endpoint available at wss://localhost:${PORT}`);
});
