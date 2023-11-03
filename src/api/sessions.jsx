// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Sessions_URL } from "./routes";
// import axios from "./axios";
// import { useEffect } from "react";

// export function Sessions() {
//   const [session, setSession] = useState("");
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     axios
//       .post(Sessions_URL, JSON.stringify({ token }), {
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => {
//         setSession(data.data.message);
//         console.log(session);
//         if (session === "valid") {
//           console.log("Authorized User");
//         } else {
//           // alert("Unauthorized User");
//           // navigate("/", { replace: true });
//           // localStorage.clear();
//         }
//       });
//   }, []);
// }

import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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
