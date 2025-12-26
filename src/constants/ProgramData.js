// //programData.js
// export const projects = [
//   { id: 1, title: "AI for Good", category: "Student Scaam", tag: "Ompaltavy Scientt", color: "#C7D2FE" },
//   { id: 2, title: "Computer Science", category: "Educteds", tag: "Onisre Seer Ssline", color: "#F0D4D4" },
//   { id: 3, title: "Recent Projects", category: "Ready Hiy your tasks", tag: "Onicsil Ion Peztins", color: "#D9E1FF" },
//   { id: 4, title: "AI for Good", category: "Student Scaim", tag: "Dmisom Ibn Moeilim", color: "#D4E0FF" },
//   { id: 5, title: "Green Energy Solutions", category: "Environmental Studies", tag: "Omisn Riral Soilim", color: "#D6E9F0" },
//   { id: 6, title: "Local History VR", category: "Studects", tag: "Onielpon", color: "#FCE4EC" },
//   { id: 7, title: "AI for Good", category: "Student Scaim", tag: "Oolilet at Etfeun", color: "#F7D8D8" },
//   { id: 8, title: "Green Energy Solutions", category: "Studects", tag: "Onleipan", color: "#FBE4F2" },
//   { id: 9, title: "Local History VR", category: "Student Scaaim", tag: "Orleidan Frenorn", color: "#F6DDE3" }
// ];

import { MdOutlineLaptopWindows, MdLaptopChromebook } from "react-icons/md";
import { GrTest, GrDocumentTest } from "react-icons/gr";
import { RiEnglishInput } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { FaCalculator } from "react-icons/fa";

export const DEPARTMENTS = [
  { departmentName: "MSC Computer Science", icon: MdOutlineLaptopWindows },
  { departmentName: "BCA", icon: MdLaptopChromebook },
  { departmentName: "BSC Chemistry", icon: GrTest },
  { departmentName: "MSC Chemistry", icon: GrDocumentTest },
  { departmentName: "BA English", icon: RiEnglishInput },
  { departmentName: "MA English", icon: RiEnglishInput },
  { departmentName: "Psychology", icon: GiBrain },
  { departmentName: "B.Com", icon: FaCalculator },
];


///////////////////////////////////

// export const PROJECTSDATA = [
//   {
//     id: 1,
//     projectName: "AI for Good",
//     description: `This project explores how AI can be used to support communities.
// It focuses on using machine learning for social impact.
// Students develop practical and ethical solutions.`,
//     departmentName: "MSC Computer Science",
//     year: 2024,
//     reportFile: null, // upload later (PDF/DOC)
//     members: [
//       { name: "Student One" },
//       { name: "Student Two" }
//     ]
//   },
//   {
//     id: 2,
//     projectName: "Computer Science Fundamentals",
//     description: `This project introduces core computer science concepts
// including algorithms, programming, and system design.`,
//     departmentName: "BCA",
//     year: 2023,
//     reportFile: null,
//     members: [
//       { name: "Student A" }
//     ]
//   },
//   {
//     id: 3,
//     projectName: "Recent Innovations",
//     description: `A showcase of recent student innovations and research
// focused on real-world problem solving.`,
//     departmentName: "MSC Computer Science",
//     year: 2024,
//     reportFile: null,
//     members: [
//       { name: "Student Alpha" },
//       { name: "Student Beta" }
//     ]
//   },
//   {
//     id: 4,
//     projectName: "Green Energy Solutions",
//     description: `Research on renewable energy sources such as solar
// and wind with a focus on sustainability.`,
//     departmentName: "BSC Chemistry",
//     year: 2022,
//     reportFile: null,
//     members: [
//       { name: "Student Green" }
//     ]
//   },
//   {
//     id: 5,
//     projectName: "Local History VR",
//     description: `An immersive VR experience showcasing local history
// and cultural heritage.`,
//     departmentName: "BA English",
//     year: 2023,
//     reportFile: null,
//     members: [
//       { name: "Student VR" },
//       { name: "Student Tech" }
//     ]
//   }
// ];

export const PROJECTSDATA = [
  {
    id: 1,
    projectName: "Student Management System",
    description:
      "A web-based system to manage student records, attendance, and performance.",
    departmentName: "MSC Computer Science",
    year: 2024,
    members: [
      { name: "Arjun S" },
      { name: "Meera K" },
    ],
    liveLink: "https://student-management-demo.com",
    projectReport: "student-management-report.pdf",
  },
  {
    id: 2,
    projectName: "Online Quiz Application",
    description:
      "An interactive quiz platform with timer, scoring, and admin dashboard.",
    departmentName: "BCA",
    year: 2023,
    members: [
      { name: "Rahul P" },
      { name: "Sneha R" },
      { name: "Akhil M" },
    ],
    liveLink: "https://online-quiz-app.com",
    projectReport: "quiz-app-report.pdf",
  },
  {
    id: 3,
    projectName: "Water Quality Analysis",
    description:
      "Chemical analysis of water samples to assess purity and contamination.",
    departmentName: "BSC Chemistry",
    year: 2022,
    members: [
      { name: "Anjali S" },
      { name: "Divya N" },
    ],
    liveLink: "",
    projectReport: "water-quality-analysis.pdf",
  },
  {
    id: 4,
    projectName: "Green Chemistry Practices",
    description:
      "Study on eco-friendly chemical processes and sustainable lab practices.",
    departmentName: "MSC Chemistry",
    year: 2024,
    members: [
      { name: "Vishnu R" },
      { name: "Lakshmi P" },
    ],
    liveLink: "",
    projectReport: "green-chemistry-report.pdf",
  },
  {
    id: 5,
    projectName: "Postcolonial Themes in Literature",
    description:
      "An analysis of postcolonial themes in modern English literature.",
    departmentName: "BA English",
    year: 2023,
    members: [
      { name: "Aparna T" },
    ],
    liveLink: "",
    projectReport: "postcolonial-literature.pdf",
  },
  {
    id: 6,
    projectName: "Gender Studies in Contemporary Poetry",
    description:
      "Research on gender representation in contemporary English poetry.",
    departmentName: "MA English",
    year: 2024,
    members: [
      { name: "Neethu S" },
      { name: "Fathima A" },
    ],
    liveLink: "",
    projectReport: "gender-studies-poetry.pdf",
  },
  {
    id: 7,
    projectName: "Stress and Academic Performance",
    description:
      "A psychological study on stress levels and academic outcomes among students.",
    departmentName: "Psychology",
    year: 2023,
    members: [
      { name: "Rohit K" },
      { name: "Anu M" },
    ],
    liveLink: "",
    projectReport: "stress-academic-performance.pdf",
  },
];


