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
    <div className="flex de-flex bg-white ">
      <Sidebar />
      <div className="m-6 flex de-flex mx-auto ">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <OpenVsClose />
              <ReviewedVsUnreviewed />
              <MitigatedVsUnmitigated />
              <MonitoredVsUnmonitored/>
            </div>
            <div className="flex flex-row">
              <RiskLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
