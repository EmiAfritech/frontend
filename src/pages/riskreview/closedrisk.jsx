import { ViewClosedRisk } from "../../component/components/info";
import { Sidebar } from "../../component/components/sidebar";
import { ClosedRiskTab} from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function ClosedRisk() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className="mt-3 flex mx-auto">
        <ClosedRiskTab/>
      </div>
    </div>
  );
}
