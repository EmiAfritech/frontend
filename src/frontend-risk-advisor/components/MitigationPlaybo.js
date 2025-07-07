function MitigationPlaybook() {
  const [selectedPlaybook, setSelectedPlaybook] = React.useState(null);
  const [expandedStep, setExpandedStep] = React.useState(null);

  const playbooks = [
  {
    id: 1,
    title: "Supply Chain Disruption Response",
    riskType: "Supply Chain",
    urgency: "High",
    estimatedTime: "2-4 hours",
    successRate: "85%",
    steps: [
    {
      id: 1,
      title: "Activate Backup Suppliers",
      description: "Contact pre-approved backup suppliers immediately",
      timeframe: "30 minutes",
      assignee: "Procurement Team",
      status: "ready",
      details: "Use the pre-approved supplier list in the procurement database. Priority order: Supplier B, Supplier C, Supplier D."
    },
    {
      id: 2,
      title: "Notify Logistics Team",
      description: "Alert logistics team about potential delays",
      timeframe: "15 minutes",
      assignee: "Operations Manager",
      status: "ready",
      details: "Send immediate notification to logistics coordinator and update delivery schedules."
    },
    {
      id: 3,
      title: "Customer Communication",
      description: "Proactively communicate with affected customers",
      timeframe: "1 hour",
      assignee: "Customer Success",
      status: "ready",
      details: "Use template email to notify customers of potential delays and provide alternatives."
    },
    {
      id: 4,
      title: "Monitor and Report",
      description: "Set up monitoring and regular status updates",
      timeframe: "Ongoing",
      assignee: "Risk Manager",
      status: "ready",
      details: "Daily status reports to stakeholders until situation is resolved."
    }]

  },
  {
    id: 2,
    title: "Cybersecurity Incident Response",
    riskType: "Security",
    urgency: "Critical",
    estimatedTime: "1-2 hours",
    successRate: "92%",
    steps: [
    {
      id: 1,
      title: "Immediate Containment",
      description: "Isolate affected systems and prevent spread",
      timeframe: "15 minutes",
      assignee: "IT Security Team",
      status: "ready",
      details: "Disconnect affected systems from network and implement emergency firewall rules."
    },
    {
      id: 2,
      title: "Incident Assessment",
      description: "Assess scope and impact of the breach",
      timeframe: "30 minutes",
      assignee: "Security Analyst",
      status: "ready",
      details: "Document affected systems, potential data exposure, and attack vectors."
    },
    {
      id: 3,
      title: "Stakeholder Notification",
      description: "Notify relevant stakeholders and authorities",
      timeframe: "45 minutes",
      assignee: "Compliance Officer",
      status: "ready",
      details: "Follow regulatory notification requirements and internal escalation procedures."
    }]

  },
  {
    id: 3,
    title: "Regulatory Compliance Review",
    riskType: "Compliance",
    urgency: "Medium",
    estimatedTime: "1-2 weeks",
    successRate: "78%",
    steps: [
    {
      id: 1,
      title: "Compliance Gap Analysis",
      description: "Identify gaps in current compliance measures",
      timeframe: "3 days",
      assignee: "Compliance Team",
      status: "ready",
      details: "Review current policies against new regulatory requirements."
    },
    {
      id: 2,
      title: "Update Documentation",
      description: "Update policies and procedures as needed",
      timeframe: "1 week",
      assignee: "Legal Team",
      status: "ready",
      details: "Draft updated policies and circulate for review and approval."
    }]

  }];


  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical':return 'bg-red-100 text-red-800';
      case 'High':return 'bg-orange-100 text-orange-800';
      case 'Medium':return 'bg-yellow-100 text-yellow-800';
      default:return 'bg-green-100 text-green-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':return 'fa-check-circle text-green-500';
      case 'in-progress':return 'fa-clock text-blue-500';
      default:return 'fa-circle text-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-4" data-id="3w0q1axi2" data-path="components/MitigationPlaybook.js">
            <div className="flex items-center justify-between mb-6" data-id="x9n459osu" data-path="components/MitigationPlaybook.js">
                <h3 className="text-lg font-semibold text-gray-900" data-id="m8labullr" data-path="components/MitigationPlaybook.js">Mitigation Playbooks</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500" data-id="sldu1c29q" data-path="components/MitigationPlaybook.js">
                    <i className="fas fa-book" data-id="3ml3qujd8" data-path="components/MitigationPlaybook.js"></i>
                    <span data-id="0balvf1tn" data-path="components/MitigationPlaybook.js">Ready to deploy</span>
                </div>
            </div>

            <div className="space-y-4" data-id="88n3u3cfp" data-path="components/MitigationPlaybook.js">
                {playbooks.map((playbook) =>
        <div key={playbook.id} className="border border-gray-200 rounded-lg overflow-hidden" data-id="6oeotvkr8" data-path="components/MitigationPlaybook.js">
                        <div
            className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setSelectedPlaybook(selectedPlaybook === playbook.id ? null : playbook.id)} data-id="qfc3xj1s8" data-path="components/MitigationPlaybook.js">

                            <div className="flex items-center justify-between" data-id="pu1mp8kqi" data-path="components/MitigationPlaybook.js">
                                <div className="flex items-center space-x-4" data-id="wq5xxp9ou" data-path="components/MitigationPlaybook.js">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" data-id="masrfb55n" data-path="components/MitigationPlaybook.js">
                                        <i className="fas fa-play text-blue-600" data-id="rfbcq8380" data-path="components/MitigationPlaybook.js"></i>
                                    </div>
                                    <div data-id="mdx2dwamf" data-path="components/MitigationPlaybook.js">
                                        <h4 className="font-medium text-gray-900" data-id="5o6ryifvy" data-path="components/MitigationPlaybook.js">{playbook.title}</h4>
                                        <p className="text-sm text-gray-500" data-id="dd70radq3" data-path="components/MitigationPlaybook.js">{playbook.riskType} • {playbook.steps.length} steps</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4" data-id="j6w2ozrk5" data-path="components/MitigationPlaybook.js">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(playbook.urgency)}`} data-id="izes82xi1" data-path="components/MitigationPlaybook.js">
                                        {playbook.urgency}
                                    </span>
                                    <div className="text-right text-sm" data-id="l5np21t2a" data-path="components/MitigationPlaybook.js">
                                        <div className="text-gray-900 font-medium" data-id="j1j3kt8pk" data-path="components/MitigationPlaybook.js">{playbook.successRate}</div>
                                        <div className="text-gray-500" data-id="j08ladroo" data-path="components/MitigationPlaybook.js">Success Rate</div>
                                    </div>
                                    <i className={`fas fa-chevron-${selectedPlaybook === playbook.id ? 'up' : 'down'} text-gray-400`} data-id="sfgodsy2r" data-path="components/MitigationPlaybook.js"></i>
                                </div>
                            </div>
                        </div>

                        {selectedPlaybook === playbook.id &&
          <div className="border-t border-gray-200 p-4 bg-gray-50" data-id="4cxmuzsdj" data-path="components/MitigationPlaybook.js">
                                <div className="flex items-center justify-between mb-4" data-id="9go7aeawu" data-path="components/MitigationPlaybook.js">
                                    <div className="flex items-center space-x-4 text-sm text-gray-600" data-id="jtqy9q63i" data-path="components/MitigationPlaybook.js">
                                        <div className="flex items-center space-x-1" data-id="t2vvv3dg0" data-path="components/MitigationPlaybook.js">
                                            <i className="fas fa-clock" data-id="u19ifla0j" data-path="components/MitigationPlaybook.js"></i>
                                            <span data-id="z0iux62pg" data-path="components/MitigationPlaybook.js">Est. Time: {playbook.estimatedTime}</span>
                                        </div>
                                        <div className="flex items-center space-x-1" data-id="q3hje3cu5" data-path="components/MitigationPlaybook.js">
                                            <i className="fas fa-chart-line" data-id="ya0bxbxu3" data-path="components/MitigationPlaybook.js"></i>
                                            <span data-id="zvk7gbpfr" data-path="components/MitigationPlaybook.js">Success Rate: {playbook.successRate}</span>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm" data-id="ww87srnf7" data-path="components/MitigationPlaybook.js">
                                        <i className="fas fa-play mr-2" data-id="vcckwa76v" data-path="components/MitigationPlaybook.js"></i>
                                        Execute Playbook
                                    </button>
                                </div>

                                <div className="space-y-3" data-id="6bp6nn6s9" data-path="components/MitigationPlaybook.js">
                                    {playbook.steps.map((step, index) =>
              <div key={step.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden" data-id="t6km3lj6g" data-path="components/MitigationPlaybook.js">
                                            <div
                  className="p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)} data-id="l4egzqpr6" data-path="components/MitigationPlaybook.js">

                                                <div className="flex items-center justify-between" data-id="l1523cy57" data-path="components/MitigationPlaybook.js">
                                                    <div className="flex items-center space-x-3" data-id="26uqo7lcb" data-path="components/MitigationPlaybook.js">
                                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium" data-id="gd0b5n5li" data-path="components/MitigationPlaybook.js">
                                                            {index + 1}
                                                        </div>
                                                        <div data-id="urhnkqhj7" data-path="components/MitigationPlaybook.js">
                                                            <h5 className="font-medium text-gray-900" data-id="ivgdlz1a9" data-path="components/MitigationPlaybook.js">{step.title}</h5>
                                                            <p className="text-sm text-gray-500" data-id="cyvs213wy" data-path="components/MitigationPlaybook.js">{step.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-3" data-id="ixlmdy0us" data-path="components/MitigationPlaybook.js">
                                                        <div className="text-right text-xs text-gray-500" data-id="6fmbcwql1" data-path="components/MitigationPlaybook.js">
                                                            <div data-id="xexjtckum" data-path="components/MitigationPlaybook.js">{step.timeframe}</div>
                                                            <div data-id="fk8inezcz" data-path="components/MitigationPlaybook.js">{step.assignee}</div>
                                                        </div>
                                                        <i className={`fas ${getStatusIcon(step.status)}`} data-id="f7ba7kpt8" data-path="components/MitigationPlaybook.js"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {expandedStep === step.id &&
                <div className="border-t border-gray-200 p-3 bg-blue-50" data-id="n1p64cmyu" data-path="components/MitigationPlaybook.js">
                                                    <p className="text-sm text-gray-700" data-id="qa3pmxwoo" data-path="components/MitigationPlaybook.js">{step.details}</p>
                                                    <div className="mt-3 flex items-center space-x-2" data-id="ikbntwnx1" data-path="components/MitigationPlaybook.js">
                                                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors" data-id="cmeb33qbj" data-path="components/MitigationPlaybook.js">
                                                            Start Step
                                                        </button>
                                                        <button className="px-3 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700 transition-colors" data-id="sr0kxchzo" data-path="components/MitigationPlaybook.js">
                                                            Mark Complete
                                                        </button>
                                                    </div>
                                                </div>
                }
                                        </div>
              )}
                                </div>
                            </div>
          }
                    </div>
        )}
            </div>
        </div>);

}