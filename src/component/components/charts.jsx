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
import {
  HighLowBarData,
} from "./chartdata";

import Funnel, { Item, Border, Label, Font } from "devextreme-react/funnel";

import "../comstyles/component.css";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import {
  MITIGATEDVSUNMITIGATEDCHAT_URL,
  MONITOREDVSUNMONITOREDRISKSCHART_URL,
  OPENVSCLOSEBARCHART_URL,
  OPENVSCLOSECHART_URL,
  REVIEWEDVSUNREVIEWEDCHART_URL,
  RISKLINECHART_URL,
  RISKSTATUSREPORTCHART_URL,
  RISKLOCATIONREPORT_URL,
  RISKOWNERREPORT_URL,
  RISKLEVELPYRAMIDCHART_URL,
  RISKRESPONSEREPORT_URL,
  RISKLEVELREPORT_URL,
  RISKCATEGORYREPORT_URL
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
      })
      .then((data) => setData(data.data));
  },[]);

  return (
    <div className=" items-center flex flex-col px-4 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>OPEN </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>CLOSE</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie dataKey="value" data={data} outerRadius={80} innerRadius={50} />
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
  },[]);

  return (
    <div className="items-center flex flex-col px-6 pb-5 ">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>MITIGATED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNMITIGATED</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie dataKey="value" data={data} outerRadius={80} innerRadius={50} />
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
  },[]);

  return (
    <div className=" items-center flex flex-col px-6 pb-5 ">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>REVIEWED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNREVIEWED</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie dataKey="value" data={data} outerRadius={80} innerRadius={50} />
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
  },[]);
  return (
    <div className=" items-center flex flex-col px-6 pb-5 ">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>MONITORED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNMONITORED</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={80}
          innerRadius={50}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function RiskBarchart() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(OPENVSCLOSEBARCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) =>{ setData(data.data), console.log(data.data)});
  },[]);
  return (
    <div className="p-3 card">
      <BarChart width={760} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis/>
        <XAxis dataKey="name"/>
        <Bar dataKey="Opened" fill="#cc23b3" />
        <Bar dataKey="Closed" fill="#2394cc" />
        <Tooltip/>
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
  },[]);

  return (
    
    <div className="p-8 mt-12 card">
      <LineChart
        width={870}
        height={300}
        data={data}
        margin={{ top: 5 }}
      >
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
  },[]);
  return (
    <div className=" items-center flex flex-col px-10 pb-12">
      <h3 className="pb-3">
        <span>RISK LEVEL</span>
      </h3>
      <PieChart width={180} height={180}>
        <Pie dataKey="value" data={data} outerRadius={85} />
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
  },[]);
  return (
    <div className=" items-center flex flex-col px-10 pb-2">
      <h3 className="pb-3">
        <span>RISK STATUS</span>
      </h3>
      <PieChart width={180} height={180}>
        <Pie dataKey="value" data={data} outerRadius={85} />
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
  },[]);
  return (
    <div className=" items-center flex flex-col px-8 pb-12">
      <h3 className="pb-3">
        <span>LOCATION</span>
      </h3>
      <PieChart width={190} height={190}>
        <Pie dataKey="value" data={data} outerRadius={80} />
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
  },[]);

  return (
    <div className=" items-center flex flex-col px-8 pb-12">
      <h3 className="pb-3">
        <span>CATEGORY</span>
      </h3>
      <PieChart width={190} height={190}>
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function ReportRiskResponse() {
  const [data, setData] = useState();

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
  },[]);
  return (
    <div className=" items-center flex flex-col px-8 pb-2">
      <h3 className="pb-3">
        <span>RISK RESPONSE</span>
      </h3>
      <PieChart width={190} height={190}>
        <Pie dataKey="value" data={data} outerRadius={80} />
        <Tooltip />

      </PieChart>
    </div>
  );
}
export function ReportRiskOwner() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(RISKOWNERREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,

      })
      .then((data) => setData(data.data));
  },[]);
  return (
    <div className=" items-center flex flex-col px-8 pb-12">
      <h3 className="pb-3">
        <span>OWNER</span>
      </h3>
      <PieChart width={190} height={190}>
        <Pie dataKey="value" data={data} outerRadius={80} />
        <Tooltip />

      </PieChart>
    </div>
  );
}
export function ReportRiskLineChart() {
  return (
    <div className="p-5 mt-6">
      <LineChart
        width={700}
        height={300}
        data={LineChartData}
        margin={{ top: 5 }}
      >
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
export function ReportImpactLineChart() {
  return (
    <div className="p-5 mt-6">
      <LineChart
        width={700}
        height={300}
        data={ImpactLineChartData}
        margin={{ top: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="impact" stroke="#2394cc" />
      </LineChart>
    </div>
  );
}

export function Pyramidchat() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(RISKLEVELPYRAMIDCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  },[]);
  return (
    <Funnel
      id="pyramid"
      dataSource={data}
      sortData={false}
      inverted={true}
      algorithm="dynamicHeight"
      palette="Harmony Light"
      argumentField="level"
      valueField="count"
    >
      <Tooltip enabled={true} />
      <Item>
        <Border visible={true} />
      </Item>
      <Legend visible={true} />
      <Label visible={true} horizontalAlignment="right" backgroundColor="none">
        <Font size={16} />
      </Label>
    </Funnel>
  );
}
