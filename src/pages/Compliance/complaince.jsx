import React from "react";
import { Sidebar } from "../../component/components/sidebar";
import { ComplianceTab } from "../../component/components/tables";

export function Compliance() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="ml-[18%] m-6 p-6 card bg-white rounded-lg">
        <ComplianceTab />
      </div>
    </div>
  );
}
