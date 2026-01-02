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
    liveLink: "https://online-quiz-app.com",
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
    liveLink: "https://online-quiz-app.com",
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
    liveLink: "https://online-quiz-app.com",
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
    liveLink: "https://online-quiz-app.com",
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
    liveLink: "https://online-quiz-app.com",
    projectReport: "stress-academic-performance.pdf",
  },
  // Additional MSC Computer Science projects
  {
    id: 8,
    projectName: "Machine Learning Based Fraud Detection System",
    description:
      "An intelligent system using ML algorithms to detect fraudulent transactions in real-time.",
    departmentName: "MSC Computer Science",
    year: 2024,
    members: [
      { name: "Kiran V" },
      { name: "Priya M" },
      { name: "Suresh K" },
    ],
    liveLink: "https://fraud-detection-demo.com",
    projectReport: "fraud-detection-ml.pdf",
  },
  {
    id: 9,
    projectName: "Cloud-Based E-Learning Platform",
    description:
      "A scalable cloud platform for online education with video streaming and interactive assessments.",
    departmentName: "MSC Computer Science",
    year: 2023,
    members: [
      { name: "Deepak R" },
      { name: "Swathi N" },
    ],
    liveLink: "https://elearning-platform.com",
    projectReport: "cloud-elearning-platform.pdf",
  },
  // Additional BCA projects
  {
    id: 10,
    projectName: "E-Commerce Website with Payment Gateway",
    description:
      "A full-stack e-commerce solution with integrated payment processing and inventory management.",
    departmentName: "BCA",
    year: 2024,
    members: [
      { name: "Vikram S" },
      { name: "Kavya L" },
      { name: "Manoj P" },
    ],
    liveLink: "https://ecommerce-demo.com",
    projectReport: "ecommerce-website.pdf",
  },
  {
    id: 11,
    projectName: "Library Management System",
    description:
      "Digital library management system with book tracking, member management, and automated notifications.",
    departmentName: "BCA",
    year: 2023,
    members: [
      { name: "Nisha A" },
      { name: "Rajesh T" },
    ],
    liveLink: "https://library-management.com",
    projectReport: "library-management-system.pdf",
  },
  // Additional BSC Chemistry projects
  {
    id: 12,
    projectName: "Synthesis of Biodegradable Polymers",
    description:
      "Research on developing eco-friendly biodegradable polymers from renewable resources.",
    departmentName: "BSC Chemistry",
    year: 2024,
    members: [
      { name: "Sneha K" },
      { name: "Aditya M" },
      { name: "Lakshmi R" },
    ],
    liveLink: "https://polymer-research.com",
    projectReport: "biodegradable-polymers.pdf",
  },
  {
    id: 13,
    projectName: "Analysis of Heavy Metals in Soil Samples",
    description:
      "Comprehensive analysis of heavy metal contamination in agricultural soil samples using spectroscopy.",
    departmentName: "BSC Chemistry",
    year: 2023,
    members: [
      { name: "Ramesh V" },
      { name: "Geetha S" },
    ],
    liveLink: "https://soil-analysis.com",
    projectReport: "heavy-metals-analysis.pdf",
  },
  // Additional MSC Chemistry projects
  {
    id: 14,
    projectName: "Nanoparticle Synthesis and Characterization",
    description:
      "Advanced research on synthesizing metal nanoparticles and analyzing their properties using modern techniques.",
    departmentName: "MSC Chemistry",
    year: 2024,
    members: [
      { name: "Arun K" },
      { name: "Meera S" },
    ],
    liveLink: "https://nanoparticle-research.com",
    projectReport: "nanoparticle-synthesis.pdf",
  },
  {
    id: 15,
    projectName: "Pharmaceutical Drug Analysis",
    description:
      "Quality control and analysis of pharmaceutical compounds using chromatographic and spectroscopic methods.",
    departmentName: "MSC Chemistry",
    year: 2023,
    members: [
      { name: "Divya P" },
      { name: "Suresh N" },
      { name: "Anitha K" },
    ],
    liveLink: "https://pharma-analysis.com",
    projectReport: "pharmaceutical-analysis.pdf",
  },
  // Additional BA English projects
  {
    id: 16,
    projectName: "Shakespearean Themes in Modern Literature",
    description:
      "A comparative study of Shakespearean themes and their influence on contemporary literary works.",
    departmentName: "BA English",
    year: 2024,
    members: [
      { name: "Radha M" },
      { name: "Krishna S" },
    ],
    liveLink: "https://shakespeare-modern-lit.com",
    projectReport: "shakespearean-themes.pdf",
  },
  {
    id: 17,
    projectName: "Feminist Perspectives in Indian English Novels",
    description:
      "Critical analysis of feminist narratives and representations in Indian English literature.",
    departmentName: "BA English",
    year: 2023,
    members: [
      { name: "Saranya T" },
    ],
    liveLink: "https://feminist-literature.com",
    projectReport: "feminist-perspectives.pdf",
  },
  // Additional MA English projects
  {
    id: 18,
    projectName: "Ecocriticism in Contemporary Poetry",
    description:
      "An exploration of environmental themes and nature representation in modern poetic works.",
    departmentName: "MA English",
    year: 2024,
    members: [
      { name: "Anjali R" },
      { name: "Vishnu M" },
    ],
    liveLink: "https://ecocriticism-poetry.com",
    projectReport: "ecocriticism-poetry.pdf",
  },
  {
    id: 19,
    projectName: "Postmodern Narratives in Fiction",
    description:
      "Analysis of postmodern narrative techniques and their impact on contemporary fiction writing.",
    departmentName: "MA English",
    year: 2023,
    members: [
      { name: "Sreeja K" },
      { name: "Harish P" },
    ],
    liveLink: "https://postmodern-narratives.com",
    projectReport: "postmodern-narratives.pdf",
  },
  // Additional Psychology projects
  {
    id: 20,
    projectName: "Cognitive Development in Children",
    description:
      "A comprehensive study on cognitive development patterns and factors influencing child psychology.",
    departmentName: "Psychology",
    year: 2024,
    members: [
      { name: "Anil K" },
      { name: "Sindhu R" },
      { name: "Maya P" },
    ],
    liveLink: "https://cognitive-development.com",
    projectReport: "cognitive-development.pdf",
  },
  {
    id: 21,
    projectName: "Social Media Impact on Mental Health",
    description:
      "Research on the psychological effects of social media usage on adolescent mental health and well-being.",
    departmentName: "Psychology",
    year: 2023,
    members: [
      { name: "Ravi S" },
      { name: "Leela M" },
    ],
    liveLink: "https://social-media-psychology.com",
    projectReport: "social-media-mental-health.pdf",
  },
  // B.Com projects
  {
    id: 22,
    projectName: "Financial Analysis of Small Businesses",
    description:
      "A comprehensive financial analysis study focusing on profitability and sustainability of small-scale enterprises.",
    departmentName: "B.Com",
    year: 2024,
    members: [
      { name: "Ajay K" },
      { name: "Sunitha R" },
    ],
    liveLink: "https://financial-analysis.com",
    projectReport: "financial-analysis-businesses.pdf",
  },
  {
    id: 23,
    projectName: "Tax Planning and Management System",
    description:
      "A study on effective tax planning strategies and their implementation in business operations.",
    departmentName: "B.Com",
    year: 2023,
    members: [
      { name: "Rekha S" },
      { name: "Mohan T" },
      { name: "Latha P" },
    ],
    liveLink: "https://tax-planning-system.com",
    projectReport: "tax-planning-management.pdf",
  },
  {
    id: 24,
    projectName: "Digital Marketing Strategies for E-Commerce",
    description:
      "Research on modern digital marketing techniques and their effectiveness in e-commerce business growth.",
    departmentName: "B.Com",
    year: 2024,
    members: [
      { name: "Naveen M" },
      { name: "Shilpa K" },
    ],
    liveLink: "https://digital-marketing-ecommerce.com",
    projectReport: "digital-marketing-strategies.pdf",
  },
];


