import { Sidebar } from "../../component/components/sidebar";
import { RiskmitigationTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function RiskMitigation() {
  
  return (
    <div className="flex flex-col">
      <Sidebar/>
      <div className="ml-[18%] m-6 card bg-white rounded-lg">
        <RiskmitigationTab />
      </div>
    </div>
  );
}
