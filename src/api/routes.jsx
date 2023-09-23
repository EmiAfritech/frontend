/*************************************************Organization******************************************************/

//login url
export const LOGIN_URL = "/login";

//logout
export const LOGOUT_URL = "/logout"


/*************************************************Organization tables******************************************************/

//users list url
export const USERS_URL = "/users";

//department url
export const DEPARTMENT_URL = "/departments";

//risk url
export const VIEWALLRISKS_URL = "/risks";

//risk review url
export const RISKREVIEW_URL ="/risks/reviews"


//report audit trail url
export const REPORTAUDITTRAIL_URL ="/getAudits"


/*************************************************Organization forms******************************************************/

//create users url
export const USERSCREATEFORM_URL = "/users/create";

//create department url
export const DEPARTMENTCREATEFORM_URL = "/departments";

// risk form
export const CREATERISKFORM_URL ="/departments/risk/create";

// mitigation form
export const MITIGATERISKFORM_URL ="/departments/risk/riskmitigation/create";

// risk review form
export const REVIEWRISKFORM_URL ="/departments/risk/riskreview/create";

// monitoring form
export const MONITORINGRISKFORM_URL ="/departments/risk/riskreview/create";

/*************************************************Organization chat ******************************************************/

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

//risk status report chart data
export const RISKSTATUSREPORTCHART_URL ="risks/getRiskStatusChartData"

//risk status report chart data
export const RISKCATEGORYREPORTCHART_URL ="risks/getRiskCategoryChartData"

//openvsclose bar chart data
export const OPENVSCLOSEBARCHART_URL ="/getOpenedVsClosedGraphData"


//risk monitoring bar chat chart data
export const RISKMONITORING_URL ="/risks/monitorings"


//risk mitigations bar chat chart data
export const RISKMITIGATION_URL ="/risks/mitigations"


//risk report advice pyramid
export const RISKREPORTADVICE_URL ="/risks/getRiskLevelChartData"

//risk response report chat
export const RISKRESPONSEREPORT_URL ="/getRiskResponseChartData"

//risk location report chat
export const RISKLOCATIONREPORT_URL ="/getLocationChartData"


//risk owner report chat
export const RISKOWNERREPORT_URL ="/getRiskOwnerChartData"




/*************************************************Department ******************************************************/

//risk monitoring url
export const MONITORINGRISK_URL =
  "/departments/{departmentId}/risks/{riskId}/riskmonitorings";

//risk mitigation url
export const MITIGATIONRISK_URL =
  "/departments/{departmentId}/risks/{riskId}/riskmitigation";


  