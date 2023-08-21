import { Sidebar } from "../../component/components/sidebar";
import { RiskViewTable } from "../../component/components/tables";
import "../../component/comstyles/component.css";

export function RiskView() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className=" flex mx-auto mt-3">
        <RiskViewTable />
      </div>
    </div>
  );
}
