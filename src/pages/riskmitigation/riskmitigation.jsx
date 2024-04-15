import { Sidebar } from "../../component/components/sidebar";
import { RiskmitigationTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function RiskMitigation() {
  
  return (
    <div className="flex bg-slate-100 flex-col">
      <Sidebar/>
      <div className="ml-[18%] m-6 h-screen">
        <RiskmitigationTab />
      </div>
    </div>
  );
}
