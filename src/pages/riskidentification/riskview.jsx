import { useContext } from "react";
import { Sidebar } from "../../component/components/sidebar";
import { ViewClosedRisk } from "../../component/components/info";
import { RiskViewTable } from "../../component/components/tables";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import "../../component/comstyles/component.css";

export function RiskView() {
  const {t}= useTranslation()
  const {auth} = useContext(AuthContext);
  return (
    <div className="flex flex-col">
      <Sidebar />
      <div className=" ml-[18%] m-6 p-6 card bg-white rounded-lg">
        <div >
          {auth.role === "ADMIN" || auth.role=== "GENERALMANAGER" || auth.role=== "MANAGER"? (
            <>
              <ViewClosedRisk />
            </>
          ) : (
            <p>{t("contentPermission")}</p>
          )}
          <RiskViewTable />
        </div>
      </div>
    </div>
  );
}
