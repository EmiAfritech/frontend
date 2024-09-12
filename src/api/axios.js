import axios from "axios";
export default axios.create({
  //https://bkdeployments-production.up.railway.app/api
  baseURL: "https://risksaasbackend-production.up.railway.app/api",
});
