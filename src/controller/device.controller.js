import { fetchAllDevices } from "../service/device.service.js";

export const getAllDevices = async (req, res) => {
  try {
    const devices = await fetchAllDevices();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
