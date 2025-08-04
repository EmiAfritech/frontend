import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRiskScoreCard } from "../../api/routes-data";
import { getImpactLevelNumber, getProbabilityLevelNumber } from "../../component/components/modalforms";

export function Navbar() {
  const location = useLocation();
  const { t } = useTranslation();
  const { riskscorecard } = useRiskScoreCard();

  // Calculate average risk score % across all risks
  const averageRiskScoreNumber = riskscorecard.length
    ? riskscorecard.reduce((sum, risk) => {
        return sum + (getImpactLevelNumber(risk.impact) * getProbabilityLevelNumber(risk.probability));
      }, 0) / riskscorecard.length
    : 0;

  const averageRiskScorePercentage = Math.round((averageRiskScoreNumber / 25) * 100);

  const getBadgeColor = (score) => {
    if (score >= 70) return 'bg-red-100 text-red-700';
    if (score >= 40) return 'bg-orange-100 text-orange-700';
    if (score >= 20) return 'bg-yellow-100 text-yellow-700';
    return 'bg-green-100 text-green-700';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="aji8xt0t0">
      <div className="flex justify-between items-center h-16 space-x-10" data-id="p61s9iw30">

        {/* Nav Links Centered */}
        <div className="flex items-center space-x-8" data-id="g15ff52pv">
          <Link
            to="/risk-ai"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === '/risk-ai'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            data-id="6g2wsuqzi"
          >
            {t('chatAssistant')}
          </Link>

          <Link
            to="/risk-ai/analytics"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === '/risk-ai/analytics'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            data-id="klonpaaf3"
          >
            {t('analyticsDashboard')}
          </Link>
        </div>

        {/* Right Status Indicators */}
        <div className="flex items-center space-x-4">
          {/* AI Status Badge */}
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full" data-id="rgmewvuxr">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" data-id="9j3onj8sy"></div>
            <span className="text-xs text-green-700 font-medium" data-id="w7ttu0ii1">{t('aiOnline')}</span>
          </div>

          {/* Risk Score Badge */}
          <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(averageRiskScorePercentage)}`} title="Average Risk Score">
            {averageRiskScorePercentage}%
          </div>
        </div>
      </div>
    </div>
  );
}
