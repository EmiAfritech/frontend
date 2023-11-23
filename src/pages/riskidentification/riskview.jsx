import { Sidebar } from "../../component/components/sidebar";
import { RiskViewTable } from "../../component/components/tables";
import "../../component/comstyles/component.css";

import "../../component/comstyles/component.css";


export function RiskView() {
  
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar/>
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
          <div>
          <RiskViewTable />
          </div>   
        </div>
      </div>
    </div>
  );
}
