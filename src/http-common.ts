import axios from "axios";
import { config } from "@/services/WiseNetWaveDataService/config";

export default axios.create({
  baseURL: config.url,
  headers: {
    "Content-type": "application/json"
  }
});
