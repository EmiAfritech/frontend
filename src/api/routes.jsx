/*************************************************General******************************************************/

//login url
export const LOGIN_URL = "/login";
//skjfbksjfbskfsbf
//login url
export const CREATE_URL = "/organizations/create";

//logout
export const LOGOUT_URL = "/logout";

//checkSessions
export const Sessions_URL = "/checkSessionStatus";

//Upload Csv
export const UploadCsv_URL = "/api/departments/risk/create-many-risks";

/*************************************************Tables******************************************************/

//users list url
export const USERS_URL = "/users";

//department url
export const DEPARTMENT_URL = "/departments";

//risk url
export const VIEWALLRISKS_URL = "/risks";

//risk url based on department selected
export const VIEWALLRISKSBASEDONDEPARTMENT_URL = "/getRisks";

//open-vs-closed based on department selected
export const OPENVSCLOSEBASEDONDEPARTMENT_URL = "/getOpenedVsClosedByDepartmentGraphData";

//open-vs-closed based on department selected chart
export const OPENVSCLOSEBASEDONDEPARTMENTCHART_URL = "/risks/getOpenedVsClosedByDepartment";

//closed risk url
export const VIEWCLOSEDRISKS_URL = "/risks/getAllClosedRisks";

//risk review url
export const RISKREVIEW_URL = "/risks/reviews";

//report audit trail url
export const REPORTAUDITTRAIL_URL = "/getAudits";

// risk appetite report table Greater
export const RISKAPPETITEREPORTGREATER_URL = "/getRiskAppetiteGreater";

// risk appetite report table Lesser
export const RISKAPPETITEREPORTLESSER_URL = "/getRiskAppetiteLesser";

//risk needing review report table
export const RISKNEEDINGREVIEWREPORT_URL = "/getAllOpenedRisksNeedingReview";

//mitigations by Date
export const MITIGATIONBYDATE_URL = "/getMitigtionsByDate";

//risk status report table
export const RISKSTATUSREPORT_URL = "/getAllOpenedRisksStatus";

/*************************************************Forms******************************************************/

//create users url
export const USERSCREATEFORM_URL = "/users/create";

//create department url
export const DEPARTMENTCREATEFORM_URL = "/departments";

// risk form
export const CREATERISKFORM_URL = "/departments/risk/create";

// mitigation form
export const MITIGATERISKFORM_URL = "/departments/risk/riskmitigation/create";

// risk review form
export const REVIEWRISKFORM_URL = "/departments/risk/riskreview/create";

// monitoring form
export const MONITORINGRISKFORM_URL ="/departments/risk/riskmonitorings/create";

/************************************************ Chat ******************************************************/

//get monitored vs unmonitored risks in the organization data
export const MONITOREDVSUNMONITOREDRISKSCHART_URL = "/risks/monitored-vs-unmonitored";

//unreviewedVsreviewed risk chat url
export const REVIEWEDVSUNREVIEWEDCHART_URL = "/risks/reviewed-vs-unreviewed";

//mitigatedvsunmitigated risk chat url
export const MITIGATEDVSUNMITIGATEDCHAT_URL = "risks/mitigated-vs-unmitigated";

//unreviewed risk chat url
export const OPENVSCLOSECHART_URL = "/risks/opened-vs-closed";

//unreviewed risk chat per month dashboard url
export const RISKLINECHART_URL = "/risks/getRiskPerMonthChartData";

//unreviewed risk chat per month dashboard url
export const RISKYEARSCHART_URL = "/risks/getRisksYears";

//risk status report chart data
export const RISKSTATUSREPORTCHART_URL = "/risks/getRiskStatusChartData";

//risk status report chart data
export const RISKCATEGORYREPORTCHART_URL = "/risks/getRiskCategoryChartData";

//openvsclose bar chart data
export const OPENVSCLOSEBARCHART_URL = "/getOpenedVsClosedGraphData";

//risk monitoring bar chat chart data
export const RISKMONITORING_URL = "/risks/monitorings";

//risk mitigations bar chat chart data
export const RISKMITIGATION_URL = "/risks/mitigations";

// risk level pyramid chart
export const RISKLEVELPYRAMIDCHART_URL = "/getRiskPyramidChartData";

//risk response report chat
export const RISKRESPONSEREPORT_URL = "/getRiskResponseChartData";

//risk level report chat
export const RISKLEVELREPORT_URL = "/risks/getRiskLevelChartData";

//risk location report chat
export const RISKLOCATIONREPORT_URL = "/getLocationChartData";

// risk category report chat
export const RISKCATEGORYREPORT_URL = "/risks/getRiskCategoryChartData";

//risk owner report chat
export const RISKOWNERREPORT_URL = "/getRiskOwnerChartData";

//monitored vs unmonitored bar  chat
export const MONITOREDVSUNMONITOREDBARCHARTDATA_URL = "/getMonitoredVsUnMonitoredGraphData";


/************************************************* Specific to Department ******************************************************/

//risk monitoring url
export const MONITORINGRISK_URL = "/departments/{departmentId}/risks/{riskId}/riskmonitorings";

//risk mitigation url
export const MITIGATIONRISK_URL ="/departments/{departmentId}/risks/{riskId}/riskmitigation";


/**********************************************dropdowns*********************************************************/
//riskIDS dropdown
export const RISKIDS_URL = "/risks/getAllOpenedRiskIDs";

//riskIDs for monitoring dropdown
export const RISKIDSMONITORING_URL = "/risks/getAllOpenedRiskIDSToBeMonitored";

//riskIDs for mitigation dropdown
export const RISKIDSMITIGATION_URL = "/risks/getAllOpenedRiskIDSToBeMitigated";

//riskIDs for review dropdown
export const RISKIDSREVIEW_URL = "/risks/getAllOpenedRiskIDSToBeReviewed";

//department dropdown
export const DEPARTMENTDROPDOWN_URL = "/departments/namesOrDeptIds";

//user dropdown
export const OWNERSDROPDOWN_URL = "/getTheNamesOfUserAllUsers";

//manager dropdown
export const MANAGERSDROPDOWN_URL = "/getTheNamesOfAllManagers";

//risk reviewers dropdown
export const RISKREVIEWERSDROPDOWN_URL = "/getRiskReviewers";

//heat map dropdown
export const HEATMAP_URL = "/getHeatMapData";


/*************************************************Delete and Edit************************************************/

// edit risk url 
export const EDITRISK_URL = "/department/risk/edit"

//delete risk url
export const DELETERISK_URL  = "/departments/deleteRisk"

//edit review url
export const EDITREVIEW_URL = "/departments/risk/riskreview/edit"

//edit mitigation url
export const EDITMITIGATION_URL = "departments/risk/riskmitigation/edit"

//edit monitoring url
export const EDITMONITORING_URL = "departments/risk/riskmonitorings/edit"

//edit user url
export const EDITUSER_URL = "users/update"

//delete user url
export const DELETEUSER_URL = "users/delete"

//edit department url
export const EDITDEPARTMENT_URL = "departments/update"

//delete department url
export const DELETEDEPARTMENT_URL = "departments/delete"


