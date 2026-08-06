import AEIcon from "../../../../../public/svg-component/AEIcon";
import BlogIcon from "../../../../../public/svg-component/BlogIcon";
import BPLIcon from "../../../../../public/svg-component/BPLIcon";
import FAQIcon from "../../../../../public/svg-component/FAQIcon";
import GFIcon from "../../../../../public/svg-component/GFIcon";
import HCSIcon from "../../../../../public/svg-component/HCSIcon";
import HousingServiceIcon from "../../../../../public/svg-component/HousingServiceIcon";
import LPIcon from "../../../../../public/svg-component/LPIcon";
import PSIcon from "../../../../../public/svg-component/PSIcon";
import SEIcon from "../../../../../public/svg-component/SEIcon";
import TAIcon from "../../../../../public/svg-component/TAIcon";
import VOIcon from "../../../../../public/svg-component/VOIcon";

export const quickLinks = [
  {
    id: 1,
    title: "housing.title",
    description: "housing.description",
    icon: HousingServiceIcon,
    btnTitle: "housing.btn",
    href: "https://lagosstate.gov.ng/services/housingandlands",
  },
  {
    id: 2,
    title: "healthcare.title",
    description: "healthcare.description",
    icon: HCSIcon,
    btnTitle: "healthcare.btn",
    href: "https://lagosstate.gov.ng/services/healthservices",
  },
  // {
  //   id: 3,
  //   title: "port.title",
  //   description: "port.description",
  //   icon: PSIcon,
  //   btnTitle: "port.btn",
  //   href: "/",
  // },
  {
    id: 4,
    title: "events.title",
    description: "events.description",
    icon: AEIcon,
    btnTitle: "events.btn",
    href: "/community/events",
  },
  // {
  //   id: 5,
  //   title: "Track Applications",
  //   description:
  //     "Stay updated on the status of your service requests, permits, and complaints in real time.",
  //   icon: TAIcon,
  //   btnTitle: "Track Application",
  //   href: "/",
  // },
  {
    id: 6,
    title: "feedback.title",
    description: "feedback.description",
    icon: GFIcon,
    btnTitle: "feedback.btn",
    href: "/community/feedback-portal",
  },
  {
    id: 7,
    title: "levyPayment.title",
    description: "levyPayment.description",
    icon: LPIcon,
    btnTitle: "levyPayment.btn",
    href: "https://lagosstate.gov.ng/services/tax",
  },
  {
    id: 8,
    title: "business.title",
    description: "business.description",
    icon: BPLIcon,
    btnTitle: "business.btn",
    href: "https://lagosstate.gov.ng/services/business_trade_commerce",
  },
  {
    id: 9,
    title: "blogs.title",
    description: "blogs.description",
    icon: BlogIcon,
    btnTitle: "blogs.btn",
    href: "/blog",
  },
  {
    id: 10,
    title: "emergency.title",
    description: "emergency.description",
    icon: SEIcon,
    btnTitle: "emergency.btn",
    href: "https://lagosstate.gov.ng/services/disasters_emergencies",
  },
  {
    id: 11,
    title: "volunteer.title",
    description: "volunteer.description",
    icon: VOIcon,
    btnTitle: "volunteer.btn",
    href: "/community/volunteer-opportunities",
  },
  {
    id: 12,
    title: "faq.title",
    description: "faq.description",
    icon: FAQIcon,
    btnTitle: "faq.btn",
    href: "/community/faqs",
  },
];
