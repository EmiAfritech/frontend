import {
  ReportRiskCategory,
  ReportRiskLevel,
  ReportRiskLocation,
  ReportRiskOwner,
  ReportRiskResponse,
  ReportRiskStatus,
} from "../../component/components/charts";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

export function ReportRiskDashboard() {
  const ref = useRef();
  return (
    <div>
      <div className=" m-3 flex flex-row-reverse">
        <ReactToPrint
          trigger={() => <button>Print </button>}
          content={() => ref.current}
        />
      </div>
      <div ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1">
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
