import { useContext, useEffect, useState, useRef, React,   } from "react";
import axios from "../../api/axios";
import Chart from "react-apexcharts";
import ReactToPrint from "react-to-print";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Item, Border, Label, Font, Funnel, } from "devextreme-react/funnel";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";
import { RiskReportAdvice } from "./info";
import { useReportRiskPyramidColumns } from "./datatable";
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
  ResponsiveContainer,
} from "recharts";
import {
  DataGrid,
  gridClasses,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
} from "@mui/x-data-grid";
import "../comstyles/component.css";
import { useOpenVrsClosedPieChart, useMonitoredVrsUnMonitoredPieChart, useMitigatedVrsUnMitigatedPieChart, useReviewedVrsUnReviewedPieChart, useRiskLineChartYearData, useRiskLineChartData } from "../../api/routes-data";

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};

export function OpenVsClose() {
  const { t } = useTranslation();
  const {openVrsClosePieData} = useOpenVrsClosedPieChart()
  return (
    <div className=" items-center flex flex-col px-8 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("open")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("close")}</span>
      </h3>
      <ResponsiveContainer height={180}>
        <PieChart>
          <Pie dataKey="value" data={openVrsClosePieData} outerRadius={85} innerRadius={50} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function MitigatedVsUnmitigated() {
  const { t } = useTranslation();
  const {mitigatedVrunmitigatedPieData} = useMitigatedVrsUnMitigatedPieChart()

  return (
    <div className="items-center flex flex-col  px-4 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("mitigated")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("unmitigated")}</span>
      </h3>
      <ResponsiveContainer height={180}>
      <PieChart >
        <Pie dataKey="value" data={mitigatedVrunmitigatedPieData} outerRadius={85} innerRadius={50} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ReviewedVsUnreviewed() {
  const { t } = useTranslation();
  const {reviewedVrunrevieweddPieData} = useReviewedVrsUnReviewedPieChart()

  
  return (
    <div className=" items-center flex flex-col px-6 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("reviewed")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("unreviewed")}</span>
      </h3>
      <ResponsiveContainer height={180}>
      <PieChart >
        <Pie dataKey="value" data={reviewedVrunrevieweddPieData} outerRadius={85} innerRadius={50} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function MonitoredVsUnmonitored() {
  const {monitoredVrunmonitoredPieData} = useMonitoredVrsUnMonitoredPieChart()
  
  return (
    <div className=" items-center flex flex-col px-4 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("monitored")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("unmonitored")}</span>
      </h3>
      <ResponsiveContainer height={180}>
      <PieChart >
        <Pie dataKey="value" data={monitoredVrunmonitoredPieData} outerRadius={85} innerRadius={50} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function RiskBarChart() {
  const {auth} = useContext(AuthContext)
  const [data, setData] = useState();
  const yr = new Date().getFullYear();
  const [year, setYear] = useState(yr.toString());
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        const response = await axios.get(RISKYEARSCHART_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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

  console.log(data)
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  return (
    <div className="p-3 card">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4" />
        <div className="flex flex-row">
          <section className="m-2">
            <p>{t("years")}</p>
          </section>
          <select
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id="departmentName"
            aria-describedby="departmentName"
            value={year}
            autoComplete="off"
            onChange={handleYearChange}>
            {years.map((years) => (
              <option key={years.id} value={years.year}>
                {years.year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ResponsiveContainer height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
        <XAxis dataKey="name" />
        <Bar dataKey="Opened" fill="#cc23b3" />
        <Bar dataKey="Closed" fill="#2394cc" />
        <Tooltip />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export function MonitoredVsUnmonitoredBarchart() {
  const {auth} = useContext(AuthContext)
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(MONITOREDVSUNMONITOREDBARCHARTDATA_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
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


export function RiskLineChart() {
  const data = 23
  const yr = new Date().getFullYear();
  const [year, setYear] = useState(yr.toString());
  const {riskLineYearChart} = useRiskLineChartYearData()
  const {riskLineChart} = useRiskLineChartData(year)
  console.log({ "riskLineYearChart": riskLineChart})

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="p-12 mt-12 card bg-white">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4" />
        <div className="flex flex-row">
          <section className="m-2">
            <p>{t("years")}</p>
          </section>
          <select
            type="text"
            className="block w-full px-2 py-2 bg-[#E5E7EB] border-none rounded-md"
            id="departmentName"
            aria-describedby="departmentName"
            value={year}
            autoComplete="off"
            onChange={handleYearChange}>
            {riskLineYearChart.map((years) => (
              <option key={years.id} value={years.year}>
                {years.year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ResponsiveContainer height="100%" minHeight={400}>
      <LineChart  data={riskLineChart} margin={{ top: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="risk" stroke="#cc23b3" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ReportRiskLevel() {
  const {auth} = useContext(AuthContext)
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
    <div className="card items-center flex flex-col px-6 pb-12">
      <h3 className="py-3">
        <span>{t("riskLevel")}</span>
      </h3>
      <div>
        <div>
          {auth.role=== "ADMIN" ||
          auth.role === "GENERALMANAGER" ? (
            <>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentName"
                aria-describedby="departmentName"
                value={departmentName}
                autoComplete="off"
                onChange={handleDeptNameChange}>
                <option value="All Departments">{t("allDepartment")}</option>
                {deptmentNames.map((deptmentNames) => (
                  <option
                    key={deptmentNames.names.id}
                    value={deptmentNames.names.name}>
                    {deptmentNames.names.name}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ResponsiveContainer height={250}>
      <PieChart >
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ReportRiskStatus() {
  const {auth} = useContext(AuthContext)
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
    <div className="card items-center flex flex-col px-6 pb-2">
      <h3 className="py-3">
        <span>{t("riskStatus")}</span>
      </h3>
      <div>
        <div>
        {auth.role=== "ADMIN" ||
          auth.role === "GENERALMANAGER" ?  (
            <>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentName"
                aria-describedby="departmentName"
                value={departmentName}
                autoComplete="off"
                onChange={handleDeptNameChange}>
                <option value="All Departments">{t("allDepartment")}</option>
                {deptmentNames.map((deptmentNames) => (
                  <option
                    key={deptmentNames.names.id}
                    value={deptmentNames.names.name}>
                    {deptmentNames.names.name}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ResponsiveContainer height={250}>
      <PieChart >
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ReportRiskLocation() {
  const {auth} = useContext(AuthContext)
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
    <div className="card items-center flex flex-col  pb-12">
      <h3 className="py-3">
        <span>{t("location")}</span>
      </h3>
      <div>
        <div>
          {auth.role === "ADMIN" ||
          auth.role === "GENERALMANAGER" ? (
            <>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentName"
                aria-describedby="departmentName"
                value={departmentName}
                autoComplete="off"
                onChange={handleDeptNameChange}>
                <option value="All Departments">{t("allDepartment")}</option>
                {deptmentNames.map((deptmentNames) => (
                  <option
                    key={deptmentNames.names.id}
                    value={deptmentNames.names.name}>
                    {deptmentNames.names.name}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ResponsiveContainer height={250}>
      <PieChart >
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ReportRiskCategory() {
  const {auth} = useContext(AuthContext)
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
    <div className="card items-center flex flex-col px-6 pb-12">
      <h3 className="py-3">
        <span>{t("category")}</span>
      </h3>
      <div>
        <div>
          {auth.role=== "ADMIN" ||
          auth.role === "GENERALMANAGER" ? (
            <>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentName"
                aria-describedby="departmentName"
                value={departmentName}
                autoComplete="off"
                onChange={handleDeptNameChange}>
                <option value="All Departments">{t("allDepartment")}</option>
                {deptmentNames.map((deptmentNames) => (
                  <option
                    key={deptmentNames.names.id}
                    value={deptmentNames.names.name}>
                    {deptmentNames.names.name}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ResponsiveContainer height={250}>
      <PieChart >
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ReportRiskResponse() {
  const {auth} = useContext(AuthContext)
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
    <div className="card items-center flex flex-col px-6 pb-2">
      <h3 className="py-3">
        <span>{t("riskResponse")}</span>
      </h3>
      <div>
        <div>
          {auth.role === "ADMIN" ||
          auth.role === "GENERALMANAGER" ? (
            <>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentName"
                aria-describedby="departmentName"
                value={departmentName}
                autoComplete="off"
                onChange={handleDeptNameChange}>
                <option value="All Departments">{t("allDepartment")}</option>
                {deptmentNames.map((deptmentNames) => (
                  <option
                    key={deptmentNames.names.id}
                    value={deptmentNames.names.name}>
                    {deptmentNames.names.name}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ResponsiveContainer height={250}>
      <PieChart >
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Legend iconSize={10} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ReportRiskOwner() {
  const {auth} = useContext(AuthContext)
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
    <div className="card items-center flex flex-col px-6 pb-12">
      <h3 className="py-3">
        <span>{t("owner")}</span>
      </h3>
      <div>
        <div>
          {auth.role=== "ADMIN" ||
          auth.role === "GENERALMANAGER" ? (
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
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ResponsiveContainer height={250}>
      <PieChart >
        <Pie dataKey="value" data={data} outerRadius={90} />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Pyramidchat() {
  const {auth} = useContext(AuthContext)
  const [data, setData] = useState();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  const [tableData, settableData] = useState([]);
  const [pyramidRiskTable, setPyramidRiskTable] = useState(false);
  const ref = useRef();
  const pyramidTable = useReportRiskPyramidColumns()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKLEVELPYRAMIDCHART_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
    setPyramidRiskTable(true);
    const clickedItem = e.item;
    settableData(clickedItem.data.risks);
  };

  const handleRiskAdvice = (e) => {
    setPyramidRiskTable(false);
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-4">
          <div>
            {auth.role === "ADMIN" ||
            auth.role === "GENERALMANAGER" ? (
              <>
                <select
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="departmentName"
                  aria-describedby="departmentName"
                  value={departmentName}
                  autoComplete="off"
                  onChange={handleDeptNameChange}>
                  <option value="All Departments">{t("allDepartment")}</option>
                  {deptmentNames.map((deptmentNames) => (
                    <option
                      key={deptmentNames.names.id}
                      value={deptmentNames.names.name}>
                      {deptmentNames.names.name}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className=" m-3 flex flex-row-reverse">
          <ReactToPrint
            trigger={() => <button>{t("printChart")}</button>}
            content={() => ref.current}
          />
        </div>
        <div ref={ref}>
          <div className="m-20">
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
            <p className="mt-4">{t("riskPyramidChartName")}</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
        <Button
            className="px-12"
            onClick={handleRiskAdvice}
            variant="text"
            size="large"
            sx={{
              whiteSpace: "nowrap", 
              width: "auto", 
              display: "inline-block",
            }}>
               {t("riskAdvice")}
        </Button>
        </div>
        <hr />
        <div className="py-5">
          {pyramidRiskTable ? (
            <>
              <div
                style={{ height: 350 }}
                className=" mt-4">
                <Box
                  sx={{
                    [`.${gridClasses.cell}.veryhigh`]: {
                      backgroundColor: "#F84626",
                    },
                    [`.${gridClasses.cell}.high`]: {
                      backgroundColor: "#ecbe2f",
                    },
                    [`.${gridClasses.cell}.medium`]: {
                      backgroundColor: "#0B37D6",
                    },
                    [`.${gridClasses.cell}.low`]: {
                      backgroundColor: "#4A7C0B",
                    },
                    height: 350,
                  }}>
                  <DataGrid
                    rows={tableData}
                    columns={pyramidTable}
                    pageSizeOptions={[10, 15]}
                    pagination
                    getCellClassName={(params) => {
                      if (params.value === "High") {
                        return "high";
                      } else if (params.value === "Very High") {
                        return "veryhigh";
                      } else if (params.value === "Medium") {
                        return "medium";
                      } else if (params.value === "Low") {
                        return "low";
                      }
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                      toolbar: {
                        printOptions: {
                          getRowsToExport: getSelectedRowsToExport,
                        },
                      },
                    }}
                  />
                </Box>
              </div>
            </>
          ) : (
            <RiskReportAdvice />
          )}
        </div>
      </div>
    </>
  );
}

export function HeatMap3() {

  const series = [
    {
      name: t("rare"),
      data: [
        { x: t("insignificant"), y: 1 },
        { x: t("minor"), y: 2 },
        { x: t("moderate"), y: 3 },
        { x: t("major"), y: 4 },
        { x: t("critical"), y: 5 },
      ],
    },
    {
      name: t("unlikely"),
      data: [
        { x: t("insignificant"), y: 2 },
        { x: t("minor"), y: 4 },
        { x: t("moderate"), y: 6 },
        { x: t("major"), y: 8 },
        { x: t("critical"), y: 10 },
      ],
    },
    {
      name: t("possible"),
      data: [
        { x: t("insignificant"), y: 3 },
        { x: t("minor"), y: 6 },
        { x: t("moderate"), y: 9 },
        { x: t("major"), y: 12},
        { x: t("critical"), y: 15 },
      ],
    },
    {
      name: t("likely"),
      data: [
        { x: t("insignificant"), y: 4 },
        { x: t("minor"), y: 8 },
        { x: t("moderate"), y: 12 },
        { x: t("major"), y: 16 },
        { x: t("critical"), y: 20 },
      ],
    },
    {
      name: t("almostCertain"),
      data: [
        { x: t("insignificant"), y: 5 },
        { x: t("minor"), y: 10 },
        { x: t("moderate"), y: 15 },
        { x: t("major"), y: 20 },
        { x: t("critical"), y: 25 },
      ],
    },
  ];


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
              name: t("low"),
              color: "#008000",
            },
            {
              from: 6,
              to: 9,
              name: t("medium"),
              color: "#002db3",
            },
            {
              from: 10,
              to: 15,
              name: t("high"),
              color: "#ffcc00",
            },
            {
              from: 16,
              to: 25,
              name: t("veryHigh"),
              color: "#ff0000",
            },
          ],
        },
      },
    },
    xaxis: {
      title: {
        text: t("impact"), // Label for the x-axis
      },
    },
    yaxis: {
      title: {
        text: t("likelihood"), // Label for the y-axis
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        height={550}
        width={1100}
      />
    </div>
  );
}

export function HeatMap2() {
 const yLabels = [t("veryLow"), t("low"), t("medium"), t("high"), t("veryHigh")];
  const series = [
    {
      name: t("rare"),
      data: [
        { x: t("insignificant"), y: 1 },
        { x: t("minor"), y: 2 },
        { x: t("moderate"), y: 3 },
        { x: t("major"), y: 4 },
        { x: t("critical"), y: 5 },
      ],
    },
    {
      name: t("unlikely"),
      data: [
        { x: t("insignificant"), y: 2 },
        { x: t("minor"), y: 4 },
        { x: t("moderate"), y: 6 },
        { x: t("major"), y: 8 },
        { x: t("critical"), y: 10 },
      ],
    },
    {
      name: t("possible"),
      data: [
        { x: t("insignificant"), y: 3 },
        { x: t("minor"), y: 6 },
        { x: t("moderate"), y: 9 },
        { x: t("major"), y: 12},
        { x: t("critical"), y: 15 },
      ],
    },
    {
      name: t("likely"),
      data: [
        { x: t("insignificant"), y: 4 },
        { x: t("minor"), y: 8 },
        { x: t("moderate"), y: 12 },
        { x: t("major"), y: 16 },
        { x: t("critical"), y: 20 },
      ],
    },
    {
      name: t("almostCertain"),
      data: [
        { x: t("insignificant"), y: 5 },
        { x: t("minor"), y: 10 },
        { x: t("moderate"), y: 15 },
        { x: t("major"), y: 20 },
        { x: t("critical"), y: 25 },
      ],
    },
  ];

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
              name: t("low"),
              color: "#008000",
            },
            {
              from: 6,
              to: 9,
              name: t("medium"),
              color: "#002db3",
            },
            {
              from: 10,
              to: 15,
              name: t("high"),
              color: "#ffcc00",
            },
            {
              from: 16,
              to: 25,
              name: t("veryHigh"),
              color: "#ff0000",
            },
          ],
        },
      },
    },
    xaxis: {
      title: {
        text: t("impact"), // Label for the x-axis
      },
    },
    yaxis: {
      title: {
        text: t("likelihood"), // Label for the y-axis
      },
    },
    dataLabels: {
      enabled: true, // Enable data labels
      formatter: function (val) {
        // Map the data label to custom yLabels based on the value
        if (val >= 1 && val <= 5) return yLabels[0];  // "veryLow"
        if (val >= 6 && val <= 9) return yLabels[1];  // "low"
        if (val >= 10 && val <= 15) return yLabels[2]; // "medium"
        if (val >= 16 && val <= 20) return yLabels[3]; // "high"
        if (val >= 21 && val <= 25) return yLabels[4]; // "veryHigh"
        return val;  // Fallback to default value if out of range
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        height={550}
        width={1100}
      />
    </div>
  );
}


