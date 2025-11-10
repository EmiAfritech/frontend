import axios from "axios";
export default axios.create({
  //https://bkdeployments-production.up.railway.app/api

 // baseURL: "https://ermbackend.afriquetek.com/api/v1/",
  baseURL: "http://dev-ermbackend.afriquetek.com/"
 //baseURL: "https://risksaasbackend-production.up.railway.app/api/v1"
  //baseURL: "risksaasbackend-production-4eb8.up.railway.app"
});
 