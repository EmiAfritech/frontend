import { Sidebar } from "../../component/components/sidebar";
import {
  OpenVsClose,
  ReviewedVsUnreviewed,
  MitigatedVsUnmitigated,
  RiskLineChart,
  ImpactLineChart,
  HighVsLow,
} from "../../component/components/charts";
import "../../component/comstyles/component.css";

export function Dashboard() {
  return (
    <div className="flex de-flex bg-slate-100 ">
      <Sidebar />
      <div className="m-10 flex de-flex m-30 ">
        <div className="flex flex-row">
          <div className="flex flex-col m-0">
            <div className="flex flex-row">
              <OpenVsClose />
              <ReviewedVsUnreviewed />
              <MitigatedVsUnmitigated />
              <HighVsLow />
            </div>
            <div className="flex flex-row">
              <RiskLineChart />
              <ImpactLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
