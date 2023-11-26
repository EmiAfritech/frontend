import "../comstyles/component.css";
import { DepartmentData, MitigatedRiskData, MonitoredRiskData, ReviewRiskData, RiskData, UserData, MitigatedRiskReportData } from "./modals";










export const usercolumns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "dob", headerName: "Date of Birth", width: 170 },
  { field: "phoneNumber", headerName: "Phone Number", width: 170 },
  { field: "email", headerName: "Email", width: 170 },
  { field: "role", headerName: "Role", width: 170 },
  {
    field: "view",
    headerName: "Action",
    width: 50,
    renderCell: (params) => UserData(params),
  },
 
];


export const riskreviewcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskID", headerName: "Risk Code", width: 100 },
  { field: "riskName", headerName: "Risk Name", width: 150 },
  { field: "riskReview", headerName: "Risk Review", width: 150 },
  {
    field: "NextRiskReviewDate",
    headerName: "Next Risk Review Date",
    width: 170,
  },
  { field: "riskReviewer", headerName: "Risk Reviewer", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  {
    field: "view",
    headerName: "Action",
    width: 50,
    renderCell: (params) => ReviewRiskData(params),
  },
];

export const riskreviewrow = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskID", headerName: "Risk Code", width: 100 },
  { field: "riskName", headerName: "Risk Name", width: 150 },
  { field: "riskReview", headerName: "Risk Review", width: 150 },
  {
    field: "NextRiskReviewDate",
    headerName: "Next Risk Review Date",
    width: 170,
  },
  { field: "riskReviewer", headerName: "Risk Reviewer", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
];

export const riskmitigationcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskID", headerName: "Risk Code", width: 70 },
  { field: "riskName", headerName: "Risk Name", width: 70 },
  {
    field: "mitigatedRiskProbabilityLevel",
    headerName: "Mitigated Risk Probability Level",
    width: 150,
  },
  {
    field: "mitigatedRiskImpactLevel",
    headerName: "Mitigated Risk Impact Level",
    width: 150,
  },
  {
    field: "mitigatedRiskScore",
    headerName: "Mitigated Risk Score",
    width: 150,
  },
  { field: "mitigationOwner", headerName: "Mitigation Owner", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
   {
    field: "view",
    headerName: "Action",
    width: 50,
    renderCell: (params) => MitigatedRiskData(params),
  },
];

export const reportriskmitigationcolumn = [
{ field: "id", headerName: "ID", width: 70 },
{ field: "riskID", headerName: "Risk Code", width: 70 },
{ field: "riskName", headerName: "Risk Name", width: 150 },
{
  field: "mitigatedRiskScore",
  headerName: "Mitigated Risk Score",
  width: 150,
},
{ field: "mitigationOwner", headerName: "Mitigation Owner", width: 150 },
{ field: "createdAt", headerName: "Created At", width: 150 },
];


export const reportopenrisktoreviewcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskCode", headerName: "Risk Code", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "Subject", headerName: "subject", width: 150 },
  { field: "riskScore", headerName: "Inherent Risk ", width: 150 },
  { field: "daysOpen", headerName: "Days Open", width: 150 },
  { field: "nextReviewDate", headerName: "Next Review Date", width: 150 },
];



export const riskstatuscolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskCode", headerName: "Risk Code", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "Subject", headerName: "subject", width: 150 },
  { field: "department", headerName: "Department", width: 100 },
  { field: "riskScore", headerName: "Inherent Risk ", width: 150 },
  { field: "daysOpen", headerName: "Days Open", width: 150 },

  { field: "createdOn", headerName: "Submitted On", width: 150 },
  { field: "submittedBy", headerName: "Submitted By", width: 150 },
  { field: "monitoringPlanned", headerName: "monitoring Planned", width: 150 },
  { field: "mitigationPlanned", headerName: "mitigation Planned", width: 150 },
  { field: "reviewPlanned", headerName: "review Planned", width: 150 },
];

export const reportaudittrailcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "action", headerName: "Action", width: 500 },
  { field: "createdAt", headerName: "Created At", width: 200 },
];

export const deptcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "deptID", headerName: "Dapartment Code", width: 150 },
  { field: "name", headerName: "Department Name", width: 180 },
  { field: "manager", headerName: "Department Manager", width: 180 },
  { field: "location", headerName: "Location", width: 170 },
  { field: "createdAt", headerName: "Created At", width: 180 },
  {
    field: "view",
    headerName: "Action",
    width: 50,
    renderCell: (params) => DepartmentData(params),
  },
];

export const riskmonitoringcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "riskID",
    headerName: "Risk Code",
    width: 120,
  },
  {
    field: "riskName",
    headerName: "Risk Name",
    width: 120,
  },
  {
    field: "riskResponseImplementation",
    headerName: "Risk Implementation",
    width: 120,
  },
  {
    field: "riskResponseActivitiyStatus",
    headerName: "Risk Activity Status",
    width: 120,
  },
  {
    field: "recommendedChanges",
    headerName: "Recommended Changes",
    width: 120,
  },
  { field: "challenges", headerName: "Challenges", width: 100 },
  { field: "comments", headerName: "Comments", width: 120 },
  { field: "createdAt", headerName: "Created At", width: 120 },
  {
    field: "view",
    headerName: "Action",
    width: 50,
    renderCell: (params) => MonitoredRiskData(params),
  },
];
export const riskappetitereportgreatercolumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "riskID",
    headerName: "Risk Code",
    width: 120,
  },
  {
    field: "riskName",
    headerName: "Subject",
    width: 120,
  },
  {
    field: "riskScore",
    headerName: "Inherent Risk score",
    width: 120,
  },
  {
    field: "mitigatedRiskScore",
    headerName: "Residual Risk score",
    width: 120,
  },
];

export const riskappetitereportlowercolumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "riskID",
    headerName: "Risk Code",
    width: 120,
  },
  {
    field: "riskName",
    headerName: "Subject",
    width: 120,
  },
  {
    field: "riskScore",
    headerName: "Inherent Risk score",
    width: 120,
  },
  {
    field: "mitigatedRiskScore",
    headerName: "Residual Risk score",
    width: 120,
  },
];

export const riskviewcolumn = [
  { field: "id", headerName: "ID", width: 70,},
  { field: "riskID", headerName: "Risk Code", width: 100 },
  { field: "riskName", headerName: "Risk Name", width: 150 },
  { field: "riskDescription", headerName: "Risk Description", width: 250 },
  { field: "riskCategory", headerName: "Risk Category", width: 180 },
  { field: "riskScore", headerName: "Risk Score", width: 100 },
  { field: "riskOwner", headerName: "Risk Owner", width: 150 },
  {
    field: "view",
    headerName: "Action",
    width: 50,
    renderCell: (params) => RiskData(params),
  },
];
