import express from "express";
import deviceRoutes from "./routes/device.route.js";

const app = express();

app.use(express.json());

app.use("/devices", deviceRoutes);

export default app;
