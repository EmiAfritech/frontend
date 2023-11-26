import axios from "axios";

export default axios.create({
  baseURL: "https://backendfordeployment-production.up.railway.app/api",
});
