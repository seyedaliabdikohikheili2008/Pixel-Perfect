import i18next from "i18next";
import { initReactI18next } from "react-i18next";


import enHeader from "./locales/en/header/enHeader.json"
import enlanding from "./locales/en/landing/enLanding.json"


import faHeader from "./locales/fa/header/faHeader.json"
import falanding from "./locales/fa/landing/faLanding.json"


i18next.use(initReactI18next).init({
    resources:{
        en:{
            header: enHeader,
            landing: enlanding,
        },
        fa:{
            header: faHeader,
            landing: falanding,
        }
    },
    lng:"fa",
    interpolation: {
      escapeValue: false
    }
})

export default i18next;