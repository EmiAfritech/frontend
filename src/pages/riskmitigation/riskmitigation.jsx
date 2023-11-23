// import { Sidebar } from "../../component/components/sidebar";
// import { RiskmitigationTab } from "../../component/components/tables";
// import "../../component/comstyles/component.css";
// export function RiskMitigation() {
//   const currentTab = "Mitigated Risks";
//   return (
//     <div className="flex de-flex bg-slate-50 h-screen">
//       <Sidebar currentTab={currentTab} />
//       <div className="mt-3 flex mx-auto pl-[18%]">
//         <RiskmitigationTab />
//       </div>
//     </div>
//   );
// }

import { Sidebar } from "../../component/components/sidebar";
import { RiskmitigationTab } from "../../component/components/tables";
import {
  MitigatedVsUnmitigated,
  MitigatedVsUnmitigatedBarchart,
} from "../../component/components/charts";
import { ReviewInfo } from "../../component/components/info";
import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function RiskMitigation() {
  const currentTab = "Mitigated Risks";
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar currentTab={currentTab} />
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
          <div className="flex flex-row m-0">
            <MitigatedVsUnmitigatedBarchart />
            <div className="flex flex-col justify-center card">
              <Link to="/high-&-Low-Risk">
                <MitigatedVsUnmitigated/>
              </Link>
              <ReviewInfo />
            </div>
          </div>
          <RiskmitigationTab/>
        </div>
      </div>
    </div>
  );
}
