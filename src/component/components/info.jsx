export function ReviewInfo() {
  return (
    <p>
      {" "}
      to identify item details <br /> click on the charts
    </p>
  );
}
export function RiskReportAdvice() {
  return (
    <p className="m-5">
      <h2 className="pb-2 font-medium">RISK ADVISE</h2>
      Based on the various parameters placed into consideration its relevant the
      various factors are placed <br />
      into consideration in order of relevance
      <br />
      <br />
      <a href="" className="text-[#ce4a01] font-bold">
        1. Mitigations on Technologies
        <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        2. Review Risks on Travels <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        3. Avoid Long Travels <br />
      </a>
    </p>
  );
}

export function ImpactReportAdvice() {
  return (
    <p className="m-5">
      <h2 className="pb-2 font-medium">IMPACT REPORT</h2>
      Based on the various parameters placed into consideration the following
      aspects of impact were <br />
      of high concern
      <br />
      <a href="" className="text-[#ce4a01] font-bold">
        1. Technologies
        <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        2. Transportaion
        <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        3. Electrical <br />
      </a>
    </p>
  );
}
export function MitigatedReport() {
  return (
    <p className="m-5">
      <h2 className="pb-2 font-medium">MITIGATED REPORT</h2>
      Based on the various parameters placed into consideration the following
      aspects of Mitigations were <br />
      of high concern and needs immediate attention
      <br />
      <br />
      <a href="" className="text-[#ce4a01] font-bold">
        1. Technology Mitigation
        <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        2. Transportaion Mitigations
        <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        3. Electrical Mitigations <br />
      </a>
    </p>
  );
}

export function ViewClosedRisk(){
  return(
    <p className="pt-4">
      To view all closed risks kindly click on the <a href="/closed-risks" className="text-blue-500 font-bold">Link</a>
    </p>
  )
}