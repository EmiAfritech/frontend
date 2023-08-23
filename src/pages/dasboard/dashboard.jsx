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
import { useState } from "react";
import { Login } from "../login/login";

export function Dashboard() {
  const [token, setToken] = useState();
  if (!token) {
    {
      return <Login setToken={setToken} />;
    }
  }
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
