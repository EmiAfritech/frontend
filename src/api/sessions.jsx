import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sessions_URL } from "./routes";
import axios from "./axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";



export function Sessions() {
  const { clearAuth, auth } = useContext(AuthContext);
  const [session, setSession] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = auth?.token;

  const notifyUnauthorized = () => {
    toast.error("Unauthorized User!", {
      onClose: () => {
        navigate("/", { replace: true });
        clearAuth();
      },
    });
  };

  const notifyNetwork = () => {
    toast.error("Server is Currently Unavailable, Please Try Again Later!");
  };

  const notifySystem = () => {
    toast.error("System Down, Contact Admin!", {
      onClose: () => {
        navigate("/", { replace: true });
        clearAuth();
      },
    });
  };

  useEffect(() => {
    const exemptPaths = [ "/activation", "/signup"]; 

    if (!token && !exemptPaths.includes(location.pathname)) {
      navigate("/", { replace: true });
      return;
    }

    const validateSession = async () => {
      try {
        if (!token) {
          throw new Error("No token provided");
        }

        const response = await axios.post(
          Sessions_URL,
          { token }, 
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        setSession(response.data.message);

        if (response.data.message === "Invalid") {
          notifyUnauthorized();
        }
      } catch (err) {
        if (err.message.includes("Network Error")) {
          notifyNetwork();
        } else {
          notifySystem();
        }
      }
    };

    if (token && !exemptPaths.includes(location.pathname)) {
      validateSession();
    }

  }, [token, navigate, location.pathname, clearAuth]);

  return  null; ;
}



const LoadingPopup = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false); 
      clearTimeout(delay);
    }, 2000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <Backdrop open={isLoading} style={{ zIndex: 9999, color: "#fff" }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingPopup;
