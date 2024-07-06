import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  
  return (
    <div className="flex bg-slate-100 flex-col h-lvh">
      <Sidebar/>
      <div className="ml-[18%] m-6">
        <ReportSideTabs />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
