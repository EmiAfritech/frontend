import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sessions_URL } from "./routes";
import axios from "./axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";

export function Sessions() {
  const { clearAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");

  const notifyUnauthorized = () => {
    toast.error("Unauthorized User!", {
      onClose: () => {
        navigate("/", { replace: true });
        clearAuth();
        Cookies.remove("token");
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
    const exemptPaths = [
      "/activate",
      "/signup",
      "/setPassword",
      "/subscription",
      "/verifyemail",
      "/resetpassword",
      "/report",
    ];

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

        if (response.data.message === "Invalid") {
          notifyUnauthorized();
        }
      } catch (err) {
        // if (err.message.includes("Network Error")) {
        //   notifyNetwork();
        //   Cookies.remove("token")
        // } else {
        //   notifySystem();
        //   Cookies.remove("token")
        // }
        console.log(err);
      }
    };

    if (token && !exemptPaths.includes(location.pathname)) {
      validateSession();
    }
  }, [token, navigate, location.pathname, clearAuth]);

  return null;
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

export default LoadingPopup;
