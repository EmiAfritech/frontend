import { useContext, useState, useRef, React, useMemo } from "react";
import Chart from "react-apexcharts";
import ReactToPrint from "react-to-print";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Item, Border, Label, Font, Funnel } from "devextreme-react/funnel";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";
import { RiskReportAdvice } from "./info";
import { useReportRiskPyramidColumns } from "./datatable";
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
import { DataGrid, gridClasses, GridToolbar } from "@mui/x-data-grid";
import "../comstyles/component.css";
import {
  useOpenVrsClosedPieChart,
  useMonitoredVrsUnMonitoredPieChart,
  useMitigatedVrsUnMitigatedPieChart,
  useReviewedVrsUnReviewedPieChart,
  useRiskLineChartYearData,
  useRiskLineChartData,
  useOpenVsCloseBarChartData,
  useDepartmentDropdown,
  useRiskLevelReport,
  useRiskStatusReport,
  useRiskCategoryReport,
  useRiskResponseReport,
  useRiskStatusReportPieChart,
  useRiskLocationReport,
  useRiskOwnerReport,
  useRiskAdviceChart,
  useDepartmentCodeDropdown,
} from "../../api/routes-data";
import { CustomSelect } from "./widgets";

export function OpenVsClose() {
  const { t } = useTranslation();
  const { openVrsClosePieData } = useOpenVrsClosedPieChart();
  return (
    <div className=" items-center flex flex-col px-8 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("open")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("close")}</span>
      </h3>
      <ResponsiveContainer height={180}>
        <PieChart>
          <Pie
            dataKey="value"
            data={openVrsClosePieData}
            outerRadius={85}
            innerRadius={50}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function MitigatedVsUnmitigated() {
  const { t } = useTranslation();
  const { mitigatedVrunmitigatedPieData } =
    useMitigatedVrsUnMitigatedPieChart();

  return (
    <div className="items-center flex flex-col  px-4 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("mitigated")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("unmitigated")}</span>
      </h3>
      <ResponsiveContainer height={180}>
        <PieChart>
          <Pie
            dataKey="value"
            data={mitigatedVrunmitigatedPieData}
            outerRadius={85}
            innerRadius={50}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ReviewedVsUnreviewed() {
  const { t } = useTranslation();
  const { reviewedVrunrevieweddPieData } = useReviewedVrsUnReviewedPieChart();

  return (
    <div className=" items-center flex flex-col px-6 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("reviewed")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("unreviewed")}</span>
      </h3>
      <ResponsiveContainer height={180}>
        <PieChart>
          <Pie
            dataKey="value"
            data={reviewedVrunrevieweddPieData}
            outerRadius={85}
            innerRadius={50}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function MonitoredVsUnmonitored() {
  const { monitoredVrunmonitoredPieData } =
    useMonitoredVrsUnMonitoredPieChart();

  return (
    <div className=" items-center flex flex-col px-4 pb-5">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>{t("monitored")} </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>{t("unmonitored")}</span>
      </h3>
      <ResponsiveContainer height={180}>
        <PieChart>
          <Pie
            dataKey="value"
            data={monitoredVrunmonitoredPieData}
            outerRadius={85}
            innerRadius={50}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function RiskBarChart() {
  const yr = new Date().getFullYear();
  const [year, setYear] = useState(yr.toString());
  const { openVrscloseChart } = useOpenVsCloseBarChartData(year);
  const { riskLineYearChart } = useRiskLineChartYearData();

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
            className="block w-full px-2 py-1 bg-[#E5E7EB] border-none"
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
      <ResponsiveContainer height={300}>
        <BarChart data={openVrscloseChart}>
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
  const { monitoredVrunmonitoredPieData } =
    useMonitoredVrsUnMonitoredPieChart();
  return (
    <div className="p-3 card">
      <BarChart width={760} height={250} data={monitoredVrunmonitoredPieData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
        <XAxis dataKey="value" />
        <Bar dataKey="Monitored" fill="#cc23b3" />
        <Bar dataKey="UnMonitored" fill="#2394cc" />
        <Tooltip />
      </BarChart>
    </div>
  );
}

export function RiskLineChart() {
  const yr = new Date().getFullYear();
  const [year, setYear] = useState(yr.toString());
  const { riskLineYearChart } = useRiskLineChartYearData();
  const { riskLineChart } = useRiskLineChartData(year);
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
            className="block w-full px-2 py-1 bg-[#E5E7EB] border-none"
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
        <LineChart data={riskLineChart} margin={{ top: 5 }}>
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

export const ReportDashboard = () => {
  const { auth } = useContext(AuthContext);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const { departmentCodeList } = useDepartmentCodeDropdown();
  console.log({ reportDepartmentName: departmentName });

  return (
    <div className="mt-5">
      <div className="flex p-3 justify-end items-center">
        <div>{t("departments")}</div>
        <div className="mx-5 min-w-[200px]">
          {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
            <CustomSelect
              id="department"
              value={departmentName}
              onChange={setDeptmentName}
              options={departmentCodeList}
              searchable={true}
              required
              group={false}
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-2  xl:grid-cols-3 xl:gap-0.5">
        <ReportRiskLevel departmentName={departmentName} />
        <ReportRiskStatus departmentName={departmentName} />
        <ReportRiskLocation departmentName={departmentName} />
        <ReportRiskCategory departmentName={departmentName} />
        <ReportRiskResponse departmentName={departmentName} />
        <ReportRiskOwner departmentName={departmentName} />
      </div>
    </div>
  );
};


export const ReportRiskLevel = ({ departmentName }) => {
  console.log({ reportRiskLevelDepartmentName: departmentName });
  const { riskLevel } = useRiskLevelReport(departmentName);
  const riskLevelReader = riskLevel;
  console.log(riskLevelReader);
  return (
    <div className="card items-center flex flex-col px-6 pb-12">
      <h3 className="py-3">
        <span>Risk Level</span>
      </h3>
      <ResponsiveContainer height={250}>
        <PieChart>
          <Pie dataKey="value" data={riskLevel} outerRadius={90} />
          <Legend iconSize={10} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ReportRiskStatus = ({ departmentName }) => {
  const { riskStatus } = useRiskStatusReportPieChart(departmentName);
  return (
    <div className="card items-center flex flex-col px-6 pb-2">
      <h3 className="py-3">
        <span>Risk Status</span>
      </h3>
      <ResponsiveContainer height={250}>
        <PieChart>
          <Pie dataKey="value" data={riskStatus} outerRadius={90} />
          <Legend iconSize={10} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ReportRiskLocation = ({ departmentName }) => {
  const { riskLocation } = useRiskLocationReport(departmentName);
  return (
    <div className="card items-center flex flex-col pb-12">
      <h3 className="py-3">
        <span>Location</span>
      </h3>
      <ResponsiveContainer height={250}>
        <PieChart>
          <Pie dataKey="value" data={riskLocation} outerRadius={90} />
          <Legend iconSize={10} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ReportRiskCategory = ({ departmentName }) => {
  const { riskCategory } = useRiskCategoryReport(departmentName);
  return (
    <div className="card items-center flex flex-col px-6 pb-12">
      <h3 className="py-3">
        <span>Category</span>
      </h3>
      <ResponsiveContainer height={250}>
        <PieChart>
          <Pie dataKey="value" data={riskCategory} outerRadius={90} />
          <Legend iconSize={10} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ReportRiskResponse = ({ departmentName }) => {
  const { riskResponse } = useRiskResponseReport(departmentName);
  return (
    <div className="card items-center flex flex-col px-6 pb-2">
      <h3 className="py-3">
        <span>Risk Response</span>
      </h3>
      <ResponsiveContainer height={250}>
        <PieChart>
          <Pie dataKey="value" data={riskResponse} outerRadius={90} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ReportRiskOwner = ({ departmentName }) => {
  const { riskOwner } = useRiskOwnerReport(departmentName);
  return (
    <div className="card items-center flex flex-col px-6 pb-12">
      <h3 className="py-3">
        <span>Owner</span>
      </h3>
      <ResponsiveContainer height={250}>
        <PieChart>
          <Pie dataKey="value" data={riskOwner} outerRadius={90} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export function Pyramidchat() {
  const { auth } = useContext(AuthContext);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const { departmentList } = useDepartmentDropdown();
  const { riskAdviceChart } = useRiskAdviceChart(departmentName);
  const [tableData, settableData] = useState([]);
  const [pyramidRiskTable, setPyramidRiskTable] = useState(false);
  const ref = useRef();
  const pyramidTable = useReportRiskPyramidColumns();

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
          {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
            <CustomSelect
              id="department"
              label={t("departments")}
              value={departmentName}
              onChange={setDeptmentName}
              options={departmentList}
              searchable={true}
              required
              group={false}
            />
          )}
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
              dataSource={riskAdviceChart}
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
              <div style={{ height: 350 }} className=" mt-4">
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

export function HeatMap2() {
  const { t } = useTranslation();

  const yLabels = useMemo(
    () => [t("veryLow"), t("low"), t("medium"), t("high"), t("veryHigh")],
    [t]
  );

  const series = useMemo(
    () => [
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
          { x: t("major"), y: 12 },
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
    ],
    [t]
  );

  const options = useMemo(
    () => ({
      chart: { type: "heatmap" },
      plotOptions: {
        heatmap: {
          colorScale: {
            ranges: [
              { from: 1, to: 5, name: t("low"), color: "#008000" },
              { from: 6, to: 9, name: t("medium"), color: "#002db3" },
              { from: 10, to: 15, name: t("high"), color: "#ffcc00" },
              { from: 16, to: 25, name: t("veryHigh"), color: "#ff0000" },
            ],
          },
        },
      },
      xaxis: { title: { text: t("impact") } },
      yaxis: { title: { text: t("likelihood") } },
      dataLabels: {
        enabled: true,
        formatter: (val) => {
          if (val >= 1 && val <= 5) return yLabels[0];
          if (val >= 6 && val <= 9) return yLabels[1];
          if (val >= 10 && val <= 15) return yLabels[2];
          if (val >= 16 && val <= 20) return yLabels[3];
          if (val >= 21 && val <= 25) return yLabels[4];
          return val;
        },
      },
    }),
    [t, yLabels]
  );

  useEffect(() => {
    return () => {
      if (Chart) {
        Chart.destroy(); // Clean up chart to prevent memory leaks
      }
    };
  }, []);

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
