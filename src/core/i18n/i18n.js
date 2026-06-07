import i18next from "i18next";
import { initReactI18next } from "react-i18next";


import enHeader from "./locales/en/header/enHeader.json"
import enlanding from "./locales/en/landing/enLanding.json"
import enFooter from "./locales/en/footer/enFooter.json"


import faHeader from "./locales/fa/header/faHeader.json"
import falanding from "./locales/fa/landing/faLanding.json"
import faFooter from "./locales/fa/footer/faFooter.json"


i18next.use(initReactI18next).init({
    resources:{
        en:{
            header: enHeader,
            landing: enlanding,
            footer: enFooter,
        },
        fa:{
            header: faHeader,
            landing: falanding,
            footer: faFooter,
        }
    },
    lng:"fa",
    interpolation: {
      escapeValue: false
    }
})

export default i18next;