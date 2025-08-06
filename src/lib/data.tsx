import React from "react";

export type Project = {
  title: string;
  tech: string[];
  description: string;
  github?: string;
  demo?: string;
  link?: string;
  content: React.ReactNode;
};

export type SkillCategory = {
  category: string;
  technologies: string[];
  icon: string;
};

export type Experience = {
  title:string;
  company: string;
  period: string;
  tasks: string[];
  content: React.ReactNode;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  details: string;
  content: React.ReactNode;
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
    description: "An Airbnb-like platform with advanced features.",
    github: "https://github.com/Piyush0930",
    demo: "#",
    content: <p>This project is a comprehensive property rental platform similar to Airbnb. It allows users to list their properties, and renters to book them. Key features include a price prediction model to help property owners set competitive rates, a complete CI/CD pipeline for automated testing and deployment, and detailed analytics dashboards for business insights.</p>
  },
  {
    title: "Hybrid Movie Booking System",
    tech: ["Next.js", "MongoDB"],
    description: "A flexible booking system for mini-theaters.",
    github: "https://github.com/Piyush0930",
    demo: "#",
    content: <p>A unique movie booking system that supports both online and offline ticket purchasing for a mini-theater. It features secure user authentication, real-time seat reservation, and a streamlined checkout process. The system is built with Next.js for a fast and modern user experience.</p>
  },
  {
    title: "Personal Blog Website",
    tech: ["Next.js 14", "MongoDB", "NextAuth"],
    description: "A full-featured platform for creating and managing a blog.",
    github: "https://github.com/Piyush0930",
    demo: "#",
    content: <p>This project is a complete blogging platform that provides a full dashboard for authors to create, edit, and publish their articles. It includes user authentication with NextAuth, a rich text editor for writing posts, and a responsive design for a great reading experience on any device.</p>
  },
  {
    title: "Social Travel Journey Platform",
    tech: ["MERN"],
    description: "Share your travel experiences step-by-step.",
    github: "https://github.com/Piyush0930",
    demo: "#",
    content: <p>This platform allows users to document and share their travel journeys in real-time. Users can post updates at each step of their trip, including photos and notes. A key feature is live route tracking, which displays the user's journey on a map as they travel.</p>
  },
  {
    title: "DevOps Automation Project",
    tech: ["Terraform", "Ansible", "Jenkins", "Docker", "Kubernetes", "AWS"],
    description: "An automated deployment pipeline for cloud infrastructure.",
    github: "https://github.com/Piyush0930",
    demo: "#",
    content: <p>This project demonstrates a fully automated deployment pipeline for cloud infrastructure using a combination of powerful DevOps tools. Terraform is used for infrastructure as code, Ansible for configuration management, and Jenkins for continuous integration and deployment. The application is containerized with Docker and orchestrated with Kubernetes on AWS.</p>
  },
  {
    title: "Data Engineering Pipeline",
    tech: ["Azure ADF", "Databricks", "Synapse", "Power BI"],
    description: "An end-to-end ETL process with reporting dashboards.",
    github: "https://github.com/Piyush0930",
    demo: "#",
    content: <p>This project showcases an end-to-end data engineering pipeline built on Microsoft Azure. Azure Data Factory is used to orchestrate the ETL (Extract, Transform, Load) process, with data transformation logic running on Azure Databricks. The processed data is then stored in Azure Synapse Analytics and visualized through interactive reporting dashboards in Power BI.</p>
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
      content: <p>During my internship at Cloud Plus Plus Services, I gained hands-on experience with core AWS services, including EC2 for virtual servers, S3 for object storage, and IAM for managing user access. My responsibilities included creating technical documentation and tutorials to help others understand these services. I also had the opportunity to contribute to several micro-projects, where I applied my knowledge in a practical team environment.</p>
    },
    {
      title: "EY GDS Next Gen Internship",
      company: "EY",
      period: "Feb 2025 – Mar 2025",
      tasks: [
        "Full Stack Web Development with MERN stack.",
        "Included mentorship, master classes, and project work.",
      ],
      content: <p>As part of the EY GDS Next Gen Internship, I underwent intensive training in full-stack web development using the MERN (MongoDB, Express.js, React, Node.js) stack. The program included valuable mentorship from experienced professionals, master classes on industry best practices, and hands-on project work where I could apply my skills to real-world challenges.</p>
    },
];

export const education: Education[] = [
  {
    degree: "BE in Information Technology",
    institution: "Zeal College of Engineering, Pune",
    period: "Expected Apr 2026",
    details: "CGPA: 7.0",
    content: <p>I am currently pursuing a Bachelor of Engineering in Information Technology at Zeal College of Engineering. My coursework has provided me with a strong foundation in computer science, software development, and data structures. I am on track to graduate in April 2026 with a projected CGPA of 7.0.</p>
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Chhatrapati Shivaji Junior Science College, Jalgaon",
    period: "2022",
    details: "Percentage: 80.60%",
    content: <p>I completed my Higher Secondary Certificate from Chhatrapati Shivaji Junior Science College, where I focused on science and mathematics. I achieved a score of 80.60%, which provided me with the necessary background for my engineering studies.</p>
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Orion English Medium School, Jalgaon",
    period: "2020",
    details: "Percentage: 78.67%",
    content: <p>I completed my Secondary School Certificate from Orion English Medium School, achieving a score of 78.67%. This was a crucial step in my academic journey and where I first developed an interest in technology.</p>
  },
];
