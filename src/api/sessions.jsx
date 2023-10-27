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
