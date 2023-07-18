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
  BarData,
  PieDataOpenClose,
  PieDataMitigatedUnmitigated,
  PieDataReviewUnreview,
  LineChartData,
  ImpactLineChartData,
  ReportMitigatedBarData,
  HighLowBarData,
} from "./chartdata";

import "../comstyles/component.css";

export function OpenVsClose() {
  return (
    <div className=" items-center flex flex-col px-6">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>OPEN </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>CLOSE</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie
          dataKey="value"
          data={PieDataOpenClose}
          outerRadius={80}
          innerRadius={60}
        />
      </PieChart>
    </div>
  );
}
export function MitigatedVsUnmitigated() {
  return (
    <div className="items-center flex flex-col px-6 ">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>MITIGATED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNMITIGATED</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie
          dataKey="value"
          data={PieDataMitigatedUnmitigated}
          outerRadius={80}
          innerRadius={60}
        />
      </PieChart>
    </div>
  );
}
export function ReviewedVsUnreviewed() {
  return (
    <div className=" items-center flex flex-col px-6 ">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>REVIEWED </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>UNREVIEWED</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie
          dataKey="value"
          data={PieDataReviewUnreview}
          outerRadius={80}
          innerRadius={60}
        />
      </PieChart>
    </div>
  );
}
export function HighVsLow() {
  return (
    <div className=" items-center flex flex-col px-6 ">
      <h3 className="pb-3">
        <span style={{ color: "#cc23b3" }}>HIGH </span>Vs{" "}
        <span style={{ color: "#2394cc" }}>LOW</span>
      </h3>
      <PieChart width={180} height={160}>
        <Pie
          dataKey="value"
          data={PieDataReviewUnreview}
          outerRadius={80}
          innerRadius={60}
        />
      </PieChart>
    </div>
  );
}
export function RiskBarchart() {
  return (
    <div className="card p-3">
      <h3>RISK MATRIX</h3>
      <BarChart width={760} height={200} data={BarData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
        <Bar dataKey="open" fill="#cc23b3" />
        <Bar dataKey="close" fill="#2394cc" />
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
  return (
    <div className="px-5 mt-12 card">
      <LineChart
        width={400}
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

export function ImpactLineChart() {
  return (
    <div className="px-5 mt-12 card">
      <LineChart
        width={400}
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

export function ReportRiskLevel() {
  return (
    <div className=" items-center flex flex-col px-5 pb-12">
      <h3 className="pb-3">
        <span>RISK LEVEL</span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskStatus() {
  return (
    <div className=" items-center flex flex-col px-5 pb-2">
      <h3 className="pb-3">
        <span>RISK STATUS</span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskLocation() {
  return (
    <div className=" items-center flex flex-col px-5 pb-12">
      <h3 className="pb-3">
        <span>LOCATION</span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskCategory() {
  return (
    <div className=" items-center flex flex-col px-5 pb-12">
      <h3 className="pb-3">
        <span>CATEGORY</span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskScoring() {
  return (
    <div className=" items-center flex flex-col px-5 pb-2">
      <h3 className="pb-3">
        <span>RISK SCORING</span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskSource() {
  return (
    <div className=" items-center flex flex-col px-5 pb-2">
      <h3 className="pb-3">
        <span>SOURCE </span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskTeam() {
  return (
    <div className=" items-center flex flex-col px-5 pb-2">
      <h3 className="pb-3">
        <span>TEAM </span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskOwner() {
  return (
    <div className=" items-center flex flex-col px-5 pb-12">
      <h3 className="pb-3">
        <span>OWNER</span>
      </h3>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportRiskTechnology() {
  return (
    <div className=" items-center flex flex-col px-5 pb-2">
      <h1 className="pb-3">
        <span>TECHNOLOGY </span>
      </h1>
      <PieChart width={160} height={160}>
        <Pie dataKey="value" data={PieDataReviewUnreview} outerRadius={80} />
      </PieChart>
    </div>
  );
}
export function ReportMitiationBarchart() {
  return (
    <div className="p-3">
      <BarChart width={700} height={300} data={ReportMitigatedBarData}>
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="UnMitigated" fill="#cc23b3" />
        <Bar dataKey="Mitigated" fill="#2394cc" />
      </BarChart>
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
