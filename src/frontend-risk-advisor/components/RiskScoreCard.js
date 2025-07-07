function RiskScoreCard() {
  const [selectedRisk, setSelectedRisk] = React.useState(null);

  const risks = [
  {
    id: 1,
    name: "Supplier Delays",
    category: "Supply Chain",
    score: 18,
    probability: 85,
    impact: "High",
    trend: "up",
    lastUpdated: "2 hours ago"
  },
  {
    id: 2,
    name: "Cybersecurity Breach",
    category: "Security",
    score: 16,
    probability: 65,
    impact: "Critical",
    trend: "up",
    lastUpdated: "30 minutes ago"
  },
  {
    id: 3,
    name: "Regulatory Changes",
    category: "Compliance",
    score: 12,
    probability: 70,
    impact: "Medium",
    trend: "stable",
    lastUpdated: "1 day ago"
  },
  {
    id: 4,
    name: "Market Volatility",
    category: "Financial",
    score: 14,
    probability: 80,
    impact: "High",
    trend: "down",
    lastUpdated: "6 hours ago"
  }];


  const getRiskColor = (score) => {
    if (score >= 16) return "text-red-600 bg-red-100";
    if (score >= 12) return "text-orange-600 bg-orange-100";
    if (score >= 8) return "text-yellow-600 bg-yellow-100";
    return "text-green-600 bg-green-100";
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':return 'fa-arrow-up text-red-500';
      case 'down':return 'fa-arrow-down text-green-500';
      default:return 'fa-minus text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-4" data-id="7pw4i18ry" data-path="components/RiskScoreCard.js">
            <div className="flex items-center justify-between mb-6" data-id="7klevshhs" data-path="components/RiskScoreCard.js">
                <h3 className="text-lg font-semibold text-gray-900" data-id="00hfid8cg" data-path="components/RiskScoreCard.js">Current Risk Analysis</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500" data-id="799j3pk61" data-path="components/RiskScoreCard.js">
                    <i className="fas fa-clock" data-id="6l0vhkiir" data-path="components/RiskScoreCard.js"></i>
                    <span data-id="yt10kj6d9" data-path="components/RiskScoreCard.js">Updated live</span>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2" data-id="bd4jxt9f2" data-path="components/RiskScoreCard.js">
                {risks.map((risk) =>
        <div
          key={risk.id}
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setSelectedRisk(selectedRisk === risk.id ? null : risk.id)} data-id="bn2tdc0vh" data-path="components/RiskScoreCard.js">

                        <div className="flex items-center justify-between mb-3" data-id="2u08iu4li" data-path="components/RiskScoreCard.js">
                            <div className="flex items-center space-x-3" data-id="r4ov5t0a9" data-path="components/RiskScoreCard.js">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${getRiskColor(risk.score)}`} data-id="v6jc92ijy" data-path="components/RiskScoreCard.js">
                                    {risk.score}
                                </div>
                                <div data-id="7hwprivnl" data-path="components/RiskScoreCard.js">
                                    <h4 className="font-medium text-gray-900" data-id="2uv2jzpzd" data-path="components/RiskScoreCard.js">{risk.name}</h4>
                                    <p className="text-sm text-gray-500" data-id="8qb89gsuw" data-path="components/RiskScoreCard.js">{risk.category}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2" data-id="u896bwaz8" data-path="components/RiskScoreCard.js">
                                <i className={`fas ${getTrendIcon(risk.trend)}`} data-id="9de9bbizc" data-path="components/RiskScoreCard.js"></i>
                                <span className="text-xs text-gray-500" data-id="8x4wqxc2u" data-path="components/RiskScoreCard.js">{risk.lastUpdated}</span>
                            </div>
                        </div>

                        <div className="space-y-2" data-id="l0ui34aqk" data-path="components/RiskScoreCard.js">
                            <div className="flex justify-between items-center" data-id="ebz068frg" data-path="components/RiskScoreCard.js">
                                <span className="text-sm text-gray-600" data-id="0bf4a5l3a" data-path="components/RiskScoreCard.js">Probability</span>
                                <span className="text-sm font-medium" data-id="4dv8gc2pv" data-path="components/RiskScoreCard.js">{risk.probability}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2" data-id="lm0wrjwq1" data-path="components/RiskScoreCard.js">
                                <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${risk.probability}%` }} data-id="ckgzysekx" data-path="components/RiskScoreCard.js">
              </div>
                            </div>
                            <div className="flex justify-between items-center mt-2" data-id="ii4ryh5i5" data-path="components/RiskScoreCard.js">
                                <span className="text-sm text-gray-600" data-id="r07vqohhu" data-path="components/RiskScoreCard.js">Impact Level</span>
                                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
              risk.impact === 'Critical' ? 'bg-red-100 text-red-800' :
              risk.impact === 'High' ? 'bg-orange-100 text-orange-800' :
              'bg-yellow-100 text-yellow-800'}`
              } data-id="cl4jyux7o" data-path="components/RiskScoreCard.js">
                                    {risk.impact}
                                </span>
                            </div>
                        </div>

                        {selectedRisk === risk.id &&
          <div className="mt-4 pt-4 border-t border-gray-200" data-id="qzhoaakyh" data-path="components/RiskScoreCard.js">
                                <div className="bg-blue-50 rounded-lg p-3" data-id="3lm39cufk" data-path="components/RiskScoreCard.js">
                                    <h5 className="font-medium text-blue-900 mb-2" data-id="2rdytj4io" data-path="components/RiskScoreCard.js">AI Recommendation</h5>
                                    <p className="text-sm text-blue-700" data-id="o3vuqkd6m" data-path="components/RiskScoreCard.js">
                                        {risk.name === "Supplier Delays" && "Immediate action required: Activate backup suppliers and increase monitoring frequency to weekly."}
                                        {risk.name === "Cybersecurity Breach" && "Implement additional security measures and conduct immediate security audit."}
                                        {risk.name === "Regulatory Changes" && "Schedule compliance review meeting and update documentation."}
                                        {risk.name === "Market Volatility" && "Diversify portfolio and consider hedging strategies."}
                                    </p>
                                </div>
                            </div>
          }
                    </div>
        )}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-id="ckwczp1lb" data-path="components/RiskScoreCard.js">
                <h4 className="font-medium text-gray-900 mb-2" data-id="p6bm8y3pr" data-path="components/RiskScoreCard.js">Risk Score Scale</h4>
                <div className="flex items-center space-x-4 text-sm" data-id="b0oerhxq1" data-path="components/RiskScoreCard.js">
                    <div className="flex items-center space-x-2" data-id="gt3v0e6oe" data-path="components/RiskScoreCard.js">
                        <div className="w-4 h-4 bg-green-500 rounded" data-id="0hm6zvats" data-path="components/RiskScoreCard.js"></div>
                        <span data-id="85ynjzhyv" data-path="components/RiskScoreCard.js">0-7 (Low)</span>
                    </div>
                    <div className="flex items-center space-x-2" data-id="x0nvo23pt" data-path="components/RiskScoreCard.js">
                        <div className="w-4 h-4 bg-yellow-500 rounded" data-id="u5eak6yo9" data-path="components/RiskScoreCard.js"></div>
                        <span data-id="r0oisjowm" data-path="components/RiskScoreCard.js">8-11 (Medium)</span>
                    </div>
                    <div className="flex items-center space-x-2" data-id="4161sz0mq" data-path="components/RiskScoreCard.js">
                        <div className="w-4 h-4 bg-orange-500 rounded" data-id="h8x2qss1x" data-path="components/RiskScoreCard.js"></div>
                        <span data-id="z1amsn49a" data-path="components/RiskScoreCard.js">12-15 (High)</span>
                    </div>
                    <div className="flex items-center space-x-2" data-id="sotek5f8a" data-path="components/RiskScoreCard.js">
                        <div className="w-4 h-4 bg-red-500 rounded" data-id="nkufhuhl9" data-path="components/RiskScoreCard.js"></div>
                        <span data-id="fm6jk6mdv" data-path="components/RiskScoreCard.js">16-20 (Critical)</span>
                    </div>
                </div>
            </div>
        </div>);

}