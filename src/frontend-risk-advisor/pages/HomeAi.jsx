import { useRiskRecentActivity, useRiskScoreOverview } from "../../api/routes-data";
import { Sidebar } from "../../component/components/sidebar";
import { TopNavbar } from "../../component/components/topnavbar";
import { ChatInterface } from "../components/ChatInterface";
import { FaRobot } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom"


export function HomeAi() {

  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="ml-[18%] m-6 ">
        <div className="mb-4">
          <TopNavbar />
        </div>
        <div
          className="min-h-screen bg-gray-50 transition-colors"
          data-id="lh21tdiyw"
        >
          {/* Hero Section */}

          <div
            className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16"
            data-id="hdmd64bfg"
          >
            <div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              data-id="8s7d6ewmd"
            >
              <div className="text-center" data-id="odc4lyl62">
                <div
                  className="flex items-center justify-center space-x-3 mb-6"
                  data-id="yx4a1t4t5"
                >
                  <div
                    className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center"
                    data-id="3kxe47ccy"
                  >
                    <div className=" text-3xl" data-id="hzomnuhcf">
                      <FaRobot />
                    </div>
                  </div>
                  <div className="text-left" data-id="5hhyjh05x">
                    <h1 className="text-4xl font-bold" data-id="0vph7zsvc">
                      Risk Advisor AI
                    </h1>
                    <p className="text-xl text-blue-100" data-id="cf9k2pk1c">
                      Intelligent Risk Management Assistant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navbar Area */}
          <Navbar data-id="jtcgbd42r"  />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet /> 
          </div>
        </div>
      </div>
    </div>
  );
}
