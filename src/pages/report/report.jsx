import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/components/sidebar";
import { ReportSideTabs } from "./sidetabs";

export function Report() {
  
  return (
    <div className="flex flex-col">
      <Sidebar/>
      <div className="ml-[20%]">
        <ReportSideTabs />
      </div>
    </div>
  );
}
