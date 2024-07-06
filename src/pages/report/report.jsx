import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  
  return (
    <div className="flex flex-col bg-slate-100 h-lvh">
      <Sidebar/>
      <div className=" ml-[18%] m-6">
        <div>
          <ReportSideTabs />
        </div>
        <div >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
