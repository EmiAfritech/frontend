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
} from "./datatable";
import { useContext, useEffect, useState } from "react";
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
import { CsvModal } from "./modals";
import { Modaltrigger } from "../../context/AuthContext";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};

export function EmployeesTable() {
  const {auth} = useContext(AuthContext)
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(Modaltrigger);
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
            pageSizeOptions={[15.20]}
            getRowId={(row)=> row.id}
          />
        </Box>
      </div>
    </div>
  );
}

export function RiskReview() {
  const {auth} = useContext(AuthContext)
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
      {localStorage.getItem("role") === "ADMIN" ||
      localStorage.getItem("role") === "GENERALMANAGER" ||
      localStorage.getItem("role") === "MANAGER" ? (
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
          getRowId={(row)=> row.id}
        />
        </Box>
      </div>
    </div>
  );
}


export function ClosedRiskTab() {
  const {auth} = useContext(AuthContext)
  const [tableData, setTableData] = useState([]);
  const {t} = useTranslation();
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

export function RiskMonitor() {
  const {auth} = useContext(AuthContext)
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
          getRowId={(row)=> row.id}
        />
        </Box>
      </div>
    </div>
  );
}

export function RiskAppetiteReportGreater() {
  const {auth} = useContext(AuthContext)
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
            height: 650
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
  const {auth} = useContext(AuthContext)
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
            height: 650
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

export function DepartmentTab() {
  const {auth} = useContext(AuthContext)
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(Modaltrigger);
  const deptcolumn = useDeptColumns();

  const getDepartment = async () => {
    try {
      const response = await axios.get(DEPARTMENT_URL, {
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

  useEffect(() => {
    getDepartment();
  }, []);

  const handleFormSubmit = () => {
    // Call the function to fetch updated data after form submission
    getDepartment();
  };

  useEffect(() => {
    if (trigger) {
      getDepartment();
      resettriggerComponent();
    }
  }, [trigger]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        <div>
          <Departmentforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <div  className="mt-2 w-auto cardTable p-4">
      <Box sx={{ height: 650 }}>
        <DataGrid
          rows={tableData}
          columns={deptcolumn}
          pageSize={10}
          pagination
          getRowId={(row)=> row.id}
        />
        </Box>
      </div>
    </div>
  );
}

export function RiskmitigationTab() {
  const {auth} = useContext(AuthContext)
  const [tableData, setTableData] = useState([]);
  const { trigger, resettriggerComponent } = useContext(Modaltrigger);
  const riskmitigationcolumn = useRiskMitigationColumns()

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
            height: 650
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
          getRowId={(row)=> row.id}
        />
        </Box>
      </div>
    </div>
  );
}

export function RiskViewTable() {
  const {auth} = useContext(AuthContext)
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
            height: 650
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
            getRowId={(row)=> row.id}
          />
        </Box>
      </div>
    </div>
  );
}

export function Reportaudittrail() {
  const {auth} = useContext(AuthContext)
  const [tableData, setTableData] = useState([]);
  const reportaudittrailcolumn =  useReportAuditTrailColumns();

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
        console.log(response)
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
  const {auth} = useContext(AuthContext)
  const [tableData, setTableData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  const {t} = useTranslation();
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
            height: 650
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
  const {auth} = useContext(AuthContext)
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
            height: 650
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

// export function RiskStatusReportTab() {
//   const {auth} = useContext(AuthContext)
//   const [tableData, setTableData] = useState([]);
//   const [departmentName, setDeptmentName] = useState("All Departments");
//   const [deptmentNames, setdeptmentNames] = useState([]);
//   const riskstatuscolumn = useRiskStatusColumns();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + auth.token,
//           },
//         });

//         setdeptmentNames(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//           RISKSTATUSREPORT_URL,
//           JSON.stringify({ departmentName }),
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: "Bearer " + auth.token,
//             },
//             withCredentials: true,
//           }
//         );

//         setTableData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [departmentName]);

//   const handleDeptNameChange = (e) => {
//     setDeptmentName(e.target.value);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-4">
//         <div className="col-span-3"></div>
//         <div>
//           {auth.role === "ADMIN" ||
//           auth.role === "GENERALMANAGER" ? (
//             <>
//               <select
//                 type="text"
//                 className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                 id="departmentName"
//                 aria-describedby="departmentName"
//                 value={departmentName}
//                 autoComplete="off"
//                 onChange={handleDeptNameChange}>
//                 <option value="All Departments">{t("allDepartment")}</option>
//                 {deptmentNames.map((deptmentNames) => (
//                   <option
//                     key={deptmentNames.names.id}
//                     value={deptmentNames.names.name}>
//                     {deptmentNames.names.name}
//                   </option>
//                 ))}
//               </select>
//             </>
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//       <div  className=" mt-2 w-auto card p-4">
//         <Box
//           sx={{
//             [`.${gridClasses.cell}.veryhigh`]: {
//               backgroundColor: "#F84626",
//             },
//             [`.${gridClasses.cell}.high`]: {
//               backgroundColor: "#ecbe2f",
//             },
//             [`.${gridClasses.cell}.medium`]: {
//               backgroundColor: "#0B37D6",
//             },
//             [`.${gridClasses.cell}.low`]: {
//               backgroundColor: "#4A7C0B",
//             },
//             height: 650
//           }}>
//           <DataGrid
//             rows={tableData}
//             columns={riskstatuscolumn}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 10 },
//               },
//             }}
//             pageSizeOptions={[10, 15]}
//             slots={{ toolbar: GridToolbar }}
//             getCellClassName={(params) => {
//               if (params.value === "High") {
//                 return "high";
//               } else if (params.value === "Very High") {
//                 return "veryhigh";
//               } else if (params.value === "Medium") {
//                 return "medium";
//               } else if (params.value === "Low") {
//                 return "low";
//               }
//             }}
//             getRowId={(row)=> row.id}
//           />
//         </Box>
//       </div>
//     </div>
//   );
// }



export function RiskStatusReportTab() {
  const { auth } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [departmentName, setDeptmentName] = useState("All Departments");
  const [deptmentNames, setDeptmentNames] = useState([]);
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchDepartments = async () => {
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
    fetchDepartments();
  }, [auth.token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKSTATUSREPORT_URL,
          JSON.stringify({ departmentName }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
        setTableData(response.data.slice(0, rowsPerPage)); // For pagination
        setAllData(response.data); // For printing all data
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [departmentName, auth.token]);

  const handleDeptNameChange = (e) => {
    setDeptmentName(e.target.value);
    setCurrentPage(0); // Reset to first page on department change
  };

  const handlePrint = () => {
    const printContent = tableRef.current.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload to restore original page content
  };

  const totalPages = Math.ceil(allData.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIdx = pageNumber * rowsPerPage;
    setTableData(allData.slice(startIdx, startIdx + rowsPerPage));
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
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 text-sm text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-2 focus:border-blue-500 disabled:bg-blue-gray-50"
                id="departmentName"
                aria-describedby="departmentName"
                value={departmentName}
                autoComplete="off"
                onChange={handleDeptNameChange}
              >
                <option value="All Departments">All Departments</option>
                {deptmentNames.map((dept) => (
                  <option key={dept.names.id} value={dept.names.name}>
                    {dept.names.name}
                  </option>
                ))}
              </select>
            </>
          ) : null}
        </div>
      </div>
      <div className="mt-2 w-auto card p-4">
        <table
          ref={tableRef}
          className="min-w-full divide-y divide-gray-200 table-auto border border-gray-300"
        >
          <thead className="bg-blue-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-300">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-300">
                Risk Level
              </th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  row.riskLevel === "Very High"
                    ? "bg-red-600 text-white"
                    : row.riskLevel === "High"
                    ? "bg-yellow-400 text-black"
                    : row.riskLevel === "Medium"
                    ? "bg-blue-500 text-white"
                    : row.riskLevel === "Low"
                    ? "bg-green-700 text-white"
                    : ""
                }`}
              >
                <td className="px-6 py-4 border border-gray-300">{row.department}</td>
                <td className="px-6 py-4 border border-gray-300">{row.riskLevel}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <button
          onClick={handlePrint}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Print Report
        </button>
      </div>
    </div>
  );
}



