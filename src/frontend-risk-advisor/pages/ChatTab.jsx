import { ChatInterface } from "../components/ChatInterface";
import { useRiskScoreOverview, useRiskRecentActivity } from "../../api/routes-data";

export function ChatTab() {
  const { riskScoreOverview } = useRiskScoreOverview();
  const { recentActivityList } = useRiskRecentActivity();

  return (
    <div className="grid lg:grid-cols-4 gap-8 py-8">
      {/* Chat Interface */}
      <div className="lg:col-span-3">
        <ChatInterface />
      </div>

      {/* Sidebar: Risk Overview + Recent Activity */}
      <div className="lg:col-span-1 space-y-6">
        {/* Risk Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Risk Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Critical Risks</span>
              <span className="text-sm font-medium text-red-600">
                {riskScoreOverview?.criticalRisks ?? "-"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">High Priority</span>
              <span className="text-sm font-medium text-orange-600">
                {riskScoreOverview?.highPriority ?? "-"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Medium Priority</span>
              <span className="text-sm font-medium text-yellow-600">
                {riskScoreOverview?.mediumPriority ?? "-"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Low Priority</span>
              <span className="text-sm font-medium text-green-600">
                {riskScoreOverview?.lowPriority ?? "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivityList?.length > 0 ? (
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
              <div className="text-sm text-gray-500">No recent activity</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
