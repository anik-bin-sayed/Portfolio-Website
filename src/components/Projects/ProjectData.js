import blogTitleImage from "../../assets/blog.png";
import portfolioTitleImage from "../../assets/portfolio.png";
import userManagementImage from "../../assets/user_management.jpg";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and fully responsive design.",
    image: portfolioTitleImage,
    demo: "#",
    github: "https://github.com/anik-bin-sayed/Portfolio-Website",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    featured: true,
    category: "frontend",
  },
  {
    id: 2,
    title: "Advanced User Management & Authentication System",
    description:
      "A robust full-stack application implementing secure user authentication and authorization using Django REST Framework and React. Includes JWT login, email verification, OTP-based login, password recovery, and role-based access control.",
    image: userManagementImage,
    demo: "#",
    github:
      "https://github.com/anik-bin-sayed/user_management_system_with_full_security",
    tech: [
      "React",
      "Redux Toolkit Query",
      "Lazy Loading",
      "Django",
      "Rest Framework",
      "Postgres",
      "tailwind css",
    ],
    featured: true,
    category: "fullstack",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "Feature-rich blogging platform built with React and Tailwind CSS. Includes markdown support, categories, search, and responsive design.",
    image: blogTitleImage,
    demo: "https://shofia-blog.netlify.app/",
    github: "https://github.com/anik-bin-sayed/Blog_website",
    tech: ["React", "Tailwind CSS", "Markdown"],
    featured: false,
    category: "frontend",
  },
];
export default projectsData;
