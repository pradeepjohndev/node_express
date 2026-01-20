import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const newEmployee = {
            name: "Akhil",
            role: "Tester",
            age: 22
        };

        const db = client.db("companyDB");
        const collection = db.collection("employees");
        const result = await collection.insertOne(newEmployee);
        console.log("Inserted ID:", result.insertedId);
        console.log("Database and collection ready!");
    } catch (error) {
        console.error("Error:", error);
    }
}

connectDB();
