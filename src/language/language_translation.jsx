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
        email: "Email",
        password: "Password",
        submit: "Submit",
        loading: "Loading",
        passwordReset: "Forgot your password?",
        registerQuestion: "New to Project Risk App?",
        register: "Register here",
      },
    },
    fr: {
      translation: {
        email: "Messagerie électronique",
        password: "Mot de Passe",
        submit: "Envoyer",
        loading: "Chargement",
        passwordReset: "Vous avez oublié votre mot de passe?",
        registerQuestion: "Nouveau sur Project Risk App ?",
        register: "Contactez-nous",
      },
    },
  },
});

export default i18n;
