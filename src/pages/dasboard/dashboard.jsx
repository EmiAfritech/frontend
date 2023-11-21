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
  const currentTab = "Overview";
  return (
    <div className="flex de-flex bg-slate-50">
      <Sidebar currentTab={currentTab} />
      <div className="m-6 mt-16 flex de-flex mx-auto pl-[18%] ">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <OpenVsClose />
              <ReviewedVsUnreviewed />
              <MitigatedVsUnmitigated />
              <MonitoredVsUnmonitored />
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
