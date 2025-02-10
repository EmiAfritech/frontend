import { useState } from "react";
import { Controle } from "./control";
import { Framework } from "./framework";
import { useTranslation } from "react-i18next";

export const Tabs = [
    {
      title: "Framework",
    },
    {
      title: "Controle",
    },
  ];

  export function GovernanceRendering() {
    const [activeTab, setActiveTab] = useState("Frame Work");
    
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    console.log(activeTab);
    const renderComponent = () => {
      switch (activeTab) {
        case "Frame Work":
          return <Framework/>;
        case "Controle":
          return <Controle />;
        default:
          return <Framework />;
      }
    };
    
  
    return (
      <div>
        <GovernanceNavigation onTabChange={handleTabChange} />
        <div>{renderComponent()}</div>
      </div>
    );
  }
  
  export function GovernanceNavigation({ onTabChange }) {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(Tabs[0].title);
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
      onTabChange(tab);
    };
  
    return (
      <div>
        {/* Tabs Navigation */}
        <div className="flex p-6 justify-center">
          <ul className="flex flex-row space-x-1 border-b border-gray-300">
            {Tabs.map((tab) => (
              <li key={tab.title}>
                <button
                  onClick={() => handleTabChange(tab.title)}
                  className={`text-md font-thin font-[Open_Sans] p-4 ${
                    activeTab === tab.title
                      ? "text-[#04026b] border-b-2 border-[#04026b]"
                      : "text-black"
                  }`}>
                  <span className=" transition duration-300 ease-out">
                    {t(tab.title)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }