export function SettingsAi() {
  const {
    settings,
    updateNotifications,
    updateRiskThresholds,
    updatePreferences,
    resetSettings,
    isLoaded
  } = useSettings();

  const { t, changeLanguage, currentLanguage } = useLanguage();

  const [activeSection, setActiveSection] = useState('general');
  const [resetConfirm, setResetConfirm] = useState(false);

  const sections = [
  { id: 'general', name: t('generalSettings'), icon: 'fa-cog' },
  { id: 'notifications', name: t('notifications'), icon: 'fa-bell' },
  { id: 'risk-thresholds', name: t('riskThresholds'), icon: 'fa-exclamation-triangle' },
  { id: 'preferences', name: t('preferences'), icon: 'fa-sliders-h' }];


  const handleNotificationChange = (type, value) => {
    updateNotifications({ [type]: value });
  };

  const handleThresholdChange = (level, value) => {
    const numValue = parseInt(value);
    updateRiskThresholds({ [level]: numValue });
  };

  const handlePreferenceChange = (key, value) => {
    updatePreferences({ [key]: value });
  };

  const handleLanguageChange = (langCode) => {
    // Update both the language context and settings
    changeLanguage(langCode);
    handlePreferenceChange('language', langCode);
  };

  const handleResetSettings = () => {
    if (resetConfirm) {
      resetSettings();
      changeLanguage('en'); // Reset language to English
      setResetConfirm(false);
    } else {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 3000);
    }
  };

  const formatNotificationLabel = (key) => {
    // Use translation keys for notification labels
    const labelMap = {
      riskAlerts: t('riskAlerts'),
      dailyReports: t('dailyReports'),
      maintenanceUpdates: t('maintenanceUpdates'),
      securityAlerts: t('securityAlerts')
    };
    return labelMap[key] || key;
  };

  // Update language context when settings change
  React.useEffect(() => {
    if (settings.preferences.language !== currentLanguage) {
      changeLanguage(settings.preferences.language);
    }
  }, [settings.preferences.language, currentLanguage, changeLanguage]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" data-id="nadod912x" data-path="pages/Settings.js">
        <div className="text-center" data-id="lw37w1y63" data-path="pages/Settings.js">
          <i className="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4" data-id="51qb9iu83" data-path="pages/Settings.js"></i>
          <p className="text-gray-600" data-id="mum82af4x" data-path="pages/Settings.js">{t('loadingSettings')}</p>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-gray-50 py-8" data-id="v261bw42g" data-path="pages/Settings.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="99y2se5z9" data-path="pages/Settings.js">
        <div className="mb-8" data-id="xmk903n6e" data-path="pages/Settings.js">
          <h1 className="text-3xl font-bold text-gray-900" data-id="r0kvj8hax" data-path="pages/Settings.js">{t('settingsTitle')}</h1>
          <p className="text-gray-600 mt-2" data-id="1vv383mn9" data-path="pages/Settings.js">{t('settingsSubtitle')}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8" data-id="ve6wuj1su" data-path="pages/Settings.js">
          {/* Settings Navigation */}
          <div className="lg:w-1/4" data-id="y12xd3pe0" data-path="pages/Settings.js">
            <div className="bg-white rounded-lg shadow-sm p-4" data-id="c9xcvdltb" data-path="pages/Settings.js">
              <nav className="space-y-2" data-id="ot1vtftzv" data-path="pages/Settings.js">
                {sections.map((section) =>
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === section.id ?
                  'bg-blue-100 text-blue-700' :
                  'text-gray-600 hover:bg-gray-50'}`
                  } data-id="93k9jeh9w" data-path="pages/Settings.js">

                    <i className={`fas ${section.icon} mr-3`} data-id="clwmtj9jy" data-path="pages/Settings.js"></i>
                    {section.name}
                  </button>
                )}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:w-3/4" data-id="cm1absfab" data-path="pages/Settings.js">
            <div className="bg-white rounded-lg shadow-sm p-6" data-id="82pekslkk" data-path="pages/Settings.js">
              
              {/* General Settings */}
              {activeSection === 'general' &&
              <div data-id="g9nlhfs6h" data-path="pages/Settings.js">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6" data-id="l3qj3nodh" data-path="pages/Settings.js">{t('generalSettings')}</h2>
                  
                  <div className="space-y-6" data-id="2dz99q2ix" data-path="pages/Settings.js">
                    <div data-id="uhl7nfkv9" data-path="pages/Settings.js">
                      <label className="block text-sm font-medium text-gray-700 mb-2" data-id="8q0v0d05s" data-path="pages/Settings.js">
                        {t('language')}
                      </label>
                      <select
                      value={currentLanguage}
                      onChange={(e) => handleLanguageChange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-id="elsi2cxar" data-path="pages/Settings.js">

                        <option value="en" data-id="8ftzsubmx" data-path="pages/Settings.js">{t('english')}</option>
                        <option value="es" data-id="nknbw1q4f" data-path="pages/Settings.js">{t('spanish')}</option>
                        <option value="fr" data-id="u9ts3ajl3" data-path="pages/Settings.js">{t('french')}</option>
                        <option value="de" data-id="l27mofwda" data-path="pages/Settings.js">{t('german')}</option>
                      </select>
                    </div>

                    <div data-id="2eo6k0dk8" data-path="pages/Settings.js">
                      <label className="block text-sm font-medium text-gray-700 mb-2" data-id="b5nauwa4o" data-path="pages/Settings.js">
                        {t('defaultView')}
                      </label>
                      <select
                      value={settings.preferences.defaultView}
                      onChange={(e) => handlePreferenceChange('defaultView', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-id="y56ngvx20" data-path="pages/Settings.js">

                        <option value="dashboard" data-id="2pn49gr23" data-path="pages/Settings.js">{t('analyticsDashboard')}</option>
                        <option value="chat" data-id="6oh8vjcdg" data-path="pages/Settings.js">{t('chatAssistant')}</option>
                      </select>
                    </div>
                  </div>
                </div>
              }

              {/* Notifications Settings */}
              {activeSection === 'notifications' &&
              <div data-id="yfo2m5cep" data-path="pages/Settings.js">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6" data-id="wfokvt07x" data-path="pages/Settings.js">{t('notifications')}</h2>
                  
                  <div className="space-y-4" data-id="ibl8ur7h7" data-path="pages/Settings.js">
                    {Object.entries(settings.notifications).map(([key, value]) =>
                  <div key={key} className="flex items-center justify-between py-3" data-id="78175zvre" data-path="pages/Settings.js">
                        <div data-id="du0fq1ph2" data-path="pages/Settings.js">
                          <label className="text-sm font-medium text-gray-700" data-id="s72z3f5xi" data-path="pages/Settings.js">
                            {formatNotificationLabel(key)}
                          </label>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer" data-id="yu4vh7vfc" data-path="pages/Settings.js">
                          <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => handleNotificationChange(key, e.target.checked)}
                        className="sr-only peer" data-id="63h5mpugz" data-path="pages/Settings.js" />

                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" data-id="ix31fipad" data-path="pages/Settings.js"></div>
                        </label>
                      </div>
                  )}
                  </div>
                </div>
              }

              {/* Risk Thresholds Settings */}
              {activeSection === 'risk-thresholds' &&
              <div data-id="0xq4tygng" data-path="pages/Settings.js">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6" data-id="kg5rvokip" data-path="pages/Settings.js">{t('riskThresholds')}</h2>
                  <p className="text-sm text-gray-600 mb-6" data-id="xybkdr0gh" data-path="pages/Settings.js">
                    {t('riskThresholdsDesc')}
                  </p>
                  
                  <div className="space-y-6" data-id="mok9jlc7q" data-path="pages/Settings.js">
                    <div data-id="x3b4be3q5" data-path="pages/Settings.js">
                      <label className="block text-sm font-medium text-gray-700 mb-2" data-id="mmxlztpiu" data-path="pages/Settings.js">
                        {t('highRiskThreshold')} ({settings.riskThresholds.high}-20)
                      </label>
                      <input
                      type="range"
                      min="10"
                      max="20"
                      value={settings.riskThresholds.high}
                      onChange={(e) => handleThresholdChange('high', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" data-id="qdcqoo21v" data-path="pages/Settings.js" />

                      <div className="flex justify-between text-xs text-gray-500 mt-1" data-id="c76m87qrv" data-path="pages/Settings.js">
                        <span data-id="tqu148nf2" data-path="pages/Settings.js">10</span>
                        <span className="font-medium text-red-600" data-id="k2ojdfpt8" data-path="pages/Settings.js">{settings.riskThresholds.high}</span>
                        <span data-id="d6wk6jk9c" data-path="pages/Settings.js">20</span>
                      </div>
                    </div>

                    <div data-id="bxpsmv1n3" data-path="pages/Settings.js">
                      <label className="block text-sm font-medium text-gray-700 mb-2" data-id="my5dc6uwk" data-path="pages/Settings.js">
                        {t('mediumRiskThreshold')} ({settings.riskThresholds.medium}-{settings.riskThresholds.high - 1})
                      </label>
                      <input
                      type="range"
                      min="4"
                      max={settings.riskThresholds.high - 1}
                      value={settings.riskThresholds.medium}
                      onChange={(e) => handleThresholdChange('medium', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" data-id="g2vvoee63" data-path="pages/Settings.js" />

                      <div className="flex justify-between text-xs text-gray-500 mt-1" data-id="3244wtl7d" data-path="pages/Settings.js">
                        <span data-id="8jmmjgqs2" data-path="pages/Settings.js">4</span>
                        <span className="font-medium text-yellow-600" data-id="wfsudc2ll" data-path="pages/Settings.js">{settings.riskThresholds.medium}</span>
                        <span data-id="mnd54zqpv" data-path="pages/Settings.js">{settings.riskThresholds.high - 1}</span>
                      </div>
                    </div>

                    <div data-id="ndi4mj6s3" data-path="pages/Settings.js">
                      <label className="block text-sm font-medium text-gray-700 mb-2" data-id="g7327an6p" data-path="pages/Settings.js">
                        {t('lowRiskThreshold')} (0-{settings.riskThresholds.low})
                      </label>
                      <input
                      type="range"
                      min="1"
                      max={settings.riskThresholds.medium - 1}
                      value={settings.riskThresholds.low}
                      onChange={(e) => handleThresholdChange('low', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" data-id="0ohf8t1dm" data-path="pages/Settings.js" />

                      <div className="flex justify-between text-xs text-gray-500 mt-1" data-id="f1q4jk6e3" data-path="pages/Settings.js">
                        <span data-id="mj6horb6i" data-path="pages/Settings.js">0</span>
                        <span className="font-medium text-green-600" data-id="qh76etve8" data-path="pages/Settings.js">{settings.riskThresholds.low}</span>
                        <span data-id="ywajqjvs7" data-path="pages/Settings.js">{settings.riskThresholds.medium - 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {/* Preferences Settings */}
              {activeSection === 'preferences' &&
              <div data-id="1idbxpdqx" data-path="pages/Settings.js">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6" data-id="m0qiunx0j" data-path="pages/Settings.js">{t('preferences')}</h2>
                  
                  <div className="space-y-6" data-id="etbfyr81n" data-path="pages/Settings.js">
                    <div className="flex items-center justify-between" data-id="xii0zxf3h" data-path="pages/Settings.js">
                      <div data-id="k58ybmqjp" data-path="pages/Settings.js">
                        <label className="text-sm font-medium text-gray-700" data-id="jf4k47gu5" data-path="pages/Settings.js">
                          {t('autoRefreshData')}
                        </label>
                        <p className="text-xs text-gray-500" data-id="trz9wt1mw" data-path="pages/Settings.js">
                          {t('autoRefreshDesc')}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer" data-id="4frhsamsa" data-path="pages/Settings.js">
                        <input
                        type="checkbox"
                        checked={settings.preferences.autoRefresh}
                        onChange={(e) => handlePreferenceChange('autoRefresh', e.target.checked)}
                        className="sr-only peer" data-id="cpj2i22op" data-path="pages/Settings.js" />

                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" data-id="tkqpok5uo" data-path="pages/Settings.js"></div>
                      </label>
                    </div>

                    {settings.preferences.autoRefresh &&
                  <div data-id="0zy6uzbw8" data-path="pages/Settings.js">
                        <label className="block text-sm font-medium text-gray-700 mb-2" data-id="ug3s0nzon" data-path="pages/Settings.js">
                          {t('refreshInterval')}
                        </label>
                        <select
                      value={settings.preferences.refreshInterval}
                      onChange={(e) => handlePreferenceChange('refreshInterval', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-id="092rn3jkg" data-path="pages/Settings.js">

                          <option value={15} data-id="8ze4w4lq3" data-path="pages/Settings.js">{t('seconds15')}</option>
                          <option value={30} data-id="o0l7plhm6" data-path="pages/Settings.js">{t('seconds30')}</option>
                          <option value={60} data-id="veswduk0p" data-path="pages/Settings.js">{t('minute1')}</option>
                          <option value={300} data-id="il57hvmdt" data-path="pages/Settings.js">{t('minutes5')}</option>
                        </select>
                      </div>
                  }
                  </div>
                </div>
              }

              {/* Reset Settings Button */}
              <div className="mt-8 pt-6 border-t border-gray-200" data-id="4wk7zaej5" data-path="pages/Settings.js">
                <button
                  onClick={handleResetSettings}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  resetConfirm ?
                  'bg-red-600 text-white hover:bg-red-700' :
                  'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
                  } data-id="nlbcvapde" data-path="pages/Settings.js">

                  <i className={`fas ${resetConfirm ? 'fa-exclamation-triangle' : 'fa-undo'} mr-2`} data-id="eqpkc8lon" data-path="pages/Settings.js"></i>
                  {resetConfirm ? t('clickToConfirm') : t('resetToDefault')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}