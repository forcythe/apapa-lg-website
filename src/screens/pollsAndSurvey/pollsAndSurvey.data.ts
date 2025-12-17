import { Poll } from "./pollsAndSurvey.types";

export const polls: Poll[] = [
  {
    id: "poll1",
    question: "What should be Apapa’s top development priority in 2025?",
    options: [
      { label: "Improved road infrastructure", percentage: 50 },
      { label: "Enhanced waste management", percentage: 30 },
      { label: "Upgraded public transport", percentage: 15 },
      { label: "Expanded green spaces", percentage: 5 },
    ],
    ends: "25th March 2025",
    totalVotes: 200,
  },
  // you can add 4 more polls here...
  {
    id: "poll2",
    question: "Which sector needs the most funding this year?",
    options: [
      { label: "Education", percentage: 40 },
      { label: "Healthcare", percentage: 35 },
      { label: "Security", percentage: 15 },
      { label: "Recreation", percentage: 10 },
    ],
    ends: "30th April 2025",
    totalVotes: 150,
  },
  {
    id: "poll3",
    question: "Best way to reduce traffic congestion?",
    options: [
      { label: "Carpool incentives", percentage: 45 },
      { label: "Bike lanes", percentage: 25 },
      { label: "More buses", percentage: 20 },
      { label: "Flexible hours", percentage: 10 },
    ],
    ends: "15th May 2025",
    totalVotes: 180,
  },
  {
    id: "poll4",
    question: "Which community service matters most?",
    options: [
      { label: "Neighborhood watch", percentage: 60 },
      { label: "Senior support", percentage: 20 },
      { label: "Youth mentoring", percentage: 15 },
      { label: "Environmental clean", percentage: 5 },
    ],
    ends: "1st June 2025",
    totalVotes: 90,
  },
  {
    id: "poll5",
    question: "Preferred style of public lighting?",
    options: [
      { label: "LED streetlights", percentage: 55 },
      { label: "Solar lamps", percentage: 25 },
      { label: "Decorative fixtures", percentage: 15 },
      { label: "Smart lighting", percentage: 5 },
    ],
    ends: "10th June 2025",
    totalVotes: 120,
  },
];
