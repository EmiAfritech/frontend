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
        className="border-2 border-blue-500 p-0.5 focus:text-blue-500"
        onChange={changeLanguage}
        style={{ 
          background: "url('https://countryflagsapi.com/png/gb') 8px center / 20px 15px no-repeat, url('https://countryflagsapi.com/png/fr') 8px center / 20px 15px no-repeat, white",
          paddingLeft: "30px",
        }}
      >
        <option
          value="en"
          style={{
            background: `url('https://countryflagsapi.com/png/gb') no-repeat left center`,
            backgroundSize: "20px 15px",
            paddingLeft: "25px",
          }}
        >
          English (UK)
        </option>
        <option
          value="fr"
          style={{
            background: `url('https://countryflagsapi.com/png/fr') no-repeat left center`,
            backgroundSize: "20px 15px",
            paddingLeft: "25px",
          }}
        >
          French (Fr)
        </option>
      </select>
    </div>
  );
}
