import React from "react";
import { Sidebar } from "../../component/components/sidebar";;
import "../../component/comstyles/component.css";

export function Compliance() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="ml-[18%] m-6 ">
        Hi there i am compliance
      </div>
    </div>
  );
}
