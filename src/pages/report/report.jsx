import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  
  return (
    <div className="flex flex-col bg-slate-100 h-lvh">
      <Sidebar/>
      <div>
        <div>
          <ReportSideTabs />
        </div>
        <div className=" mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
