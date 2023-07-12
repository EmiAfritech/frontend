import { ReportMitiationBarchart } from "../../component/components/charts";
import { MitigatedReport } from "../../component/components/info";
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
      <div className="mt-12" ref={ref}>
        <ReportMitiationBarchart />
        <MitigatedReport />
      </div>
    </div>
  );
}
