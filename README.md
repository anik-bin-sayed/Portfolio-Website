# Portfolio Website

A modern, fully responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and an interactive UI designed to showcase projects and professional experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging animations and transitions for enhanced user experience
- **Dark Theme**: Eye-catching dark mode with gradient accents
- **Interactive Hero Section**: 3D tilt effect and particle effects on the profile image
- **Project Showcase**: Grid layout with project filtering by category
- **Skills Display**: Categorized skills section with smooth animations
- **Contact Form**: Integrated contact form with form validation
- **Social Links**: Quick access to social media profiles
- **Fast Loading**: Optimized performance with lazy loading and code splitting

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Forms**: Formspree (for email handling)
- **Icons**: React Icons
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── About/          # About me section with photo and biography
│   ├── hero/           # Hero section with profile image and CTA buttons
│   ├── Projects/       # Projects grid with filtering and details
│   ├── Skill/          # Skills display section
│   ├── Contract/       # Contact form component
│   ├── Footer/         # Footer section
│   ├── Navbar/         # Navigation bar with mobile menu
│   ├── Loader/         # Loading spinner component
│   └── utils/          # Utility components (Links, Social Icons)
├── Pages/              # Page components
│   ├── Resume.jsx      # Main resume/portfolio page
│   └── NotFound/       # 404 page
├── Routes/             # Route configuration
├── assets/             # Images and static assets
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/anik-bin-sayed/Portfolio-Website.git
cd Portfolio-Website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Configuration

### Contact Form Setup

The contact form uses Formspree for email handling. To set it up:

1. Go to [Formspree](https://formspree.io/)
2. Create a new form
3. Replace the `formId` in [src/components/Contract/index.jsx](src/components/Contract/index.jsx) with your Formspree ID

### Customization

- **Social Links**: Update links in [src/components/utils/SocialIcons/SocialIcons.jsx](src/components/utils/SocialIcons/SocialIcons.jsx)
- **Navigation Menu**: Modify items in [src/components/Navbar/navUtils.js](src/components/Navbar/navUtils.js)
- **Skills Data**: Edit [src/components/Skill/skillData.js](src/components/Skill/skillData.js)
- **Projects**: Update [src/components/Projects/ProjectData.js](src/components/Projects/ProjectData.js)
- **About Content**: Modify text in [src/components/About/index.jsx](src/components/About/index.jsx)

## 🎨 Styling

The project uses Tailwind CSS with custom configuration. Key styling features:

- Custom dark theme colors
- Gradient text effects
- Blur and backdrop effects
- Smooth transitions and animations
- Responsive breakpoints (mobile, tablet, desktop)

## 🚢 Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add `_redirects` file in the public folder for proper routing

### Vercel

1. Import your repository to Vercel
2. Vercel automatically detects Vite configuration
3. Deploy with a single click

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🔍 Code Quality

The project includes ESLint configuration for code consistency. Run:

```bash
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Anik Bin Sayed**

- GitHub: [@anik-bin-sayed](https://github.com/anik-bin-sayed)

## 🙏 Acknowledgments

- React community
- Tailwind CSS for styling utilities
- Vite for fast build tooling
- All contributors and supporters

## 📞 Contact

For questions or inquiries, feel free to reach out through:

- Email: Use the contact form on the portfolio
- GitHub: [@anik-bin-sayed](https://github.com/anik-bin-sayed)

---

Made with ❤️ using React and Tailwind CSS
