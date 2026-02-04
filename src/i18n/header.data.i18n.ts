// header.data.i18n.ts
import HomeIcon from "../../public/svg-component/HomeIcon";

type TFn = (key: string) => string;

export const getHeaderRoutes = (t: TFn) => [
  {
    id: 1,
    path: "/",
    title: t("Nav.home"),
    Icon: HomeIcon,
  },
  {
    id: 2,
    path: "/government",
    title: t("Nav.government"),
    bgTop: "/svgs/government-bg-top.svg",
    bgBottom: "/svgs/goverment-bg-bottom.svg",
    width: "624px",
    subTabs: [
      { id: 1, path: "/government/organizational-structure", title: t("Nav.organizationalStructure") },
      { id: 2, path: "/government/organizational-structure/council-manager", title: t("Nav.councilManagerProfile") },
      { id: 3, path: "/government/projects", title: t("Nav.projects") },
      { id: 5, path: "/government/projects", title: t("Nav.performanceDashboard") }
    ],
  },
  {
    id: 3,
    path: "/about-us",
    title: t("Nav.about"),
    bgTop: "/svgs/bg-tab-2-t.svg",
    bgBottom: "/svgs/bg-tab-2.svg",
    width: "528px",
    subTabs: [
      { id: 1, path: "/about-us", title: t("Nav.aboutUs") },
      { id: 2, path: "/about-us/history-of-apapa", title: t("Nav.historyOfApapa") },
      { id: 3, path: "/government/organizational-structure/executive-chairman", title: t("Nav.chairmanProfile") },
      { id: 4, path: "/about-us/departments-and-units", title: t("Nav.departmentsAndUnits") }
    ],
  },
  {
    id: 4,
    title: t("Nav.services"),
    path: "/services",
    bgTop: "/svgs/services-t.svg",
    bgBottom: "/svgs/services-b.svg",
    width: "760px",
    isRightPositioned: true,
    subTabs: [
      {
        id: 1,
        path: "https://lagosstate.gov.ng/services/housingandlands",
        title: t("Nav.housingServices"),
        target: "_blank",
      },
      {
        id: 2,
        path: "https://lagosstate.gov.ng/services/healthservices",
        title: t("Nav.healthServices"),
        target: "_blank",
      },
      {
        id: 3,
        path: "https://lagosstate.gov.ng/services/business_trade_commerce",
        title: t("Nav.businessPermits"),
        target: "_blank",
      },
      {
        id: 4,
        path: "https://lagosstate.gov.ng/services/tax",
        title: t("Nav.taxPayments"),
        target: "_blank",
      },
      {
        id: 5,
        path: "https://lagosstate.gov.ng/services/education",
        title: t("Nav.educationScholarships"),
        target: "_blank",
      },
      {
        id: 6,
        path: "https://lagosstate.gov.ng/services/disasters_emergencies",
        title: t("Nav.securityEmergency"),
        target: "_blank",
      },
      {
        id: 7,
        path: "https://lagosstate.gov.ng/services/governmentbenefits",
        title: t("Nav.eGovServices"),
        target: "_blank",
      },
    ],
  },
  {
    id: 5,
    path: "/community",
    title: t("Nav.community"),
    bgTop: "/svgs/event-img-t.svg",
    bgBottom: "/svgs/event-img-b.svg",
    width: "760px",
    isRightPositioned: true,
    subTabs: [
      { id: 1, path: "/community/events", title: t("Nav.events") },
      { id: 2, path: "/community/feedback-portal", title: t("Nav.feedbackPortal") },
      { id: 3, path: "/community/polls-and-surveys", title: t("Nav.pollsSurveys") },
      { id: 4, path: "/community/volunteer-opportunities", title: t("Nav.volunteerOpportunities") },
      { id: 5, path: "/community/faqs", title: t("Nav.faqs") },
      { id: 6, path: "/community/initiatives", title: t("Nav.initiatives") }
    ],
  },
];
