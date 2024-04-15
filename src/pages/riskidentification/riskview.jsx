import { Sidebar } from "../../component/components/sidebar";
import { ViewClosedRisk } from "../../component/components/info";
import { RiskViewTable } from "../../component/components/tables";
import "../../component/comstyles/component.css";

export function RiskView() {
  
  return (
    <div className="flex bg-slate-100 flex-col">
      <Sidebar />
      <div className=" ml-[18%] m-6 h-screen">
        <div >
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
