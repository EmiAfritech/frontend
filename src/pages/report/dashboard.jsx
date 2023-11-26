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
        <div className="flex flex-col h-screen">
          <div className="flex flex-row pt-2">
            <ReportRiskLevel />
            <ReportRiskCategory />
            <ReportRiskLocation />
          </div>
          <div className="flex flex-row pt-2">
            <ReportRiskStatus />
            <ReportRiskResponse />
            <ReportRiskOwner />
          </div>
        </div>
      </div>
    </div>
  );
}
