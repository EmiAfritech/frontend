import { IconButton, Tooltip } from "@mui/material";
import "../comstyles/component.css";
import {
  RiskAdviceReportData,
  UserAccountDetails,
  DepartmentAccountDetails,
  RiskDetails,
} from "./modals";
import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";
import { Delete } from "./widgets";

export const useUserColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "firstName",
      header: t("firstName"),
    },
    {
      accessorKey: "lastName",
      header: t("lastName"),
    },
    {
      accessorKey: "phoneNumber",
      header: t("phoneNumber"),
    },
    {
      accessorKey: "email",
      header: t("email"),
    },
    {
      accessorKey: "role",
      header: t("role"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <UserAccountDetails />,
    },
  ];
};

export const useDeptColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "deptID",
      header: t("departmentCode"),
    },
    {
      accessorKey: "name",
      header: t("departmentName"),
    },
    {
      accessorKey: "location",
      header: t("location"),
    },
    {
      accessorKey: "createdAt",
      header: t("createdAt"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <DepartmentAccountDetails />,
    },
  ];
};

export const useRiskViewColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskID",
      header: t("riskCode"),
    },
    {
      accessorKey: "riskName",
      header: t("riskName"),
    },
    {
      accessorKey: "riskCategory",
      header: t("riskCategory"),
    },
    {
      accessorKey: "riskStatus",
      header: t("riskStatusdatatable"),
    },
    
    {
      accessorKey: "riskScore",
      header: t("riskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, // Enforce priority
            color: "white",
          } 
        };
      },
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => (
          <RiskDetails data={row.original} />
      ),
    },
  ];
};

export const useRiskMitigationColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskName",
      header: t("riskName"),
    },
    {
      accessorKey: "mitigatedRiskScore",
      header: t("mitigatedRiskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, 
            color: "white",
          } 
        };
      },    
    },
    {
      accessorKey: "riskReviewer",
      header: t("riskReviewer"),
    },
    {
      accessorKey: "createdAt",
      header: t("dateMitigated"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <RiskDetails data={row.original}/>,
    },
  ];
};

export const useGovernanceColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "name",
      header: "Governance Framework",
    },
    {
      accessorKey: "description",
      header: "Governance Description",
    },
    {
      accessorKey: "createdAt",
      header: "Creted At",
    },
    
    {
      accessorKey: "updatedAt",
      header: "Last Updated",
    },
  ];
};

export const useGovernanceControlColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "controlItem",
      header: "Control Item",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "name",
      header: "Framework",
    },
    {
      accessorKey: "createdAt",
      header: "Creted At",
    },
  ];
};

export const useRiskReviewColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskID",
      header: t("riskCode"),
    },
    {
      accessorKey: "riskName",
      header: t("riskName"),
    },
    {
      accessorKey: "riskOwner",
      header: t("owner"),
    },
    {
      accessorKey: "riskResponse",
      header: t("riskResponse"),
    },
    {
      accessorKey: "createdAt",
      header: t("dateReviewed"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <RiskDetails data={row.original}/>,
    },
  ];
};

export const useRiskMonitoringColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskID",
      header: t("riskCode"),
    },
    {
      accessorKey: "riskName",
      header: t("riskName"),
    },
    {
      accessorKey: "riskResponseImplementation",
      header: t("riskImplementation"),
    },
    {
      accessorKey: "recommendedChanges",
      header: t("recommendedChanges"),
    },
    {
      accessorKey: "createdAt",
      header: t("dateMonitored"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <RiskDetails data={row.original}/>,
    },
  ];
};

export const useRiskStatuscolumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskCode",
      header: "Risk Code",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "Subject",
      header: "Name",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskScore",
      header: "Risk Score",
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, 
            color: "white",
          } 
        };
      },
    },
    {
      accessorKey: "createdOn",
      header: "Date of Issue",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "view",
      header: "Action",
      Cell: ({ row }) => (
        <Tooltip title="View Details">
          <IconButton
            onClick={() => console.log(row.original.deptID)}
            color="primary">
            <FaEye />
          </IconButton>
        </Tooltip>
      ),
    },
  ];
};


export const useRiskAppetiteReportLowerColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskID",
      header: t("riskCode"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskName",
      header: t("subject"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskScore",
      header:  t("riskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, 
            color: "white",
          } 
        };
      },    
    },
    {
      accessorKey: "mitigatedRiskScore",
      header: t("mitigatedRiskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, // Enforce priority
            color: "white",
          } 
        };
      },     
    },
  ];
  
};

export const useRiskAppetiteReportGreaterColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskID",
      header: t("riskCode"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskName",
      header: t("subject"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskScore",
      header:  t("riskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, // Enforce priority
            color: "white",
          } 
        };
      },     
    },
    {
      accessorKey: "mitigatedRiskScore",
      header: t("mitigatedRiskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, // Enforce priority
            color: "white",
          } 
        };
      },     
    },
  ];
  
};

export const useReportRiskMitigationColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskID",
      header: t("riskCode"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskName",
      header: t("subject"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskReviewer",
      header:  t("riskReviewer"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "mitigatedRiskScore",
      header: t("mitigatedRiskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, // Enforce priority
            color: "white",
          } 
        };
      },     
    },
    {
      accessorKey: "createdAt",
      header: t("dateMitigated"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
  ];
  
};

export const useReportOpenRiskToReviewColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskCode",
      header: t("riskCode"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "status",
      header: t("status"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "Subject",
      header:  t("subject"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "riskScore",
      header: t("inherentRisk"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "veryhigh":
            backgroundColor = "#F84626";
            break;
          case "high":
            backgroundColor = "#ecbe2f";
            break;
          case "medium":
            backgroundColor = "#0B37D6";
            break;
          case "low":
            backgroundColor = "#4A7C0B";
            break;
          default:
            backgroundColor = "transparent";
        }
      
        return { 
          sx: { 
            backgroundColor: `${backgroundColor} !important`, // Enforce priority
            color: "white",
          } 
        };
      },     
    },
    {
      accessorKey: "daysOpen",
      header: t("daysOpen"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "nextReviewDate",
      header: t("nextReviewDate"),
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
  ];
  
};

export const useReportAuditTrailColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "id",
      header: "ID",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "type",
      header: "Type",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "action",
      header:  "Action",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "submittedBy",
      header: "Submitted By",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "createdAt",
      header: "Creted At",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
  ];
  
};

export const useRiskStatusColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 1 },
    { field: "riskDescription", headerName: t("riskDescription"), flex: 1 },
    { field: "riskScore", headerName: t("riskScore"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => RiskAdviceReportData(params),
    },
  ];
};

export const useReportRiskPyramidColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 1 },
    { field: "riskDescription", headerName: t("riskDescription"), flex: 1 },
    { field: "riskScore", headerName: t("riskScore"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => RiskAdviceReportData(params),
    },
  ];
};











