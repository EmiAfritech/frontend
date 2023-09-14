import {
  Pyramidchat,
  // ReportRiskLineChart,
} from "../../component/components/charts";
import { RiskReportAdvice } from "../../component/components/info";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

export function ReportRiskAdvice() {
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
        <Pyramidchat />
        <RiskReportAdvice />
      </div>
    </div>
  );
}
