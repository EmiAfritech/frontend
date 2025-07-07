function ScenarioGuidance() {
  const [selectedScenario, setSelectedScenario] = React.useState(null);
  const [customScenario, setCustomScenario] = React.useState('');

  const scenarios = [
  {
    id: 1,
    title: "Interest Rate Increase",
    description: "What if interest rates rise by 2% over the next 6 months?",
    category: "Financial",
    probability: 65,
    impact: {
      liquidity: "↑30%",
      operationalCost: "↑15%",
      supplierRisk: "↑10%"
    },
    recommendations: [
    "Pre-approve a line of credit now to secure current rates",
    "Review and renegotiate variable-rate contracts",
    "Consider fixed-rate refinancing for major debt obligations",
    "Increase cash reserves by 15-20%"],

    timeframe: "6 months",
    confidence: "85%"
  },
  {
    id: 2,
    title: "Key Supplier Disruption",
    description: "What if your primary supplier experiences a 3-week shutdown?",
    category: "Supply Chain",
    probability: 40,
    impact: {
      productionDelay: "↑85%",
      customerSatisfaction: "↓40%",
      revenue: "↓25%"
    },
    recommendations: [
    "Activate backup suppliers immediately",
    "Implement rush orders for critical components",
    "Communicate proactively with customers about delays",
    "Consider air freight for urgent shipments"],

    timeframe: "3 weeks",
    confidence: "92%"
  },
  {
    id: 3,
    title: "Regulatory Compliance Change",
    description: "What if new data privacy regulations are introduced?",
    category: "Compliance",
    probability: 80,
    impact: {
      complianceCost: "↑50%",
      operationalEfficiency: "↓20%",
      legalRisk: "↑35%"
    },
    recommendations: [
    "Conduct immediate compliance gap analysis",
    "Hire data privacy consultant",
    "Update privacy policies and procedures",
    "Implement additional data security measures"],

    timeframe: "12 months",
    confidence: "78%"
  },
  {
    id: 4,
    title: "Cybersecurity Breach",
    description: "What if a ransomware attack affects your main systems?",
    category: "Security",
    probability: 25,
    impact: {
      systemDowntime: "↑200%",
      dataLoss: "↑150%",
      reputationDamage: "↑100%"
    },
    recommendations: [
    "Implement immediate incident response plan",
    "Activate backup systems and data recovery",
    "Engage cybersecurity experts and legal counsel",
    "Communicate transparently with stakeholders"],

    timeframe: "1-2 weeks",
    confidence: "89%"
  }];


  const runCustomScenario = () => {
    if (!customScenario.trim()) return;

    // Simulate AI analysis
    const analysisResult = {
      title: "Custom Scenario Analysis",
      description: customScenario,
      category: "Custom",
      probability: Math.floor(Math.random() * 100),
      impact: {
        overall: "Analyzing...",
        financial: "Calculating...",
        operational: "Processing..."
      },
      recommendations: [
      "AI analysis in progress...",
      "Gathering historical data...",
      "Generating recommendations..."],

      confidence: "Processing..."
    };

    // Add to scenarios list
    scenarios.unshift({
      id: Date.now(),
      ...analysisResult
    });

    setCustomScenario('');
    setSelectedScenario(Date.now());
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Financial':return 'bg-green-100 text-green-800';
      case 'Supply Chain':return 'bg-blue-100 text-blue-800';
      case 'Compliance':return 'bg-purple-100 text-purple-800';
      case 'Security':return 'bg-red-100 text-red-800';
      default:return 'bg-gray-100 text-gray-800';
    }
  };

  const getProbabilityColor = (probability) => {
    if (probability >= 70) return 'text-red-600';
    if (probability >= 40) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-4" data-id="cd689v0ms" data-path="components/ScenarioGuidance.js">
            <div className="flex items-center justify-between mb-6" data-id="2l6j43di6" data-path="components/ScenarioGuidance.js">
                <h3 className="text-lg font-semibold text-gray-900" data-id="81yocf3vy" data-path="components/ScenarioGuidance.js">Scenario Analysis</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500" data-id="5zrxt2ds1" data-path="components/ScenarioGuidance.js">
                    <i className="fas fa-brain" data-id="vrjtcks70" data-path="components/ScenarioGuidance.js"></i>
                    <span data-id="kdrn8o9lc" data-path="components/ScenarioGuidance.js">AI-Powered Insights</span>
                </div>
            </div>

            {/* Custom Scenario Input */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg" data-id="w97jhle72" data-path="components/ScenarioGuidance.js">
                <h4 className="font-medium text-gray-900 mb-3" data-id="5v919hh6c" data-path="components/ScenarioGuidance.js">Run Custom Scenario</h4>
                <div className="flex space-x-3" data-id="ytmlicc5v" data-path="components/ScenarioGuidance.js">
                    <input
            type="text"
            value={customScenario}
            onChange={(e) => setCustomScenario(e.target.value)}
            placeholder="e.g., What if our main competitor launches a similar product?"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" data-id="zv7imeoc5" data-path="components/ScenarioGuidance.js" />

                    <button
            onClick={runCustomScenario}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" data-id="2eyoxqmqk" data-path="components/ScenarioGuidance.js">

                        <i className="fas fa-play mr-2" data-id="8xkgt5a5g" data-path="components/ScenarioGuidance.js"></i>
                        Analyze
                    </button>
                </div>
            </div>

            {/* Scenario Cards */}
            <div className="space-y-4" data-id="ugwyl1yfk" data-path="components/ScenarioGuidance.js">
                {scenarios.map((scenario) =>
        <div key={scenario.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow" data-id="6hg6lhpws" data-path="components/ScenarioGuidance.js">
                        <div
            className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)} data-id="pkfwosjbl" data-path="components/ScenarioGuidance.js">

                            <div className="flex items-center justify-between" data-id="c2506v2kt" data-path="components/ScenarioGuidance.js">
                                <div className="flex items-center space-x-4" data-id="of71gkkwd" data-path="components/ScenarioGuidance.js">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center" data-id="vcu631t4h" data-path="components/ScenarioGuidance.js">
                                        <i className="fas fa-flask text-indigo-600" data-id="hk6d2zemf" data-path="components/ScenarioGuidance.js"></i>
                                    </div>
                                    <div data-id="ew8slp4f6" data-path="components/ScenarioGuidance.js">
                                        <h4 className="font-medium text-gray-900" data-id="2aqtjz9ku" data-path="components/ScenarioGuidance.js">{scenario.title}</h4>
                                        <p className="text-sm text-gray-500" data-id="qppfb1g4g" data-path="components/ScenarioGuidance.js">{scenario.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4" data-id="uiyggumhh" data-path="components/ScenarioGuidance.js">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(scenario.category)}`} data-id="nr8shsf8n" data-path="components/ScenarioGuidance.js">
                                        {scenario.category}
                                    </span>
                                    <div className="text-right" data-id="wbr9eux8h" data-path="components/ScenarioGuidance.js">
                                        <div className={`font-medium ${getProbabilityColor(scenario.probability)}`} data-id="q7p6mixsx" data-path="components/ScenarioGuidance.js">
                                            {scenario.probability}%
                                        </div>
                                        <div className="text-xs text-gray-500" data-id="jszecpkfs" data-path="components/ScenarioGuidance.js">Probability</div>
                                    </div>
                                    <i className={`fas fa-chevron-${selectedScenario === scenario.id ? 'up' : 'down'} text-gray-400`} data-id="isxsfukx3" data-path="components/ScenarioGuidance.js"></i>
                                </div>
                            </div>
                        </div>

                        {selectedScenario === scenario.id &&
          <div className="border-t border-gray-200 p-4 bg-gray-50" data-id="pr0nlik4m" data-path="components/ScenarioGuidance.js">
                                <div className="grid md:grid-cols-2 gap-6" data-id="oppl8kuf9" data-path="components/ScenarioGuidance.js">
                                    {/* Impact Analysis */}
                                    <div data-id="th1s4fune" data-path="components/ScenarioGuidance.js">
                                        <h5 className="font-medium text-gray-900 mb-3" data-id="vyd9ukpxw" data-path="components/ScenarioGuidance.js">Projected Impact</h5>
                                        <div className="space-y-2" data-id="7om8jjvxu" data-path="components/ScenarioGuidance.js">
                                            {Object.entries(scenario.impact).map(([key, value]) =>
                  <div key={key} className="flex justify-between items-center" data-id="9autscn4b" data-path="components/ScenarioGuidance.js">
                                                    <span className="text-sm text-gray-600 capitalize" data-id="hbdnf8kja" data-path="components/ScenarioGuidance.js">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </span>
                                                    <span className={`text-sm font-medium ${
                    value.includes('↑') ? 'text-red-600' :
                    value.includes('↓') ? 'text-green-600' :
                    'text-gray-600'}`
                    } data-id="63n12g3fg" data-path="components/ScenarioGuidance.js">
                                                        {value}
                                                    </span>
                                                </div>
                  )}
                                        </div>
                                        <div className="mt-4 p-3 bg-white rounded border" data-id="iw1dsr5c0" data-path="components/ScenarioGuidance.js">
                                            <div className="flex justify-between items-center" data-id="pidy92ttq" data-path="components/ScenarioGuidance.js">
                                                <span className="text-sm text-gray-600" data-id="fo4h9oeo3" data-path="components/ScenarioGuidance.js">Analysis Confidence</span>
                                                <span className="text-sm font-medium text-green-600" data-id="nwtszfgkf" data-path="components/ScenarioGuidance.js">{scenario.confidence}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recommendations */}
                                    <div data-id="gbby9awyd" data-path="components/ScenarioGuidance.js">
                                        <h5 className="font-medium text-gray-900 mb-3" data-id="pq3rzukux" data-path="components/ScenarioGuidance.js">AI Recommendations</h5>
                                        <div className="space-y-2" data-id="szb5ugjil" data-path="components/ScenarioGuidance.js">
                                            {scenario.recommendations.map((rec, index) =>
                  <div key={index} className="flex items-start space-x-3 p-2 bg-white rounded border" data-id="i7nosecaf" data-path="components/ScenarioGuidance.js">
                                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-id="b6ynf6na6" data-path="components/ScenarioGuidance.js">
                                                        <span className="text-xs font-medium text-blue-600" data-id="3k5eosyxd" data-path="components/ScenarioGuidance.js">{index + 1}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-700" data-id="lj4h6m1ba" data-path="components/ScenarioGuidance.js">{rec}</p>
                                                </div>
                  )}
                                        </div>
                                        <div className="mt-4 flex items-center justify-between text-sm text-gray-500" data-id="4kt2tvch1" data-path="components/ScenarioGuidance.js">
                                            <span data-id="t30wrcmk8" data-path="components/ScenarioGuidance.js">Timeline: {scenario.timeframe}</span>
                                            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" data-id="sgsuly0ij" data-path="components/ScenarioGuidance.js">
                                                Create Action Plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
          }
                    </div>
        )}
            </div>
        </div>);

}