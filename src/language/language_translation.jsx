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
        users: "Employees",
        departments:"Departments",
        riskApplication: "RISK APPLICATION",
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
        owner: "OWNER",

        //table
        firstName: "First Name",
        lastName: "Last Name",
        phoneNumber: "Phone Number",
        email: "Email",
        role: "Role",
        view: "Action",
        riskCOde: "Risk Code",
        riskName: "Risk Name",
        riskReview: "Risk Review",
        nextReviewDate: "Next Risk Review Date",
        dateReviewed: "Date Reviewed",
        riskReviewer: "Risk Reviewer",
        mitgatedRiskProbabillityLevel: "Mitigated Risk Probability Level",


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
        users:"Utilisateurs",
        departments:"Départements",
        riskApplication: "APPLICATION DU RISQUE",
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
        owner: "PROPRIÉTAIRE",

        //table
        firstName: "Prénom",
        lastName: "Nom",
        phoneNumber: "Numéro de téléphone",
        email: "Messagerie électronique",
        role: "Rôle",
        view: "Action",
        riskCOde: "Code de risque",
        riskName:"Nom du risque",
        riskReview:"Examen des risques",
        nextReviewDate: "Date du prochain examen des risques",
        dateReviewed: "Date de révision",
        riskReviewer: "Examinateur des risques",
        mitgatedRiskProbabillityLevel: ""



      },
    },
  },
});

export default i18n;
