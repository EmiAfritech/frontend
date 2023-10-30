import { Sidebar } from "../../component/components/sidebar";
import { RiskViewTable } from "../../component/components/tables";
import "../../component/comstyles/component.css";

export function RiskView() {
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar />
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <RiskViewTable />
      </div>
    </div>
  );
}
