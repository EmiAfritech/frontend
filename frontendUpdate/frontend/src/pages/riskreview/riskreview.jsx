import { useContext } from "react";
import { ViewClosedRisk } from "../../component/components/info";
import { Sidebar } from "../../component/components/sidebar";
import { RiskReview } from "../../component/components/tables";
import "../../component/comstyles/component.css";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";


export function Riskreview() {
  const {t} = useTranslation()
  const {auth} = useContext(AuthContext);
 
  return (
    <div className="flex bg-slate-100 flex-col h-lvh">
      <Sidebar />
      <div className="ml-[18%] m-6 h-screen">
        <div>
          {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
            <>
              <ViewClosedRisk />
              
            </>
          ) : (
            <p>{t("contentPermission")}</p>
          )}
          <RiskReview />
        </div>
      </div>
    </div>
  );
}
