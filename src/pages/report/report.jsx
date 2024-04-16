import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  
  return (
    <div className="flex flex-col bg-slate-100">
      <Sidebar/>
      <div className="grid grid-cols-4 gap-2">
        <div className="mx-auto mt-3">
          <ReportSideTabs />
        </div>
        <div className="... col-span-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
