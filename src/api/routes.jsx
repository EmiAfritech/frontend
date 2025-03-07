/*************************************************General******************************************************/

//login url
export const LOGIN_URL = "/Auth/login";

//activation url
export const ACTIVATE_ACCOUNT = "/Account/Activate";

//login url
export const CREAT_PASSWORD = "/Organization/User/Password/set";

//signup
export const CREATE_ORGANIZATION = "/Organization/create"

//logout
export const LOGOUT_URL = "/Auth/logout";

//checkSessions
export const Sessions_URL = "/checkSessionStatus";

//Upload Csv
export const UploadCsv_URL = "/api/departments/risk/create-many-risks";

//verify password email
export const VerifyPasswordEmail = "/forgot-password-email";

//reset password
export const ResetPasswordUrl = "/Organization/User/Password/forgot-password-reset"

/*************************************************Tables******************************************************/

//users list url
export const USERS_URL = "/Organization/User/list";

//risk monitoring list
export const RISKMONITORING_URL = "/Organization/Risk/Monitoring/list";

//department url
export const DEPARTMENT_URL = "/Organization/Department/list";

//risk url
export const VIEWALLRISKS_URL = "/Organization/Risk/Open/list";

//risk url based on department selected
export const VIEWALLRISKSBASEDONDEPARTMENT_URL = "/getRisks";

//open-vs-closed based on department selected
export const OPENVSCLOSEBASEDONDEPARTMENT_URL = "/getOpenedVsClosedByDepartmentGraphData";

//open-vs-closed based on department selected chart
export const OPENVSCLOSEBASEDONDEPARTMENTCHART_URL = "/risks/getOpenedVsClosedByDepartment";

//closed risk url(la)
export const VIEWCLOSEDRISKS_URL = "/Organization/Risk/Closed/list";

//risk review url
export const RISKREVIEW_URL = "/Organization/Risk/Review/list";

//report audit trail url (ea)
export const REPORTAUDITTRAIL_URL = "/Auth/Audits/list";

// risk appetite report table Greater(la)
export const RISKAPPETITEREPORTGREATER_URL = "/Organization/Analytics/getRiskAppetiteGreater";

// risk appetite report table Lesser(la)
export const RISKAPPETITEREPORTLESSER_URL = "/Organization/Analytics/getRiskAppetiteLesser";

//risk needing review report table
export const RISKNEEDINGREVIEWREPORT_URL = "/Organization/Analytics/getAllOpenedRisksNeedingReview";

//mitigations by Date (ea)
export const MITIGATIONBYDATE_URL = "/Organization/Analytics/getMitigtionsByDate";

//risk status report table (ea)
export const RISKSTATUSREPORT_URL = "/Organization/Analytics/getAllOpenedRisksStatus";

//governance framework tbale
export const FRAMEWORK_URL = "/Governance/Framework/list";

//governance controle tbale
export const CONTROL_URL = "/Governance/Control/list";


/*************************************************Forms******************************************************/

//create users url
export const USERSCREATEFORM_URL = "/Organization/User/create";

//create department url
export const DEPARTMENTCREATEFORM_URL = "/Organization/Department/create";

// risk form
export const CREATERISKFORM_URL = "/Organization/Risk/create";

// mitigation form
export const MITIGATERISKFORM_URL = "/Organization/Risk/Mitigation/create";

// risk review form
export const REVIEWRISKFORM_URL = "/Organization/Risk/Review/create";

// monitoring form
export const MONITORINGRISKFORM_URL ="/Organization/Risk/Monitoring/create";

//governance framework form
export const FRAMEWORKFORM_URL = "/Governance/Framework/create"; 

//governance Control form
export const CONTROLFORM_URL = "/Governance/Control/create";

/************************************************ Chat ******************************************************/

//get monitored vs unmonitored risks in the organization data
export const MONITOREDVSUNMONITOREDRISKSCHART_URL = "/Organization/Analytics/monitored-vs-unmonitored";

//unreviewedVsreviewed risk chat url
export const REVIEWEDVSUNREVIEWEDCHART_URL = "/Organization/Analytics/reviewed-vs-unreviewed";

//mitigatedvsunmitigated risk chat url
export const MITIGATEDVSUNMITIGATEDCHAT_URL = "/Organization/Analytics/mitigated-vs-unmitigated";

//unreviewed risk chat url
export const OPENVSCLOSECHART_URL = "/Organization/Analytics/opened-vs-closed";

//unreviewed risk chat per month dashboard url
export const RISKLINECHART_URL = "/Organization/Analytics/getRiskPerMonthChartData";

//unreviewed risk chat per month dashboard url(la)
export const RISKYEARSCHART_URL = "/Organization/Risk/getRisksYears";

//risk status report chart data(la)
export const RISKSTATUSREPORTCHART_URL = "/Organization/Analytics/getRiskStatusChartData";

//risk status report chart data (la)
export const RISKCATEGORYREPORTCHART_URL = "/Organization/Analytics/getRiskCategoryChartData";

//openvsclose bar chart data
export const OPENVSCLOSEBARCHART_URL = "/Organization/Analytics/getOpenedVsClosedGraphData";



//risk mitigations bar chat chart data
export const RISKMITIGATION_URL = "/risks/mitigations";

// risk level pyramid chart(la)
export const RISKLEVELPYRAMIDCHART_URL = "/Organization/Analytics/getRiskPyramidChartData";

//risk response report chat(la)
export const RISKRESPONSEREPORT_URL = "/Organization/Analytics/getRiskResponseChartData";

//risk level report chat (la)
export const RISKLEVELREPORT_URL = "/Organization/Analytics/getRiskLevelChartData";

//risk location report chat (la)
export const RISKLOCATIONREPORT_URL = "/Organization/Analytics/getLocationChartData";

// risk category report chat
export const RISKCATEGORYREPORT_URL = "/risks/getRiskCategoryChartData";

//risk owner report chat(la)
export const RISKOWNERREPORT_URL = "/Organization/Analytics/getRiskOwnerChartData";

//monitored vs unmonitored bar  chat
export const MONITOREDVSUNMONITOREDBARCHARTDATA_URL = "/getMonitoredVsUnMonitoredGraphData";


/************************************************* Specific to Department ******************************************************/

//risk monitoring url
export const MONITORINGRISK_URL = "/departments/{departmentId}/risks/{riskId}/riskmonitorings";

//risk mitigation url
export const MITIGATIONRISK_URL ="/Organization/Risk/Mitigation/list";


/**********************************************dropdowns*********************************************************/
//riskIDS dropdown
export const RISKIDS_URL = "/risks/getAllOpenedRiskIDs";

//riskIDs for monitoring dropdown
export const RISKIDSMONITORING_URL = "/Organization/Risk/getAllOpenedRiskIDSToBeMonitored";

//riskIDs for mitigation dropdown
export const RISKIDSMITIGATION_URL = "/risks/getAllOpenedRiskIDSToBeMitigated";

//riskIDs for review dropdown
export const RISKNEEDEDTOBESREVIEW_URL = "/Organization/Risk/getAllOpenedRiskIDSToBeReviewed";

//department dropdown
export const DEPARTMENTDROPDOWN_URL = "/Organization/Department/listNamesAndDeptIds";

//department code dropdown
export const DEPARTMENTCODEDROPDOWN_URL = "/Organization/Department/listDepartmentIDs";

//user dropdown
export const OWNERSDROPDOWN_URL = "/Organization/User/getTheNamesOfUserAllUsers";

//manager dropdown
export const MANAGERSDROPDOWN_URL = "/getTheNamesOfAllManagers";

//risk reviewers dropdown
export const RISKREVIEWERSDROPDOWN_URL = "/Organization/User/getRiskReviewers";

//heat map dropdown
export const HEATMAP_URL = "/getHeatMapData";

//Frame Work
export const FRAMEWORKDROPDOWN = "/Governance/Control/frameworkDropdown"; 

//All risks to be mitigated
export const RISKSTOBEMITIGATED_URL = "/Organization/Risk/getAllOpenedRiskIDSToBeMitigated"; 

//All risks to be mitigated Info
export const RISKSTOBEMITIGATEDINFO_URL = "/Organization/Risk/getAllOpenedRiskDetailsToBeMitigatedDetails"; 
/*************************************************Delete and Edit************************************************/

// edit risk url 
export const EDITRISK_URL = "/Organization/Risk/update"

//delete risk url
export const DELETERISK_URL  = "/Organization/Risk/delete"

//edit review url
export const EDITREVIEW_URL = "/Organization/Risk/Review/update"

//edit mitigation url
export const EDITMITIGATION_URL = "/Organization/Risk/Mitigation/update"

//edit monitoring url
export const EDITMONITORING_URL = "/Organization/Risk/Monitoring/update"

//edit user url
export const EDITUSER_URL = "/Organization/User/update"

//delete user url
export const DELETEUSER_URL = "users/delete"

//edit department url
export const EDITDEPARTMENT_URL = "/Organization/Department/update"

//delete department url
export const DELETEDEPARTMENT_URL = "departments/delete"


