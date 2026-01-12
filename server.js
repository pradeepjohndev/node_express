import express, { json, static as staticFiles } from "express";
const app = express();

app.use(json());

app.use(staticFiles("public"));

app.get("/hello", (req, res) => {
    res.send("Hello from GET request!");
});

app.post("/submit", (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello ${name}, data received successfully!` });
});

app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});
