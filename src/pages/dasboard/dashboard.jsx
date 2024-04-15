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
      <div className="m-6 mt-16 pl-[18%] ">
        <div className="grid grid-cols-4 gap-4">
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
