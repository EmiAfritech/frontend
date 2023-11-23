// import { ViewClosedRisk } from "../../component/components/info";
// import { Sidebar } from "../../component/components/sidebar";
// import { ClosedRiskTab } from "../../component/components/tables";
// import "../../component/comstyles/component.css";
// export function ClosedRisk() {
//   const currentTab = "Closed Risks";
//   return (
//     <div className="flex de-flex bg-slate-50">
//       <Sidebar currentTab={currentTab}/>
//       <div className="mt-3 flex mx-auto pl-[18%]">
//         <ClosedRiskTab />
//       </div>
//     </div>
//   );
// }

import { Sidebar } from "../../component/components/sidebar";
import { ClosedRiskTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
import {
  OpenVsClose,
  RiskBarchart,
} from "../../component/components/charts";
import { ReviewInfo } from "../../component/components/info";
import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function ClosedRisk() {
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
            
            <ClosedRiskTab/>
          </div>   
        </div>
      </div>
    </div>
  );
}
