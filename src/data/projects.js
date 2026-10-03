import ecommerceImage from "../assets/projects/business-ecommerce.png";
import landingImage from "../assets/projects/business-landing.png";
import jarvisImage from "../assets/projects/jarvis-devflow.png";
import faqImage from "../assets/projects/ai-faq.png";
import studyBuddyImage from "../assets/projects/ai-studybuddy.png";

const projects = [
  {
    id: 1,
    title: "Business E-Commerce Website",
    category: "WEB DEVELOPMENT",
    description:
      "A modern and responsive e-commerce experience designed for local businesses to showcase products and connect with customers online.",
    image: ecommerceImage,
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "",
    githubUrl: "AI_FAQ_GITHUB_URL",
  },

  {
    id: 2,
    title: "Business Landing Website",
    category: "UI / WEB DEVELOPMENT",
    description:
      "A clean, conversion-focused business website designed to establish a professional online presence and generate customer enquiries.",
    image: landingImage,
    technologies: ["React", "Responsive Design", "UI/UX"],
    liveUrl: "",
    githubUrl: "AI_FAQ_GITHUB_URL",
  },

  {
    id: 3,
    title: "Jarvis DevFlow",
    category: "AI • SOFTWARE ENGINEERING",
    status: "Ongoing Project",
    description:
      "An AI-powered software development platform designed to assist and automate stages of the software development lifecycle, from requirements and planning to development, testing and deployment preparation.",
    image: jarvisImage,
    technologies: ["AI", "Python", "FastAPI", "React"],
    liveUrl: "",
    githubUrl: "https://github.com/jhatheem19-code/Jarvis-DevFlow",
  },

  {
  id: 4,
  title: "AI FAQ Assistant",
  category: "AI • FULL-STACK DEVELOPMENT",
  status: "Completed Project",
  description:
    "An AI-powered FAQ platform with intelligent question answering, FAQ management, semantic search, secure authentication, role-based access, and Google Gemini integration.",
  image: faqImage,
  technologies: ["React", "Node.js", "MongoDB", "Gemini AI"],
  liveUrl: "",
  githubUrl: "https://github.com/jhatheem19-code/AI-FAQ-Project-NM",
},

{
  id: 5,
  title: "AI StudyBuddy",
  category: "AI • EDTECH • FULL-STACK",
  status: "AI Project",
  description:
    "An AI-powered learning platform that transforms study materials into summaries, flashcards, quizzes, and personalized study plans with Gemini-powered assistance and intelligent content retrieval.",
  image: studyBuddyImage,
  technologies: ["React", "Node.js", "MongoDB", "Gemini AI"],
  liveUrl: "",
  githubUrl: "https://github.com/jhatheem19-code/AI-StudyBuddy-Project-NM",
}
];

export default projects;