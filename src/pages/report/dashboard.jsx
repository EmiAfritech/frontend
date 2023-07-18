import {
  ReportRiskCategory,
  ReportRiskLevel,
  ReportRiskLocation,
  ReportRiskOwner,
  ReportRiskScoring,
  ReportRiskSource,
  ReportRiskStatus,
  ReportRiskTechnology,
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
        <div className="flex flex-col">
          <div className="flex flex-row pb-3 pt-3">
            <ReportRiskLevel />
            <ReportRiskCategory />
            <ReportRiskLocation />
            <ReportRiskOwner />
          </div>
          <div className="flex flex-row pb-3 pt-3">
            <ReportRiskStatus />
            <ReportRiskSource />
            <ReportRiskScoring />
            <ReportRiskTechnology />
          </div>
        </div>
      </div>
    </div>
  );
}
