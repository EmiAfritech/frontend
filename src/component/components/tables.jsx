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
  reportaudittrailcolumn,
  riskmitigationcolumn,
  reportriskmitigationcolumn,
} from "./datatable";
import { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
} from "@mui/x-data-grid";
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
  VIEWCLOSEDRISKS_URL,
  REPORTAUDITTRAIL_URL,
  RISKAPPETITEREPORTLESSER_URL,
  RISKAPPETITEREPORTGREATER_URL,
  RISKNEEDINGREVIEWREPORT_URL,
  RISKSTATUSREPORT_URL,
  DEPARTMENTDROPDOWN_URL,
  MITIGATIONBYDATE_URL,
} from "../../api/routes";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};

export function EmployeesTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(USERS_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2 items-center">
        <div>
          <Userforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="mt-2 w-auto cardTable p-4">
        <DataGrid
          rows={tableData}
          columns={usercolumns}
          pageSize={10}
          pagination
        />
      </div>
    </div>
  );
}

export function RiskReview() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getRiskReview = async () => {
      try {
        const response = await axios.get(RISKREVIEW_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response.data.Data);
        setTableData(response.data.Data);
        
      } catch (error) {
        console.error(error);
      }
    };

    getRiskReview();
    
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div>
          <RiskReviewforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="mt-2 w-auto cardTable p-4">
        <DataGrid
          rows={tableData}
          columns={riskreviewcolumn}
          pageSize={10}
          pagination
        />
      </div>
    </div>
  );
}

export function ClosedRiskTab() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getClosedRisks = async () => {
      try {
        const response = await axios.get(VIEWCLOSEDRISKS_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });

        setTableData(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    };

    getClosedRisks();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-row-reverse">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Button variant="outlined">
              <Link to="/risk-review" className="text-blue-500">
                VIEW ALL RISK REVIEWS
              </Link>
            </Button>
          </div>
          <div>
            <Button variant="outlined">
              <Link to="/risk-identification" className="text-blue-500 ">
                VIEW ALL OPENED RISKS
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-auto cardTable p-4">
        <DataGrid
          rows={tableData}
          columns={riskviewcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
        />
      </div>
    </div>
  );
}

export function RiskMonitor() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getMonitoring = async () => {
      try {
        const response = await axios.get(RISKMONITORING_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });

        setTableData(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    };

    getMonitoring();
  }, []);

  return (
    <div className="flex flex-col mt-6">
      <div className="flex flex-row pt-1 flex-row-reverse items-center">
        <div>
          <RiskMonitoringforms />
        </div>
      </div>
      <div
        style={{ height: 300, backgroundColor: "white" }}
        className="mt-2 w-auto">
        <DataGrid
          rows={tableData}
          columns={riskmonitoringcolumn}
          pageSize={10}
          pagination
        />
      </div>
    </div>
  );
}

export function RiskAppetiteReportGreater() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const riskAppetiteReportGreater = async () => {
      try {
        const response = await axios.get(RISKAPPETITEREPORTGREATER_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });

        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    riskAppetiteReportGreater();
  }, []);
  console.log(tableData);
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 600, width: 850, backgroundColor: "white" }}
        className="  mt-10 w-auto">
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
    const riskAppetiteReportLower = async () => {
      try {
        const response = await axios.get(RISKAPPETITEREPORTLESSER_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });

        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    riskAppetiteReportLower();
  }, []);
  return (
    <div className="flex flex-col">
      <div
        style={{ height: 600, width: 850, backgroundColor: "white" }}
        className="  mt-10 w-auto">
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
    const getDepartment = async () => {
      try {
        const response = await axios.get(DEPARTMENT_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getDepartment();
  }, []);

  console.log(tableData);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div>
          <Departmentforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="mt-2 w-auto cardTable p-4">
        <DataGrid
          rows={tableData}
          columns={deptcolumn}
          pageSize={10}
          pagination
        />
      </div>
    </div>
  );
}

export function RiskmitigationTab() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getMitigation = async () => {
      try {
        const response = await axios.get(RISKMITIGATION_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });

        setTableData(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    };
    getMitigation();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div>
          <RiskMitigationforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-full card p-4">
        <DataGrid
          rows={tableData}
          columns={riskmitigationcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
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
        className="  mt-2 w-full">
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
    const viewAllRisks = () => {
      axios
        .get(VIEWALLRISKS_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => setTableData(response.data.Data));
    };

    viewAllRisks();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div>
          <Riskforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-auto card p-4">
        <DataGrid
          rows={tableData}
          columns={riskviewcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
        />
      </div>
    </div>
  );
}

export function Reportaudittrail() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(REPORTAUDITTRAIL_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="mt-2 w-auto card p-4">
        <DataGrid
          rows={tableData}
          columns={reportaudittrailcolumn}
          pageSize={10}
          pagination
          checkboxSelection
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            toolbar: {
              exportButton: {
                csv: false,
                pdf: true,
              },
              csvOptions: {
                separator: ";",
              },
              pdfOptions: {
                orientation: "landscape",
              },
              getExportParams: (params) => ({
                columns: params.columns,
                api: params.api,
                csvOptions: params.csvOptions,
                fileName: "AuditTrailReport",
                onlySelected: params.onlySelected,
                allColumns: params.allColumns,
                skipHeader: params.skipHeader,
              }),
            },
          }}
        />
      </div>
    </div>
  );
}

export function RiskMitigationReportTable() {
  const [tableData, setTableData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          MITIGATIONBYDATE_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            withCredentials: true,
          }
        );

        setTableData(response.data);
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
            Authorization: "Bearer " + localStorage.getItem("token"),
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
      <div className="grid grid-cols-4 justify-end">
        <div className="col-span-3"></div>
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
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto card p-4">
        <DataGrid
          rows={tableData}
          columns={reportriskmitigationcolumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              printOptions: { getRowsToExport: getSelectedRowsToExport },
            },
          }}
        />
      </div>
    </div>
  );
}

export function ReviewNeedingRisksReportTab() {
  const [tableData, setTableData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKNEEDINGREVIEWREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            withCredentials: true,
          }
        );

        setTableData(response.data);
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
            Authorization: "Bearer " + localStorage.getItem("token"),
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
        <div className="col-span-3"></div>
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
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto card p-4">
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
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              printOptions: { getRowsToExport: getSelectedRowsToExport },
            },
          }}
        />
      </div>
    </div>
  );
}

export function RiskStatusReportTab() {
  const [tableData, setTableData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response);
        setdeptmentNames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKSTATUSREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            withCredentials: true,
          }
        );

        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departmentName]);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3"></div>
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
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className=" mt-2 w-auto card p-4">
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
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              printOptions: { getRowsToExport: getSelectedRowsToExport },
            },
          }}
        />
      </div>
    </div>
  );
}
