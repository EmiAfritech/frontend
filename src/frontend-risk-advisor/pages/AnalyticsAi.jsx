import React from "react";
import { RiskScoreCard } from "../components/RiskScoreCard";

export function AnalyticsAi() {
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
  // Only showing the RiskScoreCard for now
  return <RiskScoreCard data-id="cw2cgyal6" />;

  /*
  switch (activeDemo) {
    case 'riskScores':
      return <RiskScoreCard data-id="cw2cgyal6" />;
    case 'mitigation':
      return <MitigationPlaybook data-id="i3gxpoz81" />;
    case 'scenarios':
      return <ScenarioGuidance data-id="za855h9dn" />;
    case 'alerts':
      return <AlertDemo data-id="yzertfww3" />;
    default:
      return <RiskScoreCard data-id="dhynm9vki" />;
  }
  */
};


  return (
    <div className="min-h-screen bg-gray-50" data-id="kf5i1alm7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="k2yitianh">
        <div className="text-center mb-8" data-id="12d3ao0zw">
          <h1 className="text-3xl font-bold text-gray-900 mb-4" data-id="zdcpsb1y8">Analytics Dashboard</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="lsg8xnzd1">
            Comprehensive risk analysis and insights. Explore different analytical views to understand your risk landscape.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="mb-8" data-id="bfcgvbjb6">
          <div className="flex flex-wrap justify-center gap-4" data-id="yafxppx43">
            {Object.entries(demos).map(([key, demo]) =>
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeDemo === key ?
              'bg-blue-600 text-white shadow-lg' :
              'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`
              } data-id="oo29bffd9">

                {demo.title}
              </button>
            )}
          </div>
        </div>

        {/* Demo Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8" data-id="xwgnx5js6">
          <div className="text-center mb-6" data-id="86g3ohq94">
            <h2 className="text-2xl font-bold text-gray-900 mb-2" data-id="bskzjllmj">
              {demos[activeDemo].title}
            </h2>
            <p className="text-gray-600" data-id="mmtfsrva4">
              {demos[activeDemo].description}
            </p>
          </div>
          
          {renderDemoComponent()}
        </div>

        {/* Analytics Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="zewhrnrle">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="4pzze04wf">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="3o4mvx3dk">
              <i className="fas fa-exclamation-triangle text-red-600 text-xl" data-id="0zd3c8s70"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="xu33amwvg">Risk Detection</h3>
            <p className="text-sm text-gray-600" data-id="l3ueyn0fa">
              Automatically identify and score risks on a 0-20 scale
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="eb39xbme4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="5vug14vao">
              <i className="fas fa-brain text-blue-600 text-xl" data-id="yuv20ji1i"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="wsq658ajd">AI Analysis</h3>
            <p className="text-sm text-gray-600" data-id="m3xd4quaz">
              Intelligent analysis of risk patterns and trends
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="ugi6q6z3o">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="4qo2js0fl">
              <i className="fas fa-shield-alt text-green-600 text-xl" data-id="tk5occpuy"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="53tr9u0ei">Mitigation</h3>
            <p className="text-sm text-gray-600" data-id="f7siue07o">
              Actionable recommendations and response playbooks
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center" data-id="ep6zkaogf">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4" data-id="z0yqsbjgl">
              <i className="fas fa-chart-line text-purple-600 text-xl" data-id="stbey5qsc"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2" data-id="8qfsmsv7t">Prediction</h3>
            <p className="text-sm text-gray-600" data-id="zvc672mng">
              Scenario planning and predictive risk modeling
            </p>
          </div>
        </div>
      </div>
    </div>);

}