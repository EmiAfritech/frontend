import {ReportDashboard} from "../../component/components/charts";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

export function ReportRiskDashboard() {
  const ref = useRef();
  
  return (
    <div className="p-2">
      <div className="m-3 flex justify-between items-center">
        <ReactToPrint
          trigger={() => <button>Print </button>}
          content={() => ref.current}
        />
      </div>
      <div ref={ref}>
        <ReportDashboard />
      </div>
    </div>
  );
}
