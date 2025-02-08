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
  UserAccountDetails,
  DepartmentAccountDetails,
} from "./modals";
import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";

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
      Cell: ({ row }) => <UserAccountDetails/>
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
      Cell: ({ row }) => <DepartmentAccountDetails/>
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
      accessorKey: "riskDescription",
      header: t("riskDescription"),
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
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <DepartmentAccountDetails/>
    },
  ];
};

export const useRiskMitigationColumns = () => {
  const {t } = useTranslation();
  return [
    {
      accessorKey: "riskName",
      header: t("riskName"),
    },
    {
      accessorKey: "mitigatedRiskScore",
      header: t("mitigatedRiskScore"),
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
      Cell: ({ row }) => <DepartmentAccountDetails/>
    },
  ];
};

export const useRiskReviewColumns = () => {
  const {t } = useTranslation();
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
      accessorKey: "riskReview",
      header: t("riskReview"),
    },
    {
      accessorKey: "NextRiskReviewDate",
      header: t("nextReviewDate"),
    },
    {
      accessorKey: "createdAt",
      header: t("dateReviewed"),
    },
    {
      accessorKey: "view",
      header: t("Action"),
      Cell: ({ row }) => <DepartmentAccountDetails/>
    },
  ];
};

export const useRiskMonitoringColumns = () => {
  const {t } = useTranslation();
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
      Cell: ({ row }) => <DepartmentAccountDetails/>
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


