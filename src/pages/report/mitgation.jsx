import { RiskMitigationReportTable } from "../../component/components/tables";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

export function ReportRiskMitigation() {
  const ref = useRef();
  return (
    <div>
      <div className=" m-3 flex flex-row-reverse">
        <ReactToPrint
          trigger={() => <button>Print </button>}
          content={() => ref.current}
        />
      </div>
      <div className="mt-3" ref={ref}>
        <RiskMitigationReportTable />
      </div>
    </div>
  );
}
