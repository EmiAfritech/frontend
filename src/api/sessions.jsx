import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Sessions_URL } from "./routes";
import axios from "./axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";

// export function Sessions() {
//   const {clearAuth, auth} = useContext(AuthContext);
//   const [session, setSession] = useState("");
//   const navigate = useNavigate();
//   const token = auth?.token;
//   const notifyUnauthorized = () => {
//     toast.error("Unauthorized User!", {
//       onClose: () => {
//         navigate("/", { replace: true });
//         clearAuth();
//       },
//     });
//   };
//   const notifyNetwork = () => {
//     toast.error("Server is Currently Unavailable, Please Try Again Later!", {
//       onClose: () => {
//       },
//     });
//   };
//   const notifySystem = () => {
//     toast.error("System Down, Contact Admin!", {
//       onClose: () => {
//         navigate("/", { replace: true });
//         clearAuth();
//       },
//     });
//   };

//   if (auth?.token === "") {
//     navigate("/", { replace: true });
//   }
  
//   useEffect(() => {
//     try {
//       axios
//       .post(Sessions_URL, JSON.stringify({ token }), {
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => {
//         setSession(data.data.message);
//         if (session === "Invalid") {
//           notifyUnauthorized()
//         } 
        
//       })
//       .catch((err) => {
//         if (err.message.includes("Network Error")) {
//           notifyNetwork()
//         }    
//       });
//     } catch (error) {
//      if (error.message.includes("Network Error")) {
//       notifySystem()
//       } 
//     }
    
//   });
// }

export function Sessions  () {
  const { clearAuth, auth } = useContext(AuthContext);
  const [session, setSession] = useState("");
  const navigate = useNavigate();
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

  const notifyTimeOut = () => {
    toast.error("Timed Out, kindly", {
      onClose: () => {
        navigate("/", { replace: true });
        clearAuth();
      },
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
      return;
    }

    const validateSession = async () => {
      try {
        const response = await axios.post(Sessions_URL, JSON.stringify({ token }), {
          headers: { "Content-Type": "application/json" },
        });

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

    validateSession();
  }, [token, navigate, clearAuth]);

  return null; // Or any appropriate UI if needed
};



const LoadingPopup = () => {
  const [isLoading, setLoading] = useState(true);

  // Simulate data loading with a delay (replace this with your actual data fetching)
  useEffect(() => {
    // Simulated delay for loading indicator
    const delay = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (simulating loading completion)
      clearTimeout(delay);
    }, 2000);

    // Cleanup: Clear the delay timer if the component unmounts
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
