import { Sidebar } from "../../component/components/sidebar";
import "../../component/comstyles/component.css";
import { GovernanceRendering } from "./GNavigation";
export function Governance() {
  
  return (
    <div className="flex flex-col">
      <Sidebar/>
      <div className="ml-[18%] p-6 m-6 card bg-white rounded-lg">
        <GovernanceRendering/>
      </div>
    </div>
  );
}
