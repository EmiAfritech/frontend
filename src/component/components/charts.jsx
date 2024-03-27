import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  YAxis,
  XAxis,
  LineChart,
  Tooltip,
  Line,
} from "recharts";
import React from "react";
import { HighLowBarData, pyramid } from "./chartdata";
import Chart from "react-apexcharts";
import Funnel, { Item, Border, Label, Font } from "devextreme-react/funnel";

import "../comstyles/component.css";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import {
  MITIGATEDVSUNMITIGATEDCHAT_URL,
  MONITOREDVSUNMONITOREDRISKSCHART_URL,
  OPENVSCLOSEBARCHART_URL,
  REVIEWEDVSUNREVIEWEDCHART_URL,
  RISKLINECHART_URL,
  RISKSTATUSREPORTCHART_URL,
  RISKLOCATIONREPORT_URL,
  RISKOWNERREPORT_URL,
  RISKLEVELPYRAMIDCHART_URL,
  RISKRESPONSEREPORT_URL,
  RISKLEVELREPORT_URL,
  RISKCATEGORYREPORT_URL,
  MONITOREDVSUNMONITOREDBARCHARTDATA_URL,
  OPENVSCLOSEBASEDONDEPARTMENT_URL,
  HEATMAP_URL,
  OPENVSCLOSECHART_URL,
  DEPARTMENTDROPDOWN_URL,
  RISKYEARSCHART_URL,
} from "../../api/routes";
import { RiskReportAdvice } from "./info";
import { Button } from "@mui/material";
import { RiskMitigationReportTable } from "./tables";
import { reportriskpyramidcolumn } from "./datatable";
import { DataGrid } from "@mui/x-data-grid";

export function OpenVsClose() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(OPENVSCLOSECHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, [data]);

  return (
    <div className=" items-center flex flex-col px-8 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>OPEN </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>CLOSE</span>
      </h3>
      <PieChart width={180} height={180}>
        <Pie dataKey="value" data={data} outerRadius={85} innerRadius={50} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function MitigatedVsUnmitigated() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(MITIGATEDVSUNMITIGATEDCHAT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="items-center flex flex-col  px-8 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>MITIGATED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNMITIGATED</span>
      </h3>
      <PieChart width={200} height={180}>
        <Pie dataKey="value" data={data} outerRadius={85} innerRadius={50} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function ReviewedVsUnreviewed() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(REVIEWEDVSUNREVIEWEDCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className=" items-center flex flex-col px-6 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>REVIEWED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNREVIEWED</span>
      </h3>
      <PieChart width={200} height={180}>
        <Pie dataKey="value" data={data} outerRadius={85} innerRadius={50} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function MonitoredVsUnmonitored() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(MONITOREDVSUNMONITOREDRISKSCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className=" items-center flex flex-col px-8 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>MONITORED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNMONITORED</span>
      </h3>
      <PieChart width={200} height={180}>
        <Pie dataKey="value" data={data} outerRadius={85} innerRadius={50} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function RiskBarChart() {
  const [data, setData] = useState();
  const yr = new Date().getFullYear();
  const [year, setYear] = useState(yr.toString());
  const [years, setYears] = useState([]);
  

    useEffect(() => {
    const fetchRiskData = async () => {
      try {
        const response = await axios.get(RISKYEARSCHART_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setYears(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRiskData();
  }, []);
  


   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          OPENVSCLOSEBARCHART_URL,
          JSON.stringify({ year }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [year]); 

  const handleYearChange = (e) => {
      setYear(e.target.value);
      
  };
  return (
    <div className="p-3 card">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4"/>
        <div className="flex flex-row">
          <section className="m-2"><p>Years</p></section>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={year}
            autoComplete="off"
            onChange={handleYearChange}>
            {years.map((years) => (
              <option
                key={years.id}
                value={years.year}>
                {years.year}
              </option>
          
            ))}
          </select>
        </div>
      </div>
      <BarChart width={760} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
        <XAxis dataKey="name" />
        <Bar dataKey="Opened" fill="#cc23b3" />
        <Bar dataKey="Closed" fill="#2394cc" />
        <Tooltip />
      </BarChart>
    </div>
  );
}
export function MonitoredVsUnmonitoredBarchart() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(MONITOREDVSUNMONITOREDBARCHARTDATA_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },withCredentials: true,
      })
      .then((data) => {
        setData(data.data);
      });
  }, [data]);
  return (
    <div className="p-3 card">
      <BarChart width={760} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
        <XAxis dataKey="name" />
        <Bar dataKey="Monitored" fill="#cc23b3" />
        <Bar dataKey="UnMonitored" fill="#2394cc" />
        <Tooltip />
      </BarChart>
    </div>
  );
}


export function HighLowRiskBarchart() {
  return (
    <div className="card p-3">
      <BarChart width={1100} height={300} data={HighLowBarData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="high" fill="#cc23b3" />
        <Bar dataKey="low" fill="#2394cc" />
      </BarChart>
    </div>
  );
}

export function RiskLineChart() {
  const [data, setData] = useState();
  const yr = new Date().getFullYear();
  const [year, setYear] = useState(yr.toString());
  const [years, setYears] = useState([]);
 

  

  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        const response = await axios.get(RISKYEARSCHART_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setYears(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRiskData();
  }, []);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKLINECHART_URL,
          JSON.stringify({ year }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [year]); 

  const handleYearChange = (e) => {
    setYear(e.target.value);
    console.log(year)
  };

  return (
    <div className="p-12 mt-12 card bg-white">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4"/>
        <div className="flex flex-row">
          <section className="m-2"><p>Years</p></section>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={year}
            autoComplete="off"
            onChange={handleYearChange}>
            {years.map((years) => (
              <option
                key={years.id}
                value={years.year}>
                {years.year}
              </option>
          
            ))}
          </select>
        </div>
      </div>
      <LineChart width={920} height={300} data={data} margin={{ top: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="risk" stroke="#cc23b3" />
      </LineChart>
    </div>
  );
}

export function ReportRiskLevel() {
  const [data, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKLEVELREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };


  
  return (
    <div className="card items-center flex flex-col px-10 pb-12">
      <h3 className="py-3">
        <span>RISK LEVEL</span>
      </h3>
      <div>
        <div>
          {localStorage.getItem("role")==="ADMIN" || localStorage.getItem("role")=== "GENERAL MANAGER"? (
          <>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={departmentName}
            autoComplete="off"
            onChange={handleDeptNameChange}>
            <option value="All Departments">All Departments</option>
            {deptmentNames.map((deptmentNames) => (
              <option
                key={deptmentNames.names.id}
                value={deptmentNames.names.name}>
                {deptmentNames.names.name}
              </option>
            ))}
          </select>
          </>):(<></>)}
          
        </div>
      </div>
      <PieChart width={210} height={250}>
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function ReportRiskStatus() {
  const [data, setData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKSTATUSREPORTCHART_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

  
  return (
    <div className="card items-center flex flex-col px-10 pb-2">
      <h3 className="py-3">
        <span>RISK STATUS</span>
      </h3>
      <div>
        <div>
        {localStorage.getItem("role")==="ADMIN" || localStorage.getItem("role")=== "GENERAL MANAGER"? (
          <>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={departmentName}
            autoComplete="off"
            onChange={handleDeptNameChange}>
            <option value="All Departments">All Departments</option>
            {deptmentNames.map((deptmentNames) => (
              <option
                key={deptmentNames.names.id}
                value={deptmentNames.names.name}>
                {deptmentNames.names.name}
              </option>
            ))}
          </select>
          </>):(<></>)}
        </div>
      </div>
      <PieChart width={210} height={250}>
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function ReportRiskLocation() {
  const [data, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKLOCATIONREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

  
  return (
    <div className="card items-center flex flex-col px-8 pb-12">
      <h3 className="py-3">
        <span>LOCATION</span>
      </h3>
      <div>
        <div>
        {localStorage.getItem("role")==="ADMIN" || localStorage.getItem("role")=== "GENERAL MANAGER"? (
          <>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={departmentName}
            autoComplete="off"
            onChange={handleDeptNameChange}>
            <option value="All Departments">All Departments</option>
            {deptmentNames.map((deptmentNames) => (
              <option
                key={deptmentNames.names.id}
                value={deptmentNames.names.name}>
                {deptmentNames.names.name}
              </option>
            ))}
          </select>
          </>):(<></>)}
        </div>
      </div>
      <PieChart width={210} height={250}>
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function ReportRiskCategory() {
  const [data, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKCATEGORYREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };


  return (
    <div className="card items-center flex flex-col px-8 pb-12">
      <h3 className="py-3">
        <span>CATEGORY</span>
      </h3>
      <div>
        <div>
        {localStorage.getItem("role")==="ADMIN" || localStorage.getItem("role")=== "GENERAL MANAGER"? (
          <>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={departmentName}
            autoComplete="off"
            onChange={handleDeptNameChange}>
            <option value="All Departments">All Departments</option>
            {deptmentNames.map((deptmentNames) => (
              <option
                key={deptmentNames.names.id}
                value={deptmentNames.names.name}>
                {deptmentNames.names.name}
              </option>
            ))}
          </select>
          </>):(<></>)}
        </div>
      </div>
      <PieChart width={210} height={250}>
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function ReportRiskResponse() {
  const [data, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKRESPONSEREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

 
  return (
    <div className="card items-center flex flex-col px-8 pb-2">
      <h3 className="py-3">
        <span>RISK RESPONSE</span>
      </h3>
      <div>
        <div>
        {localStorage.getItem("role")==="ADMIN" || localStorage.getItem("role")=== "GENERAL MANAGER"? (
          <>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={departmentName}
            autoComplete="off"
            onChange={handleDeptNameChange}>
            <option value="All Departments">All Departments</option>
            {deptmentNames.map((deptmentNames) => (
              <option
                key={deptmentNames.names.id}
                value={deptmentNames.names.name}>
                {deptmentNames.names.name}
              </option>
            ))}
          </select>
          </>):(<></>)}
        </div>
      </div>
      <PieChart width={210} height={250}>
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function ReportRiskOwner() {
  const [data, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKOWNERREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

  return (
    <div className="card items-center flex flex-col px-8 pb-12">
      <h3 className="py-3">
        <span>OWNER</span>
      </h3>
      <div>
        <div>
        {localStorage.getItem("role")==="ADMIN" || localStorage.getItem("role")=== "GENERAL MANAGER"? (
          <>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={departmentName}
            autoComplete="off"
            onChange={handleDeptNameChange}>
            <option value="All Departments">All Departments</option>
            {deptmentNames.map((deptmentNames) => (
              <option
                key={deptmentNames.names.id}
                value={deptmentNames.names.name}>
                {deptmentNames.names.name}
              </option>
            ))}
          </select>
          </>):(<></>)}
        </div>
      </div>
      <PieChart width={210} height={250}>
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export function Pyramidchat() {
  const [data, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  const [tableData, settableData] = useState([]);
  const [pyramidRiskTable, setPyramidRiskTable] = useState(false)
  console.log(data)



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKLEVELPYRAMIDCHART_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

  const handleItemClick = (e) => {
    const clickedItem = e.item;
    console.log(clickedItem.data); // Log the color of the clicked item
  };

  const handleRiskAdvice = (e) => {
    setPyramidRiskTable(false)
  };

  const handlePyramidRiskTable = (e) => {
    setPyramidRiskTable(true)
  }
  return (
    <>
      <div>
        <div className="grid grid-cols-4">
          <div>
          {localStorage.getItem("role")==="ADMIN" || localStorage.getItem("role")=== "GENERAL MANAGER"? (
          <>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={departmentName}
            autoComplete="off"
            onChange={handleDeptNameChange}>
            <option value="All Departments">All Departments</option>
            {deptmentNames.map((deptmentNames) => (
              <option
                key={deptmentNames.names.id}
                value={deptmentNames.names.name}>
                {deptmentNames.names.name}
              </option>
            ))}
          </select>
          </>):(<></>)}
          </div>
        </div>
        <div>
          <Funnel
            id="pyramid"
            dataSource={data}
            sortData={false}
            inverted={true}
            algorithm="dynamicHeight"
            palette="Harmony Light"
            argumentField="level"
            valueField="count"
            onItemClick={handleItemClick}>
            <Tooltip enabled={true} />
            <Item>
              <Border visible={true} />
            </Item>
            <Legend visible={true} />
            <Label
              visible={true}
              horizontalAlignment="right"
              backgroundColor="none">
              <Font size={16} />
            </Label>
          </Funnel>
        </div>
        <div className="grid grid-cols-6 gap-4 pt-5">
          <Button className="px-4" onClick={handleRiskAdvice} variant="text" size="large"> Risk Advice</Button>
          <Button className="px-4" onClick={handlePyramidRiskTable} size="small" variant="outlined">View Table</Button>
        </div>
        <div>
          {pyramidRiskTable?
          (<>
          <div
          style={{ height: 650, width: 800, backgroundColor: "white" }}
          className=" mt-4">
          <DataGrid
          rows={tableData}
          columns={reportriskpyramidcolumn}
          pageSize={10}
          pagination
        />
          </div>
          
          </>):(<RiskReportAdvice/> )}
        </div>
      </div>
    </>
  );
}


export function HeatMap3() {

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(HEATMAP_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },withCredentials: true,
      })
      .then((data) => {
        setData(data.data);
      });
  }, [data]);

  const options = {
    chart: {
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: 1,
              to: 5,
              name: "Low",
              color: "#008000",
            },
            {
              from: 6,
              to: 9,
              name: "Medium",
              color: "#002db3",
            },
            {
              from: 10,
              to: 15,
              name: "High",
              color: "#ffcc00",
            },
            {
              from: 16,
              to: 25,
              name: "Very High",
              color: "#ff0000",
            },
          ],
        },
      },
    },
    xaxis: {
      title: {
        text: "Likelihood", // Label for the x-axis
      },
    },
    yaxis: {
      title: {
        text: "Impact", // Label for the y-axis
      },
    },
  };

  const series = [
    {
      name: "rare",
      data: [
        { x: "insignificant", y: 1 },
        { x: "minor", y: 2 },
        { x: "moderate", y:0 },
        { x: "major", y: 4 },
        { x: "critical", y: 5 },
      ],
    },
    {
      name: "unlikely",
      data: [
        { x: "insignificant", y: 2 },
        { x: "minor", y: 4 },
        { x: "moderate", y: 6 },
        { x: "major", y: 8 },
        { x: "critical", y: 10 },
      ],
    },
    {
      name: "possible",
      data: [
        { x: "insignificant", y: 3 },
        { x: "minor", y: 6 },
        { x: "moderate", y: 9 },
        { x: "major", y: 0},
        { x: "critical", y: 15 },
      ],
    },
    {
      name: "likely",
      data: [
        { x: "insignificant", y: 4 },
        { x: "minor", y: 8 },
        { x: "moderate", y: 12 },
        { x: "major", y: 16 },
        { x: "critical", y: 20 },
      ],
    },
    {
      name: "almost certain",
      data: [
        { x: "insignificant", y: 5 },
        { x: "minor", y: 10 },
        { x: "moderate", y: 15 },
        { x: "major", y: 20 },
        { x: "critical", y: 25 },
      ],
    },
  ];
  
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        height={550}
        width={900}
      />
    </div>
  );
}

export function HeatMap2() {
  const [series, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          HEATMAP_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

  
  const options = {
    chart: {
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: 1,
              to: 5,
              name: "Low",
              color: "#008000",
            },
            {
              from: 6,
              to: 9,
              name: "Medium",
              color: "#002db3",
            },
            {
              from: 10,
              to: 15,
              name: "High",
              color: "#ffcc00",
            },
            {
              from: 16,
              to: 25,
              name: "Very High",
              color: "#ff0000",
            },
          ],
        },
      },
    },
    xaxis: {
      title: {
        text: "Likelihood", // Label for the x-axis
      },
    },
    yaxis: {
      title: {
        text: "Impact", // Label for the y-axis
      },
    },
  };

  
  
  return (
    <div>
      <div className="grid grid-cols-4">
          <div>
            <select
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              aria-describedby="departmentName"
              value={departmentName}
              autoComplete="off"
              onChange={handleDeptNameChange}>
              <option value="All Departments">All Departments</option>
              {deptmentNames.map((deptmentNames) => (
                <option
                  key={deptmentNames.names.id}
                  value={deptmentNames.names.name}>
                  {deptmentNames.names.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        height={550}
        width={900}
      />
    </div>
  );
}
function valuesForHeatMap(heapMapData, finalData) {
  let index = 0;
   for(const data of heapMapData){

        
        finalData[index].value = data.value;
        index++;
    }
    return finalData;
}

export function HeatMap5() {
  const [series, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  let cellsData = [
      { color: 'green', value: '' },
      { color: 'blue', value: '' },
      { color: 'yellow', value: '' },
      { color: 'red', value: '' },
      { color: 'red', value: '' },
      { color: 'green', value: '' }, // Empty value, turns white

      { color: 'blue', value: '' },
      { color: 'yellow', value: '' },
      { color: 'red', value: '' },
      { color: 'red', value: '' },
      { color: 'green', value: '' },
      { color: 'blue', value: '' },

      { color: 'blue', value: '' },
      { color: 'yellow', value: '' },
      { color: 'yellow', value: '' },
      { color: 'green', value: '' },
      { color: 'green', value: '' },
      { color: 'blue', value: '' },
      { color: 'blue', value: '' },

      { color: 'blue', value: '' },
      { color: 'green', value: '' },
      { color: 'green', value: '' },
      { color: 'green', value: '' },
      { color: 'green', value: '' },
      { color: 'green', value: '' },
  ];
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          HEATMAP_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );
        setData(response.data);
        cellsData = valuesForHeatMap(series, cellsData);
        console.log(series,cellsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
  };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

  
    return (
      <div>
        <div className="grid grid-cols-4">
          <div>
            <select
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              aria-describedby="departmentName"
              value={departmentName}
              autoComplete="off"
              onChange={handleDeptNameChange}>
              <option value="All Departments">All Departments</option>
              {deptmentNames.map((deptmentNames) => (
                <option
                  key={deptmentNames.names.id}
                  value={deptmentNames.names.name}>
                  {deptmentNames.names.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px',marginLeft: '60px' }}>
          {cellsData.map((cell, index) => (
            <div
              key={index}
              style={{
                backgroundColor: cell.value ? cell.color : 'white',
                height: '110px',
                width: '150px',
                borderRadius: '4px',
                textAlign: 'center',
                lineHeight: '50px',
                color: 'white',
              }}
            >
              {cell.value}
            </div>
          ))}
        </div>
      </div>
    );
}

export function HeatMap() {
  const [series, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  
  let cellsData = [
    { color: 'green', value: 'A' },
    { color: 'blue', value: 'B' },
    { color: 'yellow', value: 'C' },
    { color: 'red', value: 'D' },
    { color: 'red', value: 'E' },
    { color: 'green', value: '' }, // Empty value, turns white

    { color: 'blue', value: 'G' },
    { color: 'yellow', value: 'H' },
    { color: 'red', value: 'I' },
    { color: 'red', value: 'J' },
    { color: 'green', value: 'K' },
    { color: 'blue', value: 'L' },

    { color: 'blue', value: 'M' },
    { color: 'yellow', value: 'N' },
    { color: 'yellow', value: 'O' },
    { color: 'green', value: 'P' },
    { color: 'green', value: 'q' },
    { color: 'blue', value: 'r' },
    { color: 'blue', value: 's' },

    { color: 'blue', value: 't' },
    { color: 'green', value: 'u' },
    { color: 'green', value: 'v' },
    { color: 'green', value: 'w' },
    { color: 'green', value: '' },
    { color: 'green', value: '' },

  ];
  
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          HEATMAP_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: true,
          }
        );
        setData(response.data);
        cellsData = valuesForHeatMap(series, cellsData);
        console.log(series,cellsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    }, [departmentName]); 

  useEffect(() => {
    const fetchDeptData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setDeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
  };

    fetchDeptData();
  }, []);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };
 return (
      <div>
        <div className="grid grid-cols-4">
          <div>
            <select
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              aria-describedby="departmentName"
              value={departmentName}
              autoComplete="off"
              onChange={handleDeptNameChange}>
              <option value="All Departments">All Departments</option>
              {deptmentNames.map((deptmentNames) => (
                <option
                  key={deptmentNames.names.id}
                  value={deptmentNames.names.name}>
                  {deptmentNames.names.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px',marginLeft: '60px' }}>
          {cellsData.map((cell, index) => (
            <div
              key={index}
              style={{
                backgroundColor: cell.value ? cell.color : 'white',
                height: '110px',
                width: '150px',
                borderRadius: '4px',
                textAlign: 'center',
                lineHeight: '50px',
                color: 'white',
              }}
            >
              {cell.value}
            </div>
          ))}
        </div>
      </div>
    );
}

export function HeatMap7() {

  
  const cellsData = [
    { color: 'green', value: 'A' },
    { color: 'blue', value: 'B' },
    { color: 'yellow', value: 'C' },
    { color: 'red', value: 'D' },
    { color: 'red', value: 'E' },
    { color: 'green', value: '' }, // Empty value, turns white

    { color: 'blue', value: 'G' },
    { color: 'yellow', value: 'H' },
    { color: 'red', value: 'I' },
    { color: 'red', value: 'J' },
    { color: 'green', value: 'K' },
    { color: 'blue', value: 'L' },

    { color: 'blue', value: 'M' },
    { color: 'yellow', value: 'N' },
    { color: 'yellow', value: 'O' },
    { color: 'green', value: 'P' },
    { color: 'green', value: 'q' },
    { color: 'blue', value: 'r' },
    { color: 'blue', value: 's' },

    { color: 'blue', value: 't' },
    { color: 'green', value: 'u' },
    { color: 'green', value: 'v' },
    { color: 'green', value: 'w' },
    { color: 'green', value: 'x' },
    { color: 'green', value: '7' },

  ];
  console.log(cellsData);
 return (
      <div>
        {/* <div className="grid grid-cols-4">
          <div>
            <select
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              aria-describedby="departmentName"
              value={departmentName}
              autoComplete="off"
              onChange={handleDeptNameChange}>
              <option value="All Departments">All Departments</option>
              {deptmentNames.map((deptmentNames) => (
                <option
                  key={deptmentNames.names.id}
                  value={deptmentNames.names.name}>
                  {deptmentNames.names.name}
                </option>
              ))}
            </select>
          </div>
        </div> */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px',marginLeft: '60px' }}>
          {cellsData.map((cell, index) => (
            <div
              key={index}
              style={{
                backgroundColor: cell.value ? cell.color : 'white',
                height: '110px',
                width: '150px',
                borderRadius: '4px',
                textAlign: 'center',
                lineHeight: '50px',
                color: 'white',
              }}
            >
              {cell.value}
            </div>
          ))}
        </div>
      </div>
    );
}

