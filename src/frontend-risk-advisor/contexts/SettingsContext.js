// Settings Context for global state management
const { createContext, useContext, useState, useEffect } = React;

const SettingsContext = createContext();

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    notifications: {
      riskAlerts: true,
      dailyReports: true,
      maintenanceUpdates: false,
      securityAlerts: true
    },
    riskThresholds: {
      high: 15,
      medium: 8,
      low: 3
    },
    preferences: {
      autoRefresh: true,
      refreshInterval: 30,
      defaultView: 'dashboard',
      language: 'en'
    }
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('riskAdvisorSettings');
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings((prevSettings) => ({
          ...prevSettings,
          ...parsedSettings
        }));
      }
    } catch (error) {
      console.warn('Failed to load settings from localStorage:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem('riskAdvisorSettings', JSON.stringify(settings));
    } catch (error) {
      console.warn('Failed to save settings to localStorage:', error);
    }
  }, [settings, isLoaded]);

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const updateNotifications = (notifications) => {
    setSettings((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, ...notifications }
    }));
  };

  const updateRiskThresholds = (thresholds) => {
    setSettings((prev) => ({
      ...prev,
      riskThresholds: { ...prev.riskThresholds, ...thresholds }
    }));
  };

  const updatePreferences = (preferences) => {
    setSettings((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, ...preferences }
    }));
  };

  const resetSettings = () => {
    const defaultSettings = {
      notifications: {
        riskAlerts: true,
        dailyReports: true,
        maintenanceUpdates: false,
        securityAlerts: true
      },
      riskThresholds: {
        high: 15,
        medium: 8,
        low: 3
      },
      preferences: {
        autoRefresh: true,
        refreshInterval: 30,
        defaultView: 'dashboard',
        language: 'en'
      }
    };
    setSettings(defaultSettings);
  };

  return (
    <SettingsContext.Provider value={{
      settings,
      updateSettings,
      updateNotifications,
      updateRiskThresholds,
      updatePreferences,
      resetSettings,
      isLoaded
    }} data-id="wpeznuamn" data-path="contexts/SettingsContext.js">
      {children}
    </SettingsContext.Provider>);

}

function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}