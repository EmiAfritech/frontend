function Analytics() {
  const [activeDemo, setActiveDemo] = React.useState('riskScores');

  const demos = {
    riskScores: {
      title: 'Risk Score Analysis',
      description: 'See how AI analyzes and prioritizes risks on a 0-20 scale',
      component: 'RiskScoreCard'
    },
    mitigation: {
      title: 'Mitigation Playbooks',
      description: 'Pre-built response strategies for common risk scenarios',
      component: 'MitigationPlaybook'
    },
    scenarios: {
      title: 'Scenario Planning',
      description: 'What-if analysis and predictive risk modeling',
      component: 'ScenarioGuidance'
    },
    alerts: {
      title: 'Real-time Alerts',
      description: 'Live monitoring and immediate risk notifications',
      component: 'AlertDemo'
    }
  };

  const renderDemoComponent = () => {
    switch (activeDemo) {
      case 'riskScores':
        return <RiskScoreCard data-id="cw2cgyal6" data-path="pages/Analytics.js" />;
      case 'mitigation':
        return <MitigationPlaybook data-id="i3gxpoz81" data-path="pages/Analytics.js" />;
      case 'scenarios':
        return <ScenarioGuidance data-id="za855h9dn" data-path="pages/Analytics.js" />;
      case 'alerts':
        return <AlertDemo data-id="yzertfww3" data-path="pages/Analytics.js" />;
      default:
        return <RiskScoreCard data-id="dhynm9vki" data-path="pages/Analytics.js" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" data-id="kf5i1alm7" data-path="pages/Analytics.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="k2yitianh" data-path="pages/Analytics.js">
        <div className="text-center mb-8" data-id="12d3ao0zw" data-path="pages/Analytics.js">
          <h1 className="text-3xl font-bold text-gray-900 mb-4" data-id="zdcpsb1y8" data-path="pages/Analytics.js">Analytics Dashboard</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="lsg8xnzd1" data-path="pages/Analytics.js">
            Comprehensive risk analysis and insights. Explore different analytical views to understand your risk landscape.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="mb-8" data-id="bfcgvbjb6" data-path="pages/Analytics.js">
          <div className="flex flex-wrap justify-center gap-4" data-id="yafxppx43" data-path="pages/Analytics.js">
            {Object.entries(demos).map(([key, demo]) =>
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeDemo === key ?
              'bg-blue-600 text-white shadow-lg' :
              'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`
              } data-id="oo29bffd9" data-path="pages/Analytics.js">

                {demo.title}
              </button>
            )}
          </div>
        </div>

        {/* Demo Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8" data-id="xwgnx5js6" data-path="pages/Analytics.js">
          <div className="text-center mb-6" data-id="86g3ohq94" data-path="pages/Analytics.js">
            <h2 className="text-2xl font-bold text-gray-900 mb-2" data-id="bskzjllmj" data-path="pages/Analytics.js">
              {demos[activeDemo].title}
            </h2>
            <p className="text-gray-600" data-id="mmtfsrva4" data-path="pages/Analytics.js">
              {demos[activeDemo].description}
            </p>
          </div>
          
          {renderDemoComponent()}
        </div>

        {/* Analytics Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="zewhrnrle" data-path="pages/Analytics.js">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="4pzze04wf" data-path="pages/Analytics.js">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="3o4mvx3dk" data-path="pages/Analytics.js">
              <i className="fas fa-exclamation-triangle text-red-600 text-xl" data-id="0zd3c8s70" data-path="pages/Analytics.js"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="xu33amwvg" data-path="pages/Analytics.js">Risk Detection</h3>
            <p className="text-sm text-gray-600" data-id="l3ueyn0fa" data-path="pages/Analytics.js">
              Automatically identify and score risks on a 0-20 scale
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="eb39xbme4" data-path="pages/Analytics.js">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="5vug14vao" data-path="pages/Analytics.js">
              <i className="fas fa-brain text-blue-600 text-xl" data-id="yuv20ji1i" data-path="pages/Analytics.js"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="wsq658ajd" data-path="pages/Analytics.js">AI Analysis</h3>
            <p className="text-sm text-gray-600" data-id="m3xd4quaz" data-path="pages/Analytics.js">
              Intelligent analysis of risk patterns and trends
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="ugi6q6z3o" data-path="pages/Analytics.js">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="4qo2js0fl" data-path="pages/Analytics.js">
              <i className="fas fa-shield-alt text-green-600 text-xl" data-id="tk5occpuy" data-path="pages/Analytics.js"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="53tr9u0ei" data-path="pages/Analytics.js">Mitigation</h3>
            <p className="text-sm text-gray-600" data-id="f7siue07o" data-path="pages/Analytics.js">
              Actionable recommendations and response playbooks
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="ep6zkaogf" data-path="pages/Analytics.js">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="z0yqsbjgl" data-path="pages/Analytics.js">
              <i className="fas fa-chart-line text-purple-600 text-xl" data-id="stbey5qsc" data-path="pages/Analytics.js"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="8qfsmsv7t" data-path="pages/Analytics.js">Prediction</h3>
            <p className="text-sm text-gray-600" data-id="zvc672mng" data-path="pages/Analytics.js">
              Scenario planning and predictive risk modeling
            </p>
          </div>
        </div>
      </div>
    </div>);

}