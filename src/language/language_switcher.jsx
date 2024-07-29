import React from "react";
import { useTranslation } from "react-i18next";

export function LanguageButton() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const lng = event.target.value;
    if (lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div>
      <select
        className="border-2 border-blue-500 p-0.5  focus:text-blue-500"
        onChange={changeLanguage}>
        <option value="en">English (UK)</option>
        <option value="fr">French (Fr)</option>
      </select>
    </div>
  );
}
