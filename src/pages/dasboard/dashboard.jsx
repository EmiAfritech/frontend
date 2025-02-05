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
    <div className="flex flex-col">
      <Sidebar />
      <div className="ml-[18%] m-6 h-screen bg-sky-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
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
