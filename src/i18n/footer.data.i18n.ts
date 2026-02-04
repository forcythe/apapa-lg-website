type TFn = (key: string) => string;

export type FooterLinkItem = {
  id: number;
  path: string;
  title: string;
  target?: string;
};

export type FooterLinksMap = Record<string, FooterLinkItem[]>;

export const getFooterLinks = (t: TFn): FooterLinksMap => ({
  [t("Footer.sections.apapaLg")]: [
    {
      id: 1,
      path: "/government/organizational-structure",
      title: t("Nav.organizationalStructure"),
    },
    {
      id: 2,
      path: "/government/organizational-structure/council-manager",
      title: t("Nav.councilManagerProfile"),
    },
    {
      id: 3,
      path: "/government/projects",
      title: t("Nav.projects"),
    },
  ],
  [t("Footer.sections.aboutUs")]: [
    {
      id: 1,
      path: "/about-us",
      title: t("Nav.aboutUs"),
    },
    {
      id: 2,
      path: "/about-us/history-of-apapa",
      title: t("Nav.historyOfApapa"),
    },
    {
      id: 3,
      path: "/government/organizational-structure/executive-chairman",
      title: t("Nav.chairmanProfile"),
    },
    {
      id: 4,
      path: "/about-us/departments-and-units",
      title: t("Nav.departmentsAndUnits"),
    },
  ],
  [t("Footer.sections.services")]: [
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
  [t("Footer.sections.community")]: [
    {
      id: 1,
      path: "/community/events",
      title: t("Nav.events"),
    },
    {
      id: 2,
      path: "/community/feedback-portal",
      title: t("Nav.feedbackPortal"),
    },
    {
      id: 3,
      path: "/community/polls-and-surveys",
      title: t("Nav.pollsSurveys"),
    },
    {
      id: 4,
      path: "/community/volunteer-opportunities",
      title: t("Nav.volunteerOpportunities"),
    },
    {
      id: 5,
      path: "/community/faqs",
      title: t("Nav.faqs"),
    },
    {
      id: 6,
      path: "/community/initiatives",
      title: t("Nav.initiatives"),
    },
  ],
});

export const socialLinks = [
  {
    id: 1,
    type: "LinkedIn",
    link: "/",
    Icon: "/svgs/linkedin.svg",
  },
  {
    id: 2,
    type: "X",
    link: "/",
    Icon: "/svgs/twitter.t.svg",
  },
  {
    id: 3,
    type: "Youtube",
    link: "/",
    Icon: "/svgs/youtube.svg",
  },
  {
    id: 4,
    type: "Instagram",
    link: "https://www.instagram.com/apapalocalgov/",
    Icon: "/svgs/instagram.svg",
  },

  {
    id: 5,
    type: "Facebook",
    Icon: "/svgs/facebook.svg",
    link: "https://web.facebook.com/Apapalocalgovernmentarea",
  },
];
