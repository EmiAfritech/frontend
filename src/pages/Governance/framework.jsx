import { Sidebar } from "../../component/components/sidebar";
import { GovernanceTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function Framework() {
  
  return (
    <div className="flex flex-col">
      <Sidebar/>
      <div className="ml-[18%] p-6 m-6 card bg-white rounded-lg">
        <GovernanceTab/>
      </div>
    </div>
  );
}
