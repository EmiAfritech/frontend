import React from 'react';
import { useRiskScoreCard } from '../../api/routes-data';

export function RiskScoreCard() {
  const [selectedRisk, setSelectedRisk] = React.useState(null);
  const {riskscorecard} = useRiskScoreCard()
  console.log({"riskscrore":riskscorecard})

 {/* const risks = [
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
    
    */} 


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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-4" data-id="7pw4i18ry">
            <div className="flex items-center justify-between mb-6" data-id="7klevshhs">
                <h3 className="text-lg font-semibold text-gray-900" data-id="00hfid8cg">Current Risk Analysis</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500" data-id="799j3pk61">
                    <i className="fas fa-clock" data-id="6l0vhkiir"></i>
                    <span data-id="yt10kj6d9">Updated live</span>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2" data-id="bd4jxt9f2">
                {riskscorecard.map((risk) =>
        <div
          key={risk.id}
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setSelectedRisk(selectedRisk === risk.id ? null : risk.id)} data-id="bn2tdc0vh">

                        <div className="flex items-center justify-between mb-3" data-id="2u08iu4li">
                            <div className="flex items-center space-x-3" data-id="r4ov5t0a9">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${getRiskColor(risk.score)}`} data-id="v6jc92ijy">
                                    {risk.score}
                                </div>
                                <div data-id="7hwprivnl">
                                    <h4 className="font-medium text-gray-900" data-id="2uv2jzpzd">{risk.riskName}</h4>
                                    <p className="text-sm text-gray-500" data-id="8qb89gsuw">{risk.riskCategory}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2" data-id="u896bwaz8">
                                <i className={`fas ${getTrendIcon(risk.trend)}`} data-id="9de9bbizc"></i>
                                <span className="text-xs text-gray-500" data-id="8x4wqxc2u">{risk.createdAt}</span>
                            </div>
                        </div>

                        <div className="space-y-2" data-id="l0ui34aqk">
                            <div className="flex justify-between items-center" data-id="ebz068frg">
                                <span className="text-sm text-gray-600" data-id="0bf4a5l3a">Probability</span>
                                <span className="text-sm font-medium" data-id="4dv8gc2pv">{risk.probability}</span>
                            </div>
                           {/*  <div className="w-full bg-gray-200 rounded-full h-2" data-id="lm0wrjwq1">
                                <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${risk.probability}%` }} data-id="ckgzysekx">
              </div>
                            </div> */}
                            <div className="flex justify-between items-center mt-2" data-id="ii4ryh5i5">
                                <span className="text-sm text-gray-600" data-id="r07vqohhu">Impact Level</span>
                                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
              risk.impact === 'Critical' ? 'bg-red-100 text-red-800' :
              risk.impact === 'High' ? 'bg-orange-100 text-orange-800' :
              'bg-yellow-100 text-yellow-800'}`
              } data-id="cl4jyux7o">
                                    {risk.impact}
                                </span>
                            </div>
                        </div>

                        {selectedRisk === risk.id &&
          <div className="mt-4 pt-4 border-t border-gray-200" data-id="qzhoaakyh">
                                <div className="bg-blue-50 rounded-lg p-3" data-id="3lm39cufk">
                                    <h5 className="font-medium text-blue-900 mb-2" data-id="2rdytj4io">AI Recommendation</h5>
                                    <p className="text-sm text-blue-700" data-id="o3vuqkd6m">
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

            <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-id="ckwczp1lb">
                <h4 className="font-medium text-gray-900 mb-2" data-id="p6bm8y3pr">Risk Score Scale</h4>
                <div className="flex items-center space-x-4 text-sm" data-id="b0oerhxq1">
                    <div className="flex items-center space-x-2" data-id="gt3v0e6oe">
                        <div className="w-4 h-4 bg-green-500 rounded" data-id="0hm6zvats"></div>
                        <span data-id="85ynjzhyv">1-5 (Low)</span>
                    </div>
                    <div className="flex items-center space-x-2" data-id="x0nvo23pt">
                        <div className="w-4 h-4 bg-yellow-500 rounded" data-id="u5eak6yo9"></div>
                        <span data-id="r0oisjowm">6-9 (Medium)</span>
                    </div>
                    <div className="flex items-center space-x-2" data-id="4161sz0mq">
                        <div className="w-4 h-4 bg-orange-500 rounded" data-id="h8x2qss1x"></div>
                        <span data-id="z1amsn49a">10-15 (High)</span>
                    </div>
                    <div className="flex items-center space-x-2" data-id="sotek5f8a">
                        <div className="w-4 h-4 bg-red-500 rounded" data-id="nkufhuhl9"></div>
                        <span data-id="fm6jk6mdv">16-25 (Critical)</span>
                    </div>
                </div>
            </div>
        </div>);

}