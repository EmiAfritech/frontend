import { Sidebar } from "../../component/components/sidebar";
import { RiskmitigationTab } from "../../component/components/tables";

import "../../component/comstyles/component.css";


export function RiskMitigation() {
  
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar/>
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
          
          <RiskmitigationTab/>
        </div>
      </div>
    </div>
  );
}
