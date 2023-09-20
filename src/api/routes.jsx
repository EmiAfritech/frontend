/*************************************************Overall company******************************************************/

//login url
export const LOGIN_URL = "/login";


/*************************************************Overall company tables******************************************************/

//users list url
export const USERS_URL = "/users";

//create users url
export const USERSCREATE_URL = "/users/create";

//department url
export const DEPARTMENT_URL = "/departments";

//risk url
export const VIEWALLRISKS_URL = "/risks";

/*************************************************Overall company chat ******************************************************/

//get monitored vs unmonitored risks in the organization data
 export const MONITOREDVSUNMONITOREDRISKSCHART_URL ="/risks/monitored-vs-unmonitored";

//unreviewedVsreviewed risk chat url
export const REVIEWEDVSUNREVIEWEDCHART_URL = "/risks/reviewed-vs-unreviewed";

//mitigatedvsunmitigated risk chat url
export const MITIGATEDVSUNMITIGATEDCHAT_URL = "risks/mitigated-vs-unmitigated";

//unreviewed risk chat url
export const OPENVSCLOSECHART_URL = "/risks/opened-vs-closed";

//unreviewed risk chat per month dashboard url
export const RISKLINECHART_URL = "/risks/getRiskPerMonthChartData";

//risk level report chart data
export const RISKLEVELREPORTCHART_URL ="risks/getRiskLevelChartData"

//risk status report chart data
export const RISKSTATUSREPORTCHART_URL ="risks/getRiskStatusChartData"

//risk status report chart data
export const RISKCATEGORYREPORTCHART_URL ="/risks/getRiskCategoryChartData"

//openvsclose bar chart data
export const OPENVSCLOSEBARCHART_URL ="/getOpenedVsClosedGraphData"


//risk monitoring bar chat chart data
export const RISKMONITORING_URL ="/risks/monitorings"


//risk mitigations bar chat chart data
export const RISKMITIGATION_URL ="/risks/mitigations"

//risk mitigations bar chat chart data
export const RISKREVIEW_URL ="/risks/reviews"


/*************************************************Department ******************************************************/

//risk monitoring url
export const MONITORINGRISK_URL =
  "/departments/{departmentId}/risks/{riskId}/riskmonitorings";

//risk mitigation url
export const MITIGATIONRISK_URL =
  "/departments/{departmentId}/risks/{riskId}/riskmitigation";

// edit a risk in a department
export const CREATERISK_URL ="/departments/risks";
  