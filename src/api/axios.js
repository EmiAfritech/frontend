import axios from "axios";

export default axios.create({
  baseURL: "https://bkdeployments-production.up.railway.app/api",
});
