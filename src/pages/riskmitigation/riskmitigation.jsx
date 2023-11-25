import { Sidebar } from "../../component/components/sidebar";
import { RiskmitigationTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function RiskMitigation() {
  
  return (
    <div className="flex de-flex bg-slate-100 h-screen">
      <Sidebar/>
      <div className="mt-3 flex mx-auto pl-[18%]">
        <RiskmitigationTab />
      </div>
    </div>
  );
}
