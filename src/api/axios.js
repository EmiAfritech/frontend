import axios from "axios";

export default axios.create({
  //https://bkdeployments-production.up.railway.app/api
  baseURL: "http://riskappbackend.eu-4.evennode.com/api",
});
