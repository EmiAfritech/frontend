import { Sidebar } from "../../component/components/sidebar";
import {
  OpenVsClose,
  ReviewedVsUnreviewed,
  MitigatedVsUnmitigated,
  RiskLineChart,
  MonitoredVsUnmonitored,
} from "../../component/components/charts";
import "../../component/comstyles/component.css";
import { TopNavbar } from "../../component/components/topnavbar";

export function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="ml-[18%] m-6 ">
        <div className="mb-4"><TopNavbar /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mb-24">
          <OpenVsClose />
          <ReviewedVsUnreviewed />
          <MitigatedVsUnmitigated />
          <MonitoredVsUnmonitored />
        </div>
        <div>
          <RiskLineChart />
        </div>
      </div>
    </div>
  );
}
