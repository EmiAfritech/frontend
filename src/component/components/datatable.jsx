import { IconButton,Tooltip } from "@mui/material";
import "../comstyles/component.css";
import {
  DepartmentData,
  MitigatedRiskData,
  MonitoredRiskData,
  ReviewRiskData,
  RiskData,
  UserData,
  MitigatedRiskReportData,
  RiskAdviceReportData,
  CDSMainForm,
} from "./modals";
import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";

export const useUserColumns = () => {
  const { t } = useTranslation();

  return [
    { field: "firstName", headerName: t("firstName"), flex: 1 },
    { field: "lastName", headerName: t("lastName"), flex: 1 },
    { field: "phoneNumber", headerName: t("phoneNumber"), flex: 1 },
    { field: "email", headerName: t("email"), flex: 1 },
    { field: "role", headerName: t("role"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => UserData(params),
    },
  ];
};

export const useRiskStatuscolumns = () => {
  return [
    {
      accessorKey: "id",
      header: "ID",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: "name",
      header: "Name",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorFn: (row) => row.date,
      id: "date",
      header: "Date of Issue",
      Header: () => <i>Date of Issue</i>,
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
            color="primary"
          >
            <FaEye/>
          </IconButton>
        </Tooltip>
      ),
    },
  ];
};



export const useRiskReviewColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 1 },
    { field: "riskReview", headerName: t("riskReview"), flex: 1 },
    {
      field: "NextRiskReviewDate",
      headerName: t("nextReviewDate"),
      flex: 1,
    },
    { field: "createdAt", headerName: t("dateReviewed"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => ReviewRiskData(params),
    },
  ];
};


export const useRiskMitigationColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 1 },
    {
      field: "mitigatedRiskProbabilityLevel",
      headerName: t("mitgatedRiskProbabillityLevel"),
      flex: 1,
    },
    {
      field: "mitigatedRiskImpactLevel",
      headerName: t("mitigatedRiskImpactLevel"),
      flex: 1,
    },
    {
      field: "mitigatedRiskScore",
      headerName: t("mitigatedRiskScore"),
      flex: 1,
    },
    { field: "riskReviewer", headerName: t("riskReviewer"), flex: 1 },
    { field: "createdAt", headerName: t("dateMitigated"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => MitigatedRiskData(params),
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

export const useReportRiskMitigationColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 2 },
    {
      field: "mitigatedRiskScore",
      headerName: t("mitigatedRiskScore"),
      flex: 1,
    },
    { field: "riskReviewer", headerName: t("riskReviewer"), flex: 1 },
    { field: "createdAt", headerName: t("dateMitigated"), flex: 1 },
  ];
};

export const useReportOpenRiskToReviewColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskCode", headerName: t("riskCode"), flex: 1 },
    { field: "status", headerName: t("status"), flex: 1 },
    { field: "Subject", headerName: t("subject"), flex: 1 },
    { field: "riskScore", headerName: t("inherentRisk"), flex: 1 },
    { field: "daysOpen", headerName: t("daysOpen"), flex: 1 },
    { field: "nextReviewDate", headerName: t("nextReviewDate"), flex: 1 },
  ];
};

export const useRiskStatusColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskCode", headerName: t("riskCode"), flex: 1 },
    { field: "status", headerName: t("status"), flex: 1 },
    { field: "Subject", headerName: t("subject"), flex: 1 },
    { field: "department", headerName: t("department"), flex: 1 },
    { field: "riskScore", headerName: t("inherentRisk"), flex: 1 },
    { field: "daysOpen", headerName: t("daysOpen"), flex: 1 },
    { field: "createdOn", headerName: t("submittedOn"), flex: 1 },
  ];
};

export const useReportAuditTrailColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "action", headerName: t("Action"), width: 500 },
    { field: "createdAt", headerName: t("createdAt"), width: 200 },
  ];
};

export const useDeptColumns2 = () => {
  const { t } = useTranslation();
  return [
    { field: "deptID", headerName: t("departmentCode"), flex: 1 },
    { field: "name", headerName: t("departmentName"), flex: 1 },
    { field: "manager", headerName: t("departmentManager"), flex: 1 },
    { field: "location", headerName: t("location"), flex: 1 },
    { field: "createdAt", headerName: t("createdAt"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => DepartmentData(params),
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
      header: "Action",
      Cell: ({ row }) => (
        <Tooltip title="View Detail">
          <IconButton
            onClick={() => CDSMainForm(true)}
            color="primary"
          >
            <FaEye/>
          </IconButton>
        </Tooltip>
      ),
    },
  ];
};

export const useRiskMonitoringColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 1 },
    {
      field: "riskResponseImplementation",
      headerName: t("riskImplementation"),
      flex: 1,
    },
    {
      field: "riskResponseActivitiyStatus",
      headerName: t("riskActivityStatus"),
      flex: 1,
    },
    {
      field: "recommendedChanges",
      headerName: t("recommendedChanges"),
      flex: 1,
    },
    { field: "challenges", headerName: t("challenges"), flex: 1 },
    { field: "comments", headerName: t("comments"), flex: 1 },
    { field: "mitigationOwner", headerName: t("mitigationOwner"), flex: 1 },
    { field: "createdAt", headerName: t("dateMonitored"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => MonitoredRiskData(params),
    },
  ];
};

export const useRiskAppetiteReportGreaterColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("subject"), flex: 1 },
    { field: "riskScore", headerName: t("riskScore"), flex: 1 },
    { field: "mitigatedRiskScore", headerName: t("mitigatedRiskScore"), flex: 1 },
  ];
};

export const useRiskAppetiteReportLowerColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("subject"), flex: 1 },
    { field: "riskScore", headerName: t("riskScore"), flex: 1 },
    { field: "mitigatedRiskScore", headerName: t("mitigatedRiskScore"), flex: 1 },
  ];
};

export const useRiskViewColumns = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 2 },
    { field: "riskDescription", headerName: t("riskDescription"), flex: 2 },
    { field: "riskCategory", headerName: t("riskCategory"), flex: 1 },
    { field: "riskStatus", headerName: t("riskStatusdatatable"), flex: 1 },
    { field: "riskScore", headerName: t("riskScore"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => RiskData(params),
    },
  ];
};
