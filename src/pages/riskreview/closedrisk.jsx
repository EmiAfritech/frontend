
import { Sidebar } from "../../component/components/sidebar";
import { ClosedRiskTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function ClosedRisk() {
  return (
    <div className="flex de-flex bg-slate-50">
      <Sidebar />
      <div className="mt-3 flex mx-auto pl-[18%]">
        <ClosedRiskTab />
      </div>
    </div>
  );
}

