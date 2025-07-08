function Features() {
  const features = [
  {
    id: 1,
    title: "Prioritized Actionable Recommendations",
    description: "Get ranked recommendations based on risk score, probability, impact, and cost/effort of mitigation.",
    icon: "fa-list-check",
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    title: "Scenario-Based Guidance",
    description: "Simulate 'what-if' scenarios using historical data and external factors to prepare for future risks.",
    icon: "fa-chart-line",
    color: "text-purple-500",
    bgColor: "bg-purple-100"
  },
  {
    id: 3,
    title: "Real-Time Risk Alerts",
    description: "Receive flags for anomalies or sudden changes in risk metrics that require immediate attention.",
    icon: "fa-bell",
    color: "text-red-500",
    bgColor: "bg-red-100"
  },
  {
    id: 4,
    title: "Mitigation Playbooks",
    description: "Access step-by-step playbooks for common risk types, leveraging historical data for better outcomes.",
    icon: "fa-book",
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    id: 5,
    title: "Compliance-Driven Advice",
    description: "Map risks to regulatory requirements and receive compliance suggestions.",
    icon: "fa-clipboard-check",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100"
  },
  {
    id: 6,
    title: "User-Specific Guidance",
    description: "Get advice tailored to your role, department, and historical behavior.",
    icon: "fa-user-gear",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100"
  }];


  return (
    <section className="py-16 bg-gray-50" id="features" data-id="zyjjf2tpj">
      <div className="container mx-auto px-4 md:px-6" data-id="l74z0v1yl">
        <div className="text-center mb-16" data-id="0babky37l">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="v07q9cmdf">Core Features</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-id="omiucf4qv">
            Risk Advisor leverages AI and advanced analytics to transform how you manage risks,
            making your organization more resilient and adaptive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="stzn7i3fo">
          {features.map((feature) =>
          <FeatureCard key={feature.id} feature={feature} data-id="wfhugqweh" />
          )}
        </div>
      </div>
    </section>);

}

function FeatureCard({ feature }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover" data-id="cxl11ms9n">
      <div className={`${feature.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`} data-id="yud7loeqi">
        <i className={`fas ${feature.icon} text-xl ${feature.color}`} data-id="joqg0b2xb"></i>
      </div>
      <h3 className="text-xl font-semibold mb-3" data-id="ypa5mb5pz">{feature.title}</h3>
      <p className="text-gray-600" data-id="32yjoafsw">{feature.description}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100" data-id="m7l2vjbor">
        <ReactRouterDOM.Link
          to={`/features/${feature.id}`}
          className="text-primary hover:text-primary-dark font-medium flex items-center" data-id="c8em4lxsy">

          Learn more
          <i className="fas fa-arrow-right ml-2 text-sm" data-id="43nfsjtgs"></i>
        </ReactRouterDOM.Link>
      </div>
    </div>);

}