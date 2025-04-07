import { Button } from "devextreme-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ReviewInfo() {
  const {t} = useTranslation();
  return (
    <p>
      {" "}
      {t("reviewInfo1")} <br />{t("reviewInfo2")} 
    </p>
  );
}
export function RiskReportAdvice() {
  const {t} = useTranslation();
  return (
    <p className="m-5">
      {t("riskAdvice1")}<br />{t("riskAdvice2")}
      <br />
      <br />
      <a href="" className="text-[#ce4a01] font-bold">
        1. {t("advice1")}
        <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        2. {t("advice2")} <br />
      </a>
    </p>
  );
}

export function ImpactReportAdvice() {
  return (
    <p className="m-5">
      <h2 className="pb-2 font-medium">IMPACT REPORT</h2>
      Based on the various parameters placed into consideration the full
      aspects  <br />
      
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
      of high concern and needs immediate attent
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
  const {t} = useTranslation();
  return(
    <p className="pt-4">
      {t("viewClosedRisks")} <Link to="/closed-risks" className="text-blue-500 font-bold">{t("link")}</Link>
    </p>
  )
}