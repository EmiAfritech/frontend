import { Link } from "react-router-dom";
import {
  userrows,
  usercolumns,
  riskreviewrow,
  riskreviewcolumn,
  sidebarrow,
  sidebarcolumn,
  deptcolumn,
  deptrow,
  riskmonitoringrow,
  riskmonitoringcolumn,
  riskviewcolumn,
  riskviewrow,
} from "./datatable";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Departmentforms, Riskforms, Userforms } from "./drawers";

export function EmployeesTable() {
  const [records, setRecords] = useState(userrows);

  function handleSearch(event) {
    const newData = userrows.filter((userrows) => {
      return userrows.Name.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });

    setRecords(newData);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2 items-center">
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
        <div className="pr-8">
          <Userforms />
        </div>
      </div>
      <div style={{ height: 620, width: "100%", backgroundColor: "white" }}>
        <DataGrid
          rows={records}
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
      <div className="flex flex-row-reverse pb-3 pt-5">
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
        style={{ height: 620, width: "100%", backgroundColor: "white" }}
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
  const ViewAll = (
    <Link
      className="bg-blue-500 p-1 px-3 rounded-lg text-white mx-2"
      to="/RiskView"
    >
      VIEW ALL
    </Link>
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pd-1 pt-6 flex-row-reverse">
        {ViewAll}
        <Riskforms />
      </div>
      <div
        style={{ height: 250, backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={riskmonitoringrow}
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

export function DepartmentTab() {
  const [records, setRecords] = useState(deptrow);

  function handleSearch(event) {
    const newData = deptcolumn.filter((row) => {
      return row.DEPARTMENTNAME.toLowerCase().includes(
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
        <div className="pr-8">
          <Departmentforms />
        </div>
      </div>
      <div
        style={{ height: 620, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-full"
      >
        <DataGrid
          rows={records}
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
          rows={deptrow}
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

export function SideTable() {
  return (
    <div className="flex flex-col">
      <div
        style={{ backgroundColor: "white", width: 260, height: 250 }}
        className=" mt-5 h-auto"
      >
        <DataGrid rows={sidebarrow} columns={sidebarcolumn} />
      </div>
    </div>
  );
}

export function RiskViewTable() {
  const [records, setRecords] = useState(riskviewrow);

  function handleSearch(event) {
    const newData = riskviewrow.filter((riskviewrow) => {
      return riskviewrow.RiskName.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });

    setRecords(newData);
  }

  const RiskMonitoring = (
    <Link
      className="bg-blue-500 p-2 px-3 rounded-lg text-white mx-2"
      to="/risk-monitoring"
    >
      MONITOR RISK
    </Link>
  );
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
        <div className="pr-8">{RiskMonitoring}</div>
      </div>
      <div
        style={{ height: 620, width: "100%", backgroundColor: "white" }}
        className="  mt-2 w-auto"
      >
        <DataGrid
          rows={records}
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
