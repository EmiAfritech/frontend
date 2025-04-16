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
  useGovernanceColumns,
  useGovernanceControlColumns,
  useComplianceColumns,
  useReportRiskPyramidColumns,
} from "./datatable";
import { useContext, useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  DataGrid,
} from "@mui/x-data-grid";
import {
  Departmentforms,
  RiskMitigationforms,
  Framworkforms,
  RiskReviewforms,
  Riskforms,
  Userforms,
  RiskMonitoringforms,
  Controlforms,
  Complianceforms,
} from "./drawers";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Modaltrigger } from "../../context/AuthContext";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";
import { useAuditTrail, useComplianceTable, useControlTable, useDepartmentCodeDropdown, useDepartmentDropdown, useDepartmentTable, useEmployeeTable, useFrameWorkTable, useMitigationByDate, useMitigationTable, useMonitoringTable, useRiskAppetiteReportLow, useRiskNeedingToBeReviewed, useRiskReviewTable, useRiskStatusReport, useRiskTable } from "../../api/routes-data";
import { CustomSelect } from "./widgets";



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



{/*New Tables*/}

export function DepartmentTab() {
  const columns = useDeptColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { departmentTable, fetchData} = useDepartmentTable();
  

  
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
  const {trigger, resettriggerComponent} = useContext(Modaltrigger);


  const Refresh = () => {
    fetchData();
    resettriggerComponent();
  };

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
      {trigger && (Refresh())}
    </div>
  );
}

export function RiskmitigationTab() {
  const columns = useRiskMitigationColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { mitigationTable, fetchData } = useMitigationTable();
  const {trigger, resettriggerComponent} = useContext(Modaltrigger);


  const Refresh = () => {
    fetchData();
    resettriggerComponent();
  };

  
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
      {trigger && (Refresh())}

    </div>
  );
}

export function FrameworkTab() {
  const columns = useGovernanceColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { framework, fetchData } = useFrameWorkTable();  
  
  
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
    data: framework,
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
          <Framworkforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function ControleTab() {
  const columns = useGovernanceControlColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { control, fetchData } = useControlTable();  
  
  
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
    data: control,
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
          <Controlforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function ComplianceTab() {
  const columns = useComplianceColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { complianceTable, fetchData } = useComplianceTable();  
  
  
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
    data: complianceTable,
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
          <Complianceforms onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export function RiskReview() {
  const columns = useRiskReviewColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { riskReviewTable, fetchData } = useRiskReviewTable();
  const {trigger, resettriggerComponent} = useContext(Modaltrigger);


  const Refresh = () => {
    fetchData();
    resettriggerComponent();
  };

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
    data: riskReviewTable,
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
      {trigger && (Refresh())}
    </div>
  );
}

export function RiskMonitor() {
  const columns = useRiskMonitoringColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { monitoringTable, fetchData } = useMonitoringTable();
  const {trigger, resettriggerComponent} = useContext(Modaltrigger);


  const Refresh = () => {
    fetchData();
    resettriggerComponent();
  };

  
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
        height: "50vh",
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
      {trigger && (Refresh())}
    </div>
  );
}

export function RiskStatusReportTab() {
  const { auth } = useContext(AuthContext);
  const [rowSelection, setRowSelection] = useState({});
  const columns = useRiskStatuscolumns();
  const [departmentName, setDeptmentName] = useState("All Departments");
  const { departmentCodeList } = useDepartmentCodeDropdown();
  const { riskStatus } = useRiskStatusReport(departmentName);

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableHeaders = columns.map((c) => c.header);
    const tableData = rows.map((row) =>
      columns.map((col) => row.original[col.accessorKey])
    );

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
      didParseCell: (data) => {
        const colIndex = data.column.index;
        const column = columns[colIndex];
        const cellValue = data.cell.raw;

        if (column.accessorKey === "riskScore" && typeof cellValue === "string") {
          switch (cellValue.toLowerCase()) {
            case "very high":
              data.cell.styles.fillColor = [248, 70, 38]; // #F84626
              data.cell.styles.textColor = 255;
              break;
            case "high":
              data.cell.styles.fillColor = [236, 190, 47]; // #ecbe2f
              data.cell.styles.textColor = 0;
              break;
            case "medium":
              data.cell.styles.fillColor = [11, 55, 214]; // #0B37D6
              data.cell.styles.textColor = 255;
              break;
            case "low":
              data.cell.styles.fillColor = [74, 124, 11]; // #4A7C0B
              data.cell.styles.textColor = 255;
              break;
            default:
              break;
          }
        }
      },
    });

    doc.save("mrt-pdf-example.pdf");
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(riskStatus);
    download(csvConfig)(csv);
  };

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
      sx: { borderRadius: "10" },
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
      sx: { height: "70vh" },
    },
    muiTableBodyCellProps: {
      sx: { overflowY: "auto" },
    },
    columns,
    data: riskStatus,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handleExportData} startIcon={<FileDownloadIcon />}>
          Export Data
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return (
    <main>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
          <CustomSelect
            id="department"
            label={t("departments")}
            value={departmentName}
            onChange={setDeptmentName}
            options={departmentCodeList}
            searchable={true}
            required
            group={false}
          />
        )}
      </div>
      <MaterialReactTable table={table} className="p-6" />
    </main>
  );
}


export function RiskAppetiteReportLower() {
  const columns = useRiskAppetiteReportLowerColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { riskAppetiteLow } = useRiskAppetiteReportLow();

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
    data: riskAppetiteLow,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <MaterialReactTable table={table} className="p-6"/>
    </div>
  );
}

export function RiskAppetiteReportGreater() {
  const columns = useRiskAppetiteReportGreaterColumns();
  const [rowSelection, setRowSelection] = useState({});
  const { riskAppetiteLow } = useRiskAppetiteReportLow();

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
    data: riskAppetiteLow,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <div>
      <MaterialReactTable table={table} className="p-6"/>
    </div>
  );
}

export function RiskMitigationReportTable() {
  const { auth } = useContext(AuthContext);
  const columns = useReportRiskMitigationColumns();
  const [rowSelection, setRowSelection] = useState({});
  const [departmentName, setDeptmentName] = useState("All Departments");
  const { departmentCodeList } = useDepartmentCodeDropdown();
  const { mitigationByDate } = useMitigationByDate(departmentName);

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableHeaders = columns.map((c) => c.header);
    const tableData = rows.map((row) =>
      columns.map((col) => row.original[col.accessorKey])
    );

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("risk-mitigation-report.pdf");
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(mitigationByDate);
    download(csvConfig)(csv);
  };

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
    data: mitigationByDate,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },

    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handleExportData} startIcon={<FileDownloadIcon />}>
          Export Data
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return (
    <main>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse">
        {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
          <CustomSelect
            id="department"
            label={t("departments")}
            value={departmentName}
            onChange={setDeptmentName}
            options={departmentCodeList}
            searchable={true}
            required
            group={false}
            className="w-full"
          />
        )}
      </div>
      <MaterialReactTable table={table} className="p-6" />
    </main>
  );
}


export function ReviewNeedingRisksReportTab() {
  const { auth } = useContext(AuthContext);
  const columns = useReportOpenRiskToReviewColumns();
  const [rowSelection, setRowSelection] = useState({});
  const [departmentName, setDeptmentName] = useState("All Departments");
  const { departmentCodeList } = useDepartmentCodeDropdown();
  const { riskToReview } = useRiskNeedingToBeReviewed(departmentName);

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableHeaders = columns.map((c) => c.header);
    const tableData = rows.map((row) =>
      columns.map((col) => row.original[col.accessorKey])
    );

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("review-needing-risks.pdf");
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(riskToReview);
    download(csvConfig)(csv);
  };

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
    data: riskToReview,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },

    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handleExportData} startIcon={<FileDownloadIcon />}>
          Export Data
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return (
    <main>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse items-center">
        {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
          <CustomSelect
            id="department"
            label={t("departments")}
            value={departmentName}
            onChange={setDeptmentName}
            options={departmentCodeList}
            searchable={true}
            required
            group={false}
          />
        )}
      </div>
      <MaterialReactTable table={table} className="p-6" />
    </main>
  );
}


export function Reportaudittrail() {
  const { auth } = useContext(AuthContext);
  const columns = useReportAuditTrailColumns();
  const [rowSelection, setRowSelection] = useState({});
  const [departmentName, setDeptmentName] = useState("All Departments");
  const { departmentCodeList } = useDepartmentCodeDropdown();
  const { auditTrail } = useAuditTrail(departmentName);
  

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
    data: auditTrail,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    
  });

  return (
    <main>
      <div className="flex flex-row pb-3 pt-2 flex-row-reverse">
      {(auth.role=== "ADMIN" ||
        auth.role === "GENERALMANAGER") && (
          <CustomSelect
            id="department"
            label={t("departments")}
            value={departmentName}
            onChange={setDeptmentName}
            options={departmentCodeList}
            searchable={true}
            required
            group={false}
            className="w-full"
          />
        )}
      </div>
      <MaterialReactTable table={table} className="p-6"/>
    </main>
  );
}

export function PyramidTable({ datatable }) {
  const { auth } = useContext(AuthContext);
  const columns = useReportRiskPyramidColumns();
  const [rowSelection, setRowSelection] = useState({});

  // PDF Export Function
  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableHeaders = columns.map((c) => c.header);
    const tableData = rows.map((row) =>
      columns.map((col) => row.original[col.accessorKey])
    );

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("risk-pyramid-report.pdf");
  };

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
    data: datatable,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },

    // Export buttons
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return (
    <main>
      <MaterialReactTable table={table} className="p-6" />
    </main>
  );
}


