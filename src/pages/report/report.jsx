import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  
  return (
    <div className="flex flex-col bg-slate-100">
      <Sidebar/>
      <div className="flex flex-row pl-[16%] pt-12 mb-18 ">
        <div className="mx-auto mt-3">
          <ReportSideTabs />
        </div>
        <div className="flex h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
