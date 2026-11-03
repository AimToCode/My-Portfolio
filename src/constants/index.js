const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Current Focus",
    link: "#learning",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "AI Solutions", imgPath: "/images/ideas.svg" },
  { text: "Web Apps", imgPath: "/images/code.svg" },
  { text: "Algorithms", imgPath: "/images/concepts.svg" },
  { text: "Clean Code", imgPath: "/images/designs.svg" },
  { text: "Intelligent Systems", imgPath: "/images/ideas.svg" },
  { text: "Frontend Magic", imgPath: "/images/code.svg" },
  { text: "Problem Solving", imgPath: "/images/concepts.svg" },
  { text: "Future Tech", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Coding" },
  { value: 2, suffix: "", label: "Featured Projects" },
  { value: "C++ / DSA", suffix: "", label: "Data Structures & Algorithms" },
  { value: "B.Tech", suffix: "", label: "AI & Machine Learning" },
];

const projects = [
  {
    id: "nivaran",
    title: "Nivaran – AI-Powered Grievance Management System",
    subtitle: "Automatic complaint classification & urgency detection across 24 languages",
    role: "AI & Full Stack Developer",
    badge: "GovTech / AI Innovation",
    desc: "An intelligent, accessible citizen grievance portal that automatically categorizes submitted issues to the relevant governmental departments and flags emergency priority tickets instantly.",
    features: [
      "AI-based automated complaint categorization and routing",
      "Department and urgency detection to accelerate response times",
      "Multilingual NLP support covering 24 Indian languages",
      "Intuitive citizen dashboard with real-time resolution metrics",
    ],
    tech: ["Python", "AI Integration", "NLP", "JavaScript", "HTML5", "CSS3"],
    liveDemo: "https://niv-ai-eight.vercel.app/",
    imgPath: "/images/nivaran.png",
  },
  {
    id: "medisimple",
    title: "MediSimple – AI Medical Report Simplifier",
    subtitle: "Turning complex clinical diagnostic reports into clear, actionable health insights",
    role: "Team Leader | Team Elite",
    badge: "Healthcare AI",
    desc: "An AI healthcare assistant designed to bridge the gap between complex diagnostic lab reports and everyday patients. Extracts clinical entities, clarifies medical terminology, and provides patient-friendly guidance.",
    features: [
      "Upload multi-page medical reports seamlessly (up to 4 pages)",
      "Extracts patient vitals, doctor notes, and hospital details",
      "Simplifies intricate medical jargon into plain, easy-to-understand language",
      "Flags critical findings and provides general guidance on recommended next steps",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "AI Integration", "Prompt Engineering"],
    liveDemo: "https://medi-simple--imkhushiyadav0.replit.app/",
    imgPath: "/images/medisimple.png",
  },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/ideas.svg",
    title: "AI & Intelligent Systems",
    desc: "Passionate about integrating modern AI models, NLP, and Machine Learning workflows to build assistive, human-centric solutions.",
  },
  {
    imgPath: "/images/code.svg",
    title: "Modern Frontend Engineering",
    desc: "Designing fast, responsive, and aesthetically pleasing user interfaces with React.js, modern JavaScript, and Tailwind CSS.",
  },
  {
    imgPath: "/images/concepts.svg",
    title: "DSA & Problem Solving",
    desc: "Strong computer science fundamentals with Data Structures and Algorithms in C++, OOP principles, and clean modular code design.",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    category: "Frontend",
  },
  {
    name: "Python & AI Enthusiast",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    category: "AI / ML & Scripting",
  },
  {
    name: "C / C++ & DSA",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    category: "Core Algorithms",
  },
  {
    name: "Interactive Web (Three.js)",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
    category: "3D & Creative",
  },
  {
    name: "Git & Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
    category: "Tools & Collaboration",
  },
];

const expCards = [
  {
    review: "Led Team Elite to design and deploy MediSimple, an AI-powered healthtech tool that breaks down dense medical terminology for common patients.",
    imgPath: "/images/medisimple.png",
    logoPath: "/images/logo1.png",
    title: "Team Leader — Team Elite",
    date: "MediSimple Project",
    responsibilities: [
      "Spearheaded the project roadmap, architecture, and task distribution for Team Elite.",
      "Engineered the multi-page medical report parsing pipeline and AI prompt workflows.",
      "Implemented responsive UI components to ensure seamless accessibility across devices.",
    ],
  },
  {
    review: "Architected the multilingual grievance classification workflow for Nivaran, enabling citizen issues to be routed to suitable government departments automatically.",
    imgPath: "/images/nivaran.png",
    logoPath: "/images/logo2.png",
    title: "AI & Full-Stack Developer",
    date: "Nivaran Project",
    responsibilities: [
      "Engineered automated complaint classification and department assignment using NLP models.",
      "Integrated multilingual language support across 24 Indian languages.",
      "Built clean, high-performance web dashboards for ticket submission and tracking.",
    ],
  },
  {
    review: "Bansal College of Engineering, Mandideep, Bhopal, MP • First-Year CGPA: 7.8",
    imgPath: "/images/bansal-college.jpg",
    logoPath: "/images/education-cap.svg",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Bansal College of Engineering, Mandideep, Bhopal, Madhya Pradesh",
    date: "2025 – 2029 (1st Year)",
    sectionLabel: "Coursework & Highlights",
    responsibilities: [
      "First-year CGPA: 7.8",
      "Pursuing B.Tech in Artificial Intelligence & Machine Learning.",
      "Learning C++, Python, Data Structures & Algorithms, and Web Development.",
      "Interested in AI/ML, software development, and problem-solving.",
      "3rd Runner-up at Bansal Hack Fusion, Bansalotsav.",
    ],
  },
];

const learningFrontiers = [
  {
    icon: "🤖",
    tag: "Next-Gen AI",
    title: "Agentic AI & Autonomous Systems",
    desc: "Diving into multi-agent workflows, autonomous tool-use agents, LLM orchestration, and prompt engineering architectures to build assistive AI that acts independently.",
    skills: ["Agentic Workflows", "LLM APIs", "Multi-Agent Systems", "Prompt Chains"],
    progress: "Active Exploration",
    progressColor: "text-purple-300 bg-purple-500/15 border-purple-500/30",
  },
  {
    icon: "⚡",
    tag: "Modern Web",
    title: "Advanced Full-Stack Engineering",
    desc: "Mastering advanced React concepts, server-side rendering, scalable backend integrations, and modern state architectures to build high-performance web products.",
    skills: ["Advanced React", "Full-Stack Dev", "REST & FastAPIs", "Performance Tuning"],
    progress: "Deepening Skills",
    progressColor: "text-cyan-300 bg-cyan-500/15 border-cyan-500/30",
  },
  {
    icon: "🧩",
    tag: "Core Computer Science",
    title: "Competitive Programming & DSA",
    desc: "Strengthening deep algorithmic foundations in C++ — mastering trees, graphs, dynamic programming, and space/time optimization for rigorous problem solving.",
    skills: ["Data Structures (C++)", "Algorithms", "DP & Graphs", "Complexity Analysis"],
    progress: "Continuous Practice",
    progressColor: "text-emerald-300 bg-emerald-500/15 border-emerald-500/30",
  },
];

const testimonials = learningFrontiers;

const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/github.svg",
    url: "https://github.com/AimToCode",
    label: "Explore GitHub (@AimToCode)",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/lakshya803/",
    label: "Connect on LinkedIn",
  },
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/aim2_code?vrfl=MTh1NmdwZ3djd3Nybw==",
    label: "Follow on Instagram (@aim2_code)",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  projects,
  expCards,
  testimonials,
  learningFrontiers,
  socialImgs,
  techStackIcons,
  navLinks,
};
