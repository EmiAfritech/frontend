// import { Sidebar } from "../../component/components/sidebar";
// import { ViewClosedRisk } from "../../component/components/info";
// import { RiskViewTable } from "../../component/components/tables";
// import "../../component/comstyles/component.css";

// export function RiskView() {
//   const currentTab = "New Risk";
//   return (
//     <div className="flex de-flex bg-slate-50 h-screen">
//       <Sidebar currentTab={currentTab} />
//       <div className=" flex mx-auto mt-3 pl-[18%]">
//         <div className="flex flex-col">
          // {localStorage.getItem("role") === "ADMIN" || localStorage.getItem("role") === "GENERALMANAGER" ? (
          //   <>
          //     <ViewClosedRisk />
              
          //   </>
          // ) : (
          //   <p>You do not have permission to view this content.</p>
          // )}
          // <RiskViewTable />
//         </div>
//       </div>
//     </div>
//   );
// }

import { Sidebar } from "../../component/components/sidebar";
import { ViewClosedRisk } from "../../component/components/info";
import { RiskViewTable } from "../../component/components/tables";
import "../../component/comstyles/component.css";
import {
  OpenVsClose,
  RiskBarchart,
} from "../../component/components/charts";
import { ReviewInfo } from "../../component/components/info";
import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function RiskView() {
  const currentTab = "Closed Risks";
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar currentTab={currentTab} />
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
          <div className="flex flex-row m-0">
            <RiskBarchart />
            <div className="flex flex-col justify-center card">
              <Link to="/high-&-Low-Risk">
                <OpenVsClose/>
              </Link>
              <ReviewInfo />
            </div>
          </div>
          <div>
            {localStorage.getItem("role") === "ADMIN" || localStorage.getItem("role") === "GENERALMANAGER" ? (
            <>
              <ViewClosedRisk />
              
            </>
          ) : (
            <p>You do not have permission to view this content.</p>
          )}
          <RiskViewTable />
          </div>   
        </div>
      </div>
    </div>
  );
}
