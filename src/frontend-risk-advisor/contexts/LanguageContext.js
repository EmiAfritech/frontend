// Language Context for translations
const { createContext, useContext, useState, useEffect } = React;

const LanguageContext = createContext();

// Translation dictionary
const translations = {
  en: {
    // Navigation
    chatAssistant: "Chat Assistant",
    analyticsDashboard: "Analytics Dashboard",
    settings: "Settings",
    aiOnline: "AI Online",

    // Settings Page
    settingsTitle: "Settings",
    settingsSubtitle: "Customize your Risk Advisor AI experience",
    generalSettings: "General Settings",
    appearance: "Appearance",
    notifications: "Notifications",
    riskThresholds: "Risk Thresholds",
    preferences: "Preferences",

    // General Settings
    language: "Language",
    defaultView: "Default View",

    // Appearance
    theme: "Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",

    // Notifications
    riskAlerts: "Risk Alerts",
    dailyReports: "Daily Reports",
    maintenanceUpdates: "Maintenance Updates",
    securityAlerts: "Security Alerts",

    // Risk Thresholds
    riskThresholdsDesc: "Set the risk score thresholds for different risk levels (0-20 scale)",
    highRiskThreshold: "High Risk Threshold",
    mediumRiskThreshold: "Medium Risk Threshold",
    lowRiskThreshold: "Low Risk Threshold",

    // Preferences
    autoRefreshData: "Auto Refresh Data",
    autoRefreshDesc: "Automatically refresh risk data at regular intervals",
    refreshInterval: "Refresh Interval (seconds)",

    // Common
    loading: "Loading...",
    loadingSettings: "Loading settings...",
    resetToDefault: "Reset to Default Settings",
    clickToConfirm: "Click again to confirm reset",

    // Risk Levels
    critical: "Critical",
    high: "High",
    medium: "Medium",
    low: "Low",

    // Time intervals
    seconds15: "15 seconds",
    seconds30: "30 seconds",
    minute1: "1 minute",
    minutes5: "5 minutes",

    // Languages
    english: "English",
    spanish: "Spanish",
    french: "French",
    german: "German"
  },
  es: {
    // Navigation
    chatAssistant: "Asistente de Chat",
    analyticsDashboard: "Panel de Análisis",
    settings: "Configuración",
    aiOnline: "IA En Línea",

    // Settings Page
    settingsTitle: "Configuración",
    settingsSubtitle: "Personaliza tu experiencia con Risk Advisor AI",
    generalSettings: "Configuración General",
    appearance: "Apariencia",
    notifications: "Notificaciones",
    riskThresholds: "Umbrales de Riesgo",
    preferences: "Preferencias",

    // General Settings
    language: "Idioma",
    defaultView: "Vista Predeterminada",

    // Appearance
    theme: "Tema",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",

    // Notifications
    riskAlerts: "Alertas de Riesgo",
    dailyReports: "Informes Diarios",
    maintenanceUpdates: "Actualizaciones de Mantenimiento",
    securityAlerts: "Alertas de Seguridad",

    // Risk Thresholds
    riskThresholdsDesc: "Establece los umbrales de puntuación de riesgo para diferentes niveles de riesgo (escala 0-20)",
    highRiskThreshold: "Umbral de Riesgo Alto",
    mediumRiskThreshold: "Umbral de Riesgo Medio",
    lowRiskThreshold: "Umbral de Riesgo Bajo",

    // Preferences
    autoRefreshData: "Actualización Automática de Datos",
    autoRefreshDesc: "Actualizar automáticamente los datos de riesgo a intervalos regulares",
    refreshInterval: "Intervalo de Actualización (segundos)",

    // Common
    loading: "Cargando...",
    loadingSettings: "Cargando configuración...",
    resetToDefault: "Restablecer a Configuración Predeterminada",
    clickToConfirm: "Haz clic de nuevo para confirmar el restablecimiento",

    // Risk Levels
    critical: "Crítico",
    high: "Alto",
    medium: "Medio",
    low: "Bajo",

    // Time intervals
    seconds15: "15 segundos",
    seconds30: "30 segundos",
    minute1: "1 minuto",
    minutes5: "5 minutos",

    // Languages
    english: "Inglés",
    spanish: "Español",
    french: "Francés",
    german: "Alemán"
  },
  fr: {
    // Navigation
    chatAssistant: "Assistant de Chat",
    analyticsDashboard: "Tableau de Bord Analytique",
    settings: "Paramètres",
    aiOnline: "IA En Ligne",

    // Settings Page
    settingsTitle: "Paramètres",
    settingsSubtitle: "Personnalisez votre expérience Risk Advisor AI",
    generalSettings: "Paramètres Généraux",
    appearance: "Apparence",
    notifications: "Notifications",
    riskThresholds: "Seuils de Risque",
    preferences: "Préférences",

    // General Settings
    language: "Langue",
    defaultView: "Vue par Défaut",

    // Appearance
    theme: "Thème",
    lightMode: "Mode Clair",
    darkMode: "Mode Sombre",

    // Notifications
    riskAlerts: "Alertes de Risque",
    dailyReports: "Rapports Quotidiens",
    maintenanceUpdates: "Mises à Jour de Maintenance",
    securityAlerts: "Alertes de Sécurité",

    // Risk Thresholds
    riskThresholdsDesc: "Définir les seuils de score de risque pour différents niveaux de risque (échelle 0-20)",
    highRiskThreshold: "Seuil de Risque Élevé",
    mediumRiskThreshold: "Seuil de Risque Moyen",
    lowRiskThreshold: "Seuil de Risque Faible",

    // Preferences
    autoRefreshData: "Actualisation Automatique des Données",
    autoRefreshDesc: "Actualiser automatiquement les données de risque à intervalles réguliers",
    refreshInterval: "Intervalle d'Actualisation (secondes)",

    // Common
    loading: "Chargement...",
    loadingSettings: "Chargement des paramètres...",
    resetToDefault: "Réinitialiser aux Paramètres par Défaut",
    clickToConfirm: "Cliquez à nouveau pour confirmer la réinitialisation",

    // Risk Levels
    critical: "Critique",
    high: "Élevé",
    medium: "Moyen",
    low: "Faible",

    // Time intervals
    seconds15: "15 secondes",
    seconds30: "30 secondes",
    minute1: "1 minute",
    minutes5: "5 minutes",

    // Languages
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
    german: "Allemand"
  },
  de: {
    // Navigation
    chatAssistant: "Chat-Assistent",
    analyticsDashboard: "Analyse-Dashboard",
    settings: "Einstellungen",
    aiOnline: "KI Online",

    // Settings Page
    settingsTitle: "Einstellungen",
    settingsSubtitle: "Passen Sie Ihre Risk Advisor AI-Erfahrung an",
    generalSettings: "Allgemeine Einstellungen",
    appearance: "Erscheinungsbild",
    notifications: "Benachrichtigungen",
    riskThresholds: "Risikoschwellen",
    preferences: "Präferenzen",

    // General Settings
    language: "Sprache",
    defaultView: "Standardansicht",

    // Appearance
    theme: "Design",
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",

    // Notifications
    riskAlerts: "Risikowarnungen",
    dailyReports: "Tägliche Berichte",
    maintenanceUpdates: "Wartungsupdates",
    securityAlerts: "Sicherheitswarnungen",

    // Risk Thresholds
    riskThresholdsDesc: "Legen Sie die Risikobewertungsschwellen für verschiedene Risikostufen fest (0-20 Skala)",
    highRiskThreshold: "Hohe Risikoschwelle",
    mediumRiskThreshold: "Mittlere Risikoschwelle",
    lowRiskThreshold: "Niedrige Risikoschwelle",

    // Preferences
    autoRefreshData: "Automatische Datenaktualisierung",
    autoRefreshDesc: "Risikodaten automatisch in regelmäßigen Abständen aktualisieren",
    refreshInterval: "Aktualisierungsintervall (Sekunden)",

    // Common
    loading: "Laden...",
    loadingSettings: "Einstellungen werden geladen...",
    resetToDefault: "Auf Standardeinstellungen zurücksetzen",
    clickToConfirm: "Klicken Sie erneut, um das Zurücksetzen zu bestätigen",

    // Risk Levels
    critical: "Kritisch",
    high: "Hoch",
    medium: "Mittel",
    low: "Niedrig",

    // Time intervals
    seconds15: "15 Sekunden",
    seconds30: "30 Sekunden",
    minute1: "1 Minute",
    minutes5: "5 Minuten",

    // Languages
    english: "Englisch",
    spanish: "Spanisch",
    french: "Französisch",
    german: "Deutsch"
  }
};

function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations)
  };

  return (
    <LanguageContext.Provider value={value} data-id="5b6v3pw78" data-path="contexts/LanguageContext.js">
      {children}
    </LanguageContext.Provider>);

}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}