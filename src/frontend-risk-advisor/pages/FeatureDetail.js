export function FeatureDetail() {
  const { useParams } = ReactRouterDOM;
  const { feature } = useParams();

  const featureComponents = {
    'risk-analysis': <RiskScoreCard data-id="ebfu98wcs" />,
    'mitigation-playbooks': <MitigationPlaybook data-id="3n80p6tzh" />,
    'scenario-planning': <ScenarioGuidance data-id="22u4hb7cx" />,
    'real-time-alerts': <AlertDemo data-id="auk1k3h00" />
  };

  const featureInfo = {
    'risk-analysis': {
      title: 'Risk Score Analysis',
      description: 'Comprehensive risk assessment and scoring using AI-powered analysis. Risks are scored on a 0-20 scale for accurate prioritization.',
      icon: 'fa-chart-line'
    },
    'mitigation-playbooks': {
      title: 'Mitigation Playbooks',
      description: 'Pre-built response strategies and step-by-step guidance for common risk scenarios. Based on historical data and best practices.',
      icon: 'fa-book'
    },
    'scenario-planning': {
      title: 'Scenario Planning',
      description: 'What-if analysis and predictive modeling to understand potential risk impacts and prepare for various scenarios.',
      icon: 'fa-flask'
    },
    'real-time-alerts': {
      title: 'Real-time Risk Alerts',
      description: 'Live monitoring and immediate notifications for critical risk changes and anomalies that require immediate attention.',
      icon: 'fa-bell'
    }
  };

  const currentFeature = featureInfo[feature];
  const component = featureComponents[feature];

  if (!currentFeature) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" data-id="qc56bmi54">
                <div className="text-center" data-id="vqd48tkyu">
                    <i className="fas fa-exclamation-triangle text-4xl text-gray-400 mb-4" data-id="o1bx2e6sp"></i>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2" data-id="e0get51nb">Feature Not Found</h1>
                    <p className="text-gray-600" data-id="6y8grpjbx">The requested feature could not be found.</p>
                </div>
            </div>);

  }

  return (
    <div className="min-h-screen bg-gray-50" data-id="of29r1bdn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="ipun09n6q">
                {/* Header */}
                <div className="text-center mb-8" data-id="vl1q7mdu1">
                    <div className="flex items-center justify-center space-x-3 mb-4" data-id="kl014vtzy">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center" data-id="8c2wozgp0">
                            <i className={`fas ${currentFeature.icon} text-2xl text-blue-600`} data-id="blwjux9id"></i>
                        </div>
                        <div className="text-left" data-id="bc3xe0qed">
                            <h1 className="text-3xl font-bold text-gray-900" data-id="2hqszwvor">{currentFeature.title}</h1>
                            <p className="text-gray-600" data-id="xjk9v738q">AI-Powered Risk Management</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="civ262qf9">
                        {currentFeature.description}
                    </p>
                </div>

                {/* Feature Component */}
                <div className="mb-8" data-id="i3egtd4fw">
                    {component}
                </div>

                {/* Feature Benefits */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-id="8ldged9kn">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 text-center" data-id="t0m0mn5va">Key Benefits</h2>
                    <div className="grid md:grid-cols-3 gap-6" data-id="hzmirgbop">
                        <div className="text-center" data-id="n04hb270f">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3" data-id="gslgae3gs">
                                <i className="fas fa-tachometer-alt text-green-600" data-id="tnx90omx6"></i>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-2" data-id="eo7b90czn">Fast Response</h3>
                            <p className="text-sm text-gray-600" data-id="9cw5u9c1o">Quick identification and response to emerging risks</p>
                        </div>
                        <div className="text-center" data-id="a0afqck21">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3" data-id="f9bquixs3">
                                <i className="fas fa-bullseye text-blue-600" data-id="3t9qw27wi"></i>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-2" data-id="6i564hgie">Accurate Analysis</h3>
                            <p className="text-sm text-gray-600" data-id="oi4jy86d2">Precise risk scoring and impact assessment</p>
                        </div>
                        <div className="text-center" data-id="p92jnkygg">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3" data-id="0bpeqhdh5">
                                <i className="fas fa-lightbulb text-purple-600" data-id="6q002852d"></i>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-2" data-id="4hr7hd7k1">Smart Recommendations</h3>
                            <p className="text-sm text-gray-600" data-id="xnfwkn6rx">AI-powered insights and actionable advice</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

}