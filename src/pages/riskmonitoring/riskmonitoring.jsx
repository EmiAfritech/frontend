import { Sidebar } from "../../component/components/sidebar";
import { RiskMonitor } from "../../component/components/tables";
import {
  MonitoredVsUnmonitored,
  RiskBarChart,
} from "../../component/components/charts";
import { ReviewInfo } from "../../component/components/info";
import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function RiskMonitoring() {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <div className=" ml-[18%] m-6 h-screen">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2"><RiskBarChart /></div>
            <div className="flex flex-col justify-center card">
              <Link to="#">
                <MonitoredVsUnmonitored />
              </Link>
              <ReviewInfo />
            </div>
          </div>
          <RiskMonitor />
        </div>
      </div>
    </div>
  );
}