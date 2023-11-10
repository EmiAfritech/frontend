import "../comstyles/component.css";
import { DepartmentData, MitigatedRiskData, MonitoredRiskData, ReviewRiskData, RiskData, UserData } from "./modals";










export const usercolumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "dob", headerName: "Date of Birth", width: 180 },
  { field: "phoneNumber", headerName: "Phone Number", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "role", headerName: "Role", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "updatedAt", headerName: "Updated At", width: 150 },
  {
    field: "view",
    headerName: "View",
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
    headerName: "View",
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
  { field: "mitigationEffort", headerName: "Mitigation Effort", width: 150 },
  { field: "mitigationCost", headerName: "Mitigation Cost", width: 150 },
  { field: "mitigationControl", headerName: "Mitigation Control", width: 150 },
  { field: "mitigationOwner", headerName: "Mitigation Owner", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
   {
    field: "view",
    headerName: "View",
    width: 50,
    renderCell: (params) => MitigatedRiskData(params),
  },
];

export const reportriskmitigationcolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 200,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 150,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
  {
    label: "Date",
    field: "Date",
    width: 100,
  },
  {
    label: "Risk Score",
    field: "RiskScore",
    width: 100,
  },
];

export const reportriskmitigationrow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
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
  { field: "organizationId", headerName: "Organization ID", width: 150 },
  { field: "name", headerName: "Department Name", width: 170 },
  { field: "manager", headerName: "Department Manager", width: 170 },
  { field: "location", headerName: "Location", width: 170 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "updatedAt", headerName: "Updated At", width: 150 },
  {
    field: "view",
    headerName: "View",
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
    headerName: "View",
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
  { field: "id", headerName: "ID", width: 70, color: "blue" },
  { field: "riskID", headerName: "Risk Code", width: 100 },
  { field: "riskName", headerName: "Risk Name", width: 150 },
  { field: "riskDescription", headerName: "Risk Description", width: 200 },
  { field: "riskCategory", headerName: "Risk Category", width: 180 },
  { field: "riskImpactLevel", headerName: "Risk Impact Level", width: 100 },
  { field: "riskScore", headerName: "Risk Score", width: 100 },
  { field: "riskOwner", headerName: "Risk Owner", width: 150 },
  {
    field: "view",
    headerName: "View",
    width: 50,
    renderCell: (params) => RiskData(params),
  },
];
