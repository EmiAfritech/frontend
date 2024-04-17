import { Sidebar } from "../../component/components/sidebar";
import {
  OpenVsClose,
  ReviewedVsUnreviewed,
  MitigatedVsUnmitigated,
  RiskLineChart,
  MonitoredVsUnmonitored,
} from "../../component/components/charts";
import "../../component/comstyles/component.css";

export function Dashboard() {
  return (
    <div className="flex flex-col bg-slate-100">
      <Sidebar />
      <div className="ml-[18%] m-6 h-screen flex flex-wrap">
        <div className="grid grid-cols-4 gap-2">
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
