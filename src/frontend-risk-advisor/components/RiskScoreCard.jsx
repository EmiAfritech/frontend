import React from 'react';
import { useAIRecommendation, useRiskScoreCard } from '../../api/routes-data';
import { getImpactLevelNumber, getProbabilityLevelNumber } from '../../component/components/modalforms';

export function RiskScoreCard() {
  const [selectedRisk, setSelectedRisk] = React.useState(null);
  const { riskscorecard } = useRiskScoreCard();
  const { recommendation } = useAIRecommendation(selectedRisk?.riskName);

  const getRiskColor = (score) => {
    if (score >= 16) return 'text-red-600 bg-red-100';
    if (score >= 10) return 'text-orange-600 bg-orange-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return 'fa-arrow-up text-red-500';
      case 'down':
        return 'fa-arrow-down text-green-500';
      default:
        return 'fa-minus text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Current Risk Analysis</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <i className="fas fa-clock"></i>
          <span>Updated live</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {riskscorecard.map((risk) => {
          const riskScoreNumber = getImpactLevelNumber(risk.impact) * getProbabilityLevelNumber(risk.probability);
          const riskScorePercentage = Math.min(100, Math.round((riskScoreNumber / 25) * 100));

          const isSelected = selectedRisk?.id === risk.id;

          return (
            <div
              key={risk.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedRisk(isSelected ? null : risk)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-lg ${getRiskColor(riskScoreNumber)}`}
                  >
                    <span className="font-bold">{riskScoreNumber}</span>
                    <span className="text-xs font-normal">({riskScorePercentage}%)</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{risk.riskName}</h4>
                    <p className="text-sm text-gray-500">{risk.riskCategory}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <i className={`fas ${getTrendIcon(risk.trend)}`}></i>
                  <span className="text-xs text-gray-500">{risk.createdAt}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${riskScorePercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Probability Level</span>
                  <span className="text-sm font-medium">{risk.probability}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">Impact Level</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    risk.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                    risk.impact === 'Major' ? 'bg-orange-100 text-orange-800' :
                    risk.impact === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    risk.impact === 'Minor' ? 'bg-blue-100 text-blue-800' :
                    risk.impact === 'Insignificant' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {risk.impact}
                  </span>
                </div>
              </div>

              {isSelected && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h5 className="font-medium text-blue-900 mb-2">AI Recommendation</h5>
                    <p className="text-sm text-blue-700">
                      {recommendation || "Loading..."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Risk Score Scale</h4>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>1-5 (Low)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>6-9 (Medium)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span>10-15 (High)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>16-25 (Critical)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
