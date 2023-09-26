import { ReportImpactLineChart } from "../../component/components/charts";
import { ImpactReportAdvice } from "../../component/components/info";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { ReviewNeedingRisksReportTab } from "../../component/components/tables";

export function ReviewNeedingRisksReport() {
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
        <ReviewNeedingRisksReportTab />
      </div>
    </div>
  );
}
