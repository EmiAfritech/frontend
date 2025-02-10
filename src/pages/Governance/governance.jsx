import { Sidebar } from "../../component/components/sidebar";
import {
  OpenVsClose,
  ReviewedVsUnreviewed,
  MitigatedVsUnmitigated,
  RiskLineChart,
  MonitoredVsUnmonitored,
} from "../../component/components/charts";
import "../../component/comstyles/component.css";
import { DeleteBox , } from "../../component/components/widgets";
import { RiskDetails, UserAccountDetails } from "../../component/components/modals";

export function Governance() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="ml-[18%] m-6 ">
      <UserAccountDetails/>
      </div>
    </div>
  );
}
