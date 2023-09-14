import {
  usercolumns,
  riskreviewrow,
  riskreviewcolumn,
  deptcolumn,
  riskmonitoringcolumn,
  riskviewcolumn,
  riskappetitereportgreatercolumn,
  riskappetitereportgreaterrow,
  riskappetitereportlowercolumn,
  riskappetitereportlowerrow,
  reportriskmitigationrow,
  reportriskmitigationcolumn,
  reportopenrisktoreviewcolumn,
  reportopenrisktoreviewrow,
  reportopenriskassignedtomecolumn,
  reportopenriskassignedtomerow,
  reportriskandcontrolerow,
  reportriskandcontrolecolumn,
  reportaudittrailrow,
  reportaudittrailcolumn,
} from "./datatable";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Departmentforms, Riskforms, Userforms } from "./drawers";
import axios from "../../api/axios";
import {
  USERS_URL,
  DEPARTMENT_URL,
  VIEWALLRISKS_URL,
  MONITORINGRISK_URL,
} from "../../api/routes";

export function EmployeesTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(USERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => setTableData(data.data));
  }, []);

  function handleSearch() {}
  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2 items-center">
        <div className="flex items-right h-8 border rounded-lg bg-white overflow-hidden">
          <div className="grid h-full w-24 text-gray-300" />

          <input
            className="peer h-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search Name"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="pr-8">
          <Userforms />
        </div>
      </div>
      <div style={{ height: 520, width: "100%", backgroundColor: "white" }}>
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
  const [records, setRecords] = useState(riskreviewrow);

  function handleSearch(event) {
    const newData = riskreviewrow.filter((riskreviewrow) => {
      return riskreviewrow.RiskName.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });

    setRecords(newData);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2">
        <div className="flex items-right h-8 border rounded-lg  bg-white overflow-hidden">
          <div className="grid h-full w-24 text-gray-300" />

          <input
            className="peer h-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search Name"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div
        style={{ height: 520, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={records}
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
      .get(MONITORINGRISK_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => setTableData(data.data));
  }, []);

  return (
    <div className="flex flex-col">
      <div
        style={{ height: 300, backgroundColor: "white" }}
        className="  mt-10 w-auto"
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
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 450, backgroundColor: "white" }}
        className="  mt-10 w-auto"
      >
        <DataGrid
          rows={riskappetitereportgreaterrow}
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
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 450, backgroundColor: "white" }}
        className="  mt-10 w-auto"
      >
        <DataGrid
          rows={riskappetitereportlowerrow}
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
  }, []);

  function handleSearch() {}
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div className="flex h-8 border rounded-lg  bg-white overflow-hidden">
          <div className="grid h-full w-24 text-gray-300" />

          <input
            className="peer h-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search Name"
            onChange={handleSearch}
          />
        </div>
        <div className="pr-8">
          <Departmentforms />
        </div>
      </div>
      <div
        style={{ height: 520, width: "100%", backgroundColor: "white" }}
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
      .then((data) => setTableData(data.data));
  }, []);

  function handleSearch() {}
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div className="flex h-8 border rounded-lg  bg-white overflow-hidden">
          <div className="grid h-full w-24 text-gray-300" />
          <input
            className="peer h-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search Name"
            onChange={handleSearch}
          />
        </div>
        <div className="pr-8">
          <Riskforms />
        </div>
      </div>
      <div
        style={{ height: 520, width: "100%", backgroundColor: "white" }}
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
  const [records, setRecords] = useState(reportaudittrailrow);

  function handleSearch(event) {
    const newData = reportaudittrailrow.filter((reportaudittrailrow) => {
      return reportaudittrailrow.RiskName.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });

    setRecords(newData);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div className="flex h-8 border rounded-lg  bg-white overflow-hidden">
          <div className="grid h-full w-24 text-gray-300" />
          <input
            className="peer h-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search Name"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div
        style={{ height: 450, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={records}
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
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 520, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={reportriskmitigationrow}
          columns={reportriskmitigationcolumn}
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

export function Reportopenrisktoreview() {
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 520, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={reportopenrisktoreviewrow}
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
        style={{ height: 520, width: "100%", backgroundColor: "white" }}
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

export function Reportriskandcontrole() {
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 520, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={reportriskandcontrolerow}
          columns={reportriskandcontrolecolumn}
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
