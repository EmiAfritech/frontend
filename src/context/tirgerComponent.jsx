import { ModaltriggerProvider } from "./AuthProvider";
import { RiskViewTable } from "../component/components/tables";

export function ModaltrigerMain(){
    return(
        <ModaltriggerProvider>
            <RiskViewTable/>
        </ModaltriggerProvider>
    )
}
