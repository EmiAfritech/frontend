import { useRiskRecentActivity, useRiskScoreOverview } from "../../api/routes-data";
import { Sidebar } from "../../component/components/sidebar";
import { TopNavbar } from "../../component/components/topnavbar";
import { ChatInterface } from "../components/ChatInterface";
import { FaRobot } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom"


export function HomeAi() {
  const { riskScoreOverview } = useRiskScoreOverview();
  const { recentActivityList } = useRiskRecentActivity();
  console.log(riskScoreOverview, riskScoreOverview);

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

          {/* Main Chat Interface */}
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            data-id="egxrs16g6"
          >
            <div className="grid lg:grid-cols-4 gap-8" data-id="3d3a6ozpl">
              {/* Chat Interface */}
              <div className="lg:col-span-3" data-id="mv8qx852i">
                <ChatInterface data-id="heazulk6r" />
              </div>

              {/* Sidebar - Quick Stats */}
              <div className="lg:col-span-1 space-y-6" data-id="t5c89m9dn">
                <div
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  data-id="flgsojwhn"
                >
                  <h3
                    className="font-semibold text-gray-900 mb-4"
                    data-id="3pwiodfc0"
                  >
                    Risk Overview
                  </h3>
                  <div className="space-y-4" data-id="99fc7x52v">
                    <div
                      className="flex items-center justify-between"
                      data-id="ik6ho0l7o"
                    >
                      <span
                        className="text-sm text-gray-600"
                        data-id="q3aooyqbd"
                      >
                        Critical Risks
                      </span>
                      <span
                        className="text-sm font-medium text-red-600"
                        data-id="ptrcrmawz"
                      >
                        {riskScoreOverview?.criticalRisks ?? "-"}
                      </span>
                    </div>
                    <div
                      className="flex items-center justify-between"
                      data-id="ulsxb0b15"
                    >
                      <span
                        className="text-sm text-gray-600"
                        data-id="f5qcx03xz"
                      >
                        High Priority
                      </span>
                      <span
                        className="text-sm font-medium text-orange-600"
                        data-id="76st735uy"
                      >
                        {riskScoreOverview?.highPriority ?? "-"}
                      </span>
                    </div>
                    <div
                      className="flex items-center justify-between"
                      data-id="oezwuib6f"
                    >
                      <span
                        className="text-sm text-gray-600"
                        data-id="qsobx3cr5"
                      >
                        Medium Priority
                      </span>
                      <span
                        className="text-sm font-medium text-yellow-600"
                        data-id="zoffo7fes"
                      >
                        {riskScoreOverview?.mediumPriority ?? "-"}
                      </span>
                    </div>
                    <div
                      className="flex items-center justify-between"
                      data-id="h6dhxvcia"
                    >
                      <span
                        className="text-sm text-gray-600"
                        data-id="q7kiow2yx"
                      >
                        Low Priority
                      </span>
                      <span
                        className="text-sm font-medium text-green-600"
                        data-id="u8h0gwffh"
                      >
                        {riskScoreOverview?.lowPriority ?? "-"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Capabilities - Unchanged */}
                {/*<div
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  data-id="d11fuize3"
                >
                  <h3
                    className="font-semibold text-gray-900 mb-4"
                    data-id="v2wblbs07"
                  >
                    AI Capabilities
                  </h3>
                  <div className="space-y-3" data-id="96gle7qg3">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-chart-line text-blue-600"></i>
                      <span className="text-sm text-gray-700">
                        Risk Score Analysis
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-book text-green-600"></i>
                      <span className="text-sm text-gray-700">
                        Mitigation Playbooks
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-flask text-purple-600"></i>
                      <span className="text-sm text-gray-700">
                        Scenario Planning
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-bell text-red-600"></i>
                      <span className="text-sm text-gray-700">
                        Real-time Alerts
                      </span>
                    </div>
                  </div>
                </div> */}

                <div
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  data-id="uahx10uwb"
                >
                  <h3
                    className="font-semibold text-gray-900 mb-4"
                    data-id="4hmjkqefd"
                  >
                    Recent Activity
                  </h3>
                  <div className="space-y-3" data-id="qk0zqrnyp">
                    {recentActivityList.length > 0 ? (
                      recentActivityList.slice(0, 5).map((activity, index) => (
                        <div key={index} className="text-sm">
                          <div className="text-gray-900 font-medium">
                            {activity.activity}
                          </div>
                          <div className="text-gray-500">
                            {activity.activityOccurrenceTime}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-gray-500">
                        No recent activity
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
