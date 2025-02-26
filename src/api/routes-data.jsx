"use client";
import { useContext, useEffect, useState } from "react";
import {
  DEPARTMENT_URL,
  DEPARTMENTDROPDOWN_URL,
  OPENVSCLOSECHART_URL,
  OWNERSDROPDOWN_URL,
  RISKIDSMITIGATION_URL,
  RISKIDSMONITORING_URL,
  RISKMITIGATION_URL,
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
  RISKSTOBEMITIGATEDINFO_URL
} from "./routes";
import axios from "./axios";
import { AuthContext, Modaltrigger } from "../context/AuthContext";
import { ConstantLine } from "devextreme-react/chart";

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
  const {trigger} = useContext(Modaltrigger)
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
    if (trigger){
      fetchData();
    }
  }, []);
  return { riskTable, fetchData };
}

export function useRiskIDMitigation({ departmentID }) {
  const { auth } = useContext(AuthContext);
  const [riskIDs, setRiskIDs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKIDSMITIGATION_URL,
        JSON.stringify({ departmentID }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      setRiskIDs(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskIDs };
}

export function useRiskIDReview({ departmentID }) {
  const { auth } = useContext(AuthContext);
  const [riskReviewIDs, setRiskReviewIDs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKIDSREVIEW_URL,
        JSON.stringify({ departmentID }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );

      setRiskReviewIDs(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []);
  return { riskReviewIDs };
}

export function useRiskIDMonitoring({ departmentID }) {
  const { auth } = useContext(AuthContext);
  const [monitoringIDs, setMonitoringIDs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        RISKIDSMONITORING_URL,
        JSON.stringify({ departmentID }),
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
    fetchData(); 
  }, []);
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
      const response = await axios.get(RISKMITIGATION_URL, {
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
  return { frameworkdropdown, fetchData };
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
  return { monitoredVrunmonitoredPieData, fetchData };
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
  return { mitigatedVrunmitigatedPieData, fetchData };
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
  return { reviewedVrunrevieweddPieData, fetchData };
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
  return { riskLineChart, fetchData };
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

  console.log({ "years data": riskLineYearChart });

  return { riskLineYearChart, fetchData };
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
    if (departmentName) {
      fetchData();
    }
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
  console.log({"ownersr id": deptId})

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

export function useRiskToBeMitigatedInfo(riskToBeMitigated) {
  const { auth } = useContext(AuthContext);
  const [riskToBeMitigatedInfo, setRiskTOBeMitigatedInfo] = useState([]);
  const id = riskToBeMitigated;
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


export function useDelete(id, riskID, deptId) {
  const { auth } = useContext(AuthContext);
  const [riskDelete, setRiskDelete] = useState("");

  const fetchData = async () => {
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
      setRiskDelete(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return { riskDelete, fetchData };
}

