import blogTitleImage from "../../assets/blog.png";
import e_commerceTitleImage from "../../assets/ecommerce.png";
import portfolioTitleImage from "../../assets/portfolio.png";

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
    title: "E-commerce App",
    description:
      "Full-stack MERN e-commerce platform with secure payment gateway, user authentication, product management, and order tracking.",
    image: e_commerceTitleImage,
    demo: "#",
    github: "#",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
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
