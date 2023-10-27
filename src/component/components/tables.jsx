import {
  usercolumns,
  riskreviewrow,
  riskreviewcolumn,
  deptcolumn,
  riskmonitoringcolumn,
  riskviewcolumn,
  riskappetitereportgreatercolumn,
  riskstatuscolumn,
  riskappetitereportlowercolumn,
  reportopenrisktoreviewcolumn,
  reportopenriskassignedtomecolumn,
  reportaudittrailcolumn,
  riskmitigationcolumn,
} from "./datatable";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Departmentforms,
  RiskMitigationforms,
  RiskReviewforms,
  Riskforms,
  Userforms,
  RiskMonitoringforms,
} from "./drawers";
import axios from "../../api/axios";
import {
  USERS_URL,
  DEPARTMENT_URL,
  VIEWALLRISKS_URL,
  RISKMONITORING_URL,
  RISKMITIGATION_URL,
  RISKREVIEW_URL,
  REPORTAUDITTRAIL_URL,
  RISKAPPETITEREPORT_URL,
  RISKNEEDINGREVIEWREPORT_URL,
  RISKSTATUSREPORT_URL,
} from "../../api/routes";
import { Link } from "react-router-dom";

export function EmployeesTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(USERS_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((data) => setTableData(data.data));
    } catch (error) {
      console.log(error);
    }
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2 items-center">
        <div>
          <Userforms />
        </div>
      </div>
      <div style={{ height: 650, width: 1100, backgroundColor: "white" }}>
        <DataGrid
          rows={tableData}
          columns={usercolumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskReview() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKREVIEW_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.Data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div>
          <RiskReviewforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskreviewcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function ClosedRiskTab() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKREVIEW_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => setTableData(data.data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div>
          <Link to="/risk-review" className="text-blue-500">
            REVIEW RISK
          </Link>
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskreviewcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskMonitor() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKMONITORING_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.Data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pt-1 flex-row-reverse items-center">
        <div>
          <RiskMonitoringforms />
        </div>
      </div>
      <div
        style={{ height: 300, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskmonitoringcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskAppetiteReportGreater() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKAPPETITEREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((response) => setTableData(response.data.outsideRiskAppetite));
  }, [tableData]);
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 600, width: 850, backgroundColor: "white" }}
        className="  mt-10 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskappetitereportgreatercolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskAppetiteReportLower() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKAPPETITEREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.withinRiskAppetite));
  }, [tableData]);
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 600, width: 850, backgroundColor: "white" }}
        className="  mt-10 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskappetitereportlowercolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function DepartmentTab() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(DEPARTMENT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => setTableData(data.data));
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div>
          <Departmentforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-full"
      >
        <DataGrid
          rows={tableData}
          columns={deptcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskmitigationTab() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKMITIGATION_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.Data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div>
          <RiskMitigationforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-full"
      >
        <DataGrid
          rows={tableData}
          columns={riskmitigationcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function HighLowRiskTable() {
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 320, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-full"
      >
        <DataGrid
          rows={riskreviewrow}
          columns={deptcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskViewTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(VIEWALLRISKS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.Data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div>
          <Riskforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskviewcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function Reportaudittrail() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(REPORTAUDITTRAIL_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={reportaudittrailcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskMitigationReportTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKMITIGATION_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.Data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskmitigationcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function ReviewNeedingRisksReportTab() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKNEEDINGREVIEWREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((response) => setTableData(response.data));
  }, [tableData]);
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={reportopenrisktoreviewcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function Reportopenriskassignedtome() {
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={reportopenriskassignedtomerow}
          columns={reportopenriskassignedtomecolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function RiskStatusReportTab() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(RISKSTATUSREPORT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((response) => setTableData(response.data));
  }, [tableData]);
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={tableData}
          columns={riskstatuscolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
