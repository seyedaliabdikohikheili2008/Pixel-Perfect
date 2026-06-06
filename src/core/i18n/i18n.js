import i18next from "i18next";
import { initReactI18next } from "react-i18next";


import enHeader from "./locales/en/header/enHeader.json"


import faHeader from "./locales/fa/header/faHeader.json"

i18next.use(initReactI18next).init({
    resources:{
        en:{
            header: enHeader,
        },
        fa:{
            header: faHeader,
        }
    },
    lng:"fa",
    interpolation: {
      escapeValue: false
    }
})

export default i18next;