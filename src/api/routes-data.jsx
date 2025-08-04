"use client";
import { useContext, useEffect, useState } from "react";
import {
  DEPARTMENT_URL,
  DEPARTMENTDROPDOWN_URL,
  OPENVSCLOSECHART_URL,
  OWNERSDROPDOWN_URL,
  RISKIDSMONITORING_URL,
  RISKMONITORING_URL,
  RISKREVIEWERSDROPDOWN_URL,
  USERS_URL,
  VIEWALLRISKS_URL,
  MONITOREDVSUNMONITOREDRISKSCHART_URL,
  MITIGATEDVSUNMITIGATEDCHAT_URL,
  REVIEWEDVSUNREVIEWEDCHART_URL,
  RISKLINECHART_URL,
  OPENVSCLOSEBARCHART_URL,
  RISKYEARSCHART_URL,
  RISKLEVELREPORT_URL,
  RISKSTATUSREPORTCHART_URL,
  RISKCATEGORYREPORTCHART_URL,
  RISKRESPONSEREPORT_URL,
  RISKLOCATIONREPORT_URL,
  RISKOWNERREPORT_URL,
  RISKLEVELPYRAMIDCHART_URL,
  RISKSTATUSREPORT_URL,
  RISKAPPETITEREPORTLESSER_URL,
  RISKAPPETITEREPORTGREATER_URL,
  MITIGATIONBYDATE_URL,
  RISKNEEDINGREVIEWREPORT_URL,
  REPORTAUDITTRAIL_URL,
  FRAMEWORK_URL,
  CONTROL_URL,
  FRAMEWORKDROPDOWN,
  RISKSTOBEMITIGATED_URL,
  RISKSTOBEMITIGATEDINFO_URL,
  MITIGATIONRISK_URL,
  RISKREVIEW_URL,
  RISKNEEDEDTOBESREVIEW_URL,
  DEPARTMENTCODEDROPDOWN_URL,
  COMPLIANCETABLE_URL,
  CONTROLITEMDROPDOWN,
  DELETERISK_URL,
  DELETERISKMITIGATION_URL,
  DELETERISKREVIEW_URL,
  DELETERISKMONITOR_URL,
  DELETEUSER_URL,
  RISKSCORECARD_URL,
  RISKSCOREOVERVIEW_URL,
  RISKRECENTACTIVITY_URL,
  RISKRECOMMENDATION_URL
} from "./routes";
import axios from "./axios";
import { AuthContext } from "../context/AuthContext";

export function useDepartmentDropdown() {
  const { auth } = useContext(AuthContext);
  const [departmentList, setDepartmentList] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setDepartmentList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return { departmentList };
}

export function useDepartmentCodeDropdown() {
  const { auth } = useContext(AuthContext);
  const [departmentCodeList, setDepartmentCodeList] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(DEPARTMENTCODEDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setDepartmentCodeList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return { departmentCodeList };
}

export function useDepartmentTable() {
  const { auth } = useContext(AuthContext);
  const [departmentTable, setDepartmentTable] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(DEPARTMENT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });

      setDepartmentTable(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return { departmentTable, fetchData };
}

export function useFrameWorkTable() {
  const { auth } = useContext(AuthContext);
  const [framework, setFramework] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(FRAMEWORK_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });

      setFramework(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return { framework, fetchData };
}

export function useControlTable() {
  const { auth } = useContext(AuthContext);
  const [control, setControl] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(CONTROL_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });

      setControl(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return { control, fetchData };
}

export function useEmployeeTable() {
  const { auth } = useContext(AuthContext);
  const [employeeTable, setEmployeeTable] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(USERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setEmployeeTable(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return { employeeTable, fetchData };
}

export function useRiskTable() {
  const { auth } = useContext(AuthContext);
  const [riskTable, setRiskTable] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(VIEWALLRISKS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setRiskTable(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskTable, fetchData };
}

export function useRiskReviewTable() {
  const { auth } = useContext(AuthContext);
  const [riskReviewTable, setRiskReviewTable] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(RISKREVIEW_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setRiskReviewTable(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskReviewTable, fetchData };
}




export function useRiskIDMonitoring(departmentID) {
  const { auth } = useContext(AuthContext);
  const [monitoringIDs, setMonitoringIDs] = useState([]);
  const deptId = departmentID
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKIDSMONITORING_URL,
        JSON.stringify({ deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      setMonitoringIDs(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (deptId) {
      fetchData();
    }
  }, [deptId]);

  return { monitoringIDs };
}

export function useRiskReviewer() {
  const { auth } = useContext(AuthContext);
  const [riskReviewerDropdown, setRiskReviewer] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(RISKREVIEWERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      }
    );
    setRiskReviewer(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskReviewerDropdown };
}

export function useMitigationTable() {
  const { auth } = useContext(AuthContext);
  const [mitigationTable, setMitigationTable] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(MITIGATIONRISK_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setMitigationTable(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { mitigationTable, fetchData };
}

export function useFrameWorkDropDown() {
  const { auth } = useContext(AuthContext);
  const [frameworkdropdown, setFramework] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(FRAMEWORKDROPDOWN, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setFramework(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { frameworkdropdown };
}

export function useControlItemDropDown(frameWorkSelect) {
  const { auth } = useContext(AuthContext);
  const [controleItemDropdown, setControleItemDropdown] = useState([]);
  const frameworkId =  frameWorkSelect;
  const fetchData = async () => {
    try {
      const response = await axios.post(CONTROLITEMDROPDOWN,
      JSON.stringify({ frameworkId }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });
      setControleItemDropdown(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(frameworkId){
      fetchData(); 
    }
  }, [frameworkId]);
  return { controleItemDropdown };
}

export function useMonitoringTable() {
  const { auth } = useContext(AuthContext);
  const [monitoringTable, setMonitoringTable] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(RISKMONITORING_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setMonitoringTable(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { monitoringTable, fetchData };
}

export function useComplianceTable() {
  const { auth } = useContext(AuthContext);
  const [complianceTable, setComplianceTable] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(COMPLIANCETABLE_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setComplianceTable(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { complianceTable, fetchData };
}

export function useOpenVrsClosedPieChart() {
  const { auth } = useContext(AuthContext);
  const [openVrsClosePieData, setOpenVrsClosePieData] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(OPENVSCLOSECHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setOpenVrsClosePieData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  
  return { openVrsClosePieData, fetchData };
}

export function useMonitoredVrsUnMonitoredPieChart() {
  const { auth } = useContext(AuthContext);
  const [monitoredVrunmonitoredPieData, setMonitoredVrunmonitoredPieData] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(MONITOREDVSUNMONITOREDRISKSCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setMonitoredVrunmonitoredPieData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { monitoredVrunmonitoredPieData };
}

export function useMitigatedVrsUnMitigatedPieChart() {
  const { auth } = useContext(AuthContext);
  const [mitigatedVrunmitigatedPieData, setMitigatedVrunmitigatedPieData] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(MITIGATEDVSUNMITIGATEDCHAT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setMitigatedVrunmitigatedPieData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { mitigatedVrunmitigatedPieData };
}

export function useReviewedVrsUnReviewedPieChart() {
  const { auth } = useContext(AuthContext);
  const [reviewedVrunrevieweddPieData, setReviewedVrunReviewedPieData] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(REVIEWEDVSUNREVIEWEDCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setReviewedVrunReviewedPieData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { reviewedVrunrevieweddPieData };
}


export function useRiskLineChartData(year) {
  const { auth } = useContext(AuthContext);
  const [riskLineChart, setRiskLineChart] = useState(""); 

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKLINECHART_URL,
        JSON.stringify({ year }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      setRiskLineChart(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (year) {
      fetchData();
    }
  }, [year]); 
  return { riskLineChart };
}

export function useRiskLineChartYearData() {  
  const { auth } = useContext(AuthContext);
  const [riskLineYearChart, setRiskLineYearChart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(RISKYEARSCHART_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setRiskLineYearChart(response.data);
    } catch (error) {
      console.error("Error fetching risk year chart data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
  return { riskLineYearChart };
}

export function useOpenVsCloseBarChartData(year) {
  const { auth } = useContext(AuthContext);
  const [openVrscloseChart, setOpenVrscloseChart] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        OPENVSCLOSEBARCHART_URL,
        JSON.stringify({ year }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setOpenVrscloseChart(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (year) {
      fetchData();
    }
  }, [year]); 
  return { openVrscloseChart, fetchData };
}

export function useRiskLevelReport(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskLevel, setRiskLevel] = useState("");
  console.log({RouteDepartmentName : departmentName});

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKLEVELREPORT_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskLevel(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      fetchData();
  }, [departmentName]); 
  return { riskLevel, fetchData };
}

export function useRiskStatusReportPieChart(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskStatus, setRiskStatus] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKSTATUSREPORTCHART_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskStatus, fetchData };
}

export function useRiskCategoryReport(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskCategory, setRiskCategory] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKCATEGORYREPORTCHART_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskCategory, fetchData };
}

export function useRiskResponseReport(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskResponse, setRiskResponse] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKRESPONSEREPORT_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskResponse, fetchData };
}

export function useRiskLocationReport(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskLocation, setRiskLocation] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKLOCATIONREPORT_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskLocation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskLocation, fetchData };
}

export function useRiskOwnerReport(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskOwner, setRiskOwner] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKOWNERREPORT_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskOwner(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskOwner, fetchData };
}

export function useRiskAdviceChart(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskAdviceChart, setRiskAdviceChart] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKLEVELPYRAMIDCHART_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskAdviceChart(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskAdviceChart, fetchData };
}

export function useRiskAppetiteReportLow() {
  const { auth } = useContext(AuthContext);
  const [riskAppetiteLow, setRiskAppetiteLow] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(RISKAPPETITEREPORTLESSER_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setRiskAppetiteLow(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskAppetiteLow, fetchData };
}

export function useRiskAppetiteReportHigh() {
  const { auth } = useContext(AuthContext);
  const [riskAppetiteHigh, setRiskAppetiteHigh] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(RISKAPPETITEREPORTGREATER_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });

      setRiskAppetiteHigh(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskAppetiteHigh, fetchData };
}

export function useMitigationByDate(departmentName) {
  const { auth } = useContext(AuthContext);
  const [mitigationByDate, setMitigationByDate] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        MITIGATIONBYDATE_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setMitigationByDate(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { mitigationByDate, fetchData };
}

export function useRiskNeedingToBeReviewed(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskToReview, setRiskToReview] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKNEEDINGREVIEWREPORT_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskToReview(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskToReview, fetchData };
}

export function useAuditTrail(departmentName) {
  const { auth } = useContext(AuthContext);
  const [auditTrail, setAuditTrail] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        REPORTAUDITTRAIL_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setAuditTrail(response.data.audits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { auditTrail, fetchData };
}

export function useRiskStatusReport(departmentName) {
  const { auth } = useContext(AuthContext);
  const [riskStatus, setRiskStatus] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKSTATUSREPORT_URL,
        JSON.stringify({ departmentName }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (departmentName) {
      fetchData();
    }
  }, [departmentName]); 
  return { riskStatus, fetchData };
}

export function useRiskOwnersDropdown(departmentName) {
  const { auth } = useContext(AuthContext);
  const [ownersList, setOwnersList] = useState([]);
  const deptId = departmentName;

  const fetchData = async () => {
    try {
      const response = await axios.post(
        OWNERSDROPDOWN_URL,
        JSON.stringify({ deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setOwnersList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (deptId) {
      fetchData();
    }
  }, [deptId]); 
  return { ownersList, fetchData };
}

export function useRiskToBeMitigated(departmentID) {
  const { auth } = useContext(AuthContext);
  const [riskToBeMitigated, setRiskTOBeMitigated] = useState([]);
  const deptId = departmentID;
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKSTOBEMITIGATED_URL,
        JSON.stringify({ deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskTOBeMitigated(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (deptId) {
      fetchData();
    }
  }, [deptId]); 
  return { riskToBeMitigated, fetchData };
}

export function useRisksNeededToBeReviewed(departmentID) {
  const { auth } = useContext(AuthContext);
  const [riskToBeReviewed, setRiskToBeReviewed] = useState([]);
  const deptId = departmentID
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKNEEDEDTOBESREVIEW_URL,
        JSON.stringify({ deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskToBeReviewed(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, [deptId]);
  return { riskToBeReviewed };
}

export function useRiskToBeMitigatedInfo(riskName) {
  const { auth } = useContext(AuthContext);
  const [riskToBeMitigatedInfo, setRiskTOBeMitigatedInfo] = useState([]);
  const id = riskName;
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKSTOBEMITIGATEDINFO_URL,JSON.stringify({ id }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskTOBeMitigatedInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]); 
  return { riskToBeMitigatedInfo, fetchData };
}

export function useRiskDelete() {
  const { auth } = useContext(AuthContext);

  const deleteRisk = async (id, riskID, deptId) => {

    try {
      const response = await axios.post(
        DELETERISK_URL,
        JSON.stringify({ id, riskID, deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      return response; 
    } catch (error) {
      console.error("Error deleting risk:", error);
      throw error; 
    }
  };

  return { deleteRisk }; 
}

export function useRiskMitigateDelete() {
  const { auth } = useContext(AuthContext);

  const deleteMitigationRisk = async (id, riskId, deptId) => {
    try {
      const response = await axios.post(
        DELETERISKMITIGATION_URL,
        JSON.stringify({ id, riskId, deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      return response; 
    } catch (error) {
      console.error("Error deleting risk:", error);
      throw error; 
    }
  };

  return { deleteMitigationRisk }; 
}

export function useRiskReviewDelete() {
  const { auth } = useContext(AuthContext);

  const deleteReviewRisk = async (id, riskId, deptId) => {

    try {
      const response = await axios.post(
        DELETERISKREVIEW_URL,
        JSON.stringify({ id, riskId, deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      return response; 
    } catch (error) {
      console.error("Error deleting risk:", error);
      throw error; 
    }
  };

  return { deleteReviewRisk }; 
}

export function useRiskMonitorDelete() {
  const { auth } = useContext(AuthContext);

  const deleteMonitorRisk = async (id, riskId, deptId) => {
    try {
      const response = await axios.post(
        DELETERISKMONITOR_URL,
        JSON.stringify({ id, riskId, deptId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      return response; 
    } catch (error) {
      console.error("Error deleting risk:", error);
      throw error; 
    }
  };

  return { deleteMonitorRisk }; 
}

export function useUserDelete() {
  const { auth } = useContext(AuthContext);

  const deleteUser = async (id, email) => {

    try {
      const response = await axios.post(
        DELETEUSER_URL,
        JSON.stringify({ id, email }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      return response; 
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error; 
    }
  };

  return { deleteUser }; 
}


/*************************************************Risk AI Routes************************************************/

export function useRiskScoreCard() {
  const { auth } = useContext(AuthContext);
  const [riskscorecard, setRiskscorecard] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(RISKSCORECARD_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setRiskscorecard(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskscorecard, fetchData };
}

export function useRiskScoreOverview() {
  const { auth } = useContext(AuthContext);
  const [riskScoreOverview, setRiskScoreOverview] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(RISKSCOREOVERVIEW_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      console.log(response);
      setRiskScoreOverview(response.data.data); 
    } catch (error) {
      console.error("Failed to fetch Risk Score Overview:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { riskScoreOverview, fetchData };
}

export function useRiskRecentActivity() {
  const { auth } = useContext(AuthContext);
  const [recentActivityList, setRecentActivityList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(RISKRECENTACTIVITY_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setRecentActivityList(response.data.data); 
    } catch (error) {
      console.error("Failed to fetch Risk Recent Activity:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { recentActivityList, fetchData };
}

export function useAIRecommendation(riskName) {
  const [recommendation, setRecommendation] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://robotechgh-risk-bot.hf.space/risk-recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(riskName),
      });
      console.log(response,response)
      setRecommendation(response.data);
    } catch (error) {
      console.error("Error fetching AI recommendation:", error);
      setRecommendation("Unable to fetch recommendation.");
    }
  };

  useEffect(() => {
    if (riskName) {
      fetchData();
    }
  }, [riskName]);

  return { recommendation, fetchData };
}