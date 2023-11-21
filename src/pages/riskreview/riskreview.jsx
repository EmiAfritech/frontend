import { ViewClosedRisk } from "../../component/components/info";
import { Sidebar } from "../../component/components/sidebar";
import { RiskReview } from "../../component/components/tables";
import "../../component/comstyles/component.css";

export function Riskreview() {
  const currentTab = "Reviewed Risks";
  return (
    <div className="flex de-flex bg-slate-50">
      <Sidebar currentTab={currentTab} />
      <div className="mt-3 flex mx-auto pl-[18%]">
        <div className="flex flex-col">
          {localStorage.getItem("role") === "ADMIN" || localStorage.getItem("role") === "GENERALMANAGER" ? (
            <>
              <ViewClosedRisk />
              
            </>
          ) : (
            <p>You do not have permission to view this content.</p>
          )}
          <RiskReview />
        </div>
      </div>
    </div>
  );
}
