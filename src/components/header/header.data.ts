import HomeIcon from "../../../public/svg-component/HomeIcon";

export const headerRoutes = [
  {
    id: 1,
    path: "/",
    title: "Home",
    Icon: HomeIcon,
  },
  {
    id: 2,
    path: "/government",
    title: "Government",
    bgTop: "/svgs/government-bg-top.svg",
    bgBottom: "/svgs/goverment-bg-bottom.svg",
    width: "624px",
    subTabs: [
      {
        id: 1,
        path: "/government/organizational-structure",
        title: "Organizational Structure",
      },
      {
        id: 2,
        path: "/government/organizational-structure/council-manager",
        title: "Council Manager’s Profile",
      },
      {
        id: 3,
        path: "/government/projects",
        title: "Projects",
      },
      // {
      //   id: 4,
      //   path: "/government/budget-and-financial-report",
      //   title: "Budget and Financial Report",
      // },
      {
        id: 5,
        path: "/government/projects",
        title: "Performance Dashboard",
      },
    ],
  },
  {
    id: 3,
    path: "/about-us",
    title: "About",
    bgTop: "/svgs/bg-tab-2-t.svg",
    bgBottom: "/svgs/bg-tab-2.svg",
    width: "528px",
    subTabs: [
      {
        id: 1,
        path: "/about-us",
        title: "About Us",
      },
      {
        id: 2,
        path: "/about-us/history-of-apapa",
        title: "History of Apapa",
      },
      {
        id: 3,
        path: "/government/organizational-structure/executive-chairman",
        title: "Chairman’s Profile",
      },
      {
        id: 4,
        path: "/about-us/departments-and-units",
        title: "Departments and Units",
      },
    ],
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    bgTop: "/svgs/services-t.svg",
    bgBottom: "/svgs/services-b.svg",
    width: "760px",
    isRightPositioned: true,
    subTabs: [
      {
        id: 1,
        path: "/services/housing-services",
        title: "Housing Services",
      },
      {
        id: 2,
        path: "/services/health-services",
        title: "Health Services",
      },
      {
        id: 3,
        path: "/services/business-permits-and-licenses ",
        title: "Business Permits and Licenses ",
      },
      {
        id: 4,
        path: "/services/tax-payments",
        title: "Tax Payments",
      },
      {
        id: 5,
        path: "/services/education-and-scholarships",
        title: "Education and Scholarships",
      },

      {
        id: 6,
        path: "/services/security-and-emergency",
        title: "Security and Emergency",
      },
      {
        id: 7,
        path: "/services/e-government-services",
        title: "E-Government Services",
      },
    ],
  },
  {
    id: 5,
    path: "/community",
    title: "Community",
    bgTop: "/svgs/event-img-t.svg",
    bgBottom: "/svgs/event-img-b.svg",
    width: "760px",
    isRightPositioned: true,
    subTabs: [
      {
        id: 1,
        path: "/community/events",
        title: "Events",
      },
      {
        id: 2,
        path: "/community/feedback-portal",
        title: "Feedback Portal",
      },
      {
        id: 3,
        path: "/community/polls-and-surveys",
        title: "Polls and Surveys",
      },
      {
        id: 4,
        path: "/community/volunteer-opportunities",
        title: "Volunteer Opportunities",
      },
      {
        id: 5,
        path: "/community/faqs",
        title: "FAQs",
      },
      {
        id: 6,
        path: "/community/initiatives",
        title: "Initiatives",
      },
      // {
      //   id: 7,
      //   path: "/community/innovation-hub",
      //   title: "Innovation Hub",
      // },
    ],
  },
];
