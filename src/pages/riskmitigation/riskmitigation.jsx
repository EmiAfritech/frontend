import { Sidebar } from "../../component/components/sidebar";
import { RiskReview } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function RiskMitigation() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className="mt-3 flex mx-auto">
        <RiskReview />
      </div>
    </div>
  );
}
