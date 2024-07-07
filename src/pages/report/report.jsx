import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  
  return (
    <div className="flex bg-slate-100 flex-col h-lvh">
      <Sidebar/>
      <div className="ml-[20%] m-6">
        <ReportSideTabs />
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
