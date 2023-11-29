import { Sidebar } from "../../component/components/sidebar";
import { ViewClosedRisk } from "../../component/components/info";
import { RiskViewTable } from "../../component/components/tables";
import "../../component/comstyles/component.css";

export function RiskView() {
  
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar />
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
          {localStorage.getItem("role") === "ADMIN" || localStorage.getItem("role") === "GENERALMANAGER" || localStorage.getItem("role") === "MANAGER"? (
            <>
              <ViewClosedRisk />
              
            </>
          ) : (
            <p>You do not have permission to view this content.</p>
          )}
          <RiskViewTable />
        </div>
      </div>
    </div>
  );
}
