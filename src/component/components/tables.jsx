import {
  useUserColumns,
  useRiskReviewColumns,
  useDeptColumns,
  useRiskMonitoringColumns,
  useRiskViewColumns,
  useRiskAppetiteReportGreaterColumns,
  useRiskStatusColumns,
  useRiskAppetiteReportLowerColumns,
  useReportOpenRiskToReviewColumns,
  useReportAuditTrailColumns,
  useRiskMitigationColumns,
  useReportRiskMitigationColumns,
  useRiskStatuscolumns,
} from "./datatable";
import { useContext, useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Edit } from '@mui/icons-material';
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";
import {
  DataGrid,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
  gridClasses,
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
import { Modaltrigger } from "../../context/AuthContext";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";
import { useDepartmentTable, useEmployeeTable, useMitigationTable, useMonitoringTable, useRiskTable } from "../../api/routes-data";
import { ModaltriggerProvider } from "../../context/AuthProvider";

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};


export function EmployeesTable2() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(ModaltriggerProvider);
  const usercolumns = useUserColumns();

  const getUsers = async () => {
    try {
      const response = await axios.get(USERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });

      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log({"employees": tableData})
  useEffect(() => {
    getUsers();
  }, []);

  const handleFormSubmit = () => {
    // Call the function to fetch updated data after form submission
    getUsers();
  };

  useEffect(() => {
    if (trigger) {
      getUsers();
      resettriggerComponent();
    }
  }, [trigger]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2 items-center">
        <div>
          <Userforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <div className="mt-2 w-auto cardTable p-4">
        <Box sx={{ height: 650 }}>
          <DataGrid
            rows={tableData}
            columns={usercolumns}
            pageSize={10}
            pageSizeOptions={[15.2]}
            getRowId={(row) => row.id}
          />
        </Box>
      </div>
    </div>
  );
}

export function RiskReview2() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(Modaltrigger);
  const riskreviewcolumn = useRiskReviewColumns();

  const getRiskReview = async () => {
    try {
      const response = await axios.get(RISKREVIEW_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });

      setTableData(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRiskReview();
  }, []);

  const handleFormSubmit = () => {
    getRiskReview();
  };

  useEffect(() => {
    if (trigger) {
      getRiskReview();
      resettriggerComponent();
    }
  }, [trigger]);

  return (
    <div className="flex flex-col">
      {auth.role === "ADMIN" ||
      auth.role === "GENERALMANAGER" ||
      auth.role === "MANAGER" ? (
        <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
          <div>
            <RiskReviewforms onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="mt-2 w-auto cardTable p-4">
        <Box sx={{ height: 650 }}>
          <DataGrid
            rows={tableData}
            columns={riskreviewcolumn}
            pageSize={10}
            pagination
            getRowId={(row) => row.id}
          />
        </Box>
      </div>
    </div>
  );
}

export function ClosedRiskTab() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const { t } = useTranslation();
  const riskviewcolumn = useRiskViewColumns();

  useEffect(() => {
    const getClosedRisks = async () => {
      try {
        const response = await axios.get(VIEWCLOSEDRISKS_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
                {t("viewAllRiskReviews")}
              </Link>
            </Button>
          </div>
          <div>
            <Button variant="outlined">
              <Link to="/risk-identification" className="text-blue-500 ">
                {t("viewAllOpenedRisks")}
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

export function RiskMonitor2() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(Modaltrigger);
  const riskmonitoringcolumn = useRiskMonitoringColumns();

  const getMonitoring = async () => {
    try {
      const response = await axios.get(RISKMONITORING_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setTableData(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMonitoring();
  }, []);

  const handleFormSubmit = () => {
    // Call the function to fetch updated data after form submission
    getMonitoring();
  };

  useEffect(() => {
    if (trigger) {
      getMonitoring();
      resettriggerComponent();
    }
  }, [trigger]);

  return (
    <div className="flex flex-col mt-6">
      <div className="flex flex-row pt-1 flex-row-reverse items-center">
        <div>
          <RiskMonitoringforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <div className="mt-2 w-auto">
        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={tableData}
            columns={riskmonitoringcolumn}
            pageSize={10}
            pagination
            getRowId={(row) => row.id}
          />
        </Box>
      </div>
    </div>
  );
}

export function RiskAppetiteReportGreater() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const riskappetitereportgreatercolumn = useRiskAppetiteReportGreaterColumns();

  useEffect(() => {
    const riskAppetiteReportGreater = async () => {
      try {
        const response = await axios.get(RISKAPPETITEREPORTGREATER_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
  return (
    <div className="flex flex-col">
      <div style={{ height: 600 }} className="  mt-10 w-auto">
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
            height: 650,
          }}>
          <DataGrid
            rows={tableData}
            columns={riskappetitereportgreatercolumn}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
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
          />
        </Box>
      </div>
    </div>
  );
}

export function RiskAppetiteReportLower() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const riskappetitereportlowercolumn = useRiskAppetiteReportLowerColumns();

  useEffect(() => {
    const riskAppetiteReportLower = async () => {
      try {
        const response = await axios.get(RISKAPPETITEREPORTLESSER_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
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
      <div style={{ height: 600 }} className="  mt-10 w-auto">
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
            height: 650,
          }}>
          <DataGrid
            rows={tableData}
            columns={riskappetitereportlowercolumn}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
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
          />
        </Box>
      </div>
    </div>
  );
}



export function RiskmitigationTab2() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(Modaltrigger);
  const riskmitigationcolumn = useRiskMitigationColumns();

  const getMitigation = async () => {
    try {
      const response = await axios.get(RISKMITIGATION_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setTableData(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMitigation();
  }, []);

  const handleFormSubmit = () => {
    getMitigation();
  };

  useEffect(() => {
    if (trigger) {
      getMonitoring();
      resettriggerComponent();
    }
  }, [trigger]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div>
          <RiskMitigationforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <div style={{ height: 650 }} className="  mt-2 w-full card p-4">
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
            height: 650,
          }}>
          <DataGrid
            rows={tableData}
            columns={riskmitigationcolumn}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
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
            getRowId={(row) => row.id}
          />
        </Box>
      </div>
    </div>
  );
}

export function RiskViewTable2() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(Modaltrigger);
  const riskviewcolumn = useRiskViewColumns();

  const viewAllRisks = () => {
    axios
      .get(VIEWALLRISKS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((response) => setTableData(response.data.Data));
  };

  useEffect(() => {
    viewAllRisks();
  }, []);

  const handleFormSubmit = () => {
    viewAllRisks();
  };

  useEffect(() => {
    if (trigger) {
      viewAllRisks();
      resettriggerComponent();
    }
  }, [trigger]);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row pb-3 pt-5 pr-2 flex-row-reverse items-center">
        <div>
          <div>
            <Riskforms onFormSubmit={handleFormSubmit} tableData={tableData} />
          </div>
        </div>
      </div>
      <div className="  mt-2 w-auto card p-4">
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
            height: 650,
          }}>
          <DataGrid
            rows={tableData}
            columns={riskviewcolumn}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
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
            getRowId={(row) => row.id}
          />
        </Box>
      </div>
    </div>
  );
}


export function Reportaudittrail() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const reportaudittrailcolumn = useReportAuditTrailColumns();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(REPORTAUDITTRAIL_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
        });

        setTableData(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        style={{ height: 650, backgroundColor: "white" }}
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
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  const { t } = useTranslation();
  const reportriskmitigationcolumn = useReportRiskMitigationColumns();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          MITIGATIONBYDATE_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
    <div>
      <div className="grid grid-cols-4 justify-end">
        <div className="col-span-3"></div>
        <div>
          {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
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
      <div style={{ height: 650 }} className="  mt-2 w-auto card p-4">
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
            height: 650,
          }}>
          <DataGrid
            rows={tableData}
            columns={reportriskmitigationcolumn}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                printOptions: { getRowsToExport: getSelectedRowsToExport },
              },
            }}
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
          />
        </Box>
      </div>
    </div>
  );
}

export function ReviewNeedingRisksReportTab() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  const reportopenrisktoreviewcolumn = useReportOpenRiskToReviewColumns();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKNEEDINGREVIEWREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
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
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3"></div>
        <div>
          {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
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
      <div style={{ height: 650 }} className="  mt-2 w-auto card p-4">
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
            height: 650,
          }}>
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
          />
        </Box>
      </div>
    </div>
  );
}

export function RiskStatusReportTab2() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [departmentName, setDepartmentName] = useState("All Departments");
  const [departmentNames, setDepartmentNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const riskStatusColumns = useRiskStatusColumns();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
        });
        setDepartmentNames(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, [auth.token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [paginatedResponse, allDataResponse] = await Promise.all([
          axios.post(RISKSTATUSREPORT_URL, JSON.stringify({ departmentName }), {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }),
          axios.post(RISKSTATUSREPORT_URL, JSON.stringify({ departmentName }), {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
            params: { allData: true },
          }),
        ]);

        setTableData(paginatedResponse.data);
        setAllData(allDataResponse.data);
      } catch (error) {
        console.error("Error fetching risk status data:", error);
      }
    };

    fetchData();
  }, [departmentName, auth.token]);

  const handleDeptNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  const handlePrint = () => {
    const printContent =
      document.getElementById("printableFullTable").innerHTML;
    const printWindow = window.open("", "");
    //  "height=650,width=900"
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Report</title>
          <style>
            @media print {
              table, th, td {
                border: 1px solid black;
                border-collapse: collapse;
                padding: 8px;
              }
              th {
                background-color: #1D4ED8 !important;
                color: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .veryhigh {
                background-color: #F84626 !important;
                color: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .high {
                background-color: #ecbe2f !important;
                color: black !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .medium {
                background-color: #0B37D6 !important;
                color: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .low {
                background-color: #4A7C0B !important;
                color: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const paginatedData = tableData.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="mr-6">
          {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
            <select
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="departmentName"
              value={departmentName}
              onChange={handleDeptNameChange}>
              <option value="All Departments">All Departments</option>
              {departmentNames.map((dept) => (
                <option key={dept.names.id} value={dept.names.name}>
                  {dept.names.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <Button
          onClick={handlePrint}
          size="small"
          variant="outlined"
          style={{ width: "120px" }}>
          Print Report
        </Button>
      </div>
      <div className="mt-2 w-auto card p-4 rounded-md">
        <table
          className="w-full border-collapse border border-black text-sm table-fixed"
          style={{ height: 650 }}>
          <thead>
            <tr className="bg-blue-500 text-white">
              {riskStatusColumns.map((col) => (
                <th
                  key={col.field}
                  className="border-b border-black p-2 whitespace-nowrap h-14">
                  {col.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                {riskStatusColumns.map((col) => (
                  <td
                    key={col.field}
                    className={`border-b border-black p-2 ${
                      row[col.field] === "High"
                        ? "bg-yellow-500 text-black"
                        : row[col.field] === "Very High"
                        ? "bg-red-600 text-white"
                        : row[col.field] === "Medium"
                        ? "bg-blue-700 text-white"
                        : row[col.field] === "Low"
                        ? "bg-green-700 text-white"
                        : ""
                    }`}>
                    {row[col.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <label htmlFor="rowsPerPage" className="mr-2">
              Rows per page:
            </label>
            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="border border-gray-300 rounded px-2 py-1">
              {[10, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50">
              Previous
            </button>
            <span className="mx-2">
              Page {currentPage + 1} of{" "}
              {Math.ceil(tableData.length / rowsPerPage)}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage >= Math.ceil(tableData.length / rowsPerPage) - 1
              }
              className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Hidden full table for printing */}
      <div id="printableFullTable" style={{ display: "none" }}>
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              {riskStatusColumns.map((col) => (
                <th key={col.field} className="border border-black p-2">
                  {col.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allData.map((row, index) => (
              <tr key={index}>
                {riskStatusColumns.map((col) => (
                  <td
                    key={col.field}
                    className={`border border-black p-2 ${
                      row[col.field] === "High"
                        ? "high"
                        : row[col.field] === "Very High"
                        ? "veryhigh"
                        : row[col.field] === "Medium"
                        ? "medium"
                        : row[col.field] === "Low"
                        ? "low"
                        : ""
                    }`}>
                    {row[col.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function RiskStatusReportTab() {
  const [rowSelection, setRowSelection] = useState({});
  const columns = useRiskStatuscolumns();
  const [data, setTableData] = useState("");

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("mrt-pdf-example.pdf");
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  useEffect(() => {}, [rowSelection]);

  const table = useMaterialReactTable({
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        background: "rgb(7, 7, 60)",
        color: "white",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10",
      },
    },
    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#f5f5f5",
        },
        overflowY: "auto",
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "70vh",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        overflowY: "auto",
      },
    },
    columns,
    data,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    //export function is already imported use when needing to export data, using jdPDF
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}>
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}>
          Export Data
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}>
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}>
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  const someEventHandler = () => {
    console.log(table.getState().sorting);
  };

  return <MaterialReactTable table={table} />;
}


{/*New Tables*/}

export function DepartmentTab() {
  const columns = useDeptColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { departmentTable, fetchData } = useDepartmentTable();

  
  const handleFormSubmit = () => {
    fetchData();
  };
  const table = useMaterialReactTable({
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        background: "rgb(7, 7, 60);",
        color: "white",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10",
        
      },
      style: {
        zIndex: "1",
      },
    },
    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#f5f5f5",
        },
        overflowY: "auto",
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "70vh",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        overflowY: "auto",
      },
    },
    columns,
    data: departmentTable,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div className="mx-5">
          <Departmentforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function EmployeesTable() {
  const columns = useUserColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { employeeTable, fetchData } = useEmployeeTable();

  
  const handleFormSubmit = () => {
    fetchData();
  };

  const table = useMaterialReactTable({
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        background: "rgb(7, 7, 60);",
        color: "white",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10",
        
      },
      style: {
        zIndex: "1",
      },
    },
    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#f5f5f5",
        },
        overflowY: "auto",
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "70vh",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        overflowY: "auto",
      },
    },
    columns,
    data: employeeTable,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div className="mx-5">
          <Userforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function RiskViewTable() {
  const columns = useRiskViewColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { riskTable, fetchData } = useRiskTable();

  
  const handleFormSubmit = () => {
    fetchData();
  };

  const table = useMaterialReactTable({
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        background: "rgb(7, 7, 60);",
        color: "white",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10",
        
      },
      style: {
        zIndex: "1",
      },
    },
    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#f5f5f5",
        },
        overflowY: "auto",
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "70vh",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        overflowY: "auto",
      },
    },
    columns,
    data: riskTable,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div className="mx-5">
          <Riskforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function RiskmitigationTab() {
  const columns = useRiskMitigationColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { mitigationTable, fetchData } = useMitigationTable();

  
  const handleFormSubmit = () => {
    fetchData();
  };

  const table = useMaterialReactTable({
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        background: "rgb(7, 7, 60);",
        color: "white",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10",
        
      },
      style: {
        zIndex: "1",
      },
    },
    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#f5f5f5",
        },
        overflowY: "auto",
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "70vh",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        overflowY: "auto",
      },
    },
    columns,
    data: mitigationTable,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div className="m-5">
          <RiskMitigationforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function RiskReview() {
  const columns = useRiskReviewColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { riskTable, fetchData } = useRiskTable();

  
  const handleFormSubmit = () => {
    fetchData();
  };

  const table = useMaterialReactTable({
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        background: "rgb(7, 7, 60);",
        color: "white",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10",
        
      },
      style: {
        zIndex: "1",
      },
    },
    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#f5f5f5",
        },
        overflowY: "auto",
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "70vh",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        overflowY: "auto",
      },
    },
    columns,
    data: riskTable,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div className="m-5">
          <RiskReviewforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function RiskMonitor() {
  const columns = useRiskMonitoringColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { monitoringTable, fetchData } = useMonitoringTable();

  
  const handleFormSubmit = () => {
    fetchData();
  };

  const table = useMaterialReactTable({
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        background: "rgb(7, 7, 60);",
        color: "white",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10",
        
      },
      style: {
        zIndex: "1",
      },
    },
    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#f5f5f5",
        },
        overflowY: "auto",
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "70vh",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        overflowY: "auto",
      },
    },
    columns,
    data: monitoringTable,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div className="m-5">
          <RiskMonitoringforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} className="p-6"/>
    </div>
  );
}