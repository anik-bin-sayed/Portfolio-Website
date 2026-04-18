import blogTitleImage from "../../assets/blog.png";
import portfolioTitleImage from "../../assets/portfolio.png";
import userManagementImage from "../../assets/user_management.jpg";
import cmsImage from "../../assets/CMS.png";
import blogApplication from "../../assets/blog-app.png";

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
  {
    id: 4,
    title: "Mini Course management Project",
    description:
      "A modern Mini Course Management application built with React and Tailwind CSS, Django(Python). It enables users to efficiently manage courses with features like dynamic course creation, categorization, and search functionality. The project focuses on clean UI design, responsiveness, and a smooth user experience",
    image: cmsImage,
    demo: "https://drive.google.com/file/d/1wq7SFOn2UxFKPwWRMeU4D0-KCxfqq9UM/view?usp=sharing",
    github: "https://github.com/anik-bin-sayed/Full-stack-mini-CMS",
    tech: [
      "React",
      "Redux RTK Query",
      "Django",
      "Django Rest Framework",
      "Tailwind CSS",
    ],
    featured: false,
    category: "fullstack",
  },
  {
    id: 4,
    title: "Blog Application",
    description:
      "This application built with TypeScript, Tailwind CSS and Django(Python). It enables users to efficiently manage courses with features like dynamic course creation, categorization, and search functionality. The project focuses on clean UI design, responsiveness, and a smooth user experience",
    image: blogApplication,
    demo: "#",
    github: "https://github.com/anik-bin-sayed/Full-stack-blog-application",
    tech: [
      "React",
      "Redux RTK Query",
      "Django",
      "Django Rest Framework",
      "Tailwind CSS",
    ],
    featured: false,
    category: "fullstack",
  },
];
export default projectsData;
