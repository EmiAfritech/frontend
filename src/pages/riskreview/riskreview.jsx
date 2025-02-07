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
    <div className="flex flex-col">
      <Sidebar />
      <div className="ml-[18%] p-6 m-6 card bg-white rounded-lg">
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
