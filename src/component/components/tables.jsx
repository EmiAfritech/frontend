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
  RISKSTATUSREPORT_URL,
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
  //apply to other tables
  function getUsers() {
    try {
      axios
        .get(USERS_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((data) => setTableData(data.data));
      return tableData;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers();
  },[])
  console.log(tableData);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3 pt-2 items-center">
        <div>
          <Userforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className=" mt-2 w-auto cardTable p-4">
        <DataGrid
          rows={getUsers()}
          columns={usercolumns}
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

export function RiskReview() {
  const [tableData, setTableData] = useState([]);
  function getRiskReview() {
    try {
      axios
        .get(RISKREVIEW_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => setTableData(response.data.Data));
      return tableData;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRiskReview();
  },[])
  console.log(tableData);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3 pt-5 flex-row-reverse items-center">
        <div>
          <RiskReviewforms />
        </div>
      </div>
      <div
        style={{ height: 650, width: 1100, backgroundColor: "white" }}
        className="  mt-2 w-auto cardTable p-4">
        <DataGrid
          rows={getRiskReview()}
          columns={riskreviewcolumn}
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
   function getMonitoring(){
    try{
      axios
      .get(RISKMONITORING_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data.Data));
      return tableData
    }catch(err){
      console.log(err)
    }
   }
  
   useEffect=(()=>{
    getMonitoring();
  },[])
  return (
    <div className="flex flex-col mt-6">
      <div className="flex flex-row pt-1 flex-row-reverse items-center">
        <div>
          <RiskMonitoringforms />
        </div>
      </div>
      <div
        style={{ height: 300, backgroundColor: "white" }}
        className="  mt-2 w-auto">
        <DataGrid
          rows={getMonitoring()}
          columns={riskmonitoringcolumn}
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

   function getDepartment(){
    try{
      axios
      .get(DEPARTMENT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => setTableData(data.data));
    }catch(err){
      console.log(err)
    }
   }

   useEffect(()=>{
    getDepartment()
   },[])
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
        className=" mt-2 w-auto cardTable p-4">
        <DataGrid
          rows={tableData}
          columns={deptcolumn}
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
    
  function getAuditReport(){
    try{
      axios
      .get(REPORTAUDITTRAIL_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => setTableData(response.data));
      return tableData
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{getAuditReport()},[])

  return (
    <div className="flex flex-col">
      <div
        style={{ height: 650, width: 850, backgroundColor: "white" }}
        className="  mt-2 w-auto">
        <DataGrid
          rows={getAuditReport()}
          columns={reportaudittrailcolumn}
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
        className="  mt-2 w-auto">
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
        className="  mt-2 w-auto">
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
        className=" mt-2 w-auto">
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
