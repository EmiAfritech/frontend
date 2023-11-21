import { Sidebar } from "../../component/components/sidebar";
import { RiskmitigationTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function RiskMitigation() {
  const currentTab = "Mitigated Risks";
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar currentTab={currentTab} />
      <div className="mt-3 flex mx-auto pl-[18%]">
        <RiskmitigationTab />
      </div>
    </div>
  );
}
