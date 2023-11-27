import axios from "axios";

export default axios.create({
  baseURL: "https://bkdeployment-production.up.railway.app/api",
});
