import { IconButton, Tooltip } from "@mui/material";
import "../comstyles/component.css";
import {
  UserAccountDetails,
  DepartmentAccountDetails,
  RiskDetails,
  MitigationDetails,
  RiskReviewDetails,
  RiskMonitoringDetails,
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
      Cell: ({ row }) => (
        <UserAccountDetails data={row.original}/>
      ),
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
      Cell: ({ row }) => (
        <DepartmentAccountDetails data={row.original}/>
      ),
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
          case "very high":
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
          <RiskDetails data={row.original}/>
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
      accessorKey: "riskOwnerLabel",
      header: t("riskReviewer"),
    },
    {
      accessorKey: "mitigatedRiskScore",
      header: t("mitigatedRiskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "very high":
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
      accessorKey: "createdAt",
      header: t("dateMitigated"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <MitigationDetails data={row.original}/>,
    },
  ];
};

export const useGovernanceColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "name",
      header: "Framework",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
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
      accessorKey: "frameworkName",
      header: "Framework",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    
  ];
};

export const useComplianceColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "controlItem",
      header: "Control Item",
    },
    {
      accessorKey: "assessment",
      header: "Assessment",
    },
    {
      accessorKey: "recomendation",
      header: "Recomendation",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    
    {
      accessorKey: "updatedAt",
      header: "Last Updated",
    },
  ];
};

export const useRiskReviewColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskName",
      header: t("riskName"),
    },
    {
      accessorKey: "submittedByLabel",
      header: "Submitted By",
    },
    {
      accessorKey: "riskReview",
      header: "Review",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "createdAt",
      header: t("dateReviewed"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <RiskReviewDetails data={row.original}/>,
    },
  ];
};

export const useRiskMonitoringColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskName",
      header: t("riskName"),
    },
    {
      accessorKey: "riskResponseImplementation",
      header: t("riskImplementation"),
    },
    {
      accessorKey: "challenges",
      header: "Challenges",
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
      Cell: ({ row }) => <RiskMonitoringDetails data={row.original}/>,
    },
  ];
};

export const useRiskStatuscolumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskCode",
      header: "Risk Code",
    },
    {
      accessorKey: "Subject",
      header: "Name",
    },
    {
      accessorKey: "riskScore",
      header: "Risk Score",
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "very high":
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
    },
    {
      accessorKey: "view",
      header: "Action",
    },
  ];
};


export const useRiskAppetiteReportLowerColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskID",
      header: t("riskCode"),
    },
    {
      accessorKey: "riskName",
      header: t("subject"),
    },
    {
      accessorKey: "riskScore",
      header:  t("riskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "very high":
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
          case "very high":
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
    },
    {
      accessorKey: "riskName",
      header: t("subject"),
    },
    {
      accessorKey: "riskScore",
      header:  t("riskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "very high":
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
          case "very high":
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
    },
    {
      accessorKey: "riskName",
      header: t("subject"),
    },
    {
      accessorKey: "riskReviewer",
      header:  t("riskReviewer"),
    },
    {
      accessorKey: "mitigatedRiskScore",
      header: t("mitigatedRiskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "very high":
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
    },
  ];
  
};

export const useReportOpenRiskToReviewColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "riskCode",
      header: t("riskCode"),
    },
    {
      accessorKey: "status",
      header: t("status"),
    },
    {
      accessorKey: "Subject",
      header:  t("subject"),
    },
    {
      accessorKey: "riskScore",
      header: t("inherentRisk"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "very high":
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
    },
    {
      accessorKey: "nextReviewDate",
      header: t("nextReviewDate"),
    },
  ];
  
};

export const useReportAuditTrailColumns = () => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "action",
      header:  "Action",
    },
    {
      accessorKey: "submittedBy",
      header: "Submitted By",
    },
    {
      accessorKey: "createdAt",
      header: "Creted At",
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
      
    },
  ];
};

export const useReportRiskPyramidColumns = () => {
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
      accessorKey: "riskDescription",
      header: t("riskDescription"),
    },
    {
      accessorKey: "riskScore",
      header: t("riskScore"),
      muiTableBodyCellProps: ({ cell }) => {
        const priority = String(cell.getValue()).toLowerCase();
      
        let backgroundColor = "transparent";
      
        switch (priority) {
          case "very high":
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










