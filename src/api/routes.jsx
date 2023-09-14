//users list url
export const USERS_URL = "/users";

//login url
export const LOGIN_URL = "/login";

//department url
export const DEPARTMENT_URL = "/departments";

//risk url
export const VIEWALLRISKS_URL = "/risks";

//risk monitoring url
export const MONITORINGRISK_URL =
  "/departments/{departmentId}/risks/{riskId}/riskmonitorings";

//risk mitigation url
export const MITIGATIONRISK_URL =
  "/departments/{departmentId}/risks/{riskId}/riskmitigation";

//unreviewedVsreviewed risk chat url
export const REVIEWEDVSUNREVIEWEDCHART_URL = "risks/reviewed-vs-unreviewed";

//mitigatedvsunmitigated risk chat url
export const MITIGATEDVSUNMITIGATEDCHAT_URL = "risks/mitigated-vs-unmitigated";

//unreviewed risk chat url
export const OPENVSCLOSECHART_URL = "risks/opened-vs-closed";
