import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        //login
        email: "Email",
        password: "Password",
        submit: "Submit",
        loading: "Loading",
        passwordReset: "Forgot your password?",
        registerQuestion: "New to Project Risk App?",
        register: "Register here",
        //sidebar
        overview: "Overview",
        newRisk: "New Risk",
        mitigateRisk: "Mitigate Risks",
        reviewRisk: "Review Risks",
        report: "Reporting",
        monitorRisk: "Monitor Risks",
        Users: "Employees",
        Departments:"Departments",
        //chart
        open: "OPEN",
        close: "CLOSE",
        mitigated:"MITIGATED",
        unmitigated: "UNMITIGATED",
        reviewed: "REVIEWED",
        unreviewed: "UNREVIEWED",
        monitored: "MONITORED",
        unmonitored: "UNMONITORED",
        years: "Years",
        riskLevel: "RISK LEVEL",
        allDepartment: "All Departments",
        riskStatus: "RISK STATUS",
        location: "LOCATION",
        category: "CATEGORY",
        riskResponse: "RISK RESPONSE",
        printChart: "Print Chart",
        owner: "OWNER"

      },
    },
    fr: {
      translation: {
        //login
        email: "Messagerie électronique",
        password: "Mot de Passe",
        submit: "Envoyer",
        loading: "Chargement",
        passwordReset: "Vous avez oublié votre mot de passe?",
        registerQuestion: "Nouveau sur Project Risk App ?",
        register: "Contactez-nous",
        //sidebar
        overview: "Aperçu",
        newRisk: "Nouveau risque",
        mitigateRisk: "Risques atténués",
        reviewRisk: "Risques examinés",
        report: "Rapports",
        monitorRisk: "Risques surveillés",
        Users:"Utilisateurs",
        Departments:"Départements",
        //chart
        open: "OUVERT",
        close: "FERMÉ",
        mitigated: "ATTÉNUÉ",
        unmitigated: "NON ATTÉNUÉ",
        reviewed: "RÉVISÉ",
        unreviewed: "NON REVU",
        monitored: "SURVEILLÉ ",
        unmonitored: "NON SURVEILLÉ",
        years: "Années",
        riskLevel: "NIVEAU DE RISQUE",
        allDepartment: "Tous les départements",
        riskStatus: "STATUT DE RISQUE",
        location: "EMPLACEMENT",
        category: "CATÉGORIE",
        riskResponse: "RÉPONSE AUX RISQUES",
        printChart: "Print Chart",
        owner: "PROPRIÉTAIRE"


      },
    },
  },
});

export default i18n;
