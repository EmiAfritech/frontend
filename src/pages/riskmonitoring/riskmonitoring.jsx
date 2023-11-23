import { Sidebar } from "../../component/components/sidebar";
import { RiskMonitor } from "../../component/components/tables";





export function RiskMonitoring() {

 
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar/>
      <div className=" flex mx-auto mt-3 pl-[18%]">
        <div className="flex flex-col">
          
          <RiskMonitor />
        </div>
      </div>
    </div>
  );
}
