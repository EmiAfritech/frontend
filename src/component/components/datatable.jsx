import "../comstyles/component.css";
import { DepartmentData, MitigatedRiskData, MonitoredRiskData, ReviewRiskData, RiskData, UserData, MitigatedRiskReportData, RiskAdviceReportData } from "./modals";



export const usercolumns = [
  { field: "firstName", headerName: "First Name", flex: 1},
  { field: "lastName", headerName: "Last Name", flex: 1},
  { field: "phoneNumber", headerName: "Phone Number", flex: 1 },
  { field: "email", headerName: "Email", flex: 1},
  { field: "role", headerName: "Role", flex: 1},
  {
    field: "view",
    headerName: "Action",
    flex: 0.5,
    renderCell: (params) => UserData(params),
  },
 
];


export const riskreviewcolumn = [
  { field: "riskID", headerName: "Risk Code", flex: 1},
  { field: "riskName", headerName: "Risk Name", flex: 1},
  { field: "riskReview", headerName: "Risk Review", flex:  1 },
  {
    field: "NextRiskReviewDate",
    headerName: "Next Risk Review Date",
    flex: 1,
  },
  { field: "createdAt", headerName: "Date Reviewed", flex: 1},
  {
    field: "view",
    headerName: "Action",
    flex: 0.5,
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
  { field: "createdAt", headerName: "Date Reviewed", width: 150 },
];

export const riskmitigationcolumn = [
  { field: "riskID", headerName: "Risk Code", flex: 1 },
  { field: "riskName", headerName: "Risk Name", flex: 1},
  {
    field: "mitigatedRiskProbabilityLevel",
    headerName: "Mitigated Risk Probability Level",
    flex: 1,
  },
  {
    field: "mitigatedRiskImpactLevel",
    headerName: "Mitigated Risk Impact Level",
    flex: 1,
  },
  {
    field: "mitigatedRiskScore",
    headerName: "Mitigated Risk Score",
    flex: 1,
  },
  { field: "riskReviewer", headerName: "Risk Reviewer", flex: 1 },
  { field: "createdAt", headerName: "Date Mitigated", flex: 1 },
   {
    field: "view",
    headerName: "Action",
    flex: 0.5,
    renderCell: (params) => MitigatedRiskData(params),
  },
];

export const reportriskpyramidcolumn = [
{ field: "id", headerName: "ID", flex: 0.5 },
{ field: "riskID", headerName: "Risk Code", flex: 1},
{ field: "riskName", headerName: "Risk Name", flex: 1 },
{
  field: "riskDescription",
  headerName: "Risk Description",
  flex: 1,
},
{ field: "riskScore", headerName: "Risk Score", flex: 1 },
{
  field: "view",
  headerName: "Action",
  flex: 0.5,
  renderCell: (params) => RiskAdviceReportData(params),
},
  
];
export const reportriskmitigationcolumn = [
{ field: "id", headerName: "ID", flex: 0.5 },
{ field: "riskID", headerName: "Risk Code", flex: 1},
{ field: "riskName", headerName: "Risk Name", flex: 2},
{
  field: "mitigatedRiskScore",
  headerName: "Mitigated Risk Score",
  flex: 1,
},
  
 { field: "riskReviewer", headerName: "Risk Reviewer",  flex: 1 },
{ field: "createdAt", headerName: "Date Mitigated",  flex: 1 },
];


export const reportopenrisktoreviewcolumn = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "riskCode", headerName: "Risk Code", flex: 1},
  { field: "status", headerName: "Status", flex: 1 },
  { field: "Subject", headerName: "subject", flex: 1 },
  { field: "riskScore", headerName: "Inherent Risk ", flex: 1 },
  { field: "daysOpen", headerName: "Days Open", flex: 1 },
  { field: "nextReviewDate", headerName: "Next Review Date", flex: 1 },
];



export const riskstatuscolumn = [
  { field: "riskCode", headerName: "Risk Code", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "Subject", headerName: "subject", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  { field: "riskScore", headerName: "Inherent Risk ", flex: 1 },
  { field: "daysOpen", headerName: "Days Open", flex: 1 },

  { field: "createdOn", headerName: "Submitted On", flex: 1},
];

export const reportaudittrailcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "action", headerName: "Action", width: 500 },
  { field: "createdAt", headerName: "Created At", width: 200 },
];

export const deptcolumn = [
  { field: "deptID", headerName: "Dapartment Code", flex: 1},
  { field: "name", headerName: "Department Name", flex: 1 },
  { field: "manager", headerName: "Department Manager", flex: 1 },
  { field: "location", headerName: "Location", flex: 1},
  { field: "createdAt", headerName: "Created At", flex: 1},
  {
    field: "view",
    headerName: "Action",
    flex: 0.5,
    renderCell: (params) => DepartmentData(params),
  },
];

export const riskmonitoringcolumn = [
  {
    field: "riskID",
    headerName: "Risk Code",
    flex: 1,
  },
  {
    field: "riskName",
    headerName: "Risk Name",
    flex: 1,
  },
  {
    field: "riskResponseImplementation",
    headerName: "Risk Implementation",
    flex: 1,
  },
  {
    field: "riskResponseActivitiyStatus",
    headerName: "Risk Activity Status",
    flex: 1,
  },
  {
    field: "recommendedChanges",
    headerName: "Recommended Changes",
    flex: 1,
  },
  { field: "challenges", headerName: "Challenges", flex: 1 },
  { field: "comments", headerName: "Comments", flex: 1 },
  { field: "mitigationOwner", headerName: "Mitigation Owner", flex: 1 },
  { field: "createdAt", headerName: "Date Monitored", flex: 1 },
  {
    field: "view",
    headerName: "Action",
    flex: 0.5,
    renderCell: (params) => MonitoredRiskData(params),
  },
];
export const riskappetitereportgreatercolumn = [
  { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "riskID",
    headerName: "Risk Code",
    flex: 1,
  },
  {
    field: "riskName",
    headerName: "Subject",
    flex: 1,
  },
  {
    field: "riskScore",
    headerName: "Risk score",
    flex: 1,
  },
  {
    field: "mitigatedRiskScore",
    headerName: "Mitigated Risk Score",
    flex: 1,
  },
];

export const riskappetitereportlowercolumn = [
  { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "riskID",
    headerName: "Risk Code",
    flex: 1,
  },
  {
    field: "riskName",
    headerName: "Subject",
    flex: 1,
  },
  {
    field: "riskScore",
    headerName: "Risk score",
    flex: 1,
  },
  {
    field: "mitigatedRiskScore",
    headerName: "Mitigated Risk Score",
    flex: 1,
  },
];

export const riskviewcolumn = [
  { field: "riskID", headerName: "Risk Code", felx: 1 },
  { field: "riskName", headerName: "Risk Name", felx: 2 },
  { field: "riskDescription", headerName: "Risk Description", flex: 2 },
  { field: "riskCategory", headerName: "Risk Category", flex: 1},
  { field: "riskStatus", headerName: "Risk Status", flex: 1},
  { field: "riskScore", headerName: "Risk Score", flex: 1},
  {
    field: "view",
    headerName: "Action",
    flex: 0.5,
    renderCell: (params) => RiskData(params),
  },
];
