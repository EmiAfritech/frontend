import { Pyramidchat } from "../../component/components/charts";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { RiskReportAdvice } from "../../component/components/info";

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
      </div>
    </div>
  );
}
