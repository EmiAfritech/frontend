import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  RiskAppetiteReportGreater,
  RiskAppetiteReportLower,
} from "../../component/components/tables";

export function ReportRiskAppetite() {
  return (
    <div className="pt-7">
      <Tabs>
        <TabList>
          <Tab>
            <h1>Appetite {">"} 4</h1>
          </Tab>
          <Tab>
            <h1>Appetite {"<"} 4</h1>
          </Tab>
        </TabList>

        <TabPanel>
          <RiskAppetiteReportGreater />
        </TabPanel>
        <TabPanel>
          <RiskAppetiteReportLower />
        </TabPanel>
      </Tabs>
    </div>
  );
}
