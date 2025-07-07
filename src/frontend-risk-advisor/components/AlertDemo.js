function AlertDemo() {
  const [alerts, setAlerts] = React.useState([
  {
    id: 1,
    type: 'critical',
    title: 'Supplier Risk Spike Detected',
    message: 'Unusual 50% increase in supplier delay risk in the last 24 hours',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    department: 'Supply Chain',
    riskScore: 18,
    action: 'Initiate backup supplier protocol',
    isRead: false
  },
  {
    id: 2,
    type: 'high',
    title: 'Cybersecurity Vulnerability',
    message: 'New security patch required for critical systems',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    department: 'IT Security',
    riskScore: 16,
    action: 'Schedule maintenance window',
    isRead: false
  },
  {
    id: 3,
    type: 'medium',
    title: 'Compliance Deadline Approaching',
    message: 'Regulatory reporting due in 7 days',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    department: 'Compliance',
    riskScore: 12,
    action: 'Review submission status',
    isRead: true
  },
  {
    id: 4,
    type: 'low',
    title: 'Market Volatility Monitor',
    message: 'Slight increase in market volatility detected',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    department: 'Finance',
    riskScore: 8,
    action: 'Continue monitoring',
    isRead: true
  }]
  );

  const [filter, setFilter] = React.useState('all');

  const getAlertIcon = (type) => {
    switch (type) {
      case 'critical':return 'fa-exclamation-triangle text-red-500';
      case 'high':return 'fa-exclamation-circle text-orange-500';
      case 'medium':return 'fa-info-circle text-yellow-500';
      default:return 'fa-check-circle text-green-500';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical':return 'border-l-red-500 bg-red-50';
      case 'high':return 'border-l-orange-500 bg-orange-50';
      case 'medium':return 'border-l-yellow-500 bg-yellow-50';
      default:return 'border-l-green-500 bg-green-50';
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'critical':return 'bg-red-100 text-red-800';
      case 'high':return 'bg-orange-100 text-orange-800';
      case 'medium':return 'bg-yellow-100 text-yellow-800';
      default:return 'bg-green-100 text-green-800';
    }
  };

  const markAsRead = (alertId) => {
    setAlerts(alerts.map((alert) =>
    alert.id === alertId ? { ...alert, isRead: true } : alert
    ));
  };

  const dismissAlert = (alertId) => {
    setAlerts(alerts.filter((alert) => alert.id !== alertId));
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !alert.isRead;
    return alert.type === filter;
  });

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  const filterOptions = [
  { value: 'all', label: 'All Alerts', count: alerts.length },
  { value: 'unread', label: 'Unread', count: alerts.filter((a) => !a.isRead).length },
  { value: 'critical', label: 'Critical', count: alerts.filter((a) => a.type === 'critical').length },
  { value: 'high', label: 'High', count: alerts.filter((a) => a.type === 'high').length }];


  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-4" data-id="gattdxe6z" data-path="components/AlertDemo.js">
            <div className="flex items-center justify-between mb-6" data-id="zx1c4lr36" data-path="components/AlertDemo.js">
                <h3 className="text-lg font-semibold text-gray-900" data-id="zk4v3iij8" data-path="components/AlertDemo.js">Real-Time Risk Alerts</h3>
                <div className="flex items-center space-x-2" data-id="nr4r3rm6w" data-path="components/AlertDemo.js">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" data-id="qnyc69xma" data-path="components/AlertDemo.js"></div>
                    <span className="text-sm text-green-600" data-id="u91xnhv4c" data-path="components/AlertDemo.js">Live Monitoring</span>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-1 mb-6 p-1 bg-gray-100 rounded-lg" data-id="ucml2ls0i" data-path="components/AlertDemo.js">
                {filterOptions.map((option) =>
        <button
          key={option.value}
          onClick={() => setFilter(option.value)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          filter === option.value ?
          'bg-white text-gray-900 shadow-sm' :
          'text-gray-600 hover:text-gray-900'}`
          } data-id="yvshtjc7t" data-path="components/AlertDemo.js">

                        <span data-id="o6tlep98b" data-path="components/AlertDemo.js">{option.label}</span>
                        <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs" data-id="m5y7jl2ul" data-path="components/AlertDemo.js">
                            {option.count}
                        </span>
                    </button>
        )}
            </div>

            {/* Alerts List */}
            <div className="space-y-3" data-id="klrf6jboy" data-path="components/AlertDemo.js">
                {filteredAlerts.length === 0 ?
        <div className="text-center py-8 text-gray-500" data-id="c36ssrhru" data-path="components/AlertDemo.js">
                        <i className="fas fa-check-circle text-4xl mb-3" data-id="2jote3lj6" data-path="components/AlertDemo.js"></i>
                        <p data-id="el1pwhnfx" data-path="components/AlertDemo.js">No alerts matching your filter</p>
                    </div> :

        filteredAlerts.map((alert) =>
        <div
          key={alert.id}
          className={`border-l-4 rounded-lg p-4 ${getAlertColor(alert.type)} ${
          !alert.isRead ? 'border-opacity-100' : 'border-opacity-50 opacity-75'}`
          } data-id="lzfonaa58" data-path="components/AlertDemo.js">

                            <div className="flex items-start justify-between" data-id="mcbk6em35" data-path="components/AlertDemo.js">
                                <div className="flex items-start space-x-3" data-id="ubpj5cvgt" data-path="components/AlertDemo.js">
                                    <i className={`fas ${getAlertIcon(alert.type)} text-lg mt-1`} data-id="wscl9xr6u" data-path="components/AlertDemo.js"></i>
                                    <div className="flex-1" data-id="i6ljlf45t" data-path="components/AlertDemo.js">
                                        <div className="flex items-center space-x-2 mb-1" data-id="mu7wmaz59" data-path="components/AlertDemo.js">
                                            <h4 className="font-medium text-gray-900" data-id="qy7rwx7z5" data-path="components/AlertDemo.js">{alert.title}</h4>
                                            {!alert.isRead &&
                  <span className="w-2 h-2 bg-blue-500 rounded-full" data-id="s5w57axbn" data-path="components/AlertDemo.js"></span>
                  }
                                        </div>
                                        <p className="text-sm text-gray-700 mb-2" data-id="t5bbcuegf" data-path="components/AlertDemo.js">{alert.message}</p>
                                        <div className="flex items-center space-x-4 text-xs text-gray-500" data-id="qno74j22b" data-path="components/AlertDemo.js">
                                            <span data-id="acyr7xym1" data-path="components/AlertDemo.js">{alert.department}</span>
                                            <span data-id="cis89c2t8" data-path="components/AlertDemo.js">Risk Score: {alert.riskScore}</span>
                                            <span data-id="ev59xltci" data-path="components/AlertDemo.js">{getTimeAgo(alert.timestamp)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2" data-id="an2wutw6y" data-path="components/AlertDemo.js">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(alert.type)}`} data-id="c5u7oy5ef" data-path="components/AlertDemo.js">
                                        {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                                    </span>
                                    <div className="flex items-center space-x-1" data-id="s87ueg2vi" data-path="components/AlertDemo.js">
                                        {!alert.isRead &&
                <button
                  onClick={() => markAsRead(alert.id)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Mark as read" data-id="uumnw5ir6" data-path="components/AlertDemo.js">

                                                <i className="fas fa-check text-sm" data-id="rrs6dmgqd" data-path="components/AlertDemo.js"></i>
                                            </button>
                }
                                        <button
                  onClick={() => dismissAlert(alert.id)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Dismiss" data-id="es3mvome6" data-path="components/AlertDemo.js">

                                            <i className="fas fa-times text-sm" data-id="8vz5173mn" data-path="components/AlertDemo.js"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-3 pt-3 border-t border-gray-200" data-id="54df6x6y3" data-path="components/AlertDemo.js">
                                <div className="flex items-center justify-between" data-id="04s8exqyz" data-path="components/AlertDemo.js">
                                    <span className="text-sm text-gray-600" data-id="f796smjun" data-path="components/AlertDemo.js">
                                        <i className="fas fa-lightbulb mr-1" data-id="r82gq9azd" data-path="components/AlertDemo.js"></i>
                                        Recommended Action: {alert.action}
                                    </span>
                                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors" data-id="iv0e5w2xj" data-path="components/AlertDemo.js">
                                        Take Action
                                    </button>
                                </div>
                            </div>
                        </div>
        )
        }
            </div>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200" data-id="r3ta2vjl4" data-path="components/AlertDemo.js">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center" data-id="fhs75qsrm" data-path="components/AlertDemo.js">
                    <div className="p-3 bg-red-50 rounded-lg" data-id="rh0kcw0r5" data-path="components/AlertDemo.js">
                        <div className="text-2xl font-bold text-red-600" data-id="23wg7wjq3" data-path="components/AlertDemo.js">
                            {alerts.filter((a) => a.type === 'critical').length}
                        </div>
                        <div className="text-sm text-red-700" data-id="i8gw2bekc" data-path="components/AlertDemo.js">Critical</div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg" data-id="yze3zd7so" data-path="components/AlertDemo.js">
                        <div className="text-2xl font-bold text-orange-600" data-id="5anqrjcna" data-path="components/AlertDemo.js">
                            {alerts.filter((a) => a.type === 'high').length}
                        </div>
                        <div className="text-sm text-orange-700" data-id="0qdsqfjxb" data-path="components/AlertDemo.js">High</div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg" data-id="k31y1m296" data-path="components/AlertDemo.js">
                        <div className="text-2xl font-bold text-yellow-600" data-id="4pwwwglbl" data-path="components/AlertDemo.js">
                            {alerts.filter((a) => a.type === 'medium').length}
                        </div>
                        <div className="text-sm text-yellow-700" data-id="4teldqqpm" data-path="components/AlertDemo.js">Medium</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg" data-id="jkz76xrn5" data-path="components/AlertDemo.js">
                        <div className="text-2xl font-bold text-green-600" data-id="6caflms1v" data-path="components/AlertDemo.js">
                            {alerts.filter((a) => a.type === 'low').length}
                        </div>
                        <div className="text-sm text-green-700" data-id="cgkwi2p4o" data-path="components/AlertDemo.js">Low</div>
                    </div>
                </div>
            </div>
        </div>);

}