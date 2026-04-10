import { Poll } from "./pollsAndSurvey.types";

export const polls: Poll[] = [
  {
    id: "poll1",
    question: "What should be Apapa’s top development priority in 2025?",
    options: [
      { id: 1, label: "Improved road infrastructure", percentage: 50 },
      { id: 2, label: "Enhanced waste management", percentage: 30 },
      { id: 3, label: "Upgraded public transport", percentage: 15 },
      { id: 4, label: "Expanded green spaces", percentage: 5 },
    ],
    ends: "25th March 2025",
    totalVotes: 200,
  },
  // you can add 4 more polls here...
  {
    id: "poll2",
    question: "Which sector needs the most funding this year?",
    options: [
      { id: 1, label: "Education", percentage: 40 },
      { id: 2, label: "Healthcare", percentage: 35 },
      { id: 3, label: "Security", percentage: 15 },
      { id: 4, label: "Recreation", percentage: 10 },
    ],
    ends: "30th April 2025",
    totalVotes: 150,
  },
  {
    id: "poll3",
    question: "Best way to reduce traffic congestion?",
    options: [
      { id: 1, label: "Carpool incentives", percentage: 45 },
      { id: 2, label: "Bike lanes", percentage: 25 },
      { id: 3, label: "More buses", percentage: 20 },
      { id: 4, label: "Flexible hours", percentage: 10 },
    ],
    ends: "15th May 2025",
    totalVotes: 180,
  },
  {
    id: "poll4",
    question: "Which community service matters most?",
    options: [
      { id: 1, label: "Neighborhood watch", percentage: 60 },
      { id: 2, label: "Senior support", percentage: 20 },
      { id: 3, label: "Youth mentoring", percentage: 15 },
      { id: 4, label: "Environmental clean", percentage: 5 },
    ],
    ends: "1st June 2025",
    totalVotes: 90,
  },
  {
    id: "poll5",
    question: "Preferred style of public lighting?",
    options: [
      { id: 1, label: "LED streetlights", percentage: 55 },
      { id: 2, label: "Solar lamps", percentage: 25 },
      { id: 3, label: "Decorative fixtures", percentage: 15 },
      { id: 4, label: "Smart lighting", percentage: 5 },
    ],
    ends: "10th June 2025",
    totalVotes: 120,
  },
];
