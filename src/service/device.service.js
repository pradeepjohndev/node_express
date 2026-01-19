import Device from "../model/device.js";

export const fetchAllDevices = async () => {
  return await Device.find();
};
