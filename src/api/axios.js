import axios from "axios";

export default axios.create({
  //https://bkdeployments-production.up.railway.app/api
  baseURL: "http://localhost:8001/api",
});
