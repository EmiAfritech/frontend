"use client";
import { useContext, useState } from "react";
import {
  DEPARTMENT_URL,
  DEPARTMENTDROPDOWN_URL,
  RISKIDSMITIGATION_URL,
  RISKIDSMONITORING_URL,
  RISKMITIGATION_URL,
  RISKMONITORING_URL,
  RISKREVIEWERSDROPDOWN_URL,
  USERS_URL,
  VIEWALLRISKS_URL,
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

export function useRiskStatusReport({ departmentID }) {
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
  const [ownersName, setOwnersName] = useState([]);
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
      setOwnersName(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []);
  return { ownersName };
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

