import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  RiskAppetiteReportGreater,
  RiskAppetiteReportLower,
} from "../../component/components/tables";

export function ReportRiskAppetite() {
  return (
    <div className="m-6">
      <Tabs>
        <TabList>
          <Tab>
            <h1>Outside Appetite {"(>4)"} </h1>
          </Tab>
          <Tab>
            <h1>Within Appetite {"(<4)"}</h1>
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
