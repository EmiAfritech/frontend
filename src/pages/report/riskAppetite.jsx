import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  RiskAppetiteReportGreater,
  RiskAppetiteReportLower,
} from "../../component/components/tables";
import { t } from "i18next";

export function ReportRiskAppetite() {
  return (
    <div className="m-6">
      <Tabs>
        <TabList>
          <Tab>
            <h1>{t("outSideAppetite")} {"(>4)"} </h1>
          </Tab>
          <Tab>
            <h1>{t("withinAppetite")} {"(<4)"}</h1>
          </Tab>
        </TabList>

        <TabPanel className="m-6 p-6 card bg-white rounded-lg">
          <RiskAppetiteReportGreater />
        </TabPanel>
        <TabPanel className="m-6 p-6 card bg-white rounded-lg">
          <RiskAppetiteReportLower />
        </TabPanel>
      </Tabs>
    </div>
  );
}
