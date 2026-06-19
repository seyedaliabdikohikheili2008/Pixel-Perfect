import i18next from "i18next";
import { initReactI18next } from "react-i18next";


import enHeader from "./locales/en/header/enHeader.json"
import enlanding from "./locales/en/landing/enLanding.json"
import enFooter from "./locales/en/footer/enFooter.json"
import enCourses from "./locales/en/course-list/enCourseList.json"
import enTeachers from "./locales/en/teacehr-list/enTeacherList.json"
import enCourseDetail from "./locales/en/course-detail/enCourseDetail.json"
import enNewsDetail from "./locales/en/newsDetail/enNewsDetail.json"



import faHeader from "./locales/fa/header/faHeader.json"
import falanding from "./locales/fa/landing/faLanding.json"
import faFooter from "./locales/fa/footer/faFooter.json"
import faCourses from "./locales/fa/course-list/faCourseList.json"
import faTeachers from "./locales/fa/teacher-list/faTeacherList.json"
import faCourseDetail from "./locales/fa/course-detail/faCourseDetail.json"
import faNewsDetail from "./locales/fa/newsDetail/faNewsDetail.json"

i18next.use(initReactI18next).init({
    resources:{
        en:{
            header: enHeader,
            landing: enlanding,
            footer: enFooter,
            courses: enCourses,
            teacherList: enTeachers,
            courseDetail:enCourseDetail,
            newsDetail:enNewsDetail
        },
        fa:{
            header: faHeader,
            landing: falanding,
            footer: faFooter,
            courses: faCourses,
            teacherList: faTeachers,
            courseDetail:faCourseDetail,
            newsDetail:faNewsDetail
        }
    },
    lng:"fa",
    interpolation: {
      escapeValue: false
    }
})

export default i18next;