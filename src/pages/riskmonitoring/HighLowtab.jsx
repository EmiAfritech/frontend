import { Sidebar } from "../../component/components/sidebar";
import { HighLowRiskTable } from "../../component/components/tables";
import { HighLowRiskBarchart } from "../../component/components/charts";
import "../../component/comstyles/component.css";

export function HighLowRisk() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className=" flex mx-auto mt-10">
        <div className="flex flex-col">
          <div className="flex flex-row m-0">
            <HighLowRiskBarchart />
          </div>
          <HighLowRiskTable />
        </div>
      </div>
    </div>
  );
}
