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
      >
        <option
          value="en"
          style={{
            background: `url('https://th.bing.com/th/id/OIP.YMOZI-eYNMGLsKvGOfDSLgHaDt?rs=1&pid=ImgDetMain') no-repeat left center`,
            backgroundSize: "20px 15px",
            paddingLeft: "25px",
          }}
        >
          English
        </option>
        <option
          value="fr"
          style={{
            background: `url('https://th.bing.com/th/id/R.98ed847d113e4f1899819db4904e9a3b?rik=Ar%2ftjBrb4NJl4Q&pid=ImgRaw&r=0') no-repeat left center`,
            backgroundSize: "20px 15px",
            paddingLeft: "25px",
          }}
        >
          French
        </option>
      </select>
    </div>
  );
}
