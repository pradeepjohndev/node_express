import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  name: String,
  status: String,
  cpu: Number,
  memory: Number,
});

export default mongoose.model("Device", deviceSchema);
