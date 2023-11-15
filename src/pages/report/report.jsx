import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar />
      <div className="flex flex-row pl-[16%] pt-12">
        <div className="mx-auto mt-3">
          <ReportSideTabs />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
