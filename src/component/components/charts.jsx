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
import { HighLowBarData } from "./chartdata";
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
  MITIGATEDVSUNMITIGATEDBARCHARTDATA_URL,
  MONITOREDVSUNMONITOREDBARCHARTDATA_URL,
  REVIEWEDVSUNREVIEWEDBARCHARTDATA_URL,
  OPENVSCLOSEBASEDONDEPARTMENT_URL,
  OPENVSCLOSECHART_URL,
  DEPARTMENTDROPDOWN_URL,
} from "../../api/routes";

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
        },
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
        },
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
        },
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

  useEffect(() => {
    axios
      .get(OPENVSCLOSEBARCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
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
        },
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
export function MitigatedVsUnmitigatedBarchart() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(MITIGATEDVSUNMITIGATEDBARCHARTDATA_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
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
        <Bar dataKey="Mitigated" fill="#cc23b3" />
        <Bar dataKey="UnMitigated" fill="#2394cc" />
        <Tooltip />
      </BarChart>
    </div>
  );
}
export function ReviewedVsUnreviewedBarchart() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(REVIEWEDVSUNREVIEWEDBARCHARTDATA_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
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
        <Bar dataKey="Reviewed" fill="#cc23b3" />
        <Bar dataKey="UnReviewed" fill="#2394cc" />
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

  useEffect(() => {
    axios
      .get(RISKLINECHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="p-12 mt-12 card bg-white">
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

  useEffect(() => {
    axios
      .get(RISKLEVELREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="card items-center flex flex-col px-10 pb-12">
      <h3 className="py-3">
        <span>RISK LEVEL</span>
      </h3>
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

  useEffect(() => {
    axios
      .get(RISKSTATUSREPORTCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="card items-center flex flex-col px-10 pb-2">
      <h3 className="py-3">
        <span>RISK STATUS</span>
      </h3>
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

  useEffect(() => {
    axios
      .get(RISKLOCATIONREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="card items-center flex flex-col px-8 pb-12">
      <h3 className="py-3">
        <span>LOCATION</span>
      </h3>
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

  useEffect(() => {
    axios
      .get(RISKCATEGORYREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="card items-center flex flex-col px-8 pb-12">
      <h3 className="py-3">
        <span>CATEGORY</span>
      </h3>
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
  const [departmentName, setdeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await  axios
        .post(RISKOWNERREPORT_URL, JSON.stringify({departmentName}), {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        })

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setdeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    axios
      .get(RISKRESPONSEREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="card items-center flex flex-col px-8 pb-2">
      <h3 className="py-3">
        <span>RISK RESPONSE</span>
      </h3>
      <div className="grid grid-cols-2">
          <div>
            <select
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              aria-describedby="departmentName"
              value={departmentName}
              autoComplete="off"
              onChange={(e) => setdeptmentName(e.target.value)}>
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
  const [departmentName, setdeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await  axios
        .post(RISKOWNERREPORT_URL, JSON.stringify({departmentName}), {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        })

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setdeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

 

  
  return (
    <div className="card items-center flex flex-col px-8 pb-12">
      <h3 className="py-3">
        <span>OWNER</span>
      </h3>
      <div className="grid grid-cols-2">
          <div>
            <select
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              aria-describedby="departmentName"
              value={departmentName}
              autoComplete="off"
              onChange={(e) => setdeptmentName(e.target.value)}>
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
  const [departmentName, setdeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await  axios
        .post(RISKLEVELPYRAMIDCHART_URL, JSON.stringify({departmentName}), {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        })

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setdeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

 
  return (
    <>
      <div>
        <div className="grid grid-cols-4">
          <div>
            <select
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              aria-describedby="departmentName"
              value={deptmentName}
              autoComplete="off"
              onChange={(e) => setdeptmentName(e.target.value)}>
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
        <div>
          <Funnel
            id="pyramid"
            dataSource={data}
            sortData={false}
            inverted={true}
            algorithm="dynamicHeight"
            palette="Harmony Light"
            argumentField="level"
            valueField="count">
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
      </div>
    </>
  );
}

export function HeatMap() {
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
        { x: "moderate", y: 3 },
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
        { x: "major", y: 12 },
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
