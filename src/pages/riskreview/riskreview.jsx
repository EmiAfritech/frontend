// import { ViewClosedRisk } from "../../component/components/info";
// import { Sidebar } from "../../component/components/sidebar";
// import { RiskReview } from "../../component/components/tables";
// import "../../component/comstyles/component.css";

// export function Riskreview() {
//   const currentTab = "Reviewed Risks";
//   return (
//     <div className="flex de-flex bg-slate-50">
//       <Sidebar currentTab={currentTab} />
//       <div className="mt-3 flex mx-auto pl-[18%]">
//         <div className="flex flex-col">
          // {localStorage.getItem("role") === "ADMIN" || localStorage.getItem("role") === "GENERALMANAGER" ? (
          //   <>
          //     <ViewClosedRisk />
              
          //   </>
          // ) : (
          //   <p>You do not have permission to view this content.</p>
          // )}
//           <RiskReview />
//         </div>
//       </div>
//     </div>
//   );
// }

import { ViewClosedRisk } from "../../component/components/info";
import { Sidebar } from "../../component/components/sidebar";
import { RiskReview } from "../../component/components/tables";
import "../../component/comstyles/component.css";
import {
  ReviewedVsUnreviewed,
  ReviewedVsUnreviewedBarchart,
} from "../../component/components/charts";
import { ReviewInfo } from "../../component/components/info";
import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function Riskreview() {
  const currentTab = "Reviewed Risks";
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar currentTab={currentTab} />
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
          <div className="flex flex-row m-0">
            <ReviewedVsUnreviewedBarchart />
            <div className="flex flex-col justify-center card">
              <Link to="/high-&-Low-Risk">
                <ReviewedVsUnreviewed/>
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
            <RiskReview/>
          </div>   
        </div>
      </div>
    </div>
  );
}

