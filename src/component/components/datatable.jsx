import { t } from "i18next";
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
} from "./modals";
import { useTranslation } from "react-i18next";

export const usercolumns = () => {
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

export const riskreviewcolumn = () => {
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

export const riskreviewrow = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), width: 100 },
    { field: "riskName", headerName: t("riskName"), width: 150 },
    { field: "riskReview", headerName: t("riskReview"), width: 150 },
    {
      field: "NextRiskReviewDate",
      headerName: t("nextReviewDate"),
      width: 170,
    },
    { field: "riskReviewer", headerName: t("riskReviewer"), width: 150 },
    { field: "createdAt", headerName: t("dateReviewed"), width: 150 },
  ];
};

export const riskmitigationcolumn = () => {
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

export const reportriskpyramidcolumn = () => {
  const { t } = useTranslation();
  return [
    //{ field: "id", headerName: "ID", flex: 0.5 },
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 1 },
    {
      field: "riskDescription",
      headerName: "Risk Description",
      flex: 1,
    },
    { field: "riskScore", headerName: t("riskScore"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => RiskAdviceReportData(params),
    },
  ];
};
export const reportriskmitigationcolumn = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: t("riskCode"), flex: 1 },
    { field: "riskName", headerName: t("riskName"), flex: 2 },
    {
      field: "mitigatedRiskScore",
      headerName: t("mitigatedRiskScore"),
      flex: 1,
    },

    { field: "riskReviewer", headerName: t("riskRreviewer"), flex: 1 },
    { field: "createdAt", headerName: t("dateMitigated"), flex: 1 },
  ];
};

export const reportopenrisktoreviewcolumn = () => {
  return [
    // { field: "id", headerName: "ID", flex: 0.5 },
    { field: "riskCode", headerName: t("riskCode"), flex: 1 },
    { field: "status", headerName: t("status"), flex: 1 },
    { field: "Subject", headerName: t("subject"), flex: 1 },
    { field: "riskScore", headerName: t("inherentRisk"), flex: 1 },
    { field: "daysOpen", headerName: t("daysOpen"), flex: 1 },
    { field: "nextReviewDate", headerName: t("nextRreviewDate"), flex: 1 },
  ];
};

export const riskstatuscolumn = () => {
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

export const reportaudittrailcolumn = () => {
  const { t } = useTranslation();
  return [
    { field: "action", headerName: t("Action"), width: 500 },
    { field: "createdAt", headerName: t("createdAt"), width: 200 },
  ];
};

export const deptcolumn = () => {
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

export const riskmonitoringcolumn = () => {
  const { t } = useTranslation();
  return [
    {
      field: "riskID",
      headerName: t("riskCode"),
      flex: 1,
    },
    {
      field: "riskName",
      headerName: t("riskName"),
      flex: 1,
    },
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
    { field: "challenges", headerName: t("challanges"), flex: 1 },
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
export const riskappetitereportgreatercolumn = () => {
  const { t } = useTranslation();
  return [
    {
      field: "riskID",
      headerName: t("riskCode"),
      flex: 1,
    },
    {
      field: "riskName",
      headerName: t("subject"),
      flex: 1,
    },
    {
      field: "riskScore",
      headerName: t("riskScore"),
      flex: 1,
    },
    {
      field: "mitigatedRiskScore",
      headerName: t("mitigatedRiskScore"),
      flex: 1,
    },
  ];
};

export const riskappetitereportlowercolumn = () => {
  const { t } = useTranslation();
  return [
    {
      field: "riskID",
      headerName: t("riskCode"),
      flex: 1,
    },
    {
      field: "riskName",
      headerName: t("subject"),
      flex: 1,
    },
    {
      field: "riskScore",
      headerName: t("riskScore"),
      flex: 1,
    },
    {
      field: "mitigatedRiskScore",
      headerName: t("mitigatedRiskScore"),
      flex: 1,
    },
  ];
};

export const riskviewcolumn = () => {
  const { t } = useTranslation();
  return [
    { field: "riskID", headerName: "Risk Code", felx: 1 },
    { field: "riskName", headerName: "Risk Name", felx: 2 },
    { field: "riskDescription", headerName: t("riskDescription"), flex: 2 },
    { field: "riskCategory", headerName: t("riskCategory"), flex: 1 },
    { field: "riskStatus", headerName: t("riskStatus"), flex: 1 },
    { field: "riskScore", headerName: t("riskScore"), flex: 1 },
    {
      field: "view",
      headerName: t("Action"),
      flex: 0.5,
      renderCell: (params) => RiskData(params),
    },
  ];
};
