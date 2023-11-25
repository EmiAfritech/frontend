import { Sidebar } from "../../../component/components/sidebar";
import { ViewClosedRisk } from "../../../component/components/info";
import { RiskViewTable } from "../../../component/components/tables";
import "../../../component/comstyles/component.css";
import {
  OpenVsClose,
  RiskBarchart,
} from "../../../component/components/charts";
import { ReviewInfo } from "../../../component/components/info";
import "../../../component/comstyles/component.css";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";
import { DEPARTMENTDROPDOWN_URL } from "../../../api/routes";
import {Riskforms}  from "../../../component/components/drawers";


export function AdminRiskView() {
    const [deptmentNames, setdeptmentNames] = useState([]);
    const [deptmentName, setdeptmentName] = useState("All Departments");
    
    
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
            
        })
        .catch((error) => {
            console.error(error);
        });
        
    }, []);
    
    
 
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar/>
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
            <div className="flex flex-row m-0">  
                       
                <div className="relative pt-6 mb-6" data-te-input-wrapper-init>
                    
                    <select
                    type="text"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="departmentName"
                    aria-describedby="departmentName"
                    value={deptmentName}
                    autoComplete="off"
                    onChange={(e) => setdeptmentName(e.target.value)}
                    
                    
                    >
                    <option value="All Departments">All Departments</option>
                    {deptmentNames.map((deptmentNames) => (
                        <option
                            key={deptmentNames.names.id}
                            value={deptmentNames.names.name}
                        >

                            {deptmentNames.names.name}
                        </option>
                    ))}
                    
                    </select>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Select a Department:
                    </label> 
                </div>          
               
            </div>
            <div className="flex flex-row m-1">
                <div className="pt-4 ml-4">
                        <div
                            
                            className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            >
                                <Riskforms />
                            </div>
                    
                </div>
            </div>
            <div className="flex flex-row m-2">

                <RiskBarchart names={deptmentName}/>
                <div className="flex flex-col justify-center card">
                <Link to="/high-&-Low-Risk">
                    <OpenVsClose names={deptmentName}/>
                </Link>
                <ReviewInfo />
                </div>
            </div>
          <div>   
            <ViewClosedRisk />
            <RiskViewTable names={deptmentName}/>
          </div>   
        </div>
      </div>
    </div>
  );
}
