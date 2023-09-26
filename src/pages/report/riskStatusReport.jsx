import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { RiskStatusReportTab } from "../../component/components/tables";

export function RiskStatusReport() {
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
        <RiskStatusReportTab />
      </div>
    </div>
  );
}
