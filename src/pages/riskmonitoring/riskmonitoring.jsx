import { Sidebar } from "../../component/components/sidebar";
import { RiskMonitor } from "../../component/components/tables";
import {
  MonitoredVsUnmonitored,
  MonitoredVsUnmonitoredBarchart,
} from "../../component/components/charts";
import {RiskMonitoringforms}  from "../../component/components/drawers";
import { ReviewInfo } from "../../component/components/info";
import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useState, useEffect } from "react";
import { DEPARTMENTDROPDOWN_URL } from "../../api/routes";

export function RiskMonitoring() {
  const [deptmentNames, setdeptmentNames] = useState([]);
  const [deptmentName, setdeptmentName] = useState("");
  useEffect(() => {
  axios
      .get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setdeptmentNames(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
      
  }, []);
   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setdeptmentName(e.target.value)

        }catch (error) {
            console.error(error);
        }
    }

  const currentTab = "Monitored Risks";
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar currentTab={currentTab} />
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">

          <div className="flex flex-row m-0">         
            <div className="relative pt-4 mb-6" data-te-input-wrapper-init>
                <select
                 type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="departmentName"
                  aria-describedby="departmentName"
                  value={deptmentName}
                  autoComplete="off"
                  onChange={(e) => setdeptmentName(e.target.value)}
                  placeholder="Select Department"
                  
                  >
                  <option value=""></option>
                  <option value="">All</option>
                  {deptmentNames.map((deptmentNames) => (
                      <option
                        key={deptmentNames.names.id}
                        value={deptmentNames.names.name}
                      >

                        {deptmentNames.names.name}
                      </option>
                  ))}
                  
                </select>
            </div>          
            <div className="pt-4 ml-4">
                <button
                type="submit"
                className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={handleSubmit}
              >
                Select
              </button>
            </div>
          </div>
          
          <div className="flex flex-row m-1">
            
            <MonitoredVsUnmonitoredBarchart names={deptmentName} />
            <div className="flex flex-col justify-center card">
              <Link to="/high-&-Low-Risk">
                <MonitoredVsUnmonitored />
              </Link>
              <ReviewInfo />
            </div>
          </div>
          <RiskMonitor />
        </div>
      </div>
    </div>
  );
}
