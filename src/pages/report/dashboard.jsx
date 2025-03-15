import {
  ReportRiskCategory,
  ReportRiskLevel,
  ReportRiskLocation,
  ReportRiskOwner,
  ReportRiskResponse,
  ReportRiskStatus,
  ReportDashboard,
} from "../../component/components/charts";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

export function ReportRiskDashboard() {
  const ref = useRef();
  return (
    <div>
      <div className=" m-3 flex justify-between items-center">
        <ReportDashboard />
        <ReactToPrint
          trigger={() => <button>Print </button>}
          content={() => ref.current}
        />
      </div>
      <div ref={ref}>
        <div className="grid grid-cols-2  xl:grid-cols-3 xl:gap-0.5">
            <ReportRiskLevel />
            <ReportRiskCategory />
            <ReportRiskLocation />
            <ReportRiskStatus />
            <ReportRiskResponse />
            <ReportRiskOwner />
        </div>
      </div>
    </div>
  );
}
