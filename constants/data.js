export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    problem: "Client needed a scalable online store with real-time inventory",
    solution:
      "Built a full-stack platform with Next.js, Stripe integration, and MongoDB",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "app",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Analytics platform needed intuitive data visualization",
    solution:
      "Created interactive dashboard with D3.js charts and real-time updates",
    stack: ["React", "D3.js", "TypeScript", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "app",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    problem: "Bank needed secure mobile-first experience",
    solution: "Developed React Native app with biometric auth and encryption",
    stack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Design System Library",
    category: "ui",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    problem: "Company needed consistent UI across products",
    solution: "Built comprehensive component library with Storybook",
    stack: ["React", "Storybook", "Tailwind", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "AI Chat Interface",
    category: "opensource",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    problem: "Open-source AI chat needed better UX",
    solution: "Redesigned UI with streaming responses and markdown support",
    stack: ["React", "OpenAI API", "WebSocket", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Real Estate Portal",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    problem: "Property listings needed better search and filters",
    solution: "Built map-based search with advanced filtering system",
    stack: ["React", "Mapbox", "GraphQL", "Node.js"],
    github: "#",
    live: "#",
  },
];

export const services = [
  {
    title: "Web Development",
    icon: "Globe",
    description: "Full-stack web applications with modern frameworks",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Performance Tuned",
      "API Integration",
    ],
    price: "From $3,000",
  },
  {
    title: "UI/UX Design",
    icon: "Palette",
    description: "Beautiful, intuitive interfaces that users love",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "From $2,000",
  },
  {
    title: "API Development",
    icon: "Database",
    description: "Scalable backend systems and RESTful APIs",
    features: [
      "Database Design",
      "Authentication",
      "Documentation",
      "Cloud Deploy",
    ],
    price: "From $2,500",
  },
  {
    title: "Custom Solutions",
    icon: "Code",
    description: "Tailored development for unique business needs",
    features: ["Consulting", "MVP Development", "Code Review", "Team Training"],
    price: "Custom Quote",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    company: "TechCorp",
    text: "Exceptional work on our platform redesign. The attention to detail and technical expertise exceeded expectations.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "StartupXYZ",
    text: "Delivered our MVP ahead of schedule. The code quality and documentation were outstanding.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder",
    company: "DesignStudio",
    text: "Transformed our vision into reality. Professional, responsive, and incredibly skilled.",
    rating: 5,
  },
];

export const techStack = [
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", color: "from-slate-400 to-slate-600" },
  { name: "TypeScript", color: "from-blue-500 to-blue-600" },
  { name: "Node.js", color: "from-green-500 to-green-600" },
  { name: "Tailwind", color: "from-cyan-300 to-blue-400" },
  { name: "MongoDB", color: "from-green-400 to-green-600" },
  { name: "PostgreSQL", color: "from-blue-400 to-blue-600" },
  { name: "AWS", color: "from-orange-400 to-orange-600" },
];

export const experience = [
  {
    year: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise web applications",
  },
  {
    year: "2021 - 2023",
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    description: "Built responsive websites for Fortune 500 clients",
  },
  {
    year: "2019 - 2021",
    title: "Junior Developer",
    company: "StartUp Labs",
    description: "Developed features for SaaS products",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices for structuring large React projects with TypeScript and modern tooling.",
    date: "Oct 10, 2024",
    readTime: "8 min read",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Advanced techniques for creating responsive, maintainable designs with Tailwind.",
    date: "Oct 5, 2024",
    readTime: "6 min read",
    category: "CSS",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "API Design Best Practices",
    excerpt:
      "Creating RESTful APIs that are intuitive, secure, and performant.",
    date: "Sep 28, 2024",
    readTime: "10 min read",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  },
];

export const navLinks = [
  "home",
  "about",
  "projects",
  "services",
  "blog",
  "contact",
];

export const socialLinks = [
  { icon: "Github", href: "#" },
  { icon: "Linkedin", href: "#" },
  { icon: "Mail", href: "#" },
];

export const contactInfo = [
  {
    icon: "Mail",
    title: "Email",
    value: "horlabodehyibrahim@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=horlabodehyibrahim@gmail.com",
  },
  {
    icon: "Phone",
    title: "Phone",
    value: "+234 810 887 9508",
    href: "tel:+2348108879508",
  },
  {
    icon: "Globe",
    title: "Social Links",
    value: null,
    socials: [
      { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
      { name: "GitHub", href: "https://github.com/shuddy05" },
      { name: "Twitter", href: "https://twitter.com/undefined__05" },
    ],
  },
];

export const projectCategories = ["all", "web", "app", "ui", "opensource"];
