import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  tech: string[];
  description: string;
  image: string;
  aiHint: string;
  github?: string;
  demo?: string;
  link?: string;
};

export type SkillCategory = {
  category: string;
  technologies: string[];
  icon: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  tasks: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export type NavItem = {
  name: string;
  link: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export const userProfile = {
  name: "Piyush Patil",
  title: "MERN STACK(NEXTJS) | DEVOPS | DATA ENGINEER | DATA ANALYSIS | GENAI | MACHINE LEARNING",
  intro: "A versatile IT Engineering student passionate about building intelligent, scalable solutions. I have hands-on experience developing full-stack applications with the MERN stack and Next.js, and a strong command of DevOps practices for automating CI/CD pipelines. My skills extend to data engineering, where I build ETL workflows, and I leverage data analysis and machine learning to extract insights. I am also proficient in integrating Generative AI to create innovative, automated, and data-driven user experiences.",
  email: "piyushpatil922004@gmail.com",
  phone: "7057241350",
  location: "India",
};

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/piyush-patil-867a30250", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/Piyush0930", icon: "Github" },
];

export const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    technologies: ["JavaScript (ES6+)", "Python", "Java", "SQL"],
    icon: "Code",
  },
  {
    category: "Frontend",
    technologies: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
    icon: "Laptop",
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Firebase"],
    icon: "Cpu",
  },
  {
    category: "Databases",
    technologies: ["MongoDB", "MongoDB Atlas", "MySQL", "Mongoose", "Firebase Firestore", "Azure SQL Database"],
    icon: "Database",
  },
  {
    category: "DevOps & Cloud",
    technologies: ["Git", "GitHub", "Docker", "Jenkins", "Kubernetes", "Ansible", "Terraform", "AWS", "Microsoft Azure"],
    icon: "Cloud",
  },
  {
    category: "Big Data & ETL",
    technologies: ["Apache Spark", "PySpark", "Azure Data Factory", "Azure Synapse Analytics", "Azure Databricks"],
    icon: "BarChart2",
  },
  {
    category: "GenAI & Automation",
    technologies: ["AI API Integration", "OpenAI", "LangChain", "Chatbots", "Content Generation"],
    icon: "Bot",
  },
  {
    category: "Other Tools",
    technologies: ["Postman", "VS Code", "APIs", "Web Scraping"],
    icon: "Wrench",
  },
];

export const projects: Project[] = [
  {
    title: "Smart Property Rental Platform",
    tech: ["MERN", "Tailwind CSS", "Jenkins", "Docker", "Kubernetes", "AWS", "Azure", "Power BI"],
    description: "Airbnb-like platform for property listing, booking, price prediction, CI/CD pipeline, and analytics dashboards.",
    image: "https://placehold.co/600x400.png",
    aiHint: "modern apartment interior",
    github: "https://github.com/Piyush0930",
    demo: "#",
  },
  {
    title: "Hybrid Movie Booking System",
    tech: ["Next.js", "MongoDB"],
    description: "Online/offline mini-theater booking system with authentication and seat reservation.",
    image: "https://placehold.co/600x400.png",
    aiHint: "movie theater screen",
    github: "https://github.com/Piyush0930",
    demo: "#",
  },
  {
    title: "Personal Blog Website",
    tech: ["Next.js 14", "MongoDB", "NextAuth"],
    description: "Full dashboard to create, edit, and publish blogs.",
    image: "https://placehold.co/600x400.png",
    aiHint: "minimalist writing desk",
    github: "https://github.com/Piyush0930",
    demo: "#",
  },
  {
    title: "Social Travel Journey Platform",
    tech: ["MERN"],
    description: "Post travel updates step-by-step with live route tracking.",
    image: "https://placehold.co/600x400.png",
    aiHint: "world map travel",
    github: "https://github.com/Piyush0930",
    demo: "#",
  },
  {
    title: "DevOps Automation Project",
    tech: ["Terraform", "Ansible", "Jenkins", "Docker", "Kubernetes", "AWS"],
    description: "Automated deployment pipeline for cloud infrastructure.",
    image: "https://placehold.co/600x400.png",
    aiHint: "server room abstract",
    github: "https://github.com/Piyush0930",
    demo: "#",
  },
  {
    title: "Data Engineering Pipeline",
    tech: ["Azure ADF", "Databricks", "Synapse", "Power BI"],
    description: "End-to-end ETL process with reporting dashboards.",
    image: "https://placehold.co/600x400.png",
    aiHint: "data pipeline visualization",
    github: "https://github.com/Piyush0930",
    demo: "#",
  },
];

export const experiences: Experience[] = [
    {
      title: "Cloud & Technical Content Intern",
      company: "Cloud Plus Plus Services, Pune",
      period: "Apr 2024 – Jul 2024",
      tasks: [
        "Trained on AWS (EC2, S3, IAM) and created technical content.",
        "Contributed to AWS-based micro-projects and team tasks.",
      ],
    },
    {
      title: "EY GDS Next Gen Internship",
      company: "EY",
      period: "Feb 2025 – Mar 2025",
      tasks: [
        "Full Stack Web Development with MERN stack.",
        "Included mentorship, master classes, and project work.",
      ],
    },
];

export const education: Education[] = [
  {
    degree: "BE in Information Technology",
    institution: "Zeal College of Engineering, Pune",
    period: "Expected Apr 2026",
    details: "CGPA: 7.0",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Chhatrapati Shivaji Junior Science College, Jalgaon",
    period: "2022",
    details: "Percentage: 80.60%",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Orion English Medium School, Jalgaon",
    period: "2020",
    details: "Percentage: 78.67%",
  },
];
