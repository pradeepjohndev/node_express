import express, { json } from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let collection;

async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB Connected!");

    const db = client.db("companydb");
    collection = db.collection("employees");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });

  } catch (error) {
    console.error("Connection error:", error);
  }
}

app.post("/add-employee", async (req, res) => {
  try {
    const newEmployee = req.body;

    const result = await collection.insertOne(newEmployee);

    res.status(201).json({
      message: "Employee added successfully",
      id: result.insertedId
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Insertion failed" });
  }
});

startServer();
