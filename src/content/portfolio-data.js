export const personalInfo = {
  name: "Jeet Sibesh Sahoo",
  role: "AI & Full Stack Developer",
  tagline: "Architecting intelligent AI pipelines, real-time communications, and high-performance web systems.",
  location: "Bhubaneswar, Odisha, India",
  email: "jeetsibeshsahoo3@gmail.com",
  phone: "+91 78488 29108",
  github: "https://github.com/JeetsibeshSahoo",
  linkedin: "https://linkedin.com/in/jeetsibesh-sahoo-8411b9274",
  status: "Available for new opportunities",
  bio: "Full stack developer specializing in React, Next.js, TypeScript, Node.js, and Python (FastAPI). Experienced in architecting production AI features—including RAG pipelines, ChromaDB vector stores, generative image pipelines, and real-time WebRTC/Socket.io systems. Proven track record of shipping 4+ client projects, optimizing latency by 35%, and writing maintainable, clean code.",
};

export const skillsData = [
  {
    category: "AI & LLM Architecture",
    description: "Designing intelligent pipelines, agentic retrieval, and generative media services.",
    skills: [
      { name: "LangChain & RAG", level: "Advanced" },
      { name: "Google Gemini 3.5 Flash", level: "Advanced" },
      { name: "Generative AI APIs", level: "Advanced" },
      { name: "ChromaDB Vector Store", level: "Advanced" },
      { name: "Pydantic v2", level: "Proficient" },
      { name: "Zero-Shot Classification", level: "Advanced" },
    ],
  },
  {
    category: "Frontend & Creative UI",
    description: "Building responsive, animated, accessible client-side interfaces.",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Redux Toolkit", level: "Proficient" },
      { name: "GSAP & ScrollTrigger", level: "Proficient" },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    description: "High-throughput APIs, asynchronous pipelines, and secure real-time messaging.",
    skills: [
      { name: "Python (FastAPI)", level: "Advanced" },
      { name: "Node.js & Express.js", level: "Advanced" },
      { name: "Socket.io (WebSockets)", level: "Advanced" },
      { name: "WebRTC (Audio/Video)", level: "Proficient" },
      { name: "RESTful API Architecture", level: "Advanced" },
      { name: "JWT & Bcrypt Security", level: "Advanced" },
    ],
  },
  {
    category: "Databases & Engineering Tools",
    description: "Persistent storage, vector indices, and modern developer tooling.",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Cursor & Antigravity", level: "Advanced" },
    ],
  },
];

export const projectsData = [
  {
    id: "enterprise-ai-hub",
    title: "Enterprise AI Knowledge & Support Automation Hub",
    badge: "Featured AI Project",
    period: "2026",
    summary:
      "A multi-tenant enterprise intelligence platform featuring a RAG knowledge assistant with zero-hallucination guards, RBAC document protection, and real-time SSE token streaming.",
    highlights: [
      "Architected multi-tenant RAG Knowledge Assistant with zero-hallucination validation and source citation tracking.",
      "Implemented ChromaDB vector store with metadata filtering, enforcing department-level Role-Based Access Control (RBAC).",
      "Built automated support-ticket triage engine using Google Gemini structured output, achieving 95% zero-shot classification accuracy.",
      "Engineered real-time token streaming via Server-Sent Events (SSE) with interactive dashboard and live theme switching.",
    ],
    tech: ["FastAPI", "LangChain", "Gemini 3.5 Flash", "ChromaDB", "React", "Pydantic v2"],
    github: "https://github.com/JeetsibeshSahoo",
    liveUrl: null,
  },
  {
    id: "ai-image-generator",
    title: "Full-Stack AI Image Generator",
    badge: "Generative AI & Optimization",
    period: "2025",
    summary:
      "A high-throughput text-to-image AI platform engineered with intelligent backend request handling that cut latency by 35% and maintains sub-2s responses under load.",
    highlights: [
      "Built full-stack AI web app connecting React.js UI to Node.js/Express.js backend integrated with Generative AI APIs.",
      "Designed a responsive, interactive UI handling 50+ concurrent user requests with under 2s average response time.",
      "Optimized backend AI API calls through request batching and caching, reducing image generation latency by 35%.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Generative AI API", "Tailwind CSS"],
    github: "https://github.com/JeetsibeshSahoo",
    liveUrl: null,
  },
  {
    id: "chartify-realtime",
    title: "Chartify — Real-Time Chat & Video Hub",
    badge: "Full Stack Real-Time & WebRTC",
    period: "2025",
    summary:
      "A full-stack communication suite featuring peer-to-peer audio/video calls via WebRTC, instant 1-to-1 messaging, and end-to-end encrypted media exchange.",
    highlights: [
      "Engineered one-to-one messaging with Socket.io real-time low-latency synchronization.",
      "Integrated WebRTC mesh peer connection for smooth audio and video streaming.",
      "Implemented JWT session authentication with Bcrypt cryptographic password hashing.",
      "Engineered secure photo and document sharing backed by Express.js and MongoDB clusters.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC", "JWT", "Bcrypt"],
    github: "https://github.com/JeetsibeshSahoo",
    liveUrl: null,
  },
];

export const experienceData = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "Pronexa Innovation Pvt Ltd",
    location: "Bhubaneswar, India",
    period: "Feb 2026 – Present",
    achievements: [
      "Collaborated with an agile team of 4 on client projects, driving daily stand-ups and code reviews to keep deliverables on track.",
      "Built and deployed end-to-end web applications with Next.js, React, Node.js, Express, and FastAPI across MongoDB and PostgreSQL.",
      "Developed 12+ secure REST APIs with JWT authentication and integrated them with responsive Tailwind CSS frontends.",
      "Optimized page rendering pipelines and API queries, reducing load times by ~20% and successfully delivering 4+ projects on schedule.",
      "Engineered enterprise AI features including RAG-based question-answering systems using LangChain, ChromaDB, and Gemini LLMs.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Saaragh Solutions Pvt Ltd",
    location: "Coimbatore, India (Remote)",
    period: "Nov 2025 – Feb 2026",
    achievements: [
      "Engineered and maintained full-stack web applications end-to-end with the engineering team using the MERN stack.",
      "Developed modular, reusable React.js components connected to backend REST APIs, prioritizing speed, responsiveness, and usability.",
      "Participated in daily stand-ups, sprint planning, and code reviews, staying aligned with the team to ship production features.",
    ],
  },
];

export const achievementsData = [
  {
    title: "2nd Prize — Smart India Hackathon 2023",
    description: "National-level hackathon honoring innovative problem solving, scalability, and robust system architecture.",
    year: "2023",
  },
  {
    title: "1st Prize — Robotics Tech Event",
    description: "Demonstrated real-time hardware-software synchronization, sensor algorithms, and robotic control.",
    year: "2023",
  },
  {
    title: "MERN Stack Web Development Certificate",
    description: "Full-stack web application engineering covering MongoDB, Express.js, React.js, and Node.js paradigms.",
    year: "2024",
  },
];

export const educationData = {
  degree: "Bachelor of Technology in Computer Science Engineering",
  institution: "Gandhi Institute of Excellent Technocrats",
  location: "Bhubaneswar, Odisha",
  period: "2022 – 2026",
  cgpa: "7.75",
};