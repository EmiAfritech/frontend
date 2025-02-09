import { Sidebar } from "../../component/components/sidebar";
import {
  OpenVsClose,
  ReviewedVsUnreviewed,
  MitigatedVsUnmitigated,
  RiskLineChart,
  MonitoredVsUnmonitored,
} from "../../component/components/charts";
import "../../component/comstyles/component.css";
import { DeleteBox , CustomSelectInitialize} from "../../component/components/widgets";
import { UserAccountDetails } from "../../component/components/modals";

export function Governance() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="ml-[18%] m-6 ">
      <UserAccountDetails/>
      <CustomSelectInitialize/>
      </div>
    </div>
  );
}
