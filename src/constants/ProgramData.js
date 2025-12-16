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

export const PROJECTSDATA = [
  {
    id: 1,
    projectName: "AI for Good",
    description: `This project explores how AI can be used to support communities.
It focuses on using machine learning for social impact.
Students develop practical and ethical solutions.`,
    departmentName: "MSC Computer Science",
    year: 2024,
    reportFile: null, // upload later (PDF/DOC)
    members: [
      { name: "Student One" },
      { name: "Student Two" }
    ]
  },
  {
    id: 2,
    projectName: "Computer Science Fundamentals",
    description: `This project introduces core computer science concepts
including algorithms, programming, and system design.`,
    departmentName: "BCA",
    year: 2023,
    reportFile: null,
    members: [
      { name: "Student A" }
    ]
  },
  {
    id: 3,
    projectName: "Recent Innovations",
    description: `A showcase of recent student innovations and research
focused on real-world problem solving.`,
    departmentName: "MSC Computer Science",
    year: 2024,
    reportFile: null,
    members: [
      { name: "Student Alpha" },
      { name: "Student Beta" }
    ]
  },
  {
    id: 4,
    projectName: "Green Energy Solutions",
    description: `Research on renewable energy sources such as solar
and wind with a focus on sustainability.`,
    departmentName: "BSC Chemistry",
    year: 2022,
    reportFile: null,
    members: [
      { name: "Student Green" }
    ]
  },
  {
    id: 5,
    projectName: "Local History VR",
    description: `An immersive VR experience showcasing local history
and cultural heritage.`,
    departmentName: "BA English",
    year: 2023,
    reportFile: null,
    members: [
      { name: "Student VR" },
      { name: "Student Tech" }
    ]
  }
];

