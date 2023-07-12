import { Sidebar } from "../../component/components/sidebar";
import { RiskMonitor } from "../../component/components/tables";
import { HighVsLow, RiskBarchart } from "../../component/components/charts";
import { ReviewInfo } from "../../component/components/info";
import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function RiskMonitoring() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className=" flex mx-auto mt-10">
        <div className="flex flex-col">
          <div className="flex flex-row m-0">
            <RiskBarchart />
            <div className="flex flex-col justify-center card">
              <Link to="/high-&-Low-Risk">
                <HighVsLow />
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
