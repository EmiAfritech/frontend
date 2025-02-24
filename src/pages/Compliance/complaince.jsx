import { Sidebar } from "../../component/components/sidebar";
import "../../component/comstyles/component.css";
import { ComplianceTab } from "../../component/components/tables";

export function Compliance() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="ml-[18%] m-6 ">
        <ComplianceTab/>
      </div>
    </div>
  );
}
