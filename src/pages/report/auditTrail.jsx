import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { Reportaudittrail } from "../../component/components/tables";

export function ReportAuditTrail() {
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
        <Reportaudittrail />
      </div>
    </div>
  );
}
