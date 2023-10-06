import { ViewClosedRisk } from "../../component/components/info";
import { Sidebar } from "../../component/components/sidebar";
import { RiskReview } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function Riskreview() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className="mt-3 flex mx-auto pl-[18%]">
        <div className="flex flex-col">
        <RiskReview />
        <ViewClosedRisk/>
        </div>
      </div>
    </div>
  );
}
