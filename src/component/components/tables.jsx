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
  riskmitigationcolumn,reportriskmitigationcolumn
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
  RISKAPPETITEREPORT_URL,
  RISKNEEDINGREVIEWREPORT_URL,
  RISKSTATUSREPORT_URL,DEPARTMENTDROPDOWN_URL
} from "../../api/routes";
import { Link } from "react-router-dom";

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
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  console.log(tableData);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2 items-center">
        <div>
          <Userforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: 'white' }}
        className="mt-2 w-auto cardTable p-4"
      >
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
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setTableData(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    };

    getRiskReview();
  }, []);

  console.log(tableData);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div>
          <RiskReviewforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: 'white' }}
        className="mt-2 w-auto cardTable p-4"
      >
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
  console.log(tableData);
  useEffect(() => {
    axios
      .get(VIEWCLOSEDRISKS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => setTableData(data.data.Data));
  }, [tableData]);

  return (
    <div className="flex flex-col">
      <div className="flex-row-reverse">
        <div>
          <Link to="/risk-identification" className="text-blue-500 ">
            VIEW ALL OPENED RISKS
          </Link>
        </div>
      </div>
      <div className="flex flex-row flex-row-reverse ">
        <div>
          <Link to="/risk-review" className="text-blue-500">
            VIEW ALL RISK REVIEWS
          </Link>
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
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setTableData(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    };

    getMonitoring();
  }, []);

  console.log(tableData);

  return (
    <div className="flex flex-col mt-6">
      <div className="flex flex-row pt-1 flex-row-reverse items-center">
        <div>
          <RiskMonitoringforms />
        </div>
      </div>
      <div
        style={{ height: 300, backgroundColor: 'white' }}
        className="mt-2 w-auto"
      >
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
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
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
        style={{ height: 650, width: 1100, backgroundColor: 'white' }}
        className="mt-2 w-auto cardTable p-4"
      >
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
    axios
      .get(RISKMITIGATION_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.Data));
  }, [tableData]);

  console.log(tableData);
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
  const [deptmentName, setdeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);
    
    
    useEffect(() => {
    axios
        .get(DEPARTMENTDROPDOWN_URL, {
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((data) => {
            setdeptmentNames(data.data);
            
        })
        .catch((error) => {
            console.error(error);
        });
        
    }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(REPORTAUDITTRAIL_URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
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
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a Department:
            </label>
          </div>
        </div>
      <div
        style={{ height: 650, width: 850, backgroundColor: 'white' }}
        className="mt-2 w-auto card p-4"
      >
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
                separator: ';',
              },
              pdfOptions: {
                orientation: 'landscape',
              },
              getExportParams: (params) => ({
                columns: params.columns,
                api: params.api,
                csvOptions: params.csvOptions,
                fileName: 'AuditTrailReport',
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
  const [deptmentName, setdeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);
    
    
    useEffect(() => {
    axios
        .get(DEPARTMENTDROPDOWN_URL, {
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((data) => {
            setdeptmentNames(data.data);
            
        })
        .catch((error) => {
            console.error(error);
        });
        
    }, []);

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
    <div>
      <div className="grid grid-cols-4 justify-end">
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
  const [deptmentName, setdeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);
    
    
    useEffect(() => {
    axios
        .get(DEPARTMENTDROPDOWN_URL, {
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((data) => {
            setdeptmentNames(data.data);
            
        })
        .catch((error) => {
            console.error(error);
        });
        
    }, []);

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
  const [deptmentName, setdeptmentName] = useState("All Departments");
  const [deptmentNames, setdeptmentNames] = useState([]);
    
    
    useEffect(() => {
    axios
        .get(DEPARTMENTDROPDOWN_URL, {
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((data) => {
            setdeptmentNames(data.data);
            
        })
        .catch((error) => {
            console.error(error);
        });
        
    }, []);

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
