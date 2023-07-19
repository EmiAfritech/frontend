import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className="flex flex-row">
        <div className="mx-auto mt-3">
          <ReportSideTabs />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
